import React, { Component } from 'react';

import { Button, Space, Card, Typography } from 'antd';

const { Title } = Typography;

class LotteryTicket extends Component {
  render() {
    const { color, number, actions, index } = this.props;
    return (
      <Card
        style={{
          backgroundColor: color,
          marginBottom: 25,
        }}
        size="small"
        title="Билетче"
      >
        <b>
          <Title level={3}>{number}</Title>
        </b>
        <br />
        <Button
          onClick={() => {
            actions.removeTicket(index);
          }}
        >
          X
        </Button>
      </Card>
    );
  }
}

export default LotteryTicket;
