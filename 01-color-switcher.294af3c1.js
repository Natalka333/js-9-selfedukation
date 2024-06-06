new Promise(((o,e)=>{setTimeout((()=>{o(5)}),2e3)})).then((o=>(console.log(o),2*o))).then((o=>(console.log(o),3*o))).then((o=>{console.log(o)})).catch((o=>{console.log(o)})).finally((()=>{console.log("Final task")}));
//# sourceMappingURL=01-color-switcher.294af3c1.js.map
