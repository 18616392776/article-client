const historyApiFallback = require("connect-history-api-fallback");
const favicon = require('express-favicon');
const express = require('express');
const globalConfig = require('../global.config');

const app = express();


app.use('/api', httpProxyMiddleware({
    target: proxyConfig.api[0],
    pathRewrite: {
        '^/api/': '/'
    },
    onProxyReq(proxyRequest, request, response) {
        console.log(`请求：${request.url}，代理到${proxyConfig.api[1]}：${proxyConfig.api[0]}${proxyRequest.path}`)
    }
}));
app.use('/images-lib', httpProxyMiddleware({
    target: proxyConfig.api[0],
    onProxyReq(proxyRequest, request, response) {
        console.log(`请求：${request.url}，代理到${proxyConfig.api[1]}：${proxyConfig.api[0]}${proxyRequest.path}`)
    }
}));

const appPort = globalConfig.productionPort;
const appBasePath = globalConfig.buildPath;


app.use(historyApiFallback({}));


app.use(express.static(appBasePath));
app.use(favicon('/favicon.ico'));

app.listen(appPort, globalConfig.ip, error => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('http://' + globalConfig.ip + ':' + appPort);
});