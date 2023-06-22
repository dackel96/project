import React, { Component } from 'react';

import { getRandomColor } from '../Functions/Utils';

import { Button, Space, Card } from 'antd';

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
      <Card
        style={{ backgroundColor: getRandomColor() }}
        title={this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
      >
        <Button onClick={this.props.actions.reset}>Ново Теглене</Button>
      </Card>
    );
  }
}

export default Final;
