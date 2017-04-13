import React, {Component} from 'react'
import {Spin} from 'antd'

const Loading = ()=> {
  return (
    <div className='loading'>
      <Spin />
    </div>
  )
}

export default Loading
