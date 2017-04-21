import React from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd'

import '../style/ColumnHeader'

const ColumnHeader = ({title, isMore, id , target})=> {
  return (
    <div className='column_header'>
      <span className='column_title' id={id}>
        {title}
      </span>
      {isMore &&<Link to={target}> <span className='column_more'>
        更多
        <Icon type="right"/>
      </span></Link> }
    </div>
  )
}

export default ColumnHeader