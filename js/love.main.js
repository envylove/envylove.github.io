/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /gh/EmoryHuang/BlogBeautify@1.1/love.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t,a){var r,o=[];function n(){for(var e=0;e<o.length;e++)o[e].alpha<=0?(t.body.removeChild(o[e].el),o.splice(e,1)):(o[e].y--,o[e].scale+=.004,o[e].alpha-=.013,o[e].el.style.cssText="left:"+o[e].x+"px;top:"+o[e].y+"px;opacity:"+o[e].alpha+";transform:scale("+o[e].scale+","+o[e].scale+") rotate(45deg);background:"+o[e].color);requestAnimationFrame(n)}function i(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),r="function"==typeof e.onclick&&e.onclick,e.onclick=function(e){r&&r(),function(e){var a=t.createElement("div");a.className="heart",o.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:i()}),t.body.appendChild(a)}(e)},n()}(window,document);
//# sourceMappingURL=/sm/61e735b7203a39c60449696aa4d37b55f602bd18b64dbd5638c28a5797a11ac5.map