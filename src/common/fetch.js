import fetchJsonp from 'fetch-jsonp'
import * as config from '../config'

export default function fetch_movie(opt) {
  const result = fetchJsonp( config.SERVER_PATH + `movie/${opt.type}?start=${opt.start}&count=${config.DEFAULT_COUNT}`, {
    timeout: 3000,
  });

  result.then(function (response) {
    return response.json()
  }).then(function (json) {
    console.log(json)
    console.log('parsed json', json.subjects[0].images.large)
    opt.resolve(json)
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })
}


