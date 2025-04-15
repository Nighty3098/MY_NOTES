---
tags:
  - CPP
---
# EN VERSION:

## Complete Search

Complete search (also known as "brute force" or "recursive backtracking") is a method of solving problems by traversing the entire search space. More precisely, throughout the algorithm, we prune parts of the search space that we believe will not lead to the desired solution. In competitive programming, using Complete Search will likely result in exceeding the time limit (Time Limit Exceeded — TLE). However, it is a good strategy for problems with small input sizes.

### Example: The 8 Queens Problem

We need to place 8 queens on a chessboard such that no queen attacks another. In the simplest solution, we would have to iterate through 64 billion combinations and select 8–4 billion possible arrangements. A better approach is to place each queen in a separate column, reducing the number of possibilities to 8⁸ — ~17 million. However, the best approach is to place each queen in a separate row and column, resulting in 8! — 40 thousand possible combinations. In the implementation below, we assume that each queen occupies a separate column and calculate the row number for each of the 8 queens.

```cpp
#include <cstdlib>
#include <cstdio>
#include <cstring>

using namespace std;

// row[8]: row number for each queen
// TC: TraceBack counter
// (a, b): position of the first queen at (r=a, c=b)
int row[8], TC, a, b, line_counter;

bool place(int r, int c)
{  
   // Check previously placed queens
   for (int prev = 0; prev < c; prev++)
   {
       // Check if rows or diagonals match
       if (row[prev] == r || (abs(row[prev] - r) == abs(prev - c)))
           return false;
   }
   return true;
}

void backtrack(int c)
{
   // Possible solution; the first queen is at (a, b)
   if (c == 8 && row[b] == a)
   {
       printf("%2d %d", ++line_counter, row[0] + 1);
       for (int j = 1; j < 8; j++) printf(" %d", row[j] + 1);
       printf("\n");
   }
   // Try all possible rows
   for (int r = 0; r < 8; r++)
   {
       if (place(r, c))
       {
           row[c] = r; // place the queen in this column and row
           backtrack(c + 1); // move to the next column and recurse
       }
   }
}

int main()
{
    scanf("%d", &TC);
    while (TC--)
    {
       scanf("%d %d", &a, &b);
       a--; b--; // zero-based indexing

       memset(row, 0, sizeof(row));
       line_counter = 0;
       printf("SOLN\tCOLUMN\n");
       printf(" # 1 2 3 4 5 6 7 8\n\n");
       backtrack(0); // generate all 8! possible solutions
       if (TC) printf("\n");
    }
    return 0;
}
```

For TC = 8 and the initial queen position at (a, b) = (1, 1), the above code outputs the following:

```
SOLN        COLUMN
#    1 2 3 4 5 6 7 8
1    1 5 8 6 3 7 2 4
2    1 6 8 3 7 4 2 5
3    1 7 4 6 8 2 5 3
4    1 7 5 8 2 4 6 3
```

It indicates that there are 4 possible arrangements with the initial queen position at (r = 1, c = 1).

Using recursion makes it easier to partition the search space compared to an iterative solution.

## Greedy Algorithm

This [algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) makes a locally optimal choice at each step, hoping to eventually reach a globally optimal solution.

### Example: Fractional Knapsack

The problem is to select items with weight and value to place in a knapsack of limited capacity W, maximizing the total value of its contents. We can define the ratio of an item's value to its weight, i.e., "greedily" choose items with high value but low weight, and then sort them based on these criteria. In the fractional knapsack problem, we are allowed to take fractional parts of an item.

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

struct Item {
   int value, weight;
   Item(int value, int weight) : value(value), weight(weight) { }
};

bool cmp(struct Item a, struct Item b) {
   double r1 = (double) a.value / a.weight;
   double r2 = (double) b.value / b.weight;
   return r1 > r2;
}

