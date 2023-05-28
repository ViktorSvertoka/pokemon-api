import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  // Обработчик изменения значения в поле ввода
  handleNameChange = event => {
    // Обновление состояния с введенным именем покемона в нижнем регистре
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Проверка наличия значения в поле ввода
    if (this.state.pokemonName.trim() === '') {
      // Вывод сообщения об ошибке с помощью toast из react-toastify
      toast.error('Введите имя покемона.');
      return;
    }

    // Вызов onSubmit из пропсов с передачей введенного имени покемона
    this.props.onSubmit(this.state.pokemonName);

    // Сброс значения поля ввода в состоянии
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        {/* Поле ввода имени покемона */}
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />

        {/* Кнопка поиска */}
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}
