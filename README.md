# Документация проекта 

# Название проекта

"Интернет-магазин товаров для дома и сада" (Garden Products)

# Ссылки на макет, ТЗ или требования, задеплоенную реализацию

Макет: [Figma](https://www.figma.com/file/SDNWLzCWkh9ZXdCpWEaByv/project-frontend?type=design&node-id=280-1136&mode=design&t=NJTGdloftvn8I6Vz-0)

Техническое задание (ТЗ): [Google Docs](https://docs.google.com/document/d/1j4GO3_P2-h80rrrUuVHan2i8saFXPJlk/edit)

Задеплоенная реализация: [GardenStore](https://project-garden.onrender.com)

# Общее описание

Проект представляет собой веб-приложение для интернет-магазина товаров для дома и сада. Целью является предоставление пользователям удобного интерфейса для просмотра товаров, их категоризации, добавления в корзину и оформления заказа.

# Основной функционал проекта

Главная страница:
 - Отображение списка из 4-х категорий.
 - Форма на получение скидки 5%: Валидация вводимых данных на клиентской стороне с использованием библиотеки React Hook Form.
 - Отображение 4 случайных товаров со скидкой.

Модальное окно "Товар дня":
 - Размещено в хедере, открывается с любой страницы.
 - В окне отображается случайный товар со скидкой 50%.
 - Из модального окна товар можно добавить в корзину.
 - После закрытия модального окна пользователь остается на той же странице, с которой кликал.

Категории товаров:
 - Просмотр списка всех доступных категорий товаров.
 - Переход в раздел "Товары по категориям" для выбранной категории при клике на карточку категории.

Товары по категориям:
 - Отображение списка товаров в выбранной категории.
 - Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту).
 - Возможность фильтрации товаров (по наличию скидки и по диапазону цен).
 - Переход к подробному описанию конкретного товара при клике на карточку товара.
 
Все товары:
 - Отображение полного списка товаров.
 - Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту).
 - Возможность фильтрации товаров (по наличию скидки и по диапазону цен).

Товары со скидкой:
 - Отображение списка товаров со скидкой.
 - Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту).
 - Возможность фильтрации товаров по диапазону цен.

Избранные товары:
 - Отображение списка избранных товаров (те, которым поставлен лайк).
 - Возможность сортировки товаров (по умолчанию, по убыванию цены, по возрастанию цены, по алфавиту).
 - Возможность фильтрации товаров (по диапазону цен).

Подробное описание товара:
 - Полная информация о выбранном товаре (название, цена, описание, изображения).
 - Возможность добавления товара в корзину.

Корзина:
 - Отображение списка выбранных товаров с их количеством и общей стоимостью.
 - Возможность изменения количества товаров, удаления товаров из корзины.
 - Расчет и отображение общей стоимости товаров в корзине.
 - Возможность отправки данных о заказе при отправке формы.

Страница не найдена:
 - Отображение страницы с сообщением о том, что запрашиваемая страница не найдена.
 - Возможность вернуться на главную страницу.

Скелетон страницы (Loader):
 - При загрузке страниц “Все товары”, “Избранные товары”, “Товары со скидкой”, “Товары по категориям” до появления товаров на страницах виден скелетон страницы.

Темная тема:
 - Переключение на темную тему. Все страницы принимают внешний вид темы.
 - Выбранная тема сохраняется в Local Storage.

Мобильная адаптивность: 
 - Приложение корректно отображаеться на различных устройствах согласно макету.

# Стек технологий

React: Основной фреймворк для разработки пользовательского интерфейса. Используется для создания компонентов и управления состоянием приложения.
Redux Toolkit: Управление состоянием приложения. Обеспечивает централизованное хранение состояния и упрощает передачу данных между компонентами.
React Router: Маршрутизация в приложении. Используется для создания навигации между страницами.
Styled Components: Стилизация компонентов. Обеспечивает создание и управление CSS-стилями внутри JavaScript.
Git и GitHub: Система контроля версий и хостинг кода. Используются для управления изменениями в коде и совместной работы над проектом.

# Авторы проекта

# Olha Litvinova

Ссылка на [LinkedIn](https://www.linkedin.com/in/olha-litvinova-830318287/)
Ссылка на [GitHub](https://github.com/LitvinovaOlha1905?tab=repositories)

Реализованные фичи:
 - Главная страница: Реализация логики для отображения 4 случайных товаров со скидкой.
 - Все товары
 - Товары со скидкой
 - Избранные товары
 - Мобильная адаптивность
 - Код ревью

# Irina Kaschkarov

Ссылка на [GitHub](https://github.com/IKaschkarov?tab=repositories)

Реализованные фичи:
 - Главная страница: Отображение списка из 4-х категорий.
 - Модальное окно "Товар дня"
 - Темная тема
 - Категории товаров
 - Товары по категориям
 - Подробное описание товара
 - Футер страницы

# Olena Mykhaylenko

Ссылка на [GitHub](https://github.com/OlenaMykhaylenko?tab=repositories)

Реализованные фичи:
 - Главная страница: Создание формы для получения скидки 5%
 - Корзина
 - Скелетон страницы (Loader)

# Anna Tkachenko

Ссылка на [LinkedIn](https://www.linkedin.com/in/anna-tkachenko-52824a277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
Ссылка на [GitHub](https://github.com/acroanny?tab=repositories)

Реализованные фичи:
 - Хедер
 - Модальное окно навигации при размерах экрана 360px и 480px 
 - Страница не найдена
