(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(3),s=n.n(r),i=(n(23),n(6)),c=n(7),m=n(10),g=n(8),l=n(11),u=n(9),p=n(4),h=n(5),d=[{src:"/images/frog.jpg"},{src:"/images/1.jpg"},{src:"/images/2.png"},{src:"/images/3.png"},{src:"/images/4.png"},{src:"/images/bob.jpg"},{src:"/images/tg.jpg"},{src:"/images/6.png"},{src:"/images/leo.png"},{src:"/images/power.png"},{src:"/images/um.png"},{src:"/images/ol.jpg"},{src:"/images/windows.jpg"},{src:"/images/hey.png"},{src:"/images/buzz.jpg"},{src:"/images/haha.png"},{src:"/images/matrix.png"},{src:"/images/change.jpg"},{src:"/images/button.jpg"},{src:"/images/bob1.jpg"}],b={toptext:"",bottomtext:"",isTopDragging:!1,isBottomDragging:!1,topY:"10%",topX:"50%",bottomX:"50%",bottomY:"90%"},f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(g.a)(t).call(this))).openImage=function(t){var n=d[t],a=new Image;a.src=n.src;var o=e.getBase64Image(a);e.setState(function(e){return Object(p.a)({currentImage:t,modalIsOpen:!e.modalIsOpen,currentImagebase64:o},b)})},e.toggle=function(){e.setState(function(e){return{modalIsOpen:!e.modalIsOpen}})},e.changeText=function(t){e.setState(Object(u.a)({},t.currentTarget.name,t.currentTarget.value))},e.getStateObj=function(t,n){var a=e.imageRef.getBoundingClientRect(),o=t.clientX-a.left,r=t.clientY-a.top,s={};return"bottom"===n?s={isBottomDragging:!0,isTopDragging:!1,bottomX:"".concat(o,"px"),bottomY:"".concat(r,"px")}:"top"===n&&(s={isTopDragging:!0,isBottomDragging:!1,topX:"".concat(o,"px"),topY:"".concat(r,"px")}),s},e.handleMouseDown=function(t,n){var a=e.getStateObj(t,n);document.addEventListener("mousemove",function(t){return e.handleMouseMove(t,n)}),e.setState(Object(p.a)({},a))},e.handleMouseMove=function(t,n){if(e.state.isTopDragging||e.state.isBottomDragging){var a={};"bottom"===n&&e.state.isBottomDragging?a=e.getStateObj(t,n):"top"===n&&e.state.isTopDragging&&(a=e.getStateObj(t,n)),e.setState(Object(p.a)({},a))}},e.handleMouseUp=function(t){document.removeEventListener("mousemove",e.handleMouseMove),e.setState({isTopDragging:!1,isBottomDragging:!1})},e.convertSvgToImage=function(){var t=e.svgRef,n=(new XMLSerializer).serializeToString(t),a=document.createElement("canvas");a.setAttribute("id","canvas");var o=t.getBoundingClientRect();a.width=o.width,a.height=o.height;var r=document.createElement("img");r.setAttribute("src","data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n)))),r.onload=function(){a.getContext("2d").drawImage(r,0,0);var e=a.toDataURL("image/png"),t=document.createElement("a");t.download="meme.png",t.href=e,document.body.appendChild(t),t.click()}},e.state=Object(p.a)({currentImage:0,modalIsOpen:!1,currentImagebase64:null},b),e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getBase64Image",value:function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL("image/png")}},{key:"render",value:function(){var e=this,t=d[this.state.currentImage],n=new Image;n.src=t.src;var a=600/(n.width/n.height),r={fontFamily:"Impact",fontSize:"50px",textTransform:"uppercase",fill:"#FFF",stroke:"#000",userSelect:"none"};return o.a.createElement("div",null,o.a.createElement("h1",null,"MEMEFROG"),o.a.createElement("h4",null,"THE MEME GENERATOR OF WEB3."),o.a.createElement("div",{className:"main-content"},o.a.createElement("div",{className:"content"},d.map(function(t,n){return o.a.createElement("div",{className:"image-holder",key:t.src},o.a.createElement("img",{style:{width:"100%",cursor:"pointer",height:"100%"},alt:n,src:t.src,onClick:function(){return e.openImage(n)},role:"presentation"}))}))),o.a.createElement(h.b,{className:"meme-gen-modal",isOpen:this.state.modalIsOpen},o.a.createElement(h.d,{toggle:this.toggle},"Support this website by getting a ",o.a.createElement("a",{href:"https://opensea.io/collection/memefrogs"},"memeFrog")),o.a.createElement(h.c,null,o.a.createElement("svg",{width:600,id:"svg_ref",height:a,ref:function(t){e.svgRef=t},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o.a.createElement("image",{ref:function(t){e.imageRef=t},xlinkHref:this.state.currentImagebase64,height:a,width:600}),o.a.createElement("text",{style:Object(p.a)({},r,{zIndex:this.state.isTopDragging?4:1}),x:this.state.topX,y:this.state.topY,dominantBaseline:"middle",textAnchor:"middle",onMouseDown:function(t){return e.handleMouseDown(t,"top")},onMouseUp:function(t){return e.handleMouseUp(t,"top")}},this.state.toptext),o.a.createElement("text",{style:r,dominantBaseline:"middle",textAnchor:"middle",x:this.state.bottomX,y:this.state.bottomY,onMouseDown:function(t){return e.handleMouseDown(t,"bottom")},onMouseUp:function(t){return e.handleMouseUp(t,"bottom")}},this.state.bottomtext)),o.a.createElement("div",{className:"meme-form"},o.a.createElement(h.a,null,o.a.createElement("input",{className:"form-control",type:"text",name:"toptext",id:"toptext",placeholder:"Text#1",onChange:this.changeText})),o.a.createElement(h.a,null,o.a.createElement("input",{className:"form-control",type:"text",name:"bottomtext",id:"bottomtext",placeholder:"Text#2",onChange:this.changeText})),o.a.createElement("button",{onClick:function(){return e.convertSvgToImage()},className:"btn btn-primary"},"Download Meme!")))),o.a.createElement("h1",null,"How to Make Meme"),o.a.createElement("h5",null,"Click on a meme -> Enter the text you want to display -> move the text using your mouse -> save the meme."),o.a.createElement("br",null),o.a.createElement("h4",null,"memeFROG v.0.1 "),o.a.createElement("h4",null,"Created by ",o.a.createElement("a",{href:"https://twitter.com/mattoshi_nft"},"Mattoshi")),o.a.createElement("h4",null,"Want to support this project? Buy a ",o.a.createElement("a",{href:"https://opensea.io/collection/memefrogs"},"memefrog"),o.a.createElement("br",null),"Owning one will grant you special access in later versions + all secondary sales go to building out this website."))}}]),t}(o.a.Component),v=(n(27),n(29),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(f,null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.460fa97c.chunk.js.map