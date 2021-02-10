(this.webpackJsonpfrompltask=this.webpackJsonpfrompltask||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r,a,i=t(0),c=t.n(i),o=t(10),l=t.n(o),s=(t(19),t(20),t(7)),b=t.n(s),u=t(11),d=t(4),j=t(2),p=t(3),h=t(1),x=p.a.button(r||(r=Object(j.a)(["\n  margin: 0;\n  width: 5%;\n  color: rgba(40, 40, 40, 0.7);\n  margin: 0.1%;\n  border: 2px solid rgba(100, 200, 50, 0.7);\n  border-radius: 3px;\n\n  &:active {\n    background-color: rgba(100, 200, 50, 0.5);\n  }\n"]))),g=Object(i.memo)((function(e){var n=e.paginate,t=e.page;return Object(h.jsx)(x,{onClick:n,value:t,children:t})}));g.displayName="MovieExplorerPagination";var m,f=p.a.button(a||(a=Object(j.a)(["\n  height: 3vh;\n  width: 50%;\n  color: rgba(40, 40, 40, 0.7);\n  margin: 1%;\n  border: 2px solid rgba(100, 200, 50, 0.7);\n  border-radius: 3px;\n\n  &:active {\n    background-color: rgba(100, 200, 50, 0.5);\n  }\n"]))),v=Object(i.memo)((function(e){var n=e.text,t=e.onClick,r=e.ariaLabel;return Object(h.jsx)(f,{onClick:t,"aria-label":r,children:n})}));v.displayName="MovieExplorerButton";var O,w,y,k,C=p.a.div(m||(m=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 2%;\n  padding: 5vh 0 1vh;\n\n  & > input {\n    border: 1px solid rgba(100, 170, 50, 0.7);\n    border-radius: 0.25rem;\n    background-color: transparent;\n    outline: none;\n    padding: 2%;\n    transition: all 0.2s ease;\n    z-index: 500;\n  }\n  & > label {\n    color: #757575;\n    font-size: 1.8rem;\n    transition: all 0.2s ease;\n    margin: 2%;\n    z-index: 500;\n  }\n"]))),M=Object(i.memo)((function(e){var n=e.handleChange,t=e.title,r=e.text;return Object(h.jsxs)(C,{children:[Object(h.jsx)("label",{htmlFor:"MovieTitle",children:"Movie Explorer"}),Object(h.jsx)("input",{type:"text",defaultValue:t,onChange:n,placeholder:r,"aria-label":r,required:!0})]})}));M.displayName="MovieExplorerInput";var S=p.a.div(O||(O=Object(j.a)(["\n  background-color: rgba(200, 200, 100, 0.5);\n  border: 1px solid #a1b1c1;\n  margin: 3% 1%;\n  order: 1;\n"]))),E=p.a.div(w||(w=Object(j.a)(["\n  margin: 1%;\n"]))),T=p.a.p(y||(y=Object(j.a)(["\n  font-size: 16px;\n  border-bottom: 1px solid #114111;\n  margin: 1%;\n"]))),N=p.a.p(k||(k=Object(j.a)(["\n  margin: 1%;\n  font-size: 12px;\n"]))),I=Object(i.memo)((function(e){var n=e.title,t=e.img,r=e.year;return Object(h.jsxs)(S,{children:[Object(h.jsx)("img",{src:t,alt:n}),Object(h.jsxs)(E,{children:[Object(h.jsx)(T,{children:n}),Object(h.jsxs)(N,{children:["(",r,")"]})]})]},n)}));I.displayName="MovieExplorerList";var P,z,F,L,D=function(e,n){return fetch("".concat("https://www.omdbapi.com/","?apikey=").concat("2d916965","&s=").concat(e,"&page=").concat(n),{method:"GET",mode:"cors"}).then((function(e){if(e)return e.json()})).then((function(e){var n=e.Search;if(void 0!==n)return n}))};D.displayName="fetchMovies";var B=p.a.form(P||(P=Object(j.a)(["\n  height: 30vh;\n  width: 60vw;\n  margin: auto;\n"]))),J=p.a.section(z||(z=Object(j.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100%;\n  display: grid;\n  margin: auto;\n  justify-content: space-around;\n"]))),Y=p.a.div(F||(F=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),q=p.a.div(L||(L=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),A=function(){var e=Object(i.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],a=Object(i.useState)(1),c=Object(d.a)(a,2),o=c[0],l=c[1],s=Object(i.useState)((function(){for(var e=[],n=1;n<=100;n++)e.push({page:n});return e})),j=Object(d.a)(s,1)[0],p=Object(i.useState)((function(){return[{Poster:"",Title:"",Type:"",Year:"",imdbID:""}]})),x=Object(d.a)(p,2),m=x[0],f=x[1],O=Object(i.useCallback)(Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t,o).then((function(e){void 0!==e&&f(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),[o,t]),w=Object(i.useCallback)((function(e){var n=Number.parseInt(e.currentTarget.value,10);l((function(){return n})),O()}),[O]),y=Object(i.useCallback)((function(e){e.preventDefault(),O()}),[O]),k=Object(i.useCallback)((function(e){var n=e.currentTarget.value;r((function(){return n}))}),[]);return Object(h.jsxs)(J,{"aria-label":"MovieExplorer",children:[Object(h.jsxs)(B,{onSubmit:y,children:[Object(h.jsx)(M,{title:t,handleChange:k,text:"Put movie title..."}),Object(h.jsx)(v,{text:"Search",onClick:y,ariaLabel:"Search"})]}),Object(h.jsx)(Y,{children:1!==m.length&&m.map((function(e){var n=e.Title,t=e.Poster,r=e.Year,a=e.imdbID;return Object(h.jsx)(I,{title:n,img:t,year:r},a+n)}))}),Object(h.jsx)(q,{children:1!==m.length&&j.map((function(e){var n=e.page;return Object(h.jsx)(g,{page:n,paginate:w},n+"mep")}))})]})};A.displayName="MovieExplorer";var G=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(A,{})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),a(e),i(e),c(e)}))};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(G,{})}),document.getElementById("root")),V()}},[[25,1,2]]]);
//# sourceMappingURL=main.4639c620.chunk.js.map