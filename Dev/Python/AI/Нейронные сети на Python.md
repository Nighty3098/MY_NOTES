---
tags:
  - AI
  - numpy
---
Neural networks are a powerful tool for solving machine learning problems by mimicking the way the human brain works. In this tutorial, we will cover the basic concepts of neural networks, their implementation in Python, and the mathematical functions and matrices used in the process.

### **** Basic Concepts of Neural Networks

- **Neuron**: The basic unit of a neural network that takes input data and applies weights and an activation function to generate an output.

- **Layers**: Neurons are organized into layers:
- **Input Layer**: Receives input data.
- **Hidden Layers**: Processes the data.
- **Output Layer**: Provides the output.

- **Training**: The process of adjusting the weights of neurons based on a training data set. Backpropagation is a common method used.

### **** Mathematical Functions and Matrices

1. **Activation Function**: Used to transform a weighted sum of inputs into an output. The most common functions are:
- Sigmoid:
$$
\sigma(x) = \frac{1}{1 + e^{-x}}
$$
- Tangent hyperbolic:
$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

2. **Weight matrices**: Used to store the weights between neurons. For example, if we have 3 inputs and 1 output, the weight matrix will have dimensions $3 \times 1$.

3. **Backpropagation**: An algorithm for adjusting the weights based on the difference between the predicted and actual output.

### **** Example of neural network implementation in Python

Below is a simple example of neural network implementation using the NumPy library.

```python
import numpy as np

# Activation function (sigmoid)
def sigmoid(x):
return 1 / (1 + np.exp(-x))

# Derivative of sigmoid
def sigmoid_derivative(x):
return x * (1 - x)

# Training dataset
X = np.array([[0, 0, 1],
[1, 1, 1],
[1, 0, 1],
[0, 1, 1]])

y = np.array([[0], [1], [1], [0]])

# Initialize weights
np.random.seed(1)
weights = np.random.rand(3, 1)

# Train the network
for epoch in range(10000):
# Forward propagation
input_layer = X
outputs = sigmoid(np.dot(input_layer, weights))

# Error
error = y - outputs

# Adjust weights
adjustments = error * sigmoid_derivative(outputs)
weights += np.dot(input_layer.T, adjustments)

# Testing the network
print("Output after training:")
print(outputs)
```

### **** Code explanation

- **Library imports**: We use NumPy to work with arrays and matrices.

- **Activation function**: Sigmoid is used to normalize the output values.

- **Training dataset**: Input data is represented as a matrix $X$, and the expected outputs are represented as a vector $y$.

- **Weight initialization**: Random weights are generated using `np.random.rand`.

- **Training process**:
- Forward propagation is performed to obtain the output.
- The error between the actual and predicted value is calculated.
- The weights are adjusted based on the derivative of the activation function and the error.

Citations:
[1] https://blog.skillfactory.ru/kak-postroit-svoyu-pervuyu-nejronnuyu-set-napisav-9-strochek-na-python/
[2] https://timeweb.cloud/tutorials/machine-learning/kak-napisat-prostuyu-nejroset-na-python
[3] https://habr.com/ru/articles/755096/
[4] https://proglib.io/p/pishem-neyroset-na-python-s-nulya-2020-10-07
[5] https://habr.com/ru/articles/271563/
[6] https://gb.ru/blog/nejronnye-seti-python/
[7] https://habr.com/ru/articles/725668/
[8] https://sky.pro/wiki/python/primery-programm-nejronnyh-setej/
[9] https://kpfu.ru/portal/docs/F_1458204831/Nejronnye.seti.na.Python.pdf
[10] https://www.youtube.com/watch?v=bXGBeRzM87g