double fractional_knapsack(int W, struct Item arr[], int n)
{
   sort(arr, arr + n, cmp);
   int cur_weight = 0; double tot_value = 0.0;
   for (int i = 0; i < n; ++i)
   {
       if (cur_weight + arr[i].weight <= W)
       {
           cur_weight += arr[i].weight;
           tot_value += arr[i].value;
       }  
       else
       {   // Add a fraction of the next item
           int rem_weight = W - cur_weight;
           tot_value += arr[i].value *
                       ((double) rem_weight / arr[i].weight);                    
           break;
       }
   }
   return tot_value;
}
int main()
{
   int W = 50; // knapsack capacity
   Item arr[] = {{60, 10}, {100, 20}, {120, 30}}; // {value, weight}
   int n = sizeof(arr) / sizeof(arr[0]);
   cout << "greedy fractional knapsack" << endl;
   cout << "maximum value: " << fractional_knapsack(W, arr, n);
   cout << endl;
   return 0;
}
```

Since sorting is the most expensive operation, the algorithm runs in _O(n log n)_ time. Given three items in (value, weight) format — {(60, 10), (100, 20), (120, 30)} — and a knapsack capacity W = 50, the above code outputs:

```
greedy fractional knapsack
maximum value: 240
```

We can observe that the input items are sorted in decreasing order of value/weight ratio. By selecting two whole items 1 and 2, we take ⅔ of the third item.  
Total value = 60 + 100 + (2/3) * 120 = 240.

> Read also: [Algorithm Complexity Explained, or What is O(log n)](https://tproger.ru/articles/computational-complexity-explained)

## Divide and Conquer

[Divide and Conquer](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm) is a strategy where a problem is divided into independent subproblems, and each is solved separately.

Examples of this strategy include quicksort, merge sort, heap sort, and binary search.

### Example: Binary Search

Most commonly, [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) is used to find an element in a sorted array. We start searching from the middle of the array. If we find what we need or if there is nothing left to consider, we stop. Otherwise, we decide in which direction — to the right or left of the middle — we should continue searching. Since the search space is halved after each check, the algorithm's runtime is _O(log n)_.

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

int bsearch(const vector<int> &arr, int l, int r, int q)
{
   while (l <= r)
   {
       int mid = l + (r-l)/2;
       if (arr[mid] == q) return mid;
      
       if (q < arr[mid]) { r = mid - 1; }
       else              { l = mid + 1; }
   }
   return -1; // not found
}

int main()
{
   int query = 10;
   int arr[] = {2, 4, 6, 8, 10, 12};
   int N = sizeof(arr) / sizeof(arr[0]);
   vector<int> v(arr, arr + N);
  
   // Sort the input array
   sort(v.begin(), v.end());
   int idx;
   idx = bsearch(v, 0, v.size(), query);
   if (idx != -1)
       cout << "binary search: found at index " << idx;   
   else
       cout << "binary search: not found";
   return 0;
}
```

The code outputs:

```
binary search: found at index 4
```

If the target element is not found, but we want to find the nearest element smaller or larger than the query, we can use the STL functions `lower_bound()` and `upper_bound()`.

## Dynamic Programming

[Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) (DP) is a technique that breaks a problem into small overlapping subproblems, computes the solution for each, and stores it in a table. The final solution is then read from the table.

The key feature of dynamic programming is the ability to define the state of entries in the table and the relationships or transitions between entries.  
Then, by defining base and recursive cases, the table can be filled either top-down or bottom-up.

In top-down DP, the table is filled recursively as needed, starting from the top and descending to smaller subproblems. In bottom-up DP, the table is filled in order, starting with smaller subproblems and using their solutions to build up to larger problems. In both cases, if a solution to a subproblem has already been computed, it is simply looked up in the table. This significantly reduces computational costs.

### Example: Binomial Coefficients

