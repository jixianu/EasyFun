import fetchJsonp from 'fetch-jsonp'
import * as config from '../config'

export default function fetch_movie(opt) {
  let REQUEST_PATH = config.SERVER_PATH + `movie/${opt.type}`;
  if (opt.type !== 'us_box') {
    REQUEST_PATH += `?start=${opt.start}&count=${config.DEFAULT_COUNT}`
  }
  const result = fetchJsonp( REQUEST_PATH, {
    timeout: 3000,
  });

  result.then(function (response) {
    return response.json();
  }).then(function (json) {
    // console.log(json)
    // console.log('parsed json', json.subjects[0].images.large)
    opt.resolve(json);
  }).catch(function (ex) {
    console.log('parsing failed', ex);
  })
}


