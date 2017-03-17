import React, {Component} from 'react'
import {Router, Route, Link, IndexRoute, Redirect, browserHistory, hashHistory} from 'react-router'
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

// 根据环境确认使用history的属性,应配合node吧，问题出在此，路由只有HOME页不跳转
// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory,整体优化时解决

// 路由的按需加载，在pro时可以，原因是index的入口js可以找到，但开发环境不可以，报错，找不到入口js,整体优化时解决
/*const BookContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/BookContainer').default)
 }, 'BookContainer')
 }


 const BookDetailContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/BookDetailContainer').default)
 }, 'BookDetailContainer')
 }


 const MovieContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/MovieContainer').default)
 }, 'MovieContainer')
 }

 const MovieDetailContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/MovieDetailContainer').default)
 }, 'MovieDetailContainer')
 }


 const MusicContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/MusicContainer').default)
 }, 'MusicContainer')
 }


 const MusicDetailContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/MusicDetailContainer').default)
 }, 'MusicDetailContainer')
 }


 const SportContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/SportContainer').default)
 }, 'SportContainer')
 }


 const SportDetailContainer = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/SportDetailContainer').default)
 }, 'SportDetailContainer')
 }


 const NotFoundPage = (nextState, cb) => {
 require.ensure([], require => {
 cb(null, require('../containers/NotFoundPage').default)
 }, 'NotFoundPage')
 }*/

/*const RootRoute = (
 <Router history={ history }>
 <Route path="/" component={ AppContainer } >
 <IndexRoute component={ HomeContainer } />
 <Route path="index" component={ HomeContainer } />
 <Route path="movie" getComponent={ MovieContainer } />
 <Route path="movie/:id" getComponent={ MovieDetailContainer } />
 <Route path="book" getComponent={ BookContainer } />
 <Route path="book/:id" getComponent={ BookDetailContainer } />
 <Route path="sport" getComponent={ SportContainer } />
 <Route path="sport/:id" getComponent={ SportDetailContainer } />
 <Route path="music" getComponent={ MusicContainer  }
 onLeave={ ()=>console.log('离开了music页面')  }
 onEnter={ ()=>console.log('进入了music页面') } />
 <Route path="music/:id" getComponent={ MusicDetailContainer } />
 {/!*<Redirect from='*' to='/'/>*!/ }
 <Route path="404" getComponent={ NotFoundPage } />
 </Route>
 </Router>
 )*/
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

