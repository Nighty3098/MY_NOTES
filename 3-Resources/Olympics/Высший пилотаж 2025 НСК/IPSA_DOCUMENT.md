Всероссийский конкурс исследовательских и проектных работ  
школьников «Высший пилотаж»

Создание телеграм бота и нейросети для анализа фондового рынка   
Проект  
Направление *«Computer science»*

# **Введение**

В условиях стремительно меняющегося и постоянно развивающегося финансового рынка, а также на фоне растущего интереса к инвестициям, пользователи все чаще и активнее начинают искать удобные и интуитивно понятные инструменты для управления своими активами. В этом контексте создание телеграм-бота, который предоставляет своим пользователям возможность эффективно управлять инвестиционным портфелем, представляет собой крайне актуальную и востребованную задачу на сегодняшний день.  
Этот проект нацелен на создание телеграм-бота, который будет выступать в роли личного помощника для инвесторов. Бот даст пользователям возможность добавлять и удалять акции из своего инвестиционного портфеля, а также обеспечит доступ к свежей информации о ценах на эти акции. Пользователи смогут без проблем управлять своими инвестициями, не покидая популярный мессенджер. Это обеспечит высокий уровень доступности и удобства, что важно для многих инвесторов, особенно для тех, кто предпочитает мобильные решения.  
Одной из ключевых и наиболее значимых особенностей, которые будут характеризовать данный проект, станет интеграция нейронной сети, обладающей возможностью анализировать исторические данные и осуществлять прогнозирование будущих изменений цен на акции. Это крайне важное нововведение позволит пользователям получать обоснованные и точные прогнозы, что, в свою очередь, окажет значительное влияние на их способность принимать более информированные и взвешенные решения по управлению своим портфеле. Нейронная сеть будет обучаться на огромных объемах данных, что обеспечит не только высокую степень точности прогнозов, но и адаптивность к постоянно меняющимся условиям на рынке.  
В отличие от существующих решений, которые могут предоставлять устаревшую или неполную информацию, мой бот будет гарантировать актуальность данных, что позволит пользователям всегда быть в курсе событий и быстро реагировать на изменения в реальном времени.   
Целью данного проекта является создание высокофункционального и эффективного телеграм-бота, который в будущем станет надежным и незаменимым помощником для инвесторов. Этот бот будет обеспечивать пользователей всеми необходимыми инструментами для успешного управления их инвестиционным портфелем, а также предоставлять актуальные прогнозы, новости и важную информацию, которая может помочь в принятии обоснованных решений.

## 

## **Задачи проекта**

* **Разработка функционала управления портфелем**:  
  * Реализовать возможность добавления и удаления акций из инвестиционного портфеля пользователя.  
  * Обеспечить пользователям возможность отслеживания текущих позиций и их изменений.  
* **Интеграция с финансовыми API**:  
  * Подключить API для получения актуальной информации о ценах на акции и других финансовых инструментах.  
  * Реализовать механизм для получения исторических данных по акциям, чтобы пользователи могли анализировать динамику цен.  
* **Разработка системы прогнозирования**:  
  * Интегрировать нейронную сеть для анализа исторических данных и прогнозирования будущих изменений цен на акции.  
  * Обучить модель на больших объемах данных для повышения точности прогнозов.  
* **Обеспечение доступа к актуальным новостям**:  
  * Реализовать механизм получения свежих новостей о компаниях, акции которых находятся в портфеле пользователя.  
  * Настроить уведомления о важных событиях, которые могут повлиять на стоимость акций.  
* **Создание удобного пользовательского интерфейса**:  
  * Разработать интуитивно понятный интерфейс бота, который позволит пользователям легко взаимодействовать с функционалом.  
  * Обеспечить поддержку команд для быстрого доступа к основным функциям (например, получение текущей стоимости акций, добавление/удаление акций).  
* **Анализ конкурентных решений**:  
  * Изучить существующие телеграмм-боты для инвестиций, чтобы выявить их сильные и слабые стороны.  
  * Определить уникальные предложения и функции, которые могут сделать бот более привлекательным для пользователей.

# **Обзор существующих решений**

