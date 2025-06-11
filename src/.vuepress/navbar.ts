import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  "/demo/",
 {
    text: "赞助",
    link: "/home/",
  },
   {
    text: "基础",
    link: "/word/",
  },
     {
    text: "音频",
    link: "/mp3/",
  },
       {
    text: "视频",
    link: "/video/",
  },
         {
    text: "台历",
    link: "/taili/",
  },
         {
    text: "摸线",
    link: "/moxian/",
  },
         {
    text: "滑滑梯",
    link: "/hht/",
  },
         {
    text: "口诀",
    link: "/koujue/",
  },
         {
    text: "关键点",
    link: "/point/",
  },
           {
    text: "徽章",
    link: "/huizhang/",
  },
           {
    text: "高级课程",
    link: "/vip/",
  },
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
