// 脚手架配置文件 自动加载替换默认配置
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        }
    },
    lintOnSave:false, // 关闭语法检查
     
    // 开启代理服务器
    devServer: {
        proxy: {
          '/server1': { //匹配所有以 /server1 开头的请求路径
            target: 'http://localhost:3000', //代理目标的基础路径
            pathRewrite:{"^/server1":""}, //路径重写  如果以/server1 开头 则将/server1替换为空 实际开发中，此处是后端配置的项目名称
            ws: true,  //是否开启websocket
            changeOrigin: true //ture : 请求头中的host为8080 false :3000
          },
          '/server2': {
            target: 'http://localhost:3001',
            pathRewrite:{"^/server2":""}
          },
        }
      }
}