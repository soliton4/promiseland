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
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "da40cc33921b9c46c8c6f40737bb3c21" })){ return promiseland._getModule("da40cc33921b9c46c8c6f40737bb3c21"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "da40cc33921b9c46c8c6f40737bb3c21", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$8/*destroyed*/;
var PL$9/*isClient*/;
var PL$4/*C1*/;
var PL$10/*local*/;
var _TPL$10/*local*/;
var PL$11/*init*/;
var PL$18/*extraFun*/;
var PL$23/*x*/;
var PL$28/*getLocalB*/;
var PL$31/*temp*/;
var _TPL$31/*temp*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});var PL$18/*extraFun*/ = function(PL$17/*par1*/){
var _TPL$17/*par1*/;
if(PL$17/*par1*/){ _TPL$17/*par1*/ = PL$17/*par1*/[1];
PL$17/*par1*/ = PL$17/*par1*/[0];}

  try{;
  /*tracked assign*/(function(v){
if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
PL$10/*local*/ = v;
if (v){
_TPL$10/*local*/ = v[2]();
}else{
_TPL$10/*local*/ = undefined;
};
return v;
})(PL$17/*par1*/)/*end assign*/
;
  if (_TPL$17/*par1*/){ _TPL$17/*par1*/();};}catch(e){if (_TPL$17/*par1*/){ _TPL$17/*par1*/();};throw e};;};
var PL$23/*x*/ = (function(f){
promiseland.registerRemote("server", "da40cc33921b9c46c8c6f40737bb3c21", "PL$22", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$3/*type:C1*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("da40cc33921b9c46c8c6f40737bb3c21", "PL$22", arguments);
}
};
})(function(PL$17/*par1*/){
var PL$19 = new __Promise();
var PL$20 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$17/*par1*/){ _TPL$17/*par1*/();};PL$19.reject(e); }; }; };
var PL$21 = function(e){ if (_TPL$17/*par1*/){ _TPL$17/*par1*/();};PL$19.reject(e); };
var _TPL$17/*par1*/;
if(PL$17/*par1*/){ _TPL$17/*par1*/ = PL$17/*par1*/[1];
PL$17/*par1*/ = PL$17/*par1*/[0];}
PL$20(function(){

  ;
  /*tracked assign*/(function(v){
if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
PL$10/*local*/ = v;
if (v){
_TPL$10/*local*/ = v[2]();
}else{
_TPL$10/*local*/ = undefined;
};
return v;
})(PL$17/*par1*/)/*end assign*/
;
  PL$19.resolve((function(ret){ if (_TPL$17/*par1*/){ _TPL$17/*par1*/();};return ret; })(PL$10/*local*/[9])); return;;
  if (_TPL$17/*par1*/){ _TPL$17/*par1*/();};PL$19.resolve(); return;;})();
return PL$19;
});
var PL$28/*getLocalB*/ = (function(f){
promiseland.registerRemote("server", "da40cc33921b9c46c8c6f40737bb3c21", "PL$27", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("da40cc33921b9c46c8c6f40737bb3c21", "PL$27", arguments);
}
};
})(function(){
var PL$24 = new __Promise();
var PL$25 = function(code){ return function(res){ try{code(res);}catch(e){ PL$24.reject(e); }; }; };
var PL$26 = function(e){ PL$24.reject(e); };
PL$25(function(){

  ;
  PL$24.resolve(PL$10/*local*/[9]); return;
  PL$24.resolve(); return;})();
return PL$24;
});
PL$6(function(){

  ;
  PL$8/*destroyed*/ = false;
  PL$9/*isClient*/ = false;
  (function(){
  if (!promiseland.profileHas("client")){
  return;
};

    ;
    PL$9/*isClient*/ = true;
    ;})();
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":110}, "hashStr": "da40cc33921b9c46c8c6f40737bb3c21", "name": "C1"}, {"a": 1, "b": 2}));PL$4/*C1*/;
  PL$10/*local*/;
  PL$11/*init*/ = ((function(f){
promiseland.registerRemote("server", "da40cc33921b9c46c8c6f40737bb3c21", "PL$16", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("da40cc33921b9c46c8c6f40737bb3c21", "PL$16", arguments);
}
};
})(function(){
  var PL$12 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$15 = function(e){ PL$12.reject(e); };
PL$14(function(){
  
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
}; })(new PL$5/*C1-constructor*/())/*end temp assign*/
;
    PL$12.resolve(); return;})();
return PL$12;
}));
  PL$18/*extraFun*/;
  ;
  PL$23/*x*/;
  ;
  PL$28/*getLocalB*/;
  ;
  if(! PL$9/*isClient*/){
    PL$1.resolve({"success": true}); return;
  };
  ;
  PL$11/*init*/().then(PL$6(function(PL$29){PL$29;
  PL$28/*getLocalB*/().then(PL$6(function(PL$30){if((PL$30 !== 2)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  /*temp tracked assign*/(function(vAr){
if (_TPL$31/*temp*/){ _TPL$31/*temp*/(); };
if(vAr){
var v = vAr[0];
PL$31/*temp*/ = v;
_TPL$31/*temp*/ = vAr[1];
return v;
}else{
PL$31/*temp*/ = undefined; _TPL$31/*temp*/ = undefined;
return;
}; })(new PL$5/*C1-constructor*/())/*end temp assign*/
;
  if(PL$9/*isClient*/){
    (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$31/*temp*/, 4);
  };
  ;
  PL$23/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$31/*temp*/)).then(PL$6(function(PL$32){PL$32;
  PL$28/*getLocalB*/().then(PL$6(function(PL$33){if((PL$33 !== 4)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if(PL$9/*isClient*/){
    (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$31/*temp*/, 5);
  };
  ;
  PL$28/*getLocalB*/().then(PL$6(function(PL$34){if((PL$34 !== 5)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$1.resolve({"success": true}); return;
  PL$1.resolve(); return;}), PL$7);
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