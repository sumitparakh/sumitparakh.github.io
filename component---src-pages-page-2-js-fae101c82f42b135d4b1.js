(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{242:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(246),l=a(253),c=a(272);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},246:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(94),l=a.n(i);a.d(t,"a",function(){return l.a});a(248),a(17).default.enqueue;var c=r.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||i,staticQueryData:e})})}},248:function(e,t,a){var n;e.exports=(n=a(250))&&n.default||n},250:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(125);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},251:function(e){e.exports={data:{site:{siteMetadata:{title:"Sumit Parakh"}}}}},253:function(e,t,a){"use strict";var n=a(251),r=a(0),i=a.n(r),l=a(246),c=(a(40),a(312)),o=a(313),m=a(315),s=a(316),u=a(319),d=a(329),p=a(322),g=a(323),E=a(324),f=a(325),h=a(328),w=a(311),v=a(276),y=a(317),b=a(320),x=a(321),S=a(326),k=a(327),T=a(95),j=Object(w.a)(function(e){return{root:{display:"flex",background:"rebeccapurple",marginBottom:"4.75rem"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),O=function(e){var t,a=e.siteTitle,n=(e.props,j()),r=Object(v.a)(),w=i.a.useState(!1),O=w[0],P=w[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:n.root},i.a.createElement(c.a,null),i.a.createElement(o.a,{position:"fixed",className:Object(T.a)(n.appBar,(t={},t[n.appBarShift]=O,t))},i.a.createElement(m.a,null,i.a.createElement(s.a,{color:"inherit","aria-label":"open drawer",onClick:function(){},edge:"start",className:Object(T.a)(n.menuButton,O&&n.hide)},i.a.createElement(y.a,null)),i.a.createElement(u.a,{variant:"h6",noWrap:!0},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},a)))),i.a.createElement(d.a,{className:n.drawer,variant:"persistent",anchor:"left",open:O,classes:{paper:n.drawerPaper}},i.a.createElement("div",{className:n.drawer},i.a.createElement(s.a,{onClick:function(){P(!1)}},"ltr"===r.direction?i.a.createElement(b.a,null):i.a.createElement(x.a,null))),i.a.createElement(p.a,null),i.a.createElement(g.a,null,["Inbox","Starred","Send email","Drafts"].map(function(e,t){return i.a.createElement(E.a,{button:!0,key:e},i.a.createElement(f.a,null,t%2==0?i.a.createElement(S.a,null):i.a.createElement(k.a,null)),i.a.createElement(h.a,{primary:e}))})),i.a.createElement(p.a,null),i.a.createElement(g.a,null,["All mail","Trash","Spam"].map(function(e,t){return i.a.createElement(E.a,{button:!0,key:e},i.a.createElement(f.a,null,t%2==0?i.a.createElement(S.a,null):i.a.createElement(k.a,null)),i.a.createElement(h.a,{primary:e}))})))))};O.defaultProps={siteTitle:""};var P=O;a(259),t.a=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(P,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 0.7rem 0.7rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:n})}},256:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Sumit Parakh",titleTemplate:"%s - Sumit Parakh",defaultDescription:"A blog to share knowledge and learn about JavaScript and its different frameworks, specially Angular.",siteUrl:"https://sumitparakh.dev",defaultImage:"/images/gatsby-astronaut.png",twitterUsername:"@sumitparak"}}}}},272:function(e,t,a){"use strict";var n=a(256),r=a(0),i=a.n(r),l=a(266),c=a(246),o=function(e){var t=e.title,a=e.description,r=e.image,o=e.pathname,s=e.article;return i.a.createElement(c.b,{query:m,render:function(e){var n=e.site.siteMetadata,c=n.defaultTitle,m=n.titleTemplate,u=n.defaultDescription,d=n.siteUrl,p=n.defaultImage,g=n.twitterUsername,E={title:t||c,description:a||u,image:""+d+(r||p),url:""+d+(o||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Helmet,{title:E.title,titleTemplate:m},i.a.createElement("meta",{name:"description",content:E.description}),i.a.createElement("meta",{name:"image",content:E.image}),E.url&&i.a.createElement("meta",{property:"og:url",content:E.url}),!s?null:i.a.createElement("meta",{property:"og:type",content:"article"}),E.title&&i.a.createElement("meta",{property:"og:title",content:E.title}),E.description&&i.a.createElement("meta",{property:"og:description",content:E.description}),E.image&&i.a.createElement("meta",{property:"og:image",content:E.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g&&i.a.createElement("meta",{name:"twitter:creator",content:g}),E.title&&i.a.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&i.a.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&i.a.createElement("meta",{name:"twitter:image",content:E.image})))},data:n})};t.a=o,o.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var m="1376445457"}}]);
//# sourceMappingURL=component---src-pages-page-2-js-fae101c82f42b135d4b1.js.map