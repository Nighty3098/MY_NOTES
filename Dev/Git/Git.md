---
tags:
  - Git
---

### **Установка**

Перейдите на сайт [git-scm.com](https://git-scm.com/downloads) и выберите способ установки Git под свою операционную систему. Для Windows можно скачать загрузочный файл и поставить Git как обычную программу. Базовые настройки можно не менять.

Git на macOS и Linux удобно устанавливать через программу «Терминал». Если у вас Linux — узнайте название своего дистрибутива. Если macOS — поставьте менеджер пакетов [Homebrew](https://brew.sh/ru/). После введите команду загрузки.

```bash
# Устанавливаем Git на macOS
$ brew install git

# Устанавливаем Git на популярные Linux-дистрибутивы
# Fedora
yum install git

# Debian/Ubuntu
apt-get install git

# OpenSUSE
zypper install git 
```
Если у вас macOS и Linux — оставайтесь в «Терминале». Если Windows — откройте программу Git Bash, которая установится вместе с системой Git.

Введите в консоли команду и проверьте установку Git. Вы должны увидеть номер версии, которая загружена в вашу систему. Иногда вместо номера версии выводится сообщение об ошибке: Unsupported command: git. Это означает, что Git установить не получилось и процесс нужно повторить.

```bash
# Команда для проверки установки Git
git --version 
```

![](https://skillbox.ru/upload/setka_images/11495616052024_6caf85fa09e0642959e62c753d9a2f18236eb1da.jpg)

Устанавливаем Git на Windows и через Git Bash проверяем номер актуальной версии  

### **Настройка**

После установки Git нужно провести его начальную настройку. Для этого вам нужно указать свои имя, фамилию и почту. Эти данные видны в коммитах, и по ним другие разработчики будут знать, когда вы вносили изменения в проект.

```bash
# Команда для указания имени и фамилии
git config --global user.name "Name Surname"

# Команда для указания электронной почты
git config --global user.email "your@email"

# Команда для проверки настроек
git config --list 
```

![](https://skillbox.ru/upload/setka_images/11495416052024_c0c954a3a268bfc515e88839a41a25de5bd1b194.jpg)

Настраиваем тестовую конфигурацию Git на Windows через Git Bash  

### **Создание репозитория**

Когда Git настроен, вы можете создать проект. Для этого выполним несколько команд: создадим новую папку, зайдём в неё и инициализируем репозиторий.

Если репозиторий успешно инициализирован, то у вас в проекте появится скрытая папка .git. В этой папке система Git будет хранить метаинформацию, которая необходима для работы. Это ваш локальный репозиторий.

```bash
# Создаём новую папку
mkdir название_проекта
# Переходим в созданную папку
cd название_проекта
# Инициализируем локальный репозиторий
git init
# Проверяем список открытых и скрытых файлов и папок
ls -a 
```

![](https://skillbox.ru/upload/setka_images/11495516052024_cece785eb92cd643f5e788e5f37e3d933a76f56c.jpg)

Создаём репозиторий в системе Windows через Git Bash  


Проверим работу репозитория. Для этого создадим новый файл и выполним коммит — сохраним его в нашем локальном репозитории. Нужные команды:

```bash
# Создаём текстовый файл
echo "# Test message" >> test.txt

# Подготавливаем текстовый файл к коммиту
git add .
# Делаем коммит и сохраняем файл в репозитории
git commit -m "My first commit"
```

![](https://skillbox.ru/upload/setka_images/11495416052024_2229e417950c39bd1ac90259b6c781a232a40430.jpg)

Сохраняем файл в локальном репозитории через Git Bash  

Введём команду git log и посмотрим в журнал. Перед вами должна появиться информация о сделанном коммите. Вы увидите дату внесения изменений, имя и фамилию автора, почту, текст сообщения и [хеш](https://skillbox.ru/media/code/kheshfunktsiya-chto-eto-dlya-chego-nuzhna-i-kak-rabotaet/?utm_source=media&utm_medium=link&utm_campaign=all_all_media_links_links_articles_all_all_skillbox) коммита. Теперь если вы продолжите разработку, то в любой момент сможете вернуться и посмотреть, в каком состоянии находился проект на этапе первого коммита.

![](https://skillbox.ru/upload/setka_images/11495416052024_71b97f3681cfd481f98f8279e17d064ae63ea66a.jpg)
