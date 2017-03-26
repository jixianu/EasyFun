import React, {Component} from 'react'
import ColumnHeader from '../components/ColumnHeader'
import MovieList from '../components/MovieList'
import Pages from '../components/Pages'

import fetch_movie from '../common/fetch'
import * as config from '../config'

import 'antd/dist/antd.less'

export default class MovieColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      MoviesData: null,
      curPage: 1
    }

    this.pageChange = this.pageChange.bind(this);
  }

  componentWillMount() {
    fetch_movie({
      start: config.DEFAULT_START,
      count: config.DEFAULT_COUNT,
      type: this.props.type,
      resolve: this.resolve
    });
  }

  resolve(json) {
    this.setState({
      MoviesData: json.subjects,
      isLoading: false
    })
  }

  pageChange(page) {
    this.setState({
      curPage: page
    })
    fetch_movie({
      start: (page - 1) * config.DEFAULT_COUNT,
      count: config.DEFAULT_COUNT,
      type: this.props.type,
      resolve: this.resolve
    });
  }

  render() {
    return (
      <div>
        <ColumnHeader
          title={this.props.title}
          isMore={false}
          id={this.props.id}
        />
        <MovieList
          type={this.props.type}
          MovieData={this.state.MoviesData}
          isLoading={this.state.isLoading}
        />
        <Pages
          total={this.props.total}
          onChange={this.pageChange}
        />
      </div>
    )
  }
}