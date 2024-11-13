---
tags:
  - OOP
---
# Single responsibility principle ООП

# Принцин единой ответственности

В каждом классе и каждой функции должна быть одна ответственность должен быть только один смысл сущствования класса

```python
class Calcuator:
	def sum(self, a, b):
		return a + b

def mul(self, a, b):
	return a * b

def save(self, result): # это противоречит принципу SRP
# потому что есть зависимость от других функций
	pass

```

