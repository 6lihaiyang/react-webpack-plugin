# webpack的基本配置

标签（空格分隔）： React

---

> 在开始学习React的时候，关于webpack的配置，踩了太多的坑。总觉得webpack比React都复杂...

在此时此刻，这份配置可能已经满足了我的基本需求。但是不代表它永远不会变。所以在这里建立一个仓库，记录一下它以及它将要发生的变化。

如果你需要参考我的配置，那么接下来简单的介绍下基本命令：

- npm start: 使用 webpack-dev-server 作为开发服务器，进行快速开发。
- npm run prod: 使用生产模式
- npm run build: 打包静态资源文件，注意打包后如果是本地打开需要手动更改引入的路径

## 特别说明

所有路径都指定在base.js中，如果你的css文件在class目录会被模块化处理，其它目录会正常打包，可以根据实际情况修改。

没有配置url-loader，有需要压缩或者转为base64自己添加就可以了。

关于上线压缩代码这块，并没有实际经验，之后会根据实际情况进行调整。

其他的，以后有时间再补充。

列出部分依赖方便更新：npm i -D babel-core babel-loader babel-plugin-react-html-attrs babel-preset-env babel-preset-react cross-env css-loader extract-text-webpack-plugin file-loader html-webpack-plugin open-browser-webpack-plugin rimraf style-loader uglifyjs-webpack-plugin webpack webpack-dev-server webpack-notifier






