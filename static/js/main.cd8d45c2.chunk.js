(this.webpackJsonpbloggingwebsite=this.webpackJsonpbloggingwebsite||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(13),r=c.n(i),l=(c(40),c(11)),s=(c(41),c(19)),o=c(32),d=c.n(o),b=c(31),j=c.n(b),u=c(64),O=c(33),g=c(12),h={list:[]},p=Object(n.createContext)(h),x=function(e,t){switch(t.type){case"ADD_BLOG":var c=t.payload,n=c.id,a=c.title,i=c.blog;return Object(g.a)(Object(g.a)({},e),{},{list:[].concat(Object(O.a)(e.list),[{id:n,title:a,blog:i}])});case"REMOVE_BLOG":var r=e.list.filter((function(e){return e.id!==t.payload}));return Object(g.a)(Object(g.a)({},e),{},{list:r});case"UPDATE_BLOG":var l=t.payload.data;return e.list.forEach((function(t,c){t.id===l.id&&e.list.splice(c,1,{id:l.id,title:l.title,blog:l.blog})})),e;case"DELETE_ALL":return Object(g.a)(Object(g.a)({},e),{},{list:[]});default:return e}},m=c(2),f=function(){var e,t=Object(n.useContext)(p),c=t.state,a=t.dispatch,i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],b=r[1],O=Object(n.useState)(""),g=Object(l.a)(O,2),h=g[0],x=g[1],f=Object(n.useState)(!1),v=Object(l.a)(f,2),y=v[0],w=v[1],E=Object(n.useState)(0),N=Object(l.a)(E,2),L=N[0],C=N[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Blogging Website"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"card w-125 shadow-lg p-3 mb-5 bg-white rounded",children:[Object(m.jsx)("h4",{children:"Enter your blog"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{className:"input-group flex-nowrap",children:Object(m.jsx)("input",(e={type:"text",value:o,className:"form-control",placeholder:"Username","aria-describedby":"addon-wrapping"},Object(s.a)(e,"placeholder","Enter title"),Object(s.a)(e,"onChange",(function(e){return b(e.target.value)})),e))}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"input-group",children:Object(m.jsx)("textarea",{value:h,className:"form-control",placeholder:"Enter your content here",onChange:function(e){return x(e.target.value)}})}),Object(m.jsx)("br",{}),y?Object(m.jsx)("button",{onClick:function(){return a({type:"UPDATE_BLOG",payload:{data:{id:L,title:o,blog:h}}},w(!1),b(""),x(""))},className:"btn btn-primary",children:"Update Blog"}):Object(m.jsx)("button",{onClick:function(){return a((e={title:o,blog:h},{type:"ADD_BLOG",payload:{id:(new Date).getTime().toString(),title:e.title,blog:e.blog}}),b(""),x(""));var e},className:"btn btn-primary",children:"Add Blog"}),Object(m.jsx)("button",{onClick:function(){return a({type:"DELETE_ALL"},b(""),x(""))},className:"btn btn-danger ms-4",children:"Delete All"})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4 ",children:c.list.map((function(e){return Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title",children:[e.title,Object(m.jsx)(u.a,{style:{borderRadius:"700px",width:"20px",marginRight:"0px"},onClick:function(){return function(e){var t=c.list.find((function(t){return t.id===e}));b(t.title),x(t.blog),C(e),w(!0)}(e.id)},children:Object(m.jsx)(j.a,{})}),Object(m.jsx)(u.a,{style:{borderRadius:"700px",width:"20px"},onClick:function(){return a(function(e){return{type:"REMOVE_BLOG",payload:e}}(e.id))},children:Object(m.jsx)(d.a,{})})]}),Object(m.jsx)("p",{className:"card-text",children:e.blog})]})})},e.id)}))})]})};var v=function(){var e=Object(n.useReducer)(x,h),t=Object(l.a)(e,2),c=t[0],a=t[1];return console.log("State ",c),Object(m.jsx)(p.Provider,{value:{state:c,dispatch:a},children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),y()}},[[49,1,2]]]);
//# sourceMappingURL=main.cd8d45c2.chunk.js.map