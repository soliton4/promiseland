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
var Promise = promiseland.Promise;
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
if (promiseland._hasModule({ hashStr: "dc74df4ccb43279a2ed1cbf4eb2ebf04" })){ return promiseland._getModule("dc74df4ccb43279a2ed1cbf4eb2ebf04"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "dc74df4ccb43279a2ed1cbf4eb2ebf04", "module": _V1, promising: true });
var _V79/*console*/;try{_V79/*console*/ = console;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*testObj*/;
var _V6/*successFun*/;
var _V9/*successFunDbg*/;
var _V10/*createTest*/;
var _V23/*funReturning4*/;
var _V25/*funReturning4debug*/;
var _V26/*returning4*/;
var _V47/*modRes4*/;
var _V75/*c*/;
var _V76/*s*/;
var _V77/*f*/;
var _V78/*m*/;
_V3(function(){;
_V5/*testObj*/ = {};
_V6/*successFun*/ = (function(_V7/*mod*/, _V8/*success*/){
;
if((_V7/*mod*/ && _V7/*mod*/["success"])){
_V8/*success*/();;
};
;
;
});
_V9/*successFunDbg*/ = (function(_V7/*mod*/, _V8/*success*/){
;
debugger;
if((_V7/*mod*/ && _V7/*mod*/["success"])){
_V8/*success*/();;
};
;
;
});
_V10/*createTest*/ = (function(_V11/*parModuleName*/, _V12/*parFun*/){
var _V13 = new __Promise();
var _V15 = function(code){ return function(res){ try{code(res);}catch(e){ _V13.reject(e); }; }; };
var _V16 = function(e){ _V13.reject(e); };
var _V6/*successFun*/;
var _V7/*mod*/;
_V15(function(){;
_V5/*testObj*/[_V11/*parModuleName*/] = false;;
_V6/*successFun*/ = (function(){
;
_V5/*testObj*/[_V11/*parModuleName*/] = true;;
;
});
var _V17 = new __Promise();
var _V18 = new __Promise();
var _V19/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V18.resolve(e); }; }; };
var _V20 = function(e){ _V18.resolve(e); };
_V19/*try catch*/(function(){__requireFun(("test/" + _V11/*parModuleName*/)).then(_V19/*try catch*/(function(_V21){_V7/*mod*/ = _V21;
_V12/*parFun*/(_V7/*mod*/, _V6/*successFun*/);;
_V17.resolve();
}));})();
_V18.then(_V15(function(_V22/*e*/){_V17.resolve();;
}));
_V17.then(_V15(function(){;
;
_V13.resolve(); return;;
}), _V16)})();
return _V13;
});
_V23/*funReturning4*/ = (function(_V7/*mod*/, _V8/*success*/){
;
try
{_V7/*mod*/["fun"]()["then"]((function(_V24/*value*/){
;
if((_V24/*value*/ == 4)){
_V8/*success*/();;
};
;
;
}));;
}catch(_V22/*e*/){};
;
;
});
_V25/*funReturning4debug*/ = (function(_V7/*mod*/, _V8/*success*/){
;
debugger;
try
{_V7/*mod*/["fun"]()["then"]((function(_V24/*value*/){
;
if((_V24/*value*/ == 4)){
_V8/*success*/();;
};
;
;
}));;
}catch(_V22/*e*/){};
;
;
});
_V26/*returning4*/ = (function(_V7/*mod*/, _V8/*success*/){
;
if((_V7/*mod*/ == 4)){
_V8/*success*/();;
};
;
;
});
_V10/*createTest*/("basicmodule", (function(_V7/*mod*/, _V8/*success*/){
;
if((typeof _V7/*mod*/ == "object")){
_V8/*success*/();;
};
;
;
})).then(_V3(function(_V27){_V27;;
_V10/*createTest*/("creatingpromise", _V23/*funReturning4*/).then(_V3(function(_V28){_V28;;
_V10/*createTest*/("creatingpromise2", _V23/*funReturning4*/).then(_V3(function(_V29){_V29;;
_V10/*createTest*/("creatingpromise3", _V23/*funReturning4*/).then(_V3(function(_V30){_V30;;
_V10/*createTest*/("simpleArray", _V6/*successFun*/).then(_V3(function(_V31){_V31;;
_V10/*createTest*/("newParameter", _V6/*successFun*/).then(_V3(function(_V32){_V32;;
_V10/*createTest*/("class", _V6/*successFun*/).then(_V3(function(_V33){_V33;;
_V10/*createTest*/("classInheritence", _V6/*successFun*/).then(_V3(function(_V34){_V34;;
_V10/*createTest*/("conditional", _V23/*funReturning4*/).then(_V3(function(_V35){_V35;;
_V10/*createTest*/("conditional2", _V23/*funReturning4*/).then(_V3(function(_V36){_V36;;
_V10/*createTest*/("conditional3", _V23/*funReturning4*/).then(_V3(function(_V37){_V37;;
_V10/*createTest*/("switch", _V6/*successFun*/).then(_V3(function(_V38){_V38;;
_V10/*createTest*/("switchPromising", _V6/*successFun*/).then(_V3(function(_V39){_V39;;
_V10/*createTest*/("callback", _V23/*funReturning4*/).then(_V3(function(_V40){_V40;;
_V10/*createTest*/("callback2", _V23/*funReturning4*/).then(_V3(function(_V41){_V41;;
_V10/*createTest*/("forloop", _V23/*funReturning4*/).then(_V3(function(_V42){_V42;;
_V10/*createTest*/("forloop2", _V23/*funReturning4*/).then(_V3(function(_V43){_V43;;
_V10/*createTest*/("whileloop", _V23/*funReturning4*/).then(_V3(function(_V44){_V44;;
_V10/*createTest*/("whileloop2", _V23/*funReturning4*/).then(_V3(function(_V45){_V45;;
_V10/*createTest*/("functionDeclaration", _V6/*successFun*/).then(_V3(function(_V46){_V46;;
_V47/*modRes4*/ = (function(_V7/*mod*/, _V8/*success*/){
;
if((_V7/*mod*/["res"] == 4)){
_V8/*success*/();;
};
;
;
});
_V10/*createTest*/("tryCatch", _V47/*modRes4*/).then(_V3(function(_V48){_V48;;
_V10/*createTest*/("tryCatch2", _V47/*modRes4*/).then(_V3(function(_V49){_V49;;
_V10/*createTest*/("require", _V6/*successFun*/).then(_V3(function(_V50){_V50;;
_V10/*createTest*/("string", (function(_V7/*mod*/, _V8/*success*/){
;
if(((_V7/*mod*/["a"] == "\n\r\u2028\u2029\"'") && (_V7/*mod*/["b"] == "xxx\n  xxx"))){
_V8/*success*/();;
};
;
;
})).then(_V3(function(_V51){_V51;;
_V10/*createTest*/("simpleModule", (function(_V7/*mod*/, _V8/*success*/){
;
if((_V7/*mod*/ && (_V7/*mod*/["member"] === 4))){
_V8/*success*/();;
};
;
;
})).then(_V3(function(_V52){_V52;;
_V10/*createTest*/("nonReturningFunction", _V47/*modRes4*/).then(_V3(function(_V53){_V53;;
_V10/*createTest*/("arguments", _V26/*returning4*/).then(_V3(function(_V54){_V54;;
_V10/*createTest*/("typesafetyassign", _V6/*successFun*/).then(_V3(function(_V55){_V55;;
_V10/*createTest*/("typesafetyMembers", _V6/*successFun*/).then(_V3(function(_V56){_V56;;
_V10/*createTest*/("typesafetyMembers2", _V6/*successFun*/).then(_V3(function(_V57){_V57;;
_V10/*createTest*/("typesafetyMembers3", _V6/*successFun*/).then(_V3(function(_V58){_V58;;
_V10/*createTest*/("typesafetyDelayedDefinition", _V6/*successFun*/).then(_V3(function(_V59){_V59;;
_V10/*createTest*/("typesafetyFunction", _V6/*successFun*/).then(_V3(function(_V60){_V60;;
_V10/*createTest*/("typesafetyFunction2", _V6/*successFun*/).then(_V3(function(_V61){_V61;;
_V10/*createTest*/("typesafetyDynamic", _V6/*successFun*/).then(_V3(function(_V62){_V62;;
_V10/*createTest*/("typesafetyMemberFunction", _V6/*successFun*/).then(_V3(function(_V63){_V63;;
_V10/*createTest*/("typesafetyMemberFunction2", _V6/*successFun*/).then(_V3(function(_V64){_V64;;
_V10/*createTest*/("typesafetyConstructor", _V6/*successFun*/).then(_V3(function(_V65){_V65;;
_V10/*createTest*/("typesafetyConstructor2", _V6/*successFun*/).then(_V3(function(_V66){_V66;;
_V10/*createTest*/("typesafetyDestructor", _V6/*successFun*/).then(_V3(function(_V67){_V67;;
_V10/*createTest*/("typesafetyDestructorMember", _V6/*successFun*/).then(_V3(function(_V68){_V68;;
_V10/*createTest*/("typesafetyDestructorOrder", _V6/*successFun*/).then(_V3(function(_V69){_V69;;
_V10/*createTest*/("typesafetyeDestructorCircular", _V6/*successFun*/).then(_V3(function(_V70){_V70;;
_V10/*createTest*/("typesafetyDestructorParameter", _V6/*successFun*/).then(_V3(function(_V71){_V71;;
_V10/*createTest*/("typesafetyDestructorReturn", _V6/*successFun*/).then(_V3(function(_V72){_V72;;
_V10/*createTest*/("typesafetyPromising", _V6/*successFun*/).then(_V3(function(_V73){_V73;;
_V10/*createTest*/("connect", _V6/*successFun*/).then(_V3(function(_V74){_V74;;
_V75/*c*/ = 0;
_V76/*s*/ = 0;
_V77/*f*/ = 0;
for(_V78/*m*/ in _V5/*testObj*/){_V75/*c*/++;;
if(_V5/*testObj*/[_V78/*m*/]){
_V76/*s*/++;;

}else{
_V79/*console*/["log"]((_V78/*m*/ + " failed!"));;
_V77/*f*/++;;
};
;
};
;
_V79/*console*/["log"]((((((("run " + _V75/*c*/) + " tests. ") + _V76/*s*/) + " successful, ") + _V77/*f*/) + " failed"));;
_V1.resolve(_V5/*testObj*/); return;;
_V1.resolve(); return;;
}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();