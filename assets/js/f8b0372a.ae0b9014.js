"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[8250],{4901:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"vision","title":"Vision","description":"Charter","source":"@site/docs/02-vision.md","sourceDirName":".","slug":"/vision","permalink":"/vision","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/opendal/tree/main/website/docs/02-vision.md","tags":[],"version":"current","lastUpdatedBy":"Xuanwo","lastUpdatedAt":1741601725000,"sidebarPosition":2,"frontMatter":{"title":"Vision","sidebar_label":"Vision"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/"},"next":{"title":"Core","permalink":"/core"}}');var r=s(6070),t=s(5658);const a={title:"Vision",sidebar_label:"Vision"},l=void 0,o={},c=[{value:"Charter",id:"charter",level:2},{value:"Principles",id:"principles",level:2},{value:"0. Open Community",id:"0-open-community",level:3},{value:"1. Solid Foundation",id:"1-solid-foundation",level:3},{value:"2. Fast Access",id:"2-fast-access",level:3},{value:"3. Object Storage First",id:"3-object-storage-first",level:3},{value:"4. Extensible Architecture",id:"4-extensible-architecture",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Infrastructure Builders",id:"infrastructure-builders",level:3},{value:"Application Developers",id:"application-developers",level:3},{value:"Platform Developers",id:"platform-developers",level:3}];function d(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"charter",children:"Charter"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"One Layer, All Storage."})}),"\n",(0,r.jsx)(n.h2,{id:"principles",children:"Principles"}),"\n",(0,r.jsx)(n.p,{children:"Principles are guiding principles. They guide how decisions are made for the whole project. Ideally, we do all of them all the time. In some cases, though, we may be forced to decide between slightly penalizing one goal or another. In that case, we tend to support those goals that come earlier in the list over those that come later (but every case is different)."}),"\n",(0,r.jsx)(n.h3,{id:"0-open-community",children:"0. Open Community"}),"\n",(0,r.jsxs)(n.p,{children:["OpenDAL SHOULD be an ",(0,r.jsx)(n.strong,{children:"open"})," storage library."]}),"\n",(0,r.jsxs)(n.p,{children:['OpenDAL is an ASF project governed by the OpenDAL PMC. At ASF, we believe in "Community Over Code" and adhere to ',(0,r.jsx)(n.a,{href:"https://www.apache.org/theapacheway/",children:"the Apache Way"}),". We aim to develop OpenDAL to meet the needs of our community. We do not maintain private versions or include features that aren't useful to others."]}),"\n",(0,r.jsx)(n.p,{children:"For example, OpenDAL prefers to have clear and readable code, as this allows more people in the community to join the development."}),"\n",(0,r.jsx)(n.h3,{id:"1-solid-foundation",children:"1. Solid Foundation"}),"\n",(0,r.jsxs)(n.p,{children:["OpenDAL SHOULD be a ",(0,r.jsx)(n.strong,{children:"solid"})," storage library."]}),"\n",(0,r.jsx)(n.p,{children:"OpenDAL is a solid foundation of user projects that users can trust OpenDAL to perform operations on real-world storage services. OpenDAL SHOULD always focus on building a Solid Foundation."}),"\n",(0,r.jsx)(n.p,{children:'For example, OpenDAL performs additional error checks for AWS S3 complete multipart operations, as S3 may return an error in response with a 200 status code, even though this may add extra costs that conflict with "Fast Access.\u201d'}),"\n",(0,r.jsx)(n.h3,{id:"2-fast-access",children:"2. Fast Access"}),"\n",(0,r.jsxs)(n.p,{children:["OpenDAL SHOULD be a ",(0,r.jsx)(n.strong,{children:"fast"})," storage library."]}),"\n",(0,r.jsx)(n.p,{children:"Its fast access ensures that OpenDAL implements storage support with zero overhead. Users can integrate with OpenDAL without concerns about additional costs. OpenDAL should be as fast as, or faster than, the SDK for any given storage service."}),"\n",(0,r.jsx)(n.p,{children:"For example, OpenDAL uses Capability to describe the capabilities of different services and adopts native features of those services whenever possible."}),"\n",(0,r.jsx)(n.h3,{id:"3-object-storage-first",children:"3. Object Storage First"}),"\n",(0,r.jsxs)(n.p,{children:["OpenDAL SHOULD be an ",(0,r.jsx)(n.strong,{children:"object storage first"})," library."]}),"\n",(0,r.jsx)(n.p,{children:"OpenDAL does support all storage services, but it is usually optimized for modern storage services. At the time of writing, we can say OpenDAL is object storage first. When designing features, OpenDAL tends to prioritize optimization for object storage."}),"\n",(0,r.jsx)(n.p,{children:"For example, OpenDAL's Buffer design is primarily optimized for HTTP-based services, helping to reduce extra allocation, in-memory copying, and memory usage."}),"\n",(0,r.jsx)(n.h3,{id:"4-extensible-architecture",children:"4. Extensible Architecture"}),"\n",(0,r.jsx)(n.p,{children:"OpenDAL SHOULD be an extensible storage library."}),"\n",(0,r.jsx)(n.p,{children:"OpenDAL can be extended to various languages, backends, and layers. Each is independent and does not depend on the others. Users can combine different layers, such as metrics, logging, tracing, and retry, and extend their own languages, backends, and layers."}),"\n",(0,r.jsx)(n.p,{children:"For example, OpenDAL's core never relies on the behavior or dependency of a single layer. Users can stack as many layers as they want on a given operator."}),"\n",(0,r.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsxs)(n.p,{children:["Who are typical OpenDAL ",(0,r.jsx)(n.em,{children:"users"}),"? How would they use OpenDAL?"]}),"\n",(0,r.jsx)(n.h3,{id:"infrastructure-builders",children:"Infrastructure Builders"}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/databendlabs/databend",children:"Databend"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/risingwavelabs/risingwave",children:"RisingWave"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/GreptimeTeam/greptimedb",children:"GreptimeDB"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/iceberg-rust",children:"Apache Iceberg Rust"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Use Cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Building storage systems like databases"}),"\n",(0,r.jsx)(n.li,{children:"Developing data processing pipelines"}),"\n",(0,r.jsx)(n.li,{children:"Creating backup and archive solutions"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Primary Concerns:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Solid Foundation"}),": Need guaranteed consistency and predictability for storage operations"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fast Access"}),": Require minimal overhead and optimal performance"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Why"}),": Infrastructure services demand both reliability and performance as foundational requirements"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"application-developers",children:"Application Developers"}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mozilla/sccache",children:"Sccache"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/vectordotdev/vector",children:"Vector"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/rustic-rs/rustic",children:"Rustic"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Use Cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Building end-user applications"}),"\n",(0,r.jsx)(n.li,{children:"Developing CLI tools"}),"\n",(0,r.jsx)(n.li,{children:"Creating web services"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Primary Concerns:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fast Access"}),": Need efficient integration and optimal performance"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Object Storage First"}),": Benefit from optimizations for modern cloud storage"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Why"}),": Modern applications commonly use object storage and require responsive performance"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"platform-developers",children:"Platform Developers"}),"\n",(0,r.jsx)(n.p,{children:"Examples:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/pantsbuild/pants",children:"Pants"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/zino-rs/zino",children:"Zino"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/shuttle-hq/shuttle",children:"Shuttle"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Use Cases:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Building AI/ML platforms"}),"\n",(0,r.jsx)(n.li,{children:"Developing cloud services"}),"\n",(0,r.jsx)(n.li,{children:"Creating developer tools"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Primary Concerns:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Extensible Architecture"}),": Need to customize and extend storage capabilities"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Solid Foundation"}),": Require dependable storage operations"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Why"}),": Platforms need flexibility to adapt to various use cases while maintaining reliability"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["This documentation is inpisred a lot by ",(0,r.jsx)(n.a,{href:"https://hyper.rs/contrib/vision/",children:"hyper\u2019s VISION document"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5658:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(758);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);