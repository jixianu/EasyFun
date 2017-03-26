import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './config/Route-Config'

var rootInstance = ReactDOM.render(
    <div>
      {RootRouter}
    </div>,
  document.getElementById('app')
)

// 热更新
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      return [rootInstance];
    }
  })
}
