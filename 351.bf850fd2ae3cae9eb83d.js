"use strict";(self.webpackChunkinvestments=self.webpackChunkinvestments||[]).push([[351],{7351:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var s=n(5893),r=n(9974),i=n(7294),o=n(5998),a=n(4143),l=n(3022);const u=(0,i.memo)((function(){var e=(0,o.v9)(r.dt),t=null==e?void 0:e.balance.slice().reverse();return(0,s.jsx)(s.Fragment,{children:t&&(null==t?void 0:t.length)>0?(0,s.jsx)(a.G,{report:t,reportType:"Balance",period:"annual"}):(0,s.jsx)(l.x,{title:"Report not Found",align:"center"})})}))},4143:(e,t,n)=>{n.d(t,{G:()=>p});var s=n(5893),r=n(9974),i=n(7294),o=n(3646),a=(0,i.memo)((function(e){var t=e.sparklineData;return"string"==typeof t[0]&&t.shift(),(0,s.jsx)(s.Fragment,{children:t.length>0?(0,s.jsx)(o.Sparklines,{data:t,children:(0,s.jsx)(o.SparklinesLine,{color:"black"})}):"-"})})),l=n(8712),u=n(5147),h=n(5998);const c="PZqpRO1x";var p=(0,i.memo)((function(e){var t=e.report,n=e.reportType,o=e.period,p=(0,h.v9)(r.Ai),d=(0,i.useMemo)((function(){var e;switch(n){case"Balance":return e={"Cash and Cash Equivalents":[],"Short Term Investments":[],"Cash and Short Term Investments":[],"Net Receivables":[],Inventory:[],"Other Current Assets":[],"Total Current Assets":[],"Property Plant EquipmentNet":[],"Intangible Assets":[],Goodwill:[],"Long Term Investments":[],"Other Non Current Assets":[],"Tax Assets":[],"Total Non Current Assets":[],"Other Assets":[],"Account Payables":[],"Total Assets":[],"Short Term Debt":[],"Tax Payables":[],"Other Current Liabilities":[],"Total Current Liabilities":[],"Long Term Debt":[],"Other non Current Liabilities":[],"Total non Current Liabilities":[],"Other Liabilities":[],"Total Liabilities":[],"Total Equity":[],"Other Total Stockholders Equity":[],"Total Stockholders Equity":[],"Minority Interest":[],"Total Debt":[],"Net Debt":[],"Common Stock (mln stocks)":[]},null==t||t.forEach((function(t){e["Cash and Cash Equivalents"].push(t.cashAndCashEquivalents),e["Short Term Investments"].push(t.shortTermInvestments),e["Cash and Short Term Investments"].push(t.cashAndShortTermInvestments),e["Net Receivables"].push(t.netReceivables),e.Inventory.push(t.inventory),e["Total Assets"].push(t.totalAssets),e["Short Term Debt"].push(t.shortTermDebt),e["Tax Payables"].push(t.taxPayables),e["Other Current Liabilities"].push(t.otherCurrentLiabilities),e["Total Current Liabilities"].push(t.totalCurrentLiabilities),e["Long Term Debt"].push(t.longTermDebt),e["Other non Current Liabilities"].push(t.otherNonCurrentLiabilities),e["Total non Current Liabilities"].push(t.totalNonCurrentLiabilities),e["Other Liabilities"].push(t.otherLiabilities),e["Total Liabilities"].push(t.totalLiabilities),e["Total Equity"].push(t.totalEquity),e["Other Total Stockholders Equity"].push(t.othertotalStockholdersEquity),e["Total Stockholders Equity"].push(t.totalStockholdersEquity),e["Minority Interest"].push(t.minorityInterest),e["Total Debt"].push(t.totalDebt),e["Net Debt"].push(t.netDebt),e["Common Stock (mln stocks)"].push(t.commonStock)})),Object.keys(e).map((function(t){e[t].unshift(t)})),e;case"Income":return e={Revenue:[],"Cost of Revenue":[],"Gross Profit":[],"Gross Profit Ratio %":[],"Research and Development Expenses":[],"General and Administrative Expenses":[],"Selling and Marketing Expenses":[],"Selling General and Administrative Expenses":[],"Other Expenses":[],"Operating Expenses":[],"Interest Income":[],"Interest Expense":[],"Depreciation and Amortization":[],EBITDA:[],"EBITDA Ratio %":[],"Operating Income":[],"Operating Income Ratio %":[],"Income Before Tax":[],"Income Before Tax Ratio %":[],"Income Tax Expense":[],"Net Income":[],"Net Income Ratio %":[],EPS:[],"EPS Diluted":[]},null==t||t.forEach((function(t){e.Revenue.push(t.revenue),e["Cost of Revenue"].push(t.costOfRevenue),e["Gross Profit"].push(t.grossProfit),e["Gross Profit Ratio %"].push(+t.grossProfitRatio),e["Research and Development Expenses"].push(t.researchAndDevelopmentExpenses),e["General and Administrative Expenses"].push(t.generalAndAdministrativeExpenses),e["Selling and Marketing Expenses"].push(t.sellingAndMarketingExpenses),e["Selling General and Administrative Expenses"].push(t.sellingGeneralAndAdministrativeExpenses),e["Other Expenses"].push(t.otherExpenses),e["Operating Expenses"].push(t.operatingExpenses),e["Interest Income"].push(t.interestIncome),e["Interest Expense"].push(t.interestExpense),e["Depreciation and Amortization"].push(t.depreciationAndAmortization),e.EBITDA.push(t.ebitda),e["EBITDA Ratio %"].push(t.ebitdaratio),e["Operating Income"].push(t.operatingIncome),e["Operating Income Ratio %"].push(t.operatingIncomeRatio),e["Income Before Tax"].push(t.incomeBeforeTax),e["Income Before Tax Ratio %"].push(t.incomeBeforeTaxRatio),e["Net Income"].push(t.netIncome),e["Net Income Ratio %"].push(t.netIncomeRatio),e.EPS.push(t.eps),e["EPS Diluted"].push(t.epsdiluted)})),Object.keys(e).map((function(t){e[t].unshift(t)})),e}return null}),[t,n]),m=(0,i.useCallback)((function(e,t){if(console.log(t[0]),"string"!=typeof e){if("number"!=typeof e||!e.toString().includes("."))return(0,l.f)(e);if("string"==typeof t[0]&&-1===t[0].indexOf("EPS"))return(100*e).toFixed(1)}return"string"==typeof t[0]&&-1!==t[0].indexOf("EPS")&&"number"!=typeof e?(0,s.jsxs)(s.Fragment,{children:[e," (",null==p?void 0:p.currency,")"]}):e}),[]);return"quarterly"===o?(0,s.jsxs)(u.Z,{striped:!0,bordered:!0,children:[(0,s.jsx)("thead",{className:c,children:(0,s.jsxs)("tr",{children:[(0,s.jsxs)("th",{children:[null==p?void 0:p.symbol," ",n," Quarterly (mln ",null==p?void 0:p.currency,")"]}),null==t?void 0:t.map((function(e){return(0,s.jsx)("th",{children:"".concat(e.period," ").concat(e.calendarYear)},e.date)})),(0,s.jsx)("th",{children:"Chart"})]})}),(0,s.jsx)("tbody",{children:Object.keys(d).map((function(e){return(0,s.jsx)(s.Fragment,{children:d[e]&&d[e].length>1?(0,s.jsxs)("tr",{children:[d[e].map((function(t,n){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("td",{align:"center",children:m(t,d[e])},n)})})),(0,s.jsx)("td",{children:(0,s.jsx)(a,{sparklineData:d[e]})})]},e):null})}))})]}):(0,s.jsxs)(u.Z,{striped:!0,bordered:!0,children:[(0,s.jsx)("thead",{className:c,children:(0,s.jsxs)("tr",{children:[(0,s.jsxs)("th",{children:[null==p?void 0:p.symbol," ",n," Annual (mln ",null==p?void 0:p.currency,")"]}),null==t?void 0:t.map((function(e){return(0,s.jsx)("th",{children:e.date},e.date)})),(0,s.jsx)("th",{children:"Chart"})]})}),(0,s.jsx)("tbody",{children:Object.keys(d).map((function(e){return(0,s.jsx)(s.Fragment,{children:d[e]&&d[e].length>1?(0,s.jsxs)("tr",{children:[d[e].map((function(t,n){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("td",{align:"center",children:m(t,d[e])},n)})})),(0,s.jsx)("td",{children:(0,s.jsx)(a,{sparklineData:d[e]})})]},e):null})}))})]})}))}}]);