We use the example of [binomial coefficients](https://en.wikipedia.org/wiki/Binomial_coefficient) to illustrate the use of top-down and bottom-up DP. The code below is based on recursions for binomial coefficients with overlapping subproblems. Let _C(n, k)_ denote the number of ways to choose _k_ elements from _n_. Then we have:

Base case: _C(n, 0) = C(n, n) = 1_  
Recursion: _C(n, k) = C(n-1, k-1) + C(n-1, k)_

We have several overlapping subproblems. For example, for _C(n = 5, k = 2)_, the recursion tree looks like this:

```
							C(5, 2)
                     /                       \
            C(4, 1)                            C(4, 2)
           /      \                        /           \
      C(3, 0)   C(3, 1)             C(3, 1)             C(3, 2)
                /    \             /     \             /     \
         C(2, 0)  C(2, 1)      C(2, 0) C(2, 1)    C(2, 1)  C(2, 2)
                  /      \              /   \        /    \
             C(1, 0)  C(1, 1)    C(1, 0)  C(1, 1) C(1, 0)  C(1, 1)
```

We can implement top-down and bottom-up DP as follows:

```cpp
#include <iostream>
#include <cstring>

using namespace std;

#define V 8

int memo[V][V]; // table

int min(int a, int b) { return (a < b) ? a : b; }

void print_table(int memo[V][V])
{
   for (int i = 0; i < V; ++i)
   {
       for (int j = 0; j < V; ++j)
       {
           printf(" %2d", memo[i][j]);       
       }
       printf("\n");
   }
}

int binomial_coeffs1(int n, int k)
{
   // Top-down DP
   if (k == 0 || k == n) return 1; 
   if (memo[n][k] != -1) return memo[n][k];
   return memo[n][k] = binomial_coeffs1(n-1, k-1) +     
                       binomial_coeffs1(n-1, k);
}

int binomial_coeffs2(int n, int k)
{   
   // Bottom-up DP
   for (int i = 0; i <= n; ++i) 
   {       
       for (int j = 0; j <= min(i, k); ++j)
       {           
           if (j == 0 || j == i)
           {               
               memo[i][j] = 1;
           } 
           else
           {
               memo[i][j] = memo[i-1][j-1] + memo[i-1][j];                 
           }
       }
   }
   return memo[n][k];
} 

int main()
{
   int n = 5, k = 2;
   printf("Top-down DP:\n");
   memset(memo, -1, sizeof(memo));
   int nCk1 = binomial_coeffs1(n, k);
   print_table(memo);
   printf("C(n = %d, k = %d): %d\n\n", n, k, nCk1);
  
   printf("Bottom-up DP:\n");
   memset(memo, -1, sizeof(memo));
   int nCk2 = binomial_coeffs2(n, k);
   print_table(memo);
   printf("C(n = %d, k = %d): %d\n", n, k, nCk2);
  
   return 0;
}
```

For _C(n = 5, k = 2)_, the above code outputs:

```
Top-down DP:
-1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
-1  2 -1 -1 -1 -1 -1 -1
-1  3  3 -1 -1 -1 -1 -1
-1  4  6 -1 -1 -1 -1 -1
-1 -1 10 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
C(n = 5, k = 2): 10

Bottom-up DP:
 1 -1 -1 -1 -1 -1 -1 -1
 1  1 -1 -1 -1 -1 -1 -1
 1  2  1 -1 -1 -1 -1 -1
 1  3  3 -1 -1 -1 -1 -1
 1  4  6 -1 -1 -1 -1 -1
 1  5 10 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
C(n = 5, k = 2): 10
```

The time and space complexity are both _O(n * k)_.

In top-down DP, subproblem solutions are accumulated as needed, while in bottom-up DP, the table is filled starting from the base case.

For printing, a small table size was chosen, but it is recommended to use a much larger size.



---


# RU VERSION:

## Полный поиск

Complete search (он же «грубая сила» или «рекурсивный откат») — метод решения задачи путем пересечения всего пространства поиска. Точнее на протяжении всего алгоритма мы отсекаем те части пространства поиска, которые, как мы считаем, не приведут к требуемому решению. На соревнованиях по спортивному программированию использование Complete Search скорее всего приведёт к превышению лимита времени (Time Limit Exceeded — TLE), однако, это хорошая стратегия для задач с небольшим объёмом входных данных.

### Пример: Задача с 8 ферзями

Нам нужно расположить на шахматной доске 8 ферзей так, чтобы ни один ферзь не нападал на другого. В наиболее простом решении нам придётся перебрать 64 млрд комбинаций и выбрать 8–4 млрд возможных расстановок. Также неплохой вариант — поставить каждого ферзя в отдельную колонну, что сводит число возможностей к 8⁸ — ~17 млн. Но лучше всего поставить каждого ферзя в отдельный ряд и в отдельную колонну. Это приведёт к 8! — 40 тыс. возможных комбинаций. В приведённой ниже реализации мы предполагаем, что каждый ферзь занимает отдельный столбец, и вычисляем номер строки для каждого из 8 ферзей.

```cpp
#include <cstdlib>
#include <cstdio>
#include <cstring>

using namespace std;

// row[8]: номер строки для каждого ферзя
// TC: счётчик TraceBack
// (a, b): расположение первого ферзя от (r=a, c=b)
int row[8], TC, a, b, line_counter;

bool place(int r, int c)
{  
   // Проверяем ранее размещённых ферзей
   for (int prev = 0; prev < c; prev++)
   {
       // Проверяем, совпадают ли строки или диагонали
       if (row[prev] == r || (abs(row[prev] - r) == abs(prev - c)))
           return false;
   }
   return true;
}

void backtrack(int c)
{
   // Возможное решение; первый ферзь имеет координаты a и b
   if (c == 8 && row[b] == a)
   {
       printf("%2d %d", ++line_counter, row[0] + 1);
       for (int j = 1; j < 8; j++) printf(" %d", row[j] + 1);
       printf("\n");
   }
   // Пробуем все возможные строки
   for (int r = 0; r < 8; r++)
   {
       if (place(r, c))
       {
           row[c] = r; // место ферзя в этом столбце и в этой строке
           backtrack(c + 1); // следующий столбец и рекурсия
       }
   }
}

int main()
{
    scanf("%d", &TC);
    while (TC--)
    {
       scanf("%d %d", &a, &b);
       a--; b--; // индексируем с нуля

       memset(row, 0, sizeof(row));
       line_counter = 0;
       printf("РЕШ\tСТОЛБЕЦ\n");
       printf(" # 1 2 3 4 5 6 7 8\n\n");
       backtrack(0); // генерируем все 8! возможных решений
       if (TC) printf("\n");
    }
    return 0;
}
```

Для TC = 8 и начальной позиции ферзя в (a, b) = (1, 1), приведённый выше код выводит следующее:

```
РЕШ        СТОЛБЕЦ
#    1 2 3 4 5 6 7 8
1    1 5 8 6 3 7 2 4
2    1 6 8 3 7 4 2 5
3    1 7 4 6 8 2 5 3
4    1 7 5 8 2 4 6 3
```

Он указывает, что всего возможно 4 расстановки, принимающих начальное положение ферзя в (r = 1, c = 1).

Использование рекурсии позволяет легче выделить пространство поиска в сравнении с итерационным решением.

## Жадный алгоритм

Данный [алгоритм](https://ru.wikipedia.org/wiki/%D0%96%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9_%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC) на каждом шаге делает локально оптимальный выбор, надеясь в итоге получить глобально оптимальное решение.

### Пример: Дробный Рюкзак

Задача состоит в том, чтобы выбрать, какие предметы, имеющие вес и стоимость, поместить в рюкзак ограниченной ёмкости W, да так, чтобы максимизировать общую ценность его содержимого. Мы можем определить соотношение стоимости предмета к его весу, т. е. с «жадностью» выбирать предметы, имеющие высокую стоимость, но в то же время маленький вес, а затем сортировать их по этим критериям. В задаче с дробным рюкзаком нам разрешено брать дробные части предмета.

```cpp
#include <iostream>
#include <algorithm>

using namespace std;

struct Item {
   int value, weight;
   Item(int value, int weight) : value(value), weight(weight) { }
};

bool cmp(struct Item a, struct Item b) {
   double r1 = (double) a.value / a.weight;
   double r2 = (double) b.value / b.weight;
   return r1 > r2;
}

double fractional_knapsack(int W, struct Item arr[], int n)
{
   sort(arr, arr + n, cmp);
   int cur_weight = 0; double tot_value = 0.0;
   for (int i = 0; i < n; ++i)
   {
       if (cur_weight + arr[i].weight <= W)
       {
           cur_weight += arr[i].weight;
           tot_value += arr[i].value;
       }  
       else
       {   // Добавляем часть следующего предмета
           int rem_weight = W - cur_weight;
           tot_value += arr[i].value *
                       ((double) rem_weight / arr[i].weight);                    
           break;
       }
   }
   return tot_value;
}
int main()
{
   int W = 50; // вместительность рюкзака
   Item arr[] = {{60, 10}, {100, 20}, {120, 30}}; // {стоимость, вес}
   int n = sizeof(arr) / sizeof(arr[0]);
   cout << "жадный дробный рюкзак" << endl;
   cout << "максимальная ценность: " << fractional_knapsack(W, arr, n);
   cout << endl;
   return 0;
}
```

Поскольку сортировка — самая дорогая операция, алгоритм работает за время _O(n log n)_. Принимая в формате (стоимость, вес) три пары предметов — {(60, 10), (100, 20), (120, 30)} — и итоговую вместительность рюкзака W = 50, приведённый выше код выводит следующее:

```
жадный дробный рюкзак
максимальная ценность: 240
```

Мы можем заметить, что ввод предметов отсортирован с уменьшающим коэффициентом стоимость/вес. Выбрав два целых предмета 1 и 2, мы берём ⅔ от третьего предмета.  
Итоговая ценность = 60 + 100 + (2/3) * 120 = 240.

> Читайте также: [Оценка сложности алгоритмов, или Что такое О(log n)](https://tproger.ru/articles/computational-complexity-explained)

## Разделяй и Властвуй

[Разделяй и Властвуй](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8F%D0%B9_%D0%B8_%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9) — стратегия, подразумевающая, что задача разделяется на независимые подзадачи и затем каждая из них решается.

Примеры этой стратегии — быстрая сортировка, сортировка слиянием и пирамидальная сортировка, а также бинарный поиск.

### Пример: Бинарный поиск

Чаще всего [бинарный поиск](https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA) (бинпоиск) используют, чтобы найти элемент в отсортированном массиве. Мы начинаем искать с середины массива. Если находим то, что нужно, или если больше нечего рассматривать, мы останавливаемся. В противном случае мы решаем, в каком направлении — вправо или влево от середины — мы должны продолжить поиск. Так как пространство поиска после каждой проверки делится на два, то время выполнения алгоритма — _O(log n)_.

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

using namespace std;

int bsearch(const vector<int> &arr, int l, int r, int q)
{
   while (l <= r)
   {
       int mid = l + (r-l)/2;
       if (arr[mid] == q) return mid;
      
       if (q < arr[mid]) { r = mid - 1; }
       else              { l = mid + 1; }
   }
   return -1; // не нашли
}

int main()
{
   int query = 10;
   int arr[] = {2, 4, 6, 8, 10, 12};
   int N = sizeof(arr) / sizeof(arr[0]);
   vector<int> v(arr, arr + N);
  
   // Сортируем входной массив
   sort(v.begin(), v.end());
   int idx;
   idx = bsearch(v, 0, v.size(), query);
   if (idx != -1)
       cout << "бинарный поиск: нашли по индексу " << idx;   
   else
       cout << "бинарный поиск: не нашли";
   return 0;
}
```

Код выводит следующее:

```
бинарный поиск: нашли по индексу 4
```

Если искомый элемент не найден, но мы хотим найти ближайший элемент меньше или больше запроса, то можно использовать функции STL `lower_bound()` и `upper_bound()`.

## Динамическое программирование

[Динамическое программирование](https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5) (ДП) — это техника, которая разделяет задачу на маленькие пересекающиеся подзадачи, считает решение для каждой из них и сохраняет его в таблицу. Окончательное решение считывается из таблицы.

Ключевая особенность динамического программирования — способность определять состояние записей в таблице и отношения или перемещения между записями.  
Затем, определив базовые и рекурсивные случаи, можно заполнить таблицу сверху вниз или снизу вверх.

В нисходящем ДП таблица будет заполнена рекурсивно, по мере необходимости, начиная сверху и спускаясь к меньшим подзадачам. В восходящем ДП таблица будет заполняться по порядку, начиная с меньших подзадач и с использованием их решений для того чтобы подниматься выше и находить решения для бо́льших задач. В обоих случаях если решение данной подзадачи уже встречалось, оно просто ищется в таблице. И это значительно снижает вычислительные затраты.

### Пример: Биноминальные коэффициенты

Мы используем пример [биноминальных коэффициентов](https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BD%D0%BE%D0%BC%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BA%D0%BE%D1%8D%D1%84%D1%84%D0%B8%D1%86%D0%B8%D0%B5%D0%BD%D1%82), чтобы проиллюстрировать использование нисходящего и восходящего ДП. Код ниже основан на рекурсиях для биноминальных коэффициентов с перекрывающимися подзадачами. Обозначим через _C(n, k)_ количество выборок из _n_ по _k_, тогда имеем:

Базовый случай: _C(n, 0) = C(n, n) = 1_  
Рекурсия: _C(n, k) = C(n-1, k-1) + C(n-1, k)_

У нас есть несколько перекрывающихся подзадач. Например, для _C(n = 5, k = 2)_ рекурсивное дерево будет следующим:


```
							C(5, 2)
                     /                       \
            C(4, 1)                            C(4, 2)
           /      \                        /           \
      C(3, 0)   C(3, 1)             C(3, 1)             C(3, 2)
                /    \             /     \             /     \
         C(2, 0)  C(2, 1)      C(2, 0) C(2, 1)    C(2, 1)  C(2, 2)
                  /      \              /   \        /    \
             C(1, 0)  C(1, 1)    C(1, 0)  C(1, 1) C(1, 0)  C(1, 1)
```

Мы можем реализовать нисходящее и восходящее ДП следующим образом:

```cpp
#include <iostream>
#include <cstring>

using namespace std;

#define V 8

int memo[V][V]; // таблица

int min(int a, int b) { return (a < b) ? a : b; }

void print_table(int memo[V][V])
{
   for (int i = 0; i < V; ++i)
   {
       for (int j = 0; j < V; ++j)
       {
           printf(" %2d", memo[i][j]);       
       }
       printf("\n");
   }
}

int binomial_coeffs1(int n, int k)
{
   // Нисходящее ДП
   if Нk == 0 || k == n) return 1; 
   if (memo[n][k] != -1) return memo[n][k];
   return memo[n][k] = binomial_coeffs1(n-1, k-1) +     
                       binomial_coeffs1(n-1, k);
}

int binomial_coeffs2(int n, int k)
{   
   // Восходящее ДП
   for (int i = 0; i <= n; ++i) 
   {       
       for (int j = 0; j <= min(i, k); ++j)
       {           
           if (j == 0 || j == i)
           {               
               memo[i][j] = 1;
           } 
           else
           {
               memo[i][j] = memo[i-1][j-1] + memo[i-1][j];                 
           }
       }
   }
   return memo[n][k];
} 

int main()
{
   int n = 5, k = 2;
   printf("Нисходящее ДП:\n");
   memset(memo, -1, sizeof(memo));
   int nCk1 = binomial_coeffs1(n, k);
   print_table(memo);
   printf("C(n = %d, k = %d): %d\n\n", n, k, nCk1);
  
   printf("Восходящее ДП:\n");
   memset(memo, -1, sizeof(memo));
   int nCk2 = binomial_coeffs2(n, k);
   print_table(memo);
   printf("C(n = %d, k = %d): %d\n", n, k, nCk2);
  
   return 0;
}
```

При _C(n = 5, k = 2)_ код выше выводит следующее:

```
Нисходящее ДП:
-1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
-1  2 -1 -1 -1 -1 -1 -1
-1  3  3 -1 -1 -1 -1 -1
-1  4  6 -1 -1 -1 -1 -1
-1 -1 10 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
C(n = 5, k = 2): 10

Восходящее ДП:
 1 -1 -1 -1 -1 -1 -1 -1
 1  1 -1 -1 -1 -1 -1 -1
 1  2  1 -1 -1 -1 -1 -1
 1  3  3 -1 -1 -1 -1 -1
 1  4  6 -1 -1 -1 -1 -1
 1  5 10 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
-1 -1 -1 -1 -1 -1 -1 -1
C(n = 5, k = 2): 10
```

Временная и пространственная сложность будут выражены как _O(n * k)_.

В случае нисходящего ДП решения подзадач накапливались по мере необходимости, в то время как в восходящем ДП таблица заполнялась начиная с базового случая.

 Для печати был выбран маленький размер таблицы, рекомендуется брать намного больший размер.