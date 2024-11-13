---
tags:
  - python
  - py_modules
---
Читаем текст с картинки используя Tesseract от Google

Google разработал систему Tesseract для извлечения текста из изображений через оптическое распознавание символов.

Pytesseract - это удобная оболочка для системы Tesseract, облегчающая её использование.

Чтобы извлечь текст из изображения, используйте метод image_to_string. Для работы с русским текстом укажите аргумент lang как 'rus'.

Рекомендуется использовать библиотеку pillow для открытия изображений, хотя можно также просто указать путь к файлу.

Пример кода:

```python
from PIL import Image
import pytesseract

# Открываем изображение с помощью Pillow
image = Image.open('image.jpg')

# Используем pytesseract для извлечения текста
text = pytesseract.image_to_string(image, lang='rus')

print(text)
```