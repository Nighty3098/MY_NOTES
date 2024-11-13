---
tags:
  - qml
---

## QML как средство для построения пользовательских интерфейсов

Мы разработаем простой текстовый редактор, который сможет загружать, сохранять и редактировать текст. Это руководство состоит из двух частей. Первая часть затрагивает разработку внешнего вида приложения и его поведения, используя декларативный язык QML. Во второй части на основе библиотек Qt и языка C++ будут реализованы функции загрузки и сохранения документов. Используя механизм метаобъектов Qt ([Meta-Object System](https://doc.qt.io/qt-4.8/metaobjects.html)), мы можем сделать функции на языке C++ доступными в качестве свойств QML элементов. Используя QML и C++, мы можем эффективно отделять логику интерфейса от логики приложения.

![qml-texteditor5_editmenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor5_editmenu.png)

Для запуска примеров на QML, существует утилита [qmlviewer](https://doc.qt.io/qt-4.8/qmlviewer.html), принимающая QML-файл в качестве аргумента. Для понимания части руководства, затрагивающей C, читателю потребуется знание основ разработки приложений с использованием Qt.

## Создание кнопки и меню

### Базовый компонент - кнопка

Мы начнем разработку нашего текстового редактора с создания кнопки (button). Функционально кнопка содержит чувствительную к нажатию мыши область и текстовый ярлык. Кнопка выполняет действие, когда пользователь нажимает на нее. В QML базовый визуальный элемент - [Rectangle](https://doc.qt.io/qt-4.8/qml-rectangle.html) (Прямоугольник). _Rectangle_ имеет свойства, отвечающие за его внешний вид и расположение.

```qml
import Qt 4.8

Rectangle{
 id:simplebutton
 color: "grey"
 width: 150
 height: 80
 Text{
 id: buttonLabel
 text: "button label"
 anchors.centerIn: parent;
 }
 }
```

Первая строка: _import Qt 4.8_ разрешает утилите _qmlviewer_ импортировать QML-элементы, которые мы будем использовать позже. Эта строка должна присутствовать во всех QML-файлах. Эта строка указывает на то, какая версия библиотек Qt будет использоваться.

Созданный нами прямоугольник имеет уникальный идентификатор _simplebutton_, который задается в свойстве _id_. Значение свойств задаются после двоеточия. Так, например, для указания цвета прямоугольника, серый (grey) цвет определяется в свойстве _color_ (строка _color: "grey"_). Аналогично, мы можем задать свойства _width_ (ширина) и _height_ (высота).

Подэлемент _Text_ (текст) является неизменяемым текстовым полем. Для него мы установим _id_ равным _buttonLabel_. Чтобы установить отображаемый этим элементом текст, мы установим значение свойства _text_. Текстовая метка находится внутри прямоугольника и для того, чтобы разместить ее в центре нашего компонента, мы свяжем якоря (_anchors_) текстового элемента с его родителем (parent) через использование свойства _anchors.centerIn_ (центрировать на указанном объекте). Положение элементов можно привязывать друг к другу через использование свойства _anchors_. Это позволяет упростить и ускорить процесс компоновки элементов на форме.

Мы сохраним код в файл _SimpleButton.qml_. Запуск _qmlviewer_ с этим файлом в качестве аргумента (команда "_qmlviewer SimpleButton.qml_") покажет на экране серый прямоугольник с текстом.

![qml-texteditor1_simplebutton.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_simplebutton.png)

Для реализации нажатий на кнопку мы можем использовать обработку событий QML. Она очень похожа на механизм сигналов-слотов в Qt ([Signals and Slots](https://doc.qt.io/qt-4.8/signalsandslots.html)). С определенным сигналом (_signal_) мы можем связать выполнение заданных действий. Таким образом, при появлении указанного сигнала, запустится функция, называемая слотом (_slot_).

```qml
Rectangle{
 id:simplebutton
 …
 MouseArea{
 id: buttonMouseArea
 anchors.fill: parent //область для приема событий от мышки будет занимать всю родительскую область
 //сигнал onClicked обрабатывает клики мышкой по области MouseArea
 onClicked: console.log(buttonLabel.text'' " clicked" )
 }
 }
```

Мы добавляем элемент [MouseArea](https://doc.qt.io/qt-4.8/qml-mousearea.html) в наш _simplebutton_. _MouseArea_ описывает интерактивную область, в которой обрабатываются все события от мышки (клики, перемещение, действия колеса прокрутки). Для нашей кнопки, мы закрепим _MouseArea_ поверх всего _simplebutton_. Запись _anchors.fill_ - это один из способов доступа к специальному свойству _fill_ внутри группы свойств называемых _anchors_. QML использует механизм размещения элементов на основе якорей ([anchor based layout](https://doc.qt.io/qt-4.8/qml-anchor-layout.html)). Это означает, что элементы могут прикрепляться к другим объектам, создавая устойчивое размещение.

_MouseArea_ имеет множество обработчиков сигналов, вызываемых во время действий мышки в определенных границах. Так, обработчик события _onClicked_ вызывается каждый раз, когда происходит нажатие на кнопку мыши (на левую кнопку, по умолчанию). Мы можем связать необходимые действие с событием _onClicked_. В данном случае мы вызываем функцию _console.log(buttonLabel.text + " clicked")_ как ответ на нажатие кнопки. _console.log()_ - функция, которая позволяет выводить на консоль текстовые сообщения (это может быть полезно при отладке приложений). _buttonLabel.text_ - свойство объекта _buttonLabel_, содержащее заданный ранее текст.

Файл _SimpleButton.qml_ содержит все необходимое для отображения на экране текстовой кнопки и вывода в консоль сообщений о кликах по ней.

```qml
Rectangle {
 id:Button
 …

property color buttonColor: "lightblue"
 property color onHoverColor: "gold"
 property color borderColor: "white"

signal buttonClick()
 onButtonClick: {
 console.log(buttonLabel.text + " clicked" )
 }

MouseArea{
 onClicked: buttonClick()
 hoverEnabled: true
 onEntered: parent.border.color = onHoverColor
 onExited: parent.border.color = borderColor
 }

//определяем цвет кнопки с использованием условного оператора
 color: buttonMouseArea.pressed ? Qt.darker(buttonColor, 1.5) : buttonColor
 }
```

В файле _Button.qml_ находится описание более функциональной кнопки. Для экономии места и большей наглядности, части кода, описанные ранее или не относящиеся к текущей теме, будут заменяться многоточием (…). В конце статьи вы сможете найти ссылки на конечные файлы.

Помимо предустановленных свойств, объекты в QML могут иметь и дополнительные свойства, определенные самим разработчиком. Эти так называемые "пользовательские свойства" (_custom properties_) объявляются с помощью выражения вида: _property type name_ (_property_ - ключевое слово для объявления свойства, _type_ - тип данных свойства, _name_ - имя свойства).

Свойство _buttonColor_ типа _color_ объявлено и связано со значением "lightblue". В дальнейшем это свойство используется в операции определения цвета заливки кнопки. Отметим, что для установки значения свойств можно использовать не только двоеточие, но и более привычный знак равенства (=). Пользовательские свойства, разрешенные внутри элемента будут доступны и снаружи (когда мы будем создавать функции на языке C++). Базовые [типы QML](https://doc.qt.io/qt-4.8/qdeclarativebasictypes.html) это: _int_, _string_, _real_, а также тип, называемый _variant_.

В обработчиках сигналов _onEntered_ (курсор мышки появился над объектом) и _onExited_ (курсор покинул объект) мы меняем цвет рамки у кнопки. Когда курсор появляется над кнопкой, цвет ее рамки становится золотым ("gold"); когда курсор покидает кнопку, рамка снова станет белой ("white").

Сигнал _buttonClick_ объявлен в _Button.qml_ с помощью ключевого слова _signal_. Все сигналы имеют свои обработчики, создаваемые автоматически, их имена начинаются с _on_. В результате, _onButtonClick_ - это обработчик сигнала _buttonClick_, в котором выполняются необходимые действия (в данном случае, вывод текста в консоль). Далее мы связываем событие _onClicked_ с обработчиком _onButtonClicked_. Такой механизм позволяет легко получить доступ к обработчику _onButtonClicked_ из различных объектов. Например, элемент может иметь несколько областей типа _MouseArea_, и мы можем связать сигнал _buttonClick_ с событиями в каждой из этих областей.

Итак, теперь мы имеем базовые представления о создании элементов с использованием QML, а также мы научились обрабатывать базовые события мыши. Мы создали текстовое поле внутри прямоугольника, настроили его свойства и указали реакцию на действия мыши. Идея создания элементов внутри других элементов применяется во всем текстовом редакторе.

Созданная кнопка бесполезна, если не использовать ее как компонент для выполнения каких-либо действий. В следующем разделе мы создадим меню, содержащее несколько кнопок.

![qml-texteditor1_button.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_button.png)

### Создание элементов меню

Мы уже научились создавать элементы и определять их поведение в одном QML-файле. В этом разделе мы научимся импортировать созданные ранее элементы и повторно использовать их при разработке новых компонентов.

Меню представляет собой компонент, содержащий список из нескольких элементов, определяющих различные действия. Существует несколько способов создания меню с использованием QML. Для начала, мы создадим меню из нескольких кнопок. Код, реализующий меню "Файл" (File), можно найти в файле _FileMenu.qml_.

 import Qt 4.8 //импортируем модуль Qt QML
 import "folderName" //импортируем содержимое папки
 import "script.js" as Script //импортируем код из файла Javascript, назовем этот код именем Script

Представленный выше код показывает, как можно использовать ключевое слово _import_. Это необходимо для того, чтобы использовать файлы JavaScript или QML, которые расположены в другом каталоге. Так как файл _Button.qml_ находится в той же папке, что и файл _FileMenu.qml_, то у нас нет необходимости импортировать файл _Button.qml_ для работы с ним. Мы можем просто создать элемент класса _Button_, объявив _Button{}_ так же как мы ранее использовали объявление _Rectangle{}_.

 В файле FileMenu.qml:

```qml
 Row {
  anchors.centerIn: parent
  spacing: parent.width/6

  Button {
   id: loadButton
   buttonColor: "lightgrey"
   label: "Load"
   }
  Button {
   buttonColor: "grey"
   id: saveButton
   label: "Save"
   }
  Button {
   id: exitButton
   label: "Exit"
   buttonColor: "darkgrey"

   onButtonClick: Qt.quit()
   }
 }
```

В файле _FileMenu.qml_ мы создали три элемента класса _Button_. Все эти кнопки расположены внутри элемента класса _Row_, который позволяет располагать дочерние элементы в вертикальных столбцах. Определение класса _Button_ дано в файле _Button.qml_, описанном в предыдущем разделе. Для новых кнопок мы задаем новые значения свойств, которые перезапишут значения по умолчанию, указанные в файле _Button.qml_. При клике на кнопку с именем _exitButton_ приложение закрывается. Стоит заметить, что действия обработчика _onButtonClick_ из _Button.qml_ будут вызываться в дополнение к обработчику _onButtonClick_ в описании _exitButton_.

![qml-texteditor1_filemenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_filemenu.png)

Класс Row создает прямоугольный контейнер для расположения кнопок по столбцам. Этот дополнительный прямоугольник позволяет организовать группу кнопок в виде простого меню.

Меню "Правка" (_Edit_) определяется аналогичным образом как и меню "Файл" и содержит кнопки с ярлыками "Копировать" (Copy), "Вставить" (Paste) и "Выбрать все" (Select All).

![qml-texteditor1_editmenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_editmenu.png)

Освоив импорт и повторное использование ранее созданных элементов, мы теперь можем перейти к созданию панели меню. Также нам предстоит освоить способы структурирования данных в QML.

## Создание панели меню

Для нашего текстового редактора необходимо найти способ отображения различных меню. Поэтому в данном разделе мы займемся реализацией специальной панели (_Menu Bar_), которая позволит нам переключаться между различным дочерними меню. Это означает, что нам необходимо определить структуру, позволяющую не просто отображать кнопки в строку, но и переключаться между несколькими меню. Для подобных задач в QML реализован механизм "модель-представление" (_Model-View_), позволяющий отделить структурированные данные от их отображения на экране.

### Использование моделей и представлений

В QML имеется несколько представлений ([data view](https://doc.qt.io/qt-4.8/qdeclarativemodels.html)) для отображения моделей данных ([data model](https://doc.qt.io/qt-4.8/qdeclarativemodels.html)). Наша панель будет отображать строку со списком меню, содержащим названия меню. Список меню определен внутри модели [VisualItemModel](https://doc.qt.io/qt-4.8/qml-visualitemmodel.html). Элемент класса _VisualItemModel_ содержит объекты, которые уже имеют свои представления (_view_) и могут отображать свои данные самостоятельно, например, с помощью рассмотренного ранее объекта _Rectangle_. Остальные типы моделей (например, [ListModel](https://doc.qt.io/qt-4.8/qml-listmodel.html)) требуют наличие объектов-делегатов (_delegate_).

Мы определим два визуальных элемента (_FileMenu_ и _EditMenu_) внутри модели _menuListModel_, а затем настроим оба меню и отобразим их с использованием [ListView](https://doc.qt.io/qt-4.8/qml-listview.html). QML-файл _MenuBar.qml_ содержит описания этих меню, а в файле _EditMenu.qml_ можно найти реализацию простого меню "Правка" (Edit).

```qml
 VisualItemModel {
  id: menuListModel
  FileMenu {
   width: menuListView.width
   height: menuBar.height
   color: fileColor
   }
  EditMenu {
   color: editColor
   width: menuListView.width
   height: menuBar.height
   }
 }
```

Компонент [ListView](https://doc.qt.io/qt-4.8/qml-listview.html) может отображать элементы опираясь на делегат (_delegate_). С помощью делегата может задать, чтобы данные отображались либо в строку с использованием элемента класса _Row_, либо в виде таблицы. Наша _menuListModel_ уже содержит отображаемые элементы, поэтому нет необходимости использовать делегат.

```qml
 ListView {
  id: menuListView

  //якоря (anchors) привязаны к размерам родительского компонента
  anchors.fill: parent
  anchors.bottom: parent.bottom
  width: parent.width
  height: parent.height

  //model содержит данные
  model: menuListModel

  //контролируем жесты мышкой для смены меню
  snapMode: ListView.SnapOneItem
  orientation: ListView.Horizontal
  boundsBehavior: Flickable.StopAtBounds
  flickDeceleration: 5000
  highlightFollowsCurrentItem: true
  highlightMoveDuration:240
  highlightRangeMode: ListView.StrictlyEnforceRange
  }
```

_ListView_ является потомком класса [Flickable](https://doc.qt.io/qt-4.8/qml-flickable.html), что позволяет списку реагировать на жесты мышкой. Последняя часть кода устанавливает свойства для _Flickable_. Это позволяет контролировать жесты мышкой для смены меню на нашем компоненте. Так, свойство _highlightMoveDuration_ устанавливает длительность анимации при реакции на жесты - чем больше _highlightMoveDuration_, тем медленнее будет происходить переключение меню.

_ListView_ позволяет получить доступ ко всем элементам модели с использованием индекса, присвоенного элементу при добавлении в список или определении в QML-файле. Изменение свойства _currentIndex_ вызывает смену текущего выбранного элемента на _ListView_. Что можно видеть в заголовке нашей панели с меню. В заголовке расположено две кнопки, при клике на которые отображается соответствующее меню. При клике на кнопку _fileButton_ выбирается меню "Файл" (File), индекс которого равен 0, так как этот элемент был первым определен в описании _menuListModel_. Аналогично, кнопка _editButton_ позволяет отобразить меню "Правка" (Edit).

Положение элементов в QML можно описывать не только с помощью якорей, отвечающий за размещение по осям _x_ и _y_, но и с помощью свойства _z_, которое позволяет размещать одни элементы поверх других, как в слоеном пироге. Чем больше _z_, тем выше располагается слой элемента в стеке слоев. По умолчанию свойство _z_ равно 0, поэтому все элементы располагаются в одном слое. Для прямоугольника _labelList_ мы установили значение _z_ равным 1, что позволяет отображать этот объект поверх всех остальных элементов, у которых _z_ не менялось и равно 0.

```qml
 Rectangle {
  id: labelList
  …
  z: 1
  Row {
   anchors.centerIn: parent
   spacing: 40
   Button {
    label: "File"
    id: fileButton
    …
    onButtonClick: menuListView.currentIndex = 0
    }
   Button {
    id: editButton
    label: "Edit"
    …
    onButtonClick: menuListView.currentIndex = 1
    }
   }
  }
```

Панель меню (menu bar), которую мы только что создали, позволяет переключать меню не только с помощью жестов мышки (в данном случае - перетаскивание), но через нажатие на соответствующие кнопки вверху панели.

![qml-texteditor2_menubar.png](https://doc.qt.io/qt-4.8/images/qml-texteditor2_menubar.png)

## Разработка текстового редактора

### Объявление TextArea

Наш текстовый редактор не будет текстовым редактором, если в нем не будет редактируемого текстового поля. Элемент QML [TextEdit](https://doc.qt.io/qt-4.8/qml-textedit.html) позволяет описать многострочное редактируемое поле. [TextEdit](https://doc.qt.io/qt-4.8/qml-textedit.html) отличается от элемента [Text](https://doc.qt.io/qt-4.8/qml-text.html), который не позволяет пользователю напрямую редактировать текст.

```qml
TextEdit {
 id: textEditor
 anchors.fill:parent
 width:parent.width; height:parent.height
 color:"midnightblue"
 focus: true

 wrapMode: TextEdit.Wrap

 onCursorRectangleChanged: flickArea.ensureVisible(cursorRectangle)
 }
```

У редактора установлены свойства: цвет шрифта и режим переноса. _TextEdit_ находиться внутри _Flickable_ области, которая будет прокручивать текст, если курсор находиться за пределами видимости. Функция _ensureVisible()_ проверяет, если курсор находится за пределом видимых границ, то она соответственно перемещает текстовую область. QML использует синтаксис Javascript для выполнения этого скрипта, и, как уже упоминалось ранее, файлы Javascript могут быть импортированы и использованы в QML-файле.

```qml
function ensureVisible (r) {
 if (contentX >= r.x)
  contentX = r.x;
 else if (contentX+width <= r.x+r.width)
  contentX = r.x+r.width-width;
 if (contentY >= r.y)
  contentY = r.y;
 else if (contentY+height <= r.y+r.height)
  contentY = r.y+r.height-height;
 }
```

### Объединение компонентов для текстового редактора

Сейчас мы готовы разместить визуальные элементы для нашего текстового редактора, используя QML. Текстовый редактор имеет два компонента, главное меню, которое мы создали, и текстовое поле. QML позволяет нам использовать компоненты повторно. Поэтому, чтобы упростить наш код, мы импортируем компоненты и настроим их расположение. Окно нашего текстового редактора будет разбито на две части. Одну треть окна займет меню, а оставшиеся две трети - текстовое поле. Меню будет отображаться поверх остальных элементов.

```qml
Rectangle {

 id: screen
 width: 1000; height: 1000

 //экран разделяется между MenuBar и TextArea. 1/3 экрана отдается под MenuBar
 property int partition: height/3

 MenuBar {
  id:menuBar
  height: partition
  width:parent.width
  z: 1
  }

 TextArea {
  id:textArea
  anchors.bottom:parent.bottom
  y: partition
  color: "white"
  height: partition*2
  width:parent.width
  }
 }
```

Благодаря повторному использованию компонентов, код нашего _TextEditor_ выглядит достаточно простым. Мы можем настроить основное приложение, не заботясь о свойствах, поведение которых уже описано. Создание компонентов пользовательского интерфейса и размещение компонентов приложения может стать очень простой задачей при использовании этого подхода.

![qml-texteditor3_texteditor.png](https://doc.qt.io/qt-4.8/images/qml-texteditor3_texteditor.png)

## Оформление текстового редактора

### Реализация выдвижной панели

Наш текстовый редактор выглядит очень просто, поэтому мы попробуем его украсить. Используя QML, мы можем объявить переходы (_transitions_) и добавить анимацию нашему редактору. Меню занимает одну треть окна и будет здорово, если оно будет отображаться только тогда, когда нам это нужно.

Мы можем добавить выдвижную панель, которая будет сворачивать или разворачивать меню по клику. В нашей реализации, мы сделаем узкий прямоугольник, который будет реагировать на нажатия мыши. Панель также как и приложение будет иметь два состояния: "открыта" и "закрыта".

Элемент _drawer_ - это узкая горизонтальная полоска. Вложенный элемент [Image](https://doc.qt.io/qt-4.8/qml-image.html) отображает картинку со стрелкой в центре панели. _drawer_ меняет состояние всего приложения с помощью идентификатора _screen_, каждый раз когда пользователь кликнул по нему.

```qml
Rectangle {
 id:drawer
 height:15

 Image {
  id: arrowIcon
  source: "images/arrow.png"
  anchors.horizontalCenter: parent.horizontalCenter
  }

 MouseArea {
  id: drawerMouseArea
  anchors.fill:parent
  onClicked: {
   if (screen.state  "DRAWER_CLOSED") {
    screen.state = "DRAWER_OPEN"
    }
   else if (screen.state  "DRAWER_OPEN") {
    screen.state = "DRAWER_CLOSED"
    }
   }
  …
 }
```

_state_ - это простая коллекция настроек, она объявляется в элементе [State](https://doc.qt.io/qt-4.8/qml-state.html). Группы состояний могут быть связаны в свойство _states_. В нашем приложении существуют два состояния _DRAWER_CLOSED_ и _DRAWER_OPEN_. Настройки элемента объявляются в элементах [PropertyChanges](https://doc.qt.io/qt-4.8/qml-propertychanges.html). В состоянии _DRAWER_OPEN_ у всех четырех элементов будут изменены свойства. _menuBar_ изменит значение свойства _y_ на 0, _textArea_ опуститься ниже, а стрелка на панели изменит направление.

```qml
states: [
 State {
  name: "DRAWER_OPEN"
  PropertyChanges { target: menuBar; y: 0}
  PropertyChanges { target: textArea; y: partition'' drawer.height}
  PropertyChanges { target: drawer; y: partition}
  PropertyChanges { target: arrowIcon; rotation: 180}
  },
 State {
  name: "DRAWER_CLOSED"
  PropertyChanges { target: menuBar; y:-height; }
  PropertyChanges { target: textArea; y: drawer.height; height: screen.height- drawer.height}
  PropertyChanges { target: drawer; y: 0 }
  PropertyChanges { target: arrowIcon; rotation: 0 }
  }
 ]
```

Изменения состояний нуждаются в более плавном переходе. Переходы между состояниями объявляются в элементе [Transition](https://doc.qt.io/qt-4.8/qml-transition.html), который можно связать со свойством _transitions_ нашего элемента. Наш редактор находится в режиме перехода каждый раз, когда его состояние меняется с _DRAWER_OPEN_ на _DRAWER_CLOSED_ и наоборот. Важно заметить, что _Transition_ нуждается в объявленных свойствах _from_ и _to_ - начальном и конечном состоянии, но для наших переходов мы можем использовать обобщающий символ *, означающий, что переход применим для всех состояний.

Во время перехода мы можем добавить анимацию для изменения свойств. Наш _menuBar_ меняет позицию с _y:0_ на **y:-partition** и мы можем анимировать этот переход используя элемент [NumberAnimation](https://doc.qt.io/qt-4.8/qml-numberanimation.html). Мы объявляем временной интервал и переходную кривую (_easing curve_) для свойств, которые будут изменяться при анимации. Переходные кривые контролируют коэффициенты анимации и поведение интерполяции во время переходов между состояниями. Кривая, которую мы выбрали- [Easing.OutQuint](https://doc.qt.io/qt-4.8/qml-propertyanimation.html#easing.type-prop), она замедляет движение в конце анимации.

Пожалуйста, прочитайте статью [QML Animation](https://doc.qt.io/qt-4.8/qdeclarativeanimation.html) для получения более подробного описания различных типов анимации.

```qml
transitions: [
 Transition {
  to: "*"
  NumberAnimation { target: textArea; properties: "y, height"; duration: 100; easing.type:Easing.OutExpo }
  NumberAnimation { target: menuBar; properties: "y"; duration: 100; easing.type: Easing.OutExpo }
  NumberAnimation { target: drawer; properties: "y"; duration: 100; easing.type: Easing.OutExpo }
  }
 ]
```

Другой способ анимации изменения свойств, это объявление элемента [Behavior](https://doc.qt.io/qt-4.8/qml-behavior.html). Переход работает только во время изменения состояний и [Behavior](https://doc.qt.io/qt-4.8/qml-behavior.html) может установить анимацию для основных изменяемых свойств. В нашем редакторе, стрелка имеет анимацию типа _NumberAnimation_, что позволяет поворачивать стрелку при запуске анимации. Это делается через изменение свойства _rotation_.

```qml
In TextEditor.qml:

 Behavior{
  NumberAnimation{property: "rotation";easing.type: Easing.OutExpo }
  }
```

Вернемся к нашим компонентам. Мы можем улучшить их внешний вид, используя полученные знания о состояниях и переходах. В файле _Button.qml_, мы можем добавить изменение свойств _color_ и _scale_ когда кнопка нажата. Цвета изменяются с помощью [ColorAnimation](https://doc.qt.io/qt-4.8/qml-coloranimation.html), а масштаб с помощью [NumberAnimation](https://doc.qt.io/qt-4.8/qml-numberanimation.html). Запись _on propertyName_ полезна когда требуется применить анимацию только на одно свойство.

```
In Button.qml:
 …

color: buttonMouseArea.pressed ? Qt.darker(buttonColor, 1.5) : buttonColor
 Behavior on color { ColorAnimation{ duration: 55} }

scale: buttonMouseArea.pressed ? 1.1 : 1.00
 Behavior on scale { NumberAnimation{ duration: 55} }
```

Также мы можем улучшить внешний вид наших QML-компонентов, добавив такие цветовые эффекты как градиенты и изменение прозрачности. Объявление элемента [Gradient](https://doc.qt.io/qt-4.8/qml-gradient.html) переопределяет свойство _color_. Вы можете объявить цвет градиента используя элемент [GradientStop](https://doc.qt.io/qt-4.8/qml-gradientstop.html). Позиция (_position_) элементов _GradientStop_ может принимать значения между 0.0 и 1.0.

В MenuBar.qml
```qml
 gradient: Gradient {
  GradientStop { position: 0.0; color: "#8C8F8C" }
  GradientStop { position: 0.17; color: "#6A6D6A" }
  GradientStop { position: 0.98; color: "#3F3F3F" }
  GradientStop { position: 1.0; color: "#0e1B20" }
  }
```

Этот градиент используется для придания объема панели меню. Первый цвет начинается с 0.0 и последний заканчивается на 1.0

### Что делать дальше?

Мы закончили разработку пользовательского интерфейса очень простого текстового редактора. Продолжаем двигаться дальше, пользовательский интерфейс готов, и мы можем разрабатывать логику приложения, используя обычный Qt и C++. QML хорошо подходит как инструмент для построения прототипов и отделения логики приложения от графического пользовательского интерфейса.

![qml-texteditor4_texteditor.png](https://doc.qt.io/qt-4.8/images/qml-texteditor4_texteditor.png)

## Расширяем возможности QML с помощью C++

Теперь, когда мы имеем макет нашего приложения, мы можем приступить к реализации возможностей текстового редактора на C++. Использование QML вместе с C++ позволяет нам реализовать логику приложения с помощью Qt. Мы можем создать QML-контекст в приложении C++ используя классы [Qt Declarative](https://doc.qt.io/qt-4.8/qtbinding.html) и отображать элементы QML при помощи [QDeclarativeView](https://doc.qt.io/qt-4.8/qdeclarativeview.html), который основан на [Graphics View Framework](https://doc.qt.io/qt-4.8/graphicsview.html). Или же, мы можем экспортировать C++ код в плагин, который сможет использоваться в _qmlviewer_. Для нашего приложения мы разработаем функции загрузки и сохранения файла на C++ и экспортируем их как плагин. Это позволит запускать QML-приложение непосредственно в _qmlviewer_, а также полноценно работать с дизайнером QML в Qt Creator.

### Делаем C++ классы доступными в QML

Мы будем реализовывать загрузку и сохранение файла используя Qt и C++. C++ классы и функции могут использоваться в QML только после того, как будут зарегистрированы в нем. Класс должен быть собран как Qt-плагин, а QML-приложение должно знать месторасположение плагина.

Для нашего приложения, нам потребуется создать следующие элементы:

1. Класс _Directory_, который хранит список файлов (объекты типа _File_) и отвечает за операции с каталогами
2. Класс _File_, наследник [QObject](https://doc.qt.io/qt-4.8/qobject.html), который хранит имя файла
3. Класс плагина, который будет регистрироваться QML-контексте
4. Файл проекта Qt (с расширением .pro), для описания настроек сборки плагина
5. Файл _qmldir_, который сообщает _qmlviewer_ о том, где искать наш плагин

### Сборка плагина

Чтобы собрать плагин, нам необходимо добавить указания на исходники, заголовки, и модули Qt в наш файл проекта. Весь код на C++ и файлы проекта находятся в директории _filedialog_.

В cppPlugins.pro:

```pro
TEMPLATE = lib
 CONFIG ''= qt plugin
 QT''= declarative

DESTDIR ''= ../plugins
 OBJECTS_DIR = tmp
 MOC_DIR = tmp

 TARGET = FileDialog

 HEADERS''= directory.h  file.h  dialogPlugin.h

SOURCES += directory.cpp  file.cpp  dialogPlugin.cpp
```

Мы включаем в сборку модуль _declarative_ и указываем, что мы хотим собрать плагин (TEMPLATE = lib, CONFIG = plugin ). Также мы указываем, что собранный плагин должен быть помещен в директорию _plugins_, расположенную в родительском каталоге.

### Регистрация класса в QML

 В dialogPlugin.h:

```cpp
#include <QDeclarativeExtensionPlugin>

class DialogPlugin : public QDeclarativeExtensionPlugin
 {
 Q_OBJECT

public:
 void registerTypes(const char *uri);

};
```

Наш класс плагина _DialogPlugin_ является наследником [QDeclarativeExtensionPlugin](https://doc.qt.io/qt-4.8/qdeclarativeextensionplugin.html). Нам необходимо переопределить виртуальную функцию [registerTypes()](https://doc.qt.io/qt-4.8/qdeclarativeextensionplugin.html#registerTypes). Файл _dialogPlugin.cpp_ выглядит следующим образом:

DialogPlugin.cpp:

```cpp
#include "dialogPlugin.h"
 #include "directory.h"
 #include "file.h"
 #include <qdeclarative.h>

void DialogPlugin::registerTypes(const char *uri){

 qmlRegisterType<Directory>(uri, 1, 0, "Directory");
 qmlRegisterType<File>(uri, 1, 0,"File");
 }

 Q_EXPORT_PLUGIN2(FileDialog, DialogPlugin);
```

Функция [registerTypes()](https://doc.qt.io/qt-4.8/qdeclarativeextensionplugin.html#registerTypes) регистрирует наши классы _File_ И _Directory_ в QML. Эта функция требует названия классов для их прототипов, номера старшей и младшей версий классов и их имена.

Нам необходимо экспортировать плагин с помощью макроса [Q_EXPORT_PLUGIN2](https://doc.qt.io/qt-4.8/qtplugin.html#Q_EXPORT_PLUGIN2#q-export-plugin2). Обратите внимание, что в файле dialogPlugin.h мы имеем макрос [Q_OBJECT](https://doc.qt.io/qt-4.8/qobject.html#Q_OBJECT) в начале нашего класса. Также нам надо запустить _qmake_ для генерации мета-информации о наших классах.

### Создание QML-свойств в C++ классе

Мы можем создавать QML-элементы и определять их свойства, используя C++ и систему мета-информации Qt ([Meta-Object System](https://doc.qt.io/qt-4.8/metaobjects.html)). Мы можем сообщить Qt о свойствах наших объектов, используя для этого сигналы и слоты, тогда эти свойства будут доступны в QML.

Текстовый редактор должен иметь возможность загружать и сохранять файлы. Как правило, эти возможности содержатся в файловом диалоге. К счастью, мы можем использовать [QDir](https://doc.qt.io/qt-4.8/qdir.html), [QFile](https://doc.qt.io/qt-4.8/qfile.html) и [QTextStream](https://doc.qt.io/qt-4.8/qtextstream.html) для реализации чтения директории и операций ввода/вывода.

```cpp
 class Directory : public QObject{

 Q_OBJECT

 Q_PROPERTY(int filesCount READ filesCount CONSTANT)
 Q_PROPERTY(QString filename READ filename WRITE setFilename NOTIFY filenameChanged)
 Q_PROPERTY(QString fileContent READ fileContent WRITE setFileContent NOTIFY fileContentChanged)
 Q_PROPERTY(QDeclarativeListProperty<File> files READ files CONSTANT )
```

Класс _Directory_ использует систему мета-информации Qt для регистрации свойств, необходимых для работы с файлами. Класс _Directory_ экспортируется как плагин и может использоваться как элемент в контексте QML. Каждое из перечисленных свойств, использующих макрос [Q_PROPERTY](https://doc.qt.io/qt-4.8/qobject.html#Q_PROPERTY), является свойством QML.

[Q_PROPERTY](https://doc.qt.io/qt-4.8/qobject.html#Q_PROPERTY) объявляет свойство, а также его функции чтения и записи. Например, свойство filename, имеющее тип [QString](https://doc.qt.io/qt-4.8/qstring.html), читается при помощи функции filename() и устанавливается при помощи функции setFilename(). А каждый раз когда значение этого свойства меняется, генерируется сигнал filenameChanged(). Функции чтения и записи свойств объявлены как _public_ в файле заголовка.

Точно так же у нас есть другие свойства, объявленные в соответствии с их использованием. Свойство _filesCount_ указывает количество файлов в директории. Свойство _filename_ содержит имя текущего выбранного файла. Содержимое файла для чтения и записи хранится в свойстве _fileContent_.

Q_PROPERTY(QDeclarativeListProperty<File> files READ files CONSTANT )

Свойство _files_ содержит список всех отфильтрованных файлов в директории. Класс _Directory_ реализован так, чтобы отображать только корректные текстовые файлы; в данном случае, корректными считаются только файлы с расширением ".txt". Объекты класса [QList](https://doc.qt.io/qt-4.8/qlist.html) могут использоваться в QML после объявления их с ключевым словом _QDeclarativeListProperty_ в коде на C++. Заметим, что класс, указанный в качестве параметр-класса, должен быть потомком _QObject_, то есть класс _File_ также должен наследовать класс _QObject_. В классе _Directory_ список объектов типа _File_ хранится в переменной _m_fileList_ типа [QList](https://doc.qt.io/qt-4.8/qlist.html).

```cpp
 class File : public QObject{
	 Q_OBJECT
	 Q_PROPERTY(QString name READ name WRITE setName NOTIFY nameChanged)
 };
```
Свойства могут использоваться в QML как свойства элементов _Directory_. Заметим, что нам не следует создавать свойство _id_ для объектов на языке C++.

 Directory{
 id: directory

 filesCount
 filename
 fileContent
 files

 files[0].name
 }

Поскольку QML использует синтаксис и структуру языка Javascript, мы можем пройти по списку файлов как по массиву и узнать их свойства. Например, чтобы получить имя первого файла, нам достаточно обратиться к свойству _files[0].name_.

Обычные функции C++ также доступны из QML. Функции загрузки и сохранения файлов реализованы на языке C++ и определены с макросом _Q_INVOKABLE_. Также функцию можно объявить как слот (_slot_) и тогда она тоже будет доступна в QML.

 В файле Directory.h:

 Q_INVOKABLE void saveFile();
 Q_INVOKABLE void loadFile();

Класс _Directory_ также должен сообщать другим объектам о том, что содержимое каталога изменилось. Для этого объект данного класса генерирует определенный сигнал (_signal_). Как уже отмечалось ранее, сигналы в QML имеют соответствующие обработчики, начинающиеся с приставки _on_. В данном случае, сигнал называется _directoryChanged_ и генерируется каждый раз при обновлении содержимого каталога. При обновлении заново загружается список файлов в каталоге и создается список корректных текстовых файлов. Для того, чтобы объекты QML могли получать этот сигнал, в них необходимо реализовать обработчик сигнала _onDirectoryChanged_.

Более подробно стоит рассмотреть свойства объектов на C++. Свойства списка используют обратный вызов (_callback_) для получения и изменения содержимого списка. Свойства списка имеют тип _QDeclarativeListProperty<File>_. Каждый раз при обращении к списку, функция доступа должна возвращать _QDeclarativeListProperty<File>_. Так как параметр-класс _File_ является наследником _QObject_, то при создании свойств _QDeclarativeListProperty_ необходимо передать в конструктор ссылки на функции доступа и модификаторы. Также класс списка (в нашем случае _QList_) должен быть списком ссылок на объекты _File_.

Ниже приведено определение конструктора _QDeclarativeListProperty_ из класса _Directory_:

 QDeclarativeListProperty ( QObject* object, void * data, AppendFunction append, CountFunction count = 0, AtFunction at = 0, ClearFunction clear = 0 )
 QDeclarativeListProperty<File>( this, &m_fileList, &appendFiles, &filesSize, &fileAt, &clearFilesPtr );

В качестве аргументов, конструктору передаются ссылки на функции, которые позволяют добавлять элементы в список, узнавать количество элементов, получать элемент по индексу и очищать список. Однако, обязательной является только функция добавления элементов в список. Стоит заметить, что указатели должны ссылаться на функции, соответствующие описанию функций [AppendFunction](https://doc.qt.io/qt-4.8/qdeclarativelistproperty.html#AppendFunction-typedef), [CountFunction](https://doc.qt.io/qt-4.8/qdeclarativelistproperty.html#CountFunction-typedef), [AtFunction](https://doc.qt.io/qt-4.8/qdeclarativelistproperty.html#AtFunction-typedef) или [ClearFunction](https://doc.qt.io/qt-4.8/qdeclarativelistproperty.html#ClearFunction-typedef).

```
 void appendFiles(QDeclarativeListProperty<File> * property, File * file)
 File* fileAt(QDeclarativeListProperty<File> * property, int index)
 int filesSize(QDeclarativeListProperty<File> * property)
 void clearFilesPtr(QDeclarativeListProperty<File> *property)
```

Чтобы упростить нашу диалоговую форму, класс _Directory_ отфильтровывает некорректные файлы, имеющие расширение, отличное от _.txt_. То есть пользователь в списке увидит только файлы с расширением _.txt_. Также проверяется, чтобы сохраняемый файл также имел расширение _.txt_. _Directory_ использует класс [QTextStream](https://doc.qt.io/qt-4.8/qtextstream.html) для чтения данных и записи в файл.

Используя наш элемент _Directory_, мы можем получить список файлов, определить количество текстовых файлов в каталоге приложения, получить имя файла и его содержимое в виде строки [QString](https://doc.qt.io/qt-4.8/qstring.html), а также получить информацию об изменении содержимого каталога.

Для создания плагина необходимо выполнить команду _qmake_ для файла проекта _cppPlugins.pro_. Чтобы собрать бинарный файл и поместить его в каталог с плагинами (_plugins), необходимо выполнить команду _make_.

### Импорт плагина в QML

Утилита _qmlviewer_ импортирует файлы, расположенные в той же директории, что и разрабатываемое QML-приложение. Мы также можем создать файл _qmldir_ содержащий пути до QML-файлов, которые мы хотим импортировать. Также в файле _qmldir_ мы можем хранить информацию о расположении плагинов и других ресурсов.

 В qmldir:

Button ./Button.qml
 FileDialog ./FileDialog.qml
 TextArea ./TextArea.qml
 TextEditor ./TextEditor.qml
 EditMenu ./EditMenu.qml

plugin FileDialog plugins

Плагин, который мы создали, называется _FileDialog_, что указывается в поле _TARGET_ в файле описания проекта. Скомпилированный плагин располагается в каталоге _plugins_.

### Интеграция файлового диалога в меню

Наш элемент _FileMenu_ должен отображать элемент _FileDialog_, содержащий список текстовых файлов в директории, что позволяет пользователю выбрать файл, просто кликнув на него в списке. Также необходимо назначить действия для кнопок сохранения, загрузки и создания нового документа. _FileMenu_ содержит поле ввода, позволяющее пользователю ввести имя файла с помощью клавиатуры.

Элемент _Directory_, используемый в файле _FileMenu.qml_, уведомляет элемент _FileDialog_ о том, что необходимо обновить список отображаемых файлов. Этот сигнал обрабатывается в функции _onDirectoryChanged_.

In FileMenu.qml:

Directory{
 id: directory
 filename: textInput.text
 onDirectoryChanged: fileDialog.notifyRefresh()
 }

Чтобы упростить разработку нашего приложения, мы не будем скрывать наш файловый диалог. И как отмечалось ранее, наш файловый диалог будет отображать в списке только текстовые файлы с расширением _.txt_.

В FileDialog.qml:

signal notifyRefresh()
 onNotifyRefresh: dirView.model = directory.files

Компонент _FileDialog_ будет отображать содержимое текущего каталога, используя список под названием _files_. Для отображения элементов этот список использует компонент(представление) _GridView_, который отображает данные в виде таблицы с использованием делегатов. Делегат отвечает за внешний вид модели, и наш файловый диалог просто отобразит текстовую таблицу, с расположенными в центре именами файлов. При клике по имени файла, появится прямоугольник, обрамляющий выбранный элемент. Также наш FileDialog будет обновлять список файлов при получении соответствующего сигнала.

В FileMenu.qml:

```qml
Button {
 id: newButton
 label: "New"
 onButtonClick: {
  textArea.textContent = ""
  }
 }
 Button {
  id: loadButton
  label: "Load"
  onButtonClick: {
   directory.filename = textInput.text
   directory.loadFile()
   textArea.textContent = directory.fileContent
   }
  }
 Button {
  id: saveButton
  label: "Save"
  onButtonClick: {
   directory.fileContent = textArea.textContent
   directory.filename = textInput.text
   directory.saveFile()
   }
  }
 Button {
  id: exitButton
  label: "Exit"
  onButtonClick: {
   Qt.quit()
   }
  }
```

Теперь можно соединить элементы меню _FileMenu_ с соответствующими действиями. При нажатии на кнопку _saveButton_, текст будет передан из _TextEdit_ в свойство _fileContent_ элемента _directory_, а имя редактируемого файла будет скопировано из поля ввода. И после этого будет вызвана функция _saveFile()_ для сохранения файла. Кнопка _loadButton_ похожа по функциональности. Кнопка _newButton_ очищает содержимое _TextEdit_.

Аналогично, кнопки _EditMenu_ будут связаны с функциями _TextEdit_, выполняющими копирование, вставку и выбор всего текста в редакторе.

![qml-texteditor5_filemenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor5_filemenu.png)

## Текстовый редактор завершен

![qml-texteditor5_newfile.png](https://doc.qt.io/qt-4.8/images/qml-texteditor5_newfile.png)

Итак, созданное приложение может использоваться как простой текстовый редактор, способное редактировать текст и сохранять его в файл.

## Исходный код

Полный исходный код этого приложения можно взять [здесь](https://doc.qt.io/qt-4.8/gettingstartedqml.html).