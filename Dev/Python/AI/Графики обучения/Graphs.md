---
tags:
  - AI
---
![[Figure_1.png]]

---

Graphs that show the training process of a neural network usually present various metrics that help evaluate the performance of the model during the training and validation processes. Here are the main metrics that can be presented in such graphs:

### 1. **Loss**

- **Training Loss**: The value of the loss function on the training set. This shows how well the model learns on the data it was trained on.
- **Validation Loss**: The value of the loss function on the validation set. This helps evaluate how well the model generalizes to new, unseen data.

### 2. **Accuracy**

- **Training Accuracy**: The percentage of correct predictions the model makes on the training set.
- **Validation Accuracy**: The percentage of correct predictions the model makes on the validation set. This metric helps you understand how well the model will perform on new data.

### 3. **Mean Absolute Error (MAE)**

- **Training MAE**: The mean absolute error on the training set.
- **Validation MAE**: The mean absolute error on the validation set. This metric is used to evaluate the accuracy of the model's predictions.

### 4. **Epochs**

- The x-axis typically displays the number of epochs (training iterations), allowing you to see how the loss and accuracy values ​​change as the number of epochs increases.

### 5. **Plots**

- Plots can be built for different metrics (e.g. loss and accuracy) and can include multiple lines to compare between the training and validation sets.

### Example of graphs

In the graphs you can see:

- How the loss values ​​decrease with increasing number of epochs, which indicates that the model is learning.
- How the accuracy increases with increasing number of epochs, which also indicates that the model is improving in performance.
- Possible discrepancy between the loss and accuracy for the training and validation sets, which may indicate that the model is overfitting.

Citations:
[1] https://habr.com/ru/articles/458724/
[2] https://cyberleninka.ru/article/n/metody-obucheniya-iskusstvennyh-neyronnyh-setey
[3] https://rdc.grfc.ru/2023/09/graph_neural_nets/
[4] https://yandex.ru/q/machine-learning/11050315265/
[5] https://gb.ru/blog/algoritmy-obucheniya-nejronnoj-seti/
[6] https://dou.ua/lenta/articles/interpreting-machine-learning-1/
[7] https://www.reg.ru/blog/stehnfordskij-kurs-lekciya-7-obuchenie-nejrosetej-chast-2/