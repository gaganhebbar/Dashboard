import{_ as R,a as y,c as w,P as a}from"./index-Csyp1005.js";import v,{forwardRef as S,useState as W,useEffect as j}from"react";import{a as g}from"./CFormControlWrapper-DJRKwwUR.js";var k=S(function(e,C){var l,x=e.children,N=e.className,r=e.delay,n=r===void 0?!1:r,T=e.feedback,h=e.feedbackInvalid,F=e.feedbackValid,I=e.floatingClassName,O=e.floatingLabel,d=e.id,s=e.invalid,V=e.label,t=e.onChange,z=e.plainText,c=e.size,L=e.text,E=e.tooltipFeedback,f=e.type,p=f===void 0?"text":f,b=e.valid,m=R(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),u=W(),o=u[0],P=u[1];return j(function(){var i=setTimeout(function(){return o&&t&&t(o)},typeof n=="number"?n:500);return function(){return clearTimeout(i)}},[o]),v.createElement(g,{describedby:m["aria-describedby"],feedback:T,feedbackInvalid:h,feedbackValid:F,floatingClassName:I,floatingLabel:O,id:d,invalid:s,label:V,text:L,tooltipFeedback:E,valid:b},v.createElement("input",y({className:w(z?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(c)]=c,l["form-control-color"]=p==="color",l["is-invalid"]=s,l["is-valid"]=b,l),N),id:d,type:p,onChange:function(i){return n?P(i):t&&t(i)}},m,{ref:C}),x))});k.propTypes=y({className:a.string,id:a.string,delay:a.oneOfType([a.bool,a.number]),plainText:a.bool,size:a.oneOf(["sm","lg"]),type:a.oneOfType([a.oneOf(["color","file","text"]),a.string])},g.propTypes);k.displayName="CFormInput";export{k as C};
