import fetchJsonp from 'fetch-jsonp'

function fetch(opt) {
  const result = fetchJsonp('https://api.douban.com/v2/movie/in_theaters', /*{
    method: 'POST',
    body: {
      'start': opt.start || 0,
      'count': opt.count || 5
    },
    timeout: 10000
  }*/);

  result.then(function (response) {
    return response.json()
  }).then(function (json) {
    console.log('parsed json', json.subjects[0].title)
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })
}

export default fetch
