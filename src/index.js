import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import RootRouter from './config/Route-Config'
import StoreConfig from './config/Store-Config'

const store = StoreConfig();

var rootInstance = ReactDOM.render(
  <Provider store={store}>
      {RootRouter}
  </Provider>,
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
