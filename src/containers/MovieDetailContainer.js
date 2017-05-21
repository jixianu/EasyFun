import React, {Component} from 'react'
import {Layout, Rate, Card, Icon, Row, BackTop} from 'antd'
import MovieBanner from '../components/Movie/MovieBanner'
import MovieIntro from '../components/Movie/MovieIntro'
import MovieAbout from '../components/Movie/MovieAbout'
import {fetch_movieDetail} from '../common/fetch'

export default class MovieDetailContainer extends Component {
  state = {
    data: null,
    isLoading: true
  }

  componentDidMount() {
    fetch_movieDetail({
      id: this.props.params.id
    })
      .then(data=>{
        if (data && !this.unmount) {
          this.setState({
            data: data,
            isLoading: false
          })
        }
      })
      .catch(err=>
        console.log('parsing failed', err)
      )
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  render() {
    return (
      <div className='movie_detail'>
        <MovieBanner
          isLoading={this.state.isLoading}
          data={this.state.data}
        />
        <Row>
          <MovieIntro
            isLoading={this.state.isLoading}
            data={this.state.data}
          />
          <MovieAbout />
        </Row>
        <BackTop>
          <div className="ant-back-top-inner">
            <Icon type="arrow-up"/>
          </div>
        </BackTop>
      </div>
    )
  }
}
