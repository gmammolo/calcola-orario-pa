'use strict';

class TimerInput extends React.Component {
  constructor(props) {
    super(props);

    this.regexStr='^[0-2]{0,1}[0-9]\:[0-5]{0,1}[0-9]$';
    this.handleChange = this.handleChange.bind(this);
  }

  //   this.input.current.value
  handleChange(event) {
    /** @type {string} */
    const value =  event.target.value;
    this.props.onChange(this.props.name, value);  
  }

  render() {
    return (
      <div className='timer-input'>
        <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
          <input
            className='mdl-textfield__input'
            type='text'
            pattern={this.regexStr}
            id={'timerInput'+this.props.name}
            value={this.props.value}
            onChange={this.handleChange}
          />
          <label className='mdl-textfield__label' htmlFor={'timerInput'+this.props.name}>
            {this.props.label}
          </label>
          <span className='mdl-textfield__error'>formato sbagliato: 12:59</span>
        </div>
      </div>
    );
  }
}
