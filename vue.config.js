// 脚手架配置文件 自动加载替换默认配置
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
    },
  },
  lintOnSave: false, // 关闭语法检查

  // 开启代理服务器
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true,
    },
    host: "localhost",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: false, //配置后自动启动浏览器
    hotOnly: true, // 热更新
  },
};
