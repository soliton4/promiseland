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
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "e6b2e8500d6db37ea1bd86a3074a93f4" })){ return promiseland._getModule("e6b2e8500d6db37ea1bd86a3074a93f4"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "e6b2e8500d6db37ea1bd86a3074a93f4", "module": _V1, promising: true });
var _V24/*console*/;try{_V24/*console*/ = console;}catch(e){};
var _V2 = (function(){
"use strict";
var _V3 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V4 = function(e){ _V1.reject(e); };
var _V5/*testObj*/;
var _V7/*successFun*/;
var _V10/*successFunDbg*/;
var _V11/*createTest*/;
var _V25/*funReturning4*/;
var _V27/*funReturning4debug*/;
var _V28/*returning4*/;
var _V49/*modRes4*/;
var _V78/*c*/;
var _V79/*s*/;
var _V80/*f*/;
var _V81/*m*/;
_V3(function(){;
__requireFun("./testObj").then(_V3(function(_V6){_V5/*testObj*/ = _V6;
_V7/*successFun*/ = (function(_V8/*mod*/, _V9/*success*/){
;
if((_V8/*mod*/ && _V8/*mod*/["success"])){
_V9/*success*/();;
};
;
;
});
_V10/*successFunDbg*/ = (function(_V8/*mod*/, _V9/*success*/){
;
debugger;
if((_V8/*mod*/ && _V8/*mod*/["success"])){
_V9/*success*/();;
};
;
;
});
_V11/*createTest*/ = (function(_V12/*parModuleName*/, _V13/*parFun*/){
var _V14 = new __Promise();
var _V16 = function(code){ return function(res){ try{code(res);}catch(e){ _V14.reject(e); }; }; };
var _V17 = function(e){ _V14.reject(e); };
var _V7/*successFun*/;
var _V8/*mod*/;
_V16(function(){;
if(! _V13/*parFun*/){
_V13/*parFun*/ = _V7/*successFun*/;;
};
;
_V5/*testObj*/[_V12/*parModuleName*/] = false;;
_V7/*successFun*/ = (function(){
;
_V5/*testObj*/[_V12/*parModuleName*/] = true;;
;
});
var _V18 = new __Promise();
var _V19 = new __Promise();
var _V20/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V19.resolve(e); }; }; };
var _V21 = function(e){ _V19.resolve(e); };
_V20/*try catch*/(function(){__requireFun(("./" + _V12/*parModuleName*/)).then(_V20/*try catch*/(function(_V22){_V8/*mod*/ = _V22;
_V13/*parFun*/(_V8/*mod*/, _V7/*successFun*/);;
_V18.resolve();
}), _V21);
;})();
_V19.then(_V16(function(_V23/*e*/){_V24/*console*/["log"]("something went wrong");;
_V18.resolve();;
}));
_V18.then(_V16(function(){;
;
_V14.resolve(); return;;
}), _V17)})();
return _V14;
});
_V25/*funReturning4*/ = (function(_V8/*mod*/, _V9/*success*/){
;
try
{_V8/*mod*/["fun"]()["then"]((function(_V26/*value*/){
;
if((_V26/*value*/ == 4)){
_V9/*success*/();;
};
;
;
}));;
}catch(_V23/*e*/){};
;
;
});
_V27/*funReturning4debug*/ = (function(_V8/*mod*/, _V9/*success*/){
;
debugger;
try
{_V8/*mod*/["fun"]()["then"]((function(_V26/*value*/){
;
if((_V26/*value*/ == 4)){
_V9/*success*/();;
};
;
;
}));;
}catch(_V23/*e*/){};
;
;
});
_V28/*returning4*/ = (function(_V8/*mod*/, _V9/*success*/){
;
if((_V8/*mod*/ == 4)){
_V9/*success*/();;
};
;
;
});
_V11/*createTest*/("basicmodule", (function(_V8/*mod*/, _V9/*success*/){
;
if((typeof _V8/*mod*/ == "object")){
_V9/*success*/();;
};
;
;
})).then(_V3(function(_V29){_V29;;
_V11/*createTest*/("creatingpromise", _V25/*funReturning4*/).then(_V3(function(_V30){_V30;;
_V11/*createTest*/("creatingpromise2", _V25/*funReturning4*/).then(_V3(function(_V31){_V31;;
_V11/*createTest*/("creatingpromise3", _V25/*funReturning4*/).then(_V3(function(_V32){_V32;;
_V11/*createTest*/("simpleArray", _V7/*successFun*/).then(_V3(function(_V33){_V33;;
_V11/*createTest*/("newParameter", _V7/*successFun*/).then(_V3(function(_V34){_V34;;
_V11/*createTest*/("class", _V7/*successFun*/).then(_V3(function(_V35){_V35;;
_V11/*createTest*/("classInheritence", _V7/*successFun*/).then(_V3(function(_V36){_V36;;
_V11/*createTest*/("conditional", _V25/*funReturning4*/).then(_V3(function(_V37){_V37;;
_V11/*createTest*/("conditional2", _V25/*funReturning4*/).then(_V3(function(_V38){_V38;;
_V11/*createTest*/("conditional3", _V25/*funReturning4*/).then(_V3(function(_V39){_V39;;
_V11/*createTest*/("switch", _V7/*successFun*/).then(_V3(function(_V40){_V40;;
_V11/*createTest*/("switchPromising", _V7/*successFun*/).then(_V3(function(_V41){_V41;;
_V11/*createTest*/("callback", _V25/*funReturning4*/).then(_V3(function(_V42){_V42;;
_V11/*createTest*/("callback2", _V25/*funReturning4*/).then(_V3(function(_V43){_V43;;
_V11/*createTest*/("forloop", _V25/*funReturning4*/).then(_V3(function(_V44){_V44;;
_V11/*createTest*/("forloop2", _V25/*funReturning4*/).then(_V3(function(_V45){_V45;;
_V11/*createTest*/("whileloop", _V25/*funReturning4*/).then(_V3(function(_V46){_V46;;
_V11/*createTest*/("whileloop2", _V25/*funReturning4*/).then(_V3(function(_V47){_V47;;
_V11/*createTest*/("functionDeclaration", _V7/*successFun*/).then(_V3(function(_V48){_V48;;
_V49/*modRes4*/ = (function(_V8/*mod*/, _V9/*success*/){
;
if((_V8/*mod*/["res"] == 4)){
_V9/*success*/();;
};
;
;
});
_V11/*createTest*/("tryCatch", _V49/*modRes4*/).then(_V3(function(_V50){_V50;;
_V11/*createTest*/("tryCatch2", _V49/*modRes4*/).then(_V3(function(_V51){_V51;;
_V11/*createTest*/("require", _V7/*successFun*/).then(_V3(function(_V52){_V52;;
_V11/*createTest*/("string", (function(_V8/*mod*/, _V9/*success*/){
;
if(((_V8/*mod*/["a"] == "\n\r\u2028\u2029\"'") && (_V8/*mod*/["b"] == "xxx\n  xxx"))){
_V9/*success*/();;
};
;
;
})).then(_V3(function(_V53){_V53;;
_V11/*createTest*/("simpleModule", (function(_V8/*mod*/, _V9/*success*/){
;
if((_V8/*mod*/ && (_V8/*mod*/["member"] === 4))){
_V9/*success*/();;
};
;
;
})).then(_V3(function(_V54){_V54;;
_V11/*createTest*/("nonReturningFunction", _V49/*modRes4*/).then(_V3(function(_V55){_V55;;
_V11/*createTest*/("arguments", _V28/*returning4*/).then(_V3(function(_V56){_V56;;
_V11/*createTest*/("requireException", _V7/*successFun*/).then(_V3(function(_V57){_V57;;
_V11/*createTest*/("typesafetyassign", _V7/*successFun*/).then(_V3(function(_V58){_V58;;
_V11/*createTest*/("typesafetyMembers", _V7/*successFun*/).then(_V3(function(_V59){_V59;;
_V11/*createTest*/("typesafetyMembers2", _V7/*successFun*/).then(_V3(function(_V60){_V60;;
_V11/*createTest*/("typesafetyMembers3", _V7/*successFun*/).then(_V3(function(_V61){_V61;;
_V11/*createTest*/("typesafetyDelayedDefinition", _V7/*successFun*/).then(_V3(function(_V62){_V62;;
_V11/*createTest*/("typesafetyFunction", _V7/*successFun*/).then(_V3(function(_V63){_V63;;
_V11/*createTest*/("typesafetyFunction2", _V7/*successFun*/).then(_V3(function(_V64){_V64;;
_V11/*createTest*/("typesafetyDynamic", _V7/*successFun*/).then(_V3(function(_V65){_V65;;
_V11/*createTest*/("typesafetyMemberFunction", _V7/*successFun*/).then(_V3(function(_V66){_V66;;
_V11/*createTest*/("typesafetyMemberFunction2", _V7/*successFun*/).then(_V3(function(_V67){_V67;;
_V11/*createTest*/("typesafetyConstructor", _V7/*successFun*/).then(_V3(function(_V68){_V68;;
_V11/*createTest*/("typesafetyConstructor2", _V7/*successFun*/).then(_V3(function(_V69){_V69;;
_V11/*createTest*/("typesafetyDestructor", _V7/*successFun*/).then(_V3(function(_V70){_V70;;
_V11/*createTest*/("typesafetyDestructorMember", _V7/*successFun*/).then(_V3(function(_V71){_V71;;
_V11/*createTest*/("typesafetyDestructorOrder", _V7/*successFun*/).then(_V3(function(_V72){_V72;;
_V11/*createTest*/("typesafetyeDestructorCircular", _V7/*successFun*/).then(_V3(function(_V73){_V73;;
_V11/*createTest*/("typesafetyDestructorParameter", _V7/*successFun*/).then(_V3(function(_V74){_V74;;
_V11/*createTest*/("typesafetyDestructorReturn", _V7/*successFun*/).then(_V3(function(_V75){_V75;;
_V11/*createTest*/("typesafetyPromising", _V7/*successFun*/).then(_V3(function(_V76){_V76;;
_V11/*createTest*/("connect", _V7/*successFun*/).then(_V3(function(_V77){_V77;;
_V78/*c*/ = 0;
_V79/*s*/ = 0;
_V80/*f*/ = 0;
for(_V81/*m*/ in _V5/*testObj*/){_V78/*c*/++;;
if(_V5/*testObj*/[_V81/*m*/]){
_V79/*s*/++;;

}else{
_V24/*console*/["log"]((_V81/*m*/ + " failed!"));;
_V80/*f*/++;;
};
;
};
;
_V24/*console*/["log"]((((((("run " + _V78/*c*/) + " tests. ") + _V79/*s*/) + " successful, ") + _V80/*f*/) + " failed"));;
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
;}), _V4);
;}), _V4);
;})();
return _V1;
})();
;;
return _V1});
})();