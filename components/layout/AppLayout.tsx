import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import AppSider from './AppSider';
import './AppLayout.module.scss';

const { Header, Content } = Layout;

const AppLayout = ({ AppContent }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={() => setCollapsed(!collapsed)} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <AppContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
