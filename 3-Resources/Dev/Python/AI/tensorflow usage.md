---
tags:
  - tensorflow
---
Training neural networks is one of the hottest topics in machine learning and deep learning. In this blog post, we will cover key aspects of training neural networks, including data preparation, model building, optimization algorithms, and regularization, using the Keras and TensorFlow libraries.

## 1. Introduction to Keras and TensorFlow

### 1.1 What is Keras?

Keras is a high-level API for deep learning that runs on top of TensorFlow. It simplifies the creation and training of neural networks by providing an intuitive interface for working with models.

### 1.2 What is TensorFlow?

TensorFlow is a powerful numerical computing and machine learning library developed by Google. It allows you to create and train deep learning models using tensors (multi-dimensional arrays).

## 2. Data Preparation

Before training a neural network, you need to prepare the data.

### 2.1 Loading Data

Let's look at an example with the MNIST dataset, which contains images of handwritten digits.

```python
import tensorflow as tf
from tensorflow.keras.datasets import mnist

# Loading Data
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalizing Data
x_train, x_test = x_train / 255.0, x_test / 255.0

# Converting Labels to Categorical
y_train = tf.keras.utils.to_categorical(y_train, 10)
y_test = tf.keras.utils.to_categorical(y_test, 10)
```

### 2.2 Preprocessing Data

Normalizing data helps improve training speed and model quality.

## 3. Building a neural network model

### 3.1 Creating a model

Using the Sequential API to create a model:

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten

# Creating a model
model = Sequential([
Flatten(input_shape=(28, 28)), # Converting 2D images to 1D vector
Dense(128, activation='relu'), # Fully connected layer with 128 neurons and ReLU activation function
Dense(10, activation='softmax') # Output layer with 10 neurons and Softmax activation function
])
```

### 3.2 Compiling the model

Before training, the model must be compiled:

```python
model.compile(optimizer='adam',
loss='categorical_crossentropy',
metrics=['accuracy'])
```

## 4. Model training

### 4.1 Training process

The model is trained using the `fit()` method, which takes input data and labels:

```python
model.fit(x_train, y_train, epochs=5, batch_size=32)
```

- **epochs** — number of full passes over the training set.
- **batch_size** — number of samples processed before updating the weights.

### 4.2 Model evaluation

After training, it is important to evaluate the model on the test dataset:

```python
test_loss, test_accuracy = model.evaluate(x_test, y_test)
print(f'Test accuracy: {test_accuracy}')
```

## 5. Optimization algorithms

### 5.1 Gradient descent

Gradient descent is an optimization method for minimizing the loss function.

### 5.2 Adaptive optimization methods

- **Adam**: One of the most popular optimizers.
- **SGD**: Standard stochastic gradient descent.
- **Adagrad**: Adaptive learning rate for each parameter.

Example of using Adam:

```python
from tensorflow.keras.optimizers import Adam

model.compile(optimizer=Adam(learning_rate=0.001),
loss='categorical_crossentropy',
metrics=['accuracy'])
```

## 6. Regularization of neural networks

Regularization helps to avoid overfitting the model.

### 6.1 Dropout

Dropout randomly disables a certain percentage of neurons during training:

```python
from tensorflow.keras.layers import Dropout

model.add(Dropout(0.5)) # Disable 50% of neurons
```

### 6.2 L2 regularization

Adds a penalty for large weights to the loss function:

```python
from tensorflow.keras.regularizers import l2

model.add(Dense(128, activation='relu', kernel_regularizer=l2(0.01)))
```

Citations:
[1] https://sky.pro/wiki/python/obuchenie-nejronnyh-setej-na-python-shag-za-shagom/
[2] https://recog.ru/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1 %8B-%D1%81-tensorflow-%D0%B8-keras-%D0%BD%D0%B0-python-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1/
[3] https://skillbox.ru/media/code/biblioteka-tensorflow-pishem-neyroset-i-izuchaem-printsipy-mashinnogo-obucheniya/
[4] https://habr.com/ru/companies/sberbank/articles/695588/
[5] https://blog.skillfactory.ru/glossary/keras/
[6] https://habr.com/ru/articles/426797/
[7] https://python.ivan-shamaev.ru/keras-tutorial-beginner-guide-to-deep-learning-in-python/