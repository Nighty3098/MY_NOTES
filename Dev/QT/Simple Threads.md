---
tags:
  - CPP
---
```cpp
QThread *thread = new QThread;

QObject::connect(thread, &QThread::started, this, [this, projectData]() { getRepositoryData(projectData[1]); });

thread->start();
```