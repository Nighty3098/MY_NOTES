---
tags:
  - OOP
---
# Interface segregation principle ООП

# Принцип разделения интерфейсов

Принцип разделения интерфейсов говорит о том, что слишком «толстые» интерфейсы необходимо разделять на более маленькие и специфические, чтобы программные сущности маленьких интерфейсов знали только о методах, которые необходимы им в работе.

В классе методы не реализованы. Мы наследуемся от класса чтобы реализовать эти методы.

Реализация - использование интерфейса

Наследование - использование класса

```python
from abc import ABC

#это интерфейс
class CruService:
	def save(self, data):
		raise NotImplementedError()
	def get(self, id):
		raise NotImplementedError()
	def update(self, id):
		raise NotImplementedError()

# класс
class CrudService(CruService, ABC):
	def delete(self, id):
		raise NotImplementedError()

# это класс
# тут всё наследуется
class UserService(CrudService):
	def save(self, data):
		print("User was saved")
	def get(self, id):
		print("User was retrieved")
	def update(self, id):
		print("User was updated")
	def delete(self, id):
		print("User was deleted")

# реализация
class OrderService(CruService):
	def save(self, data):
		print("User was saved")
	def get(self, id):
		print("User was retrieved")
	def update(self, id, data):
		print("User was updated")

```
