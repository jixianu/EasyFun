import React, {Component} from 'react'
import {Rate} from 'antd'
import Loading from '../Loading'

const MovieBanner = ({isLoading, data}) => {
  if (isLoading) {
    return (
      <Loading />
    )
  }

  const directorList = data.directors.map((item, index) => {
    if (index === data.directors.length - 1) {
      return item.name;
    } else {
      return item.name + '、';
    }
  });

  const actorList = data.casts.map((item, index) => {
    if (index === data.casts.length - 1) {
      return item.name;
    } else {
      return item.name + '、';
    }
  });

  return (
    <div className='movie_banner'>
      <div className='movie_introduce'>
        <div className='movie_poster'>
          <img src={data.images.large}/>
        </div>
        <div className='movie_info'>
          <h1>{data.title}</h1>
          <h4>原名: {data.original_title}</h4>
          <p>导演: {directorList}</p>
          <p>主演：{actorList}</p>
          <p>国家：{data.countries.join('、')}</p>
          <p>系列：{data.genres.join('、')}</p>
          <p>年代：{data.year}</p>
          <p>短评数：{data.comments_count}</p>
          <p>评分人数：{data.ratings_count}</p>
        </div>
        <div className='movie_content'>
          <div className='movie_gate'>
            {data.rating.average.toFixed(1)}
          </div>
          <Rate allowHalf defaultValue={data.rating.stars / 10} disabled/>
        </div>
      </div>
    </div>
  )
}

export default MovieBanner
