import React, {Component} from 'react'
import {Button} from 'antd'

const ListLoadMore = ({isLoading, handleClick, count}) => {
  return (
    <div className='list_load'>
      {count > 0 ?
        <Button loading={isLoading} onClick={handleClick}>
          加载更多...
        </Button>
        :
        <p>没有更多了</p>
      }
    </div>
  )
}

export default ListLoadMore
