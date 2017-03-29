import React from 'react'
import {Layout} from 'antd'

import 'antd/dist/antd.less'
import '../style/Cover'
import '../style/App'

const {Footer} = Layout

const Foot = () => {
  return (
    <Footer className='wrap tc'>
      EasyFun ©2017 Created by xiaomeng.
      Data from douban OAuth2.0.Thanks for douban.com
    </Footer>
  )
}

export default Foot
