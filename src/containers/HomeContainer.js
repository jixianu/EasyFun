import React, {Component} from 'react'
import {Layout, Button, Rate} from 'antd'
import MovieMenu from '../components/MovieMenu'
import Test from '../components/test'
import {fetch_test} from '../common/fetch'

import {Row, Col, Slider} from 'antd'
import '../style/MovieDetail'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: new Date()
    }
  }

  /*componentDidMount() {
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
   }*/

  render() {
    return (
      <div>
        <div className='movie_banner'>
          <div className='movie_introduce'>
            <div className='movie_poster'>
              <img src="../image/gk.jpg" alt=""/>
            </div>
            <div className='movie_info'>
              <h3>攻壳机动队</h3>
              <p>导演: 123</p>
              <p>主演：321</p>
            </div>
            <div className='movie_content'>
              <div className='movie_gate'>
                2.6
              </div>
              <Rate allowHalf defaultValue={2.6} disabled />
            </div>
          </div>
        </div>
        <Layout>
          <Row>
            <Col span={18}>18</Col>
            <Col span={4} offset={2}>2</Col>
          </Row>
        </Layout>
      </div>
    )
  }
}
