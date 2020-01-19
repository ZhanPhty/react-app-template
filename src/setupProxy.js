const proxy = require('http-proxy-middleware')

module.exports = app => {
  app.use(
    proxy('/apidev', {
      target: 'http://127.0.0.1:8762',
      changeOrigin: true,
      pathRewrite: {
        '^/apidev': '/'
      }
    })
  )
}
