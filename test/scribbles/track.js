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
if (promiseland._hasModule({ hashStr: "fd719809b282d7c008d82f22c84f2445" })){ return promiseland._getModule("fd719809b282d7c008d82f22c84f2445"); };
var _V8/*first*/;try{_V8/*first*/ = first;}catch(e){};
var _V9/*last*/;try{_V9/*last*/ = last;}catch(e){};
var _V18/*undefined*/;try{_V18/*undefined*/ = undefined;}catch(e){};
var _V32/*tocken*/;try{_V32/*tocken*/ = tocken;}catch(e){};
var _V34/*list*/;try{_V34/*list*/ = list;}catch(e){};
var _V36/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
var _V2/*root*/;
var _V3/*makeClass*/;
_V2/*root*/ = {"getCon": (function(){
return 1;
})};
_V3/*makeClass*/ = (function(_V4/*destroyFun*/){
var _V4/*destroyFun*/;
var _V5/*curToken*/;
var _V6/*bestLen*/;
var _V7/*best*/;
var _V10/*rootCnt*/;
var _V11/*bringFront*/;
var _V13/*con*/;
var _V23/*checkFun*/;
var _V24/*getBest*/;
var _V29/*tracker*/;
var _V30/*check*/;
_V5/*curToken*/;
_V6/*bestLen*/ = 0;
_V7/*best*/;
_V8/*first*/;;
_V9/*last*/;;
_V10/*rootCnt*/ = 0;
_V11/*bringFront*/ = (function(_V12/*entry*/){
var _V12/*entry*/;
_V12/*entry*/["cut"]();;
_V12/*entry*/["newNext"](_V8/*first*/);;
_V8/*first*/["newPrev"](_V12/*entry*/);;
_V8/*first*/ = _V12/*entry*/;;
});
_V13/*con*/ = (function(_V14/*t*/){
var _V14/*t*/;
var _V15/*next*/;
var _V16/*prev*/;
var _V12/*entry*/;
var _V21/*cut*/;
var _V22/*len*/;
_V15/*next*/;
_V16/*prev*/;
_V12/*entry*/ = {"newNext": (function(_V17/*parNext*/){
var _V17/*parNext*/;
if(_V17/*parNext*/){
_V15/*next*/ = _V17/*parNext*/;;

}else{
_V9/*last*/ = _V12/*entry*/;;
_V15/*next*/ = _V18/*undefined*/;;
};
;
}),
"newPrev": (function(_V19/*parPrev*/){
var _V19/*parPrev*/;
if(_V19/*parPrev*/){
_V16/*prev*/ = _V19/*parPrev*/;;

}else{
_V8/*first*/ = _V12/*entry*/;;
_V16/*prev*/ = _V18/*undefined*/;;
};
;
}),
"getNext": (function(){
return _V15/*next*/;
}),
"getCon": (function(_V20/*token*/){
var _V20/*token*/;
return _V14/*t*/["getCon"](_V20/*token*/);
}),
"cut": _V21/*cut*/};
_V21/*cut*/ = (function(){
if(_V16/*prev*/){
_V16/*prev*/["setNext"](_V15/*next*/);;
};
;
if(_V15/*next*/){
_V15/*next*/["setPrev"](_V16/*prev*/);;
};
;
});
_V22/*len*/ = _V14/*t*/["quickCon"]();
if(_V8/*first*/){
if(((_V22/*len*/ && (_V22/*len*/ < _V6/*bestLen*/)) || !_V6/*bestLen*/)){
_V6/*bestLen*/ = _V22/*len*/;;
_V8/*first*/["newPrev"](_V12/*entry*/);;
_V15/*next*/ = _V8/*first*/;;
_V8/*first*/ = _V12/*entry*/;;

}else{
_V9/*last*/["newNext"](_V12/*entry*/);;
_V16/*prev*/ = _V9/*last*/;;
_V9/*last*/ = _V12/*entry*/;;
};
;

}else{
_V6/*bestLen*/ = _V22/*len*/;;
_V8/*first*/ = _V12/*entry*/;;
_V9/*last*/ = _V12/*entry*/;;
};
;
return (function(){
_V21/*cut*/();;
if((_V9/*last*/ === _V12/*entry*/)){
_V9/*last*/ = _V16/*prev*/;;
};
;
if((_V8/*first*/ === _V12/*entry*/)){
_V8/*first*/ = _V15/*next*/;;
};
;
_V23/*checkFun*/();;
});
});
_V23/*checkFun*/ = (function(){
if(!_V24/*getBest*/()){
_V4/*destroyFun*/();;
};
;
});
_V24/*getBest*/ = (function(_V20/*token*/){
var _V20/*token*/;
var _V25/*b*/;
var _V26/*iterator*/;
var _V27/*tempBestLen*/;
var _V28/*tempBest*/;
if(_V10/*rootCnt*/){
return 1;
};
;
if(_V20/*token*/){
_V5/*curToken*/ = _V20/*token*/;;

}else{
_V5/*curToken*/ = {};;
};
;
if(_V8/*first*/){
_V25/*b*/ = _V8/*first*/["getCon"](_V5/*curToken*/);
if(_V25/*b*/){
if(!_V20/*token*/){
_V6/*bestLen*/ = _V25/*b*/;;
};
;
return _V25/*b*/;
};
;
_V26/*iterator*/ = _V8/*first*/["getNext"]();
_V27/*tempBestLen*/ = 0;
_V28/*tempBest*/;
while(_V26/*iterator*/){
{_V25/*b*/ = _V26/*iterator*/["getCon"](_V5/*curToken*/);
if(((_V25/*b*/ && (_V25/*b*/ < _V27/*tempBestLen*/)) || !_V27/*tempBestLen*/)){
_V27/*tempBestLen*/ = _V25/*b*/;;
_V28/*tempBest*/ = _V26/*iterator*/;;
};
;
_V26/*iterator*/ = _V26/*iterator*/["getNext"]();;
}};
;
if(_V27/*tempBestLen*/){
if(!_V20/*token*/){
_V11/*bringFront*/(_V28/*tempBest*/);;
_V6/*bestLen*/ = _V27/*tempBestLen*/;;
};
;
return _V27/*tempBestLen*/;
};
;
};
;
return 0;
});
_V29/*tracker*/ = {"getCon": (function(_V20/*token*/){
var _V20/*token*/;
if((_V5/*curToken*/ === _V20/*token*/)){
return 0;
};
;
return _V24/*getBest*/(_V20/*token*/);
}),
"quickCon": (function(){
if(_V10/*rootCnt*/){
return 2;
};
;
return (_V6/*bestLen*/ + 1);
})};
_V30/*check*/ = (function(_V31/*parTocken*/){
var _V31/*parTocken*/;
var _V7/*best*/;
var _V33/*bestL*/;
if((_V31/*parTocken*/ === _V32/*tocken*/)){
return;
};
;
_V32/*tocken*/ = _V31/*parTocken*/;;
_V7/*best*/;
_V33/*bestL*/;
_V34/*list*/["runThrough"]((function(_V29/*tracker*/){
var _V29/*tracker*/;
var _V35/*l*/;
_V35/*l*/ = _V29/*tracker*/["getCon"](_V32/*tocken*/);
if(!_V35/*l*/){
return;
};
;
if(_V7/*best*/){
if((_V33/*bestL*/ > _V35/*l*/)){
_V7/*best*/ = _V29/*tracker*/;;
_V33/*bestL*/ = _V35/*l*/;;
if((_V35/*l*/ === 1)){
};
;
};
;
};
;
}));;
});
return [(function(){
++_V10/*rootCnt*/;;
return (function(){
if(!--_V10/*rootCnt*/){
_V30/*check*/({});;
};
;
});
}), (function(_V14/*t*/){
var _V14/*t*/;
return _V13/*con*/(_V14/*t*/);
})];
});
})();
promiseland._registerModule({ hashStr: "fd719809b282d7c008d82f22c84f2445", "module": _V1, promising: false });
return _V1;
});
})();