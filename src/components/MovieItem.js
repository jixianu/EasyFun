import React, {Component} from 'react'
import {Col} from 'antd'
import * as config from '../config'

const MovieItem = ({imgUrl, title, rating, genre}) => {
  // 返回JSX结构
  return (
    <Col span={24 / config.DEFAULT_COUNT}>
      <div className='movie_item'>
        <div className='movie_img'>
          <img src={imgUrl}/>
        </div>
        <div className='movie_info'>
          <div className='movie_title'>{title}</div>
          {rating == '0' ?
            <div className='movie_genre'>{genre}</div>
            :
            <div className='movie_score'>{rating}</div>
          }
        </div>
      </div>
    </Col>
  );
}

export default MovieItem
