# hnu

## 简介
校园服务类微信小程序，包括校内个人信息查询，二手市场，失物招领等功能。

## 需求文档
- 需求在路上，初步实现首页，登录/绑定静态页面
- 效果图：暂无

### 暂定功能

## 数据库设计

### 用户数据库

### 用户

1. 用户
- id
- 账号（学号）
- 密码（密码）
- 用户名称
- 电话号码

### 商品数据库

1. 交易（展示信息）

- id
- 交易标题
- 商品名称
- 商品描述
- 交易金额
- 创建时间
- 修改时间
- 卖主名字
- 卖主联系方式
- 卖主身份
- 商品图片（n）
- 交易地点（线下）

### 评论内容

- id
- 评论人
- 评论内容
- 评论时间



## 后台接口

1. 查询

2. 新建交易信息

3. 修改 

4. 评论


## 开发
### 项目导入

1. 使用git，clone此项目：
- 使用git Bash：
  > GitHub：git clone https://github.com/zosurn/hnu.git  
  > ~~码云：git clone https://gitee.com/liqkjm/hnu.git~~
  ```
  可能遇到问题：fatal: unable to access 'https://github.com/konsumer/arduinoscope.git/': error setting certificate verify locations:
  CAfile: D:\Program Files\Git\mingw64/bin/curl-ca-bundle.crt
  CApath: none

  解决办法：git config --global http.sslVerify false
  ```
- 使用GitHub桌面版
  点击clone

2. 使用微信小程序开发工具打开此项目目录（开发工具会自动填上APPID?）   
> 我的AppID(小程序ID)： `wxbdefe3df68d669e2`

3. 提交代码   

- 可以使用git终端提交：
~~  git status
  git pull
  git add -A
  git commit -m "提交内容注释"
  git push  //推送到远程仓库~~
- 或者使用GitHub桌面版：
	点击提交，更新
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

#### 接口测试

1. 关闭HTTPS域名校验（小程序开发界面右侧详情中项目设置，给最下面一行不校验域名...勾上）
2. 接口测试demo见login页面，随便输入账号和密码之后，点击登录（无登录作用），可请求到第一个测试接口`getOne`描述的数据。请求结果作为日志打印在终端中。
