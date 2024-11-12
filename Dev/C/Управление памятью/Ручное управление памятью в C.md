---
tags:
  - CPP
  - C
  - MemUsage
  - Optimization
---
## Основные функции для управления памятью

В C используются следующие функции для работы с динамической памятью:

- **`malloc`**: выделяет заданное количество байт и возвращает указатель на первый байт выделенной области.
- **`calloc`**: выделяет память для массива элементов и инициализирует их нулями.
- **`realloc`**: изменяет размер ранее выделенной области памяти.
- **`free`**: освобождает ранее выделенную память.

### Пример использования `malloc`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *array;
    int n = 5;

    // Выделение памяти для массива из 5 целых чисел
    array = (int*) malloc(n * sizeof(int));
    if (array == NULL) {
        printf("Ошибка выделения памяти\n");
        return 1; // Завершение программы при ошибке
    }

    // Инициализация массива
    for (int i = 0; i < n; i++) {
        array[i] = i + 1;
    }

    // Вывод значений массива
    for (int i = 0; i < n; i++) {
        printf("%d ", array[i]);
    }
    
    // Освобождение памяти
    free(array);
    
    return 0;
}
```

### Пример использования `calloc`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *array;
    int n = 5;

    // Выделение памяти для массива из 5 целых чисел с инициализацией нулями
    array = (int*) calloc(n, sizeof(int));
    if (array == NULL) {
        printf("Ошибка выделения памяти\n");
        return 1;
    }

    // Вывод значений массива
    for (int i = 0; i < n; i++) {
        printf("%d ", array[i]); // Все элементы будут равны 0
    }
    
    // Освобождение памяти
    free(array);
    
    return 0;
}
```

### Пример использования `realloc`

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *array;
    int n = 5;

    // Первоначальное выделение памяти
    array = (int*) malloc(n * sizeof(int));
    
    // Изменение размера массива
    n = 10;
    array = (int*) realloc(array, n * sizeof(int));
    
    if (array == NULL) {
        printf("Ошибка изменения размера памяти\n");
        return 1;
    }

    // Инициализация новых элементов
    for (int i = 5; i < n; i++) {
        array[i] = i + 1;
    }

    // Вывод значений массива
    for (int i = 0; i < n; i++) {
        printf("%d ", array[i]);
    }
    
    // Освобождение памяти
    free(array);
    
    return 0;
}
```

## Проблемы ручного управления памятью

### Утечки памяти

Утечка памяти происходит, когда программа не освобождает память, которая больше не нужна. Это может привести к исчерпанию доступной оперативной памяти.

### Висячие ссылки

Висячие ссылки возникают, когда указатель указывает на область памяти, которая была освобождена. Попытка доступа к такой области может привести к неопределенному поведению программы.

### Примеры ошибок

```c
#include <stdio.h>
#include <stdlib.h>

void example() {
    int *ptr = (int*) malloc(sizeof(int)); // Выделение памяти
    
    if (ptr == NULL) {
        printf("Ошибка выделения памяти\n");
        return;
    }

    *ptr = 42;
    
    free(ptr); // Освобождение памяти
    
    // ptr теперь висячий указатель
}

int main() {
   example();
   // Здесь ptr больше не доступен, попытка доступа приведет к ошибке.
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