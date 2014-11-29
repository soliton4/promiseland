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
if (promiseland._hasModule({ hashStr: "611a5a0761f38d97f4674b150f8771da" })){ return promiseland._getModule("611a5a0761f38d97f4674b150f8771da"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "611a5a0761f38d97f4674b150f8771da", "module": PL$1, promising: true });
var PL$18/*Callback*/;try{PL$18/*Callback*/ = Callback;}catch(e){};
var PL$19/*setTimeout*/;try{PL$19/*setTimeout*/ = setTimeout;}catch(e){};
var PL$21/*console*/;try{PL$21/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$12/*waitFun*/;
var PL$4/*Cs1*/;
var PL$30/*x*/;
var PL$3/*type:Cs1*/ = classSystem._createProvisionalClass();
PL$4/*Cs1*/ = PL$3/*type:Cs1*/;
var PL$5/*Cs1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:Cs1*/).then(function(parType){PL$3/*type:Cs1*/ = parType;PL$5/*Cs1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:Cs1*/);});var PL$23/*type:Cs1**/ = classSystem._createPromiseOfClass(PL$3/*type:Cs1*/);
var PL$24/*Cs1**/ = PL$23/*type:Cs1**/;
var PL$25/*Cs1*-constructor*/ = undefined;classSystem.readyPromise(PL$23/*type:Cs1**/).then(function(parType){PL$23/*type:Cs1**/ = parType;PL$25/*Cs1*-constructor*/ = classSystem.getTypeConstructor(PL$23/*type:Cs1**/);});var PL$30/*x*/ = (function(f){
promiseland.registerRemote("server", "611a5a0761f38d97f4674b150f8771da", "PL$29", f, (classSystem.createFunctionType({ "return": PL$23/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("611a5a0761f38d97f4674b150f8771da", "PL$29", arguments);
}
};
})((function(t){return t;})(function(){
var PL$26;
var _TPL$26;
(function(){ var vAr = new PL$25/*Cs1*-constructor*/(); PL$26 = vAr[0]; _TPL$26 = vAr[1]; })();var PL$27 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$22/*a*/){ _TPL$22/*a*/();};PL$26.reject(e); }; }; };
var PL$28 = function(e){ if (_TPL$22/*a*/){ _TPL$22/*a*/();};PL$26.reject(e); };
var PL$22/*a*/;
var _TPL$22/*a*/;
PL$27(function(){;
PL$21/*console*/["log"]("doing the sync request");;
/*temp tracked assign*/(function(vAr){
if (_TPL$22/*a*/){ _TPL$22/*a*/(); };
if(vAr){
var v = vAr[0];
PL$22/*a*/ = v;
_TPL$22/*a*/ = vAr[1];
return v;
}else{
PL$22/*a*/ = undefined; _TPL$22/*a*/ = undefined;
return;
}; })(new PL$5/*Cs1-constructor*/())/*end temp assign*/
;
PL$26.resolve((function(ret){ if (_TPL$22/*a*/){ _TPL$22/*a*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$22/*a*/))); return;;
if (_TPL$22/*a*/){ _TPL$22/*a*/();};PL$26.resolve(); return;;
})();
return [PL$26, _TPL$26];
}));
PL$6(function(){;
var PL$8 = new __Promise();
var PL$9 = new __Promise();
var PL$10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.resolve(e); }; }; };
var PL$11 = function(e){ PL$9.resolve(e); };
PL$10/*try catch*/(function(){PL$12/*waitFun*/ = (function(){
var PL$13 = new __Promise();
var PL$15 = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.reject(e); }; }; };
var PL$16 = function(e){ PL$13.reject(e); };
var PL$17/*cb*/;
PL$15(function(){;
PL$17/*cb*/ = new PL$18/*Callback*/();
PL$19/*setTimeout*/(PL$17/*cb*/, 2000);;
PL$17/*cb*/["promise"].then(PL$15(function(PL$20){PL$20;;
PL$13.resolve(); return;;
}), PL$16);
;})();
return PL$13;
});
classSystem._resolveProvisional(PL$3/*type:Cs1*/, classSystem.createClass({className: "Cs1",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":10,"column":12,"offset":126}, "hashStr": "611a5a0761f38d97f4674b150f8771da", "name": "Cs1"}, {"constructor": (function(){
;
PL$21/*console*/["log"]("constructed");;
;
}), "a": 1, "b": 4, "destroy": (function(){
;
PL$21/*console*/["log"]("destroyed");;
;
})}));PL$4/*Cs1*/;;
(function(){
if (!promiseland.profileHas("server")){
return;
};
var PL$22/*a*/;
var _TPL$22/*a*/;
try{;
/*temp tracked assign*/(function(vAr){
if (_TPL$22/*a*/){ _TPL$22/*a*/(); };
if(vAr){
var v = vAr[0];
PL$22/*a*/ = v;
_TPL$22/*a*/ = vAr[1];
return v;
}else{
PL$22/*a*/ = undefined; _TPL$22/*a*/ = undefined;
return;
}; })(new PL$5/*Cs1-constructor*/())/*end temp assign*/
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$22/*a*/, 3);;
if (_TPL$22/*a*/){ _TPL$22/*a*/();};}catch(e){if (_TPL$22/*a*/){ _TPL$22/*a*/();};throw e};;
})();;
PL$30/*x*/;;
PL$12/*waitFun*/().then(PL$10/*try catch*/(function(PL$31){PL$31;;
(function(){
var PL$32 = new __Promise();
var PL$33 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$35/*b*/){ _TPL$35/*b*/();};PL$32.reject(e); }; }; };
var PL$34 = function(e){ if (_TPL$35/*b*/){ _TPL$35/*b*/();};PL$32.reject(e); };
var PL$35/*b*/;
var _TPL$35/*b*/;
PL$33(function(){;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$33(function(PL$36){/*temp tracked assign*/(function(vAr){
if (_TPL$35/*b*/){ _TPL$35/*b*/(); };
if(vAr){
var v = vAr[0];
PL$35/*b*/ = v;
_TPL$35/*b*/ = vAr[1];
return v;
}else{
PL$35/*b*/ = undefined; _TPL$35/*b*/ = undefined;
return;
}; })(PL$36)/*end temp assign*/
;
if (_TPL$35/*b*/){ _TPL$35/*b*/();};PL$32.resolve(); return;;
}), PL$34);
return r;
})(PL$30/*x*/());/*temptracked promise end*/
;})();
return PL$32;
})();;
PL$8.resolve();
}), PL$11);
;})();
PL$9.then(PL$6(function(PL$37/*e*/){PL$21/*console*/["log"]("error:");;
PL$21/*console*/["log"](PL$37/*e*/);;
PL$8.resolve();;
}));
PL$8.then(PL$6(function(){;
PL$1.resolve(); return;;
}), PL$7)})();
return PL$1;
})();
;;
return PL$1});
})();