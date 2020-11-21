(this.webpackJsonpcovid19stat=this.webpackJsonpcovid19stat||[]).push([[0],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(68),o=a.n(l),c=a(3),i=a(1);a(77),a(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(69),m=a.n(s);var u=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{src:m.a,className:"navbar-logo",alt:"logo"}),"Covid19 Stat ")};var d=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"socials",href:"https://www.twitter.com/evuetaphajoshua"},"Twitter"),r.a.createElement("br",null),r.a.createElement("a",{className:"socials",href:"https://www.github.com/joshuajee"},"Github"))},v=a(10),h=a(11),E=a(13),b=a(12),f=a(27),p=a.n(f),y=(a(50),a(20));var C=function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))};var g=function(e){var t=Object(n.useState)(!1),a=Object(y.a)(t,2),l=a[0],o=a[1];function c(){o(!0)}var i=e.color,s="hide";return e.chart&&(s="show  chart-btn"),r.a.createElement("div",{className:"case",style:{backgroundColor:i}},r.a.createElement("div",null,e.number),r.a.createElement("div",null,e.type),l,r.a.createElement("button",{onClick:c,class:s}," View Chart  "))};var w=function(e){var t=e.data.TotalConfirmed,a=e.data.TotalRecovered,n=e.data.TotalDeaths,l=t-a-n,o=e.data.NewConfirmed,c=e.data.NewRecovered,i=e.data.NewDeaths;return r.a.createElement("div",{className:"caseBar"},r.a.createElement(g,{number:t,type:"Total Confirmed Case",color:"#000000",chart:!0}),r.a.createElement(g,{number:a,type:"Total Recovered Case",color:"#12f432",chart:!0}),r.a.createElement(g,{number:l,type:"Total Active Case",color:"#701722",chart:!0}),r.a.createElement(g,{number:n,type:"Total Death Case",color:"#ff0000",chart:!0}),r.a.createElement(g,{number:o,type:"Daily Confirmed Case",color:"#000000"}),r.a.createElement(g,{number:c,type:"Daily Recovered Case",color:"#12f432"}),r.a.createElement(g,{number:i,type:"Daily Death Case",color:"#ff0000"}))};var D=function(e){var t=e.table[1][1]-e.table[1][2]-e.table[1][3],a=e.table[1][5]-e.table[1][6]-e.table[1][7],n="/country/"+e.table[1][9];return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[0])),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][0]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][1]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][2]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},t," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][3]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][5]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][6]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},a," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][7]," ")))};var N,j,O,R=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={sortByConfirmed:!0,sortByRecoverd:!1,sortByDeaths:!1,sortByActive:!1,sortByDailyConfirmed:!1,sortByDailyRecovered:!1,sortByDailyDeaths:!1,sortByDailyActive:!1,sortByCountry:!1},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tableWrapper"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Confirmed Case"),r.a.createElement("th",null,"Recovered Case"),r.a.createElement("th",null,"Active Case"),r.a.createElement("th",null,"Total Deaths"),r.a.createElement("th",null,"Daily Confirmed Case"),r.a.createElement("th",null,"Daily Recovered Case"),r.a.createElement("th",null,"Daily Rise in Cases "),r.a.createElement("th",null,"Daily Death Case"))),r.a.createElement("tbody",null,function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a].TotalConfirmed-e[a].TotalRecovered-e[a].TotalDeaths,l=e[a].TotalConfirmed-e[a].TotalRecovered-e[a].TotalDeaths;t[a]=[e[a].Country,e[a].TotalConfirmed,e[a].TotalRecovered,e[a].TotalDeaths,n,e[a].NewConfirmed,e[a].NewRecovered,e[a].NewDeaths,l,e[a].Slug]}t.sort((function(e,t){return t[1]-e[1]}));for(var o=0;o<t.length;o++)t[o]=[o+1,t[o]];return t.map((function(e){return r.a.createElement(D,{table:e})}))}(this.props.data))))}}]),a}(r.a.Component),T=a(19),k=a(71);function B(e,t,a){var n=[],r=[],l=t-a;console.log(t),O=e.length;for(var o=0;o<a;o++)n[o]=e[o+l][0],r[o]=e[o+l][1];return[n,r]}var S=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={close:"show",position:20,max:O},e.close=e.close.bind(Object(T.a)(e)),e.handleEvent=e.handleEvent.bind(Object(T.a)(e)),e}return Object(h.a)(a,[{key:"close",value:function(){this.setState({close:"hide"})}},{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"render",value:function(){return function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20;t.sort((function(e,t){return t[1]-e[1]}));var r=B(t,a,n);j={labels:r[0],datasets:[{label:"Country",backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:r[1]}]};var l=a-n;N={title:{display:!0,text:"Showing Top "+l+" to "+a+" Daily "+e+" case by Country ",fontSize:15},legend:{display:!1,position:"top"}}}(this.props.type,this.props.data,this.state.position),r.a.createElement("div",{className:"Graph"},r.a.createElement("div",null,r.a.createElement(k.Bar,{data:j,options:N})),r.a.createElement("input",{type:"range",min:20,max:O,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component);var A=function(e){return r.a.createElement("div",{className:"failed"},r.a.createElement("center",null,r.a.createElement("div",{className:"failed-msg"},"Failed To Retrieve data please reload.",r.a.createElement(c.b,{to:"/"}," reload "))))},x=[],L=[];function W(e){for(var t=0,a=[],n=0;n<x.length;n++){switch(e){case"Confirmed":a[t]=[x[n].Country,x[n].NewConfirmed];break;case"Deaths":a[t]=[x[n].Country,x[n].NewDeaths];break;case"Recovered":a[t]=[x[n].Country,x[n].NewRecovered];break;case"Active":a[t]=[x[n].Country,x[n].NewConfirmed-x[n].NewDeaths-x[n].NewRecovered]}t++}return a}var G=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={isLoading:!0,failed:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/home").then((function(t){var a=t.data;L=a.response.Global,x=a.response.Countries,e.setState({isLoading:!1})})).catch((function(t){e.setState({isLoading:!1,failed:!0})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(C,null):this.state.failed?r.a.createElement(A,null):r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"stat-bar"},"World Info"),r.a.createElement(w,{data:L}),r.a.createElement("div",{className:"Graph-Wrapper"},r.a.createElement(S,{data:W("Confirmed"),type:"Confirmed"}),r.a.createElement(S,{data:W("Deaths"),type:"Deaths"}),r.a.createElement(S,{data:W("Recovered"),type:"Recovered"}),r.a.createElement(S,{data:W("Active"),type:"Active"})),r.a.createElement(R,{data:x})),r.a.createElement(d,null))}}]),a}(r.a.Component),I=function(e){Object(E.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={isLoading:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="/api"+window.location.pathname;p.a.get(t).then((function(t){for(var a=t.data,n=[],r=[],l=[],o=[],c=0;c<a.length;c++)n[c]=a[c].Confirmed,r[c]=a[c].Recovered,l[c]=a[c].Deaths,o[c]=a[c].Active;console.log(o),e.setState({isLoading:!1})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(C,null):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"Graph-Wrapper"}))}}]),a}(r.a.Component),M=function(){return r.a.createElement(G,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:M}),r.a.createElement(i.a,{path:"/world",exact:!0,component:M}),r.a.createElement(i.a,{path:"/country",component:I}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/covid19.e724fcb8.jpg"},72:function(e,t,a){e.exports=a(193)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.bfce3b9d.chunk.js.map