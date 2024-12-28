---
tags:
  - qt
---

Threads in an operating system are a very simple thing. Write a function, perhaps tie some data around it, and place it in a newly created thread. If necessary, use a mutex or other method to safely interact with the thread. Whether it's Win32, POSIX, or other threads, they all basically work the same way and are quite foolproof.

Those who have discovered the joys of the Qt framework may assume that threads in Qt work exactly the same way, and they would be right. However, there are several different ways to use threads in Qt, and it may not be obvious which approach to choose. The article “Multithreading Techniques in Qt” compares the different approaches.

This part of the article demonstrates one of these methods: the QThread + QObject worker. This method is intended for use cases that involve event-driven programming and signals + slots between threads.

Use with the Worker class
The main thing to remember when using QThread in this example is that it is not a thread. It is a wrapper around a thread object. This wrapper provides signals, slots, and methods to easily use the thread object in a Qt project. To use it, prepare a QObject subclass with all the functionality you need in it. Then create a new QThread instance, place the QObject in it using moveToThread(QThread*) of the QObject instance, and call start() on the QThread instance. That's it. You set up the appropriate signal/slot connections so that it exits properly and all that, and that's it.

Worker class declaration
For a basic example, take a look at the Worker class declaration:

```cpp
class Worker : public QObject {
    Q_OBJECT
public:
    Worker();
    ~Worker();
public slots:
    void process();
signals:
    void finished();
    void error(QString err);
private:
    // add your variables here
};
```

We add at least one public slot that will be used to start the instance so that it will start processing data after the thread is started. Now let's see what the implementation of this base class looks like.

```cpp
Worker::Worker() { // Constructor
    // here you can copy data from constructor arguments to internal variables.
}

Worker::~Worker() { // Destructor
    // release resources
}

void Worker::process() { // Processing. Start processing the data.
    // resource allocation with new here
    qDebug(“Hello World!”);
    emit finished();
}
```

Although this Worker class does nothing special, it does contain all the necessary elements. It starts processing when its main function is called, in this case process(), and when it is finished it emits a finished() signal, which will then be used to shut down the QThread instance it resides in.

By the way, there is one very important thing to note here: you should NEVER allocate heap objects (using new) in the QObject class constructor, because this allocation takes place in the main thread and not in a new QThread instance, which means that the newly created object will belong to the main thread and not to the QThread instance. This will cause your code to fail. Instead, allocate such resources in a main function slot, such as process(), because when it is called, the object will be in the new thread instance and will therefore own the resource.

Creating a new Worker instance
Now let's see how to use this new construct by creating a new Worker instance and placing it on a QThread instance:

```cpp
QThread* thread = new QThread();
Worker* worker = new Worker();
worker->moveToThread(thread);
connect( worker, &Worker::error, this, &MyClass::errorString);
connect( thread, &QThread::started, worker, &Worker::process);
connect( worker, &Worker::finished, thread, &QThread::quit);
connect( worker, &Worker::finished, worker, &Worker::deleteLater);
connect( thread, &QThread::finished, thread, &QThread::deleteLater);
thread->start();
```

The connect() series is the most important part here. The first connect() line connects the error message signal from the worker to the error handling function in the main thread. The second connects the started() thread signal to the processing() slot in the worker, causing it to start.

Then cleanup: when the worker instance produces finished(), as we did in the example, it signals the thread to exit, that is, to finish. We then mark the worker instance with the same finished() signal for deletion. Finally, to prevent nasty failures because the thread has not yet fully closed on deletion, we connect the finished() thread (not the worker!) to its own deleteLater() slot. This will cause the thread to be deleted only after it has fully closed.