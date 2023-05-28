// Функция для получения данных о покемоне из API
function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    // Если ответ не успешный, создается и возвращается отклоненный промис с ошибкой
    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

// Создание объекта `api` с функцией `fetchPokemon` в качестве свойства
const api = {
  fetchPokemon,
};

// Экспорт объекта `api` в качестве значения по умолчанию для модуля
export default api;
