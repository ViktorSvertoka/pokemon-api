// Функция компонента PokemonDataView, принимающая объект pokemon в виде свойства
export default function PokemonDataView({ pokemon: { sprites, name, stats } }) {
  return (
    <div>
      {/* Рендеринг изображения покемона */}
      <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={name}
      />

      {/* Рендеринг имени покемона */}
      <h2>{name}</h2>

      {/* Рендеринг списка статистик покемона */}
      <ul>
        {/* Итерация по массиву статистик и их рендеринг */}
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {/* Отображение имени статистики и ее базового значения */}
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}
