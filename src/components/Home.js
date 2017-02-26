// 在js中引入css文件了
// import './Hello';
// 在js中引入sass文件

import '../css/Hello';
import  Sub from './Sub';

import React, {Component} from 'react';
// 直接在js中定义样式，内嵌样式，样式要按照驼峰命名去定义
let style = {
  backgroundColor: 'yellow',
  color : 'pink'
}

export default class Home extends Component {

  render() {
    // 约定大于配置，如果你这样直接赋值就破坏了react中的单向数据流
    //this.state.props1="我修改了数据"
    const b = 888;
    return (
      <div>
        {/*这是我们的注释*/}
        <h1 style={style}>111y{b}</h1>
        <Sub />
        <br/>
        <img/>
      </div>
    )
  }
}
