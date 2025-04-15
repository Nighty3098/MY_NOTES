---
tags:
  - matplotlib
  - python
---
# Using Matplotlib in Python

Matplotlib is a powerful data visualization library for Python that allows you to create a wide range of graphs and charts. In this article, we will look at the main features and capabilities of Matplotlib, and also provide examples of its use.

## 1. Installing Matplotlib

First, you need to install the library. This can be done using pip:

```bash
pip install matplotlib
```

## 2. Basics of working with Matplotlib

Matplotlib provides two main interfaces for creating graphs: **pyplot** and **object-oriented API**. The most common is the pyplot interface, which mimics MATLAB.

### 2.1 Importing a library

```python
import matplotlib.pyplot as plt
import numpy as np
```

## 3. Creating simple graphs

### 3.1 Line Plot

Line plots are used to show the relationship between two variables.

```python
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.plot(x, y)
plt.title("Line Plot")
plt.xlabel("X")
plt.ylabel("Y")
plt.grid()
plt.show()
```

### 3.2 Scatter Plot

Scatter plots display the values ​​of two variables as dots.

```python
x = np.random.rand(50)
y = np.random.rand(50)

plt.scatter(x, y)
plt.title("Scatter Plot")
plt.xlabel("X")
plt.ylabel("Y")
plt.show()
```

### 3.3 Histogram

Histograms are used to display the distribution of data.

```python
data = np.random.randn(1000)

plt.hist(data, bins=30, alpha=0.7)
plt.title("Histogram")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
```

### 3.4 Bar Chart

Bar charts present data as vertical or horizontal columns.

```python
categories = ['A', 'B', 'C', 'D']
values ​​= [4, 7, 1, 8]

plt.bar(categories, values)
plt.title("Bar Chart")
plt.xlabel("Categories")
plt.ylabel("Values")
plt.show()
```

### 3.5 Pie Chart

Pie charts show proportions of parts of a whole.

```python
sizes = [15, 30, 45, 10]
labels = ['A', 'B', 'C', 'D']

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title("Pie Chart")
plt.show()
```

## 4. Customizing Plots

### 4.1 Adding Titles and Labels

You can add titles and labels to axes using the `title()`, `xlabel()`, and `ylabel()` functions.

```python
plt.plot(x, y)
plt.title("Graph Title")
plt.xlabel("X-Axis")
plt.ylabel("Y-Axis")
```

### 4.2 Customizing Line and Marker Styles

You can change the style of lines and markers on graphs.

``python
plt.plot(x, y, linestyle='--', color='r', marker='o')
```

### 4.3 Legend

Legends help identify different lines on a graph.

```python
plt.plot(x, y, label='Sine')
plt.plot(x, np.cos(x), label='Cosine')
plt.legend()
```

## 5. Working with Multiple Subplots

You can create multiple subplots in a single figure using the `subplots()` function.

```python
fig, axs = plt.subplots(2, 2)

axs[0, 0].plot(x, y)
axs[0, 0].set_title('Sine')

axs[0, 1].plot(x, np.cos(x))
axs[0, 1].set_title('Cosine')

axs[1, 0].hist(data)
axs[1, 0].set_title('Histogram')

axs[1, 1].pie(sizes, labels=labels)
axs[1, 1].set_title('Pie Chart')

plt.tight_layout()
plt.show()
``

## 6. Saving graphs

You can save graphs in various formats (PNG, PDF, etc.) using the function `savefig()`.

```python
plt.plot(x, y)
plt.title("Saving a plot")
plt.savefig('my_plot.png')
```

## 7. Special types of plots

### 7.1 Contour Plots

Contour plots display levels of values ​​on a two-dimensional plane.

```python
X = np.linspace(-5, 5, 100)
Y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(X, Y)
Z = np.sin(np.sqrt(X**2 + Y**2))

contour = plt.contour(X, Y, Z)
plt.title("Contour Plot")
plt.show()
```

### 7.2 3D Plots

To create 3D plots, you need to import the `mplot3d` module.

```python
from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

x = np.random.rand(100)
y = np.random.rand(100)
z = np.random.rand(100)

ax.scatter(x, y, z)
ax.set_title('3D Scatter Plot')
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