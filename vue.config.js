module.exports = {
    lintOnSave:false,
    devServer: {
        proxy: {
            '/baidu': {
                target: 'https://www.baidu.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/baidi': ''
                }
            }
        }
    }


}
