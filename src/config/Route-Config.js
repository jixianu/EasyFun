import React from 'react'
import {Router, Route,  IndexRoute, Redirect, hashHistory} from 'react-router'
import AppContainer from '../containers/AppContainer'
import BookContainer from '../containers/BookContainer'
import BookDetailContainer from '../containers/BookDetailContainer'
import MovieContainer from '../containers/MovieContainer'
import MovieDetailContainer from '../containers/MovieDetailContainer'
import MusicContainer from '../containers/MusicContainer'
import MusicDetailContainer from '../containers/MusicDetailContainer'
import SpotContainer from '../containers/SpotContainer'
import SpotDetailContainer from '../containers/SpotDetailContainer'
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
      <Route path="spot" component={ SpotContainer }/>
      <Route path="spot/:id" component={ SpotDetailContainer }/>
      <Route path="music" component={ MusicContainer  }
             onLeave={ ()=>console.log('离开了music页面')  }
             onEnter={ ()=>console.log('进入了music页面') }/>
      <Route path="music/:id" component={ MusicDetailContainer }/>
    </Route>
    <Route path="404" component={ NotFoundPage }/>
    <Redirect from='*' to='404'/>
  </Router>
)
export default RootRoter

