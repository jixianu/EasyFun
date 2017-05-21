import React, {Component} from 'react'
import ColumnHeader from '../ColumnHeader'
import MovieList from './MovieList'
import Loading from '../Loading'
import Pages from '../Pages'
import {fetch_movie} from '../../common/fetch'
import * as config from '../../config'

export default class MovieColumn extends Component {
  state = {
    isLoading: false,
    MoviesData: null,
    current: 1
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    fetch_movie({
      start: config.DEFAULT_START,
      count: this.props.count || 4,
      type: this.props.type
    }).then(data=> {
      this.resolve(data);
    }).catch(err=> {
      console.log('parsing failed', err);
    })
  }

  componentWillUnmount() {
    // 这里使用组件属性
    this.unmount = true;
  }

  resolve = data => {
    if (data && !this.unmount) {
      this.setState({
        MoviesData: data.subjects,
        isLoading: false
      })
    }
  }

  pageChange = page => {
    this.setState({
      current: page
    })
    fetch_movie({
      start: (page - 1) * config.DEFAULT_COUNT,
      count: this.props.count || 4,
      type: this.props.type
    }).then(data=> {
      this.resolve(data)
    }).catch(err=> {
      console.log('parsing failed', err);
    })
  }

  render() {
    const {type, isMore, total, title, id} = this.props;
    const {MoviesData, isLoading, current} = this.state;
    return (
      <div>
        <ColumnHeader
          title={title}
          id={id}
          isMore={isMore}
          target='/movie'
          total={total}
          onChange={this.pageChange}
          current={current}
        />
        { isLoading ? <Loading /> :
          <div className='movie_column'>
            <MovieList
              type={type}
              MoviesData={MoviesData}
              current={current}
            />
          </div>
        }
      </div>
    )
  }
}