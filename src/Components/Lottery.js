import React, { Component } from 'react';

import LotteryTicket from './LotteryTicket';

import { Button, Space, Typography, Divider } from 'antd';

const { Title } = Typography;

class Lottery extends Component {
  renderButton() {
    const { remainingTickets, actions } = this.props;
    if (remainingTickets > 0) {
      return (
        <Button block type="primary" onClick={actions.registerTicket}>
          Купи Билет
        </Button>
      );
    }

    return (
      <Button block type="primary" onClick={actions.finish}>
        Провери за Печалба
      </Button>
    );
  }

  renderTickets() {
    const { tickets, actions } = this.props;

    const lotteryTicketActions = { removeTicket: actions.removeTicket };

    const lotteryTickets = tickets.map((ticket, index) => {
      return (
        <LotteryTicket
          actions={lotteryTicketActions}
          color={ticket.color}
          number={ticket.number}
          index={index}
          key={index}
        />
      );
    });
    return lotteryTickets;
  }

  render() {
    return (
      <>
        <Title>Лотария</Title>
        {this.renderButton()}
        <br />
        <small>оставащи: {this.props.remainingTickets}</small>
        <br />
        <Divider>вашите билетчета</Divider>
        {this.renderTickets()}
      </>
    );
  }
}

export default Lottery;
