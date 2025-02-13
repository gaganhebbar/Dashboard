import{r as m,_ as ae,n as O,a as se,c as ie,P as d,b as oe,o as ce,j as t}from"./index-COGDw81r.js";import{c as k}from"./index.esm-CU-QZVjU.js";import{C as X}from"./index.esm-DghvTeK8.js";import{C as Z,a as E}from"./CRow-BLA8FrRy.js";import{k as T,l as M,m as W,n as i}from"./DefaultLayout-BfIORTAi.js";import{c as J,a as Y}from"./cil-options-DDl2EF0W.js";import{C as le,a as ue}from"./CCardBody-C1cSS9SG.js";var P=m.forwardRef(function(o,s){var l,u=o.action,_=o.chart,j=o.className,b=o.color,g=o.title,R=o.value,A=ae(o,["action","chart","className","color","title","value"]);return O.createElement(le,se({className:ie((l={},l["bg-".concat(b)]=b,l["text-white"]=b,l),j)},A,{ref:s}),O.createElement(ue,{className:"pb-0 d-flex justify-content-between align-items-start"},O.createElement("div",null,R&&O.createElement("div",{className:"fs-4 fw-semibold"},R),g&&O.createElement("div",null,g)),u),_)});P.propTypes={action:d.node,chart:d.oneOfType([d.string,d.node]),className:d.string,color:oe,title:d.oneOfType([d.string,d.node]),value:d.oneOfType([d.string,d.node,d.number])};P.displayName="CWidgetStatsA";var V=function(o,s){if(!(typeof window>"u")&&!(typeof document>"u")){var l=document.body;return window.getComputedStyle(l,null).getPropertyValue(o).replace(/^\s/,"")}},ee={};(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=L;var s=g((void 0)("react")),l=j((void 0)("apexcharts")),u=j((void 0)("prop-types")),_=["type","width","height","series","options"];function j(e){return e&&e.__esModule?e:{default:e}}function b(e){var r,n;return typeof WeakMap!="function"?null:(r=new WeakMap,n=new WeakMap,(b=function(a){return a?n:r})(e))}function g(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||x(e)!="object"&&typeof e!="function")return{default:e};if(r=b(r),r&&r.has(e))return r.get(e);var n,a,c={__proto__:null},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e)n!=="default"&&{}.hasOwnProperty.call(e,n)&&((a=h?Object.getOwnPropertyDescriptor(e,n):null)&&(a.get||a.set)?Object.defineProperty(c,n,a):c[n]=e[n]);return c.default=e,r&&r.set(e,c),c}function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n,a=arguments[r];for(n in a)!{}.hasOwnProperty.call(a,n)||(e[n]=a[n])}return e}).apply(null,arguments)}function A(e,r){if(e==null)return{};var n,a=N(e,r);if(Object.getOwnPropertySymbols)for(var c=Object.getOwnPropertySymbols(e),h=0;h<c.length;h++)n=c[h],r.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n]);return a}function N(e,r){if(e==null)return{};var n,a={};for(n in e)if({}.hasOwnProperty.call(e,n)){if(r.includes(n))continue;a[n]=e[n]}return a}function x(e){return(x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function F(e,r){var n,a=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),r&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),a.push.apply(a,n)),a}function I(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?F(Object(n),!0).forEach(function(a){p(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function p(e,r,n){return(r=te(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function te(e){return e=ne(e,"string"),x(e)=="symbol"?e:e+""}function ne(e,r){if(x(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n===void 0)return(r==="string"?String:Number)(e);if(n=n.call(e,r||"default"),x(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function re(e,r){var n=I({},e);return r.forEach(function(a){delete n[a]}),n}function q(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:new WeakSet;if(e!==r){if(x(e)!=="object"||e===null||x(r)!=="object"||r===null)return!1;if(!n.has(e)&&!n.has(r)){n.add(e),n.add(r);var a=Object.keys(e),c=Object.keys(r);if(a.length!==c.length)return!1;for(var h=0,D=a;h<D.length;h++){var f=D[h];if(!c.includes(f)||!q(e[f],r[f],n))return!1}}}return!0}function L(v){function r(y){return y&&x(y)==="object"&&!Array.isArray(y)}var f=v.type,n=f===void 0?"line":f,f=v.width,a=f===void 0?"100%":f,f=v.height,c=f===void 0?"auto":f,h=v.series,D=v.options,f=A(v,_),G=(0,s.useRef)(null),w=(0,s.useRef)(null),U=(0,s.useRef)(),H=((0,s.useEffect)(function(){U.current=D;var y=G.current;return w.current=new l.default(y,H()),w.current.render(),function(){w.current&&typeof w.current.destroy=="function"&&w.current.destroy()}},[]),(0,s.useEffect)(function(){var y=!q(w.current.w.config.series,h),C=!q(U.current,D)||c!==w.current.opts.chart.height||a!==w.current.opts.chart.width;(y||C)&&(!y||C?w.current.updateOptions(H()):w.current.updateSeries(h)),U.current=D},[D,h,c,a]),function(){return Q(D,{chart:{type:n,height:c,width:a},series:h})}),Q=function(y,C){var z=I({},y);return r(y)&&r(C)&&Object.keys(C).forEach(function(S){r(C[S])&&S in y?z[S]=Q(y[S],C[S]):Object.assign(z,p({},S,C[S]))}),z},v=re(f,Object.keys(L.propTypes));return s.default.createElement("div",R({ref:G},v))}L.propTypes={type:u.default.string.isRequired,series:u.default.array.isRequired,options:u.default.object.isRequired,width:u.default.oneOfType([u.default.string,u.default.number]),height:u.default.oneOfType([u.default.string,u.default.number])}})(ee);const $=ce(ee);var K=(void 0)("react"),B=(void 0)("@canvasjs/charts");B=B.Chart?B:window.CanvasJS;class de extends K.Component{constructor(s){super(s),this.options=s.options?s.options:{},this.containerProps=s.containerProps?{...s.containerProps}:{width:"100%",position:"relative"},this.containerProps.height=s.containerProps&&s.containerProps.height?s.containerProps.height:this.options.height?this.options.height+"px":"400px",this.containerRef=K.createRef()}componentDidMount(){this.chart=new B.Chart(this.containerRef.current,this.options),this.chart.render(),this.props.onRef&&this.props.onRef(this.chart)}shouldComponentUpdate(s,l){return s.options!==this.options}componentDidUpdate(){this.chart.options=this.props.options,this.chart.render()}componentWillUnmount(){this.chart&&this.chart.destroy(),this.props.onRef&&this.props.onRef(void 0)}render(){return K.createElement("div",{id:this.props.id,ref:this.containerRef,style:this.containerProps})}}var pe={CanvasJSChart:de,CanvasJS:B};const he=o=>{m.useRef(null),m.useRef(null);const[s,l]=O.useState({series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],options:{chart:{height:350,type:"line",stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(p){return typeof p<"u"?p.toFixed(0)+" points":p}}}}}),[u,_]=O.useState({series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],options:{chart:{type:"candlestick",height:350},title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}}),j=pe.CanvasJSChart,b=[{x:1,y:10},{x:2,y:13},{x:3,y:18},{x:4,y:20},{x:5,y:17},{x:6,y:10},{x:7,y:13},{x:8,y:18},{x:9,y:20},{x:10,y:17}],[g,R]=m.useState(b),A=m.useRef(g.length+1),N=m.useRef(15),x=m.useRef(null);m.useEffect(()=>{const p=setInterval(F,1e3);return()=>clearInterval(p)},[g]);const F=()=>{N.current=N.current+Math.round(5+Math.random()*-10);const p=[...g,{x:A.current,y:N.current}];A.current++,p.length>10&&p.shift(),R(p),x.current&&x.current.render()},I={title:{text:"Dynamic Line Chart"},data:[{type:"line",dataPoints:g}]};return t.jsxs(Z,{className:o.className,xs:{gutter:4},children:[t.jsx(E,{sm:6,xl:12,xxl:6,children:t.jsx(P,{action:t.jsxs(T,{alignment:"end",children:[t.jsx(M,{color:"transparent",caret:!1,className:"text-white p-0",children:t.jsx(k,{icon:J})}),t.jsxs(W,{children:[t.jsx(i,{children:"Action"}),t.jsx(i,{children:"Another action"}),t.jsx(i,{children:"Something else here..."}),t.jsx(i,{disabled:!0,children:"Disabled action"})]})]}),chart:t.jsx(j,{options:I,onRef:p=>x.current=p})})}),t.jsx(E,{sm:6,xl:12,xxl:6,children:t.jsx(P,{title:"Income",action:t.jsxs(T,{alignment:"end",children:[t.jsx(M,{color:"transparent",caret:!1,className:"text-white p-0",children:t.jsx(k,{icon:J})}),t.jsxs(W,{children:[t.jsx(i,{children:"Action"}),t.jsx(i,{children:"Another action"}),t.jsx(i,{children:"Something else here..."}),t.jsx(i,{disabled:!0,children:"Disabled action"})]})]}),chart:t.jsx($,{options:s.options,series:s.series,type:"line",height:250})})}),t.jsx(E,{sm:6,xl:12,xxl:6,children:t.jsx(P,{action:t.jsxs(T,{alignment:"end",children:[t.jsx(M,{color:"transparent",caret:!1,className:"text-white p-0",children:t.jsx(k,{icon:J})}),t.jsxs(W,{children:[t.jsx(i,{children:"Action"}),t.jsx(i,{children:"Another action"}),t.jsx(i,{children:"Something else here..."}),t.jsx(i,{disabled:!0,children:"Disabled action"})]})]}),chart:t.jsx($,{options:u.options,series:u.series,type:"candlestick",height:250})})})]})};he.propTypes={className:d.string,withCharts:d.bool};const fe=o=>{const s=m.useRef(null),l=m.useRef(null);m.useEffect(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{s.current&&setTimeout(()=>{s.current.data.datasets[0].pointBackgroundColor=V("--cui-primary"),s.current.update()}),l.current&&setTimeout(()=>{l.current.data.datasets[0].pointBackgroundColor=V("--cui-info"),l.current.update()})})},[s,l]);let u=[[new Date().getTime(),Math.floor(Math.random()*90)+10]];O.useState({series:[{data:u.slice()}],options:{chart:{id:"realtime",height:350,type:"line",animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"Dynamic Updating Chart",align:"left"},markers:{size:0},xaxis:{type:"datetime"},yaxis:{max:100},legend:{show:!1}}});const _={chart:{id:"bar-chart"},xaxis:{categories:["Product A","Product B","Product C","Product D"]}},j=[{name:"Revenue",data:[500,700,600,800]}];return t.jsxs(Z,{className:o.className,xs:{gutter:4},children:[t.jsx(E,{sm:6,xl:12,xxl:4,children:t.jsx(P,{chart:t.jsx($,{options:_,series:j,type:"bar",height:130})})}),t.jsx(E,{sm:6,xl:12,xxl:4,children:t.jsx(P,{color:"info",value:t.jsxs(t.Fragment,{children:["$6.200"," ",t.jsxs("span",{className:"fs-6 fw-normal",children:["(40.9% ",t.jsx(k,{icon:Y}),")"]})]}),title:"Income",action:t.jsxs(T,{alignment:"end",children:[t.jsx(M,{color:"transparent",caret:!1,className:"text-white p-0",children:t.jsx(k,{icon:J})}),t.jsxs(W,{children:[t.jsx(i,{children:"Action"}),t.jsx(i,{children:"Another action"}),t.jsx(i,{children:"Something else here..."}),t.jsx(i,{disabled:!0,children:"Disabled action"})]})]}),chart:t.jsx(X,{ref:l,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:V("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),t.jsx(E,{sm:6,xl:12,xxl:4,children:t.jsx(P,{color:"warning",value:t.jsxs(t.Fragment,{children:["2.49%"," ",t.jsxs("span",{className:"fs-6 fw-normal",children:["(84.7% ",t.jsx(k,{icon:Y}),")"]})]}),title:"Conversion Rate",action:t.jsxs(T,{alignment:"end",children:[t.jsx(M,{color:"transparent",caret:!1,className:"text-white p-0",children:t.jsx(k,{icon:J})}),t.jsxs(W,{children:[t.jsx(i,{children:"Action"}),t.jsx(i,{children:"Another action"}),t.jsx(i,{children:"Something else here..."}),t.jsx(i,{disabled:!0,children:"Disabled action"})]})]}),chart:t.jsx(X,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})})]})};fe.propTypes={className:d.string,withCharts:d.bool};export{fe as W,he as a,V as g};
