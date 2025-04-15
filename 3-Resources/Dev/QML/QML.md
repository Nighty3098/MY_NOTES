---
tags:
  - qml
---

## QML as a tool for building user interfaces

We will develop a simple text editor that can load, save, and edit text. This tutorial consists of two parts. The first part covers the development of the application's appearance and behavior using the declarative language QML. The second part will implement document loading and saving functions based on Qt libraries and C++. Using Qt's meta-object mechanism ([Meta-Object System](https://doc.qt.io/qt-4.8/metaobjects.html)), we can make C++ functions available as properties of QML elements. Using QML and C++, we can effectively separate the interface logic from the application logic.

![qml-texteditor5_editmenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor5_editmenu.png)

To run QML examples, there is a utility [qmlviewer](https://doc.qt.io/qt-4.8/qmlviewer.html) that takes a QML file as an argument. To understand the C portion of the tutorial, the reader will need to know the basics of developing applications using Qt.

### Creating a button and menu

### The basic component is a button

We will begin the development of our text editor by creating a button. Functionally, a button contains a mouse clickable area and a text label. The button performs an action when the user clicks on it. In QML, the basic visual element is [Rectangle](https://doc.qt.io/qt-4.8/qml-rectangle.html). A _Rectangle_ has properties that are responsible for its appearance and location.

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

The first line: _import Qt 4.8_ allows the _qmlviewer_ utility to import the QML elements we will use later. This line must be present in all QML files. This line indicates which version of the Qt libraries will be used.

The rectangle we create has a unique identifier _simplebutton_, which is set in the _id_ property. Property values are set after the colon. For example, to specify the color of the rectangle, gray is defined in the _color_ property (string _color: “grey”_). Similarly, we can specify the _width_ (width) and _height_ (height) properties.

The _Text_ (text) sub-element is an immutable text field. We will set its _id_ to _buttonLabel_. To set the text displayed by this element, we will set the _text_ property to _text_. The text label is inside the rectangle and in order to place it in the center of our component, we will bind the anchors (_anchors_) of the text element to its parent through the use of the _anchors.centerIn_ property (center on the specified object). The position of elements can be anchored to each other through the use of the _anchors_ property. This simplifies and speeds up the process of arranging elements on the form.

We will save the code to the _SimpleButton.qml_ file. Running _qmlviewer_ with this file as an argument (command “_qmlviewer SimpleButton.qml_”) will show a gray rectangle with text on the screen.

![qml-texteditor1_simplebutton.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_simplebutton.png)

We can use QML event handling to implement button clicks. It is very similar to Qt's ([Signals and Slots](https://doc.qt.io/qt-4.8/signalsandslots.html)) signal-slots mechanism. We can associate the execution of specified actions with a specific signal (_signal_). Thus, when the specified signal occurs, a function called a slot (_slot_) will run.

```qml
Rectangle{
 id:simplebutton
 ...
 MouseArea{
 id: buttonMouseArea
 anchors.fill: parent // the area to receive mouse events will occupy the entire parent area
 //the onClicked signal handles mouse clicks on the MouseArea area
 onClicked: console.log(buttonLabel.text'' “ clicked” )
 }
 }
```

We add a [MouseArea](https://doc.qt.io/qt-4.8/qml-mousearea.html) element to our _simplebutton_. The _MouseArea_ describes the interactive area where all mouse events (clicks, movement, scroll wheel actions) are handled. For our button, we'll anchor the _MouseArea_ on top of the entire _simplebutton_. The _anchors.fill_ entry is one way to access a special _fill_ property within a group of properties called _anchors_. QML uses an anchor-based element layout mechanism ([anchor based layout](https://doc.qt.io/qt-4.8/qml-anchor-layout.html)). This means that elements can attach to other objects, creating a stable layout.

The _MouseArea_ has many signal handlers that are called during mouse actions within certain boundaries. For example, the _onClicked_ event handler is called every time a mouse button is clicked (the left button, by default). We can associate the required action with the _onClicked_ event. In this case, we call _console.log(buttonLabel.text + “ clicked”)_ as a response to a button click. _console.log()_ is a function that allows us to output text messages to the console (this can be useful when debugging applications). _buttonLabel.text_ - a property of the _buttonLabel_ object that contains the text specified earlier.

The _SimpleButton.qml_ file contains everything you need to display a text button on the screen and output click messages to the console.

```qml
Rectangle {
 id:Button
 ...

property color buttonColor: “lightblue”
 property color onHoverColor: “gold”
 borderColor: “white” property color

buttonClick()
 onButtonClick: {
 console.log(buttonLabel.text + “ clicked” )
 }

MouseArea{
 onClicked: buttonClick()
 hoverEnabled: true
 onEntered: parent.border.color = onHoverColor
 onExited: parent.border.color = borderColor
 }

//define the color of the button using the conditional statement
 color: buttonMouseArea.pressed ? Qt.darker(buttonColor, 1.5) : buttonColor
 }
```

The _Button.qml_ file contains a description of a more functional button. To save space and to make it clearer, parts of the code described earlier or not relevant to the current topic will be replaced with an ellipsis (...). At the end of the article you can find links to the final files.

In addition to the predefined properties, objects in QML can have additional properties defined by the developer himself. These so-called “custom properties” (_custom properties_) are declared using an expression like: _property type name_ (_property_ is the keyword for declaring a property, _type_ is the property's data type, _name_ is the property's name).

The _buttonColor_ property of type _color_ is declared and associated with the value “lightblue”. This property is further used in the operation of determining the button's fill color. Note that not only the colon, but also the more familiar equal sign (=) can be used to set property values. Custom properties allowed inside the element will be available outside (when we create C++ functions). The basic [QML types](https://doc.qt.io/qt-4.8/qdeclarativebasictypes.html) are: _int_, _string_, _real_, and a type called _variant_.

In the _onEntered_ (the mouse cursor appeared over an object) and _onExited_ (the cursor left the object) signal handlers, we change the border color of the button. When the cursor appears over the button, the color of its frame becomes gold (“gold”); when the cursor leaves the button, the frame becomes white (“white”) again.

The _buttonClick_ signal is declared in _Button.qml_ using the _signal_ keyword. All signals have their handlers created automatically, and their names begin with _on_. As a result, _onButtonClick_ is a handler for the _buttonClick_ signal, which performs the necessary actions (in this case, outputting text to the console). We then bind the _onClicked_ event to the _onButtonClicked_ handler. This mechanism makes it easy to access the _onButtonClicked_ handler from different objects. For example, an element may have multiple areas of type _MouseArea_, and we can bind the _buttonClick_ signal to events in each of these areas.

So now we have a basic understanding of creating elements using QML, and we have learned how to handle basic mouse events. We have created a text box inside a rectangle, customized its properties, and specified the response to mouse actions. The idea of creating elements inside other elements applies throughout the text editor.

The button created is useless unless you use it as a component to perform some action. In the next section, we will create a menu that contains several buttons.

![qml-texteditor1_button.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_button.png)

### Creating menu items

We have already learned how to create items and define their behavior in a single QML file. In this section, we will learn how to import previously created items and reuse them when developing new components.

A menu is a component that contains a list of several items that define different actions. There are several ways to create a menu using QML. First, we'll create a menu from a few buttons. The code that implements the File menu can be found in the _FileMenu.qml_ file.

 import Qt 4.8 //import Qt QML module
 import “folderName” //import the contents of the folder
 import “script.js” as Script //import code from a Javascript file, call this code by the name Script

The above code shows how the _import_ keyword can be used. This is necessary in order to use JavaScript or QML files that are located in a different directory. Since the _Button.qml_ file is in the same folder as the _FileMenu.qml_ file, we don't need to import the _Button.qml_ file to work with it. We can simply create an element of class _Button_ by declaring _Button{}_ just like we previously used the _Rectangle{}_ declaration.

 In the FileMenu.qml file:

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

In the _FileMenu.qml_ file, we have created three elements of the _Button_ class. All these buttons are located inside an element of the _Row_ class, which allows child elements to be arranged in vertical columns. The _Button_ class is defined in the _Button.qml_ file described in the previous section. For new buttons, we set new property values that will overwrite the default values specified in the _Button.qml_ file. Clicking on a button named _exitButton_ closes the application. It is worth noting that the _onButtonClick_ handler actions from _Button.qml_ will be called in addition to the _onButtonClick_ handler in the _exitButton_ description.

![qml-texteditor1_filemenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_filemenu.png)

The Row class creates a rectangular container for arranging buttons by columns. This additional rectangle allows you to organize a group of buttons as a simple menu.

The _Edit_ menu is defined in the same way as the File menu and contains buttons labeled Copy, Paste, and Select All.
![qml-texteditor1_editmenu.png](https://doc.qt.io/qt-4.8/images/qml-texteditor1_editmenu.png)

Having mastered importing and reusing previously created elements, we can now move on to creating a menu bar. We also have to learn how to structure data in QML.

## Create a menu bar

For our text editor, we need to find a way to display the different menus. Therefore, in this section we will implement a special panel (_Menu Bar_) that will allow us to switch between different child menus. This means that we need to define a structure that allows us not just to display buttons in a row, but also to switch between multiple menus. For such tasks, QML implements the _Model-View_ mechanism, which allows us to separate structured data from its display on the screen.

### Using Models and Views

QML has several views ([data view](https://doc.qt.io/qt-4.8/qdeclarativemodels.html)) for displaying data models ([data model](https://doc.qt.io/qt-4.8/qdeclarativemodels.html)). Our panel will display a row with a menu list containing menu names. The menu list is defined inside the [VisualItemModel](https://doc.qt.io/qt-4.8/qml-visualitemmodel.html) model. The _VisualItemModel_ class element contains objects that already have their own views (_view_) and can display their data independently, for example, with the previously discussed _Rectangle_ object. Other types of models (e.g., [ListModel](https://doc.qt.io/qt-4.8/qml-listmodel.html)) require delegate objects (_delegate_).

We will define two visual elements (_FileMenu_ and _EditMenu_) inside the _menuListModel_, and then customize both menus and display them using [ListView](https://doc.qt.io/qt-4.8/qml-listview.html). The QML file _MenuBar.qml_ contains descriptions of these menus, and in the file _EditMenu.qml_ we can find an implementation of a simple Edit menu.

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

The [ListView](https://doc.qt.io/qt-4.8/qml-listview.html) component can display items based on a delegate (_delegate_). The delegate can be used to set the data to be displayed either as a row using an element of the _Row_ class, or as a table. Our _menuListModel_ already contains the items to be displayed, so there is no need to use a delegate.

```qml
 ListView {
  id: menuListView

  //anchors are bound to the size of the parent component
  anchors.fill: parent
  anchors.bottom: parent.bottom
  width: parent.width
  height: parent.height

  //model contains data
  model: menuListModel

  //control mouse gestures to change menus
  snapMode: ListView.SnapOneItem
  orientation: ListView.Horizontal
  boundsBehavior: Flickable.StopAtBounds
  flickDeceleration: 5000
  highlightFollowsCurrentItem: true
  highlightMoveDuration:240
  highlightRangeMode: ListView.StrictlyEnforceRange
  }
```

_ListView_ is a descendant of the [Flickable](https://doc.qt.io/qt-4.8/qml-flickable.html) class, which allows the list to respond to mouse gestures. The last part of the code sets the properties for _Flickable_. This allows us to control mouse gestures to change menus on our component. For example, the _highlightMoveDuration_ property sets the duration of the animation when responding to gestures - the larger the _highlightMoveDuration_, the slower the menu switching will be.

_ListView_ allows access to all items in the model using the index assigned to the item when it is added to a list or defined in a QML file. Changing the _currentIndex_ property causes the currently selected element to change to _ListView_. Which can be seen in the header of our menu bar. There are two buttons in the header, when clicked on, the corresponding menu is displayed. Clicking on the _fileButton_ selects the File menu, whose index is 0 because this element was first defined in the _menuListModel_ description. Similarly, the _editButton_ displays the Edit menu.

The position of elements in QML can be described not only by using anchors, which are responsible for placement along the _x_ and _y_ axes, but also by using the _z_ property, which allows you to place some elements on top of others, as in a layer cake. The larger the _z_, the higher the element layer is placed in the layer stack. By default, the _z_ property is 0, so all elements are placed on the same layer. For the _labelList_ rectangle, we set _z_ to 1, which allows this object to be displayed on top of all other elements whose _z_ has not changed and is 0.

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

The menu bar we just created allows you to switch menus not only by using mouse gestures (in this case, dragging and dropping), but also by clicking on the corresponding buttons at the top of the bar.

![qml-texteditor2_menubar.png](https://doc.qt.io/qt-4.8/images/qml-texteditor2_menubar.png)

### Developing a text editor

### TextArea declaration

Our text editor won't be a text editor if it doesn't have an editable text field. The QML element [TextEdit](https://doc.qt.io/qt-4.8/qml-textedit.html) allows us to describe a multi-line editable field. [TextEdit](https://doc.qt.io/qt-4.8/qml-textedit.html) is different from the [Text](https://doc.qt.io/qt-4.8/qml-text.html) element, which does not allow the user to directly edit text.

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

The editor has the following properties: font color and hyphenation mode. The _TextEdit_ is inside the _Flickable_ area, which will scroll the text if the cursor is out of range. The _ensureVisible()_ function checks to see if the cursor is outside of the visible bounds, then it moves the text area accordingly. QML uses Javascript syntax to execute this script, and as mentioned earlier, Javascript files can be imported and used in a QML file.

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

### Combining components for the text editor

We are now ready to deploy the visual elements for our text editor using QML. The text editor has two components, the main menu we created and the text box. QML allows us to reuse the components. So to simplify our code, we will import the components and customize their layout. Our text editor window will be split into two parts. One third of the window will be taken up by the menu and the remaining two thirds will be taken up by the text box. The menu will be displayed on top of the other elements.

```qml
Rectangle {

 identifier: screen
 width: 1000; height: 1000

 //screen is divided between MenuBar and TextArea. 1/3 of the screen is given to MenuBar
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
  y: section
  color: “white”
  height: partition*2
  width:parent.width
  }
 }
```

The reuse of components makes the code of our _TextEditor_ look quite simple. We can customize the core application without worrying about properties whose behavior is already described. Creating UI components and placing application components can be a very simple task when using this approach.

![qml-texteditor3_texteditor.png](https://doc.qt.io/qt-4.8/images/qml-texteditor3_texteditor.png)

### Text editor design

### Sliding panel implementation

Our text editor looks very simple, so we will try to decorate it. Using QML, we can declare transitions (_transitions_) and add animations to our editor. The menu takes up one third of the window and it will be great if it is displayed only when we need it.

We can add a sliding panel that will collapse or expand the menu on click. In our implementation, we will make a narrow rectangle that will respond to mouse clicks. The panel as well as the application will have two states: “open” and “closed”.

The _drawer_ element is a narrow horizontal bar. The nested element [Image](https://doc.qt.io/qt-4.8/qml-image.html) displays an image with an arrow in the center of the panel. The _drawer_ changes the state of the entire application using the _screen_ identifier, each time the user clicks on it.

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


_state_ is a simple collection of settings, it is declared in the [State](https://doc.qt.io/qt-4.8/qml-state.html) element. Groups of states can be linked in the _states_ property. In our application, there are two states _DRAWER_CLOSED_ and _DRAWER_OPEN_. The element settings are declared in the [PropertyChanges](https://doc.qt.io/qt-4.8/qml-propertychanges.html) elements. In the _DRAWER_OPEN_ state, all four elements will have their properties changed. The _menuBar_ will change the _y_ property value to 0, the _textArea_ will go lower, and the arrow on the panel will change direction.


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


State changes need a smoother transition. Transitions between states are declared in the [Transition](https://doc.qt.io/qt-4.8/qml-transition.html) element, which can be associated with the _transitions_ property of our element. Our editor is in transition every time its state changes from _DRAWER_OPEN_ to _DRAWER_CLOSED_ and vice versa. It's important to note that _Transition_ needs the declared properties _from_ and _to_ - the start and end states, but for our transitions we can use the generalization symbol *, meaning that the transition applies to all states.

During a transition, we can add animations to change properties. Our _menuBar_ changes position from _y:0_ to **y:-partition** and we can animate this transition using the [NumberAnimation](https://doc.qt.io/qt-4.8/qml-numberanimation.html) element. We declare a time interval and a transition curve (_easing curve_) for the properties that will change during the animation. Transition curves control the animation coefficients and interpolation behavior during transitions between states. The curve we have chosen is [Easing.OutQuint](https://doc.qt.io/qt-4.8/qml-propertyanimation.html#easing.type-prop), it slows down the motion at the end of the animation.

Please read the article [QML Animation](https://doc.qt.io/qt-4.8/qdeclarativeanimation.html) for a more detailed description of the different types of animation.


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

Another way to animate property changes is to declare a [Behavior](https://doc.qt.io/qt-4.8/qml-behavior.html) element. The transition only works during state changes and [Behavior](https://doc.qt.io/qt-4.8/qml-behavior.html) can set animations for the main properties being changed. In our editor, the arrow has an animation of type _NumberAnimation_, which allows the arrow to be rotated when the animation starts. This is done through changing the _rotation_ property.

```qml
In TextEditor.qml:

 Behavior{
  NumberAnimation{property: "rotation";easing.type: Easing.OutExpo }
  }
```


Let's return to our components. We can improve their appearance using the knowledge we have gained about states and transitions. In the _Button.qml_ file, we can add changing the _color_ and _scale_ properties when the button is pressed. The colors are changed with [ColorAnimation](https://doc.qt.io/qt-4.8/qml-coloranimation.html) and the scale with [NumberAnimation](https://doc.qt.io/qt-4.8/qml-numberanimation.html). The _on propertyName_ entry is useful when you want to apply animation to only one property.


```
In Button.qml:
 …

color: buttonMouseArea.pressed ? Qt.darker(buttonColor, 1.5) : buttonColor
 Behavior on color { ColorAnimation{ duration: 55} }

scale: buttonMouseArea.pressed ? 1.1 : 1.00
 Behavior on scale { NumberAnimation{ duration: 55} }
```


We can also enhance the appearance of our QML components by adding color effects such as gradients and transparency changes. Declaring a [Gradient](https://doc.qt.io/qt-4.8/qml-gradient.html) element overrides the _color_ property. You can declare a gradient color using the [GradientStop](https://doc.qt.io/qt-4.8/qml-gradientstop.html) element. The _position_ of _GradientStop_ elements can take values between 0.0 and 1.0.


In MenuBar.qml
```qml
 gradient: Gradient {
  GradientStop { position: 0.0; color: "#8C8F8C" }
  GradientStop { position: 0.17; color: "#6A6D6A" }
  GradientStop { position: 0.98; color: "#3F3F3F" }
  GradientStop { position: 1.0; color: "#0e1B20" }
  }
```

This gradient is used to give volume to the menu bar. The first color starts at 0.0 and the last color ends at 1.0
