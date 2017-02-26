import React, { Component } from 'react';
 {/*import { Layout, Header, Sider, Footer, Content } from 'antd';*/}
import '../style/App';
export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="appContainer">
          <div className="appHeader">
             header
          </div>
          <div className="appContent">
              {this.props.children}
          </div>
          <div className="appFooter">
              footer
          </div>
          {/*this.props.children?this.props.children:<div>容器页面</div>*/}
      </div>
    )
  }
}
