import React, {Component, PropTypes} from 'react'
import MovieItem from './MovieItem'
import {Row, Spin, Col} from 'antd'
import * as config from '../config'

export default class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemList = null;
    // 判断是否有数据
    if (this.props.MoviesData) {
      // 北美榜数据格式不同，进行判断
      if (this.props.type === 'us_box') {
        // 这里使用的遍历了所有对象
        itemList = this.props.MoviesData.map(item => (
          <MovieItem
            key={item.subject.id}
            imgUrl={item.subject.images.large}
            title={item.subject.title}
            rating={item.subject.rating.average}
          />
        ));
      } else {
        itemList = this.props.MoviesData.map(item => (
          <MovieItem
            key={item.id}
            imgUrl={item.images.large}
            title={item.title}
            rating={item.rating.average}
            genre={item.genres[0]}
          />
        ));
      }
    }

    return (
      // Item间距
      <Row gutter={16}>
        {this.props.isLoading ?
          <Spin tip='Loading...' />
          :
          itemList
        }
      </Row>
    );
  }
}
