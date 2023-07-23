Component({
  data: {
    selected:0,
    color: "#515151",
    selectedColor: "green",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/work/work",
        iconPath: "/assest/dingdan_r.png",
        selectedIconPath: "/assest/dingdan.png",
        text: "工作"
      },
      {
        pagePath: "/pages/assistant/assistant",
        iconPath: "/assest/dingdan_r.png",
        selectedIconPath: "/assest/dingdan.png",
        text: "助手"
      },
      {
        pagePath: "/pages/home/home",
        iconPath: "/assest/dingdan_r.png",
        selectedIconPath: "/assest/dingdan.png",
        text: "常用"
      },
      {
        pagePath: "/pages/analyze/analyze",
        iconPath: "/assest/dingdan_r.png",
        selectedIconPath: "/assest/dingdan.png",
        text: "分析"
      },
      {
        pagePath: "/pages/mine/mine",
        iconPath: "/assest/user_r.png",
        selectedIconPath: "/assest/user.png",
        text: "我"
      }
    ]
   
    
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})