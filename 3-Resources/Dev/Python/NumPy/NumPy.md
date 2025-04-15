---
tags:
  - python
  - numpy
---
## Introduction

NumPy is an open-source module for Python that provides common mathematical and numerical operations as precompiled, fast functions. They are organized into high-level packages. They define functionality that can be compared to MatLab functionality. NumPy (Numeric Python) provides basic methods for manipulating arrays and matrices created. SciPy (Scientific Python) extends functional numpy with a large collection of useful algorithms such as minimization, Fourier transform, regression, and other applied mathematical methods.

## Some additional information

The NumPy and SciPy communities maintain an online manual, including guides and tutorials, at [docs.scipy.org/doc](http://docs.scipy.org/doc).

Importing numpy modularity

There are several import paths. The standard method is to use a simple statement:

``` python
>>> import num
```

However, for a large number of numpy function calls, it becomes tedious to write numpy.X over and over again. Instead, it is much simpler to do it like this:

``` python
>>> import numpy as np
```

This statement allows us to access numpy objects using np.X instead of numpy.X. It is also possible to import numpy directly into the namespace we are using, so that we don't have to use the dot function at all, but instead store them directly:

``` python
>>> from numpy import *
```

However, this option is not encouraged when programming in Python, as it collects some useful structures that the module provides. For the rest of this tutorial, we will use the second import option (import numpy as np).

##Arrays

The main definition of numpy is that it is an array of objects. Arrays decided to check the fact with lists in Python that the elements of the array must have the same data type, like float and int. With arrays, you can perform numerical operations with a large amount of information many times faster and, most importantly, much faster than with lists.

Creating an array from a name:

``` python
a = np.array([1, 4, 5, 8], float)
>>> a
array([ 1., 4., 5., 8.])
>>> type(a)
<class 'numpy.ndarray'>
```

Here the array function uses two arguments: a list to convert to an array and a type for each element. All elements can be accessed and manipulated in the same way as you would with simple lists:

``` python
>>> a[:2]
array([ 1., 4.])
>>> a[3]
8.0
>>> a[0] = 5.
>>> a
array([ 5., 4., 5., 8.])
```

Arrays can be multidimensional too. Unlike lists, you can use commas in parentheses. Here is an example of a two-dimensional array (matrix):

``` python
>>> a = np.array([[1, 2, 3], [4, 5, 6]], float)
>>> a
array([[ 1., 2., 3.],
[ 4., 5., 6.]])
>>> a[0,0]
1.0
>>> a[0,1]
2.0
```

Array slicing works on multidimensional arrays as it does on one-dimensional ones, applying each slice as a filter set for the dimension. Use ":" in a component to specify using all elements of that dimension:

``` python
>>> a = np.array([[1, 2, 3], [4, 5, 6]], float)
>>> a[1,:]
array([ 4., 5., 6.])
>>> a[:,2]
array([ 3., 6.])
>>> a[-1:, -2:]
array([[ 5., 6.]])
```

The shape method returns the number of rows and columns in a matrix:

``` python
>>> a.shape
(2, 3)
```

The dtype method returns the type of the function stored in the array:

``` python
>>> declaration type
dtype('float64')
```

Here float64, this a numeric data type in numpy that is used to store double-precision real numbers. It is the same as float in Python.

The lens method that takes the first dimension (axis):

``` python
a = np.array([[1, 2, 3], [4, 5, 6]], float)
>>> Len(a)
2
```

The method used to check if an element is in an array:

``` python
>>> a = np.array([[1, 2, 3], [4, 5, 6]], float)
>>> 2 in
True
>>> 0 in
False
```

Arrays can be reshaped using the method that specifies a new multidimensional array. Following is an example that reshapes a ten-element one-dimensional array into a five-row, two-column two-dimensional array:

``` python
>>> a = np.array(range(10), float)
>>> a
array([ 0., 1., 2., 3., 4., 5., 6., 7., 8., 9.])
>>> a = a.reshape((5, 2))
>>> a
array([[ 0., 1.],
[ 2., 3.],
[4., 5.],
[6., 7.],
[ 8., 9.]])
>>> a.shape
(5, 2)
```

Note that the reshape method creates a new array, rather than modifying the original.

Keep in mind that Python name bindings also work with arrays. The copy method is used to create a copy of an existing array in memory:

``` python
>>> a = np.array([1, 2, 3], float)
>>> b = a
>>> c = a.copy()
>>> a[0] = 0
>>> a
array([0., 2., 3.])
>>> b
array([0., 2., 3.])
>>> c
array([1., 2., 3.])
```

Lists can also be created from arrays:

``` python
>>> a = np.array([1, 2, 3], float)
>>> a.toList()
[1.0, 2.0, 3.0]
>>> list(a)
[1.0, 2.0, 3.0]
```

You can also convert an array to binary form (that is, not human-readable form). To do this, use the tostring method. The fromstring method works for the reverse conversion. These operations are sometimes ah, which can be read in the future.

```python
>>> a = array([1, 2, 3], float)
>>> s = a.tostring()
>>> s
'\\x00\\x00\\x00\\x00\\x00\\x00\\xf0?\\x00\\x00\\x00\\x00\\x00\\x00\\x00@\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x08@'
>>> np.fromstring(s)
array([ 1., 2., 3.])
```

Filling an array with the same value.

```python
>>> a = array([1, 2, 3], float)
>>> a
array([ 1., 2., 3.])
>>> a.fill(0)
>>> a
array([ 0., 0., 0.])
```

Arrays can also be transposed, creating a new array:

```python
>>> a = np.array(range(6), float).reshape((2, 3))
>>> a
array([[ 0., 1., 2.],
[ 3., 4., 5.]])
>>> a.transpose()
array([[ 0., 3.],
[ 1., 4.],
[ 2., 5.]])
```

A multidimensional array can be converted to a one-dimensional one by using the flatten method:

```python
>>> a = np.array([[1, 2, 3], [4, 5, 6]], float)
>>> a
array([[ 1., 2., 3.],
[ 4., 5., 6.]])
>>> a.flatten()
array([ 1., 2., 3., 4., 5., 6.])

```

Two or more arrays can be concatenated using the concatenate method:

```python
>>> a = np.array([1,2], float)
>>> b = np.array([3,4,5,6], float)
>>> c = np.array([7,8,9], float)
>>> np.concatenate((a, b, c))
array([1., 2., 3., 4., 5., 6., 7., 8., 9.])
```

If the array is not one-dimensional, you can specify the axis along which the connection will occur. By default (without specifying an axis value), the concatenation will occur along the first dimension:

```python
>>> a = np.array([[1, 2], [3, 4]], float)
>>> b = np.array([[5, 6], [7,8]], float)
>>> np.concatenate((a,b))
array([[ 1., 2.],
[ 3., 4.],
[ 5., 6.],
[ 7., 8.]])
>>> np.concatenate((a,b), axis=0)
array([[ 1., 2.],
[ 3., 4.],
[ 5., 6.],
[ 7., 8.]])
>>>
np.concatenate((a,b), axis=1)
array([[ 1., 2., 5., 6.],
[ 3., 4., 7., 8.]])
```

Finally, the array dimension can be increased by using the constant newaxis in square brackets:

```python
>>> a = np.array([1, 2, 3], float)
>>> a
array([1., 2., 3.])
>>> a[:,np.newaxis]
array([[ 1.],
[ 2.],
[ 3.]])
>>> a[:,np.newaxis].shape
(3,1)
>>> b[np.newaxis,:]
array([[ 1., 2., 3.]])
>>> b[np.newaxis,:].shape
(1,3)
```

Note that here each array two-dimensional; created with newaxis has dimension one. The newaxis method is suitable for conveniently creating properly-dimensional arrays in vector and matrix mathematics.

# Other ways to create arrays

The arange function is similar to the range function, but returns an array:

```python
>>> np.arange(5, dtype=float)
array([ 0., 1., 2., 3., 4.])
>>> np.arange(1, 6, 2, dtype=int)
array([1, 3, 5])
```

The zeros and ones functions create new arrays of the specified dimension, filled with those values. These are probably the easiest to use functions for creating arrays:

```python
>>> np.ones((2,3), dtype=float)
array([[ 1., 1., 1.],
[ 1., 1., 1.]])
>>> np.zeros(7, dtype=int)
array([0, 0, 0, 0, 0, 0, 0])
```

The zeros_like and ones_like functions can transform an already created array by filling it with zeros and ones, respectively:

```python
>>> a = np.array([[1, 2, 3], [4, 5, 6]], float)
>>> np.zeros_like(a)
array([[ 0., 0., 0.],
[ 0., 0., 0.]])
>>> np.ones_like(a)
array([[ 1., 1., 1.],
[ 1., 1., 1.]])
```

There are also a number of functions for creating special matrices. To create a square matrix with the main diagonal filled with ones, we use the identity method:

```python
>>> np.identity(4, dtype=float)
array([[ 1., 0., 0., 0.],
[ 0., 1., 0., 0.],
[ 0., 0., 1., 0.],
[ 0., 0., 0., 1.]])
```

The eye function returns a matrix with ones on the k-th diagonal:

```python
>>> np.eye(4, k=1, dtype=float)
array([[ 0., 1., 0., 0.],
[ 0., 0., 1., 0.],
[ 0., 0., 0., 1.],
[ 0., 0., 0., 0.]])
```

# Mathematical operations on arrays

When we use standard mathematical operations on arrays, the principle: element--element must be observed. This means that the arrays must be the same size during addition, subtraction, and similar operations:

```python
>>> a = np.array([1,2,3], float)
>>> b = np.array([5,2,6], float)
>>> a + b
array([6., 4., 9.])
>>> a – b
array([-4., 0., -3.])
>>> a * b
array([5., 4., 18.])
>>> b / a
array([5., 1., 2.])
>>> a % b
array([1., 0., 3.])
>>> b**a
array([5., 4., 216.])
```

For two-dimensional arrays, multiplication remains element-wise and does not correspond to matrix multiplication. There are special functions for this, which we will study later.

```python
>>> a = np.array([[1,2], [3,4]], float)
>>> b = np.array([[2,0], [1,3]], float)
>>> a * b
array([[2., 0.], [3., 12.]])
```

Errors are thrown if the sizes do not match:

```python
>>> a = np.array([1,2,3], float)
>>> b = np.array([4,5], float)
>>> a + b
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (3,) (2,)
```

However, if the dimensions of the arrays do not match, they will be converted to perform mathematical operations. This often means