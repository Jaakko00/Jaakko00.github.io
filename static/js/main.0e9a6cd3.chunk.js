(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(17),c=n.n(o),r=(n(70),n(19)),l=n(20),i=n(32),u=n(30),d=(n(51),n(25)),h=n.n(d),b=n(48),j=n(24),p=n(37),f=n.n(p),O=n(26),m=n(61),w=n(1);var v=function(e){return Object(w.jsx)(O.a,{bg:e.post.color,text:"white",className:"m-2",style:{width:"30rem"},children:Object(w.jsxs)(O.a.Body,{children:[Object(w.jsxs)(O.a.Title,{className:"lead",children:[e.post.title," "]}),Object(w.jsx)(O.a.Subtitle,{className:"mb-2 text-light",children:e.post.create_time}),Object(w.jsx)(O.a.Text,{className:"text-white",children:e.post.content}),Object(w.jsxs)(O.a.Subtitle,{className:"mb-2 text-light",children:[e.post.sender&&"-"+e.post.sender,!e.post.sender&&"-Anonymous"]}),Object(w.jsx)(m.a,{className:e.showDeleteButton(),variant:"dark",color:"white",onClick:function(){return e.delete(e.post)},children:"Delete"})]})})},x=n(7),g=n(111),y=n(107),D=n(110),N=n(109),B=n(63),k=n(91);var S=function(e){var t=Object(a.useState)(""),n=Object(x.a)(t,2),s=n[0],o=n[1],c=Object(a.useState)(""),r=Object(x.a)(c,2),l=r[0],i=r[1],u=Object(a.useState)(""),d=Object(x.a)(u,2),h=d[0],b=d[1],j=Object(a.useState)(""),p=Object(x.a)(j,2),f=p[0],O=p[1],v=Object(a.useState)(""),S=Object(x.a)(v,2),C=S[0],T=S[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(g.a,{bg:"light",expand:!1,children:Object(w.jsxs)(y.a,{fluid:!0,children:[Object(w.jsx)(g.a.Brand,{className:"display-1",children:"Bullet-in-Board"}),Object(w.jsxs)(D.a,{className:"d-flex",style:{width:"20rem"},children:[Object(w.jsx)(N.a.Link,{disabled:!0,children:"Admin"}),Object(w.jsx)(D.a.Control,{className:"me-2",type:"password",value:f,placeholder:"Password",onChange:function(e){O(e.currentTarget.value)},disabled:C}),Object(w.jsxs)(m.a,{onClick:function(){"admin"!==f&&"visible"!==e.showDeleteButton()||(e.showDelete(),O(""),T(!1)),"admin"===f&&"invisible"===e.showDeleteButton()&&T(!0)},children:["invisible"===e.showDeleteButton()&&"Login","visible"===e.showDeleteButton()&&"Logout"]})]}),Object(w.jsx)(g.a.Toggle,{children:"New post"}),Object(w.jsxs)(g.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",style:{width:"35rem"},scroll:!0,backdrop:!1,children:[Object(w.jsx)(B.a.Header,{closeButton:!0,children:Object(w.jsx)(B.a.Title,{id:"offcanvasNavbarLabel",children:"New post"})}),Object(w.jsxs)(B.a.Body,{children:[Object(w.jsx)(D.a,{className:"m-2",style:{width:"10rem"},children:Object(w.jsx)(D.a.Control,{className:"mb-3",type:"text",placeholder:"Title",value:h,onChange:function(e){b(e.currentTarget.value)}})}),Object(w.jsx)(D.a,{className:"m-2",style:{width:"30rem"},children:Object(w.jsx)(D.a.Control,{as:"textarea",rows:3,placeholder:"Text",value:s,onChange:function(e){o(e.currentTarget.value)}})}),Object(w.jsx)(D.a,{className:"m-2",style:{width:"10rem"},children:Object(w.jsx)(D.a.Control,{className:"mb-3",type:"text",placeholder:"From",value:l,onChange:function(e){i(e.currentTarget.value)}})}),Object(w.jsx)(m.a,{className:"m-2",variant:"primary",type:"submit",onClick:function(){s.length&&h.length&&e.post(k.clean(s),k.clean(l),k.clean(h)).then(o("")).then(i("")).then(b(""))},children:"Submit"})]})]})]})})})},C=n(108),T=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={posts:[],showDelete:!1},a.addNewPost=a.addNewPost.bind(Object(j.a)(a)),a.deletePost=a.deletePost.bind(Object(j.a)(a)),a.showDeleteButton=a.showDeleteButton.bind(Object(j.a)(a)),a.handleShowDeleteButton=a.handleShowDeleteButton.bind(Object(j.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("https://bullet-in-board.herokuapp.com/posts").then((function(e){t.setState({posts:e.data})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addNewPost",value:function(){var e=Object(b.a)(h.a.mark((function e(t,n,a){var s,o,c,r,l=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=function(){var e=Math.floor(4*Math.random())+1;return 1===e?"success":2===e?"danger":3===e?"warning":"info"},console.log("Adding post"),o=(new Date).toISOString().slice(0,10),c=s(),r={content:t,create_time:o,sender:n,title:a,color:c},console.log(r),f.a.post("https://bullet-in-board.herokuapp.com/posts",r).catch((function(e){console.log(e)})).then((function(e){console.log("Added new post"),f.a.get("https://bullet-in-board.herokuapp.com/posts").then((function(e){l.setState({posts:e.data})})).catch((function(e){console.log(e)}))}));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(){var e=Object(b.a)(h.a.mark((function e(t){var n=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.delete("https://bullet-in-board.herokuapp.com/posts/".concat(t.id)).then((function(e){n.setState({posts:n.state.posts.filter((function(e){return e.id!==t.id}))})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleShowDeleteButton",value:function(){this.setState((function(e){return{showDelete:!e.showDelete}}))}},{key:"showDeleteButton",value:function(){return this.state.showDelete?"visible":"invisible"}},{key:"render",value:function(){var e=this,t=this.state.posts.sort((function(e,t){return t.id-e.id})).map((function(t){return Object(w.jsx)(v,{post:t,delete:e.deletePost,showDeleteButton:e.showDeleteButton},t.id)}));return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{post:this.addNewPost,showDelete:this.handleShowDeleteButton,showDeleteButton:this.showDeleteButton}),Object(w.jsx)(C.a,{className:"justify-content-center",children:t})]})}}]),n}(s.a.Component),P=T,F=(n(104),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(w.jsx)(P,{})}}]),n}(s.a.Component)),L=F,A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};c.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(L,{})}),document.getElementById("root")),A()},51:function(e,t,n){},70:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.0e9a6cd3.chunk.js.map