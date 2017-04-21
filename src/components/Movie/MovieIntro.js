import React, {Component} from 'react'
import {Card, Col} from 'antd'
import {comments, commentsMore} from '../../common/mock'
import MovieActor from './MovieActor'
import ListLoadMore from '../ListLoadMore'
import Loading from '../Loading'

export default class MovieIntro extends Component {
  state = {
    commentList: comments.commentList,
    count: 1,
    iconLoading: false
  }
  handleClick = ()=> {
    this.setState({
      iconLoading: true
    });
    setTimeout(()=> {
      this.setState({
        count: this.state.count > 0 ? this.state.count - 1 : 0,
        iconLoading: false,
        commentList: [...this.state.commentList, ...commentsMore.commentList]
      });
    }, 1000);
  }

  render() {
    let commentList = this.state.commentList.map((item)=>(
        <div className='movie_comment' key={item.id}>
          <div className='movie_commentator'>
            <img src={item.url}/>
            <span>{item.name}</span>
            <span className='movie_commentdate'>{item.time}</span>
          </div>
          <p>{item.content}</p>
        </div>
      )
    );
    return (
      <Col span={18}>
        <Card title="影片简介" className='movie_intro'>
          {this.props.isLoading ? <Loading /> : this.props.data.summary}
        </Card>
        <MovieActor
          directors={this.props.isLoading ? null : this.props.data.directors}
          casts={this.props.isLoading ? null : this.props.data.casts}
          isLoading={this.props.isLoading}
        />
        <Card title="评论">
          {commentList}
          <ListLoadMore
            isLoading={this.state.iconLoading}
            handleClick={this.handleClick}
            count={this.state.count}
          />
        </Card>
      </Col>
    )
  }
}
