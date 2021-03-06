module.exports = {
    publicPath: './',
    // configureWebpack: {
    //     devtool: 'source-map',
        devServer: {
            port: 8001,//前端页面打开端口号
            open: false,//启动时自动打开浏览器
            proxy: {//nodejs代理服务器设置
                '/api': {
                    target: 'http://139.159.149.161:8002/',//服务端地址
                    // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                    changeOrigin: true,
                    ws: true,
                    pathRewrite: {
                        '^/api': '/api'
                    },
                    "secure": false
                }
            }
        }
    // }
}


// module.exports = {
//     // 基本路径
//     publicPath:"./",
//     // 输出文件目录
//     outputDir: 'dist',
//     lintOnSave: true,
//     devServer: {
//       proxy: {
//         '/OAuth': { 
//           target: 'http://192.168.137.1:21000/oauth2-online-sv/',//OAuth认证服务
//           changeOrigin: true,
//           secure:false,
//           pathRewrite: {
//               '^/OAuth': ''//通配符
//           }
//         },
//         '/PF': { 
//           target: 'http://192.168.137.1:21000/oauth2-mgm-sv/',//授权中心后台服务
//           changeOrigin: true,
//           secure:false,
//           pathRewrite: {
//             '^/PF': ''//通配符
//           }
//         },
//         '/PC': { 
//           target: 'http://192.168.137.1:21000/scpc-mgm-sv/',//产品中心后台服务
//           changeOrigin: true,
//           secure:false,
//           pathRewrite: {
//             '^/PC': ''//通配符
//           }
//         }
//       }
//     },
//   }