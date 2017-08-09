# 文章编辑器，前端服务


本项目提供文章编辑器的前端编辑，文件上传管理等功能

## 安装

1、 安装[nodejs](https://nodejs.org/en/)最新版本  (centOS： `yum install nodejs`)  
2、 分别运行 `node -v` 和 `npm -v`，检测版本号，确保node版本不低于8.0.0，npm版本不低于5.0.0  
3、 克隆本项目到本地    
4、 控制台进入项目根目录  
5、 控制输入`npm i --registry=http://registry.npm.taobao.org`进行项目依赖安装    


## 运行

#### 在服务器运行：
6、安装nodejs进程守护程序，`sudo npm i forever -g`   
7、启动应用，`npm run production`  
8、停止应用，`npm run stop`  

#### 在本地运行

6、启动应用，`npm start` 

## 代理配置

本项目不承担具体后台业务，相关接口是直接代理转发到真正的服务器，代理服务器配置见根目录下`proxy.config.js`

## 启动配置

修改根目录下`global-config.ts`相关常量的值，重启后生效。

