(self.webpackChunkmit_filmmakers=self.webpackChunkmit_filmmakers||[]).push([[813],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5666:function(e,t,n){"use strict";n.d(t,{Z:function(){return Se}});var r,o,i,a,c=n(1721),u=n(1597),s=n(7294),l=[{slug:"",name:"Home",description:""},{slug:"people",name:"People",description:""},{slug:"philosophy",name:"Philosophy",description:""},{slug:"portfolio",name:"Portfolio",description:""}],f=function(e){var t=e.name,n=e.slug,r=e.current;return s.createElement(u.Link,{to:("/"+n+"/").replace("//","/"),key:n,className:"navbar-item"+(n===r?" navbar-item-current":"")},s.createElement("span",null,"  ",t))},p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={expand:!1},t}return(0,c.Z)(t,e),t.prototype.render=function(){var e=this;return s.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},s.createElement("div",{className:"content is-medium container"},s.createElement("div",{className:"navbar-brand"},s.createElement("a",{className:"navbar-item",style:{fontSize:"1.5rem",padding:"0 1.5rem"},href:"/"},s.createElement("b",null,"MIT Film Makers Association")),s.createElement("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(){e.setState({expand:!e.state.expand})}},s.createElement("span",{"aria-hidden":"true"}),s.createElement("span",{"aria-hidden":"true"}),s.createElement("span",{"aria-hidden":"true"}))),s.createElement("div",{className:this.state.expand?"navbar-menu is-active":"navbar-menu"},s.createElement("div",{className:"navbar-start",style:{justifyContent:"center",marginLeft:"auto"}},l.map((function(t){return s.createElement(f,Object.assign({},t,{current:e.props.slug,key:t.slug}))}))))))},t}(s.Component),d=p,m=function(){return s.createElement("section",{className:"column has-text-centered content"},s.createElement("h4",null,"MIT Filmmakers © 2022"),s.createElement("p",null,s.createElement("a",{href:"mailto:mit-filmmaker-association@mit.edu"},"mit-filmmaker-association@mit.edu")))},h=function(){return s.createElement("footer",{className:"footer"},s.createElement("div",{className:"container"},s.createElement("div",{className:"columns"},s.createElement(m,null))))},y=n(5697),b=n.n(y),v=n(4839),T=n.n(v),g=n(2993),E=n.n(g),w=n(6494),A=n.n(w),C="bodyAttributes",O="htmlAttributes",S="titleAttributes",k={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(k).map((function(e){return k[e]})),"charset"),P="cssText",x="href",I="http-equiv",L="innerHTML",N="itemprop",M="name",R="property",_="rel",F="src",B="target",H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",q="defer",Y="encodeSpecialCharacters",U="onChangeClientState",z="titleTemplate",K=Object.keys(H).reduce((function(e,t){return e[H[t]]=t,e}),{}),V=[k.NOSCRIPT,k.SCRIPT,k.STYLE],W="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ee=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},te=function(e){var t=ae(e,k.TITLE),n=ae(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ae(e,D);return t||r||void 0},ne=function(e){return ae(e,U)||function(){}},re=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},oe=function(e,t){return t.filter((function(e){return void 0!==e[k.BASE]})).map((function(e){return e[k.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ie=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&fe("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===_&&"canonical"===e[n].toLowerCase()||u===_&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==L&&c!==P&&c!==N||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=A()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ce=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ce(e)}),0)}),ue=function(e){return clearTimeout(e)},se="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ce:n.g.requestAnimationFrame||ce,le="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:n.g.cancelAnimationFrame||ue,fe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},pe=null,de=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ye(k.BODY,r),ye(k.HTML,o),he(f,p);var d={baseTag:be(k.BASE,n),linkTags:be(k.LINK,i),metaTags:be(k.META,a),noscriptTags:be(k.NOSCRIPT,c),scriptTags:be(k.SCRIPT,s),styleTags:be(k.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},me=function(e){return Array.isArray(e)?e.join(""):e},he=function(e,t){void 0!==e&&document.title!==e&&(document.title=me(e)),ye(k.TITLE,t)},ye=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(W),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(W):n.getAttribute(W)!==a.join(",")&&n.setAttribute(W,a.join(","))}},be=function(e,t){var n=document.head||document.querySelector(k.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===L)n.innerHTML=t.innerHTML;else if(r===P)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(W,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ve=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},Te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case k.TITLE:return{toComponent:function(){return function(e,t,n){var r,o=((r={key:t})[W]=!0,r),i=Te(n,o);return[s.createElement(k.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,n,r){var o=ve(n),i=me(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ee(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ee(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case C:case O:return{toComponent:function(){return Te(t)},toString:function(){return ve(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[W]=!0,r);return Object.keys(t).forEach((function(e){var n=H[e]||e;if(n===L||n===P){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===L||e===P)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+ee(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===V.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Ee=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ge(k.BASE,t,r),bodyAttributes:ge(C,n,r),htmlAttributes:ge(O,o,r),link:ge(k.LINK,i,r),meta:ge(k.META,a,r),noscript:ge(k.NOSCRIPT,c,r),script:ge(k.SCRIPT,u,r),style:ge(k.STYLE,s,r),title:ge(k.TITLE,{title:f,titleAttributes:p},r)}},we=T()((function(e){return{baseTag:oe([x,B],e),bodyAttributes:re(C,e),defer:ae(e,q),encode:ae(e,Y),htmlAttributes:re(O,e),linkTags:ie(k.LINK,[_,x],e),metaTags:ie(k.META,[M,j,I,R,N],e),noscriptTags:ie(k.NOSCRIPT,[L],e),onChangeClientState:ne(e),scriptTags:ie(k.SCRIPT,[F,L],e),styleTags:ie(k.STYLE,[P],e),title:te(e),titleAttributes:re(S,e)}}),(function(e){pe&&le(pe),e.defer?pe=se((function(){de(e,(function(){pe=null}))})):(de(e),pe=null)}),Ee)((function(){return null})),Ae=(o=we,a=i=function(e){function t(){return $(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!E()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case k.SCRIPT:case k.NOSCRIPT:return{innerHTML:t};case k.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case k.TITLE:return J({},o,((t={})[r.type]=a,t.titleAttributes=J({},i),t));case k.BODY:return J({},o,{bodyAttributes:J({},i)});case k.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[K[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case k.LINK:case k.META:case k.NOSCRIPT:case k.SCRIPT:case k.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(o,r)},G(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:b().object,bodyAttributes:b().object,children:b().oneOfType([b().arrayOf(b().node),b().node]),defaultTitle:b().string,defer:b().bool,encodeSpecialCharacters:b().bool,htmlAttributes:b().object,link:b().arrayOf(b().object),meta:b().arrayOf(b().object),noscript:b().arrayOf(b().object),onChangeClientState:b().func,script:b().arrayOf(b().object),style:b().arrayOf(b().object),title:b().string,titleAttributes:b().object,titleTemplate:b().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=Ee({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);Ae.renderStatic=Ae.rewind;var Ce=function(){return s.createElement(Ae,null,s.createElement("meta",{name:"description",content:"MIT Filmmakers Association"}),s.createElement("meta",{charSet:"utf-8"}),s.createElement("title",null,"MIT Filmmakers Association"),s.createElement("html",{lang:"en"}),s.createElement("body",{className:"has-navbar-fixed-top"}))},Oe=function(e){function t(){return e.apply(this,arguments)||this}return(0,c.Z)(t,e),t.prototype.render=function(){return s.createElement(s.Fragment,null,s.createElement(Ce,null),s.createElement(d,{slug:this.props.slug}),this.props.children,s.createElement(h,null))},t}(s.Component),Se=Oe}}]);
//# sourceMappingURL=6feb66f6594c2cd866145b1bad0ea9c37fdbc657-f4ffbeede8c08c66ed64.js.map