//node 后端服务器
const userApi = require('./api/userApi.js');
const bodyParser = require('body-parser');
const express = require('express');//引入express
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//后端api路由
app.use('/api/user', userApi);
 
//监听端口
app.listen(8002);
console.log('server started at port :8002......');