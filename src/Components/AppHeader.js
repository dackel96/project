import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[window.location.pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link to={'/'}>Начало</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to={'/about'}>За Нас</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default AppHeader;
