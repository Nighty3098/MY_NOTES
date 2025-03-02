---
tags:
  - CPP
  - Pointers
---


Pointers are one of the fundamental tools in C++, providing flexibility and control over memory. However, their misuse can lead to serious errors. In this article, we will cover the basics of working with pointers, manual memory management, and related aspects.

---

## What Are Pointers?

A **pointer** is a variable that stores the address of another variable in memory. It allows:
- Indirect access to data.
- Dynamic allocation and deallocation of memory.
- Efficient work with arrays and data structures.

### Declaration and Initialization

```cpp
int x = 10;
int* ptr = &x; // ptr stores the address of x
```

Here, `ptr` points to the variable `x`. To access the value, the **dereference operator** `*` is used:

```cpp
cout << *ptr; // Outputs 10
```

---

## Manual Memory Management

In C++, memory can be managed manually using the `new` and `delete` operators.

### Memory Allocation: The `new` Operator

```cpp
int* ptr = new int; // Allocates memory for a single int
*ptr = 42;          // Assigns a value
```

For arrays, `new[]` is used:

```cpp
int* arr = new int[5]; // Dynamic array of 5 elements
```

### Memory Deallocation: The `delete` Operator

Every call to `new` must be matched with `delete`:

```cpp
delete ptr;   // Frees memory for a single object
delete[] arr; // Frees memory for an array
```

**Important:** Mismatched types (e.g., using `delete` instead of `delete[]`) lead to undefined behavior.

---

## Working with Pointers
### Modifying Values Through Pointers
```cpp
int a = 5;
int* p = &a;
*p = 20; // Now a = 20
```

### Pointers to Pointers

Pointers can store addresses of other pointers:

```cpp
int** pp = &p; // pp points to pointer p
```

### Pointers and Arrays

An array name is a pointer to its first element:

```cpp
int staticArr[3] = {1, 2, 3};
int* dynamicArr = new int[3]{4, 5, 6};
cout << *(staticArr + 1); // Outputs 2
```

---

## Common Mistakes

1. **Memory Leaks**:
   ```cpp
   void leak() {
       int* ptr = new int(100);
       // Forgot to call delete ptr;
   }
   ```
   The memory allocated for `ptr` is never freed.

4. **Dangling Pointers**:
   ```cpp
   int* p = new int(10);
   delete p;
   cout << *p; // Accessing freed memory!
   ```
   **Solution:** After `delete`, assign the pointer to `nullptr`.

7. **Double Deletion**:
   ```cpp
   delete p;
   delete p; // Error: double deletion
   ```

---

## Best Practices

1. **Initialize Pointers**:
   Assign `nullptr` upon declaration to avoid accidental access:
   ```cpp
   int* ptr = nullptr;
   ```

2. **Check Pointers Before Use**:
   ```cpp
   if (ptr != nullptr) {
       *ptr = 5;
   }
   ```

3. **Use Smart Pointers**:
   In modern C++, it is recommended to use `unique_ptr`, `shared_ptr`, and `weak_ptr` for automatic memory management:
   ```cpp
   #include <memory>
   std::unique_ptr<int> smartPtr = std::make_unique<int>(42);
   // Memory is automatically freed
   ```

4. **Avoid Raw Pointers Where Possible**:
   Use STL containers (e.g., `std::vector`) instead of dynamic arrays.
