## 项目简介
一个WebApp版的cnode客户端，项目采用 react 技术栈构建。UI组件选用的是[ant-design mobile](https://mobile.ant.design/index-cn)，让界面更适合触控操作(PS:也存在bug...)。

 * 感谢[cnodejs论坛](https://cnodejs.org/)官方提供的api 
 * 感谢[xuanshanbo](https://github.com/xuanshanbo)提供的思路指导


## 技术栈
 * 采用react技术栈，通过Redux来管理页面状态，通过Router来设置页面路由
 * 组件选用的是ant-design mobile,移动端推荐的该组件
 * 使用isomorphic-fetch库代替XMLHttpRequest实现网络请求
 * 使用PostCSS对CSS进行预处理

## 运行项目
```
  git clone https://github.com/DaskV/CNode.git
  npm install webpack-dev-server webpack -g (没有安装webpack的需要安装)
  npm install
  npm start
```

## 项目进展
持续更新中...