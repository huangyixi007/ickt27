module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    // 将api/target/...变为target/... 并且在请求头部分显示正确的标识
                    '/api': ''
                }
            }
        }
    },
    // 不显示源码
    productionSourceMap: false,
    // 禁止预加载
    chainWebpack: config => {
        config.plugins.delete('prefetch')
    }

}