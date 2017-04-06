import React, {Component} from 'react'
import ColumnHeader from '../components/ColumnHeader'
import MovieList from '../components/MovieList'
import Pages from '../components/Pages'
import {Spin} from 'antd';
import fetch_movie from '../common/fetch'
import * as config from '../config'

import 'antd/dist/antd.less'

export default class MovieColumn extends Component {
  state = {
    isLoading: true,
    MoviesData: null,
    current: 1
  }

  componentWillMount() {
    fetch_movie({
      start: config.DEFAULT_START,
      count: config.DEFAULT_COUNT,
      type: this.props.type,
      resolve: this.resolve
    });
  }

  resolve = json => {
    this.setState({
      MoviesData: json.subjects,
      isLoading: false
    })
  }

  pageChange = page => {
    this.setState({
      current: page
    })
    fetch_movie({
      start: (page - 1) * config.DEFAULT_COUNT,
      count: config.DEFAULT_COUNT,
      type: this.props.type,
      resolve: this.resolve
    });
  }

  render() {
    const {title, id, type, total} = this.props;
    const {MoviesData, isLoading, current} = this.state;
    return (
      <div>
        <ColumnHeader
          title={title}
          isMore={false}
          id={id}
        />
        <MovieList
          type={type}
          MoviesData={MoviesData}
          isLoading={isLoading}
          current={current}
        />
        <Pages
          total={total}
          onChange={this.pageChange}
          current={current}
        />
      </div>
    )
  }
}