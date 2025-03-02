---
tags:
  - CPP
  - MemUsage
  - Optimization
---
## Main Memory Management Operators

In C++, the following operators are used for dynamic memory management:

- **`new`**: allocates memory for a single object or an array of objects and calls the constructor.
- **`delete`**: frees memory occupied by a single object and calls the destructor.
- **`new[]`**: allocates memory for an array of objects.
- **`delete[]`**: frees memory occupied by an array of objects.

## Example of using `new` and `delete`

```cpp
#include <iostream>

class MyClass {
public:
    MyClass() {
        std::cout << "Constructor called" << std::endl;
    }
    ~MyClass() {
        std::cout << "Destructor called" << std::endl;
    }
};

int main() {
    // Allocating memory for a single object
    MyClass* obj = new MyClass();

    // Freeing memory
    delete obj;

    return 0;
}
```

## Example of using `new[]` and `delete[]`

```cpp
#include <iostream>

int main() {
    int n = 5;
    
    // Allocating memory for an array of 5 integers
    int* array = new int[n];

    // Initializing the array
    for (int i = 0; i < n; i++) {
        array[i] = i + 1;
    }

    // Printing array values
    for (int i = 0; i < n; i++) {
        std::cout << array[i] << " ";
    }
    
    std::cout << std::endl;

    // Freeing memory
    delete[] array;

    return 0;
}
```

## Problems with Manual Memory Management

## Memory Leaks

A memory leak occurs when dynamically allocated memory is not freed after use. This can lead to a gradual decrease in free memory and slowdown of the program. Causes of leaks may include:

- Incorrect use of `new` and `delete` operators.
- Forgetting to free memory returned from functions.
- Losing pointers to allocated memory.

## Example of a memory leak

```cpp
#include <iostream>

void memoryLeak() {
    int* leak = new int[10]; // Memory allocation
    // No delete[] call here, which leads to a memory leak
}

int main() {
    memoryLeak();
    
    // The program will terminate, but memory won't be freed
    return 0;
}

```

## Dangling References

Dangling references (or dangling pointers) occur when a pointer points to a memory area that has been freed. Attempting to access such an area can lead to undefined program behavior.

## Example of a dangling pointer

```cpp
#include <iostream>

int main() {
    int* ptr = new int(42);
    
    delete ptr; // Freeing memory
    
    // Now ptr is a dangling pointer
    std::cout << *ptr; // Undefined behavior

    return 0;
}

```
## Tips for Preventing Memory Management Errors

1. **Use smart pointers**: Smart pointers (e.g., `std::unique_ptr`, `std::shared_ptr`) automatically manage object lifecycles and free memory when going out of scope.

```cpp
#include <iostream>
#include <memory>

class MyClass {
public:
    MyClass() { std::cout << "Constructor called" << std::endl; }
    ~MyClass() { std::cout << "Destructor called" << std::endl; }
};

int main() {
    std::unique_ptr<MyClass> obj(new MyClass());
    // The object will be automatically deleted when going out of scope
    return 0;
}
```

1. **Regularly check code for leaks**: Use code analysis and debugging tools such as Valgrind or AddressSanitizer.
2. **Follow allocation and deallocation rules**: Always make sure that each `new` call has a corresponding `delete` call, and each `new[]` call has a corresponding `delete[]` call.