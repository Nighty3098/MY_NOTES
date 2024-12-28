---
tags:
  - qt
---
## Sort list

```cpp
QList<QString> list;
list << “Coconut” << “Banana” << “Avocado” << “Apple”;

qSort(list.begin(), list.end());
qDebug() << “List alphabetically: ” << list;
```

## Reverse sort the list

```cpp
QList<QString> list;
list << “Coconut” << “Banana” << “Avocado” << “Apple”;

qSort(list.begin(), list.end(), qGreater<QString>());
qDebug() << “List in reverse order: “ << list;
```

## Search the list

```cpp
QList<QString> list;
list << “Coconut” << “Banana” << “Avocado” << “Apple”;

QList<QString>::iterator it = qFind(list.begin(), list.end(), “Coconut”);

if(it != list.end()) {
	qDebug() << “Found: ” << *it;
}
else {
	qDebug() << “Not found.”
}
```

## Counting the number of the required item in the list

```cpp
QList<QString> list3;
list3 << “Apple” << “Cherry” << “Peach” << “Grape” << “Pear” << “Peach”;

int n = 0;

qCount(list3, “Peach”, n);
qDebug() << “ The number of this item in the list: ” << n;
```

## Deleting an item and its duplicates in the list

```cpp
QList<QString> list;
list << “Apple” << “Coconut” << “Banana” << “Avocado” << “Avocado” << “Banana” << “Mango” << “Coconut” << “Coconut”;

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
