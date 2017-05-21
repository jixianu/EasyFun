import React from 'react'
import {Anchor} from 'antd'

const {Link} = Anchor

const MovieMenu = () => {
  return (
    <Anchor className='movie_menu'>
      <Link href="#hotShowing" title="正在热映"/>
      <Link href="#comingSoon" title="即将上映"/>
      <Link href="#Top25" title="Top25"/>
      <Link href="#usBox" title="北美票房榜"/>
    </Anchor>
  );
}

export default MovieMenu