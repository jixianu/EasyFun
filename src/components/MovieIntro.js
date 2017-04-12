import React from 'react'
import {Card, Icon, Spin, Col} from 'antd'
import {comments} from '../common/mock'
import MovieActor from '../components/MovieActor'

const MovieIntro = ({isLoading, data}) => {
  return (
    <Col span={18}>
      <Card title="影片简介" className='movie_intro'>
        {isLoading ? <Spin /> : data.summary}
      </Card>
      {isLoading ?
        <Spin /> :
        <MovieActor
          directors={data.directors}
          casts={data.casts}
          isLoading={isLoading}
        />
      }
      <Card title="评论">
        <div className='movie_comment'>
          <div className='movie_commentator'>
            <img src="../image/bg.jpg"/>
          </div>
          <div className='movie_commentdate'>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default MovieIntro
