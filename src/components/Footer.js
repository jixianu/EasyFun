import React from 'react'
import {Layout} from 'antd'

import 'antd/dist/antd.less'
import '../style/Common'
import '../style/App'

const {Footer} = Layout

function Foot() {
  return (
    <Footer className='container'>
      This is Footer
    </Footer>
  )
}

export default Foot
