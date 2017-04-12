import React, {Component} from 'react'
import {Layout, Rate, Card, Icon, Row, Col, Spin} from 'antd'
import MovieIntro from '../components/MovieIntro'
import MovieAbout from '../components/MovieAbout'
import {fetch_movieDetail} from '../common/fetch'

import '../style/MovieDetail'
export default class MovieDetailContainer extends Component {
  state = {
    data: null,
    isLoading: true
  }

  componentDidMount() {
    fetch_movieDetail({
      id: this.props.params.id
    })
      .then(data=>this.setState({
        data: data,
        isLoading: false
      }))
      .catch(err=>
        console.log('parsing failed', err)
      )
  }

  render() {
    return (
      <div className='movie_detail'>
        <div className='movie_banner'>
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
            <MovieIntro
              isLoading={this.state.isLoading}
              data={this.state.data}
            />
            <MovieAbout />
          </Row>
        </Layout>
      </div>
    )
  }
}
