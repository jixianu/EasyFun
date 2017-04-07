import React, {Component} from 'react'
import {Layout, Button} from 'antd'
import MovieMenu from '../components/MovieMenu'
import Test from '../components/test'
import {fetch_test} from '../common/fetch'
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
    fetch_test()
      .then(data=>console.log(data))
      .then(data=>console.log(data))
  }

  render() {
    return (
      <Layout>
        <Sider>
          <MovieMenu />
        </Sider>
        <Content className='content'>
          <Test second={this.state.date.toLocaleTimeString()} text="txt"/>
          <Button onClick={this.click}>test</Button>
        </Content>
      </Layout>
    )
  }
}
