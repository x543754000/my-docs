import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],

   '/home/': [
    {
      text: '文档首页',
      link: '/docs/',
      children: [
        { text: '入门指南', link: '/docs/getting-started/' },
        { text: '配置参考', link: '/docs/config/' }
      ]
    }
  ],
   '/word/': [
    {
      text: '基础课程',
      link: '/word/',
      children: [
        { text: '今日股市王斌学习营第一课', link: '/word/1' },
        { text: '今日股市王斌学习营第二课', link: '/word/2' },
        { text: '今日股市王斌学习营第三课', link: '/word/3' },
        { text: '今日股市王斌学习营第四课', link: '/word/4' },
        { text: '今日股市王斌学习营第五课', link: '/word/5' },
        { text: '今日股市王斌学习营第六课', link: '/word/6' },
        { text: '今日股市王斌学习营第七课', link: '/word/7' },
        { text: '今日股市王斌学习营第八课', link: '/word/8' },
        { text: '今日股市王斌学习营第九课', link: '/word/9' },
        { text: '今日股市王斌学习营第十课', link: '/word/10' },
        { text: '今日股市王斌学习营第十一课', link: '/word/11' },
        { text: '今日股市王斌学习营第十二课', link: '/word/12' },
        { text: '今日股市王斌学习营第十三课', link: '/word/13' },
        { text: '今日股市王斌学习营第十四课', link: '/word/14' },
        { text: '今日股市王斌学习营第十五课', link: '/word/15' },
        { text: '今日股市王斌学习营第十六课', link: '/word/16' },
        { text: '今日股市王斌学习营第十七课', link: '/word/17' },
        { text: '今日股市王斌学习营第十八课', link: '/word/18' },
        { text: '今日股市王斌学习营第十九课', link: '/word/19' },
        { text: '今日股市王斌学习营第二十课', link: '/word/20' },
        { text: '今日股市王斌学习营第二十一课', link: '/word/21' },
        { text: '今日股市王斌学习营第二十二', link: '/word/22' },
        { text: '今日股市王斌学习营第二十三课', link: '/word/23' },
        { text: '今日股市王斌学习营第二十四课', link: '/word/24' },
      ]
    }
  ]
});
