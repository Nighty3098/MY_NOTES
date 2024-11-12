---
tags:
  - OOP
---
# Dependency inversion principle ооп

Принцип инверсии зависимостей Вы не должны зависить от конкретных реализаций

Вы должны зависеть от абстракий

Низкоуровневые объекты не должны зависеть от высокоуровневых

1 Пример

```python

class BaseUser:
	def get_user_info(self):
		raise NotImplementedError()

class User:
	def get_user_info(self):
		return "info"
		#print("Info")

class VIPUser:
	def get_user_info(self):
		return "VIP"
		#print("VIP")

	def run_program(user: BaseUser):
		user.get_user_info()

run_program(User())

```

2 Пример

```python

class DataSource:
	def read(self):
		raise NotImplementedError()

class FileDataSource(DataSource):
	def read(self):
		with open()

	def user_view(request, datasource: DataSource):
		datasource.read()

```

