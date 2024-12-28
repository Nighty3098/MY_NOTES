---
tags:
  - qt
---
## Create a simple application, e.g. with a main window (QMainWindow)

[![LanguageApp.png](https://qt-wiki-uploads.s3.amazonaws.com/images/c/c7/LanguageApp.png)](https://wiki.qt.io/File:LanguageApp.png)

In this example, we will create a main window with a language menu and several widgets. If the user opens the language menu, there is a language selection provided there, created during the startup phase of the application, dependent on the available language files.

[![LanguageAppMenu.png](https://qt-wiki-uploads.s3.amazonaws.com/images/7/7b/LanguageAppMenu.png)](https://wiki.qt.io/File:LanguageAppMenu.png)

## Application file system structure:

- Application directory
    - binaries
- Application directory/languages
    - For each installed language there is an optional 16x16 pixel picture with a flag (e.g. de.png)
    - Translated application text files (TranslationExample_*.qm, where * can take the values de, en, etc.)
    - Qt translation files (qt_*.qm)

## Class Definition

In the MainWindow class, the virtual method [changeEvent(QEvent*)](https://doc.qt.io/qt-6/qwidget.html#changeEvent) is rewritten. For each translation file needed, an instance of [QTranslator](https://doc.qt.io/qt-6/qtranslator.html#) is created .(in our example 2, one for application texts and one for Qt). The current language is kept to suppress events in case the user tries to load the same language twice.

```cpp
class MainWindow : public QMainWindow
{
 protected:
  // This event is called when a new translator is loaded or the system language has been changed
  void changeEvent(QEvent*);

 protected slots:
  // This slot is called by (QAction) menu actions
  void slotLanguageChanged(QAction* action);

 private:
  // loads the language by the given prefix (e.g.: de, en)
  void loadLanguage(const QString& rLanguage);

  // Creates a language menu dynamically from the contents of m_langPath
  void createLanguageMenu(void);

  Ui::MainWindow ui; // ui definition from designer
  QTranslator m_translator; // contains this application's translator
  QTranslator m_translatorQt; // contains the qt translator
  QString m_currLang; // contains the currently loaded language
  QString m_langPath; // Path to language files. fixed as /languages.

};
```

## Creating language menus

Language menus are created dynamically at application startup, depending on the availability of translation files. The advantage of this solution is that you can add any translation later, and it will still work after the application restarts. In this example, all text files are located in the “languages” subdirectory. It is also possible to place some icons there (language.png) that will be applied as icons in the menu (flag, for example).

Each language is represented by a [QAction](https://doc.qt.io/qt-6/qaction.html#) object, which is added to the [QActionGroup](https://doc.qt.io/qt-6/qactiongroup.html#). This is done so that only one slot is needed for all languages:

connect(langGroup, SIGNAL (triggered(QAction *)), this, SLOT (slotLanguageChanged(QAction *)));

The language menu is created like this:

```cpp
// create items dynamically, depending on the existing translations.
void MainWindow::createLanguageMenu(void)
{
 QActionGroup* langGroup = new QActionGroup(ui.menuLanguage);
 langGroup->setExclusive(true);

 connect(langGroup, SIGNAL (triggered(QAction *)), this, SLOT (slotLanguageChanged(QAction *)));

 // system language format
 QString defaultLocale = QLocale::system().name(); // e.g. “de_DE”
 defaultLocale.truncate(defaultLocale.lastIndexOf('_')); // e.g.. “de”

 m_langPath = QApplication::applicationDirPath();
 m_langPath.append(“/languages”);
 QDir dir(m_langPath);
 QStringList fileNames = dir.entryList(QStringList(“TranslationExample_*.qm”));

 for (int i = 0; i < fileNames.size(); ++i) {
  // get locale extracted by filename
  QString locale;
  locale = fileNames[i]; // “TranslationExample_de.qm”
  locale.truncate(locale.lastIndexOf('.')); // “TranslationExample_de”
  locale.remove(0, locale.lastIndexOf('_') + 1); // “de”

 QString lang = QLocale::languageToString(QLocale(locale).language());
 QIcon ico(QString(“%1/%2.png”).arg(m_langPath).arg(locale));

 QAction *action = new QAction(ico, lang, this);
 action->setCheckable(true);
 action->setData(locale);

 ui.menuLanguage->addAction(action);
 langGroup->addAction(action);

 // Set translators and default language to the checked state.
 if (defaultLocale == locale)
	 {
	 action->setChecked(true);
	 }
 }

}
```

## Language Switching

If a language is to be switched, the desired target language is obtained from the [QAction](https://doc.qt.io/qt-6/qaction.html#) object and existing translators are removed. [QApplication::removeTranslator()](https://doc.qt.io/qt-6/qapplication.html#removeTranslator). Then, new language files are loaded, and if successful, the translator is installed again [QApplication::installTranslator()](https://doc.qt.io/qt-6/qapplication.html#installTranslator). This is done to ensure that the [QEvent](https://doc.qt.io/qt-6/qevent.html#)::LanguageChange signal is issued by the application object. If the application has only one top-level window created entirely in the designer, it is also possible to simply read the new translation files and call ui.retranslateUi(this) directly.

```cpp.
// Called every time a language menu item is invoked
void MainWindow::slotLanguageChanged(QAction* action)
{
 if(0 != action) {
  // load the language dependent on the action content
  loadLanguage(action->data().toString());
  setWindowIcon(action->icon());
 }
}

void switchTranslator(QTranslator& translator, const QString& filename)
{
 // remove the old translator
 qApp->removeTranslator(&translator);

 // load the new translator
QString path = QApplication::applicationDirPath();
	path.append(“/languages/”);
 if(translator.load(path + filename)) // The path and filename must be specified here, because the system will otherwise not find the QM Files else
  qApp->installTranslator(&translator);
}

void MainWindow::loadLanguage(const QString& rLanguage)
{
 if(m_currLang != rLanguage) {
  m_currLang = rLanguage;
  QLocale locale = QLocale(m_currLang);
  QLocale::setDefault(locale);
  QString languageName = QLocale::languageToString(locale.language());
  switchTranslator(m_translator, QString(“TranslationExample_%1.qm”).arg(rLanguage));
  switchTranslator(m_translatorQt, QString(“qt_%1.qm”).arg(rLanguage));
  ui.statusBar->showMessage(tr(“Current Language changed to %1”).arg(languageName));
 }

}
```

- QEvent::LanguageChange will always be called if a translator object is installed in the application object
- QEvent::LocaleChange is called when the system language is changed

```cpp
void MainWindow::changeEvent(QEvent* event)
{
 if(0 != event) {
  switch(event->type()) {
   // this event is sent if the translator is loaded
   case QEvent::LanguageChange:
    ui.retranslateUi(this);
    break;

   // this event is triggered if the system language changes
   case QEvent::LocaleChange:
   {
    QString locale = QLocale::system().name();
    locale.truncate(locale.lastIndexOf('_')); 
    loadLanguage(locale);
   }
   break;
  }
 }
 QMainWindow::changeEvent(event);

}
```
## Add translations to the project

In your qmake project file, this variable [TRANSLATIONS](http://doc.qt.io/qt-5/qmake-variable-reference.html#translations) should have been added and should contain all the language files you originally intended to create.

`TRANSLATIONS = languages/TranslationExample_en.ts languages/TranslationExample_de.ts`.

  
Running [lupdate](http://doc.qt.io/qt-5/linguist-manager.html#using-lupdate)

`lupdate -verbose TranslationExample.pro`.

You create a language file (.ts) that you translate with the _Qt Linguist_ tool.

`linguist languages/TranslationExample_en.ts languages/TranslationExample_de.ts`.

Once you have done this, you will run [lrelease](http://doc.qt.io/qt-5/linguist-manager.html#using-lrelease) to create the translation binaries (.qm):

`lrelease TranslationExample.pro`.