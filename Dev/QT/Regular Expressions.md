---
tags:
  - qt
---

Regular Expressions in C++ are a powerful tool for working with text data. They allow you to search and manipulate substrings based on certain patterns or rules.

In C++, regular expressions are implemented through the `std::regex` class from the `<regex>` library. Below is a code sample that demonstrates the basic principles of working with regular expressions in C++:

```cpp
#include <iostream>
#include <regex>

int main() {
    std::string text = “Hello, world! This is a sample text.”;
    std::regex pattern(“world”);

    if (std::regex_search(text, pattern)) {
        std::cout << “Match found!” << std::endl;
    } else {
        std::cout << “No match found.” << std::endl;
    }

    return 0;
}

```

In this example, we search for the substring “world” in the string `text` using the regular expression `pattern`. If a match is found, the message “Match found!” is printed.

Regular expressions in C++ allow you to perform more complex operations such as substring replacement, information extraction, and more. They provide a powerful and flexible tool for working with text.



Regular expressions work by matching a pattern to text and finding matches. They can be used to find specific words, numbers, formatting patterns, and more. For example, you can use regular expressions to find all email addresses in text or to check if the date format is correct.

```cpp
QRegExp reg(“(rewtretwy)”); // look for the given string
```

```cpp
QRegExp reg(“[rewtretwy]”); // searches for any of the given letters
```

```cpp
QRegExp reg(“[a-v]”); // searches for a letter in the range
```

```cpp
QRegExp reg(“[a-z\\-#%^@\\\\]”); // searches for range letters and characters
```

```cpp
QRegExp reg(“[b]{1, 12}”); // searches for a given letter if it occurs a certain number of times
```

```cpp
#include <iostream>
#include <regex>

int main() {
    std::string text = “Sample text for search”;

    // Creating a regular expression
    std::regex regexPattern(“example”);

    // Search for matches
    std::smatch match;
    if (std::regex_search(text, match, regexPattern)) {
        std::cout << “Match found: ” << match.str() << std::endl;
    } else {
        std::cout << “No match found” << std::endl;
    }

    return 0;
}

```

```cpp
// example regex
    QString str = “qwerty1234”; // create string
    QRegExp reg(“[q]”); // regularization
		QRegExp reg(“[a-w]”); // range of letters to search for
		QRegExp reg(“[trefdstre]”); // search for any letter from the given list
		QRegExp reg(“(rewtretwy)”); // search for the given string
    qDebug() << (str.contains(reg) > 0); // contains method looks for a regular in the string
                                           // if the regular occurs in the string
                                           // at least once, it will return True
```

```cpp
QString str(“my ip: 123.222.63.1”);
    QRegExp reg(“[0-9]{3}\\\\.[0-9]{3}\\\\.[0-9]{2}\\\\.[0-9]{1}”);
    qDebug() << (str.contains(reg) > 0);
```



```python
import re

text = “Sample search text”

# Create a regular expression
regex_pattern = r “example”

# Search for matches
match = re.search(regex_pattern, text)
if match:
    print(“Match found:”, match.group())
else:
    print(“No match found”)

```