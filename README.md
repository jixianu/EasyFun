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
4.7
使用redux管理数据
###问题

1.公共的base，其他css引用是不是每次都要引用
2.怎么限制豆瓣的API访问次数，30次/min
3.异步读取数据时，返回数据之前切换router会使页面报waring，setState nothing --- 使用redux-thunk解决
4.fetch时mock的数据需要放在服务器环境才能拦截http请求,未解决
5.首页音乐，图书数据时假的
6.fetch错误的catch怎么能统一返回一个数据组合？给一个state做判断，能不能统一返回一个DOM节点
7.组件的大小样式是px像素，而当二次使用时不可适配，应使用百分比
8.样式问题每个组件不推荐使用命名空间，这样组件使用时就需要在组件上使用命名空间
9.webpack打包无法处理html中的img标签引用，使用html-withimg-loader处理HTML