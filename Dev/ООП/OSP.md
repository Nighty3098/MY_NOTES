---
tags:
  - OOP
---
# Open-closed principe ООП

# Принцип открытости-закрытости

Любой класс должен быть открыт для расширения но закрыт для модификации. Класс можно расширять но нельзя модифицировать.

# Это неправильно:

```python
class Discount:
	def get_discount(self, user_type: str):
		if user_type == "normal":
			return 20
		elif user_type == "vip":
			return 50
		elif user_type == "supervip":
			return 90

```

# Это правильно:

```python
class Discount:
	def get_discount(self, user_type: str):
		raise NotImplementedError()

classs NormalDiscount:
	def get_discount(self):
		return 20

classs VipDiscount:
	def get_discount(self):
		return 50

classs SuperVipDiscount:
	def get_discount(self):
		return 90

```
