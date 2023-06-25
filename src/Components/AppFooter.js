import React, { Component } from 'react';

import { Layout } from 'antd';

const { Footer } = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{ display: 'flex', alignItems: 'center' }}>
        National Lottery Inc.&copy; {new Date().getFullYear()}
      </Footer>
    );
  }
}

export default AppFooter;
