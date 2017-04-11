import React, {Component} from 'react'
import {Layout, Button, Rate, Card, Icon} from 'antd'
import MovieMenu from '../components/MovieMenu'
import Test from '../components/test'
import {fetch_test} from '../common/fetch'
import {comments,commetData} from '../common/mock'
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

  handleClick = ()=> {
    /*fetch('/api/data.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, *!/!*'
      },
    })
      .then(response => {
        return response.json();
      })
      .then(data=>
        console.log(data)
      )*/
    console.log(comments);
    console.log( commetData );
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
        {/*<div className='movie_banner'>
         <div className='movie_introduce'>
         <div className='movie_poster'>
         <img src="../image/gk.jpg" alt=""/>
         </div>
         <div className='movie_info'>
         <h1>攻壳机动队</h1>
         <p>导演: 123</p>
         <p>主演："范·迪塞尔"、"道恩·强森"、"查理兹·塞隆"、"杰森·斯坦森"</p>
         <p>国家： "美国","日本","法国","加拿大","美属萨摩亚"</p>
         <p>系列：动作、冒险、犯罪</p>
         <p>年代：2017</p>
         <p>看过/想看：212121</p>
         <p>热度：121212</p>
         </div>
         <div className='movie_content'>
         <div className='movie_gate'>
         2.6
         </div>
         <Rate allowHalf defaultValue={2.6} disabled/>
         </div>
         </div>
         </div>
         <Layout>
         <Row>
         <Col span={18}>
         <Card title="影片简介" extra={<a href="#">More<Icon type='right'/></a>} bodyStyle={{fontSize: 14}}>
         "多米尼克与莱蒂共度蜜月，布莱恩与米娅退出了赛车界，这支曾环游世界的顶级飞车家族队伍的生活正渐趋平淡。然而，一位神秘女子Cipher的出现，令整个队伍卷入信任与背叛的危机，面临前所未有的考验。"
         </Card>
         <Card title="演职人员" extra={<a href="#">More<Icon type='right'/></a>}>
         <ul className='actor'>
         <li>
         <p>导演</p>
         <a href="javascript:;">
         <img src="../image/gk.jpg" alt=""/>
         </a>
         <p>F·加里·格雷</p>
         </li>
         <li>
         <p>主演</p>
         <a href="javascript:;">
         <img src="../image/gk.jpg" alt=""/>
         </a>
         <p>F·加里·格雷</p>
         <p>F·加里·格雷</p>
         </li>
         <li>
         <p></p>
         <a href="javascript:;">
         <img src="../image/gk.jpg" alt=""/>
         </a>
         <p>F·加里·格雷</p>
         <p>F·加里·格雷</p>
         </li>
         <li>
         <p></p>
         <a href="javascript:;">
         <img src="../image/gk.jpg" alt=""/>
         </a>
         <p>F·加里·格雷</p>
         <p>F·加里·格雷</p>
         </li>
         <li>
         <p></p>
         <a href="javascript:;">
         <img src="../image/gk.jpg" alt=""/>
         </a>
         <p>F·加里·格雷</p>
         <p>F·加里·格雷</p>
         </li>
         </ul>
         </Card>
         <Card title="评论">

         </Card>
         </Col>
         <Col span={5} offset={1}>
         <Card title="相关">
         <p>1</p>
         <p>2</p>
         <p>3</p>
         </Card>
         <Card title="资讯">
         <p>1</p>
         <p>2</p>
         <p>3</p>
         </Card>
         </Col>
         </Row>
         </Layout>*/}
        < Button
          onClick={this.handleClick}>
          点击
        </ Button >
      </div>
    )
  }
}
