(this["webpackJsonptime-tracking-dashboard"]=this["webpackJsonptime-tracking-dashboard"]||[]).push([[0],{10:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var s=t(1),c=t.n(s),i=t(3),n=t.n(i),a=(t(9),t(4)),l=(t(10),t.p+"static/media/image-jeremy.71cd41f1.png"),o=t(0);var u=function(){var e=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}],r={daily:"day",weekly:"week",monthly:"month"},t=Object(s.useState)("daily"),c=Object(a.a)(t,2),i=c[0],n=c[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"profile",children:[Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("img",{src:l,alt:"jeremy profile",className:"icon"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:"Report for"}),Object(o.jsx)("h1",{children:"Jeremy Robson"})]})]}),Object(o.jsx)("div",{className:"timeframe-selector",children:Object.keys(e[0].timeframes).map((function(e){return Object(o.jsx)("button",{style:{textTransform:"capitalize"},onClick:function(){return n(e)},className:e===i?"active":null,children:e},e)}))})]}),Object(o.jsx)("div",{className:"tracker",children:e.map((function(e){return Object(o.jsx)("div",{className:"card ".concat(e.title.toLocaleLowerCase().replace(" ","-")),children:Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h4",{children:e.title}),Object(o.jsx)("span",{className:"options",children:"..."})]}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("h3",{className:"current",children:[e.timeframes[i].current,"hrs"]}),Object(o.jsxs)("span",{className:"previous",children:["Last ",r[i]," - ",e.timeframes[i].previous]})]})]})},e.title)}))})]})};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))},9:function(e,r,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.ac04c4d3.chunk.js.map