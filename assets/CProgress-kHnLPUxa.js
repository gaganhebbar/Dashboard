import{_ as g,a as l,c as v,P as r,b as k}from"./index-Csyp1005.js";import t,{createContext as w,forwardRef as N,useContext as y}from"react";var C=w({}),b=N(function(e,i){var a=e.children,c=e.className,o=g(e,["children","className"]);return t.createElement("div",l({className:v("progress-stacked",c),ref:i},o),t.createElement(C.Provider,{value:{stacked:!0}},a))});b.propTypes={children:r.node,className:r.string};b.displayName="CProgressStacked";var f=N(function(e,i){var a,c=e.children,o=e.animated,d=e.className,p=e.color,s=e.value,h=s===void 0?0:s,m=e.variant,u=g(e,["children","animated","className","color","value","variant"]),n=y(C).stacked;return t.createElement("div",l({className:v("progress-bar",(a={},a["bg-".concat(p)]=p,a["progress-bar-".concat(m)]=m,a["progress-bar-animated"]=o,a),d)},!n&&{style:{width:"".concat(h,"%")}},u,{ref:i}),c)});f.propTypes={animated:r.bool,children:r.node,className:r.string,color:k,value:r.number,variant:r.oneOf(["striped"])};f.displayName="CProgressBar";var P=N(function(e,i){var a=e.children,c=e.className,o=e.height,d=e.progressBarClassName,p=e.thin,s=e.value,h=e.white,m=g(e,["children","className","height","progressBarClassName","thin","value","white"]),u=y(C).stacked;return t.createElement("div",l({className:v("progress",{"progress-thin":p,"progress-white":h},c)},s!==void 0&&{role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100},{style:l(l({},o?{height:"".concat(o,"px")}:{}),u?{width:"".concat(s,"%")}:{}),ref:i}),t.Children.toArray(a).some(function(n){return n.type&&n.type.displayName==="CProgressBar"})?t.Children.map(a,function(n){if(t.isValidElement(n)&&n.type.displayName==="CProgressBar")return t.cloneElement(n,l(l({},s&&{value:s}),m))}):t.createElement(f,l({},d&&{className:d},{value:s},m),a))});P.propTypes={children:r.node,className:r.string,height:r.number,progressBarClassName:r.string,thin:r.bool,value:r.number,white:r.bool};P.displayName="CProgress";export{P as C,f as a};
