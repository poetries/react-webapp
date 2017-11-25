react-webapp
---
> 使用`react`全家桶构建大众点评`webapp`,`koa`搭建`Mock`服务

usage
---


```javascript
# 安装依赖
npm install

# 运行程序
npm start

# 启动服务
npm run mock
```

项目结构
---

<pre>
├── assets              // 开发中的静态资源
├── cfg                // 项目不同环境的配置
├── dist               // 项目build目录
├── docs               // 项目开发文档
├── mock               // 项目开发中的mock数据
├── package.json       // 项目配置文件
├── server.js          // 项目启动脚本
├── src                // 生产目录
│   ├── actions        // redux action相关操作
├   ├── api            // 获取数据的接口
│       ├── detail
│           ├── detail.js  // 获取详情信息接口
│       ├── home            
│           ├── home.js    // 获取首页广告、列表数据接口 
│       ├── search
│           ├── search.js
│       ├── get.js     // get请求数据
│       ├── post.js    // post请求数据
│   ├── components     // 展示组件
│   ├── config         // 配置文件 
│   └── constants      // actionType常量
│   └── container      // 容器组件
│   └── reducers       // 处理action的逻辑
│   └── routers        // 配置路由
│   └── store          // redux store仓库
│   └── styles         // 全局样式文件
│   └── utils          // 工具函数
│   └── App.js         // 主页面
│   └── index.html     // 项目入口页面
│   └── index.js       // Webpack 预编译入口
|__
</pre>