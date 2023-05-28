// Импорт изображения ошибки
import errorImage from './error.jpg';

// Функция компонента PokemonErrorView, принимающая сообщение об ошибке в виде свойства
export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      {/* Рендеринг изображения ошибки */}
      <img src={errorImage} width="240" alt="sadcat" />

      {/* Рендеринг сообщения об ошибке */}
      <p>{message}</p>
    </div>
  );
}
