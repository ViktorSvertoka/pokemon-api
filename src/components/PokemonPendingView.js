import { ImSpinner } from 'react-icons/im';
import PokemonDataView from './PokemonDataView';
import pendingImage from './pending.png';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPendingView({ pokemonName }) {
  // Создается временный объект покемона с именем и изображением заглушки для отображения во время загрузки
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      {/* Отображение спиннера загрузки */}
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>

      {/* Отображение компонента PokemonDataView для временного покемона */}
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
