(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{20:function(e,t,c){"use strict";var n=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},23:function(e,t,c){"use strict";var n=c(21),a=c.n(n),r=c(22),s=c(6),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(a.a.mark((function e(t){var c,r,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},n(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,n(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),n(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,n=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=d744a44799ab057e317cba56f8a2aed4",j=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(m));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",m(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return n=e.sent,e.abrupt("return",O(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},O=function(e){return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices.price?"".concat(e.prices.price,"$"):"not available"}};return{loading:t,error:n,clearError:o,getAllCharacters:j,getCharacter:b,getAllComics:h,getComic:d}}},31:function(e,t,c){},32:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(6),a=(c(31),c.p+"static/media/mjolnir.61f31e18.png"),r=c(1),s=c(23),i=c(10),o=c(20),l=c(0),u=function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:n}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),c=t[0],j=t[1],b=Object(s.a)(),h=b.loading,d=b.error,m=b.getCharacter,O=b.clearError;Object(r.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var p=function(e){j(e)},f=function(){O();var e=Math.floor(400*Math.random()+1011e3);m(e).then(p)},v=d?Object(l.jsx)(o.a,{}):null,x=h?Object(l.jsx)(i.a,{}):null,_=h||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[_,x,v,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:f,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:a,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(27),h=(c(32),c(48)),d=c(50),m=function(e){var t=Object(r.useState)([]),c=Object(n.a)(t,2),a=c[0],u=c[1],j=Object(r.useState)(!1),m=Object(n.a)(j,2),O=m[0],p=m[1],f=Object(r.useState)(210),v=Object(n.a)(f,2),x=v[0],_=v[1],g=Object(r.useState)(!1),N=Object(n.a)(g,2),k=N[0],y=N[1],w=Object(s.a)(),C=w.loading,S=w.error,E=w.getAllCharacters;Object(r.useEffect)((function(){F(x,!0)}),[]);var F=function(e,t){p(!t),E(e).then(I)},I=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e))})),p(!1),_((function(e){return e+9})),y(t)},A=Object(r.useRef)([]),T=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var q=function(t){var c=t.map((function(t,c){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(n={objectFit:"unset"}),Object(l.jsx)(h.a,{in:t.id,timeout:500,classNames:"my-node",children:Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[c]=e},onClick:function(){e.onCharSelected(t.id),T(c)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(e.onCharSelected(t.id),T(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:n}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)})}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(d.a,{component:null,children:c})})}(a),R=S?Object(l.jsx)(o.a,{}):null,W=C&&!O?Object(l.jsx)(i.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[R,W,q,Object(l.jsx)("button",{className:"button button__main button__long",disabled:O,style:{display:k?"none":"block"},onClick:function(){return F(x)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},O=(c(35),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),p=(c(36),function(e){var t=e.char,c=t.name,n=t.description,a=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:r,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:n}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character ",i.map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:e.name},t)})),Object(l.jsx)("li",{className:"char__comics-item",children:"All-Winners Squad: Band of Heroes (2011) #3"})]})]})}),f=function(e){var t=Object(r.useState)(null),c=Object(n.a)(t,2),a=c[0],u=c[1],j=Object(s.a)(),b=j.loading,h=j.error,d=j.getCharacter,m=j.clearError;Object(r.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(m(),d(t).then(v))},v=function(e){u(e)},x=a||b||h?null:Object(l.jsx)(O,{}),_=h?Object(l.jsx)(o.a,{}):null,g=b?Object(l.jsx)(i.a,{}):null,N=b||h||!a?null:Object(l.jsx)(p,{char:a});return Object(l.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},v=c(37),x=c(38),_=c(43),g=c(42),N=function(e){Object(_.a)(c,e);var t=Object(g.a)(c);function c(){var e;Object(v.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(x.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return!0===this.state.error?Object(l.jsx)(o.a,{}):this.props.children}}]),c}(r.Component),k=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),c=t[0],a=t[1];console.log(typeof r.useState,"fj");return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(N,{children:Object(l.jsx)(m,{onCharSelected:function(e){a(e)}})}),Object(l.jsx)(N,{children:Object(l.jsx)(f,{charId:c})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})}}}]);
//# sourceMappingURL=5.a817b8e1.chunk.js.map