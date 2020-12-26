module.exports = {
  chainWebpack: config => {
    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 20000 }))
  },
  publicPath: './',//基础路径
  outputDir: 'dist',//输出文件目录
  assetsDir: 'static',//静态资源目录

  devServer: {
    open: true, // 启动后打开浏览器
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly:true,
    proxy: null, // 设置代理
    before: app => {
    }
  },

  css: {
    // extract: true,
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 40,
            unitPrecision: 5, // 最小精度，小数点位数
            propList: ['*','height'],
            selectorBlackList: [],
            minPixelValue:2 // 替换的最小像素值
          })
        ]
      }
    },
    modules: false
  },
  lintOnSave: false,
}
