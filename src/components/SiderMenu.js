import React, {Component} from 'react'
import MovieMenu from './MovieMenu'

export default class SiderMenu extends Component {
  constructor() {
    super();
    this.state = {
      currentMenu: 'movie'
    };
  }

  render() {
    return (
      <MovieMenu />
    );
  }
}
