# vue-music

> 音乐播放器

# 配置里使用了
  "babel-runtime", "fastclick"和"bable-polyfill"插件。 "babel-runtime"对es6语法进行转义，"fastclick"是针对移动端300ms延时问题，"bable-polyfill"对es6的api进行转义。
# 使用keep-alive组件
# vue2.x 通过后端接口代理,获取qq音乐api的数据
``` bash
// 开头调用:
var express = require('express')
var axios = require('axios')
var app = express()
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
 
 
// devServer的最后添加:
before(app) {
  app.get('/api/getDiscList', function (req, res) {
    var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' // 原api
    axios.get(url, {
      headers: {
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    }).then((response) => {
      res.json(response.data)
    }).catch((e) => {
      console.log(e)
    })
  })
}
```
原文链接：https://blog.csdn.net/qq_31393401/article/details/79113664 

