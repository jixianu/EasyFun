import fetchJsonp from 'fetch-jsonp'
import * as config from '../config'

export function fetch_movie(opt) {
  if (!opt) {
    return false;
  }
  let REQUEST_PATH = `${config.SERVER_PATH}movie/${opt.type}`;
  if (opt.type !== 'us_box') {
    REQUEST_PATH += `?start=${opt.start}&count=${config.DEFAULT_COUNT}`
  }
  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 3000,
  });

  result.then(function (response) {
    return response.json();
  }).then(function (json) {
    opt.resolve(json);
  }).catch(function (ex) {
    console.log('parsing failed', ex);
  })
}

export function fetch_login(opt, callback) {
  if (!opt) {
    return false;
  }
  let params = '';
  for (let [key, value] of Object.entries(opt)) {
    params += `&${key}=${value}`;
    localStorage.setItem(key, value);
  }
  params = params.substring(1);
  let LOGIN_PATH = `${config.LOGIN_PATH}?${params}`;
  fetch(LOGIN_PATH, {method: 'GET'})
    .then(response => response.json())
    .then(json => {
      callback();
    })
    .catch(function (ex) {
      console.log('parsing failed', ex);
    })
}
