(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{454:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(14),r=t.n(c),n=t(17),i=t.n(n),m=t(72),o=t.n(m),l=t(131),j=t(132),d=t(133),h=t(138),u=t(137),b=t(134),g=t.n(b);t(85),t.p,t.p;var v=function(e){var s=e.year,t=e.title,c=e.summary,r=e.poster,n=e.genres;return Object(a.jsxs)("div",{className:"movieContainer",children:[Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{className:"movie_poster",src:r,alt:t,title:t}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:t}),Object(a.jsx)("strong",{className:"movie_year",children:s}),Object(a.jsx)("ul",{className:"movie_genres",children:n.map((function(e,s){return Object(a.jsx)("li",{className:"genres_genre",children:s===n.length-1?e:e+","},s)}))}),Object(a.jsxs)("p",{className:"movie_summary",children:[c.slice(0,180),c.length>180&&Object(a.jsx)("button",{className:"summary_showMore",title:"Show more",type:"button",children:Object(a.jsx)("i",{className:"fas fa-ellipsis-h"})})]})]})]}),Object(a.jsx)("div",{className:"movieUsersContainer",children:Object(a.jsxs)("div",{className:"movieUsers",children:[Object(a.jsxs)("ul",{className:"users_image",children:[Object(a.jsx)("li",{className:"usersImageList firstUserImg",children:Object(a.jsx)("img",{className:"userImg",src:"https://img.theqoo.net/img/TnXUz.jpg",alt:"UserImg"})}),Object(a.jsx)("li",{className:"usersImageList secondUserImg",children:Object(a.jsx)("img",{className:"userImg",src:"https://static-storychat.pstatic.net/1527676_16771803/9bnc5dga37710.jpg",alt:"UserImg"})}),Object(a.jsx)("li",{className:"usersImageList thirdUserImg",children:Object(a.jsx)("img",{className:"userImg",src:"https://blog.kakaocdn.net/dn/3Lndn/btqEh7tx1It/KRYxjpmeP4kzdZOAYGN8y0/img.png",alt:"UserImg"})})]}),Object(a.jsx)("span",{className:"userWatching",children:"\uc7a5\ub3d9\uc724, \uc2e0\uc9f1\uad6c, Inter Milan and 4 others are watching this."}),Object(a.jsxs)("div",{className:"recommend",children:[Object(a.jsx)("button",{className:"recommendButton",type:"button",children:Object(a.jsx)("i",{class:"far fa-thumbs-up"})}),Object(a.jsx)("span",{className:"recommendCount",children:"32"})]})]})})]})},p=(t(160),function(e){Object(h.a)(t,e);var s=Object(u.a)(t);function t(){var e;Object(j.a)(this,t);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(e=s.call.apply(s,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function s(){var t,a;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:t=s.sent,a=t.data.data.movies,e.setState({movies:a,isLoading:!1}),console.log(a);case 6:case"end":return s.stop()}}),s)}))),e.renderMovies=function(){return e.state.movies.map((function(e){return Object(a.jsx)(v,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;Math.floor(100*Math.random());return console.log(t),Object(a.jsx)("div",{children:s?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("p",{className:"loader_text",children:"Please wait\ud83c\udf3b"})}):Object(a.jsx)("div",{className:"movies",children:this.renderMovies()})})}}]),t}(r.a.Component));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))},85:function(e,s,t){}},[[454,1,2]]]);
//# sourceMappingURL=main.5b77569d.chunk.js.map