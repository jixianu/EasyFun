import React from 'react'
import {Icon} from 'antd'


import '../style/Column'
function ColumnHeader({title, isMore}) {
  return (
    <div className='column_header'>
      <span className='column_title'>
        {title}
      </span>
      {isMore && <span className='column_more'>
        更多
        <Icon type="right"/>
      </span> }
    </div>
  )
}

export default ColumnHeader