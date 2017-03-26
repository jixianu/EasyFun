import React, {Component} from 'react'
import {Col, Spin, Alert} from 'antd'
import * as config from '../config'

import '../style/MovieItem'

function MovieItem({ isLoading, imgUrl, title, rating }) {
  // 返回JSX结构
  return (
    <Col span={24 / config.DEFAULT_COUNT}>
      {
        isLoading ?
          <Spin tip='Loading...' />
          :
          <div className='movie_item'>
            <div className='movie_img'>
              <img src={imgUrl}/>
            </div>
            <div className='movie_info'>
              <div className='movie_title'>{title}</div>
              <div className='movie_score'>{rating}</div>
            </div>
          </div>
      }
    </Col>
  );
}

export default MovieItem
