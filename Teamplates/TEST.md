# TEST



```cpp

    if (query.exec())
    {
        if (query.next())
        {
            projectData << query.value("title").toString();
            projectData << query.value("git_url").toString();
            projectData << query.value("projectDoc").toString();
            projectData << query.value("status").toString();
            projectData << query.value("createdTime").toString();
            qDebug() << "Load project: " << projectData;
        }
    }

```