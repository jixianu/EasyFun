import React from 'react'
import ReactDOM from 'react-dom'
import RootRouter from './routers/Route-Config'
import { Provider } from 'react-redux'
import StoreConfig from './store/Store-Config'

// 测试redux
import TodoContainer from './components/TodoContainer'


const store = StoreConfig();
/* import {createStore, applyMiddleware} from 'redux'
 import thunkMiddleware from 'redux-thunk'*/


/*const store = createStore(
 rootReducer,
 applyMiddleware
 thunkMiddleware
 )
 )*/

/*var rootInstance = ReactDOM.render(
 <Provider store={store}>
 {RootRoute}
 </Provider>,
 document.getElementById('app')
 )*/

var rootInstance = ReactDOM.render(
  <Provider store={store}>
    <div>
      {RootRouter}
    </div>
  </Provider>,
  document.getElementById('app')
)
/*
ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app')
)
*/

// 热更新
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      return [rootInstance];
    }
  })
}
