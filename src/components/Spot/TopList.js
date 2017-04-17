import React from 'react';
import {Link} from 'react-router'

const TopList = ({newsData}) => {
  if (!newsData) {
    return <h3>没有数据</h3>;
  }
  const topList = newsData.map((newsItem, index) => (
    <li key={newsItem.uniquekey}>
      <Link to={`spot/${newsItem.uniquekey}`}>
        <span>{index+1}</span>
        {newsItem.title}
      </Link>
    </li>
  ));
  return (
    <ul>
      <li><h3>热点头条</h3></li>
      {topList}
    </ul>);
}

export default TopList