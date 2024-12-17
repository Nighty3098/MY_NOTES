---
tags:
  - tensorflow
---

Обучение нейронных сетей является одной из самых актуальных тем в области машинного обучения и глубокого обучения. В этом конспекте мы подробно рассмотрим ключевые аспекты обучения нейронных сетей, включая подготовку данных, построение моделей, алгоритмы оптимизации и регуляризацию, с использованием библиотек Keras и TensorFlow.

## 1. Введение в Keras и TensorFlow

### 1.1 Что такое Keras?

Keras — это высокоуровневый API для глубокого обучения, который работает поверх TensorFlow. Он упрощает создание и обучение нейронных сетей, предоставляя интуитивно понятный интерфейс для работы с моделями.

### 1.2 Что такое TensorFlow?

TensorFlow — это мощная библиотека для численных вычислений и машинного обучения, разработанная Google. Она позволяет создавать и обучать модели глубокого обучения, используя тензоры (многомерные массивы).

## 2. Подготовка данных

Перед тем как обучать нейронную сеть, необходимо подготовить данные.

### 2.1 Загрузка данных

Рассмотрим пример с набором данных MNIST, который содержит изображения рукописных цифр.

```python
import tensorflow as tf
from tensorflow.keras.datasets import mnist

# Загрузка данных
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Нормализация данных
x_train, x_test = x_train / 255.0, x_test / 255.0

# Преобразование меток в категориальный формат
y_train = tf.keras.utils.to_categorical(y_train, 10)
y_test = tf.keras.utils.to_categorical(y_test, 10)
```

### 2.2 Предобработка данных

Нормализация данных помогает улучшить скорость обучения и качество модели.

## 3. Построение модели нейронной сети

### 3.1 Создание модели

Используем Sequential API для создания модели:

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten

# Создание модели
model = Sequential([
    Flatten(input_shape=(28, 28)),  # Преобразование 2D изображений в 1D вектор
    Dense(128, activation='relu'),   # Полносвязный слой с 128 нейронами и функцией активации ReLU
    Dense(10, activation='softmax')   # Выходной слой с 10 нейронами и функцией активации Softmax
])
```

### 3.2 Компиляция модели

Перед обучением модель необходимо скомпилировать:

```python
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```

## 4. Обучение модели

### 4.1 Процесс обучения

Обучение модели происходит с помощью метода `fit()`, который принимает входные данные и метки:

```python
model.fit(x_train, y_train, epochs=5, batch_size=32)
```

- **epochs** — количество полных проходов по обучающему набору.
- **batch_size** — количество образцов, обрабатываемых перед обновлением весов.

### 4.2 Оценка модели

После обучения важно оценить модель на тестовом наборе данных:

```python
test_loss, test_accuracy = model.evaluate(x_test, y_test)
print(f'Test accuracy: {test_accuracy}')
```

## 5. Алгоритмы оптимизации

### 5.1 Градиентный спуск

Градиентный спуск — это метод оптимизации для минимизации функции потерь.

### 5.2 Адаптивные методы оптимизации

- **Adam**: Один из наиболее популярных оптимизаторов.
- **SGD**: Стандартный стохастический градиентный спуск.
- **Adagrad**: Адаптивная скорость обучения для каждого параметра.

Пример использования Adam:

```python
from tensorflow.keras.optimizers import Adam

model.compile(optimizer=Adam(learning_rate=0.001),
              loss='categorical_crossentropy',
              metrics=['accuracy'])
```

## 6. Регуляризация нейронных сетей

Регуляризация помогает избежать переобучения модели.

### 6.1 Dropout

Dropout случайным образом отключает определенный процент нейронов во время обучения:

```python
from tensorflow.keras.layers import Dropout

model.add(Dropout(0.5))  # Отключаем 50% нейронов
```

### 6.2 L2-регуляризация

Добавляет штраф за большие веса в функцию потерь:

```python
from tensorflow.keras.regularizers import l2

model.add(Dense(128, activation='relu', kernel_regularizer=l2(0.01)))
```



Citations:
[1] https://sky.pro/wiki/python/obuchenie-nejronnyh-setej-na-python-shag-za-shagom/
[2] https://recog.ru/%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-tensorflow-%D0%B8-keras-%D0%BD%D0%B0-python-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1/
[3] https://skillbox.ru/media/code/biblioteka-tensorflow-pishem-neyroset-i-izuchaem-printsipy-mashinnogo-obucheniya/
[4] https://habr.com/ru/companies/sberbank/articles/695588/
[5] https://blog.skillfactory.ru/glossary/keras/
[6] https://habr.com/ru/articles/426797/
[7] https://python.ivan-shamaev.ru/keras-tutorial-beginner-guide-to-deep-learning-in-python/