import React, { Component } from 'react';
import Lottery from './Components/Lottery';

import './App.css';

import { getRandomNumber } from './Functions/Utils';
import { registerTicket } from './Functions/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winningNumber: getRandomNumber(),
      tickets: [],
      remainingTickets: 5,
      finished: false,
    };

    this.registerTicket = registerTicket.bind(this);
  }

  renderApp() {
    const { tickets, remainingTickets } = this.state;
    const actions = {};

    actions.registerTicket = this.registerTicket;
    return (
      <Lottery
        actions={actions}
        tickets={tickets}
        remainingTickets={remainingTickets}
      />
    );
  }

  render() {
    return <div className="App">{this.renderApp()}</div>;
  }
}

export default App;
