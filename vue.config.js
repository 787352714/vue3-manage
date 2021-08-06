
module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                src:"@",
                api:"@/api",
                setting:"@/adminSetting",
            }
        },
        devServer:{
            proxy:{
                '/bing' : {
                    target:"https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN",
                    wa: true,
                    changeOrigin: true,
                }
            }
        }
    }
};