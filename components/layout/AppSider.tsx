import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const AppSider = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link href="/todos">
            <a>Todo List</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link href="/todos">
            <a>About</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link href="/todos">
            <a>Sign out</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppSider;
