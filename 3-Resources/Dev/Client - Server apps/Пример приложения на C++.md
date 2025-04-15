---
tags:
  - CPP
  - SERVER
---
## Server.cpp

```cpp
#include <boost/asio.hpp>
#include <iostream>

using boost::asio::ip::tcp;

int main() {
    try {
        // Контекст ввода-вывода (обновленное название)
        boost::asio::io_context io;

        // Создание TCP-акцептора на порту 8080
        tcp::acceptor acceptor(io, tcp::endpoint(tcp::v4(), 8080));
        std::cout << "Сервер запущен. Ожидание подключения..." << std::endl;

        while (true) {
            // Сокет для клиента
            tcp::socket socket(io);

            // Ожидание подключения
            acceptor.accept(socket);
            std::cout << "Клиент подключен: " 
                      << socket.remote_endpoint().address().to_string() 
                      << std::endl;

            // Чтение данных от клиента
            boost::system::error_code ec;
            boost::asio::streambuf buffer;
            boost::asio::read_until(socket, buffer, '\n', ec);
            
            if (!ec) {
                std::istream is(&buffer);
                std::string message;
                std::getline(is, message);
                std::cout << "Получено: " << message << std::endl;

                // Отправка ответа (исправленный буфер)
                std::string response = "Сервер получил: " + message + "\n";
                boost::asio::write(socket, boost::asio::buffer(response), ec);
            } else {
                std::cerr << "Ошибка: " << ec.message() << std::endl;
            }
        }
    } catch (const std::exception& e) {
        std::cerr << "Ошибка сервера: " << e.what() << std::endl;
    }
    return 0;
}

```

## Client.cpp

```cpp
#include <boost/asio.hpp>
#include <iostream>

using boost::asio::ip::tcp;

int main() {
    try {
        boost::asio::io_context io;

        // Подключение к серверу (исправленный метод)
        tcp::socket socket(io);
        socket.connect(tcp::endpoint(
            boost::asio::ip::make_address("127.0.0.1"), 
            8080
        ));

        // Отправка сообщения
        std::string message;
        std::cout << "Введите сообщение: ";
        std::getline(std::cin, message);
        message += "\n";

        boost::asio::write(socket, boost::asio::buffer(message));

        // Чтение ответа
        boost::asio::streambuf response_buffer;
        boost::asio::read_until(socket, response_buffer, '\n');
        std::istream is(&response_buffer);
        std::string response;
        std::getline(is, response);

        std::cout << "Ответ сервера: " << response << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "Ошибка клиента: " << e.what() << std::endl;
    }
    return 0;
}

```