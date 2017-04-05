import React, {Component} from 'react'
import {Layout} from 'antd'
import MovieMenu from '../components/MovieMenu'
import Test from '../components/test'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
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
