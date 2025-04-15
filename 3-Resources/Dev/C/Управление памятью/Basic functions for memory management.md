---
tags:
  - CPP
  - C
  - MemUsage
  - Optimization
---
## Basic functions for memory management

The following functions are used in C to work with dynamic memory:

- **`malloc`**: allocates a specified number of bytes and returns a pointer to the first byte of the allocated area.
- **`calloc`**: allocates memory for an array of elements and initializes them to zeros.
- **`realloc`**: changes the size of a previously allocated memory area.
- **`free`**: frees previously allocated memory.

### Example of using `malloc`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
int *array;
int n = 5;

// Allocate memory for an array of 5 integers
array = (int*) malloc(n * sizeof(int));
if (array == NULL) {
printf("Memory allocation error\n");
return 1; // Terminate the program on error
}

// Initialize the array
for (int i = 0; i < n; i++) {
array[i] = i + 1;
}

// Print the array values
for (int i = 0; i < n; i++) {
printf("%d ", array[i]);
}

// Free memory
free(array);

return 0;
}
```

### Example of using `calloc`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
int *array;
int n = 5;

// Allocate memory for an array of 5 integers with zero initialization
array = (int*) calloc(n, sizeof(int));
if (array == NULL) {
printf("Memory allocation failed\n");
return 1;
}

// Print array values
for (int i = 0; i < n; i++) {
printf("%d ", array[i]); // All elements will be 0
}

// Free memory
free(array);

return 0;
}
```

### Example of `realloc`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
int *array;
int n = 5;

// Initial memory allocation
array = (int*) malloc(n * sizeof(int));

// Resize array
n = 10;
array = (int*) realloc(array, n * sizeof(int));

if (array == NULL) {
printf("Error changing memory size\n");
return 1;
}

// Initialize new elements
for (int i = 5; i < n; i++) {
array[i] = i + 1;
}

// Print array values
for (int i = 0; i < n; i++) {
printf("%d ", array[i]);
}

// Free memory
free(array);

return 0;
}
```

## Manual memory management issues

### Memory leaks

A memory leak occurs when a program fails to free memory that is no longer needed. This can lead to the program running out of available RAM.

### Dangling references

Dangling references occur when a pointer points to a memory location that has been freed. Attempting to access such a region may result in undefined behavior.

### Error examples

```c
#include <stdio.h>
#include <stdlib.h>

void example() {
int *ptr = (int*) malloc(sizeof(int)); // Allocate memory

if (ptr == NULL) {
printf("Error allocating memory\n");
return;
}

*ptr = 42;

free(ptr); // Free memory

// ptr is now a dangling pointer
}

int main() {
example();
// Here ptr is no longer accessible, attempting to access it will result in an error.
return 0;
}
```


[1] https://studfile.net/preview/3368742/
[2] https://ru.wikipedia.org/wiki/%D0%A1%D0%B1%D0%BE%D1%80%D0%BA%D0%B0_%D0%BC%D1%83%D1%81%D0%BE%D1%80%D0%B0
[3] https://alexgyver.ru/lessons/dynamic-memory/
[4] https://habr.com/ru/articles/489360/
[5] https://studfile.net/preview/1825445/page:9/
[6] https://ravesli.com/urok-85-dinamicheskoe-vydelenie-pamyati-operatory-new-i-delete/
[7] https://habr.com/ru/articles/857316/
[8] https://learn.microsoft.com/ru-ru/dotnet/standard/automatic-memory-management