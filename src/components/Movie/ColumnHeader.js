import React from 'react'
import {Icon} from 'antd'

import '../../style/Column'

const ColumnHeader = ({title, isMore, id })=> {
  return (
    <div className='column_header'>
      <span className='column_title' id={id}>
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