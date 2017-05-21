import React, {Component} from 'react'
import {Row, Col} from 'antd'
import MusicList from './MusicList'
import TopList from '../TopList'
import {musicTop} from '../../common/mock'
import ColumnHeader from '../ColumnHeader'

export default  class MusicColumn extends Component {
  render() {
    return (
      <div>
        <ColumnHeader
          title='流行音乐'
          isMore={true}
          id='mosic'
          target='/music'
        />
        <Row>
          <Col span={17}>
            <MusicList />
          </Col>
          <Col span={7} className="topList">
            <TopList data={musicTop.musicList} title='新歌榜'/>
          </Col>
        </Row>
      </div>
    )
  }
}