'use strict'
// 引入scp2
var client = require('scp2');

console.log("正在发布程序代码......")
client.scp('./dist/', {    // 本地打包文件的位置
  "host": '139.159.149.161', // 服务器的IP地址
  "port": '22',            // 服务器端口， 一般为 22
  "username": 'cjt',       // 用户名
  "password": '123',     // 密码
  "path": '/home/cjt/nginxweb/sinolife/prizequiz'            // 项目部署的服务器目标位置
}, err =>{
  if (!err) {
    console.log("程序发布完毕!")
  } else {
    console.log("err", err)
  }
})

