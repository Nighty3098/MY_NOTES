---
tags:
  - qt
---

## Template

### Using qmake

```qmake
QT += core network xml 
### specify the necessary Qt components

TARGET = lib1$$${LIB_SUFFIX} 
## specify the target

TEMPLATE = lib 
## say we are building the library

DEFINES += LIB1_LIBRARY
## add define, it may be useful somewhere

include(lib1.pri) 
## specify a .pri file containing the source listing.
```


### Using cmake

```cmake
project(gen LANGUAGES CXX) 
## specify the project and the languages used

find_package( 
	QT NAMES Qt6 Qt5
	COMPONENTS Core Network Xml
	REQUIRED
)
## specify that we want to find a Qt6 or Qt5 package

find_package(
	Qt${QT_VERSION_MAJOR}
	COMPONENTS Core Network Xml
	REQUIRED
)
## specify that we need the following components from the found package

add_library(
	lib1 STATIC
	hdr.h
	...
	src.cpp
	...
)
## specify that we want to build a static library

target_link_libraries(
	lib1
	PRIVATE Qt${QT_VERSION_MAJOR}::Core
	PRIVATE Qt${QT_VERSION_MAJOR}::Xml
	PRIVATE Qt${QT_VERSION_MAJOR}::Network
)
## and link it to such and such libraries


target_compile_definitions(${PROJECT_NAME} PRIVATE ${PROJECT_NAME}_LIBRARY)

## add macro
```



## Example of using it in a project

```cmake
project(App1)

set(PROJECT_VERSION_MAJOR 1)
set(PROJECT_VERSION_MINOR 0)
set(PROJECT_VERSION_PATCH 0)


## here the version can be specified in different ways
## we will specify it this way

configure_file(
	${CMAKE_SOURCE_DIR}/config.h.in
	## take this file as a template
	${CMAKE_CURRENT_BINARY_DIR}/config.h
	## generate a new one from it at this path
	@ONLY
)

configure_file(
	${CMAKE_SOURCE_DIR}/versioninfo.rc.in
	${CMAKE_CURRENT_BINARY_DIR}/versioninfo.rc
	## similar generation, but already rc files
	@ONLY
)

## generated files

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
	../../icon.rc # this is also an icon but windows-only
	${CMAKE_CURRENT_BINARY_DIR}/versioninfo.rc # windows-only
)

  

target_include_directories(${PROJECT_NAME} PRIVATE ${CMAKE_CURRENT_BINARY_DIR}))

## add to include directories our directory, where the generated files will lie

## generated files

  

if(CMAKE_BUILD_TYPE STREQUAL “Release”)

	set_property(TARGET ${PROJECT_NAME} PROPERTY WIN32_EXECUTABLE true)

endif()

## where without crutches, we say that it is necessary to run the gui without console

  

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
