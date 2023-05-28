# POKEMON API

- Основы HTTP-запросов в React
- «Архитектура» компонентов и состояний
- Форма для имени покемона PokemonForm
  - Форму нельзя отправить если имя покемона пустое
  - `react-toastify` для алертов
- Компонент `App`
  - Нужен стейт для хранения имени покемона
- Информация о покемоне `PokemonInfo`
  - Нужей стейт для хранения ответа от бекенда
  - Ендпоинт покемонов `https://pokeapi.co/api/v2/pokemon/имя_покемона`
  - Рендер разметки
    - Если нет имени покемона показывать текст «Введите имя покемона.»
    - Если загружаем то показываем текст «Загружаем...»
    - Если есть покемон, показываем карточку покемона
    - Если загружаем то показываем фолбек компонент
  - Обработка ошибки HTTP-запроса
    - В `fetch` нужно обработать 404 в ответе
    - Возвращаем `Promise.reject(new Erorr(Нет покемона с именем имя_покемона))`
    - Нужен стейт для хранения ошибки
    - Если ошибка рендерим разметку ошибки
- Паттерн state machine
  - Плюсы
    - Уходят проблемы сброса полей «чтобы работало».
    - Не нужно следить на значениями N полей.
    - Более понятные условия рендера разметки.
  - Используем статус
    - idle - запроса еще нет
    - pending - пошел запрос
    - resolved - успешный запрос
    - rejected - запрос с ошибкой
