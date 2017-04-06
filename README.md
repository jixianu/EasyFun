## 简趣
一个简单趣味的react站

###技术栈
- React
- React-Router
- Redux
- ES6
- Less
- Antd
- Mock.js
- Webpack
    
###运行
对应目录，运行

    npm install

开发版
    
    npm run dev

发布版

    npm run pub

###记录

2.24
配置webpack与包管理  
2.25
配置webpack开发热更新
4.6
使用stage-0编程，这样可以省去bind(this)
使用聚合数据API与localStorage做用户登录,接口只能接受username-aaa

###问题

1.公共的base，其他css引用是不是每次都要引用
2.怎么限制豆瓣的API访问次数，30次/min
3.异步读取数据时，返回数据之前切换router会使页面报waring，setState nothing --- 使用redux-thunk解决
