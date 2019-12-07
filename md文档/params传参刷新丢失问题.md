### 问题剖析
  1.  Vue-router进行路由跳转的时候可通过params传参
  2.  首次路由跳转可以获取params参数，再次刷新页面params数据丢失

####  解决方案
  1.  注册路由的时候写好占位符    path: '/home/:id'
  