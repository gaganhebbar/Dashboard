import{r,_ as R,n as y,a as g,c as S,P as a}from"./index-BTvpAhNN.js";import{a as k}from"./CFormControlWrapper-PSwsdQON.js";var x=r.forwardRef(function(e,C){var l,N=e.children,T=e.className,d=e.delay,n=d===void 0?!1:d,h=e.feedback,F=e.feedbackInvalid,I=e.feedbackValid,O=e.floatingClassName,V=e.floatingLabel,s=e.id,c=e.invalid,z=e.label,t=e.onChange,E=e.plainText,f=e.size,L=e.text,P=e.tooltipFeedback,p=e.type,b=p===void 0?"text":p,m=e.valid,u=R(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),v=r.useState(),o=v[0],w=v[1];return r.useEffect(function(){var i=setTimeout(function(){return o&&t&&t(o)},typeof n=="number"?n:500);return function(){return clearTimeout(i)}},[o]),y.createElement(k,{describedby:u["aria-describedby"],feedback:h,feedbackInvalid:F,feedbackValid:I,floatingClassName:O,floatingLabel:V,id:s,invalid:c,label:z,text:L,tooltipFeedback:P,valid:m},y.createElement("input",g({className:S(E?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(f)]=f,l["form-control-color"]=b==="color",l["is-invalid"]=c,l["is-valid"]=m,l),T),id:s,type:b,onChange:function(i){return n?w(i):t&&t(i)}},u,{ref:C}),N))});x.propTypes=g({className:a.string,id:a.string,delay:a.oneOfType([a.bool,a.number]),plainText:a.bool,size:a.oneOf(["sm","lg"]),type:a.oneOfType([a.oneOf(["color","file","text"]),a.string])},k.propTypes);x.displayName="CFormInput";export{x as C};
