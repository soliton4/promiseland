(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
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
  
defineFun(["promiseland"], function(promiseland){ var __require = requireFun;

  var __Promise = promiseland.Promise;
  var __modulePromise = new __Promise();
  var classSystem = promiseland.classSystem; 
  var __requireFun = function(parModule){
    var returnPromise = new __Promise();
    try{__require([parModule], function(m){
    if (promiseland.isPromiseLandPromisingModule(m)){
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
    }else{
      returnPromise.resolve(m);
    };
    });
    }catch(e){returnPromise.reject(e);};
  return returnPromise.promise;};
  var __classSystem = promiseland.classSystem;
  
  
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "402cbe927e6b1624100ce8d628f8c4ac" })){ return promiseland._getModule("402cbe927e6b1624100ce8d628f8c4ac"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "402cbe927e6b1624100ce8d628f8c4ac", "module": _V1, promising: true });
var _V18/*Callback*/;try{_V18/*Callback*/ = Callback;}catch(e){};
var _V19/*setTimeout*/;try{_V19/*setTimeout*/ = setTimeout;}catch(e){};
var _V21/*console*/;try{_V21/*console*/ = console;}catch(e){};
var _V37/*e*/;try{_V37/*e*/ = e;}catch(e){};
var _V22/*type:var*/ = __classSystem.getBuiltinType("var");
var _V2 = (function(){
"use strict";
var _V6 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V7 = function(e){ _V1.reject(e); };
var _V12/*waitFun*/;
var _V4/*Cs1*/;
var _V23/*a*/;
var _T_V23/*a*/;
var _V24/*gotit*/;
var _V33/*x*/;
var _V3/*type:Cs1*/ = classSystem._createProvisionalClass();
_V4/*Cs1*/ = _V3/*type:Cs1*/;
var _V5/*Cs1-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:Cs1*/).then(function(parType){_V3/*type:Cs1*/ = parType;_V5/*Cs1-constructor*/ = classSystem.getTypeConstructor(_V3/*type:Cs1*/);});var _V25/*type:Cs1**/ = classSystem._createPromiseOfClass(_V3/*type:Cs1*/);
var _V26/*Cs1**/ = _V25/*type:Cs1**/;
var _V27/*Cs1*-constructor*/ = undefined;classSystem.readyPromise(_V25/*type:Cs1**/).then(function(parType){_V25/*type:Cs1**/ = parType;_V27/*Cs1*-constructor*/ = classSystem.getTypeConstructor(_V25/*type:Cs1**/);});var _V33/*x*/ = (function(f){
promiseland.registerRemote("server", "402cbe927e6b1624100ce8d628f8c4ac", "_V31", f, (classSystem.createFunctionType({ "return": _V25/*type:Cs1**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V32/*temp returnpromise*/;
var _T_V32/*temp returnpromise*/;
(function(){ var vAr = new _V27/*Cs1*-constructor*/(); _V32/*temp returnpromise*/ = vAr[0]; _T_V32/*temp returnpromise*/ = vAr[1]; })();
promiseland.remoteExec("402cbe927e6b1624100ce8d628f8c4ac", "_V31", arguments, _V32/*temp returnpromise*/);
return [_V32/*temp returnpromise*/, _T_V32/*temp returnpromise*/];
}
};
})((function(t){return t;})(function(){
var _V28;
var _T_V28;
(function(){ var vAr = new _V27/*Cs1*-constructor*/(); _V28 = vAr[0]; _T_V28 = vAr[1]; })();var _V29 = function(code){ return function(res){ try{code(res);}catch(e){ _V28.reject(e); }; }; };
var _V30 = function(e){ _V28.reject(e); };
_V29(function(){;
_V21/*console*/["log"]("doing the new request");;
_V28.resolve(new _V5/*Cs1-constructor*/()); return;;
_V28.resolve(); return;;
})();
return [_V28, _T_V28];
}));
_V6(function(){;
var _V8 = new __Promise();
var _V9 = new __Promise();
var _V10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V9.resolve(e); }; }; };
var _V11 = function(e){ _V9.resolve(e); };
_V10/*try catch*/(function(){_V12/*waitFun*/ = (function(){
var _V13 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V16 = function(e){ _V13.reject(e); };
var _V17/*cb*/;
_V15(function(){;
_V17/*cb*/ = new _V18/*Callback*/();
_V19/*setTimeout*/(_V17/*cb*/, 2000);;
_V17/*cb*/["promise"].then(_V15(function(_V20){_V20;;
_V13.resolve(); return;;
}), _V16);
;})();
return _V13;
});
classSystem._resolveProvisional(_V3/*type:Cs1*/, classSystem.createClass({members: [{"name":"a","type":_V22/*type:var*/},{"name":"b","type":_V22/*type:var*/},{"name":"destroy","type":_V22/*type:var*/}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":126}, "hashStr": "402cbe927e6b1624100ce8d628f8c4ac", "name": "Cs1"}, {"a": 1, "b": 4, "destroy": (function(){
;
_V21/*console*/["log"]("destroying");;
;
})}));_V4/*Cs1*/;;
_V23/*a*/;
_V24/*gotit*/ = false;
_V33/*x*/;;
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
_V24/*gotit*/ = true;;
;
})();;
var _V34 = new __Promise();
if(!_V24/*gotit*/){
_V12/*waitFun*/().then(_V10/*try catch*/(function(_V35){_V35;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V10/*try catch*/(function(_V36){/*temp tracked assign*/(function(vAr){
if (_T_V23/*a*/){ _T_V23/*a*/(); };
if(vAr){
var v = vAr[0];
_V23/*a*/ = v;
_T_V23/*a*/ = vAr[1];
return v;
}else{
_V23/*a*/ = undefined; _T_V23/*a*/ = undefined;
return;
}; })(_V36)/*end temp assign*/
;;
_V21/*console*/["log"](("a:" + _V23/*a*/[7]));;
_V34.resolve();;
}), _V11);
return r;
})(_V33/*x*/());/*temptracked promise end*/
;}), _V11);
;
}else{
_V34.resolve();}; _V34.then(function(){;
;
_V8.resolve();
});})();
_V9.then(_V6(function(e){_V21/*console*/["log"]("error:");;
_V21/*console*/["log"](_V37/*e*/);;
_V8.resolve();;
}));
_V8.then(_V6(function(){;
_V1.resolve(); return;;
}), _V7)})();
return _V1;
})();
;;
return _V1});
})();