---
tags:
  - OOP
---
# Liskov substitution principle ООП

# Принцип замещения Лискова

Принцип замещения Лискова гласит, что объекты наших подклассов вели себя так же, как объекты нашего суперкласса.

Нужно использовать класс наследника также как мы используем базовый класс

# неправильно:

```python
class BasicAuthentication:
	def get_code(self):
		return 10

def get_password(self):
	print("password from server")

class PasswordAuthentication(BasicAuthentication):
	def get_code(self):
		raise ValueError("No code")

def get_password(self):
	return input()

def main(auth):
	code = auth.get_code()
	password = auth.get_password()

```

# правильно:

```python
class BasePasswordAuthentication:
	def get_code(self):
		return "passsword"

class PasswordAuthentication(BasePasswordAuthentication):
	def get_password(self):
		return input()

def main(auth: PasswordAuthentication):
	password = auth.get_password() # функция get_password в классе наследника реализована также, как и в главном классе

```
