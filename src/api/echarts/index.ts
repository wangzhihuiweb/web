export const companyIdJSON={
    title: {
      text: "工作经历",
      textStyle: {
        //文字颜色
        color: "#fff",
        //字体大小
        fontSize: 22,
      },
      left: "center",
    },
    xAxis: {
      type: "category",
      splitLine: { show: false },
      data: [
        {
          value: "超脑全签",
          textStyle: {
            fontSize: 24,
            color: "#fff",
          },
        },
        {
          value: "趣文科技",
          textStyle: {
            fontSize: 24,
            color: "#fff",
          },
        },
        {
          value: "正阿尔法(兼职)",
          textStyle: {
            fontSize: 24,
            color: "#fff",
          },
        },
      ],
      //   data: ["超脑全签", "趣文科技"],
    },
    yAxis: {
      type: "time",
      min: `2013-12-16`,
      max: `2024-01-31`,
      textStyle: {
        fontSize: 24,
        color: "#fff",
      },
    },
    series: [
      {
        name: "",
        type: "bar",
        symbolSize: 10,
        stack: "Total",
        silent: true,
        itemStyle: {
          normal: {
            color: "#ee6666",
          },
        },
        data: ["2021-07-01", "2022-01-01", "2023-03-15"],
      },
      {
        name: "",
        type: "bar",
        stack: "Total",
        silent: true,
        symbolSize: 10,
        itemStyle: {
          normal: {
            color: "#080815",
          },
        },
        data: [null, "2021-07-19", "2021-07-19"],
      }
    
    ],
  }
export const projectIdJSON={
    title: {
      text: "项目",
      textStyle: {
        //文字颜色
        color: "#fff",
        //字体大小
        fontSize: 26,
      },
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "项目介绍",
        type: "pie",
        radius: "66%",
        data: [
          {
            value: 2022,
            name: "智慧铺-admin(个人)",
            id: "15",
            url: "http://www.wzhmeet.top:8881",
          },
          {
            value: 2022,
            name: "智慧铺-PC(个人)",
            id: "9",
            url: "http://www.wzhmeet.top:8883",
          },
          {
            value: 2022,
            name: "智慧铺-App(个人)",
            id: "16",
             ish5:'true',
            url: "http://www.wzhmeet.top:8886",
          },
          {
            value: 2022,
            name: "班主课堂（PC）",
            id: "1",
            url: "https://www.ftbzclass.com",
          },
          {
            value: 2022,
            name: "班主课堂后台（PC）",
            id: "2",
            url: "http://admin.dev.ftbzclass.com",
          },
          {
            value: 2021,
            name: "猫九小说（PC）",
            id: "3",
            url: "http://www.maojiuxs.com/",
          },
          {
            value: 2021,
            name: "猫九小说作家中心（PC）",
            id: "4",
            url: "http://author.maojiuxs.com/author",
          },
          {
            value: 2021,
            name: "猫九小说（H5）",
            ish5:'true',
            id: "5",
            url: "http://m.maojiuxs.com/",
          },
          {
            value: 2016,
            name: "喜谷数字脑（PC）后台管理系统 ",
            id: "6",
            url: "http://112.126.77.199:8061",
          },
          {
            value: 2020,
            name: "超脑全签官网",
            id: "7",
            url: "https://www.cnqqgroup.com/",
          },
          {
            value: 2014,
            name: "超脑全签集团OA系统",
            id: "11",
            url: "http://oa.cnqqgroup.com/user_login/login.aspx",
          },
          {
            value: 2020,
            name: "理想数字脑（小程序）",
            id: "13",
            ish5:'true',
            url: "https://www.cnqqgroup.com/XFSD",
          },
          {
            value: 2021,
            name: "理想食品派（小程序）",
            ish5:'true',
            id: "14",
            url: "https://www.cnqqgroup.com/JiaMiVIP/TrackCooperate",
          },
          {
            value: 2018,
            name: "狐妖小红娘",
            ish5:'true',
            id: "8",
            url: "https://a.qq.com/cp/a20180503love/index.htm",
          },
          {
            value: 2021,
            name: "正阿尔法官网",
            id: "12",
            url: "http://www.z-alpha.tech",
          },
          {
            value: 2022,
            name: "智能车官网（sscms）",
            id: "10",
            url: "https://www.smartcar.zone",
          }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  }
