"use strict";(self.webpackChunkinvestments=self.webpackChunkinvestments||[]).push([[171],{171:(e,s,n)=>{n.r(s),n.d(s,{default:()=>je});var r=n(893),t=n(294);var i=n(427);const c="HprovSAN",a="dKLa7SS9",o="kTQFIqzl",l="dRTfhYy7";var d=n(184),x=n.n(d),h=n(655);var m=function(e){var s=e.className,n=e.children,t=e.to;return(0,r.jsx)(h.rU,{to:t,className:x()("WKh0vaop",s),children:n})},u=(0,t.memo)((function(e){var s=e.globalNews,n=e.sentimentNews,i=(0,t.useCallback)((function(){var e;return s?(0,r.jsxs)("li",{className:c,children:[(0,r.jsx)(m,{to:"",children:s.title}),(0,r.jsxs)("div",{className:a,children:[(0,r.jsxs)("span",{className:o,children:["Published: ",s.publishedDate.split("T")[0]]}),(0,r.jsxs)(m,{to:s.url,className:l,children:["Source: ",s.site]})]})]}):n?(0,r.jsxs)("li",{className:c,children:[(0,r.jsx)(m,{to:"",children:n.title}),(0,r.jsxs)("div",{className:a,children:[(0,r.jsxs)("span",{className:o,children:["Published: ",n.publishedDate.split("T")[0]]}),(0,r.jsxs)(m,{to:n.url,className:l,children:["Source: ",n.site]}),(0,r.jsxs)("span",{className:"t05kjASm",children:["Ticker: ",(0,r.jsx)(h.rU,{to:"/company/".concat(n.symbol),className:"ykaRgUgy",children:n.symbol})]}),(0,r.jsxs)("span",{className:"YebIpf1j",children:["Sentiment: ",(0,r.jsx)("span",{className:x()("g3_435vt",(e={},e.nmn36LlE="Negative"===n.sentiment,e.nOwd0F0L="Positive"===n.sentiment,e.sFgeyTr0="Neutral"===n.sentiment,e)),children:n.sentiment})]})]})]}):void 0}),[s,n]);return(0,r.jsx)(r.Fragment,{children:i()})}));const j={title:"hHbMGHZm",text:"YomIwkzs",bordered:"yLgksjOh",left:"DSxJtAeD",center:"jq_H8RuU",right:"g7jwY_vb"};var g=(0,t.memo)((function(e){var s,n=e.className,t=e.title,i=e.text,c=e.bordered,a=void 0!==c&&c,o=e.align,l=void 0===o?"left":o,d=e.size,h=e.marginTop;return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("h2",{className:x()(j.title,n,(s={},s[j[l]]=l,s[j.bordered]=!0===a,s)),style:{fontSize:"".concat(d,"px"),marginTop:"".concat(h,"px")},children:t}),i&&(0,r.jsx)("p",{className:x()(j.text,n),children:i})]})})),v=n(295),f=v.I0,b=function(e){return e.globalNews.news},N=function(e){return e.globalNews.isLoading},p=function(e){return e.globalNews.error},w=n(561);const L="U4GCn3Ig",P=t.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:y,Provider:F}=P;const k=t.forwardRef((({bsPrefix:e,variant:s,animation:n="border",size:i,as:c="div",className:a,...o},l)=>{const d=`${e=function(e,s){const{prefixes:n}=(0,t.useContext)(P);return e||n[s]||s}(e,"spinner")}-${n}`;return(0,r.jsx)(c,{ref:l,...o,className:x()(a,d,i&&`${d}-${i}`,s&&`text-${s}`)})}));k.displayName="Spinner";const H=k;var S=(0,t.memo)((function(){return(0,r.jsx)(H,{animation:"border",role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})),T=(0,t.memo)((function(e){var s=e.isLoading,n=e.error,t=e.title,c=e.boxWidth,a=e.boxHeight,o=e.align,l={width:"".concat(c,"px"),height:"".concat(a,"px")};return s?(0,r.jsxs)(i.Y,{className:L,style:l,children:[(0,r.jsx)(g,{title:t,bordered:!0,align:o||"center",size:18}),(0,r.jsx)(S,{})]}):n?(0,r.jsxs)(i.Y,{className:L,style:l,children:[(0,r.jsx)(g,{title:t,bordered:!0,align:o,size:18}),(0,r.jsx)(g,{title:n,align:o||"center",size:18,marginTop:150})]}):void 0})),Y=(0,t.memo)((function(){var e=(0,v.v9)(b),s=(0,v.v9)(N),n=(0,v.v9)(p),c=f();return(0,t.useEffect)((function(){c((0,w.m)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{isLoading:s,error:n,title:"Global News",boxWidth:860,boxHeight:370,align:"left"}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(g,{title:"Global News",className:"HQLKN_oD",bordered:!0}),(0,r.jsx)("ul",{className:"VGpXr_EX",children:e.slice(0,10).map((function(e){return(0,r.jsx)(u,{globalNews:e},e.text)}))})]})]})}));var z=function(e){return e.sentimentNews.news},C=function(e){return e.sentimentNews.isLoading},E=function(e){return e.sentimentNews.error},G=n(600),W=n(706),D=(0,t.memo)((function(){var e=(0,W.v9)(z),s=(0,W.v9)(C),n=(0,W.v9)(E),c=f();return(0,t.useEffect)((function(){c((0,G.G)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{isLoading:s,error:n,title:"Global News",boxWidth:860,boxHeight:370,align:"left"}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(g,{title:"Sentiment News",className:"sQkDtyVt",bordered:!0}),(0,r.jsx)("ul",{className:"SYuEsYwX",children:e.slice(0,10).map((function(e){return(0,r.jsx)(u,{sentimentNews:e},e.title)}))})]})]})}));const A="NF0KGGhH",K="eEZMsCfW",I="DTKEWAf0",M="Bq1aiJFW",B="miB1DrHA";var R=(0,t.memo)((function(e){var s=e.topData,n=e.sectorPerformance,t=e.indexes,i=e.sentiment;return void 0!==s?(0,r.jsxs)("table",{className:A,children:[(0,r.jsx)("thead",{className:K,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Ticker"}),(0,r.jsx)("th",{children:"Price"}),(0,r.jsx)("th",{children:"Change"}),(0,r.jsx)("th",{children:"Change%"})]})}),(0,r.jsx)("tbody",{children:s.map((function(e){var s,n;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(h.rU,{to:"/company/".concat(e.symbol),children:e.symbol})}),(0,r.jsx)("td",{children:e.price.toFixed(2)}),(0,r.jsx)("td",{className:x()((s={},s[I]="positive"===i||e.change>0,s[M]="negative"===i||e.change<0,s[B]=e.changesPercentage>=0,s)),children:e.change.toFixed(2)}),(0,r.jsxs)("td",{className:x()((n={},n[I]="positive"===i||e.changesPercentage>0,n[M]="negative"===i||e.changesPercentage<0,n[B]=e.changesPercentage>=0,n)),children:[e.changesPercentage.toFixed(1),"%"]})]},e.symbol)}))})]}):void 0!==n?(0,r.jsxs)("table",{className:A,children:[(0,r.jsx)("thead",{className:K,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Sector"}),(0,r.jsx)("th",{children:"Change%"})]})}),(0,r.jsx)("tbody",{children:n.map((function(e){var s;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.sector}),(0,r.jsx)("td",{className:x()((s={},s[I]="positive"===i||Number(e.changesPercentage.replace("%",""))>0,s[M]="negative"===i||Number(e.changesPercentage.replace("%",""))<0,s[B]=Number(e.changesPercentage.replace("%",""))>=0,s)),children:Number(e.changesPercentage.replace("%","")).toFixed(1)+"%"})]},e.sector)}))})]}):void 0!==t?(0,r.jsxs)("table",{className:A,children:[(0,r.jsx)("thead",{className:K,children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Ticker"}),(0,r.jsx)("th",{children:"Price"}),(0,r.jsx)("th",{children:"Change"}),(0,r.jsx)("th",{children:"Change%"})]})}),(0,r.jsx)("tbody",{children:t.map((function(e){var s,n;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.symbol}),(0,r.jsx)("td",{children:Math.round(e.price).toLocaleString()}),(0,r.jsx)("td",{className:x()((s={},s[I]="positive"===i||e.change>0,s[M]="negative"===i||e.change<0,s)),children:e.change.toFixed(1).toLocaleString()}),(0,r.jsxs)("td",{className:x()((n={},n[I]="positive"===i||e.changesPercentage>0,n[M]="negative"===i||e.changesPercentage<0,n)),children:[e.changesPercentage.toFixed(1),"%"]})]},e.symbol)}))})]}):void 0})),U=function(e){return e.gainers.gainers},$=function(e){return e.gainers.isLoading},_=function(e){return e.gainers.error},O=n(450),X=(0,t.memo)((function(){var e=(0,v.v9)(U),s=(0,v.v9)($),n=(0,v.v9)(_),c=f();return(0,t.useEffect)((function(){c((0,O.G)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{error:n,isLoading:s,title:"Top Gainers",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{className:"GXBHwaEz",children:[(0,r.jsx)(g,{title:"Top Gainers",bordered:!0,align:"center",size:18}),(0,r.jsx)(R,{topData:e.slice(0,10),sentiment:"positive"})]})]})})),q=function(e){return e.loosers.loosers},Q=function(e){return e.loosers.isLoading},V=function(e){return e.loosers.error},J=n(200),Z=(0,t.memo)((function(){var e=(0,v.v9)(q),s=(0,v.v9)(Q),n=(0,v.v9)(V),c=f();return(0,t.useEffect)((function(){c((0,J.c)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{isLoading:s,error:n,title:"Top Loosers",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(g,{title:"Top Loosers",bordered:!0,align:"center",size:18}),(0,r.jsx)(R,{topData:e.slice(0,10),sentiment:"negative"})]})]})})),ee=n(990),se=function(e){return e.mostActive.tickers},ne=function(e){return e.mostActive.isLoading},re=function(e){return e.mostActive.error},te=(0,t.memo)((function(){var e=(0,v.v9)(se),s=(0,v.v9)(ne),n=(0,v.v9)(re),c=f();return(0,t.useEffect)((function(){c((0,ee.R)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{isLoading:s,error:n,title:"Most Active",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(g,{title:"Most Active",bordered:!0,align:"center",size:18}),(0,r.jsx)(R,{topData:e.slice(0,10)})]})]})})),ie=function(e){return e.performance.sectors},ce=function(e){return e.performance.isLoading},ae=function(e){return e.performance.error},oe=n(27),le=(0,t.memo)((function(){var e=(0,v.v9)(ie),s=(0,v.v9)(ce),n=(0,v.v9)(ae),c=f();return(0,t.useEffect)((function(){c((0,oe.E)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{error:n,isLoading:s,title:"Top Gainers",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(g,{title:"Sector Performance",bordered:!0,align:"center",size:18}),(0,r.jsx)(R,{sectorPerformance:e})]})]})})),de=function(e){return e.indexes.indexes},xe=function(e){return e.indexes.isLoading},he=function(e){return e.indexes.error},me=n(285),ue=(0,t.memo)((function(){var e=(0,v.v9)(de),s=(0,v.v9)(xe),n=(0,v.v9)(he),c=f();return(0,t.useEffect)((function(){c((0,me.S)())}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{isLoading:s,error:n,title:"Market Indexes",boxWidth:330,boxHeight:391}),(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(g,{title:"Market Indexes",bordered:!0,align:"center",size:18}),(0,r.jsx)(R,{indexes:e.slice(0,10)})]})]})}));const je=(0,t.memo)((function(){return(0,r.jsx)("div",{className:"big-container",children:(0,r.jsxs)("div",{className:"ApPPYm3Y",children:[(0,r.jsxs)("div",{className:"K7o7OOmK",children:[(0,r.jsx)(te,{}),(0,r.jsx)(X,{}),(0,r.jsx)(Z,{})]}),(0,r.jsxs)("div",{className:"RWw1bBd3",children:[(0,r.jsx)(Y,{}),(0,r.jsx)(D,{})]}),(0,r.jsxs)("div",{className:"KVpBzCHs",children:[(0,r.jsx)(ue,{}),(0,r.jsx)(le,{})]})]})})}))}}]);