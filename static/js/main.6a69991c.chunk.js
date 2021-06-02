(this["webpackJsonpshop-app-ts"]=this["webpackJsonpshop-app-ts"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(30),r=n.n(c),a=n(62),i=n(34),s=n(63),o=n(68),j=n.n(o),d=n(77),l=n(0),u=n(128),h=(n(98),n(3)),b=function(e){var t=e.item,n=e.handleAddToCart;return Object(h.jsxs)("div",{className:"Item",children:[Object(h.jsx)("img",{src:t.image,alt:t.title}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:t.title}),Object(h.jsx)("p",{children:t.description}),Object(h.jsxs)("h3",{children:["$",t.price]})]}),Object(h.jsx)("button",{onClick:function(){return n(t)},children:"Add to cart"})]})},O=(n(100),function(e){var t=e.handleOpenCart,n=(e.handleCloseCart,e.getTotalItems),c=e.cartItems,r=e.handleAboutOpen;return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("ul",{className:"nav",children:[Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return r()},children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){return r()},children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsxs)("button",{onClick:function(){return t()},children:["Cart ",n(c)>0?Object(h.jsxs)("p",{children:["(",n(c),")"]}):null]})})]})})}),m=(n(101),function(e){var t=e.item,n=e.addToCart,c=e.removeFromCart;return Object(h.jsxs)("div",{className:"CartItem",children:[Object(h.jsx)("h3",{children:t.title}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("p",{children:["Price: $",t.price," "]}),Object(h.jsxs)("p",{children:["Total: $",(t.amount*t.price).toFixed(2)]})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{className:"remove-cart-btn",onClick:function(){return c(t.id)},children:"-"}),Object(h.jsx)("p",{children:t.amount}),Object(h.jsx)("button",{className:"add-cart-btn",onClick:function(){return n(t)},children:"+"})]}),Object(h.jsx)("img",{className:"cart-img",src:t.image,alt:t.title})]})}),p=(n(102),function(e){var t,n=e.cartItems,c=e.addToCart,r=e.removeFromCart,a=e.handleAboutOpen;return Object(h.jsxs)("div",{className:"Cart",children:[Object(h.jsx)("h2",{children:"Your Shopping Cart"}),0===n.length?Object(h.jsx)("p",{children:"No items in cart."}):null,n.map((function(e){return Object(h.jsx)(m,{item:e,addToCart:c,removeFromCart:r},e.id)})),Object(h.jsxs)("h2",{children:["Total: $",(t=n,t.reduce((function(e,t){return e+t.amount*t.price}),0)).toFixed(2)]}),Object(h.jsx)("button",{onClick:function(){return a()},children:"Checkout"})]})}),x=(n(103),n(127)),f=n(125),v=n(130),C=n(131),g=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)([]),o=Object(s.a)(r,2),j=o[0],d=o[1],m=Object(l.useState)(!1),N=Object(s.a)(m,2),w=N[0],k=N[1],A=Object(u.a)("products",g),I=A.data,T=A.isLoading,y=A.error;console.log(I);var S=function(e){return e.reduce((function(e,t){return e+t.amount}),0)},F=function(e){d((function(t){return t.find((function(t){return t.id===e.id}))?t.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(a.a)(t),[Object(i.a)(Object(i.a)({},e),{},{amount:1})])}))},H=function(){k(!w)},$=function(){c(!0)},P=function(){c(!1)};return T?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{handleOpenCart:$,handleCloseCart:P,getTotalItems:S,cartItems:j,handleAboutOpen:H}),Object(h.jsx)(x.a,{active:!0,children:Object(h.jsx)(f.a,{size:"massive",children:"Loading"})})]}):w?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{handleOpenCart:$,handleCloseCart:P,getTotalItems:S,cartItems:j,handleAboutOpen:H}),Object(h.jsxs)("div",{className:"about-page",children:[Object(h.jsx)("h3",{children:"Hello! This is my first React App created with Typescript! It taught me a lot about TS and how much easier it makes coding with fewer errors. I used the fake store api to fill the data for this project!"}),Object(h.jsx)("hr",{}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),window.location.href="https://www.buymeacoffee.com/jpcutshall"},children:"Buy me a beer! \ud83c\udf7a"})]})]}):y?Object(h.jsx)("div",{className:"App",children:"Something went wrong..."}):Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(v.a.Pushable,{as:C.a,children:[Object(h.jsxs)(v.a,{className:"sidebar",animation:"push",direction:"right",inverted:"true",onHide:P,vertical:"true",visible:n,width:"very wide",children:[Object(h.jsx)("h2",{children:"Shopping Cart"}),Object(h.jsx)("hr",{}),Object(h.jsx)(p,{cartItems:j,addToCart:F,removeFromCart:function(e){d((function(t){return t.reduce((function(t,n){return n.id===e?1===n.amount?t:[].concat(Object(a.a)(t),[Object(i.a)(Object(i.a)({},n),{},{amount:n.amount-1})]):[].concat(Object(a.a)(t),[n])}),[])}))},handleAboutOpen:H}),Object(h.jsx)("button",{onClick:P,children:"Hide"})]}),Object(h.jsxs)(v.a.Pusher,{dimmed:n,children:[Object(h.jsx)(O,{handleOpenCart:$,handleCloseCart:P,cartItems:j,getTotalItems:S,handleAboutOpen:H}),Object(h.jsx)("div",{className:"items-container",children:null===I||void 0===I?void 0:I.map((function(e){return Object(h.jsx)("div",{className:"grid-item",children:Object(h.jsx)(b,{item:e,handleAddToCart:F})},e.id)}))})]})]})})},w=n(126),k=n(78),A=(n(110),n(111),new w.a);r.a.render(Object(h.jsx)(k.a,{client:A,children:Object(h.jsx)(N,{})}),document.getElementById("root"))},98:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.6a69991c.chunk.js.map