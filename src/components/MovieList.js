import React, {Component, PropTypes} from 'react'
import MovieItem from './MovieItem'
import {Row, Spin} from 'antd'

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
        itemList = this.props.MoviesData.map(item => (
          <MovieItem
            key={item.subject.id}
            imgUrl={item.subject.images.large}
            title={item.subject.title}
            rating={item.subject.rating.average}
          />
        ));
        let endlength = this.props.current*4 < itemList.length ? this.props.current*4 : itemList.length;
        itemList = itemList.slice((this.props.current-1)*4, endlength);
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
        {itemList}
      </Row>
    );
  }
}
