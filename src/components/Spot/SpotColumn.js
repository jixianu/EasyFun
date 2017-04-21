import React, {Component} from 'react'
import {Row, Col, Carousel, Tabs} from 'antd'
import NewsListBlock from './NewsListBlock'
import TopListBlock from './TopListBlock'
import ColumnHeader from '../ColumnHeader'

const {TabPane} = Tabs

const SpotColumn = ()=> {
  return (
    <div className='spot_news'>
      <ColumnHeader
        title='热点新闻'
        isMore={true}
        id='spot'
        target='/spot'
      />
      <Row gutter={10}>
        <Col span={8}>
          <Carousel autoplay className='carousel'>
            <div><img src={require("../../image/news_carousel_1.jpg")} alt='平壤居民罕见用韩国品牌相机拍照'/></div>
            <div><img src={require("../../image/news_carousel_2.jpg")} alt='土耳其公投成功海外公民有喜有悲'/></div>
            <div><img src={require("../../image/news_carousel_3.jpg")} alt='镜头记录雄安新区街头即景'/></div>
            <div><img src={require("../../image/news_carousel_4.jpg")} alt='长沙现微型古籍疑是科举作弊用书'/></div>
          </Carousel>
        </Col>
        <Col span={10}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="国内" key="1">
              <NewsListBlock
                type='guonei'
                count={5}
              />
            </TabPane>
            <TabPane tab="国际" key="2">
              <NewsListBlock
                type='guoji'
                count={5}
              />
            </TabPane>
            <TabPane tab="娱乐" key="3">
              <NewsListBlock
                type='yule'
                count={5}
              />
            </TabPane>
            <TabPane tab="体育" key="4">
              <NewsListBlock
                type='tiyu'
                count={5}
              />
            </TabPane>
            <TabPane tab="军事" key="5">
              <NewsListBlock
                type='junshi'
                count={5}
              />
            </TabPane>
            <TabPane tab="社会" key="6">
              <NewsListBlock
                type='shehui'
                count={5}
              />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={6}>
          <TopListBlock />
        </Col>
      </Row>
    </div>
  );
}

export default SpotColumn
