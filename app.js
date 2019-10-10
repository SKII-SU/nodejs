// 创建web服务器
const express = require('express');
const app = express();
app.listen(3000, () => console.log('服务器启动了'));

// 使用中间件，处理文件资源
app.use(express.static('manager'));

// 处理 ‘x-www-form-urlencoded’ 编码格式的POST请求体 （把浏览器提交的数据放到 req.body中）
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
