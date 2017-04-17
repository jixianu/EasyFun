import fetchJsonp from 'fetch-jsonp'
import * as config from '../config'

// 获取电影列表
export function fetch_movie(opt) {
  if (!opt) {
    return false;
  }
  let REQUEST_PATH = `${config.SERVER_PATH}movie/${opt.type}`;
  if (opt.type !== 'us_box') {
    REQUEST_PATH += `?start=${opt.start}&count=${opt.count}`
  }
  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 3000,
  });

  return result.then(response=> {
    return response.json();
  }).catch(err=>
    console.log('parsing failed', err)
  );
}

// 获取电影详情
export function fetch_movieDetail(opt) {
  if (!opt) {
    return false;
  }
  const REQUEST_PATH = `${config.SERVER_PATH}movie/subject/${opt.id}`;
  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 3000,
  });

  return result.then(response=> {
    return response.json();
  }).catch(err=>
    console.log('parsing failed', err)
  );
}

// 登录注册
export function fetch_login(opt) {
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
  return fetch(LOGIN_PATH, {method: 'GET'})
    .then(response => {
      return response.json()
    })
    .catch(err=>
      console.log('parsing failed', err)
    )
}

export function fetch_spot(opt) {
  // const result = ajax('http://news-at.zhihu.com/api/4/news/latest');
  return fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${opt.type}&count=${opt.count}`,
    {method: 'GET'})
    .then(response=> {
      return response.json();
    })
}

// 测试
export function fetch_test() {
  return fetch('../data/test.json')
    .then(response=> {
      return response.json();
    })
}

function ajax(url) {
  return new Promise(function (resolve, reject) {
    var xml = new XMLHttpRequest();
    xml.open('get', url, true);
    xml.onload = resolve;
    xml.onerror = reject;
    xml.send();
  })
}
