import React from 'react'
import {Link} from 'react-router'
import Pages from './Pages'

const ColumnHeader = ({title, id , target, total, onChange, current, isMore})=> {
  return (
    <div className='column_header'>
      <span className='column_title' id={id}>
        <Link to={target}> {title} </Link>
      </span>
      <span className='column_more'>
        {!isMore && <Pages current= {current} total={total} onChange={onChange}/>}
      </span>
    </div>
  )
}

export default ColumnHeader