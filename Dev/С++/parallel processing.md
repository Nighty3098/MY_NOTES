---
tags:
  - CPP
---
One of the methods for high-performance data processing is parallel processing in multiple threads (threads).

Multiple threads can process data faster than a single thread by a factor equal to the number of threads. In C++, threads are implemented natively, so let's discuss the implementation of a specific task of multithreaded processing in this language.

## Message Queue Pattern

The message queue is a commonly used pattern in system design. Its essence lies in having a container that implements the "first in — first out" ("FIFO") principle. Messages are placed into the queue in a certain order and can then be extracted from it in the same order.

At the same time, messages from the queue must be extracted and processed. The question raised in this article is how to best implement this in the fast language C++ and why. What follows is an individual opinion. Comments may supplement the material.

## Periodic Processing

The simplest variant of processing would be a single thread that extracts messages and processes them within its body. The code for such a handler might look something like this:

```cpp
#include ‹custom_queue.h› // fictional header
#include ‹thread.h›
#include ‹chrono.h›
void process(Message&& /*msg*/) {
// your processing logic
}

int main() {
    CustomQueue queue("connector_id"); // connecting to the queue
    while(true) {
        while (!queue.empty()) {
            process(std::move(queue.top()));
            queue.pop();
        }
        std::this_thread::sleep_for(std::chrono::seconds(1)); 
    }
    return 0;
}
```

This code will simply extract messages from the queue at a frequency of once every second. The downside here is obvious — if a delay in loading messages from the queue is required that is shorter than the message processing time, then such an implementation will not be suitable. In low-latency systems, like high-frequency trading or games, another implementation will be necessary.

## Event-Driven Processing System

The essence of the following code is to process messages as they arrive, rather than as a result of periodic actions. Here is the code:

```cpp
#include ‹custom_queue.h›
#include ‹atomic›
#include ‹csignal›
#include ‹functional›
#include ‹thread.h›

void processQueue(CustomQueue& queue, std::atomic‹bool>& finishing) {
    auto msg_max_timeout = std::chrono::seconds(1);
    while(!finishing) {
        while (auto msg = queue.top(msg_max_timeout)) {    
            if (msg) {
                // your processing logic
                queue.pop();
            }
        }
    }
}

static std::atomic‹bool> finishing(false);

void signal_handler(int signal) { // handler for "CTRL+C"
    finishing = true;
}

int main() {
    std::signal(SIGINT, signal_handler);

    CustomQueue queue("connector_id");
    std::vector‹std::thread› workers(
        std::bind(processQueue, std::ref(queue), std::ref(finishing)),
        10 /* number of processing threads */
    );
    for(auto& worker : workers) {
        worker.join(); // legal termination of all threads
    }
    return 0;
}
```

In this example, the queue blocks on "queue.top" until at least one message arrives, but no longer than the msg_max_timeout. If a message arrives, one of the processing threads will receive it. The others will remain blocked at the line with "queue.top".

If another message arrives during the processing time of one message by one thread, then the next thread starts processing it.

In this example, additional requirements are placed on the structure of the queue:

- It must be thread-safe.
- It must implement blocking for a group of threads in its code until an event occurs or for a limited time (needed for legal termination of the program).

Let's consider how such a queue might be implemented:

```cpp
template ‹class Message›
class CustomQueue {
private:
    std::list‹Message› messages;
    std::mutex mtx;
    std::condition_variable cond;

    void push(Message&& msg) {
        {
            std::unique_lock‹std::mutex› lock(mtx);
            messages.emplace_front(msg);
        }
        cond.notify_one();
    }

public:
    Message& top(std::chrono::duration timeout=std::chrono::seconds(0)) {
        std::unique_lock‹std::mutex› lock(mtx);
        auto now = std::chrono::system_clock::now();
        while(cond.wait_for(lock, timeout,
            [&now, &timeout]() {
                return (now + timeout) > 
                std::chrono::system_clock::now() &&
                messages.empty();
            } // waiting for an event or timeout - checking spurious wakeup predicate
        ) 
        {
        } 
        return messages.empty() ? Message::default : messages.front();
    }

    void pop() {
        std::unique_lock‹std::mutex› lock(mtx);
        if (!messages.empty()) {
            messages.pop_back();
        }
    }
};
```

Such a queue will be thread-safe since the internal container with messages is protected by a mutex. When calling the push method (adding to the queue), only one thread waiting on the conditional variable will be awakened.

Additionally, the code accounts for spurious wakeups: conditional variable wait may unexpectedly unblock command threads.

To control this, a predicate has been added to the last argument of the call. It periodically checks for messages in the queue or whether the timeout has been exceeded.

--- 

Feel free to ask if you need any further assistance!