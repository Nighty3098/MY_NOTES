---
tags:
  - Git
---
```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```


> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


## **Диалекты и редакторы**

Базовым Markdown уже мало кто пользуется. Зато у него существуют спецификации и диалекты, которые добавляют в язык новые функции: встраивание HTML-тегов, создание таблиц и чекбоксов, зачёркивание текста, разные варианты переноса строки.

Разные редакторы Markdown могут поддерживать или не поддерживать часть новых функций — учтите это при выборе платформы, на которой будете работать.

Самый распространённый Markdown — диалект [GitHub Flavored Markdown](https://github.github.com/gfm/), основанный на спецификации [CommonMark](https://commonmark.org/). В этой статье мы пользуемся редактором [Markdown Editor](https://jbt.github.io/markdown-editor/), который поддерживает практически все инструменты этой парочки (кроме чекбоксов).

## **Параграфы и разрывы строк (paragraphs and line breaks)**

Чтобы поделить текст на параграфы, между ними нужно оставить пустую строку. Строка считается пустой, даже если в ней есть пробелы и табуляции. Если же строки находятся рядом, то они автоматически склеиваются в одну.

`   Первый параграф `
`Второй параграф Продолжение второго параграфа   `

![](https://skillbox.ru/upload/setka_images/11575109022023_5c20dcbcfbab07ab6c2df7e27444d5ac2afca569.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Для переноса строки внутри одного параграфа есть три метода:

- поставить в конце строки два или больше пробела   ;
- поставить в конце строки обратную косую черту \;
- использовать HTML-тег <br>.

`   Перенос с помощью пробелов   Перенос с помощью обратного слеша\ Перенос с помощью тега <br> Последняя строка   `

![](https://skillbox.ru/upload/setka_images/11575109022023_278cadb5c5a600fd354bbb4a32acf34407bf98f0.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Обратите внимание, что у каждого из методов есть свои недостатки:

- пробелы в конце строки бывает трудно заметить, и это может запутать читателя;
- обратный слеш вводится в стандарте CommonMark и может поддерживаться не всеми редакторами;
- HTML-теги в Markdown также поддерживаются не всеми редакторами.

## **Заголовки (headings)**

В синтаксисе Markdown есть шесть уровней заголовков: от H1 (самого большого) до H6 (самого маленького). Для их выделения используют решётки #, при этом есть несколько тонкостей:

- решётки можно ставить как перед заголовком, так и с двух сторон от него (на уровень заголовка влияют только те #, которые находятся перед ним);
- количество решёток соответствует уровню заголовка: одна для первого уровня, две для второго и так далее;
- между решёткой и текстом ставится пробел.

`# Заголовок первого уровня ## Заголовок второго уровня ## ### Заголовок третьего уровня #### Заголовок четвёртого уровня # ##### Заголовок пятого уровня ############ ###### Заголовок шестого уровня`

![](https://skillbox.ru/upload/setka_images/11575109022023_bd473197c461193ea9b6d317f4c236910d065887.png)

Отображение заголовков в разных редакторах Markdown может различаться. Например, некоторые редакторы (как [Markdown Editor](https://jbt.github.io/markdown-editor/), которым мы пользуемся) помещают под заголовки первого и второго уровня подчёркивание, а некоторые нет. Отображение результата в браузере  
_Скриншот: Skillbox Media_

У заголовков первого и второго уровня есть альтернативный способ выделения: на следующей строке после них нужно поставить знаки равенства = или дефисы -. Вот несколько правил:

- знак = применяется для заголовков H1;
- дефис применяется для заголовков H2;
- если в одной строке поставить оба знака, то работать ничего не будет;
- можно ставить любое количество знаков, и на тип заголовка это не повлияет;
- между заголовком и знаками не должно быть пустых строк.

`   Заголовок первого уровня = Заголовок первого уровня ========= Заголовок второго уровня - Заголовок второго уровня ----------   `

![](https://skillbox.ru/upload/setka_images/11575109022023_e3039f248dd555899a396179b51a05be377f9973.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Выделение текста (emphasis)**

Чтобы изменить начертание текста, нужно выделить его с двух сторон спецсимволами следующим образом: <спецсимвол>текст<спецсимвол>.

### **Курсив (italic)**

Для выделения текста курсивом нужно использовать одну звёздочку * или нижнее подчёркивание _.

`   *Текст курсивом*  _Текст курсивом_   `

![](https://skillbox.ru/upload/setka_images/12012609022023_ee673444daa2c4c150863fb4fe2e59385df85324.png)

_Скриншот: Skillbox Media_

### **Жирный (bold)**

Для выделения текста жирным нужно использовать две звёздочки ** или два нижних подчёркивания __.

`   **Жирный текст**  __Жирный текст__   `

![](https://skillbox.ru/upload/setka_images/12012609022023_a3e9b924b0c79cb7169afa563a255fa0a5b1cadd.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

### **Жирный курсив (bold and italic)**

Для выделения текста сразу обоими стилями нужно использовать три звёздочки *** или три нижних подчёркивания ___.

`   ***Текст жирным курсивом***  ___Текст жирным курсивом___   `

![](https://skillbox.ru/upload/setka_images/12012709022023_cae856732bd4226855875d839121e46dd85999a9.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Обратите внимание, что если вы хотите выделить фрагмент внутри слова, то это корректно сработает только при использовании звёздочек.

`   Кор*рек*тно, кор**рек**тно, кор***рек***тно  Некор_рек_тно, некор__рек__тно, некор___рек___тно   `

![](https://skillbox.ru/upload/setka_images/12064909022023_073efc852a65b7685aeef7707c1c1bd107b26868.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

### **Зачёркнутый (strikethrough)**

Чтобы зачеркнуть текст, нужно использовать две тильды ~~. Такая опция есть только в диалекте GitHub Flavored Markdown.

`   ~~Зачёркнутый текст~~   `

![](https://skillbox.ru/upload/setka_images/12065009022023_d0e289e355555cb39f9d7f499b6888c389473c54.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

### **Подчёркнутый (underline)**

В синтаксисе Markdown нет встроенного способа подчеркнуть текст. Но если ваш редактор поддерживает HTML, то можно использовать теги:

`   <u>Подчёркнутый текст</u>   `

![](https://skillbox.ru/upload/setka_images/12075209022023_26df41bdfacbababd13ce5a2ed7e751b3c19643a.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Разделители (horizontal rules)**

Чтобы оформить горизонтальный разделитель, нужно поставить три или больше специальных символа: звёздочки *, дефиса - или нижних подчёркивания _. Они должны находиться на отдельной строке, и между ними можно ставить любое количество пробелов и табуляций.

Если ваш редактор поддерживает HTML-теги, то для разметки можно также использовать тег <hr>.

`*** --- ___ *	*  **  ---`

![](https://skillbox.ru/upload/setka_images/12075209022023_6451db2226570ea0b99a95968d54a6a08d58b1f8.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Цитаты (blockquotes)**

Чтобы параграф отобразился как цитата, нужно поставить перед ним закрывающую угловую скобку >.

`   > Оформление цитатой последовательных строк внутри одного параграфа   `

![](https://skillbox.ru/upload/setka_images/12075209022023_79a3bf1b60dcd0c001f9454c21d4401a9576e013.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Внутрь одного блока цитаты можно поместить сразу несколько параграфов и использовать любые элементы оформления. Например, заголовки и другие цитаты. Чтобы сделать это, нужно поместить закрывающую угловую скобку перед началом каждой строки.

`   > # Заголовок > Первый параграф > > Второй параграф > > > Вложенная цитата > > > Цитата третьего уровня > > Продолжение основной цитаты   `

![](https://skillbox.ru/upload/setka_images/12075209022023_44e69e18d5579b310b71a78d394ed8c7a91c182f.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Списки (lists)**

В синтаксисе Markdown есть несколько видов списков. Для их оформления перед каждым пунктом нужно поставить подходящий тег и отделить его от текста пробелом.

### **Нумерованные (ordered)**

Для создания нумерованного списка перед пунктами нужно поставить число с точкой. При этом нумерация в разметке ленивая. Неважно, какие именно числа вы напишете: Markdown пронумерует список автоматически.

`   1. Первый пункт 2. Второй пункт 3. Третий пункт   1. Первый пункт 1. Второй пункт 1. Третий пункт   1. Первый пункт 73. Второй пункт 5. Третий пункт   `

![](https://skillbox.ru/upload/setka_images/12092909022023_854dea6f537eb50a7df2fcca1a632655ba83fb34.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Список можно начинать и не с единицы. Для нумерации важно только число, которое стоит перед первым пунктом.

`   27. Первый пункт 27. Второй пункт 27. Третий пункт   `

![](https://skillbox.ru/upload/setka_images/12092909022023_35e8ec2c216ebe3b8a886221f50a89fb11b30057.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Обратите внимание, что между двумя нумерованными списками, идущими подряд, нужно отбить две пустые строки. Если отбить только одну, то Markdown воспримет два списка как один. Некоторые редакторы в таком случае увеличивают интервал между пунктами.

`   1. Первый пункт 2. Второй пункт 3. Третий пункт  1. Четвёртый пункт 2. Пятый пункт 3. Шестой пункт   `

![](https://skillbox.ru/upload/setka_images/12093009022023_977ecce833acf31fb612a48f20161dd32ced1cab.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

### **Ненумерованные (unordered)**

Для создания ненумерованного списка нужно поставить перед каждым пунктом звёздочку *, дефис - или плюс +.

`   * Первый пункт * Второй пункт * Третий пункт - Первый пункт - Второй пункт - Третий пункт + Первый пункт + Второй пункт + Третий пункт   `

![](https://skillbox.ru/upload/setka_images/12092909022023_3511985f8d2fe60f5a689701dcfbe84110df1893.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Обратите внимание, что Markdown относит к разным спискам пункты, перед которыми стоят разные маркеры. Даже несмотря на то, что мы не оставляем пустых строк между списками.

Если же два списка идут подряд, а перед их пунктами стоят одинаковые маркеры, тогда между ними нужно отбить две пустые строки (как в случае с нумерованными списками).

### **Чекбоксы (checkboxes)**

Чтобы сделать чекбоксы, нужно использовать маркированный список, но между маркером и текстом поставить [x] для отмеченного пункта и [] — для неотмеченного.

Чекбоксы доступны в диалекте GitHub Flavored Markdown (тот самый, который умеет зачёркивать текст) и поддерживаются не всеми редакторами Markdown. Например, нам для демонстрации примера пришлось открывать другой.

`   - [x] Отмеченный пункт - [ ] Неотмеченный пункт   `

![](https://skillbox.ru/upload/setka_images/12092909022023_5df0b482fb1dc77b26b81c121d5af0d3e5869e14.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

### **Вложенные (nested)**

Чтобы создать вложенный список, нужно поставить перед его пунктами табуляцию или несколько пробелов. В Markdown одна табуляция соответствует четырём пробелам.

Список одного вида можно вкладывать в любой другой.

`   1. Пункт 	1. Подпункт 		1. Подподпункт  - Пункт 	- Подпункт 		- Подподпункт   1. Пункт 	- Подпункт 		* Подподпункт  + Пункт 	1. Подпункт  - Пункт   - [x] Отмеченный подпункт   - [ ] Неотмеченный подпункт     1. Подподпункт   `

![](https://skillbox.ru/upload/setka_images/12130309022023_4cbe6f4354dda2f27002951462e6105f47be6d89.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

На самом деле количество пробелов, которые нужно поставить для корректного отступа, рассчитывается чуть сложнее. Берётся количество символов в маркере (один для *, - и +, два для 1., три для 10.), и к нему прибавляется любое число от 1 до 4.

Таким образом, если в маркере 1 символ, нужно поставить от 2 до 5 пробелов, если 2 символа — от 3 до 6, если 3 символа — от 4 до 7.

### **Другие элементы внутри списков**

В пункты списков можно добавлять другие элементы оформления. Например, параграфы или цитаты. Для этого нужно сделать отступ, как если бы вы добавляли вложенный список.

`   1. Первый пункт 	> Цитата внутри первого пункта 1. Второй пункт  	     Параграф внутри второго пункта 1. Третий пункт   `

![](https://skillbox.ru/upload/setka_images/12130409022023_2d42bcd147bbaf6c3e403c3df1bc46190d6f5651.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Ссылки (links)**

Самый лёгкий способ поместить ссылку в Markdown — заключить её в угловые скобки. Несмотря на простоту, он не является основным и был добавлен только в спецификации CommonMark.

`   <https://skillbox.ru/media/code/>   `

![](https://skillbox.ru/upload/setka_images/12130309022023_04e895521bad597e6bd544a1cb9afcd9db62fcf7.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Чтобы оформить ссылкой часть текста, используется такой синтаксис: [текст](ссылка). Можно сделать всплывающую подсказку при наведении курсора. Для этого в круглых скобках после ссылки нужно поставить пробел и написать текст подсказки в кавычках.

`   [Skillbox Media](https://skillbox.ru/media/) без подсказки  [Skillbox Media](https://skillbox.ru/media/ "Всплывающая подсказка") с подсказкой   `

![](https://skillbox.ru/upload/setka_images/12130509022023_fd855cfe5fcc2e450b54422f60ca2e4a0b277aab.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Ещё один способ оформить ссылку — справочный. Он работает как сноски в книгах: [текст][имя сноски]. При таком способе организации ссылок в конце документа нужно также написать и оформить саму сноску: [имя сноски]: ссылка. При желании после ссылки можно добавить подсказку — точно так же, как в предыдущем методе.

Имя сноски может быть любым сочетанием символов: цифрами, буквами и даже знаками препинания. На одну и ту же сноску в тексте можно ссылаться сколько угодно раз.

Ссылки, оформленные справочным методом, выглядят и работают точно так же, как и в предыдущем способе. Сами сноски в отформатированном документе не отображаются.

`   [Skillbox Media][1]  [Раздел «Код»][code]   [1]: https://skillbox.ru/media "Всплывающая подсказка" [code]: https://skillbox.ru/media/code/   `

![](https://skillbox.ru/upload/setka_images/12130309022023_a4fda8a8daf91ce2662aa3054d135a8d8c1242a8.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Картинки (images)**

Изображения в Markdown оформляются по принципу, схожему с принципом оформления ссылкок, только перед квадратными скобками нужно поставить восклицательный знак: ![текст](путь к изображению). Здесь также можно сделать всплывающую подсказку.

`   ![Изображение](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png "Логотип Markdown")   `

![](https://skillbox.ru/upload/setka_images/12161109022023_a6433e3d0e387dfcc17fb3247071ca7d850a189e.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Можно использовать и справочный метод: ![текст][имя сноски]. Сноски оформляются так же, как и в ссылках: [имя сноски]: путь к изображению, — в них тоже можно добавлять подсказки.

`   ![Изображение][1]   [1]: https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png "Логотип Markdown"   `

Такая разметка выведет тот же результат, что и предыдущая.

## **Вставка кода (code)**

В Markdown есть несколько способов выделить исходный код:

- Если надо отобразить фрагмент кода внутри строки с каким-то текстом, нужно с двух сторон выделить этот код одним или несколькими обратными апострофами (`; их ещё называют бэктиками).
- Чтобы выделить фрагмент из нескольких строк, нужно с двух сторон выделить его тремя обратными апострофами.
- Также перед фрагментом кода можно поставить табуляцию или четыре пробела, при этом предыдущая строка должна быть пустой.

``   Функция `print (x)` выводит содержимое переменной ```x```.  ``` #include <stdio.h> int main() {    printf("Hello, World!");    return 0; } ```  	let x = 12; 	let y = 6; 	console.log(x + y);   ``

![](https://skillbox.ru/upload/setka_images/12161109022023_d923d832852c84ff8cb1d764c150f8a33ddaf2bc.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Если обрамлять код тремя обратными апострофами, то после первой тройки можно указать язык программирования — тогда Markdown правильно подсветит элементы кода.

`   ```python if x > 0: 	print (x) else: 	print ('Hello, World!') ```  ```c #include <stdio.h> int main() {    printf("Hello, World!");    return 0; } ```  ```javascript let x = 12; let y = 6; console.log(x + y); ```   `

![](https://skillbox.ru/upload/setka_images/12161209022023_e232256a49fa7e721d9a6532e6c1427f31d3174c.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Возможность вставлять блоки кода тремя обратными апострофами появилась в спецификации CommonMark, но там не указан список псевдонимов: как правильно называть языки, чтобы Markdown понял, о чём речь.

Поэтому каждая реализация ведёт свой собственный список языков и их псевдонимов. Так как их очень много, да ещё и новые время от времени добавляются, то удобных таблиц обычно не делают. Предлагают сразу ознакомиться с конфигурационным файлом.

Вот такой [список языков](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml), например, поддерживает диалект GitHub Flavored Markdown.

## **Таблицы (tables)**

В уже упомянутом выше диалекте GitHub Flavored Markdown (и некоторых других тоже) есть возможность оформлять таблицы. Столбцы разделяются вертикальными линиями |, а строка с шапкой отделяется от остальных дефисами -, которых можно ставить сколько угодно.

`   |Столбец 1|Столбец 2|Столбец 3| |-|--------|---| |Длинная запись в первом столбце|Запись в столбце 2|Запись в столбце 3| |Кртк зпс| |Слева нет записи|   `

![](https://skillbox.ru/upload/setka_images/12161209022023_f9b0de1e9b4ae52e91fcaefb97f3a0c121b34237.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

Чтобы выровнять весь столбец по правому краю, в строке с дефисами сразу после дефисов можно поставить двоеточие :. Чтобы выровнять содержимое по центру, надо поставить двоеточия с обеих сторон.

`   |Столбец 1|Столбец 2|Столбец 3| |:-|:-:|-:| |Равнение по левому краю|Равнение по центру|Равнение по правому краю| |Запись|Запись|Запись|   `

![](https://skillbox.ru/upload/setka_images/12161209022023_699184ca50692a14175429d1c4431ae86d6bbbb6.png)

Отображение результата в браузере  
_Скриншот: Skillbox Media_

## **Экранирование (escaping characters)**

Многие символы в Markdown выполняют роль служебных. Если они встречаются в вашем тексте сами по себе, то для корректного отображения их стоит экранировать (иначе они просто не только не отобразятся сами, но и добавят вашему тексту какое-нибудь ненужное форматирование). Для этого перед ними ставится обратная косая черта \.

Вот список символов, которые нужно экранировать: \`*_{}[]<>()#+-.! |. Делать это постоянно необязательно — достаточно ставить экран только в тех случаях, когда Markdown может воспринять эти символы как служебные. Например, если строка начинается с символа #, то экранировать её надо — потому что программа может решить, что вы хотите сделать заголовок. А вот если решётка находится где-то в центре строки, то экранировать ничего не надо — редактор поймёт, что тут она просто часть текста.

[[Badges]]