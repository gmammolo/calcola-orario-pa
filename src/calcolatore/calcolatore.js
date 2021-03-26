'use strict';

class Calcolatore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button class='mdc-button'>
          <span class='mdc-button__ripple'></span>
          <span class='mdc-button__label'>Text Button</span>
        </button>
      </div>
    );
  }
}

const contenitoreDom = document.querySelector('#calcolatore');
ReactDOM.render(e(Calcolatore), contenitoreDom);
