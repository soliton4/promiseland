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
if (promiseland._hasModule({ hashStr: "c0b973334fc8122b7b901d826d12edec" })){ return promiseland._getModule("c0b973334fc8122b7b901d826d12edec"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "c0b973334fc8122b7b901d826d12edec", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$8/*isClient*/;
var PL$9/*checkVar*/;
var PL$4/*C2*/;
var PL$10/*local*/;
var _TPL$10/*local*/;
var PL$11/*doInit*/;
var PL$12/*init*/;
var PL$23/*x*/;
var PL$28/*getCheck*/;
var PL$31/*tempRes*/;
var PL$3/*type:C2*/ = classSystem._createProvisionalClass();
PL$4/*C2*/ = PL$3/*type:C2*/;
var PL$5/*C2-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C2*/).then(function(parType){PL$3/*type:C2*/ = parType;PL$5/*C2-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C2*/);});var PL$11/*doInit*/ = function(){
;
/*temp tracked assign*/(function(vAr){
if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
if(vAr){
var v = vAr[0];
PL$10/*local*/ = v;
_TPL$10/*local*/ = vAr[1];
return v;
}else{
PL$10/*local*/ = undefined; _TPL$10/*local*/ = undefined;
return;
}; })(new PL$5/*C2-constructor*/())/*end temp assign*/
;;
PL$9/*checkVar*/ = false;;
;
};
var PL$23/*x*/ = (function(f){
promiseland.registerRemote("server", "c0b973334fc8122b7b901d826d12edec", "PL$22", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$3/*type:C2*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("c0b973334fc8122b7b901d826d12edec", "PL$22", arguments);
}
};
})(function(PL$18/*par1*/){
var PL$19 = new __Promise();
var PL$20 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};PL$19.reject(e); }; }; };
var PL$21 = function(e){ if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};PL$19.reject(e); };
var _TPL$18/*par1*/;
if(PL$18/*par1*/){ _TPL$18/*par1*/ = PL$18/*par1*/[1];
PL$18/*par1*/ = PL$18/*par1*/[0];}
PL$20(function(){;
/*tracked assign*/(function(v){
if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
PL$10/*local*/ = v;
if (v){
_TPL$10/*local*/ = v[2]();
}else{
_TPL$10/*local*/ = undefined;
};
return v;
})(PL$18/*par1*/)/*end assign*/
;;
if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};PL$19.resolve(); return;;
})();
return PL$19;
});
var PL$28/*getCheck*/ = (function(f){
promiseland.registerRemote("server", "c0b973334fc8122b7b901d826d12edec", "PL$27", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("c0b973334fc8122b7b901d826d12edec", "PL$27", arguments);
}
};
})(function(){
var PL$24 = new __Promise();
var PL$25 = function(code){ return function(res){ try{code(res);}catch(e){ PL$24.reject(e); }; }; };
var PL$26 = function(e){ PL$24.reject(e); };
PL$25(function(){;
PL$24.resolve(PL$9/*checkVar*/); return;;
PL$24.resolve(); return;;
})();
return PL$24;
});
PL$6(function(){;
PL$8/*isClient*/ = false;
(function(){
if (!promiseland.profileHas("client")){
return;
};
;
PL$8/*isClient*/ = true;;
;
})();;
PL$9/*checkVar*/ = false;
classSystem._resolveProvisional(PL$3/*type:C2*/, classSystem.createClass({members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")},{"name":"fun1","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: []}))}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":11,"column":12,"offset":112}, "hashStr": "c0b973334fc8122b7b901d826d12edec", "name": "C2"}, {"c": 3, "d": 4, "fun1": (function(){
;
PL$9/*checkVar*/ = true;;
;
})}));PL$4/*C2*/;;
PL$10/*local*/;
PL$11/*doInit*/;
;
PL$12/*init*/ = ((function(f){
promiseland.registerRemote("server", "c0b973334fc8122b7b901d826d12edec", "PL$17", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("c0b973334fc8122b7b901d826d12edec", "PL$17", arguments);
}
};
})(function(){
var PL$13 = new __Promise();
var PL$15 = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.reject(e); }; }; };
var PL$16 = function(e){ PL$13.reject(e); };
PL$15(function(){;
PL$11/*doInit*/();;
PL$13.resolve(); return;;
})();
return PL$13;
}));
PL$23/*x*/;
;
PL$28/*getCheck*/;
;
if(! PL$8/*isClient*/){
PL$1.resolve({"success": true}); return;;
};
;
PL$12/*init*/().then(PL$6(function(PL$29){PL$29;;
PL$11/*doInit*/();;
PL$28/*getCheck*/().then(PL$6(function(PL$30){if(PL$30){
PL$1.resolve({"success": false}); return;;
};
;
PL$23/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$10/*local*/)).then(PL$6(function(PL$32){PL$31/*tempRes*/ = PL$32;
PL$28/*getCheck*/().then(PL$6(function(PL$33){if(PL$33){
PL$1.resolve({"success": false}); return;;
};
;
PL$10/*local*/[11]();;
PL$28/*getCheck*/().then(PL$6(function(PL$34){if(! PL$34){
debugger;
PL$1.resolve({"success": false}); return;;
};
;
debugger;
PL$1.resolve({"success": true}); return;;
PL$1.resolve(); return;;
}), PL$7);
;}), PL$7);
;}), PL$7);
;}), PL$7);
;}), PL$7);
;})();
return PL$1;
})();
;;
return PL$1});
})();