new Promise(((o,e)=>{setTimeout((()=>{Math.random()>.5&&o("RESOLVE"),e("REJECT")}),2e3)})).then((o=>(console.log(o),5))).then((o=>{console.log(o)})).then((o=>{console.log(o)})).catch((o=>console.log(o))).finally((()=>{console.log("%c ВСЕ БУДЕТ ХОРОШО. В ЛЮБОМ СЛУЧАЕ","color: red; font-size: 16px;")}));
//# sourceMappingURL=promise.1d8200f6.js.map
