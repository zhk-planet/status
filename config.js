// 配置
window.Config = {

  // 站点名
  SiteName: 'ZHK Planet Status',

  // 站点链接
  SiteUrl: 'status.314514.xyz/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptime-status-api.blhcm.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791542763-7f7e32c9f12075191f76a911',
    'm791589155-c278c7eef1dfd1b0d0fd2060',
    'm791589153-eb8b8b7989cfa0f7a846f9bd',  
    'm791566932-bb08b1488c4f4dfefd5cd9cc',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'ZHK Planet',
      url: 'https://www.314514.xyz/'
    },
    {
      text: 'SSL Monitor',
      url: 'https://ssl.314514.xyz'
    }
  ]
};
