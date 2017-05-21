import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'
import './style/App'
import './style/base'
import './style/BookList'
import './style/ColumnHeader'
import './style/Home'
import './style/ListLoadMore'
import './style/Login'
import './style/MovieDetail'
import './style/MovieMenu'
import './style/Music'
import './style/NewsList'
import './style/Pages'
import './style/Spot'
import './style/TopList'
import './style/MovieItem'
import './style/MovieColumn'

ReactDOM.render(
  <div>
    {RootRouter}
  </div>,
  document.getElementById('app')
)
