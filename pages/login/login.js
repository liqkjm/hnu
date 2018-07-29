Page({
  data: {
    name: '',
    password: '',
    response: ''
  },

  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    var that = this
    if (this.data.name.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      //请求服务器 --测试GET请求
      wx.request({
        url: 'http://111.230.55.56:8088/test/getOne',
        method: "GET",
        // data: {
        //   name: this.data.name,
        //   password: this.data.password,
        // },
        success: function (res) {
          console.log(res.data)
          // that.setData({
          //   response: res
          // })
          wx.showModal({
            title: '请求测试成功',
            content: '请求到的数据在终端Console中查看',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
          // wx.showToast({
          //   title: '请求测试成功',
          //   icon: "success", //图标
          //   duration: 2000

          // })

        },
        fail: function () {
          wx.showToast({
            title: '服务器请求失败',
            icon: "loading",
            duration: 4000,
          })
        }
      })


    }
  }
})