import React, {Component, PropTypes} from 'react'
import MovieItem from './MovieItem'
import {Row} from 'antd'

export default class MovieList extends Component {
  render() {
    let itemList = null;
    const {MoviesData, type, current} = this.props;
    // 判断是否有数据
    if (MoviesData) {
      // 北美榜数据格式不同，进行判断
      if (type === 'us_box') {
        itemList = MoviesData.map(item => (
          <MovieItem
            key={item.subject.id}
            id={item.subject.id}
            imgUrl={item.subject.images.large}
            title={item.subject.title}
            rating={item.subject.rating.average}
          />
        ));
        let endlength = current * 4 < itemList.length ? current * 4 : itemList.length;
        itemList = itemList.slice((current - 1) * 4, endlength);
      } else {
        itemList = MoviesData.map(item => (
          <MovieItem
            key={item.id}
            id={item.id}
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
        {itemList}
      </Row>
    );
  }
}
