(this.webpackJsonpcovid19stat=this.webpackJsonpcovid19stat||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(68),o=a.n(l),c=a(7),s=a(1);a(76),a(77),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(3),u=a(4),m=a(6),d=a(5),h=a(27),v=a.n(h),p=(a(50),a(8));var E=function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},b=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={close:"show"},e.closeChart=e.closeChart.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"closeChart",value:function(){this.setState({close:"hide"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"GraphModal "+this.state.close},r.a.createElement("button",{className:"close",onClick:this.closeChart},"X"),r.a.createElement("div",null,r.a.createElement(E,null)))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={show:!1},e.showChart=e.showChart.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"showChart",value:function(){this.setState((function(e){return{show:!e.show}}))}},{key:"render",value:function(){var e=this.props.color,t="hide";return this.props.chart&&(t="show  chart-btn"),this.state.show?r.a.createElement("div",{className:"case",style:{backgroundColor:e}},r.a.createElement("div",null,this.props.number),r.a.createElement("div",null,this.props.type),r.a.createElement("button",{onClick:this.showChart,class:t}," View Chart "),r.a.createElement(b,null)):r.a.createElement("div",{className:"case",style:{backgroundColor:e}},r.a.createElement("div",null,this.props.number),r.a.createElement("div",null,this.props.type),r.a.createElement("button",{onClick:this.showChart,class:t}," View Chart  "))}}]),a}(r.a.Component);var y=function(e){var t=e.data.TotalConfirmed,a=e.data.TotalRecovered,n=e.data.TotalDeaths,l=t-a-n,o=e.data.NewConfirmed,c=e.data.NewRecovered,s=e.data.NewDeaths;return r.a.createElement("div",{className:"caseBar"},r.a.createElement(f,{number:t,type:"Total Confirmed Case",color:"#000000",chart:!0}),r.a.createElement(f,{number:a,type:"Total Recovered Case",color:"#12f432",chart:!0}),r.a.createElement(f,{number:l,type:"Total Active Case",color:"#701722",chart:!0}),r.a.createElement(f,{number:n,type:"Total Death Case",color:"#ff0000",chart:!0}),r.a.createElement(f,{number:o,type:"Daily Confirmed Case",color:"#000000"}),r.a.createElement(f,{number:c,type:"Daily Recovered Case",color:"#12f432"}),r.a.createElement(f,{number:s,type:"Daily Death Case",color:"#ff0000"}))};var C=function(e){var t=e.table[1][1]-e.table[1][2]-e.table[1][3],a=e.table[1][5]-e.table[1][6]-e.table[1][7],n="/country/"+e.table[1][9];return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[0])),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][0]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][1]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][2]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},t," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][3]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][5]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][6]," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},a," ")),r.a.createElement("td",null,r.a.createElement(c.b,{to:n},e.table[1][7]," ")))};var g,w,N,D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={sortByConfirmed:!0,sortByRecoverd:!1,sortByDeaths:!1,sortByActive:!1,sortByDailyConfirmed:!1,sortByDailyRecovered:!1,sortByDailyDeaths:!1,sortByDailyActive:!1,sortByCountry:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"tableWrapper"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"S/N"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Confirmed Case"),r.a.createElement("th",null,"Recovered Case"),r.a.createElement("th",null,"Active Case"),r.a.createElement("th",null,"Total Deaths"),r.a.createElement("th",null,"Daily Confirmed Case"),r.a.createElement("th",null,"Daily Recovered Case"),r.a.createElement("th",null,"Daily Rise in Cases "),r.a.createElement("th",null,"Daily Death Case"))),r.a.createElement("tbody",null,function(e){for(var t=[],a=0;a<e.length;a++){var n=e[a].TotalConfirmed-e[a].TotalRecovered-e[a].TotalDeaths,l=e[a].TotalConfirmed-e[a].TotalRecovered-e[a].TotalDeaths;t[a]=[e[a].Country,e[a].TotalConfirmed,e[a].TotalRecovered,e[a].TotalDeaths,n,e[a].NewConfirmed,e[a].NewRecovered,e[a].NewDeaths,l,e[a].Slug]}t.sort((function(e,t){return t[1]-e[1]}));for(var o=0;o<t.length;o++)t[o]=[o+1,t[o]];return t.map((function(e){return r.a.createElement(C,{table:e})}))}(this.props.data))))}}]),a}(r.a.Component),j=a(18);function O(e,t,a){var n=[],r=[],l=t-a;N=e.length;for(var o=0;o<a;o++)n[o]=e[o+l][0],r[o]=e[o+l][1];return[n,r]}var k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={position:20,max:N},e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"render",value:function(){return function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20;t.sort((function(e,t){return t[1]-e[1]}));var r=O(t,a,n);w={labels:r[0],datasets:[{label:"Country",backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:r[1]}]};var l=a-n;g={title:{display:!0,text:"Showing Top "+l+" to "+a+" Daily "+e+" case by Country ",fontSize:15},legend:{display:!1,position:"top"}}}(this.props.type,this.props.data,this.state.position),r.a.createElement("div",{className:"Graph"},r.a.createElement("div",null,r.a.createElement(j.Bar,{data:w,options:g})),r.a.createElement("input",{type:"range",min:20,max:N,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component),R=a(70),T=a.n(R);var S=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("img",{src:T.a,className:"navbar-logo",alt:"logo"}),"Covid19 Info ")};var B=function(e){return r.a.createElement("div",{className:"failed"},r.a.createElement("center",null,r.a.createElement("div",{className:"failed-msg"},"Failed To Retrieve data please reload.",r.a.createElement(c.b,{to:"/"}," reload "))))};var x=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"socials",href:"https://www.twitter.com/evuetaphajoshua"},"Twitter"),r.a.createElement("br",null),r.a.createElement("a",{className:"socials",href:"https://www.github.com/joshuajee"},"Github"))},A=[],I=[];function W(e){for(var t=0,a=[],n=0;n<A.length;n++){switch(e){case"Confirmed":a[t]=[A[n].Country,A[n].NewConfirmed];break;case"Deaths":a[t]=[A[n].Country,A[n].NewDeaths];break;case"Recovered":a[t]=[A[n].Country,A[n].NewRecovered];break;case"Active":a[t]=[A[n].Country,A[n].NewConfirmed-A[n].NewDeaths-A[n].NewRecovered]}t++}return a}var G,L,M,z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={isLoading:!0,failed:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("/api/home").then((function(t){var a=t.data;I=a.response.Global,A=a.response.Countries,e.setState({isLoading:!1})})).catch((function(t){e.setState({isLoading:!1,failed:!0})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(E,null):this.state.failed?r.a.createElement(B,null):r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"stat-bar"},"World Info"),r.a.createElement(y,{data:I}),r.a.createElement("div",{className:"Graph-Wrapper"},r.a.createElement(k,{data:W("Confirmed"),type:"Confirmed"}),r.a.createElement(k,{data:W("Deaths"),type:"Deaths"}),r.a.createElement(k,{data:W("Recovered"),type:"Recovered"}),r.a.createElement(k,{data:W("Active"),type:"Active"})),r.a.createElement(D,{data:A})),r.a.createElement(x,null))}}]),a}(r.a.Component);function J(e,t,a,n){var r=[],l=[],o=a-n;M=e.length;for(var c=0;c<n;c++)r[c]=e[c+o],l[c]=t[c+o];return[r,l]}var V,F,X,$=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={close:"show",position:20,max:M},e.close=e.close.bind(Object(p.a)(e)),e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"close",value:function(){this.setState({close:"hide"})}},{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"componentDidMount",value:function(){this.setState({position:parseInt(M)})}},{key:"render",value:function(){return function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=J(t,a,n,r);L={labels:o[1],datasets:[{label:"Country",backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:o[0]}]};var c=n-r;G={title:{display:!0,text:"Showing culmulative "+c+" to day "+n+" "+e+" case in "+l,fontSize:15},legend:{display:!1,position:"top"}}}(this.props.type,this.props.data,this.props.date,this.state.position,20,this.props.countryName),r.a.createElement("div",{className:"Graph"},r.a.createElement(j.Bar,{data:L,options:G}),r.a.createElement("input",{type:"range",min:20,max:M,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component);function q(e,t,a,n){var r=[],l=[],o=a-n;X=e.length;for(var c=0;c<n;c++)r[c]=e[c+o],l[c]=t[c+o];return[r,l]}var H=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={close:"show",position:20,max:X},e.close=e.close.bind(Object(p.a)(e)),e.handleEvent=e.handleEvent.bind(Object(p.a)(e)),e}return Object(u.a)(a,[{key:"handleEvent",value:function(e){var t=e.target,a=(t.name,t.value);this.setState({position:parseInt(a)})}},{key:"componentDidMount",value:function(){this.setState({position:parseInt(X)})}},{key:"render",value:function(){return function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=q(t,a,n,r);F={labels:o[1],datasets:[{label:"Country",backgroundColor:"rgba(75, 192, 192, 1)",borderColor:"rgba(0, 0, 0, 1)",borderWidth:2,data:o[0]}]};var c=n-r;V={title:{display:!0,text:"Showing daily reported case from day "+c+" to day "+n+" "+e+" case in "+l,fontSize:15},legend:{display:!1,position:"top"}}}(this.props.type,this.props.data,this.props.date,this.state.position,20,this.props.countryName),r.a.createElement("div",{className:"Graph"},r.a.createElement(j.Line,{data:F,options:V}),r.a.createElement("input",{type:"range",min:20,max:X,value:this.state.position,step:1,onChange:this.handleEvent}))}}]),a}(r.a.Component);var K=function(e){var t=e.confirmed,a=e.recovered,n=e.active,l=e.deaths;t.sort((function(e,t){return e-t})),a.sort((function(e,t){return e-t})),n.sort((function(e,t){return e-t})),l.sort((function(e,t){return e-t}));var o=t[t.length-1]-t[t.length-2],c=a[a.length-1]-a[a.length-2],s=(n[n.length-1],n[n.length-2],l[l.length-1]-l[l.length-2]);return r.a.createElement("div",{className:"caseBar"},r.a.createElement(f,{number:t[t.length-1],type:"Total Confirmed Case",color:"#000000"}),r.a.createElement(f,{number:a[a.length-1],type:"Total Recovered Case",color:"#12f432"}),r.a.createElement(f,{number:n[n.length-1],type:"Total Active Case",color:"#701722"}),r.a.createElement(f,{number:l[l.length-1],type:"Total Death Case",color:"#ff0000"}),r.a.createElement(f,{number:o,type:"Daily Confirmed Case",color:"#000000"}),r.a.createElement(f,{number:c,type:"Daily Recovered Case",color:"#12f432"}),r.a.createElement(f,{number:s,type:"Daily Death Case",color:"#ff0000"}))},P=[],Q=[],U=[],Y=[],Z=[],_=[],ee=[],te=[],ae=[],ne=[],re="",le=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={isLoading:!0,failed:!1},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="/api"+window.location.pathname;v.a.get(t).then((function(t){var a=t.data;re=a[0].Country;for(var n=0;n<a.length;n++)P[n]=a[n].Confirmed,Q[n]=a[n].Recovered,U[n]=a[n].Deaths,Y[n]=a[n].Active,Z[n]=a[n].Date.substring(0,10);P.sort(),Q.sort(),U.sort(),Y.sort(),Z.sort();for(var r=1;r<a.length;r++)_[r-1]=a[r].Confirmed-a[r-1].Confirmed,ee[r-1]=a[r].Recovered-a[r-1].Recovered,te[r-1]=a[r].Deaths-a[r-1].Deaths,ae[r-1]=a[r].Active,ne[r-1]=a[r].Date.substring(0,10);e.setState({isLoading:!1,failed:!1})}))}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(E,null):this.state.failed?r.a.createElement(B,null):r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"stat-bar"},re," Info"),r.a.createElement(K,{confirmed:P,recovered:Q,active:Y,deaths:U}),r.a.createElement("div",{className:"Graph-Wrapper"},r.a.createElement($,{data:P,date:Z,type:"Confirmed",countryName:re}),r.a.createElement($,{data:Q,date:Z,type:"Recovered",countryName:re}),r.a.createElement($,{data:Y,date:Z,type:"Active",countryName:re}),r.a.createElement($,{data:U,date:Z,type:"Deaths",countryName:re}),r.a.createElement(H,{data:_,date:ne,type:"Confirmed",countryName:re}),r.a.createElement(H,{data:ee,date:ne,type:"Recovered",countryName:re}),r.a.createElement(H,{data:ae,date:ne,type:"Active",countryName:re}),r.a.createElement(H,{data:te,date:ne,type:"Deaths",countryName:re}))),r.a.createElement(x,null))}}]),a}(r.a.Component),oe=function(){return r.a.createElement(z,null)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(s.a,{path:"/",exact:!0,component:oe}),r.a.createElement(s.a,{path:"/world",exact:!0,component:oe}),r.a.createElement(s.a,{path:"/country",component:le}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/covid19.e724fcb8.jpg"},71:function(e,t,a){e.exports=a(192)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.56138472.chunk.js.map