На рынке существует множество решений, предлагающих пользователям инструменты для анализа и прогнозирования финансовых активов. Однако у большинства из них есть существенные недостатки, которые могут ограничивать их эффективность и удобство использования.  
Например, @RussianInvestbot использует API ChatGPT для генерации ответов, что ограничивает его возможности в плане самостоятельного анализа курсов акций. Этот бот не способен проводить глубокий анализ данных, что может привести к недостаточно точным и обоснованным рекомендациям. Кроме того, его функционал ограничен, что не позволяет пользователям получать полный спектр необходимых инструментов для принятия инвестиционных решений.  
Другой пример — @Beatbet\_bot, который делает прогнозы, основываясь на мнении других пользователей. Хотя это может показаться интересным подходом, такая зависимость от мнений может негативно сказаться на качестве и точности прогнозов. Пользователи могут получать информацию, основанную на субъективных параметрах, что не всегда соответствует реальному состоянию рынка.  
Кроме того, большинство существующих сервисов являются платными или взимают комиссию за выполнение операций. Это создает дополнительные финансовые барьеры для пользователей, желающих получить доступ к качественным инструментам для управления своими инвестициями. Таким образом, высокие затраты на использование таких продуктов становятся серьезным минусом, который может отпугнуть потенциальных клиентов и ограничить их возможности в сфере инвестиций.

## **Дорожная карта проекта**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXefFFi4w5_iAexHfkXXH2oDqiLo4xxZ1Z0AO3uD9lzWUvo9mf6UI90lSal3OrBKNPGCE-MI1d3LI2lCfuEqsNykrZB0kjqxzK2Ur6ciCIE5ki4WsOFzN9LcyAS7l32eaNjaOPVY?key=1weHwzJIExviV21jOsxok0ij)**
Рисунок 1\. Дорожная карта проекта

***Этап 1\. Исследование и планирование:***

- Анализ основных требований к проекту  
- Исследования технологий  
- Составление технического задания

***Этап 2\. Дизайн и архитектура:***

- Проектирование архитектуры проекта  
- Составление прототипа интерфейсов  
- Создание структуры базы данных

***Этап 3\. Создание базового функционала:***

- Составление диалогов с пользователем  
- Подключение базы данных  
- Работа с API и парсингом данных

***Этап 4\. Разработка нейронной сети:***

- Сбор и подготовка данных для обучения  
- Обучение и тестирование модели  
- Интеграция модели в бота

***Этап 5\. Запуск и развертывание:***

- Создание Docker контейнеров  
- Развертывание проекта на сервере  
- Маркетинг и пиар  
- Введение платной подписки

# **Выбор методов реализации**

Сравнение популярных языков программирования:

| Язык программирования | Описание | Преимущества | Недостатки |
| :---: | :---: | :---: | :---: |
| **Python** | Высокоуровневый интерпретируемый язык, известный своей простотой и читаемостью. Используется в веб\-разработке, анализе данных и машинном обучении. | Простота синтаксиса, большое количество библиотек, кроссплатформенность, быстрое прототипирование. | Может быть медленнее других языков из\-за интерпретируемости; высокое потребление памяти. |
| **Java** | Объектно-ориентированный язык, используемый для создания кроссплатформенных приложений. | Высокая производительность, безопасность, масштабируемость для крупных проектов. | Сложность изучения для новичков; требует больше ресурсов для выполнения. |
| **JavaScript** | Язык программирования, используемый для создания интерактивных веб\-страниц. | Широкая поддержка во всех браузерах, возможность работы как на клиенте, так и на сервере (Node.js). | Разные интерпретации в браузерах могут вызывать проблемы; менее производителен по сравнению с компилируемыми языками. |
| **C++** | Мощный язык программирования, часто используемый в системном программировании и разработке игр. | Высокая производительность и контроль над ресурсами; гибкость в управлении памятью. | Сложный синтаксис; более высокая вероятность ошибок из\-за управления памятью. |
| **C\#** | Язык программирования от Microsoft для разработки приложений под платформу .NET. | Простота использования, интеграция с .NET, мощные инструменты для разработки. | Ограничен экосистемой Windows; требует изучения специфики .NET. |

Таким образом, использование python является оптимальным вариантом т.к. он больше подходит для глубокого обучения и создания кроссплатформенных и серверных приложений.

