const path = require('path')
const paths = require('react-scripts/config/paths')
const resolve = dir => path.join(__dirname, '.', dir)
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// 热更新
const hotLoader = () => (config, env) => {
  config = rewireReactHotLoader(config, env)
  return config
}

// 打包设置
const appBuildPathFile = () => config => {
  if (config.mode === 'production') {
    // 关闭sourceMap
    config.devtool = false

    // 打包文件公共路径
    config.output.publicPath = '/'

    // 配置打包后的文件位置修改path目录
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')
    config.output.path = path.join(path.dirname(config.output.path), 'dist')

    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.(js|css|json|txt|ico|svg)(\?.*)?$/i,
        threshold: 10240,
        minRatio: 0.8
      })
    )

    // 添加BundleAnalyzer
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 7801,
        openAnalyzer: true
      })
    )
  }
  return config
}

module.exports = override(
  // 热跟新
  hotLoader(),

  // 打包设置
  appBuildPathFile(),

  // 添加别名
  addWebpackAlias({
    '@': resolve('src'),
    libs: resolve('src/libs'),
    components: resolve('src/components'),
    assets: resolve('src/assets'),
    views: resolve('src/views'),
    store: resolve('src/store'),
    api: resolve('src/request/api'),
    // 处理警告  React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
    'react-dom': '@hot-loader/react-dom'
  }),

  // 引入antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),

  // lessLoader
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      'hack': `
        true; 
        @import "${resolve('src/assets/styles/settings.less')}"; 
        @import "${resolve('src/assets/styles/ant-variables.less')}";
      `
    },
    // localIdentName: '[local]--[hash:base64:5]', // 自定义 CSS Modules 的 localIdentName
  })
)