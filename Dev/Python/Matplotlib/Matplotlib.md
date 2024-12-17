---
tags:
  - matplotlib
  - python
---
# Использование Matplotlib в Python

Matplotlib — это мощная библиотека для визуализации данных в Python, которая позволяет создавать широкий спектр графиков и диаграмм. В этом конспекте мы рассмотрим основные функции и возможности Matplotlib, а также приведем примеры использования.

## 1. Установка Matplotlib

Для начала необходимо установить библиотеку. Это можно сделать с помощью pip:

```bash
pip install matplotlib
```

## 2. Основы работы с Matplotlib

Matplotlib предоставляет два основных интерфейса для создания графиков: **pyplot** и **object-oriented API**. Наиболее распространенным является интерфейс pyplot, который имитирует MATLAB.

### 2.1 Импорт библиотеки

```python
import matplotlib.pyplot as plt
import numpy as np
```

## 3. Создание простых графиков

### 3.1 Линейный график

Линейные графики используются для отображения зависимости между двумя переменными.

```python
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Линейный график")
plt.xlabel("X")
plt.ylabel("Y")
plt.grid()
plt.show()
```

### 3.2 Точечный график (Scatter Plot)

Точечные графики отображают значения двух переменных в виде точек.

```python
x = np.random.rand(50)
y = np.random.rand(50)

plt.scatter(x, y)
plt.title("Точечный график")
plt.xlabel("X")
plt.ylabel("Y")
plt.show()
```

### 3.3 Гистограмма

Гистограммы используются для отображения распределения данных.

```python
data = np.random.randn(1000)

plt.hist(data, bins=30, alpha=0.7)
plt.title("Гистограмма")
plt.xlabel("Значение")
plt.ylabel("Частота")
plt.show()
```

### 3.4 Столбчатая диаграмма (Bar Chart)

Столбчатые диаграммы представляют данные в виде вертикальных или горизонтальных столбцов.

```python
categories = ['A', 'B', 'C', 'D']
values = [4, 7, 1, 8]

plt.bar(categories, values)
plt.title("Столбчатая диаграмма")
plt.xlabel("Категории")
plt.ylabel("Значения")
plt.show()
```

### 3.5 Круговая диаграмма (Pie Chart)

Круговые диаграммы показывают доли частей от целого.

```python
sizes = [15, 30, 45, 10]
labels = ['A', 'B', 'C', 'D']

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title("Круговая диаграмма")
plt.show()
```

## 4. Настройка графиков

### 4.1 Добавление заголовков и меток

Вы можете добавлять заголовки и метки к осям с помощью функций `title()`, `xlabel()`, и `ylabel()`.

```python
plt.plot(x, y)
plt.title("Заголовок графика")
plt.xlabel("Ось X")
plt.ylabel("Ось Y")
```

### 4.2 Настройка стиля линий и маркеров

Вы можете изменять стиль линий и маркеров на графиках.

```python
plt.plot(x, y, linestyle='--', color='r', marker='o')
```

### 4.3 Легенда

Легенды помогают идентифицировать разные линии на графике.

```python
plt.plot(x, y, label='Синус')
plt.plot(x, np.cos(x), label='Косинус')
plt.legend()
```

## 5. Работа с несколькими подграфиками (Subplots)

Вы можете создавать несколько подграфиков в одной фигуре с помощью функции `subplots()`.

```python
fig, axs = plt.subplots(2, 2)

axs[0, 0].plot(x, y)
axs[0, 0].set_title('Синус')

axs[0, 1].plot(x, np.cos(x))
axs[0, 1].set_title('Косинус')

axs[1, 0].hist(data)
axs[1, 0].set_title('Гистограмма')

axs[1, 1].pie(sizes, labels=labels)
axs[1, 1].set_title('Круговая диаграмма')

plt.tight_layout()
plt.show()
```

## 6. Сохранение графиков

Вы можете сохранять графики в различных форматах (PNG, PDF и т.д.) с помощью функции `savefig()`.

```python
plt.plot(x, y)
plt.title("Сохранение графика")
plt.savefig('my_plot.png')
```

## 7. Специальные типы графиков

### 7.1 Контурные графики (Contour Plots)

Контурные графики отображают уровни значений на двумерной плоскости.

```python
X = np.linspace(-5, 5, 100)
Y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(X, Y)
Z = np.sin(np.sqrt(X**2 + Y**2))

contour = plt.contour(X, Y, Z)
plt.title("Контурный график")
plt.show()
```

### 7.2 Графики в трехмерном пространстве (3D Plots)

Для создания трехмерных графиков необходимо импортировать модуль `mplot3d`.

```python
from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

x = np.random.rand(100)
y = np.random.rand(100)
z = np.random.rand(100)

ax.scatter(x, y, z)
ax.set_title('3D Точечный график')
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')
plt.show()
```



Citations:
[1] https://matplotlib.org/stable/tutorials/pyplot.html
[2] https://www.activestate.com/resources/quick-reads/what-is-matplotlib-in-python-how-to-use-it-for-plotting/
[3] https://matplotlib.org/stable/plot_types/index.html
[4] https://matplotlib.org/3.4.3/tutorials/introductory/sample_plots.html
[5] https://www.activestate.com/resources/quick-reads/how-to-display-a-plot-in-python/
[6] https://www.simplilearn.com/tutorials/python-tutorial/matplotlib
[7] https://360digitmg.com/blog/matplotlib
[8] https://matplotlib.org/stable/users/explain/quick_start.html
[9] https://www.w3schools.com/python/matplotlib_plotting.asp