## **Выбор библиотек для telegram-бота**

Для разработки телеграмм ботов подходит множество библиотек, я решил сравнить наиболее популярные из них: Pyrogram, aiogram, python-telegram-bot. Ниже приведена таблица их сравнения.

| Характеристика | Pyrogram | aiogram | python-telegram-bot |
| :---: | ----- | ----- | ----- |
| **Асинхронность** | Полная поддержка асинхронного программирования | Полная поддержка асинхронного программирования | Ограниченная поддержка асинхронности |
| **Производительность** | Высокая производительность, подходит для сложных проектов | Высокая производительность, эффективная обработка запросов | Средняя производительность, может замедляться при высокой нагрузке |
| **Простота использования** | Более сложный из\-за клиентского подхода, требует больше знаний о Telegram API | Интуитивно понятный интерфейс, подходит для начинающих разработчиков | Очень простой и интуитивный интерфейс, идеален для новичков |
| **Функциональность** | Полный доступ к функционалу Telegram, включая клиентские функции | Расширенные возможности для создания ботов, поддержка различных типов сообщений и событий | Основные функции для создания ботов, подходит для простых задач |
| **Документация** | Хорошая документация с примерами использования | Активное сообщество и обширная документация | Хорошо структурированная документация и много примеров кода |

После анализа в качестве основы для бота был выбран *pyrogram*, т.к. он больше подходит для создания больших высоконагруженных сервисов, также он имеет хорошую документацию и высокую скорость работы.

## **Выбор библиотек для глубокого обучения**

Ниже представлена таблица, сравнивающая основные модули, применяемые при создании нейронных сетей:

|     Фреймворк      | Описание                                                                 | Преимущества                                                                            | Недостатки                                                                                  |
| :----------------: | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|   **TensorFlow**   | Открытая библиотека для машинного обучения, разработанная Google.        | Широкий набор инструментов, поддержка GPU и TPU, масштабируемость, активное сообщество. | Сложность в освоении для новичков; статический вычислительный граф может быть менее гибким. |
|    **PyTorch**     | Разработан Facebook, фреймворк с динамическим вычислительным графом.     | Простота использования, гибкость, поддержка GPU, активное сообщество.                   | Меньше обучающих материалов по сравнению с TensorFlow.                                      |
|     **Keras**      | Высокоуровневый API, работающий поверх TensorFlow, Theano или CNTK.      | Интуитивно понятный интерфейс, быстрое прототипирование.                                | Ограниченная функциональность по сравнению с TensorFlow.                                    |
|     **MXNet**      | Фреймворк от Apache, поддерживающий множество языков программирования.   | Высокая масштабируемость, поддержка распределенного обучения.                           | Меньше документации и примеров по сравнению с TensorFlow.                                   |
|     **Caffe**      | Фреймворк для глубокого обучения, ориентированный на производительность. | Быстрая обработка изображений, простота в использовании.                                | Ограниченные возможности для сложных моделей и исследований.                                |
| **Deeplearning4j** | Платформа для Java и Scala с поддержкой различных типов нейронных сетей. | Хорошая поддержка для распознавания изображений и обработки текста.                     | Меньше ресурсов и сообщества по сравнению с другими фреймворками.                           |

Для работы были выбраны следующие библиотеки:

* **NumPy и Pandas** для работы с массивами и данными.  
* **TensorFlow и Keras** для создания и обучения нейронных сетей.  
* **Joblib** для сохранения и загрузки объектов (например, модели).

## **Создания telegram-бота:**

**Функционал главного меню:**

* Работа с финансовым портфелем пользователя (Отслеживание цены нужных акций, оповещения, возможность добавлять и удалять новые акции)  
* Получения детализированной информации об акциях (Позволяет просмотреть графики, индикаторы и получить прогноз от нейронной сети)  
* Получение новостей за определенный период (Можно выбрать пользователем) 
* Изменение часового пользователя (Если не изменять \- работает по МСК)  
* Чат с ботом техподдержки (отдельный бот)

Реализация основного меню была выполнена с помощью кнопок класса *InlineKeyboardButton*, это позволило сделать взаимодействие с ботом проще, так как кнопки других типов засоряют чат ненужными сообщениями. Также была реализована структура подменю с помощью машины состояний и *InlineKeyboardButton.*

