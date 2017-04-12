import React from 'react'
import {Card, Icon, Spin} from 'antd'

const MovieActors = ({directors, casts, isLoading}) => {
  if (isLoading) {
    return (
      <Spin />
    )
  }
  const actorList = casts.map((item, index)=>(
      <li key={item.id}>
        {index == 0 ? <p>主演</p> : <p></p>}
        <a href={item.alt}>
          <img src={item.avatars.large}/>
        </a>
        <p>{item.name}</p>
      </li>
    )
  )
  return (
    <Card title="演职人员" extra={<a href="javascript:;">更多<Icon type='right'/></a>}>
      <ul className='actor'>
        <li>
          <p>导演</p>
          <a href={directors[0].alt}>
            <img src={directors[0].avatars.large}/>
          </a>
          <p>{directors[0].name}</p>
        </li>
        {actorList}
      </ul>
    </Card>
  )
}

export default MovieActors
