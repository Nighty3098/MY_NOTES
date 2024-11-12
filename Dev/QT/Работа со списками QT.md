---
tags:
  - qt
---
## Сортировка списка

```cpp
QList<QString> list;
list << "Coconut" << "Banana" << "Avocado" << "Apple";

qSort(list.begin(), list.end());
qDebug() << "Список по алфавиту: " << list;
```

## Обратная сортировка списка

```cpp
QList<QString> list;
list << "Coconut" << "Banana" << "Avocado" << "Apple";

qSort(list.begin(), list.end(), qGreater<QString>());
qDebug() << "Список в обратном порядке: " << list;
```

## Поиск по списку

```cpp
QList<QString> list;
list << "Coconut" << "Banana" << "Avocado" << "Apple";

QList<QString>::iterator it = qFind(list.begin(), list.end(), "Coconut");

if(it != list.end()) {
	qDebug() << "Найдено: " << *it;
}
else {
	qDebug() << "Не найдено";
}
```

## Подсчёт количества нужного элемента в списке

```cpp
QList<QString> list3;
list3 << "Яблоко" << "Вишня" << "Персик" << "Виноград" << "Груша" << "Персик";

int n = 0;

qCount(list3, "Персик", n);
qDebug() << " Количество данного элемента в списке: " << n;
```

## Удаление элемента и его дубликатов в списке

```cpp
QList<QString> list;
list << "Apple" << "Coconut" << "Banana" << "Avocado" << "Avocado" << "Banana" << "Mango" << "Coconut" << "Coconut";

qDebug() << list;
QList<QString>::iterator it = list.begin();
for(;it != list.end(); ++it) {
	int n = 0;
	qCount(list, *it, n);
		if(n>=2) {
			list.removeAll(*it);
			list.removeOne(*it);
		}
	}
qDebug() << list;
```

[[