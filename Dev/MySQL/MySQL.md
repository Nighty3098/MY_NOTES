---
tags:
  - MySql
---
## **What is MySQL and how did it appear**

MySQL is a database management system (DBMS). Many people habitually call it just a database, but this is incorrect - the difference between these two concepts is about the same as between a library and a librarian. In this case, the data acts as the first, and the DBMS itself acts as the second. It is the DBMS that carries out all the complex manipulations with data: sorts, adds, deletes, finds, displays at the user's request, and so on.

To make it easier to access data, MySQL stores it in the form of tables related to each other. This model is called **relational**, and it is far from new. Banks and government agencies were the first to use it back in the 1970s to organize huge layers of data into a single system and speed up transactions.

Here is a simplified example of a relational database for an impromptu online cinema - there are three separate tables for movies, users and reviews, which are linked by special keys (the ID column).

![](https://skillbox.ru/upload/setka_images/14161315012024_accf102caaa970ce65d217b9ae9a8e9a57caa67c.jpg)

MySQL itself appeared much later, in the mid-1990s, in response to the rapid growth of the Internet and the dot-com boom. Mid-level webmasters and startup owners did not need complex and expensive systems for corporate servers like [Oracle DB](https://skillbox.ru/media/code/baza-dannykh-oracle-db-kak-ona-ustroena-i-chem-khorosha/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox) and [Microsoft's SQL Server](https://skillbox.ru/media/code/baza-dannykh-ms-sql-server-chto-eto-zachem-nuzhna-kak-poyavilas-i-chem-khorosha/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox). They want a simple, no-frills, and preferably inexpensive system — as they say, “plug and play.”

And MySQL was a perfect fit for this request. Firstly, it’s incredibly easy to set up thanks to a large set of interface features and clear documentation. And secondly, from the very beginning it was distributed under the free GNU GPL license — that is, it can be used absolutely free of charge. True, only for non-commercial purposes — otherwise, you’ll still have to fork over the money for a paid license.

Thanks to its simplicity and flexibility, MySQL is included in many ready-to-use assemblies for setting up web servers. For example, the letter M in the name of the LAMP technology stack stands for MySQL. Moreover, the other three parts of the set — Linux, Apache, and PHP — can change depending on the version of the package, but MySQL is the constant.

As for the name, everything is clear with the word SQL — it’s the name of the language for managing relational databases. But there are different versions about My:

“It’s not entirely clear where the name MySQL comes from. At TcX (the company where MySQL was born. — Ed.), the base directory, as well as a significant number of libraries and utilities, had the My prefix for ten years. At the same time, my daughter (who is several years younger) is also called My. Therefore, it remains a mystery which of the two sources gave the name MySQL."

**MICHAEL (MONTY) WIDENIUS**,
creator of MySQL

The roots of the world-famous DBMS are in Scandinavia. It was developed by Michael Widenius and put on a commercial footing by him together with his friends from Sweden, David Axmark and Allan Larsson. With joint efforts, Uncle Linus' followers founded MySQL AB in 1995, which was in charge of the project.

The free float lasted 13 years: in 2008, the company was bought by Sun Microsystems, the developer of the world-famous Java, and two years later, Sun itself came under the wing of Oracle. We must give credit to the oracles - they did not abandon the philosophy of free software and continue to develop the product together with the open community of developers.

## **Who and what uses MySQL**

Currently MySQL is [at the top](https://db-engines.com/en/ranking) of the most popular DBMS in the world, it is used in a variety of companies and development areas. Here are some examples:

**Websites and web applications**

Blogs, forums, social networks, marketplaces - millions of resources use MySQL for data management. Among the world-famous representatives: WordPress, Joomla, Drupal, social networks "Facebook"*, X, forums phpBB and vBulletin, CMS Magento and others.

**Startups and small businesses**

For small projects mySQL is a real find. A popular case: test a project on a free version of MySQL, and if things go well, buy a license or move to a more powerful DBMS.

**Corporate systems**

It is logical that MySQL allows you to manage data not only on web resources, but also at enterprises.

**Scientific research in the field of data science and data analytics.**

MySQL allows engineers to manage big data, perform complex queries, analyze and visualize results - especially in combination with special libraries and tools.

**Education**

Here MySQL has two hypostases. In addition to managing student data
educational institutions, it is used to teach students the basics of databases.

**Online Games**

MySQL is used to store data about users, scenarios, and other aspects of online games. It is used by Minecraft, Counter-Strike, and Warcraft III, among others.

Now that we have seen that knowing MySQL is a sought-after skill, we can move on to learning the inner workings of this system.

## **How ​​the MySQL database works**

MySQL is based on a **client-server architecture**. This is when the database and its management system are stored on the server, and users connect to it using their devices. For example, we watch YouTube videos from Google servers through mobile applications.

But with the help of the "native" Embedded MySQL library, you can turn it into an **embedded** DBMS - that is, embed the server directly into the application and get a so-called thick client, as opposed to a thin one, which is only needed to receive data from the server.

Let's take a look at the main components of MySQL.

**Server (MySQL Server).** This is the central part of MySQL, which manages all databases. The server processes SQL queries, receives, processes, sends data and provides interaction with clients.

**Storage engine.** Responsible for the actual storage and organization of data in tables. When you create a table in MySQL, you specify which storage engine to use for this table.

Which storage engine to choose depends on the task. Some provide high read speed, but do not know how to work with transactions. Others are designed for instant access to data, but when the server is restarted, this data is lost. You can read more about the main types of storage and their purpose [in the article on OpenNET](https://www.opennet.ru/opennews/art.shtml?num=6226).

**Physical data structure.** Data physically written to the server's hard drive. Photos, phone numbers, bank accounts, player locations on a map in an online shooter — everything your app deals with.

**Logical structure.** A tabular representation of data written to disk. Each row of the table is a record, and each column is its attribute. In addition, each record has unique identifiers, or keys, that make it easy to find the data you need and link it to each other.

**Database schema.** These are logical structures that describe the organization of tables and the relationships between them in a database. One database can contain multiple schemas.

![](https://skillbox.ru/upload/setka_images/14444115012024_08fda0244b5397e030ee401fd2bea5b24f78a72b.jpg)

**Clients.** Web applications, applications in programming languages ​​(e.g. Python, Java) or administration tools that send SQL queries to the MySQL server to perform read, write, update and delete operations.

**SQL.** This is a universal language for communicating with relational databases. And although no DBMS speaks pure SQL, the version of the language in MySQL is as close to the original as possible. But, like any dialect, it has its own peculiarities.

Let's write code for example that will create a table in the database with information about Skillbox Media readers:

```MySQL

CREATE TABLE skillbox_readers (
id INT AUTO_INCREMENT,
name VARCHAR(100),
email VARCHAR(100),
join_date DATE,
PRIMARY KEY(id)
);

INSERT INTO skillbox_readers (name, email, join_date) VALUES
('Ivan Ivanov', 'ivanov@example.com', '2024-01-01'),
('Maria Petrova', 'petrova@example.com', '2024-01-02'),
('Alexey Sidorov', 'sidorov@example.com', '2024-01-03');
```

Now — let's sort readers by the date they were added to the database:

` SELECT * FROM skillbox_readers ORDER BY join_date ASC; `

**Security mechanisms.** MySQL provides security mechanisms for controlling access to data: user authentication, privilege management, and data encryption.

**Backups and recovery.** MySQL provides tools for creating backup copies of data and restoring them in case of failure. There are two types of backups in MySQL: physical and logical. The first makes a copy of all files on the disk without a table structure, the second makes a full dump of the database. You can read about the advantages and disadvantages of these approaches [here](https://habr.com/ru/companies/otus/articles/715808/).

## **What is MySQL for**

As we have already found out, the main task of MySQL is to effectively store, manage, and retrieve data on request. Now let's figure out what this means using specific examples.

### **Convenient database administration**

For this, MySQL has a powerful graphical environment Workbench. It has all the necessary tools for working with databases: from creation to operation. Visualize the database model? Please! Manually build connections between tables? No problem. Edit data in them, like in some Excel? A piece of cake. It is not worth talking about the convenient SQL query editor.

![](https://skillbox.ru/upload/setka_images/14493715012024_6896a8696b8038f4fc8989ab005e4fccc3b90047.jpg)

You can also administer databases via a browser. There is an open source application called phpMyAdmin for this. It is not as beautiful as Workbench, but it can be launched directly on the server — this makes it easier to manage the site and helps you get out of a jam if the hosting prohibits remote access to the server. You can try out the service and evaluate its features on the [official demo server](https://demo.phpmyadmin.net/master-config/public/).

Of course, there are a lot of other tools and methods of administration — but for now this is enough for a basic acquaintance :)

### **Distributed data storage**

In MySQL, it is implemented using replication and sharding mechanisms.

**Replication.** In this case, data is copied from the main master server to several secondary (called slaves). The master sends changes to its database, and the slaves repeat these changes and create a copy of the master's data. This ensures fault tolerance - if the main server suddenly fails and goes away for repairs, its work will be picked up by the others.

**Sharding.** The process of dividing the database into several smaller fragments, called shards. Each shard is processed by a separate server, which distributes the load and increases performance.

### **Multi-user access to the database**

One of the most important missions of any DBMS is to ensure that users can work with files without interfering with each other. Imagine that you and a colleague simultaneously made changes to an Excel file located somewhere on the server. And in the same cells. Whose changes will be written? The big question.

To avoid such questions, MySQL has a rule - when users access the same data, a queue is formed - you will not be able to make changes until the previous request is processed.

There are also more trivial rules - for example, each user must have a login and password (this is called authentication), as well as access rights to certain operations (this is called authorization). You can manage roles and privileges for user groups from the admin panel.
### **Database status monitoring**

MySQL has utilities that help monitor performance, monitor activity and identify problems. For example, in the already mentioned MySQL Workbench, you can track query activity, resource usage and much more in a convenient graphical interface.

Here are some more built-in tools:

- System variables that can be configured to optimize performance. For example, the SHOW VARIABLES command displays the current values ​​​​of system variables.
- Various types of logging (error log, general query log, slow query log) allow you to track errors, queries and slow queries.
- Version control systems Liquibase or Flyway help control changes to the database schema.
- Error and query logs help identify problems in MySQL.
- MySQL Profiler - allows you to analyze queries and identify performance bottlenecks.

These are just a few of the tools for monitoring the state of the database.