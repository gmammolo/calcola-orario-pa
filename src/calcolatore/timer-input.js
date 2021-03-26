'use strict';

class TimerInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   this.input.current.value
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("E' stato inserito un nome: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='timer-input'>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <input
            className='mdl-textfield__input'
            type='text'
            pattern='[0-2][0-9]:[0-5][0-9]'
            id='start'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <label className='mdl-textfield__label' for='start'>
            Start
          </label>
          <span className='mdl-textfield__error'>formato sbagliato: 12:59</span>
        </div>
        <button onClick={this.handleSubmit()}>test</button>
      </div>
    );
  }
}
