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
if (promiseland._hasModule({ hashStr: "316f7703caae55c1b409374995265da1" })){ return promiseland._getModule("316f7703caae55c1b409374995265da1"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "316f7703caae55c1b409374995265da1", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$8/*destroyed*/;
var PL$9/*isClient*/;
var PL$4/*C1*/;
var PL$19/*x*/;
var PL$25/*check*/;
var PL$26/*tempres*/;
var PL$27/*serverDestroyed*/;
var PL$28/*fx*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});var PL$10/*type:C1**/ = classSystem._createPromiseOfClass(PL$3/*type:C1*/);
var PL$11/*C1**/ = PL$10/*type:C1**/;
var PL$12/*C1*-constructor*/ = undefined;classSystem.readyPromise(PL$10/*type:C1**/).then(function(parType){PL$10/*type:C1**/ = parType;PL$12/*C1*-constructor*/ = classSystem.getTypeConstructor(PL$10/*type:C1**/);});var PL$19/*x*/ = (function(f){
promiseland.registerRemote("server", "316f7703caae55c1b409374995265da1", "PL$18", f, (classSystem.createFunctionType({ "return": PL$10/*type:C1**/, arguments: [classSystem.getBuiltinType("var")]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("316f7703caae55c1b409374995265da1", "PL$18", arguments);
}
};
})((function(t){return t;})(function(PL$13/*par1*/){
var PL$14;
var _TPL$14;
(function(){ var vAr = new PL$12/*C1*-constructor*/(); PL$14 = vAr[0]; _TPL$14 = vAr[1]; })();var PL$15 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$17/*temp*/){ _TPL$17/*temp*/();};PL$14.reject(e); }; }; };
var PL$16 = function(e){ if (_TPL$17/*temp*/){ _TPL$17/*temp*/();};PL$14.reject(e); };
var PL$17/*temp*/;
var _TPL$17/*temp*/;
PL$15(function(){;
PL$8/*destroyed*/ = false;;
/*temp tracked assign*/(function(vAr){
if (_TPL$17/*temp*/){ _TPL$17/*temp*/(); };
if(vAr){
var v = vAr[0];
PL$17/*temp*/ = v;
_TPL$17/*temp*/ = vAr[1];
return v;
}else{
PL$17/*temp*/ = undefined; _TPL$17/*temp*/ = undefined;
return;
}; })(new PL$5/*C1-constructor*/())/*end temp assign*/
;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$17/*temp*/, 2);;
PL$14.resolve((function(ret){ if (_TPL$17/*temp*/){ _TPL$17/*temp*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$17/*temp*/))); return;;
if (_TPL$17/*temp*/){ _TPL$17/*temp*/();};PL$14.resolve(); return;;
})();
return [PL$14, _TPL$14];
}));
var PL$25/*check*/ = (function(f){
promiseland.registerRemote("server", "316f7703caae55c1b409374995265da1", "PL$24", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("316f7703caae55c1b409374995265da1", "PL$24", arguments);
}
};
})(function(){
var PL$20 = new __Promise();
var PL$22 = function(code){ return function(res){ try{code(res);}catch(e){ PL$20.reject(e); }; }; };
var PL$23 = function(e){ PL$20.reject(e); };
PL$22(function(){;
PL$20.resolve(PL$8/*destroyed*/); return;;
PL$20.resolve(); return;;
})();
return PL$20;
});
PL$6(function(){;
PL$8/*destroyed*/ = false;
PL$9/*isClient*/ = false;
(function(){
if (!promiseland.profileHas("client")){
return;
};
;
PL$9/*isClient*/ = true;;
;
})();;
classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":9,"column":12,"offset":109}, "hashStr": "316f7703caae55c1b409374995265da1", "name": "C1"}, {"a": 1, "destroy": (function(){
;
PL$8/*destroyed*/ = true;;
;
})}));PL$4/*C1*/;;
PL$19/*x*/;
;
PL$25/*check*/;
;
PL$26/*tempres*/;
PL$27/*serverDestroyed*/;
PL$28/*fx*/ = (function(){
var PL$29 = new __Promise();
var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ if (_TPL$32/*t*/){ _TPL$32/*t*/();};PL$29.reject(e); }; }; };
var PL$31 = function(e){ if (_TPL$32/*t*/){ _TPL$32/*t*/();};PL$29.reject(e); };
var PL$32/*t*/;
var _TPL$32/*t*/;
PL$30(function(){;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], PL$30(function(PL$33){/*temp tracked assign*/(function(vAr){
if (_TPL$32/*t*/){ _TPL$32/*t*/(); };
if(vAr){
var v = vAr[0];
PL$32/*t*/ = v;
_TPL$32/*t*/ = vAr[1];
return v;
}else{
PL$32/*t*/ = undefined; _TPL$32/*t*/ = undefined;
return;
}; })(PL$33)/*end temp assign*/
;
PL$25/*check*/().then(PL$30(function(PL$34){PL$27/*serverDestroyed*/ = PL$34;;
PL$26/*tempres*/ = PL$32/*t*/[7];;
if (_TPL$32/*t*/){ _TPL$32/*t*/();};PL$29.resolve(); return;;
}), PL$31);
;}), PL$31);
return r;
})(PL$19/*x*/());/*temptracked promise end*/
;})();
return PL$29;
});
var PL$35 = new __Promise();
if(PL$9/*isClient*/){
PL$28/*fx*/().then(PL$6(function(PL$36){PL$36;;
PL$35.resolve();;
}), PL$7);
;
}else{
PL$1.resolve({"success": true}); return;;
PL$35.resolve();;
}; PL$35.then(function(){;
;
if((PL$26/*tempres*/ != 2)){
PL$1.resolve({"success": false}); return;;
};
;
if(! PL$27/*serverDestroyed*/){
PL$1.resolve({"success": false}); return;;
};
;
PL$1.resolve({"success": true}); return;;
PL$1.resolve(); return;;
});})();
return PL$1;
})();
;;
return PL$1});
})();