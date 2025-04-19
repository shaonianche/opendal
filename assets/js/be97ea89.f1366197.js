"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[7947],{2459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var a=n(6200),o=n(6070),i=n(5658);const s={title:"Apache OpenDAL\u2122 Internal: Data Reading",date:new Date("2023-08-15T00:00:00.000Z"),slug:"how-opendal-read-data",tags:["internal"],description:"The first article will discuss OpenDAL's most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL.",authors:"xuanwo"},r=void 0,l={authorsImageUrls:[void 0]},d=[];function c(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"As the Apache OpenDAL\u2122 community continues to grow, new abstractions are constantly being added, which has brought some burdens to new contributors participating in development. Many maintainers hope to have a deeper understanding of OpenDAL's internal implementation. At the same time, OpenDAL's core design has not changed significantly for a long time, making it possible to write a series on internal implementation. I believe now is the time to write a series of articles on OpenDAL's internal implementation, to explain from the maintainer's perspective how OpenDAL is designed, implemented, and how it can be expanded. With the impending release of OpenDAL v0.40, I hope this series of articles will better help the community understand the past, master the present, and shape the future."}),"\n",(0,o.jsx)(t.p,{children:"The first article will discuss OpenDAL's most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL. Let's get started!"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5658:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(758);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}},6200:e=>{e.exports=JSON.parse('{"permalink":"/blog/how-opendal-read-data","editUrl":"https://github.com/apache/opendal/tree/main/website/blog/2023-08-15-how-opendal-read-data/index.md","source":"@site/blog/2023-08-15-how-opendal-read-data/index.md","title":"Apache OpenDAL\u2122 Internal: Data Reading","description":"The first article will discuss OpenDAL\'s most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL.","date":"2023-08-15T00:00:00.000Z","tags":[{"inline":true,"label":"internal","permalink":"/blog/tags/internal"}],"readingTime":7.97,"hasTruncateMarker":true,"authors":[{"name":"Xuanwo","url":"https://github.com/Xuanwo","key":"xuanwo","page":null}],"frontMatter":{"title":"Apache OpenDAL\u2122 Internal: Data Reading","date":"2023-08-15T00:00:00.000Z","slug":"how-opendal-read-data","tags":["internal"],"description":"The first article will discuss OpenDAL\'s most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL.","authors":"xuanwo"},"unlisted":false,"prevItem":{"title":"OwO #1: The v0.40 Release","permalink":"/blog/owo-1"},"nextItem":{"title":"Apache OpenDAL\u2122: Access Data Freely","permalink":"/blog/opendal-access-data-freely"}}')}}]);