import React, { Component } from 'react';

import { getRandomColor } from '../Functions/Utils';

class Final extends Component {
  isWinning() {
    const { tickets, winningNumber } = this.props;

    for (const ticket of tickets) {
      if (ticket.number === winningNumber) {
        return true;
      }
    }

    return false;
  }

  renderWinning() {
    return (
      <>
        <h2>Честито!</h2>
        <h3>Ти Спечели 50ст.</h3>
        <p>
          Твоето печелившо число: <b>{this.props.winningNumber}</b>
        </p>
      </>
    );
  }

  renderTryAgain() {
    return (
      <>
        <h2>Опитай Пак!</h2>
        <p>
          Печелившото число беше: <b>{this.props.winningNumber}</b>
        </p>
      </>
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: getRandomColor(), padding: 15 }}>
        {this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
        <button onClick={this.props.actions.reset}>Ново Теглене</button>
      </div>
    );
  }
}

export default Final;
