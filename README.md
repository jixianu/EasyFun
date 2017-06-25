## 简趣
一个简单趣味的pc-react站

###技术栈
- React
- React-Router
- ES6
- Less
- Antd
- Mock.js
- Webpack
    
###运行
在目录中，运行指令

    npm install

开发版
    
    yarn run dev

发布版

    yarn run pro

###历程(各种偷懒啊)

2.24
配置webpack与包管理  
2.25
配置webpack开发热更新
4.6
使用stage-0编程，这样可以省去bind(this)
使用聚合数据API与localStorage做用户登录,接口只能接受username-aaa
4.21
完成电影详情页，首页
5.21
router的异步加载

###挖坑埋坑

1. 公共的base，其他css引用不每次都要引用
2. 豆瓣的API访问次数，30次/min
3. 异步读取数据时，返回数据之前切换router会使页面报waring，setState nothing 用给路由一个状态this.mouted
4. fetch时mock的数据需要放在服务器环境才能拦截http请求,未解决--需要配置node后台环境
5. 组件样式问题，需要在渲染组件上引入，不应在容器组件上那应用样式，会导致再次使用时还需引样式
6. fetch错误的catch怎么能统一返回一个数据组合？给一个state做判断，能不能统一返回一个DOM节点--不能
7. 组件的大小样式是px像素，而当二次使用时不可适配，应使用百分比
8. webpack打包无法处理jsx中的img标签引用，使用require()则会被编译
9. react-router@4.x.x渲染是需要按照react-router-dom，没有hashHistory方法，推荐使用browserHistory,只有react-router@3.x.x才有hashHistory

###预览
![](http://i.imgur.com/6aPjIX4.jpg)
![](http://i.imgur.com/7FQl7Q4.jpg)

