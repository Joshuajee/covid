(this.webpackJsonpcovid19stat=this.webpackJsonpcovid19stat||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(71),o=a.n(l),c=a(8),i=a(2);a(79),a(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(4),u=a(5),m=a(7),d=a(6),h=a(28),v=a.n(h),p=(a(54),a(12));var E=function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={close:"show"},e.closeChart=e.closeChart.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"closeChart",value:function(){this.setState({close:"hide"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"GraphModal "+this.state.close},r.a.createElement("button",{className:"close",onClick:this.closeChart},"X"),r.a.createElement("div",null,r.a.createElement(E,null)))}}]),a}(r.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={show:!1},e.showChart=e.showChart.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"showChart",value:function(){this.setState((function(e){return{show:!e.show}}))}},{key:"render",value:function(){var e=this.props.color,t="hide";return this.props.chart&&(t="show  chart-btn"),this.state.show?r.a.createElement("div",{className:"case",style:{backgroundColor:e}},r.a.createElement("div",null,this.props.number),r.a.createElement("div",null,this.props.type),r.a.createElement("button",{onClick:this.showChart,class:t}," View Chart "),r.a.createElement(f,null)):r.a.createElement("div",{className:"case",style:{backgroundColor:e}},r.a.createElement("div",null,this.props.number),r.a.createElement("div",null,this.props.type),r.a.createElement("button",{onClick:this.showChart,class:t}," View Chart  "))}}]),a}(r.a.Component);var y=function(e){var t=e.data.TotalConfirmed,a=e.data.TotalRecovered,n=e.data.TotalDeaths,l=t-a-n,o=e.data.NewConfirmed,c=e.data.NewRecovered,i=e.data.NewDeaths;return r.a.createElement("div",{className:"caseBar"},r.a.createElement(b,{number:t,type:"Total Confirmed Case",color:"#000000",chart:!0}),r.a.createElement(b,{number:a,type:"Total Recovered Case",color:"#12f432",chart:!0}),r.a.createElement(b,{number:l,type:"Total Active Case",color:"#701722",chart:!0}),r.a.createElement(b,{number:n,type:"Total Death Case",color:"#ff0000",chart:!0}),r.a.createElement(b,{number:o,type:"Daily Confirmed Case",color:"#000000"}),r.a.createElement(b,{number:c,type:"Daily Recovered Case",color:"#12f432"}),r.a.createElement(b,{number:i,type:"Daily Death Case",color:"#ff0000"}))};var C=function(e){var t=e.table[1][1]-e.table[1][2]-e.table[1][3],a=e.table[1][5]-e.table[1][6]-e.table[1][7],n="/country/"+e.table[1][9];return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[0])),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][0]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][1]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][2]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},t," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][3]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][5]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][6]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},a," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][7]," ")))};var g,w,N,D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={sortByConfirmed:!0,sortByRecoverd:!1,sortByDeaths:!1,sortByActive:!1,sortByDailyConfirmed:!1,sortByDailyRecovered:!1,sortByDailyDeaths:!1,sortByDailyActive:!1,sortByCountry:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tableWrapper"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Confirmed Case"),r.a.createElement("th",null,"Recovered Case"),r.a.createElement("th",null,"Active Case"),r.a.createElement("th",null,"Total Deaths"),r.a.createElement("th",null,"Daily Confirmed Case"),r.a.createElement("th",null,"Daily Recovered Case"),r.a.createElement("th",null,"Daily Rise in Cases "),r.a.createElement("th",null,"Daily Death Case"))),r.a.createElement("tbody",null,function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a].TotalConfirmed-e[a].TotalRecovered-e[a].TotalDeaths,l=e[a].TotalConfirmed-e[a].TotalRecovered-e[a].TotalDeaths;t[a]=[e[a].Country,e[a].TotalConfirmed,e[a].TotalRecovered,e[a].TotalDeaths,n,e[a].NewConfirmed,e[a].NewRecovered,e[a].NewDeaths,l,e[a].Slug]}t.sort((function(e,t){return t[1]-e[1]}));for(var o=0;o<t.length;o++)t[o]=[o+1,t[o]];return t.map((function(e){return r.a.createElement(C,{table:e})}))}(this.props.data))))}}]),a}(r.a.Component),j=a(18),O=20,k=50;function R(e,t,a,n){t.sort((function(e,t){return t[1]-e[1]}));var r=function(e,t,a){var n=[],r=[],l=t-a;N=e.length;for(var o=0;o<a;o++)n[o]=e[o+l][0],r[o]=e[o+l][1];return[n,r]}(t,a,n);w={labels:r[0],datasets:[{label:"Countrires",backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:r[1]}]},g={title:{display:!0,text:"Showing Top "+(a-n)+" to "+a+" Daily "+e+" case by Country ",fontSize:15}}}var T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),e=t.call(this),window.innerWidth<600&&(O=10,k=100),e.state={position:O,max:N},e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"render",value:function(){return window.innerWidth<600&&(O=10,k=100),R(this.props.type,this.props.data,this.state.position,O),r.a.createElement("div",{className:"Graph"},r.a.createElement("div",null,r.a.createElement(j.Bar,{width:100,height:k,data:w,options:g})),r.a.createElement("input",{type:"range",min:O,max:N,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component),S=a(73),B=a.n(S);var W=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{src:B.a,className:"navbar-logo",alt:"logo"}),"Covid19 Info ")};var x=function(e){return r.a.createElement("div",{className:"failed"},r.a.createElement("center",null,r.a.createElement("div",{className:"failed-msg"},"Failed To Retrieve data please reload.",r.a.createElement(c.b,{to:"/"}," reload "))))},A=a(42),I=a(44);var L=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"socials",href:"https://www.twitter.com/evuetaphajoshua"},r.a.createElement(A.a,{icon:I.b})),r.a.createElement("a",{className:"socials",href:"https://www.github.com/joshuajee"},r.a.createElement(A.a,{icon:I.a})))},G=[],M=[];function z(e){for(var t=0,a=[],n=0;n<G.length;n++){switch(e){case"Confirmed":a[t]=[G[n].Country,G[n].NewConfirmed];break;case"Deaths":a[t]=[G[n].Country,G[n].NewDeaths];break;case"Recovered":a[t]=[G[n].Country,G[n].NewRecovered];break;case"Active":a[t]=[G[n].Country,G[n].NewConfirmed-G[n].NewDeaths-G[n].NewRecovered]}t++}return a}var J,V,F,X=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={isLoading:!0,failed:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/home").then((function(t){var a=t.data;M=a.response.Global,G=a.response.Countries,e.setState({isLoading:!1})})).catch((function(t){e.setState({isLoading:!1,failed:!0})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(E,null):this.state.failed?r.a.createElement(x,null):r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"stat-bar"},"World Info"),r.a.createElement(y,{data:M}),r.a.createElement("div",{className:"Graph-Wrapper"},r.a.createElement(T,{data:z("Confirmed"),type:"Confirmed"}),r.a.createElement(T,{data:z("Deaths"),type:"Deaths"}),r.a.createElement(T,{data:z("Recovered"),type:"Recovered"}),r.a.createElement(T,{data:z("Active"),type:"Active"})),r.a.createElement(D,{data:G})),r.a.createElement(L,null))}}]),a}(r.a.Component),$=30,q=50;function H(e,t,a,n){var r=[],l=[],o=a-n;F=e.length;for(var c=0;c<n;c++)r[c]=e[c+o],l[c]=t[c+o];return[r,l]}var K,P,Q,U=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),e=t.call(this),window.innerWidth<600&&($=10,q=100),e.state={close:"show",position:$,max:F},e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"componentDidMount",value:function(){this.setState({position:parseInt(F)})}},{key:"render",value:function(){return window.innerWidth<600&&($=10,q=100),function(e,t,a,n,r){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=H(t,a,n,r);V={labels:o[1],datasets:[{label:l,backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:o[0]}]};var c=n-r;J={title:{display:!0,text:"Showing culmulative "+c+" to day "+n+" "+e+" case in "+l,fontSize:15}}}(this.props.type,this.props.data,this.props.date,this.state.position,$,this.props.countryName),r.a.createElement("div",{className:"Graph"},r.a.createElement(j.Bar,{className:"chart",width:100,height:q,data:V,options:J}),r.a.createElement("input",{type:"range",min:$,max:F,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component),Y=30,Z=50;function _(e,t,a,n){var r=[],l=[],o=a-n;console.log("MaxData "+n),Q=e.length;for(var c=0;c<n;c++)r[c]=e[c+o],l[c]=t[c+o];return[r,l]}var ee=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),e=t.call(this),window.innerWidth<600&&(Y=10,Z=100),e.state={close:"show",position:Y,max:Q},e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"componentDidMount",value:function(){this.setState({position:parseInt(Q)})}},{key:"render",value:function(){return window.innerWidth<600&&(Y=10,Z=100),function(e,t,a,n,r){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=_(t,a,n,r);P={labels:o[1],datasets:[{label:"Country",backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:o[0]}]};var c=n-r;K={title:{display:!0,text:"Showing  "+c+" to day "+n+" "+e+" case in "+l,fontSize:15},legend:{display:!1,position:"top"}}}(this.props.type,this.props.data,this.props.date,this.state.position,Y,this.props.countryName),r.a.createElement("div",{className:"Graph"},r.a.createElement(j.Line,{data:P,width:100,height:Z,options:K}),r.a.createElement("input",{type:"range",min:Y,max:Q,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component);var te=function(e){var t=e.confirmed,a=e.recovered,n=e.active,l=e.deaths;t.sort((function(e,t){return e-t})),a.sort((function(e,t){return e-t})),n.sort((function(e,t){return e-t})),l.sort((function(e,t){return e-t}));var o=t[t.length-1]-t[t.length-2],c=a[a.length-1]-a[a.length-2],i=(n[n.length-1],n[n.length-2],l[l.length-1]-l[l.length-2]);return r.a.createElement("div",{className:"caseBar"},r.a.createElement(b,{number:t[t.length-1],type:"Total Confirmed Case",color:"#000000"}),r.a.createElement(b,{number:a[a.length-1],type:"Total Recovered Case",color:"#12f432"}),r.a.createElement(b,{number:n[n.length-1],type:"Total Active Case",color:"#701722"}),r.a.createElement(b,{number:l[l.length-1],type:"Total Death Case",color:"#ff0000"}),r.a.createElement(b,{number:o,type:"Daily Confirmed Case",color:"#000000"}),r.a.createElement(b,{number:c,type:"Daily Recovered Case",color:"#12f432"}),r.a.createElement(b,{number:i,type:"Daily Death Case",color:"#ff0000"}))},ae=[],ne=[],re=[],le=[],oe=[],ce=[],ie=[],se=[],ue=[],me=[],de="",he=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={isLoading:!0,failed:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="/api"+window.location.pathname;v.a.get(t).then((function(t){var a=t.data;de=a[0].Country;for(var n=0;n<a.length;n++)ae[n]=a[n].Confirmed,ne[n]=a[n].Recovered,re[n]=a[n].Deaths,le[n]=a[n].Active,oe[n]=a[n].Date.substring(0,10);ae.sort((function(e,t){return t-e})),ne.sort((function(e,t){return t-e})),re.sort((function(e,t){return t-e})),le.sort((function(e,t){return t-e})),oe.sort();for(var r=1;r<a.length;r++)ce[r-1]=ae[r-1]-ae[r],ie[r-1]=ne[r-1]-ne[r],se[r-1]=re[r-1]-re[r],ue[r-1]=le[r-1]-le[r],me[r-1]=oe[r].substring(0,10);e.setState({isLoading:!1,failed:!1})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(E,null):this.state.failed?r.a.createElement(x,null):r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"stat-bar"},de," Info"),r.a.createElement(te,{confirmed:ae,recovered:ne,active:le,deaths:re}),r.a.createElement("div",{className:"Graph-Wrapper"},r.a.createElement(U,{data:ae,date:oe,type:"Confirmed",countryName:de}),r.a.createElement(U,{data:ne,date:oe,type:"Recovered",countryName:de}),r.a.createElement(U,{data:le,date:oe,type:"Active",countryName:de}),r.a.createElement(U,{data:re,date:oe,type:"Deaths",countryName:de}),r.a.createElement(ee,{data:ce,date:me,type:"Confirmed",countryName:de}),r.a.createElement(ee,{data:ie,date:me,type:"Recovered",countryName:de}),r.a.createElement(ee,{data:ue,date:me,type:"Active",countryName:de}),r.a.createElement(ee,{data:se,date:me,type:"Deaths",countryName:de}))),r.a.createElement(L,null))}}]),a}(r.a.Component),ve=function(){return r.a.createElement(X,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:ve}),r.a.createElement(i.a,{path:"/world",exact:!0,component:ve}),r.a.createElement(i.a,{path:"/country",component:he}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/covid19.e724fcb8.jpg"},74:function(e,t,a){e.exports=a(197)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.e79a22e0.chunk.js.map