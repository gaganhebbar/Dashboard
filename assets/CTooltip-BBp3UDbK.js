import{r as t,_ as J,n as o,a as s,c as K,P as e,x as Q,e as U}from"./index-Df0h_wW_.js";import{u as W,s as X,t as Y}from"./DefaultLayout-Ccz6Usab.js";import{g as Z,e as $}from"./getRTLPlacement-CcG9TLqI.js";var x=t.forwardRef(function(n,F){var M=n.children,h=n.animation,O=h===void 0?!0:h,_=n.className,q=n.container,v=n.content,b=n.delay,l=b===void 0?0:b,g=n.fallbackPlacements,L=g===void 0?["top","right","bottom","left"]:g,P=n.offset,j=P===void 0?[0,6]:P,y=n.onHide,w=n.onShow,k=n.placement,A=k===void 0?"top":k,E=n.trigger,r=E===void 0?["hover","focus"]:E,d=n.visible,B=J(n,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),i=t.useRef(null),a=t.useRef(null),I=W(F,i),T="tooltip".concat(t.useId()),R=t.useState(!1),f=R[0],N=R[1],C=t.useState(d),c=C[0],S=C[1],m=X(),V=m.initPopper,z=m.destroyPopper,D=m.updatePopper,H=typeof l=="number"?{show:l,hide:l}:l,G={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:L}},{name:"offset",options:{offset:j}}],placement:Z(A,a.current)};t.useEffect(function(){if(d){u();return}p()},[d]),t.useEffect(function(){if(f&&a.current&&i.current){V(a.current,i.current,G),setTimeout(function(){S(!0)},H.show);return}!f&&a.current&&i.current&&z()},[f]),t.useEffect(function(){!c&&a.current&&i.current&&$(function(){N(!1)},i.current)},[c]);var u=function(){N(!0),w&&w()},p=function(){setTimeout(function(){S(!1),y&&y()},H.hide)};return t.useEffect(function(){D()},[v]),o.createElement(o.Fragment,null,o.cloneElement(M,s(s(s(s(s({},c&&{"aria-describedby":T}),{ref:a}),(r==="click"||r.includes("click"))&&{onClick:function(){return c?p():u()}}),(r==="focus"||r.includes("focus"))&&{onFocus:function(){return u()},onBlur:function(){return p()}}),(r==="hover"||r.includes("hover"))&&{onMouseEnter:function(){return u()},onMouseLeave:function(){return p()}})),o.createElement(Y,{container:q,portal:!0},f&&o.createElement("div",s({className:K("tooltip","bs-tooltip-auto",{fade:O,show:c},_),id:T,ref:I,role:"tooltip"},B),o.createElement("div",{className:"tooltip-arrow"}),o.createElement("div",{className:"tooltip-inner"},v))))});x.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:Q,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),trigger:U,visible:e.bool};x.displayName="CTooltip";export{x as C};
