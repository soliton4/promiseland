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
if (promiseland._hasModule({ hashStr: "f7b004e050b8d655168c8ab2de8c2aef" })){ return promiseland._getModule("f7b004e050b8d655168c8ab2de8c2aef"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "f7b004e050b8d655168c8ab2de8c2aef", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$8/*isClient*/;
var PL$9/*checkVar*/;
var PL$4/*C2*/;
var PL$11/*local*/;
var _TPL$11/*local*/;
var PL$13/*init*/;
var PL$34/*tempRes*/;
var PL$3/*type:C2*/ = classSystem._createProvisionalClass();
PL$4/*C2*/ = PL$3/*type:C2*/;
var PL$5/*C2-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C2*/).then(function(parType){PL$3/*type:C2*/ = parType;PL$5/*C2-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C2*/);});function PL$12/*doInit*/(){

  ;
  /*temp tracked assign*/(function(vAr){
if (_TPL$11/*local*/){ _TPL$11/*local*/(); };
if(vAr){
var v = vAr[0];
PL$11/*local*/ = v;
_TPL$11/*local*/ = vAr[1];
return v;
}else{
PL$11/*local*/ = undefined; _TPL$11/*local*/ = undefined;
return;
}; })(new PL$5/*C2-constructor*/())/*end temp assign*/
;
  PL$9/*checkVar*/ = 1;
  ;};
var PL$19/*x*/ = (function(f){
promiseland.registerRemote("server", "f7b004e050b8d655168c8ab2de8c2aef", "PL$25", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$3/*type:C2*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("f7b004e050b8d655168c8ab2de8c2aef", "PL$25", arguments);
}
};
})(function (PL$20/*par1*/){
var PL$21 = new __Promise();
var PL$23 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$20/*par1*/){ _TPL$20/*par1*/();};PL$21.reject(e); }; }; };
var PL$24 = function(e){ if (_TPL$20/*par1*/){ _TPL$20/*par1*/();};PL$21.reject(e); };
var _TPL$20/*par1*/;
if(PL$20/*par1*/){ _TPL$20/*par1*/ = PL$20/*par1*/[1];
PL$20/*par1*/ = PL$20/*par1*/[0];}
PL$23(function(){

  ;
  /*tracked assign*/(function(v){
if (_TPL$11/*local*/){ _TPL$11/*local*/(); };
PL$11/*local*/ = v;
if (v){
_TPL$11/*local*/ = v[2]();
}else{
_TPL$11/*local*/ = undefined;
};
return v;
})(PL$20/*par1*/)/*end assign*/
;
  if (_TPL$20/*par1*/){ _TPL$20/*par1*/();};PL$21.resolve(); return;;})();
return PL$21;
});
var PL$26/*getCheck*/ = (function(f){
promiseland.registerRemote("server", "f7b004e050b8d655168c8ab2de8c2aef", "PL$31", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("f7b004e050b8d655168c8ab2de8c2aef", "PL$31", arguments);
}
};
})(function (){
var PL$27 = new __Promise();
var PL$29 = function(code){ return function(res){ try{code(res);}catch(e){ PL$27.reject(e); }; }; };
var PL$30 = function(e){ PL$27.reject(e); };
PL$29(function(){

  ;
  PL$27.resolve(PL$9/*checkVar*/); return;
  PL$27.resolve(); return;})();
return PL$27;
});
PL$6(function(){

  ;
  PL$8/*isClient*/ = false;
  (function(){
  if (!promiseland.profileHas("client")){
  return;
};

    ;
    PL$8/*isClient*/ = true;
    ;})();
  PL$9/*checkVar*/ = 1;
  classSystem._resolveProvisional(PL$3/*type:C2*/, classSystem.createClass({className: "C2",members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")},{"name":"fun1","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [classSystem.getBuiltinType("var")]}))}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":11,"column":12,"offset":108}, "hashStr": "f7b004e050b8d655168c8ab2de8c2aef", "name": "C2"}, {"c": 3, "d": 4, "fun1": (function(PL$10/*v*/){
  
    ;
    PL$9/*checkVar*/ = PL$10/*v*/;
    ;})}));PL$4/*C2*/;
  PL$11/*local*/;
  /* function doInit (){} - hoisted */;
  ;
  PL$13/*init*/ = ((function(f){
promiseland.registerRemote("server", "f7b004e050b8d655168c8ab2de8c2aef", "PL$18", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("f7b004e050b8d655168c8ab2de8c2aef", "PL$18", arguments);
}
};
})(function(){
  var PL$14 = new __Promise();
var PL$16 = function(code){ return function(res){ try{code(res);}catch(e){ PL$14.reject(e); }; }; };
var PL$17 = function(e){ PL$14.reject(e); };
PL$16(function(){
  
    ;
    PL$12/*doInit*/();
    PL$14.resolve(); return;})();
return PL$14;
}));
  /* function x (){} - hoisted */;
  ;
  /* function getCheck (){} - hoisted */;
  ;
  if(! PL$8/*isClient*/){
    PL$1.resolve({"success": true}); return;
  };
  ;
  PL$13/*init*/().then(PL$6(function(PL$32){PL$32;
  PL$12/*doInit*/();
  PL$26/*getCheck*/().then(PL$6(function(PL$33){if((PL$33 !== 1)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$19/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$11/*local*/)).then(PL$6(function(PL$35){PL$34/*tempRes*/ = PL$35;
  PL$26/*getCheck*/().then(PL$6(function(PL$36){if((PL$36 !== 1)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$11/*local*/[11](2);
  PL$26/*getCheck*/().then(PL$6(function(PL$37){if((PL$37 !== 2)){
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