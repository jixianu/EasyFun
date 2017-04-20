import React, {Component} from 'react';
import {Link} from 'react-router'
import TopList from '../TopList'
import Loading from '../Loading'
import {fetch_spot} from '../../common/fetch'

export default class TopListBlock extends Component {
  state = {
    newsData: null,
    isLoading: false
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    fetch_spot({
      type: 'top',
      count: 10
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
      <div className="topList">
        {isLoading ? <Loading /> : <TopList data={this.state.newsData} title='热点头条' link='spot'/>}
      </div>
    )
  }
}
