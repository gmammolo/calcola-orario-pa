'use strict';

class Calcolatore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container' id='calcolatorecomponent'>
        <div className='item'>
          <TimerInput />
        </div>
        {/* <div className='item'>B</div> */}
        <div className='item'>
          <button class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'>
            Calcola
          </button>
        </div>
      </div>
    );
  }
}

const contenitoreDom = document.querySelector('#calcolatore');
ReactDOM.render(<Calcolatore />, contenitoreDom);
