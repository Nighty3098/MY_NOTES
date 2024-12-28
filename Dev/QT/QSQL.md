---
tags:
  - qt
---
### Connecting a database

To connect a database in Qt, you must use the `QSqlDatabase` class. Example code:

```cpp
#include <QSqlDatabase>
#include <QSqlError>
#include <QDebug>

QSqlDatabase db = QSqlDatabase::addDatabase(“QSQLITE”);
db.setDatabaseName(“database.db”);

if (!db.open()) {
    qDebug() << “Failed to connect to database:” << db.lastError().text();
    return;
}

```

### Creating a table

To create a table in the database, use a SQL query using the `QSqlQuery` class. Example code:

```cpp.
QSqlQuery query;
query.exec(“CREATE TABLE IF NOT EXISTS employees (id INT PRIMARY KEY, name TEXT, age INT)”);

```

### Adding data

To add data to the table, use a SQL query using the `QSqlQuery` class. Example code:

```cpp.
QSqlQuery query;
query.prepare(“INSERT INTO employees (id, name, age) VALUES (:id, :name, :age)”);
query.bindValue(“:id”, 1);
query.bindValue(“:name”, “John Doe”);
query.bindValue(“:age”, 30);
query.exec();

```

### Deleting data

To delete data from a table, use a SQL query using the `QSqlQuery` class. Example code:

```cpp.
QSqlQuery query;
query.exec(“DELETE FROM employees WHERE id = 1”);

```

### Update data

To update data in a table, use a SQL query using the `QSqlQuery` class. Example code:

```cpp.
QSqlQuery query;
query.prepare(“UPDATE employees SET name = :name, age = :age WHERE id = :id”);
query.bindValue(“:name”, “Jane Smith”);
query.bindValue(“:age”, 35);
query.bindValue(“:id”, 1);
query.exec();

```

### Output data in alphabetical and reverse alphabetical order

To output in alphabetical order we use

```cpp
query.exec(“SELECT * FROM library ORDER BY name ASC”)

```

For reverse alphabetical order use 
```cpp
query.execute(“SELECT * FROM library ORDER BY name ASC”)
```

```cpp
query.exec(“SELECT * FROM library ORDER BY name DESC”)
```

Sample code:

```cpp
    if((!query.exec(“SELECT * FROM library ORDER BY name ASC”))) {
        qDebug() << query.lastError();
    }
    else {
        QSqlRecord rec = query.record();

        while (query.next()) {
            int nNumber = query.value(rec.indexOf(“id”)).toInt();
            QString name = query.value(rec.indexOf(“name”)).toString();
            QString author = query.value(rec.indexOf(“author”)).toString();
            QString genre = query.value(rec.indexOf(“genre”)).toString();

            qDebug() << nNumber << “ ‘ << name << ’\\\\t” << author << “\\\\t” << genre;
        }
    }

```

