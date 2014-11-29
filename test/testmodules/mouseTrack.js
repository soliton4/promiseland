(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "2ce826e49303a51951d5788126b893c0" })){ return promiseland._getModule("2ce826e49303a51951d5788126b893c0"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "2ce826e49303a51951d5788126b893c0", "module": PL$1, promising: true });
var PL$21/*Callback*/;try{PL$21/*Callback*/ = Callback;}catch(e){};
var PL$22/*setTimeout*/;try{PL$22/*setTimeout*/ = setTimeout;}catch(e){};
var PL$25/*console*/;try{PL$25/*console*/ = console;}catch(e){};
var PL$59/*window*/;try{PL$59/*window*/ = window;}catch(e){};
var PL$62/*setInterval*/;try{PL$62/*setInterval*/ = setInterval;}catch(e){};
var PL$65/*document*/;try{PL$65/*document*/ = document;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$10 = function(e){ PL$1.reject(e); };
var PL$15/*waitFun*/;
var PL$24/*nextId*/;
var PL$4/*Ses*/;
var PL$7/*Pos*/;
var PL$27/*pos*/;
var _TPL$27/*pos*/;
var PL$28/*gotit*/;
var PL$36/*newSes*/;
var PL$44/*getPos*/;
var PL$45/*serverSetMouse*/;
var PL$53/*s*/;
var _TPL$53/*s*/;
var PL$54/*setMousePos*/;
var PL$61/*wgts*/;
var PL$3/*type:Ses*/ = classSystem._createProvisionalClass();
PL$4/*Ses*/ = PL$3/*type:Ses*/;
var PL$5/*Ses-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:Ses*/).then(function(parType){PL$3/*type:Ses*/ = parType;PL$5/*Ses-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:Ses*/);});var PL$29/*type:Ses**/ = classSystem._createPromiseOfClass(PL$3/*type:Ses*/);
var PL$30/*Ses**/ = PL$29/*type:Ses**/;
var PL$31/*Ses*-constructor*/ = undefined;classSystem.readyPromise(PL$29/*type:Ses**/).then(function(parType){PL$29/*type:Ses**/ = parType;PL$31/*Ses*-constructor*/ = classSystem.getTypeConstructor(PL$29/*type:Ses**/);});var PL$6/*type:Pos*/ = classSystem._createProvisionalClass();
PL$7/*Pos*/ = PL$6/*type:Pos*/;
var PL$8/*Pos-constructor*/ = undefined;classSystem.readyPromise(PL$6/*type:Pos*/).then(function(parType){PL$6/*type:Pos*/ = parType;PL$8/*Pos-constructor*/ = classSystem.getTypeConstructor(PL$6/*type:Pos*/);});var PL$37/*type:Pos**/ = classSystem._createPromiseOfClass(PL$6/*type:Pos*/);
var PL$38/*Pos**/ = PL$37/*type:Pos**/;
var PL$39/*Pos*-constructor*/ = undefined;classSystem.readyPromise(PL$37/*type:Pos**/).then(function(parType){PL$37/*type:Pos**/ = parType;PL$39/*Pos*-constructor*/ = classSystem.getTypeConstructor(PL$37/*type:Pos**/);});var PL$36/*newSes*/ = (function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "PL$35", f, (classSystem.createFunctionType({ "return": PL$29/*type:Ses**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "PL$35", arguments);
}
};
})((function(t){return t;})(function(){
var PL$32;
var _TPL$32;
(function(){ var vAr = new PL$31/*Ses*-constructor*/(); PL$32 = vAr[0]; _TPL$32 = vAr[1]; })();var PL$33 = function(code){ return function(res){ try{code(res);}catch(e){ PL$32.reject(e); }; }; };
var PL$34 = function(e){ PL$32.reject(e); };
PL$33(function(){;
PL$25/*console*/["log"]("new session");;
PL$32.resolve(new PL$5/*Ses-constructor*/()); return;;
PL$32.resolve(); return;;
})();
return [PL$32, _TPL$32];
}));
var PL$44/*getPos*/ = (function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "PL$43", f, (classSystem.createFunctionType({ "return": PL$37/*type:Pos**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "PL$43", arguments);
}
};
})((function(t){return t;})(function(){
var PL$40;
var _TPL$40;
(function(){ var vAr = new PL$39/*Pos*-constructor*/(); PL$40 = vAr[0]; _TPL$40 = vAr[1]; })();var PL$41 = function(code){ return function(res){ try{code(res);}catch(e){ PL$40.reject(e); }; }; };
var PL$42 = function(e){ PL$40.reject(e); };
PL$41(function(){;
PL$40.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$27/*pos*/)); return;;
PL$40.resolve(); return;;
})();
return [PL$40, _TPL$40];
}));
PL$9(function(){;
var PL$11 = new __Promise();
var PL$12 = new __Promise();
var PL$13/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.resolve(e); }; }; };
var PL$14 = function(e){ PL$12.resolve(e); };
PL$13/*try catch*/(function(){PL$15/*waitFun*/ = (function(){
var PL$16 = new __Promise();
var PL$18 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$19 = function(e){ PL$16.reject(e); };
var PL$20/*cb*/;
PL$18(function(){;
PL$20/*cb*/ = new PL$21/*Callback*/();
PL$22/*setTimeout*/(PL$20/*cb*/, 2000);;
PL$20/*cb*/["promise"].then(PL$18(function(PL$23){PL$23;;
PL$16.resolve(); return;;
}), PL$19);
;})();
return PL$16;
});
PL$24/*nextId*/ = 1;
classSystem._resolveProvisional(PL$3/*type:Ses*/, classSystem.createClass({className: "Ses",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"id","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":11,"column":14,"offset":146}, "hashStr": "2ce826e49303a51951d5788126b893c0", "name": "Ses"}, {"constructor": (function(){
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(this, PL$24/*nextId*/++);;
;
}), "id": 0, "destroy": (function(){
var PL$26/*p*/;
;
PL$25/*console*/["log"](("destroying" + this[9]));;
PL$26/*p*/ = PL$27/*pos*/[7];
PL$25/*console*/["log"](PL$26/*p*/);;
delete PL$26/*p*/[this[9]];;
PL$25/*console*/["log"](PL$26/*p*/);;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$27/*pos*/, PL$26/*p*/);;
;
})}));PL$4/*Ses*/;;
classSystem._resolveProvisional(PL$6/*type:Pos*/, classSystem.createClass({className: "Pos",members: [{"name":"p","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":26,"column":14,"offset":416}, "hashStr": "2ce826e49303a51951d5788126b893c0", "name": "Pos"}, {"p": {}}));PL$7/*Pos*/;;
PL$27/*pos*/;
PL$28/*gotit*/ = false;
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
/*temp tracked assign*/(function(vAr){
if (_TPL$27/*pos*/){ _TPL$27/*pos*/(); };
if(vAr){
var v = vAr[0];
PL$27/*pos*/ = v;
_TPL$27/*pos*/ = vAr[1];
return v;
}else{
PL$27/*pos*/ = undefined; _TPL$27/*pos*/ = undefined;
return;
}; })(new PL$8/*Pos-constructor*/())/*end temp assign*/
;;
PL$28/*gotit*/ = true;;
;
})();;
PL$36/*newSes*/;;
PL$44/*getPos*/;;
PL$45/*serverSetMouse*/ = ((function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "PL$52", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "PL$52", arguments);
}
};
})(function(PL$46/*x*/, PL$47/*y*/, PL$48/*sid*/){
var PL$49 = new __Promise();
var PL$50 = function(code){ return function(res){ try{code(res);}catch(e){ PL$49.reject(e); }; }; };
var PL$51 = function(e){ PL$49.reject(e); };
var PL$26/*p*/;
PL$50(function(){;
PL$26/*p*/ = PL$27/*pos*/[7];
PL$26/*p*/[PL$48/*sid*/] = {"x": PL$46/*x*/,
"y": PL$47/*y*/};;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$27/*pos*/, PL$26/*p*/);;
PL$49.resolve(); return;;
PL$49.resolve(); return;;
})();
return PL$49;
}));
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
PL$28/*gotit*/ = true;;
;
})();;
PL$53/*s*/;
PL$54/*setMousePos*/ = (function(PL$46/*x*/, PL$47/*y*/){
;
if((PL$53/*s*/[9] > 0)){
PL$45/*serverSetMouse*/(PL$46/*x*/, PL$47/*y*/, PL$53/*s*/[9]);;
};
;
;
});
var PL$55 = new __Promise();
if(! PL$28/*gotit*/){
PL$15/*waitFun*/().then(PL$13/*try catch*/(function(PL$56){PL$56;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$13/*try catch*/(function(PL$57){/*temp tracked assign*/(function(vAr){
if (_TPL$53/*s*/){ _TPL$53/*s*/(); };
if(vAr){
var v = vAr[0];
PL$53/*s*/ = v;
_TPL$53/*s*/ = vAr[1];
return v;
}else{
PL$53/*s*/ = undefined; _TPL$53/*s*/ = undefined;
return;
}; })(PL$57)/*end temp assign*/
;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$13/*try catch*/(function(PL$58){/*temp tracked assign*/(function(vAr){
if (_TPL$27/*pos*/){ _TPL$27/*pos*/(); };
if(vAr){
var v = vAr[0];
PL$27/*pos*/ = v;
_TPL$27/*pos*/ = vAr[1];
return v;
}else{
PL$27/*pos*/ = undefined; _TPL$27/*pos*/ = undefined;
return;
}; })(PL$58)/*end temp assign*/
;;
PL$55.resolve();;
}), PL$14);
return r;
})(PL$44/*getPos*/());/*temptracked promise end*/
;}), PL$14);
return r;
})(PL$36/*newSes*/());/*temptracked promise end*/
;}), PL$14);
;
}else{
PL$55.resolve();}; PL$55.then(function(){;
;
if(PL$59/*window*/){
PL$59/*window*/["onmousemove"] = (function(PL$60/*evt*/){
;
if((PL$60/*evt*/["pageX"] !== undefined)){
PL$54/*setMousePos*/(PL$60/*evt*/["pageX"], PL$60/*evt*/["pageY"]);;
};
;
;
});;
PL$61/*wgts*/ = {};
PL$62/*setInterval*/((function(){
var PL$26/*p*/;
var PL$63/*i*/;
var PL$64/*n*/;
;
PL$26/*p*/ = PL$27/*pos*/[7];
PL$63/*i*/;
PL$64/*n*/;
for(PL$63/*i*/ in PL$26/*p*/){if((PL$63/*i*/ != PL$53/*s*/[9])){
if(PL$61/*wgts*/[PL$63/*i*/]){
PL$64/*n*/ = PL$61/*wgts*/[PL$63/*i*/]["n"];;

}else{
PL$64/*n*/ = PL$65/*document*/["createElement"]("img");;
PL$64/*n*/["src"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAEWklEQVRIx6WVC1BUVRiAbyCBiUVlzuhQNgxmDQwx8hQkddkVWSAJotSwiYfh8qayKaD57967hCZFGCGP3QXuwrK7vJ8iwfIM5LmwsGBKmrxFB6ERSYaFzjJao4DAcma++e+5/5lv/nvPC/vm24jtyoUFbMMt5sdYFySjn/jk5MZESclcB0l2bgzTyeVNcwtL9UUZmSJGSWk5kcJNjUHdF3x8T6knKiouZUhy8gkEJCam4IzDDroBLNb6RdKaWoZQlEtkCMVAZYjYScn8YNO3d29at6iltY2RKZQQgkwRpKZnApdPkUkp/GNcfvr6RDJ5N516LKIyIYWXDrxUQRSXl3aYEmStXdQlVzCyJLmEUJwDAqEE0gVZwEvLAD6VEU1RQnveWitrl3UxCorLiIKiMsgrLIWc/EKQ5BaCSIUkj0xO5hlHfIevLrrS3EKvqW8iqmsbQVrzO1TVNECltAF+k9ZBVXUDXlRyGU77B2xbw6zV0+WKP4hOeS/IulQoQNapgE55H3Sg2Ngsw/MKyyLQUK1nikpKK+gDQ2PEzVvD8B8Dw3D9zwFQ9F2Hnt5+uNb/Fzu/qCy8u/fqyqK8/AL6g5lZYmrqPizy9zTcnZiC8bv3EKo4ucjk1DRBZQq9Y3+OW14kFInsFxYWyDmlEubmlaCcm4c55RxifgkzM/9EkZzvmY5M5lIRlU4tihCwFmZnH0abmZtbGxmbPCnip/LtZx/OkPemJlD5k6swAdMP7sPg0OC5Lbpbdzs7H/1flEZR9qPj4+Tg8DAsy8gIjI7fhtHbYzA8OrLYH7tzB5paWggTE9Md5hZWj/6RONu+r/8m0XMVzdBTKBBdPX1QUVVHNjS1kfLefuLajQHixsAoe2hsnLhcWR356mt6mx4dI2W05nY52djaCY+50i7HUcSbO7oB7UNAw6wRNs9rb2bu2mV4zGqfne9RV48gVkBoONPJNUhLCy2x6toGmrSuiayqbYJqhLS2ie3l6xfE5QtCahvb8MqaRjIwOMxWW1sH27FTHzN51wyzZzhiRWVSVR0aiK1aKlNLawet6FIlWVJeBRXSevxzVlA4SurHXUgwKL1UGVVeVQe/XuTiH7h5rLgWFytql8lpGVk5ZHZ+Me7nH6L6jLdUyfj4REycU8gRivMgS1LAYTJdTFbb/Qd/SUjheHmdVlVi+OR5LqbFX+SSCUl8nBN9PszF2XVlUZY4l+HucYKNHg2ezv0Ud+HFsz/EngUiGnDyHOeIg9PrK4o++thzLwpGmpqaS3JoJT8XHsn2CQk7ww794muC5R/sbmFptbzI86Q3pqOzednc4K0BLDjkS1ufUyyOl48f7vmp91dmZuZb1LquAoJCt7t7HI9EgNuHx6PsDh4yVksUGByKOTm7Bjo4uuBHmO+zbfcf+Ezt29h6n43F/vcOcewO0HDTvZbn0auX1BLZ2NphBoZ7onfqv3FGT+9lN00NjW3YBtorCN097xhhSLQk+S/Hvpo08p3TowAAAABJRU5ErkJggg==";;
PL$64/*n*/["style"]["position"] = "absolute";;
PL$65/*document*/["body"]["appendChild"](PL$64/*n*/);;
PL$61/*wgts*/[PL$63/*i*/] = {"n": PL$64/*n*/};;
};
;
PL$64/*n*/["style"]["top"] = (PL$26/*p*/[PL$63/*i*/]["y"] + "px");;
PL$64/*n*/["style"]["left"] = (PL$26/*p*/[PL$63/*i*/]["x"] + "px");;
};
;
};
;
for(PL$63/*i*/ in PL$61/*wgts*/){if(! PL$26/*p*/[PL$63/*i*/]){
PL$64/*n*/ = PL$61/*wgts*/[PL$63/*i*/]["n"];;
PL$65/*document*/["body"]["removeChild"](PL$64/*n*/);;
delete PL$61/*wgts*/[PL$63/*i*/];;
};
;
};
;
;
}), 100);;
};
;
PL$11.resolve();
});})();
PL$12.then(PL$9(function(PL$66/*e*/){PL$25/*console*/["log"]("error:");;
PL$25/*console*/["log"](PL$66/*e*/);;
PL$11.resolve();;
}));
PL$11.then(PL$9(function(){;
PL$1.resolve(); return;;
}), PL$10)})();
return PL$1;
})();
;;
return PL$1});
})();