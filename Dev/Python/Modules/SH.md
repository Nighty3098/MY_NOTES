---
tags:
  - py_modules
---
![[Pasted image 20240527171504.png]]

Вызов программ операционной системы

sh (https://github.com/amoffat/sh) — это полноценный интерфейс, как альтернатива subprocess, который позволяет вызывать любую программу, как если бы это была обычная функция. 
Все запускаемые команды импортируются, как обычные функции, но функциями не являются, а лишь динамически обращаются к командам системы. Таким образом мы можем по сути обратиться к любой программе в системе.

sh полагается на системные вызовы Unix и работает только в Unix-подобных операционных системах, т.е. данный модуль не подойдет для работы с Windows.
Для обращения к командам программы и передать набор аргументов команды, мы можем передать их как обычные аргументы функции.

Также в модуле реализована функция which, которая находит полный путь до программы либо возвращает None, если программа не найдена.