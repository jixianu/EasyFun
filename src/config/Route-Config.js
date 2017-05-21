import React from 'react'
import {Router, Route,  IndexRoute, Redirect, hashHistory} from 'react-router'
import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'

const BookContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/BookContainer').default)
  },'BookContainer')
}

const BookDetailContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/BookDetailContainer').default)
  },'BookDetailContainer')
}

const MovieContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MovieContainer').default)
  },'MovieContainer')
}

const MovieDetailContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MovieDetailContainer').default)
  },'MovieDetailContainer')
}

const MusicContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MusicContainer').default)
  },'MusicContainer')
}

const MusicDetailContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/MusicDetailContainer').default)
  },'MusicDetailContainer')
}

const SpotContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/SpotContainer').default)
  },'SpotContainer')
}

const SpotDetailContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/SpotDetailContainer').default)
  },'SpotDetailContainer')
}

const NotFoundPage = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/NotFoundPage').default)
  },'NotFoundPage')
}

/*const HomeContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('../containers/HomeContainer').default)
  },'HomeContainer')
}*/

const RootRoter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ AppContainer }>
      <IndexRoute  component={ HomeContainer }/>
      <Route path="index"  component={ HomeContainer }/>
      <Route path="movie" getComponent={MovieContainer} />
      <Route path="movie/:id" getComponent={ MovieDetailContainer }/>
      <Route path="book" getComponent={ BookContainer }/>
      <Route path="book/:id" getComponent={ BookDetailContainer }/>
      <Route path="spot" getComponent={ SpotContainer }/>
      <Route path="spot/:id" getComponent={ SpotDetailContainer }/>
      <Route path="music" getComponent={ MusicContainer  }
             onLeave={ ()=>console.log('离开了music页面')  }
             onEnter={ ()=>console.log('进入了music页面') }/>
      <Route path="music/:id" getComponent={ MusicDetailContainer }/>
    </Route>
    <Route path="404" getComponent={ NotFoundPage }/>
    <Redirect from='*' to='404'/>
  </Router>
)
export default RootRoter

