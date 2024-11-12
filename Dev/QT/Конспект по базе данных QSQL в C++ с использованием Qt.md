---
tags:
  - qt
---
###  Подключение базы данных

Для подключения базы данных в Qt необходимо использовать класс `QSqlDatabase`. Пример кода:

```cpp
#include <QSqlDatabase>
#include <QSqlError>
#include <QDebug>

QSqlDatabase db = QSqlDatabase::addDatabase("QSQLITE");
db.setDatabaseName("database.db");

if (!db.open()) {
    qDebug() << "Failed to connect to database:" << db.lastError().text();
    return;
}

```

### Создание таблицы

Для создания таблицы в базе данных используйте запрос SQL с использованием класса `QSqlQuery`. Пример кода:

```cpp
QSqlQuery query;
query.exec("CREATE TABLE IF NOT EXISTS employees (id INT PRIMARY KEY, name TEXT, age INT)");

```

### Добавление данных

Для добавления данных в таблицу используйте запрос SQL с использованием класса `QSqlQuery`. Пример кода:

```cpp
QSqlQuery query;
query.prepare("INSERT INTO employees (id, name, age) VALUES (:id, :name, :age)");
query.bindValue(":id", 1);
query.bindValue(":name", "John Doe");
query.bindValue(":age", 30);
query.exec();

```

### Удаление данных

Для удаления данных из таблицы используйте запрос SQL с использованием класса `QSqlQuery`. Пример кода:

```cpp
QSqlQuery query;
query.exec("DELETE FROM employees WHERE id = 1");

```

### Обновление данных

Для обновления данных в таблице используйте запрос SQL с использованием класса `QSqlQuery`. Пример кода:

```cpp
QSqlQuery query;
query.prepare("UPDATE employees SET name = :name, age = :age WHERE id = :id");
query.bindValue(":name", "Jane Smith");
query.bindValue(":age", 35);
query.bindValue(":id", 1);
query.exec();

```

### Вывести данные в алфавитном и обратном алфавитном порядке

Для вывода в алфавитном порядке используется

```cpp
query.exec("SELECT * FROM library ORDER BY name ASC")

```

Для обратного алфавитного порядка используется

```cpp
query.exec("SELECT * FROM library ORDER BY name DESC")

```

Пример кода:

```cpp
    if(!query.exec("SELECT * FROM library ORDER BY name ASC")) {
        qDebug() << query.lastError();
    }
    else {
        QSqlRecord rec = query.record();

        while (query.next()) {
            int nNumber = query.value(rec.indexOf("id")).toInt();
            QString name = query.value(rec.indexOf("name")).toString();
            QString author = query.value(rec.indexOf("author")).toString();
            QString genre = query.value(rec.indexOf("genre")).toString();

            qDebug() << nNumber << " " << name << "\\\\t" << author << "\\\\t" << genre;
        }
    }

```


