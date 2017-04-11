import Mock from 'mockjs'

Mock.setup({
  timeout:'1500-1800'
});

export let comments = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
});

export let commetData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
});
