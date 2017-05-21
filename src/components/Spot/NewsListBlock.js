import React, {Component} from 'react'
import {fetch_spot} from '../../common/fetch'
import NewsList from './NewsList'
import Loading from '../Loading'

export default class NewsListBlock extends Component {
  state = {
    newsData: null,
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch_spot({
      type: this.props.type,
      count: this.props.count
    })
      .then(
        data=> {
          this.setState({
            newsData: data,
            isLoading: false
          })
        }
      )
      .catch(err=>console.log('parsing failed', err))
  }

  render() {
    const {isLoading} = this.state;

    return (
      <div>
        {isLoading ? <Loading /> : <NewsList newsData={this.state.newsData}/>}
      </div>
    )
  }
}