(this["webpackJsonpkeeper-note"]=this["webpackJsonpkeeper-note"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(8),i=n.n(r),o=n(9),l=n(5),s=(n(14),n(4)),j=n(7),u=n(0);var b=function(t){var e=Object(c.useState)({title:"",content:""}),n=Object(l.a)(e,2),a=n[0],r=n[1];function i(t){var e=t.target,n=e.name,c=e.value;r((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(s.a)({},n,c))}))}return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("input",{className:"input",name:"title",value:a.title,onChange:i,placeholder:"Title"}),Object(u.jsx)("textarea",{className:"text-area",name:"content",value:a.content,onChange:i,placeholder:"Take a note ",rows:"3"}),Object(u.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),t.onAdd(a),r({title:"",content:""}),""===a.title&&""===a.content&&(alert("enter anythink"),a.title="default title",a.content="default content")},children:"Add"})]})})},d=function(){return Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)("h1",{children:"Navbar"})})},O=function(t){return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsx)("p",{children:t.content}),Object(u.jsx)("button",{onClick:function(){t.onDelete(t.id)},className:"button",children:"Delete"})]})};var f=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1];function r(t){a((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsx)(b,{onAdd:function(t){a((function(e){return[].concat(Object(o.a)(e),[t])}))}}),n.map((function(t,e){return Object(u.jsx)(O,{id:e,title:t.title,content:t.content,onDelete:r},e)}))]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3b6e17f8.chunk.js.map