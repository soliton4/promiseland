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
if (promiseland._hasModule({ hashStr: "91c253f473d9ac5d6b2cdcfd0dcff7bc" })){ return promiseland._getModule("91c253f473d9ac5d6b2cdcfd0dcff7bc"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "91c253f473d9ac5d6b2cdcfd0dcff7bc", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$9 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$10 = function(e){ PL$1.reject(e); };
var PL$11/*isClient*/;
var PL$4/*C1*/;
var PL$7/*C2*/;
var PL$12/*local*/;
var _TPL$12/*local*/;
var PL$14/*init*/;
var PL$37/*tempC1*/;
var _TPL$37/*tempC1*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});var PL$6/*type:C2*/ = classSystem._createProvisionalClass();
PL$7/*C2*/ = PL$6/*type:C2*/;
var PL$8/*C2-constructor*/ = undefined;classSystem.readyPromise(PL$6/*type:C2*/).then(function(parType){PL$6/*type:C2*/ = parType;PL$8/*C2-constructor*/ = classSystem.getTypeConstructor(PL$6/*type:C2*/);});function PL$13/*doInit*/(){

  ;
  /*temp tracked assign*/(function(vAr){
if (_TPL$12/*local*/){ _TPL$12/*local*/(); };
if(vAr){
var v = vAr[0];
PL$12/*local*/ = v;
_TPL$12/*local*/ = vAr[1];
return v;
}else{
PL$12/*local*/ = undefined; _TPL$12/*local*/ = undefined;
return;
}; })(new PL$8/*C2-constructor*/())/*end temp assign*/
;
  (function(s, vAr){ vAr = s[12](vAr); var v = vAr[0]; s[11] = v; if(s[13]){ s[13](); }; s[13] = v[3](s[1]); vAr[1](); return v; })(PL$12/*local*/, new PL$5/*C1-constructor*/());
  ;};
var PL$20/*x*/ = (function(f){
promiseland.registerRemote("server", "91c253f473d9ac5d6b2cdcfd0dcff7bc", "PL$26", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$6/*type:C2*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("91c253f473d9ac5d6b2cdcfd0dcff7bc", "PL$26", arguments);
}
};
})(function (PL$21/*par1*/){
var PL$22 = new __Promise();
var PL$24 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$21/*par1*/){ _TPL$21/*par1*/();};PL$22.reject(e); }; }; };
var PL$25 = function(e){ if (_TPL$21/*par1*/){ _TPL$21/*par1*/();};PL$22.reject(e); };
var _TPL$21/*par1*/;
if(PL$21/*par1*/){ _TPL$21/*par1*/ = PL$21/*par1*/[1];
PL$21/*par1*/ = PL$21/*par1*/[0];}
PL$24(function(){

  ;
  /*tracked assign*/(function(v){
if (_TPL$12/*local*/){ _TPL$12/*local*/(); };
PL$12/*local*/ = v;
if (v){
_TPL$12/*local*/ = v[2]();
}else{
_TPL$12/*local*/ = undefined;
};
return v;
})(PL$21/*par1*/)/*end assign*/
;
  if (_TPL$21/*par1*/){ _TPL$21/*par1*/();};PL$22.resolve(); return;;})();
return PL$22;
});
var PL$27/*getLocalTB*/ = (function(f){
promiseland.registerRemote("server", "91c253f473d9ac5d6b2cdcfd0dcff7bc", "PL$32", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("91c253f473d9ac5d6b2cdcfd0dcff7bc", "PL$32", arguments);
}
};
})(function (){
var PL$28 = new __Promise();
var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ PL$28.reject(e); }; }; };
var PL$31 = function(e){ PL$28.reject(e); };
PL$30(function(){

  ;
  PL$28.resolve(PL$12/*local*/[11][9]); return;
  PL$28.resolve(); return;})();
return PL$28;
});
PL$9(function(){

  ;
  PL$11/*isClient*/ = false;
  (function(){
  if (!promiseland.profileHas("client")){
  return;
};

    ;
    PL$11/*isClient*/ = true;
    ;})();
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":9,"column":12,"offset":87}, "hashStr": "91c253f473d9ac5d6b2cdcfd0dcff7bc", "name": "C1"}, {"a": 1, "b": 2}));PL$4/*C1*/;
  classSystem._resolveProvisional(PL$6/*type:C2*/, classSystem.createClass({className: "C2",members: [{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"d","type":classSystem.getBuiltinType("var")},{"name":"t1","type":PL$3/*type:C1*/}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":14,"column":12,"offset":129}, "hashStr": "91c253f473d9ac5d6b2cdcfd0dcff7bc", "name": "C2"}, {"c": 3, "d": 4, "t1": undefined}));PL$7/*C2*/;
  PL$12/*local*/;
  /* function doInit (){} - hoisted */;
  ;
  PL$14/*init*/ = ((function(f){
promiseland.registerRemote("server", "91c253f473d9ac5d6b2cdcfd0dcff7bc", "PL$19", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("91c253f473d9ac5d6b2cdcfd0dcff7bc", "PL$19", arguments);
}
};
})(function(){
  var PL$15 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$15.reject(e); }; }; };
var PL$18 = function(e){ PL$15.reject(e); };
PL$17(function(){
  
    ;
    PL$13/*doInit*/();
    PL$15.resolve(); return;})();
return PL$15;
}));
  /* function x (){} - hoisted */;
  ;
  /* function getLocalTB (){} - hoisted */;
  ;
  if(! PL$11/*isClient*/){
    PL$1.resolve({"success": true}); return;
  };
  ;
  PL$14/*init*/().then(PL$9(function(PL$33){PL$33;
  PL$13/*doInit*/();
  PL$27/*getLocalTB*/().then(PL$9(function(PL$34){if((PL$34 !== 2)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$12/*local*/[11], 6);
  PL$20/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$12/*local*/)).then(PL$9(function(PL$35){PL$35;
  PL$27/*getLocalTB*/().then(PL$9(function(PL$36){if((PL$36 !== 6)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  /*temp tracked assign*/(function(vAr){
if (_TPL$37/*tempC1*/){ _TPL$37/*tempC1*/(); };
if(vAr){
var v = vAr[0];
PL$37/*tempC1*/ = v;
_TPL$37/*tempC1*/ = vAr[1];
return v;
}else{
PL$37/*tempC1*/ = undefined; _TPL$37/*tempC1*/ = undefined;
return;
}; })(new PL$5/*C1-constructor*/())/*end temp assign*/
;
  (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$37/*tempC1*/, 12);
  (function(s, v){ var vAr = [v, v[2]()]; vAr = s[12](vAr); s[11] = v; if(s[13]){ s[13](); }; s[13] = v[3](s[1]); vAr[1](); return v; })(PL$12/*local*/, PL$37/*tempC1*/);
  PL$27/*getLocalTB*/().then(PL$9(function(PL$38){if((PL$38 !== 12)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$37/*tempC1*/, 13);
  PL$27/*getLocalTB*/().then(PL$9(function(PL$39){if((PL$39 !== 13)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$1.resolve({"success": true}); return;
  PL$1.resolve(); return;}), PL$10);
;}), PL$10);
;}), PL$10);
;}), PL$10);
;}), PL$10);
;}), PL$10);
;})();
return PL$1;
})();
;;
return PL$1});
})();