import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonAPI from '../services/pokemon-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        pokemonAPI
          .fetchPokemon(nextName)
          .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 3000);
    }
  }

  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    // Если статус равен 'idle', возвращается сообщение о вводе имени покемона.
    if (status === 'idle') {
      return <div>Введите имя покемона.</div>;
    }

    // Если статус равен 'pending', возвращается компонент PokemonPendingView,
    // который отображает загрузку данных о покемоне.
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }

    // Если статус равен 'rejected', возвращается компонент PokemonErrorView,
    // который отображает сообщение об ошибке.
    if (status === 'rejected') {
      return <PokemonErrorView message={error.message} />;
    }

    // Если статус равен 'resolved', возвращается компонент PokemonDataView,
    // который отображает информацию о покемоне.
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
