"use strict";(self.webpackChunkinvestments=self.webpackChunkinvestments||[]).push([[100],{100:(e,n,s)=>{s.r(n),s.d(n,{default:()=>ae});var r=s(893),t=s(294);var i=s(427);const c="HprovSAN",a="dKLa7SS9",o="kTQFIqzl",l="dRTfhYy7";var d=s(438),h=s(655),x=s(184),u=s.n(x),m=(0,t.memo)((function(e){var n=e.globalNews,s=e.sentimentNews,i=(0,t.useCallback)((function(){var e;return n?(0,r.jsxs)("li",{className:c,children:[(0,r.jsx)(d.H,{to:"",children:n.title}),(0,r.jsxs)("div",{className:a,children:[(0,r.jsxs)("span",{className:o,children:["Published: ",n.publishedDate.split("T")[0]]}),(0,r.jsxs)(d.H,{to:n.url,className:l,children:["Source: ",n.site]})]})]}):s?(0,r.jsxs)("li",{className:c,children:[(0,r.jsx)(d.H,{to:"",children:s.title}),(0,r.jsxs)("div",{className:a,children:[(0,r.jsxs)("span",{className:o,children:["Published: ",s.publishedDate.split("T")[0]]}),(0,r.jsxs)(d.H,{to:s.url,className:l,children:["Source: ",s.site]}),(0,r.jsxs)("span",{className:"t05kjASm",children:["Ticker: ",(0,r.jsx)(h.rU,{to:"/company/".concat(s.symbol),className:"ykaRgUgy",children:s.symbol})]}),(0,r.jsxs)("span",{className:"YebIpf1j",children:["Sentiment: ",(0,r.jsx)("span",{className:u()("g3_435vt",(e={},e.nmn36LlE="Negative"===s.sentiment,e.nOwd0F0L="Positive"===s.sentiment,e.sFgeyTr0="Neutral"===s.sentiment,e)),children:s.sentiment})]})]})]}):void 0}),[n,s]);return(0,r.jsx)(r.Fragment,{children:i()})})),j=s(22),g=s(217),v=s(998),f=function(e){return e.globalNews.news},N=function(e){return e.globalNews.isLoading},b=function(e){return e.globalNews.error},p=s(561),P=s(730),w=(0,t.memo)((function(){var e=(0,v.v9)(f),n=(0,v.v9)(N),s=(0,v.v9)(b),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,p.m)())}),[c]),(0,r.jsx)(P.z,{isLoading:n,error:s,title:"Global News",boxWidth:860,boxHeight:370,children:(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(j.x,{title:"Global News",className:"HQLKN_oD",bordered:!0}),(0,r.jsx)("ul",{className:"VGpXr_EX",children:e.slice(0,10).map((function(e){return(0,r.jsx)(m,{globalNews:e},e.text)}))})]})})}));var L=function(e){return e.sentimentNews.news},T=function(e){return e.sentimentNews.isLoading},y=function(e){return e.sentimentNews.error},H=s(600),S=(0,t.memo)((function(){var e=(0,v.v9)(L),n=(0,v.v9)(T),s=(0,v.v9)(y),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,H.G)())}),[c]),(0,r.jsx)(P.z,{isLoading:n,error:s,title:"Sentiment News",boxWidth:860,boxHeight:370,children:(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(j.x,{title:"Sentiment News",className:"sQkDtyVt",bordered:!0}),(0,r.jsx)("ul",{className:"SYuEsYwX",children:e.slice(0,10).map((function(e){return(0,r.jsx)(m,{sentimentNews:e},e.title)}))})]})})}));const k="NF0KGGhH",E="eEZMsCfW",F="DTKEWAf0",z="Bq1aiJFW",Y="miB1DrHA";var W=(0,t.memo)((function(e){var n=e.topData,s=e.sectorPerformance,t=e.indexes,i=e.sentiment;return void 0!==n?(0,r.jsxs)("table",{className:k,children:[(0,r.jsx)("thead",{className:E,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Ticker"}),(0,r.jsx)("th",{children:"Price"}),(0,r.jsx)("th",{children:"Change"}),(0,r.jsx)("th",{children:"Change%"})]})}),(0,r.jsx)("tbody",{children:n.map((function(e){var n,s;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(h.rU,{to:"/company/".concat(e.symbol),children:e.symbol})}),(0,r.jsx)("td",{children:e.price.toFixed(2)}),(0,r.jsx)("td",{className:u()((n={},n[F]="positive"===i||e.change>0,n[z]="negative"===i||e.change<0,n[Y]=e.changesPercentage>=0,n)),children:e.change.toFixed(2)}),(0,r.jsxs)("td",{className:u()((s={},s[F]="positive"===i||e.changesPercentage>0,s[z]="negative"===i||e.changesPercentage<0,s[Y]=e.changesPercentage>=0,s)),children:[e.changesPercentage.toFixed(1),"%"]})]},e.symbol)}))})]}):void 0!==s?(0,r.jsxs)("table",{className:k,children:[(0,r.jsx)("thead",{className:E,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Sector"}),(0,r.jsx)("th",{children:"Change%"})]})}),(0,r.jsx)("tbody",{children:s.map((function(e){var n;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.sector}),(0,r.jsx)("td",{className:u()((n={},n[F]="positive"===i||Number(e.changesPercentage.replace("%",""))>0,n[z]="negative"===i||Number(e.changesPercentage.replace("%",""))<0,n[Y]=Number(e.changesPercentage.replace("%",""))>=0,n)),children:Number(e.changesPercentage.replace("%","")).toFixed(1)+"%"})]},e.sector)}))})]}):void 0!==t?(0,r.jsxs)("table",{className:k,children:[(0,r.jsx)("thead",{className:E,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Ticker"}),(0,r.jsx)("th",{children:"Price"}),(0,r.jsx)("th",{children:"Change"}),(0,r.jsx)("th",{children:"Change%"})]})}),(0,r.jsx)("tbody",{children:t.map((function(e){var n,s;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.symbol}),(0,r.jsx)("td",{children:Math.round(e.price).toLocaleString()}),(0,r.jsx)("td",{className:u()((n={},n[F]="positive"===i||e.change>0,n[z]="negative"===i||e.change<0,n)),children:e.change.toFixed(1).toLocaleString()}),(0,r.jsxs)("td",{className:u()((s={},s[F]="positive"===i||e.changesPercentage>0,s[z]="negative"===i||e.changesPercentage<0,s)),children:[e.changesPercentage.toFixed(1),"%"]})]},e.symbol)}))})]}):void 0})),A=function(e){return e.gainers.gainers},C=function(e){return e.gainers.isLoading},D=function(e){return e.gainers.error},G=s(450),K=(0,t.memo)((function(){var e=(0,v.v9)(A),n=(0,v.v9)(C),s=(0,v.v9)(D),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,G.G)())}),[c]),(0,r.jsx)(P.z,{isLoading:n,error:s,title:"Top Gainers",align:"center",boxWidth:330,boxHeight:391,children:(0,r.jsxs)(i.Y,{className:"GXBHwaEz",children:[(0,r.jsx)(j.x,{title:"Top Gainers",bordered:!0,align:"center",size:18}),(0,r.jsx)(W,{topData:e.slice(0,10),sentiment:"positive"})]})})})),M=function(e){return e.loosers.loosers},B=function(e){return e.loosers.isLoading},I=function(e){return e.loosers.error},R=s(200),X=s(562),O=(0,t.memo)((function(){var e=(0,v.v9)(M),n=(0,v.v9)(B),s=(0,v.v9)(I),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,R.c)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X.o,{isLoading:n,error:s,title:"Top Loosers",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(j.x,{title:"Top Loosers",bordered:!0,align:"center",size:18}),(0,r.jsx)(W,{topData:e.slice(0,10),sentiment:"negative"})]})]})})),Q=s(990),U=function(e){return e.mostActive.tickers},V=function(e){return e.mostActive.isLoading},_=function(e){return e.mostActive.error},q=(0,t.memo)((function(){var e=(0,v.v9)(U),n=(0,v.v9)(V),s=(0,v.v9)(_),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,Q.R)())}),[c]),(0,r.jsx)(P.z,{isLoading:n,error:s,title:"Most Active",align:"center",boxWidth:330,boxHeight:391,children:(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(j.x,{title:"Most Active",bordered:!0,align:"center",size:18}),(0,r.jsx)(W,{topData:e.slice(0,10)})]})})})),J=function(e){return e.performance.sectors},Z=function(e){return e.performance.isLoading},$=function(e){return e.performance.error},ee=s(27),ne=(0,t.memo)((function(){var e=(0,v.v9)(J),n=(0,v.v9)(Z),s=(0,v.v9)($),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,ee.E)())}),[c]),(0,r.jsx)(P.z,{isLoading:n,error:s,title:"Sector Performance",align:"center",boxWidth:330,boxHeight:391,children:(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(j.x,{title:"Sector Performance",bordered:!0,align:"center",size:18}),(0,r.jsx)(W,{sectorPerformance:e})]})})})),se=function(e){return e.indexes.indexes},re=function(e){return e.indexes.isLoading},te=function(e){return e.indexes.error},ie=s(285),ce=(0,t.memo)((function(){var e=(0,v.v9)(se),n=(0,v.v9)(re),s=(0,v.v9)(te),c=(0,g.T)();return(0,t.useEffect)((function(){c((0,ie.S)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X.o,{isLoading:n,error:s,title:"Market Indexes",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(j.x,{title:"Market Indexes",bordered:!0,align:"center",size:18}),(0,r.jsx)(W,{indexes:e.slice(0,10)})]})]})}));const ae=(0,t.memo)((function(){return(0,r.jsx)("div",{className:"big-container",children:(0,r.jsxs)("div",{className:"ApPPYm3Y",children:[(0,r.jsxs)("div",{className:"K7o7OOmK",children:[(0,r.jsx)(q,{}),(0,r.jsx)(K,{}),(0,r.jsx)(O,{})]}),(0,r.jsxs)("div",{className:"RWw1bBd3",children:[(0,r.jsx)(w,{}),(0,r.jsx)(S,{})]}),(0,r.jsxs)("div",{className:"KVpBzCHs",children:[(0,r.jsx)(ce,{}),(0,r.jsx)(ne,{})]})]})})}))}}]);