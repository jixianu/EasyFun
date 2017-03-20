import React from 'react'
import {Router, Route,  IndexRoute, Redirect, hashHistory} from 'react-router'
import AppContainer from '../containers/AppContainer'
import BookContainer from '../containers/BookContainer'
import BookDetailContainer from '../containers/BookDetailContainer'
import MovieContainer from '../containers/MovieContainer'
import MovieDetailContainer from '../containers/MovieDetailContainer'
import MusicContainer from '../containers/MusicContainer'
import MusicDetailContainer from '../containers/MusicDetailContainer'
import SportContainer from '../containers/SportContainer'
import SportDetailContainer from '../containers/SportDetailContainer'
import NotFoundPage from '../containers/NotFoundPage'
import HomeContainer from '../containers/HomeContainer'

const RootRoter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ AppContainer }>
      <IndexRoute  component={ HomeContainer }/>
      <Route path="index"  component={ HomeContainer }/>
      <Route path="movie" component={ MovieContainer }/>
      <Route path="movie/:id" component={ MovieDetailContainer }/>
      <Route path="book" component={ BookContainer }/>
      <Route path="book/:id" component={ BookDetailContainer }/>
      <Route path="sport" component={ SportContainer }/>
      <Route path="sport/:id" component={ SportDetailContainer }/>
      <Route path="music" component={ MusicContainer  }
             onLeave={ ()=>console.log('离开了music页面')  }
             onEnter={ ()=>console.log('进入了music页面') }/>
      <Route path="music/:id" component={ MusicDetailContainer }/>
      <Route path="404" component={ NotFoundPage }/>
      <Redirect from='*' to='/'/>
    </Route>
  </Router>
)
export default RootRoter

