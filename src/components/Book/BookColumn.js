import React, {Component} from 'react'
import BookList from './BookList'
import ColumnHeader from '../ColumnHeader'

export default  class MusicColumn extends Component {
  render() {
    return (
      <div>
        <ColumnHeader
          title='热门图书'
          isMore={true}
          id='book'
          target='/book'
        />
        <BookList />
      </div>
    )
  }
}


