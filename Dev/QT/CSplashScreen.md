---
tags:
  - qt
---
The CSplashScreen class can be used as a replacement for Qt's QSplashScreen class if semi-transparent images that use an alpha channel with more than 1 bit need to be used.

The new class tries to mimic the functionality and appearance of the original QSplashScreen class as much as possible, and only skips a few methods to keep this code as simple as possible.

The implementation is all about using a QFrame with the Qt::WA_TranslucentBackground attribute and emulating the functionality of QSplashScreen.


## CSplashScreen.pro

```cpp
HEADERS ''= CSplashScreen.h
ИСТОЧНИКИ ''= CSplashScreen.cpp main.cpp
OTHER_FILES ''=
РЕСУРСЫ ''= images.qrc
CSplashScreen.h
#ifndef CSPLASHSCREEN_''H
#define CSPLASHSCREENH

#include <QFrame

////////////////////////////////////////////////////////////////////////////
class CSplashScreen : public QFrame
{
public:
 CSplashScreen(const QPixmap& pixmap);

 void clearMessage();
 void showMessage(const QString& theMessage, int theAlignment = Qt::AlignLeft, const QColor& theColor = Qt::black);

частное:
 virtual void paintEvent(QPaintEvent* pe);

 QPixmap itsPixmap;
 QString itsMessage;
 int itsAlignment;
 QColor itsColor;
};


#endif // CSPLASHSCREEN''_H
```


## CSplashScreen.cpp

```cpp
#include <QPainter>
#include "CSplashScreen.h"

////////////////////////////////////////////////////////////////////////////
CSplashScreen::CSplashScreen(const QPixmap& thePixmap)
 : QFrame(0, Qt::FramelessWindowHint|Qt::WindowStaysOnTopHint)
 , itsPixmap(thePixmap)
{
 setAttribute(Qt::WA_TranslucentBackground);
 setFixedSize(itsPixmap.size());
};

////////////////////////////////////////////////////////////////////////////
void CSplashScreen::clearMessage()
{
 itsMessage.clear();
 repaint();
}

////////////////////////////////////////////////////////////////////////////
void CSplashScreen::showMessage(const QString& theMessage, int theAlignment/* = Qt::AlignLeft*/, const QColor& theColor/* = Qt::black*/)
{
 itsMessage = theMessage;
 itsAlignment = theAlignment;
 itsColor = theColor;
 repaint();
}

////////////////////////////////////////////////////////////////////////////
void CSplashScreen::paintEvent(QPaintEvent* pe)
{
 QRect aTextRect(rect());
 aTextRect.setRect(aTextRect.x() + 5, aTextRect.y() + 5, aTextRect.width() - 10, aTextRect.height() - 10);

QPainter aPainter(this);
 aPainter.drawPixmap(rect(), itsPixmap);
 aPainter.setPen(itsColor);
 aPainter.drawText(aTextRect, itsAlignment, itsMessage);
}
```


## main.cpp

```cpp
#include <QApplication>
#include <QThread>
#include "CSplashSCreen.h"

int main(int argc, char '''argv[])
{
 QApplication anApplication(argc, argv);

 class SleeperThread : public QThread
 {
 public:
 static void msleep(unsigned long msecs) {QThread::msleep(msecs);}
 };

 QPixmap aSplashImage(":/splash.png");

 CSplashScreen''' aSplashScreen = new CSplashScreen(aSplashImage);
 aSplashScreen->show();

for (int i = 1; i <= 5; i++)
 {
 aSplashScreen->showMessage(QString("Processing %1...").arg(i), Qt::AlignTop | Qt::AlignLeft, Qt::white);
 SleeperThread::msleep(1000);
 }


delete aSplashScreen;

return 0;
}
```

