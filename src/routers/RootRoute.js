import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, Redirect, browserHistory, hashHistory} from 'react-router';

import AppContainer from '../containers/AppContainer';
import HomeContainer from '../containers/HomeContainer';
import MovieContainer from '../containers/MovieContainer';
import MusicContainer from '../containers/MusicContainer';
import BookContainer from '../containers/BookContainer';
import SportContainer from '../containers/SportContainer';

export default class RootRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ AppContainer }>
          <IndexRoute component={ HomeContainer }/>
          <Route path="home" component={ HomeContainer }/>
          <Route path="movie" component={ MovieContainer }/>
          <Route path="book" component={ BookContainer }/>
          <Route path="sport" component={ SportContainer }/>
          <Route path="music" component={ MusicContainer }
          onLeave={ ()=>console.log('离开了music页面') }
          onEnter={ ()=>console.log('进入了music页面') }>
          {/*这是绝对路由的写法，直接拼接/*}
          <Route path="/messages/:id" component={Message}/>
          {/*<Route path="messages/:id" component={Message} />*/}
          {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
          {/* <Redirect from="messages/:id" to="/messages/:id"/>*/}
          </Route>
        </Route>
      </Router>
    )
  }
};
