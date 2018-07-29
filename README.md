# hnu

## 简介
校园服务类微信小程序，包括校内个人信息查询，二手市场，失物招领等功能。

## 开发
### 项目导入

1. 使用git，clone此项目：
> GitHub：git clone https://github.com/zosurn/hnu.git  
> ~~码云：git clone https://gitee.com/liqkjm/hnu.git~~
```
可能遇到问题：fatal: unable to access 'https://github.com/konsumer/arduinoscope.git/': error setting certificate verify locations:
CAfile: D:\Program Files\Git\mingw64/bin/curl-ca-bundle.crt
CApath: none

解决办法：git config --global http.sslVerify false
```
2. 使用微信小程序开发工具打开此项目目录（开发工具会自动填上APPID?）   
> 我的AppID(小程序ID)： `wxbdefe3df68d669e2`

3. 提交代码   
先pull更新代码再提交到远程仓库。

### 后台接口

#### 测试接口

1. 获取单个JSON数据

- 接口地址：http://111.230.55.56:8088/test/getOne
- 请求方式：GET
- 请求结果示例：
```
{
	"id":1,
	"name":"Amy",
	"msg":"She is a bad girl"
}
```

2. 获取json数组

- 接口地址：http://111.230.55.56:8088/test/getList
- 请求方式：GET
- 请求结果示例：
```
[{
	"id":1,
	"name":"Amy",
	"msg":"She is a bad girl"
	},{
	"id":2,
	"name":"Tom",
	"msg":"Tom is a bad boy"
	},{
	"id":3,
	"name":"Tony",
	"msg":"Tony is a shy boy"
	},{
	"id":4,
	"name":"Lee",
	"msg":"Lee is a cool girl"
}]
```