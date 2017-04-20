import React, {Component} from 'react'
import {Row, Col} from 'antd'
import MusicList from './MusicList'
import TopList from '../TopList'
import {musicTop} from '../../common/mock'

import '../../style/Music'

export default  class MusicColumn extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={18}>
            <MusicList />
          </Col>
          <Col span={6} className="topList">
            <TopList data={musicTop.musicList} title='新歌榜'/>
          </Col>
        </Row>
      </div>
    )
  }
}