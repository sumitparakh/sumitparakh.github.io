(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{244:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(253),l=a(287),o=a.n(l),c=function(e){var t=e.prev,a=e.next;return n.a.createElement("ul",null,t&&n.a.createElement("li",null,n.a.createElement("a",{href:t.fields.slug},"Previous "," ",t.frontmatter.title)),a&&n.a.createElement("li",null,n.a.createElement("a",{href:a.fields.slug},"Next "," ",a.frontmatter.title)))},s=a(262),d=a(270),u=a(247),p=function(e){var t=e.title,a=e.description,r=e.image,i=e.pathname,l=e.article;return n.a.createElement(u.b,{query:f,render:function(e){var o=e.site.siteMetadata,c=o.defaultTitle,s=o.titleTemplate,u=o.defaultDescription,p=o.siteUrl,m=o.defaultImage,f=o.twitterUsername,g={title:t||c,description:a||u,image:""+p+(r||m),url:""+p+(i||"/")};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.Helmet,{title:g.title,titleTemplate:s},n.a.createElement("meta",{name:"description",content:g.description}),n.a.createElement("meta",{name:"image",content:g.image}),g.url&&n.a.createElement("meta",{property:"og:url",content:g.url}),!l?null:n.a.createElement("meta",{property:"og:type",content:"article"}),g.title&&n.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&n.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&n.a.createElement("meta",{property:"og:image",content:g.image}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&n.a.createElement("meta",{name:"twitter:creator",content:f}),g.title&&n.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&n.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&n.a.createElement("meta",{name:"twitter:image",content:g.image})))},data:s})},m=p;p.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var f="1376445457",g=a(310),h=a(5),b=a(246),y=(a(27),a(95)),v=(a(252),a(317));var E,S,w=(E=n.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),(S=n.a.memo(n.a.forwardRef(function(e,t){return n.a.createElement(v.a,Object(h.a)({},e,{ref:t}),E)}))).muiName=v.a.muiName,S),k=a(249),O=a(263),C=a(254),x=a(255),j=n.a.forwardRef(function(e,t){var a=e.avatar,r=e.classes,i=e.className,l=e.clickable,o=e.color,c=void 0===o?"default":o,s=e.component,d=void 0===s?"div":s,u=e.deleteIcon,p=e.icon,m=e.label,f=e.onClick,g=e.onDelete,v=e.onKeyDown,E=e.onKeyUp,S=e.size,k=void 0===S?"medium":S,O=e.variant,j=void 0===O?"default":O,I=Object(b.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),R=n.a.useRef(null),L=function(e){e.stopPropagation(),g&&g(e)},T=!(!1===l||!f)||l,N="small"===k,z=Object(y.a)(r.root,i,"default"!==c&&[r["color".concat(Object(x.a)(c))],T&&r["clickableColor".concat(Object(x.a)(c))],g&&r["deletableColor".concat(Object(x.a)(c))]],"default"!==j&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[c]],N&&r.sizeSmall,T&&r.clickable,g&&r.deletable),P=null;if(g){var D=Object(y.a)("default"!==c&&("default"===j?r["deleteIconColor".concat(Object(x.a)(c))]:r["deleteIconOutlinedColor".concat(Object(x.a)(c))]),N&&r.deleteIconSmall);P=u&&n.a.isValidElement(u)?n.a.cloneElement(u,{className:Object(y.a)(u.props.className,r.deleteIcon,D),onClick:L}):n.a.createElement(w,{className:Object(y.a)(r.deleteIcon,D),onClick:L})}var W=null;a&&n.a.isValidElement(a)&&(W=n.a.cloneElement(a,{className:Object(y.a)(r.avatar,a.props.className,N&&r.avatarSmall,"default"!==c&&r["avatarColor".concat(Object(x.a)(c))]),childrenClassName:Object(y.a)(r.avatarChildren,a.props.childrenClassName)}));var V=null;p&&n.a.isValidElement(p)&&(V=n.a.cloneElement(p,{className:Object(y.a)(r.icon,p.props.className,N&&r.iconSmall,"default"!==c&&r["iconColor".concat(Object(x.a)(c))])}));var q=Object(C.c)(R,t);return n.a.createElement(d,Object(h.a)({role:T||g?"button":void 0,className:z,tabIndex:T||g?0:void 0,onClick:f,onKeyDown:function(e){if(v&&v(e),e.currentTarget===e.target){var t=e.key;" "!==t&&"Enter"!==t&&"Backspace"!==t&&"Delete"!==t&&"Escape"!==t||e.preventDefault()}},onKeyUp:function(e){if(E&&E(e),e.currentTarget===e.target){var t=e.key;!f||" "!==t&&"Enter"!==t?!g||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&R.current&&R.current.blur():g(e):f(e)}},ref:q},I),W||V,n.a.createElement("span",{className:Object(y.a)(r.label,N&&r.labelSmall)},m),P)}),I=Object(k.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(O.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:"none",textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box"},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},clickable:{WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(O.b)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(O.b)(t,.12)}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.08)},"&:active":{backgroundColor:Object(O.b)(e.palette.primary.main,.12)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.08)},"&:active":{backgroundColor:Object(O.b)(e.palette.secondary.main,.12)}},deletable:{"&:focus":{backgroundColor:Object(O.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:-1}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{marginRight:-4,width:32,height:32,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(16)},avatarSmall:{width:24,height:24,fontSize:e.typography.pxToRem(12)},avatarColorPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},avatarColorSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},avatarChildren:{height:18},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-8},iconSmall:{width:16,marginRight:-5},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,userSelect:"none",whiteSpace:"nowrap",cursor:"inherit"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,cursor:"pointer",height:"auto",margin:"0 5px 0 -8px","&:hover":{color:Object(O.c)(a,.4)}},deleteIconSmall:{height:16,margin:"0 1px 0 -9px"},deleteIconColorPrimary:{color:Object(O.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(O.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(O.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(O.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(j),R=a(39);var L=Object(g.a)(function(e){return{root:{display:"flex",justifyContent:"center",flexWrap:"wrap"},chip:{cursor:"pointer",marginRight:e.spacing(1),marginBottom:e.spacing(2)}}}),T=function(e){var t=L();return n.a.createElement(R.Link,{to:e.tag,style:{textDecoration:"none"}},n.a.createElement(I,{className:t.chip,color:"primary1",label:e.tag,key:e.index}))},N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return this.props&&this.props.tags?this.props.tags.map(function(e,t){return n.a.createElement(T,{tag:e,index:t})}):n.a.createElement(n.a.Fragment,null)},r}(n.a.Component);a.d(t,"query",function(){return z});t.default=function(e){var t=e.data.site.siteMetadata.siteUrl,a=e.data.markdownRemark.frontmatter.image&&e.data.markdownRemark.frontmatter.image.childImageSharp.resize.src,r=e.data.markdownRemark.frontmatter,l=r.title,s=r.image,d=r.tags,u=e.pageContext,p=u.prev,f=u.next;return n.a.createElement(i.a,null,n.a.createElement(m,{title:l,description:e.data.markdownRemark.excerpt,thumbnail:a&&t+a,url:t,pathname:e.location.pathname}),n.a.createElement("div",null,n.a.createElement("h1",null,l),n.a.createElement(N,{tags:d}),s&&n.a.createElement(o.a,{fluid:s.childImageSharp.fluid}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}}),n.a.createElement(c,{prev:p&&p.node,next:f&&f.node})))};var z="4229989228"},247:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var r=a(0),n=a.n(r),i=a(94),l=a.n(i);a.d(t,"a",function(){return l.a});a(248),a(17).default.enqueue;var o=n.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,r=e.query,i=e.render,l=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,l&&i(l),!l&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,r=e.render,i=e.children;return n.a.createElement(o.Consumer,null,function(e){return n.a.createElement(c,{data:t,query:a,render:r||i,staticQueryData:e})})}},248:function(e,t,a){var r;e.exports=(r=a(250))&&r.default||r},250:function(e,t,a){"use strict";a.r(t);a(40);var r=a(0),n=a.n(r),i=a(125);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},251:function(e){e.exports={data:{site:{siteMetadata:{title:"Sumit Parakh"}}}}},253:function(e,t,a){"use strict";var r=a(251),n=a(0),i=a.n(n),l=a(247),o=(a(40),a(311)),c=a(312),s=a(314),d=a(315),u=a(318),p=a(328),m=a(321),f=a(322),g=a(323),h=a(324),b=a(327),y=a(310),v=a(275),E=a(316),S=a(319),w=a(320),k=a(325),O=a(326),C=a(95),x=Object(y.a)(function(e){return{root:{display:"flex",background:"rebeccapurple",marginBottom:"4.75rem"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),j=function(e){var t,a=e.siteTitle,r=(e.props,x()),n=Object(v.a)(),y=i.a.useState(!1),j=y[0],I=y[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r.root},i.a.createElement(o.a,null),i.a.createElement(c.a,{position:"fixed",className:Object(C.a)(r.appBar,(t={},t[r.appBarShift]=j,t))},i.a.createElement(s.a,null,i.a.createElement(d.a,{color:"inherit","aria-label":"open drawer",onClick:function(){},edge:"start",className:Object(C.a)(r.menuButton,j&&r.hide)},i.a.createElement(E.a,null)),i.a.createElement(u.a,{variant:"h6",noWrap:!0},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},a)))),i.a.createElement(p.a,{className:r.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:r.drawerPaper}},i.a.createElement("div",{className:r.drawer},i.a.createElement(d.a,{onClick:function(){I(!1)}},"ltr"===n.direction?i.a.createElement(S.a,null):i.a.createElement(w.a,null))),i.a.createElement(m.a,null),i.a.createElement(f.a,null,["Inbox","Starred","Send email","Drafts"].map(function(e,t){return i.a.createElement(g.a,{button:!0,key:e},i.a.createElement(h.a,null,t%2==0?i.a.createElement(k.a,null):i.a.createElement(O.a,null)),i.a.createElement(b.a,{primary:e}))})),i.a.createElement(m.a,null),i.a.createElement(f.a,null,["All mail","Trash","Spam"].map(function(e,t){return i.a.createElement(g.a,{button:!0,key:e},i.a.createElement(h.a,null,t%2==0?i.a.createElement(k.a,null):i.a.createElement(O.a,null)),i.a.createElement(b.a,{primary:e}))})))))};j.defaultProps={siteTitle:""};var I=j;a(258),t.a=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 0.7rem 0.7rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:r})}},262:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Sumit Parakh",titleTemplate:"%s - Sumit Parakh",defaultDescription:"A blog to share knowledge and learn about JavaScript and its different frameworks, specially Angular.",siteUrl:"https://sumitparakh.dev",defaultImage:"/images/gatsby-astronaut.png",twitterUsername:"@sumitparak"}}}}},287:function(e,t,a){"use strict";a(8),a(9),a(3),a(55),a(134),a(288);var r=a(25);t.__esModule=!0,t.default=void 0;var n,i=r(a(98)),l=r(a(100)),o=r(a(136)),c=r(a(2)),s=r(a(0)),d=r(a(27)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return p[a]||!1},f=new WeakMap;var g=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),f.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),f.set(e,t)),function(){a.unobserve(e),f.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+l+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=s.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return s.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},u,{onLoad:l,onError:d,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:i,hasNoScript:c,seenBefore:o},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,p[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,o=void 0===l?{}:l,d=e.placeholderStyle,p=void 0===d?{}:d,m=e.placeholderClassName,f=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,k=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,c.default)({opacity:w?1:0,transition:k?"opacity "+v+"ms":"none"},o),C="boolean"==typeof y?"lightgray":y,x={transitionDelay:v+"ms"},j=(0,c.default)({opacity:this.state.imgLoaded?0:1},k&&x,o,p),I={title:t,alt:this.state.isVisible?"":a,style:j,className:m};if(f){var R=f;return s.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},s.default.createElement(E,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),C&&s.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&x)}),R.base64&&s.default.createElement(b,(0,c.default)({src:R.base64},I)),R.tracedSVG&&s.default.createElement(b,(0,c.default)({src:R.tracedSVG},I)),this.state.isVisible&&s.default.createElement("picture",null,R.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),s.default.createElement(b,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,c.default)({alt:a,title:t},R))}}))}if(g){var L=g,T=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},i);return"inherit"===i.display&&delete T.display,s.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},C&&s.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:C,width:L.width,opacity:this.state.imgLoaded?0:1,height:L.height},k&&x)}),L.base64&&s.default.createElement(b,(0,c.default)({src:L.base64},I)),L.tracedSVG&&s.default.createElement(b,(0,c.default)({src:L.tracedSVG},I)),this.state.isVisible&&s.default.createElement("picture",null,L.srcSetWebp&&s.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),s.default.createElement(b,{alt:a,title:t,width:L.width,height:L.height,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,c.default)({alt:a,title:t},L))}}))}return null},t}(s.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S},288:function(e,t,a){"use strict";a(178)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-82a0380d840b82a43baa.js.map