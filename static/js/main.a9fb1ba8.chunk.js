(this["webpackJsonpwheres-waldo"]=this["webpackJsonpwheres-waldo"]||[]).push([[0],{28:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),r=c(32),s=c.n(r),o=c(0),i=c.n(o),u=c(29),l=c(17),j=c(11),d=c(3),b=c.p+"static/media/waldo.8d142447.jpg",p=c.p+"static/media/waldo_portrait.671e7973.jpeg",f=c.p+"static/media/odlaw_portrait.c90e6d7c.jpeg",O=(c(28),c(9));var m=function(e){return Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:"portrait",src:e.img,alt:e.description,onClick:function(){e.parentCallback(e.description)}})})};var h=function(e){var t=function(t){e.parentCallback(t)};return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"dropdown",style:{position:"absolute",left:e.position[0],top:e.position[1]},children:e.show.map((function(e){return!0!==e.isFound&&Object(O.jsx)(m,{img:e.img,description:e.name,parentCallback:t},e.name)}))})})};var g=function(){return Object(O.jsxs)("header",{children:[Object(O.jsx)("h2",{children:"Where's Waldo?"}),Object(O.jsx)("h3",{children:"Find"}),Object(O.jsxs)("div",{className:"img-container",children:[Object(O.jsx)("img",{className:"header-img",src:p,alt:"Waldo"}),Object(O.jsx)("img",{className:"header-img",src:f,alt:"Odlaw"})]})]})},x=c(33),v=c(18),w=Object(x.a)({apiKey:"AIzaSyCV5wVcvqItNWQbX6e7F1sk7rdCZudiL60",authDomain:"waldo-db757.firebaseapp.com",projectId:"waldo-db757",storageBucket:"waldo-db757.appspot.com",messagingSenderId:"629608990686",appId:"1:629608990686:web:475f26182414e3f10c3f4f",measurementId:"G-P1YV4CLH28"}),y=Object(v.d)(w);var S=function(e){function t(){return t=Object(d.a)(i.a.mark((function e(){var t,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(v.b)(y,"characters"),e.next=3,Object(v.c)(t);case 3:c=e.sent,n=c.docs.map((function(e){return e.data()})),N(n);case 6:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}function c(){return c=Object(d.a)(i.a.mark((function e(){var t,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(v.b)(y,"leaderboard"),e.next=3,Object(v.c)(t);case 3:c=e.sent,n=c.docs.map((function(e){return e.data()})),J(n);case 6:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function a(){return(a=Object(d.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(t.target),e.prev=2,e.next=5,Object(v.a)(Object(v.b)(y,"leaderboard"),{player:ce,score:G});case 5:c=e.sent,console.log("Document written with ID: ",c.id),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Error adding document: ",e.t0);case 12:$(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var r=Object(n.useState)([0,0]),s=Object(j.a)(r,2),o=s[0],m=s[1],x=Object(n.useState)(!1),w=Object(j.a)(x,2),S=w[0],k=w[1],I=Object(n.useState)([]),C=Object(j.a)(I,2),E=C[0],N=C[1],F=Object(n.useState)([]),Y=Object(j.a)(F,2),D=Y[0],W=Y[1],L=Object(n.useState)([]),V=Object(j.a)(L,2),B=V[0],J=V[1],T=Object(n.useState)([{name:"waldo",isFound:!1,img:p},{name:"odlaw",isFound:!1,img:f}]),X=Object(j.a)(T,2),_=X[0],q=X[1],z=Object(n.useState)(0),A=Object(j.a)(z,2),G=A[0],H=A[1],K=Object(n.useState)(!1),M=Object(j.a)(K,2),P=M[0],Q=M[1],Z=Object(n.useState)(!1),R=Object(j.a)(Z,2),U=R[0],$=R[1],ee=Object(n.useState)(""),te=Object(j.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(""),re=Object(j.a)(ae,2),se=re[0],oe=re[1];return Object(n.useEffect)((function(){if(!0!==P){var e=setInterval((function(){H((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[P]),Object(n.useEffect)((function(){console.log(D)}),[D]),Object(n.useEffect)((function(){console.log(o)}),[o]),Object(n.useEffect)((function(){!function(){t.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){var e=B.sort((function(e,t){return e.score-t.score}));console.log(D);var t=e.splice(0,10);W(t)}),[B]),Object(n.useEffect)((function(){_.every((function(e){return!0===e.isFound}))&&(Q(!0),console.log("You win"),oe("You win!"),D.length<=10&&$(!0))}),[_]),Object(n.useEffect)((function(){console.log(ce)}),[ce]),Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{}),Object(O.jsxs)("h3",{className:"timer",children:[G,"s"]}),Object(O.jsx)("h3",{className:"message",children:se}),Object(O.jsx)("img",{src:b,alt:e.description,onClick:function(e){m([e.pageX,e.pageY]),k(!S)},style:{cursor:"crosshair"}}),S&&Object(O.jsx)(h,{position:o,parentCallback:function(e){var t=E.findIndex((function(t){return t.name===e}));if(o[0]>=E[t].location[0]-20&&o[0]<=E[t].location[0]+20&&o[1]>=E[t].location[1]-20&&o[1]<=E[t].location[1]+20){var c=_.findIndex((function(t){return t.name===e})),n=Object(l.a)(_),a=Object(u.a)(Object(u.a)({},n[c]),n);a.isFound=!0,n[c]=a,q(n),oe("You found one!")}else console.log("Try again!"),oe("Try again!");k(!1)},show:_}),U&&Object(O.jsxs)("form",{onSubmit:function(e){return a.apply(this,arguments)},children:[Object(O.jsx)("label",{htmlFor:"name",children:" Name "}),Object(O.jsx)("input",{type:"text",id:"name",value:ce,onChange:function(e){ne(e.target.value)}}),Object(O.jsx)("input",{type:"submit"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Leaderboard"}),D.map((function(e,t){return Object(O.jsxs)("div",{children:[t+1,". ",e.player,": ",e.score,"s"]},e.player)}))]})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.a9fb1ba8.chunk.js.map