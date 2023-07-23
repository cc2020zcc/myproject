
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridlist: [],
    dialogList: [],
    showDialog: false,
    banner_list: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true
  },
  
  get_home_detail() {
    this.setData({
      banner_list: ['/./assest/dog.PNG','/./assest/cat.PNG','/./assest/rabbit.PNG']
    })
  },
  user_quick_menu() {
    this.setData({
      gridlist: [
        { 
          url: '/./assest/gridIcons/A.jpg',
          name: '功能A'
        },
        { 
          url: '/./assest/gridIcons/B.jpg',
          name: '功能B'
        },
        { 
          url: '/./assest/gridIcons/C.jpg',
          name: '功能C'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能D'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能E'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能F'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能G'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能H'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能I'
        },
        { 
          url: '/./assest/gridIcons/D.jpg',
          name: '功能J'
        },
      ]
    })
  },
  gotopage(e) {
    console.log(e)
    let item = e.currentTarget.dataset.item
    this.setData({
      showDialog: true
    })
    if(item.name === "功能B"){
      this.setData({
        dialogList: [
          { 
            url: '/./assest/gridIcons/A.jpg',
            name: '功能1'
          },
          { 
            url: '/./assest/gridIcons/B.jpg',
            name: '功能2'
          },
          { 
            url: '/./assest/gridIcons/C.jpg',
            name: '功能3'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能4'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能5'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能6'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能7'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能8'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能9'
          },
          { 
            url: '/./assest/gridIcons/D.jpg',
            name: '功能10'
          },
        ]
      })
    }
  },
  closeDialog(){
    this.setData({
      showDialog: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_home_detail()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // try {
    //   var res = wx.getSystemInfoSync();
    //   this.setData({
    //     windowWidth: res.windowWidth
    //   })
    // } catch (e) {
    //   console.error('getSystemInfoSync failed!');
    // }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    this.user_quick_menu();

    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
          selected: 2
      })
  }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.get_home_detail()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})