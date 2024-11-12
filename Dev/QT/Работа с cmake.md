---
tags:
  - qt
---

## Шаблон
###  Использование qmake
```qmake
QT += core network xml 
## укажем необходимые Qt компоненты

TARGET = lib1$${LIB_SUFFIX} 
## укажем таргет

TEMPLATE = lib 
## скажем, что мы собираем библиотеку

DEFINES += LIB1_LIBRARY
## добавить define, возможно где-то пригодится

include(lib1.pri) 
## укажем .pri файл, содержащий перечисление исходников
```


### Использование cmake

```
project(gen LANGUAGES CXX) 
## указываем проект и используемые языки

find_package( 
	QT NAMES Qt6 Qt5
	COMPONENTS Core Network Xml
	REQUIRED
)
## укажем, что мы хотим найти пакет Qt6 или Qt5

find_package(
	Qt${QT_VERSION_MAJOR}
	COMPONENTS Core Network Xml
	REQUIRED
)
## укажем, что из найденного пакета нам нужны такие компоненты

add_library(
	lib1 STATIC
	hdr.h
	...
	src.cpp
	...
)
##  укажем, что мы хотим собрать статическую библиотеку

target_link_libraries(
	lib1
	PRIVATE Qt${QT_VERSION_MAJOR}::Core
	PRIVATE Qt${QT_VERSION_MAJOR}::Xml
	PRIVATE Qt${QT_VERSION_MAJOR}::Network
)
## и слинковать ее с такими-то библиотеками


target_compile_definitions(${PROJECT_NAME} PRIVATE ${PROJECT_NAME}_LIBRARY)

## добавляем макрос
```



## Пример использования в проекте

```cmake
project(App1)

set(PROJECT_VERSION_MAJOR 1)
set(PROJECT_VERSION_MINOR 0)
set(PROJECT_VERSION_PATCH 0)


## здесь версию можно указать разными способами
## мы укажем так

configure_file(
	${CMAKE_SOURCE_DIR}/config.h.in
	## взять такой файл за шаблон
	${CMAKE_CURRENT_BINARY_DIR}/config.h
	## сгенерировать из него новый по такому то пути
	@ONLY
)

configure_file(
	${CMAKE_SOURCE_DIR}/versioninfo.rc.in
	${CMAKE_CURRENT_BINARY_DIR}/versioninfo.rc
	## аналогичная генерация, но уже rc файлов
	@ONLY
)

## генерируемые файлы

find_package(

	QT NAMES Qt6 Qt5
	COMPONENTS Core Xml Widgets Network
	REQUIRED
)
find_package(	
	Qt${QT_VERSION_MAJOR}
	COMPONENTS Core Xml Widgets Network
	REQUIRED
)

add_executable(${PROJECT_NAME}	
	main.cpp
	...
	../../icon.rc # это тоже иконка но windows-only
	${CMAKE_CURRENT_BINARY_DIR}/versioninfo.rc # windows-only
)

  

target_include_directories(${PROJECT_NAME} PRIVATE ${CMAKE_CURRENT_BINARY_DIR})

## добавим в include directories нашу директорию, где будут лежать

## сгенерированные файлы

  

if(CMAKE_BUILD_TYPE STREQUAL "Release")

	set_property(TARGET ${PROJECT_NAME} PROPERTY WIN32_EXECUTABLE true)

endif()

## куда ж без костылей, говорим, что запускать надо гуй без консоли

  

target_link_libraries(

	${PROJECT_NAME}
	
	lib1
	
	...

	lib2
	
	Qt${QT_VERSION_MAJOR}::Core
	
	Qt${QT_VERSION_MAJOR}::Xml
	
	Qt${QT_VERSION_MAJOR}::Widgets
	
	Qt${QT_VERSION_MAJOR}::Network

)
```

