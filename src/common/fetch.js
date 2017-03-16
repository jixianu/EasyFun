import fetchJsonp from 'fetch-jsonp'

function fetch() {
  fetchJsonp('https://api.douban.com/v2/book/1220562')
    .then(function (response) {
      return response.json()
    }).then(function (json) {
    console.log('parsed json', json.id)
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })
}

export default fetch
