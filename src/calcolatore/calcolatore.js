'use strict';

class Calcolatore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startWork: '8:00',
      workingTime: '7:12',
      startLunch: '12:00',
      durationLunch: '0:30',

      disableButton: false,
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.canCalcola = this._canCalcola.bind(this);
    this.calcola = this.calcola.bind(this);
  }

  /**
   *
   * @param {string} name
   * @param {string} value
   */
  handleChange(name, value) {
    this.setState({ [name]: value });
    this.setState((state, props) => ({ disableButton: !this._canCalcola(state) }));
  }

  _canCalcola(state) {
    return (
      Timer.checkTimerString(state.startWork) &&
      Timer.checkTimerString(state.workingTime) &&
      Timer.checkTimerString(state.startLunch) &&
      Timer.checkTimerString(state.durationLunch)
    );
  }

  calcola() {
    if (this._canCalcola(this.state)) {
      const startWork = new Timer(this.state.startWork);
      const workingTime = new Timer(this.state.workingTime);
      const startLunch = new Timer(this.state.startLunch);
      const durationLunch = new Timer(this.state.durationLunch);
      const endLunch = Timer.somma(startLunch, durationLunch);
      let endWork = Timer.somma(startWork, workingTime);
      endWork = Timer.somma(endWork, durationLunch);
      this.setState({
        startWork: startWork.toString(),
        workingTime: workingTime.toString(),
        startLunch: startLunch.toString(),
        durationLunch: durationLunch.toString(),
        result: `${startWork.toString()}-${startLunch.toString()} | ☕ | ${endLunch.toString()}-${endWork.toString()}`,
      });
    }
  }

  render() {
    return (
      <div className='container' id='calcolatorecomponent'>
        <div className='item startWork'>
          <TimerInput
            name='startWork'
            label='inizio giornata lavorativa'
            value={this.state.startWork}
            onChange={this.handleChange}
          />
        </div>
        <div className='item workingTime'>
          <TimerInput
            name='workingTime'
            label='durata giornata lavorativa'
            value={this.state.workingTime}
            onChange={this.handleChange}
          />
        </div>
        <div className='item startLunch'>
          <TimerInput
            name='startLunch'
            label='inizio pausa pranzo'
            value={this.state.startLunch}
            onChange={this.handleChange}
          />
        </div>
        <div className='item durationLunch'>
          <TimerInput
            name='durationLunch'
            label='durata pausa pranzo'
            value={this.state.durationLunch}
            onChange={this.handleChange}
          />
        </div>
        <div className='item'>
          <button
            className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
            onClick={this.calcola}
            disabled={this.state.disableButton}
          >
            Calcola
          </button>
        </div>
        <div className='result'>Orario di lavoro: {this.state.result}</div>
      </div>
    );
  }
}

const contenitoreDom = document.querySelector('#calcolatore');
ReactDOM.render(<Calcolatore />, contenitoreDom);