Когда человек запускает бота, происходит регистрация пользователя в базе данных (sqlite3) и запись основных сведений об аккаунте (id, username, timezone). Изначально бот работает по Московскому времени, часовой пояс можно изменить через соответствующее меню.  
Через меню “Мои акции” пользователь может изменить составляющие своего портфолио, добавить или убрать акции, получить цены и общую стоимость своих инвестиций.  

**![Главное меню](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfodamYxfJ5jCl6NIv3O7VCnJDBl7JQZXvK8XMe0OkxcgDbpMNIwMcEECaDyH_L37T27KP9W-ByhCR_hjN-hTeVz6kUOcZOpff0fXPRElBCSXFVA4FSVz--kHRYCwQZQ7egLMnPRA?key=1weHwzJIExviV21jOsxok0ij)**
Рисунок 2\. Главное меню

## **Реализация сбора данных**

Для получения цены на акции и дополнительной информации для анализы будет использоваться модуль *yfinance* (Yahoo\! Finances). Этот модуль абсолютно бесплатный, не имеет ограничений и обеспечивает хорошую скорость работы.

**Основные возможности yfinance**

- **Получение исторических данных:**

Библиотека позволяет загружать исторические данные по акциям, используя метод *history()*. Пользователи могут задавать параметры, такие как период (например, *1d*, *1mo*, *1y*) и интервал (например, *1m*, *1h*, *1d*).

- **Фундаментальные показатели:**  
  Библиотека предоставляет доступ к различным фундаментальным данным о компаниях через метод *info()*, который возвращает словарь с информацией о компании, включая рыночную капитализацию, соотношение P/E[^1] и другие ключевые показатели

- **Дивиденды и корпоративные действия**:  
  *yfinance* позволяет получать данные о дивидендах и других корпоративных действиях (например, сплиты) через методы *dividends* и *actions*

- **Поддержка различных финансовых инструментов**:  
  Библиотека поддерживает не только акции, но и ETFs, криптовалюты и облигации. Это делает её универсальным инструментом для анализа различных типов инвестиций.

Для получения актуальных новостей будет использоваться *investing.com*. Так как этот сайт не предоставляет свой API, мы будем использовать библиотеки *requests* и *BeautifulSoup*. С помощью *requests* мы будем отправлять отправлять запрос к сайту и получать данные, а с помощью *BeautifulSoup* мы будем обрабатывать полученный от сервера ответ и доставать из него нужные данные.  

Также в отдельных потоках была реализована проверка на изменения цен в реальном времени и проверка на новые новости.

## **Обработка данных**

При помощи библиотеки yfinance был создан датасет с основными данными об изменении цен у 46 компаний на протяжении 15 лет. Датасет сохранён в формате csv таблицы для дальнейшего использования при обучении нейросети.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxvqT6QP74iF1HITAt996ce04PEfdSoOM7VCn7NpUxZie_YACCK7SDWLnQ7uQ5bvYvriNw1z9uNTrNTvFiYgSYhFor1P-TOCWppGyBEak1oLw43HuEsusrJw07lv29BGZ7weNU?key=1weHwzJIExviV21jOsxok0ij)**
*Рисунок 3\. Пример датасета*

Принцип обучения нейронной сети:  
Код загружает данные из CSV-файла, проверяет их на наличие необходимых колонок и обрабатывает отсутствующие значения. Данные нормализуются для улучшения сходимости модели. Используется архитектура LSTM, которая хорошо подходит для работы с временными рядами. Модель состоит из нескольких слоев LSTM, которые обрабатывают последовательные данные, и слоев Dropout для предотвращения переобучения. Модель обучается на подготовленных данных с использованием метода *fit(),* который включает в себя валидацию и раннюю остановку. Это позволяет избежать переобучения и сохранить лучшие веса модели. Также я использовал *fit()* с параметром *validation\_data*, это позволило мне создавать графики обучения нейронной сети и отслеживать её метрики, такие как потери или точность.


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdFx0QlKuL1eVt3ir9gSBKQHS_FchWk_GMORPfpd8BNu3Er8u6On2BME9Ll5pE5WPkJbzKlrLHGHzA-R_yrpgmRJf27zc387GXYg4-WUmxIxc-j4aqLn6JW6F_WFXYO_KeSZDWQiQ?key=1weHwzJIExviV21jOsxok0ij)**
*Рисунок 4\. График обучения нейронной сети.*

