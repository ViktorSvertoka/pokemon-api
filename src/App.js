import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';

export default class App extends Component {
  // Определение начального состояния с пустым pokemonName
  state = {
    pokemonName: '',
  };

  // Функция для обработки отправки формы
  handleFormSubmit = pokemonName => {
    // Обновление состояния с отправленным pokemonName
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {/* Рендеринг компонента PokemonForm  */}
        <PokemonForm onSubmit={this.handleFormSubmit} />

        {/* Рендеринг компонента PokemonInfo с использованием pokemonName из состояния */}
        <PokemonInfo pokemonName={this.state.pokemonName} />

        {/* Рендеринг компонента ToastContainer для отображения уведомлений */}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
