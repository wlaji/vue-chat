module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  devServer: {
    open: false,
    host: "192.168.10.131",
    port: 3000,
    https: false,
    hotOnly: false,
    // proxy: {
    //   '/manage': {
    //     target: 'http://192.168.10.36:80',  // target host
    //     changeOrigin: true,  // needed for virtual hosted sites
    //   },
    // }
  },
  lintOnSave: false,
  productionSourceMap: false
};
