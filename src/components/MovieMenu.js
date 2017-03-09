import React from 'react'
import { Menu } from 'antd';

const MovieMenu = () =>  {
  return (
    <Menu>
      <Menu.Item key="1">正在热映</Menu.Item>
      <Menu.Item key="2">Top250</Menu.Item>
      <Menu.Item key="3">口碑榜</Menu.Item>
      <Menu.Item key="4">北美票房榜</Menu.Item>
      <Menu.Item key="5">新片榜</Menu.Item>
    </Menu>
  );
}

export default MovieMenu