На графике отображены необходимые показатели для отслеживания прогресса обучения:

- **Loss (Функция потерь)**  
  - **Training Loss (Потери на обучающей выборке)** \- Значение функции потерь на обучающей выборке. Это показывает, насколько хорошо модель обучается на данных, на которых она была обучена.  
  - **Validation Loss (Потери на валидационной выборке)** \- Значение функции потерь на валидационной выборке. Это помогает оценить, как хорошо модель обобщается на новых, невидимых данных.  
- **Mean Absolute Error (MAE)**  
  \- **Training MAE** \- Средняя абсолютная ошибка на обучающей выборке.  
  \- **Validation MAE** \- Средняя абсолютная ошибка на валидационной выборке. Этот показатель используется для оценки точности предсказаний модели.

Для обучения используются данные: Open[^2], Close[^3], High, Low, Adj Close[^4], Volume[^5]. После успешного обучения модель и скейлер сохраняются для последующего использования.

Основной класс для работы с моделью нейросети: 

1. Инициализация:  
   * При создании экземпляра класса *StockPredictor* загружаются модель и скейлер из файловой системы. Модель используется для предсказания цен, а скейлер — для нормализации данных.  
2. Прогнозирование цены:  
   * Метод *predict\_price(ticker)* загружает исторические данные акций за последний год с помощью библиотеки yfinance.  
   * Проверяет, достаточно ли данных для прогнозирования (не менее 365 дней).  
   * Нормализует последние 365 дней данных и подготавливает их для модели.  
   * Выполняет прогнозирование цены закрытия на следующий день и возвращает это значение.  
3. Анализ:  
   * Метод *analyze(ticker)* использует *predict\_price* для получения прогнозируемой цены и сравнивает её с текущей ценой акций.  
   * Формирует сообщение с рекомендацией (покупка, продажа или удержание) на основе сравнения цен.  
4. Визуализация:  
   * Метод *predict\_plt(ticker)* создает график, на котором отображаются исторические данные, прогнозируемая цена и границы прогноза.  
   * Сохраняет график в файл *price\_prediction.png*.

В основном файле, который обрабатывает действия пользователя, используется нейросетевая модель для прогнозирования цен акций в ближайшем будущем. Эта модель анализирует исторические данные и текущие рыночные условия, чтобы предоставить пользователю не только прогнозы, но и основные рекомендации.  
После выполнения анализа пользователь получает доступ к графикам, которые иллюстрируют текущее состояние компании, а различные финансовые показатели. Эти графики помогают визуализировать тренды и изменения в ценах акций, что делает информацию более доступной и понятной.  

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfAwgQ04iMOsOOCyyhKtrGfMuNXtILPTUG6D35pCixVc_K3Bpi_ydAox1Qxkf-IPAkN0s9wpwtFC95A33yHEhi5lg8cXmh5tjZoVR4FiR7pAj6FeeYQotHHYgBY7Y2x_WEXvOixag?key=1weHwzJIExviV21jOsxok0ij)**
*Рисунок 5\. Пример диалога с пользователем*

Кроме того, система предоставляет достаточно точные прогнозы цен на будущее, что может помочь пользователю в принятии обоснованных инвестиционных решений. Однако важно отметить, что, несмотря на использование современных технологий и алгоритмов, абсолютно точное прогнозирование изменений на фондовом рынке невозможно.

# **Заключение**

