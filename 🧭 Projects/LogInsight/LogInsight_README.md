---
tags:
  - Repository
  - Project
  - LogInsight
---
# Программа для анализа лог файлов и выявления аномалий и ошибок


## Задачи: [[🧭 Projects/LogInsight/Tasks]]

#### Установка:

```shell
git clone https://github.com/Nighty3098/LogInsight
cd LogInsight
make
sudo ln LogInsight /bin/
LogInsight
```

#### Использование

```
Usage: ./LogInsight [-r] [-f <level>] -i <file>
  -r             Display all changes in real time
  -f <level>     Level filtering (CRITICAL, WARNING, INFO, DEBUG)
  -i <file>      Path to log file
  -h, --help     Show this help
```
