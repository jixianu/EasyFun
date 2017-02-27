import React, {Component} from 'react'
import {Router, Route, Link, IndexRoute, Redirect, browserHistory, hashHistory} from 'react-router'
import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'

// 路由异步按需加载配置
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory

const BookContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/BookContainer'))
    }, 'BookContainer')
}


const BookDetailContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/BookDetailContainer'))
    }, 'BookDetailContainer')
}


const MovieContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/MovieContainer'))
    }, 'MovieContainer')
}

const MovieDetailContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/MovieDetailContainer'))
    }, 'MovieDetailContainer')
}


const MusicContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/MusicContainer'))
    }, 'MusicContainer')
}


const MusicDetailContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/MusicDetailContainer'))
    }, 'MusicDetailContainer')
}


const SportContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/SportContainer'))
    }, 'SportContainer')
}


const SportDetailContainer = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/SportDetailContainer'))
    }, 'SportDetailContainer')
}


const NotFoundPage = (nextState, cb) => {
    require.ensure([], (require)=> {
        return cb(null, require('../containers/NotFoundPage'))
    }, 'NotFoundPage')
}


const RootRoute = (
    <Router history={ history }>
        <Route path="/" component={ AppContainer }>
            <IndexRoute component={ HomeContainer }/>
            <Route path="index" component={ HomeContainer }/>
            <Route path="movie" getComponent={ MovieContainer }/>
            <Route path="movie/:id" getComponent={ MovieDetailContainer }/>
            <Route path="book" getComponent={ BookContainer }/>
            <Route path="book/:id" getComponent={ BookDetailContainer }/>
            <Route path="sport" getComponent={ SportContainer }/>
            <Route path="sport/:id" getComponent={ SportDetailContainer }/>
            <Route path="music" getComponent={ MusicContainer }/>
            <Route path="music/:id" getComponent={ MusicDetailContainer }
                   onLeave={ ()=>console.log('离开了music页面') }
                   onEnter={ ()=>console.log('进入了music页面') }/>
            <Redirect from='*' to='/'/>
            <Route path="404" getComponent={ NotFoundPage }/>
        </Route>
    </Router>
)

export default RootRoute

