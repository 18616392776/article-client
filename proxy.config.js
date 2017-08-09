const ip = require('./global.config').ip;

module.exports = {
    api: [
        'http://' + ip + ':2222',   // 代理服务器地址
        '本地服务'                  // 服务器名字，方便日志查看
    ]
};