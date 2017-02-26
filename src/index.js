import React from 'react';
import ReactDOM from 'react-dom';
import RootRoute from './routers/RootRoute';

var rootInstance = ReactDOM.render(
  <RootRoute />,
  document.getElementById('app')
)

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      return [rootInstance];
    }
  });
}