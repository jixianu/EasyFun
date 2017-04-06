import React, {Component} from 'react'
import {Layout} from 'antd'
import MovieMenu from '../components/MovieMenu'
import Test from '../components/test'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  click = ()=> {
    /*fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=aaa&password=123&confirmPassword=123", {method: 'get'})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        /!*localStorage.userid = json.UserId;
         localStorage.userNickName = json.NickUserName;*!/
      })*/
  }

  render() {
    return (
      <Layout>
        <Sider>
          <MovieMenu />
        </Sider>
        <Content className='content'>
          <Test second={this.state.date.toLocaleTimeString()} text="txt"/>
        </Content>
      </Layout>
    )
  }
}
