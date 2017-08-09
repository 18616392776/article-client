const historyApiFallback = require("connect-history-api-fallback");
const favicon = require('express-favicon');
const express = require('express');

const app = express();

const globalConfig = require('../global.config');

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