В ходе работы над проектом была разработана концепция функционального telegram-бота, который предоставляет пользователям удобные инструменты для управления инвестициями и получения актуальной информации о фондовом рынке. В условиях постоянно меняющегося финансового рынка, этот проект может быть актуален.  
Основной акцент был сделан на интеграцию нейронной сети, способной анализировать исторические данные и прогнозировать изменения цен на акции. Это нововведение позволяет пользователям принимать более обоснованные решения, опираясь на точные прогнозы и актуальные данные. Бот также обеспечивает доступ к свежим новостям, что позволяет пользователям оставаться в курсе событий и быстро реагировать на изменения на рынке.  
Проект включает множество ключевых функций, таких как управление инвестиционным портфелем, интеграция с финансовыми API, система прогнозирования и удобный пользовательский интерфейс. Эти аспекты делают его уникальным инструментом для инвесторов, позволяя им эффективно управлять своими активами.  
В ходе разработки были выбраны оптимальные технологии, включая язык программирования Python и библиотеки: Pyrogram для работы с Telegram API, yfinance для получения данных о акциях, а также TensorFlow, Keras и NumPy для создания и обучения нейросети. Это обеспечило высокую производительность и удобство в использовании. Кроме того, был проведен анализ существующих решений, что позволило выявить их недостатки и предложить более эффективные альтернативы.  
Несмотря на все достижения, важно помнить, что на фондовые рынки влияют множество факторов, включая глобальные события. Эти события часто непредсказуемы и могут оказывать значительное влияние на рыночные условия, что делает прогнозирование сложной задачей. Поэтому, хотя система предоставляет полезные инструменты и информацию, инвесторам следует учитывать риски и неопределенности, связанные с фондовым рынком.  
В будущем проект может быть расширен за счет добавления новых функций, улучшения алгоритмов прогнозирования и интеграции с другими сервисами, что позволит еще больше повысить его эффективность и привлекательность для пользователей.  Также планируется увеличение вычислительных мощностей для обучения нейронной сети и анализа данных.

# **Список используемой литературы**

* [GitHub \- pyrogram/pyrogram: Elegant, modern and asynchronous Telegram MTProto API framework in Python for users and bots](https://github.com/pyrogram/pyrogram) \- [https://github.com/pyrogram/pyrogram](https://github.com/pyrogram/pyrogram) (Дата обр. 14.10.2024)  
* [User-боты в Telegram: Простая автоматизация с Python (Pyrogram). Первые шаги / Хабр](https://habr.com/ru/companies/amvera/articles/838204/) \- [https://habr.com/ru/companies/amvera/articles/838204/](https://habr.com/ru/companies/amvera/articles/838204/) (Дата обр. 13.10.2024)  
* [Финансовый Telegram-бот за 30 минут с Market Data API](https://habr.com/ru/companies/exante/articles/318272/) \- [https://habr.com/ru/companies/exante/articles/318272/](https://habr.com/ru/companies/exante/articles/318272/) (Дата обр. 16.10.2024)  
* [Бот-помощник на рынке акций (Telegram) | Пикабу](https://pikabu.ru/story/botpomoshchnik_na_ryinke_aktsiy_telegram_6264631) \- [https://pikabu.ru/story/botpomoshchnik\_na\_ryinke\_aktsiy\_telegram\_6264631](https://pikabu.ru/story/botpomoshchnik_na_ryinke_aktsiy_telegram_6264631) (Дата обр. 17.11.2024)  
* [Глубокое обучение на python](https://www.chitai-gorod.ru/product/glubokoe-obuchenie-na-python-2654874?srsltid=AfmBOoqU85MRXWpGiZETtfcMQXGPSqxsUq9L9e0RuzjEJxFgAv9BAf8T)  \- [https://www.chitai-gorod.ru/product/glubokoe-obuchenie-na-python-2654874?srsltid=AfmBOoqU85MRXWpGiZETtfcMQXGPSqxsUq9L9e0RuzjEJxFgAv9BAf8T](https://www.chitai-gorod.ru/product/glubokoe-obuchenie-na-python-2654874?srsltid=AfmBOoqU85MRXWpGiZETtfcMQXGPSqxsUq9L9e0RuzjEJxFgAv9BAf8T) (Дата обр. 30.11.2024)

[^1]:  соотношение P/E \- отношение рыночной цены акции к прибыли на акцию (EPS, Earnings Per Share)

[^2]:  Open \- Цена открытия акции на начало торгового дня

[^3]:  Close \- Цена закрытия акции в конце торгового дня

[^4]:  Adj Close \- Скорректированная цена закрытия, которая учитывает дивиденды и сплиты акций. Этот показатель позволяет более точно оценить стоимость акций с течением времени.

[^5]:  Volume \- Объем торгов — количество акций, которые были куплены и проданы в течение определенного периода (обычно за день)
