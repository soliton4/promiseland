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
  
defineFun([], function(){ var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

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
if (promiseland._hasModule({ hashStr: "5e5cc3e1ae5887d33ab636a7afdd16cb" })){ return promiseland._getModule("5e5cc3e1ae5887d33ab636a7afdd16cb"); };
var _V16/*undefined*/;try{_V16/*undefined*/ = undefined;}catch(e){};
var _V30/*type:var*/ = __classSystem.getBuiltinType("var");
var _V1 = (function(){
"use strict";
;
;
return (function(_V2/*destroyFun*/){
var _V3/*curToken*/;
var _V4/*bestLen*/;
var _V5/*best*/;
var _V6/*first*/;
var _V7/*last*/;
var _V8/*rootCnt*/;
var _V9/*bringFront*/;
var _V11/*con*/;
var _V22/*checkFun*/;
var _V23/*getBest*/;
var _V29/*tracker*/;
;
_V3/*curToken*/;
_V4/*bestLen*/ = 0;
_V5/*best*/;
_V6/*first*/;
_V7/*last*/;
_V8/*rootCnt*/ = 0;
_V9/*bringFront*/ = (function(_V10/*entry*/){
;
_V10/*entry*/["cut"]();;
_V10/*entry*/["newNext"](_V6/*first*/);;
_V6/*first*/["newPrev"](_V10/*entry*/);;
_V6/*first*/ = _V10/*entry*/;;
;
});
_V11/*con*/ = (function(_V12/*t*/){
var _V13/*next*/;
var _V14/*prev*/;
var _V10/*entry*/;
var _V19/*cut*/;
var _V20/*len*/;
var _V21/*done*/;
;
_V13/*next*/;
_V14/*prev*/;
_V10/*entry*/ = {"newNext": (function(_V15/*parNext*/){
;
if(_V15/*parNext*/){
_V13/*next*/ = _V15/*parNext*/;;

}else{
_V7/*last*/ = _V10/*entry*/;;
_V13/*next*/ = _V16/*undefined*/;;
};
;
;
}),
"newPrev": (function(_V17/*parPrev*/){
;
if(_V17/*parPrev*/){
_V14/*prev*/ = _V17/*parPrev*/;;

}else{
_V6/*first*/ = _V10/*entry*/;;
_V14/*prev*/ = _V16/*undefined*/;;
};
;
;
}),
"getNext": (function(){
;
return _V13/*next*/;;
;
}),
"getCon": (function(_V18/*token*/){
;
return _V12/*t*/["getCon"](_V18/*token*/);;
;
}),
"cut": _V19/*cut*/};
_V19/*cut*/ = (function(){
;
if(_V14/*prev*/){
_V14/*prev*/["newNext"](_V13/*next*/);;
};
;
if(_V13/*next*/){
_V13/*next*/["newPrev"](_V14/*prev*/);;
};
;
;
});
_V20/*len*/ = _V12/*t*/["quickCon"]();
if(_V6/*first*/){
if(((_V20/*len*/ && (_V20/*len*/ < _V4/*bestLen*/)) || !_V4/*bestLen*/)){
_V4/*bestLen*/ = _V20/*len*/;;
_V6/*first*/["newPrev"](_V10/*entry*/);;
_V13/*next*/ = _V6/*first*/;;
_V6/*first*/ = _V10/*entry*/;;

}else{
_V7/*last*/["newNext"](_V10/*entry*/);;
_V14/*prev*/ = _V7/*last*/;;
_V7/*last*/ = _V10/*entry*/;;
};
;

}else{
_V4/*bestLen*/ = _V20/*len*/;;
_V6/*first*/ = _V10/*entry*/;;
_V7/*last*/ = _V10/*entry*/;;
};
;
_V21/*done*/ = false;
return (function(){
;
if(_V21/*done*/){
return;;
};
;
_V21/*done*/ = true;;
_V19/*cut*/();;
if((_V7/*last*/ === _V10/*entry*/)){
_V7/*last*/ = _V14/*prev*/;;
};
;
if((_V6/*first*/ === _V10/*entry*/)){
_V6/*first*/ = _V13/*next*/;;
};
;
_V22/*checkFun*/();;
;
});;
;
});
_V22/*checkFun*/ = (function(){
var _V24/*f*/;
;
if(!_V23/*getBest*/()){
_V24/*f*/ = _V2/*destroyFun*/;
_V2/*destroyFun*/ = (function(){
;
;
});;
_V24/*f*/();;
};
;
;
});
_V23/*getBest*/ = (function(_V18/*token*/){
var _V25/*b*/;
var _V26/*iterator*/;
var _V27/*tempBestLen*/;
var _V28/*tempBest*/;
;
if(_V8/*rootCnt*/){
return 1;;
};
;
if(_V18/*token*/){
_V3/*curToken*/ = _V18/*token*/;;

}else{
_V3/*curToken*/ = {};;
};
;
if(_V6/*first*/){
_V25/*b*/ = _V6/*first*/["getCon"](_V3/*curToken*/);
if(_V25/*b*/){
if(!_V18/*token*/){
_V4/*bestLen*/ = _V25/*b*/;;
};
;
return _V25/*b*/;;
};
;
_V26/*iterator*/ = _V6/*first*/["getNext"]();
_V27/*tempBestLen*/ = 0;
_V28/*tempBest*/;
while(_V26/*iterator*/){
{_V25/*b*/ = _V26/*iterator*/["getCon"](_V3/*curToken*/);
if(((_V25/*b*/ && (_V25/*b*/ < _V27/*tempBestLen*/)) || !_V27/*tempBestLen*/)){
_V27/*tempBestLen*/ = _V25/*b*/;;
_V28/*tempBest*/ = _V26/*iterator*/;;
};
;
_V26/*iterator*/ = _V26/*iterator*/["getNext"]();;
}};
;
if(_V27/*tempBestLen*/){
if(!_V18/*token*/){
_V9/*bringFront*/(_V28/*tempBest*/);;
_V4/*bestLen*/ = _V27/*tempBestLen*/;;
};
;
return _V27/*tempBestLen*/;;
};
;
};
;
return 0;;
;
});
_V29/*tracker*/ = {"getCon": (function(_V18/*token*/){
;
if((_V3/*curToken*/ === _V18/*token*/)){
return 0;;
};
;
return _V23/*getBest*/(_V18/*token*/);;
;
}),
"quickCon": (function(){
;
if(_V8/*rootCnt*/){
return 2;;
};
;
return (_V4/*bestLen*/ + 1);;
;
})};
return [_V29/*tracker*/, (function(){
var _V21/*done*/;
;
++_V8/*rootCnt*/;;
_V21/*done*/ = false;
return (function(){
;
if(_V21/*done*/){
return;;
};
;
_V21/*done*/ = true;;
if(!--_V8/*rootCnt*/){
_V22/*checkFun*/({});;
};
;
;
});;
;
}), (function(_V12/*t*/){
;
return _V11/*con*/(_V12/*t*/);;
;
})];;
;
});;
;
})();
promiseland._registerModule({ hashStr: "5e5cc3e1ae5887d33ab636a7afdd16cb", "module": _V1, promising: false });
return _V1;
}; return function(){ return __execute.apply(null, arguments); } });
})();