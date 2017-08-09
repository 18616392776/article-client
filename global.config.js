const ip = require('ip');
const isDoc = process.env.NODE_ENV === 'documentation';
const path = require('path');
const localIp = ip.address();
const port = isDoc ? '8080' : '8081';
const buildPath = path.resolve(__dirname, isDoc ? 'doc-build' : 'dist');
const appPath = path.resolve(__dirname, isDoc ? 'docs' : 'src');
const domain = 'http://' + localIp + ':' + port + '/';

module.exports = {
    ip: localIp,                    // 本地ip
    port,                           // 开发环境端口号
    domain,                         // 域名
    buildPath,                      // 构建后项目的储存地址
    staticPublicPath: 'static/',    // 静态文件存放地址
    onlinePublishPathPrefix: '/',   // 发布后静态文件打包路径前缀
    appPath,                        // 源文件地址
    productionPort: '1688'          // 生产环境端口号
};
