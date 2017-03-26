import React, { Component } from 'react'
import { Pagination } from 'antd'

import '../style/Pages'

function Pages({current, total, onChange, defaultPageSize, id}){
  return (
    <div className="Pages" id= {id}>
      <Pagination
        current= {current || 1}
        total={total}
        defaultPageSize={defaultPageSize || 4}
        onChange={onChange}
      />
    </div>
  )
}

export default Pages
