import React, {Component, PropTypes} from 'react'
import MovieItem from './MovieItem'
import {Row, Spin, Col} from 'antd'

export default class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemList = null;
    if (this.props.MoviesData) {
      itemList = this.props.MoviesData.map(item => (
        <MovieItem
          key={item.id}
          imgUrl={item.images.large}
          title={item.title}
          rating={item.rating.average}
        />
      ));
    }

    return (
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
