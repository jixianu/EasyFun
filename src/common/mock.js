import Mock from 'mockjs'
const {Random} = Mock

export const comments = Mock.mock({
  'commentList|5': [{
    'id': '@natural',
    'time': '@datetime(16-MM-dd HH:mm:ss)',
    'name': '@cname',
    'content': '@cparagraph',
    'url': Random.image('50x50', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const commentsMore = Mock.mock({
  'commentList|5': [{
    'id': '@natural',
    'time': '@datetime(16-MM-dd HH:mm:ss)',
    'name': '@cname',
    'content': '@cparagraph',
    'url': Random.image('50x50', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const messages = Mock.mock({
  'messageList|5-8': [{
    'id': '@natural',
    'title': '@ctitle(5,10)',
    'name': '@name',
    'url': Random.image('40x40', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const correlations = Mock.mock({
  'correlationList|5-8': [{
    'id': '@natural',
    'title': '@ctitle(6,10)',
    'name': '@name',
    'url': Random.image('40x40', Random.color(), '#FFF', Random.word(3, 5))
  }]
});

export const musicTop = Mock.mock({
  'musicList|10':[{
    'uniquekey' : '@natural',
    'title': '@ctitle(3,6)'
  }]
})
