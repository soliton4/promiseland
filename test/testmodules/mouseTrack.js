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
var classSystem = promiseland.classSystem;
var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "2ce826e49303a51951d5788126b893c0" })){ return promiseland._getModule("2ce826e49303a51951d5788126b893c0"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "2ce826e49303a51951d5788126b893c0", "module": _V1, promising: true });
var _V21/*Callback*/;try{_V21/*Callback*/ = Callback;}catch(e){};
var _V22/*setTimeout*/;try{_V22/*setTimeout*/ = setTimeout;}catch(e){};
var _V25/*console*/;try{_V25/*console*/ = console;}catch(e){};
var _V59/*window*/;try{_V59/*window*/ = window;}catch(e){};
var _V61/*undefined*/;try{_V61/*undefined*/ = undefined;}catch(e){};
var _V63/*setInterval*/;try{_V63/*setInterval*/ = setInterval;}catch(e){};
var _V66/*document*/;try{_V66/*document*/ = document;}catch(e){};
var _V2 = (function(){
"use strict";
var _V9 = function(code){ return function(res){ try{code(res);}catch(e){ _V1.reject(e); }; }; };
var _V10 = function(e){ _V1.reject(e); };
var _V15/*waitFun*/;
var _V24/*nextId*/;
var _V4/*Ses*/;
var _V7/*Pos*/;
var _V27/*pos*/;
var _T_V27/*pos*/;
var _V28/*gotit*/;
var _V36/*newSes*/;
var _V44/*getPos*/;
var _V45/*serverSetMouse*/;
var _V53/*s*/;
var _T_V53/*s*/;
var _V54/*setMousePos*/;
var _V62/*wgts*/;
var _V3/*type:Ses*/ = classSystem._createProvisionalClass();
_V4/*Ses*/ = _V3/*type:Ses*/;
var _V5/*Ses-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:Ses*/).then(function(parType){_V3/*type:Ses*/ = parType;_V5/*Ses-constructor*/ = classSystem.getTypeConstructor(_V3/*type:Ses*/);});var _V29/*type:Ses**/ = classSystem._createPromiseOfClass(_V3/*type:Ses*/);
var _V30/*Ses**/ = _V29/*type:Ses**/;
var _V31/*Ses*-constructor*/ = undefined;classSystem.readyPromise(_V29/*type:Ses**/).then(function(parType){_V29/*type:Ses**/ = parType;_V31/*Ses*-constructor*/ = classSystem.getTypeConstructor(_V29/*type:Ses**/);});var _V6/*type:Pos*/ = classSystem._createProvisionalClass();
_V7/*Pos*/ = _V6/*type:Pos*/;
var _V8/*Pos-constructor*/ = undefined;classSystem.readyPromise(_V6/*type:Pos*/).then(function(parType){_V6/*type:Pos*/ = parType;_V8/*Pos-constructor*/ = classSystem.getTypeConstructor(_V6/*type:Pos*/);});var _V37/*type:Pos**/ = classSystem._createPromiseOfClass(_V6/*type:Pos*/);
var _V38/*Pos**/ = _V37/*type:Pos**/;
var _V39/*Pos*-constructor*/ = undefined;classSystem.readyPromise(_V37/*type:Pos**/).then(function(parType){_V37/*type:Pos**/ = parType;_V39/*Pos*-constructor*/ = classSystem.getTypeConstructor(_V37/*type:Pos**/);});var _V36/*newSes*/ = (function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "_V35", f, (classSystem.createFunctionType({ "return": _V29/*type:Ses**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "_V35", arguments);
}
};
})((function(t){return t;})(function(){
var _V32;
var _T_V32;
(function(){ var vAr = new _V31/*Ses*-constructor*/(); _V32 = vAr[0]; _T_V32 = vAr[1]; })();var _V33 = function(code){ return function(res){ try{code(res);}catch(e){ _V32.reject(e); }; }; };
var _V34 = function(e){ _V32.reject(e); };
_V33(function(){;
_V25/*console*/["log"]("new session");;
_V32.resolve(new _V5/*Ses-constructor*/()); return;;
_V32.resolve(); return;;
})();
return [_V32, _T_V32];
}));
var _V44/*getPos*/ = (function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "_V43", f, (classSystem.createFunctionType({ "return": _V37/*type:Pos**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "_V43", arguments);
}
};
})((function(t){return t;})(function(){
var _V40;
var _T_V40;
(function(){ var vAr = new _V39/*Pos*-constructor*/(); _V40 = vAr[0]; _T_V40 = vAr[1]; })();var _V41 = function(code){ return function(res){ try{code(res);}catch(e){ _V40.reject(e); }; }; };
var _V42 = function(e){ _V40.reject(e); };
_V41(function(){;
_V40.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V27/*pos*/)); return;;
_V40.resolve(); return;;
})();
return [_V40, _T_V40];
}));
_V9(function(){;
var _V11 = new __Promise();
var _V12 = new __Promise();
var _V13/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ _V12.resolve(e); }; }; };
var _V14 = function(e){ _V12.resolve(e); };
_V13/*try catch*/(function(){_V15/*waitFun*/ = (function(){
var _V16 = new __Promise();
var _V18 = function(code){ return function(res){ try{code(res);}catch(e){ _V16.reject(e); }; }; };
var _V19 = function(e){ _V16.reject(e); };
var _V20/*cb*/;
_V18(function(){;
_V20/*cb*/ = new _V21/*Callback*/();
_V22/*setTimeout*/(_V20/*cb*/, 2000);;
_V20/*cb*/["promise"].then(_V18(function(_V23){_V23;;
_V16.resolve(); return;;
}), _V19);
;})();
return _V16;
});
_V24/*nextId*/ = 1;
classSystem._resolveProvisional(_V3/*type:Ses*/, classSystem.createClass({members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"id","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":11,"column":14,"offset":146}, "hashStr": "2ce826e49303a51951d5788126b893c0", "name": "Ses"}, {"constructor": (function(){
;
(function(s, v){ v = s[10](v); s[9] = v; return v; })(this, _V24/*nextId*/++);;
;
}), "id": 0, "destroy": (function(){
var _V26/*p*/;
;
_V25/*console*/["log"](("destroying" + this[9]));;
_V26/*p*/ = _V27/*pos*/[7];
_V25/*console*/["log"](_V26/*p*/);;
delete _V26/*p*/[this[9]];;
_V25/*console*/["log"](_V26/*p*/);;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V27/*pos*/, _V26/*p*/);;
;
})}));_V4/*Ses*/;;
classSystem._resolveProvisional(_V6/*type:Pos*/, classSystem.createClass({members: [{"name":"p","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":26,"column":14,"offset":416}, "hashStr": "2ce826e49303a51951d5788126b893c0", "name": "Pos"}, {"p": {}}));_V7/*Pos*/;;
_V27/*pos*/;
_V28/*gotit*/ = false;
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
/*temp tracked assign*/(function(vAr){
if (_T_V27/*pos*/){ _T_V27/*pos*/(); };
if(vAr){
var v = vAr[0];
_V27/*pos*/ = v;
_T_V27/*pos*/ = vAr[1];
return v;
}else{
_V27/*pos*/ = undefined; _T_V27/*pos*/ = undefined;
return;
}; })(new _V8/*Pos-constructor*/())/*end temp assign*/
;;
_V28/*gotit*/ = true;;
;
})();;
_V36/*newSes*/;;
_V44/*getPos*/;;
_V45/*serverSetMouse*/ = ((function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "_V52", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "_V52", arguments);
}
};
})(function(_V46/*x*/, _V47/*y*/, _V48/*sid*/){
var _V49 = new __Promise();
var _V50 = function(code){ return function(res){ try{code(res);}catch(e){ _V49.reject(e); }; }; };
var _V51 = function(e){ _V49.reject(e); };
var _V26/*p*/;
_V50(function(){;
_V26/*p*/ = _V27/*pos*/[7];
_V26/*p*/[_V48/*sid*/] = {"x": _V46/*x*/,
"y": _V47/*y*/};;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V27/*pos*/, _V26/*p*/);;
_V49.resolve(); return;;
_V49.resolve(); return;;
})();
return _V49;
}));
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
_V28/*gotit*/ = true;;
;
})();;
_V53/*s*/;
_V54/*setMousePos*/ = (function(_V46/*x*/, _V47/*y*/){
;
if((_V53/*s*/[9] > 0)){
_V45/*serverSetMouse*/(_V46/*x*/, _V47/*y*/, _V53/*s*/[9]);;
};
;
;
});
var _V55 = new __Promise();
if(! _V28/*gotit*/){
_V15/*waitFun*/().then(_V13/*try catch*/(function(_V56){_V56;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V13/*try catch*/(function(_V57){/*temp tracked assign*/(function(vAr){
if (_T_V53/*s*/){ _T_V53/*s*/(); };
if(vAr){
var v = vAr[0];
_V53/*s*/ = v;
_T_V53/*s*/ = vAr[1];
return v;
}else{
_V53/*s*/ = undefined; _T_V53/*s*/ = undefined;
return;
}; })(_V57)/*end temp assign*/
;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V13/*try catch*/(function(_V58){/*temp tracked assign*/(function(vAr){
if (_T_V27/*pos*/){ _T_V27/*pos*/(); };
if(vAr){
var v = vAr[0];
_V27/*pos*/ = v;
_T_V27/*pos*/ = vAr[1];
return v;
}else{
_V27/*pos*/ = undefined; _T_V27/*pos*/ = undefined;
return;
}; })(_V58)/*end temp assign*/
;;
_V55.resolve();;
}), _V14);
return r;
})(_V44/*getPos*/());/*temptracked promise end*/
;}), _V14);
return r;
})(_V36/*newSes*/());/*temptracked promise end*/
;}), _V14);
;
}else{
_V55.resolve();}; _V55.then(function(){;
;
if(_V59/*window*/){
_V59/*window*/["onmousemove"] = (function(_V60/*evt*/){
;
if((_V60/*evt*/["pageX"] !== _V61/*undefined*/)){
_V54/*setMousePos*/(_V60/*evt*/["pageX"], _V60/*evt*/["pageY"]);;
};
;
;
});;
_V62/*wgts*/ = {};
_V63/*setInterval*/((function(){
var _V26/*p*/;
var _V64/*i*/;
var _V65/*n*/;
;
_V26/*p*/ = _V27/*pos*/[7];
_V64/*i*/;
_V65/*n*/;
for(_V64/*i*/ in _V26/*p*/){if((_V64/*i*/ != _V53/*s*/[9])){
if(_V62/*wgts*/[_V64/*i*/]){
_V65/*n*/ = _V62/*wgts*/[_V64/*i*/]["n"];;

}else{
_V65/*n*/ = _V66/*document*/["createElement"]("img");;
_V65/*n*/["src"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAEWklEQVRIx6WVC1BUVRiAbyCBiUVlzuhQNgxmDQwx8hQkddkVWSAJotSwiYfh8qayKaD57967hCZFGCGP3QXuwrK7vJ8iwfIM5LmwsGBKmrxFB6ERSYaFzjJao4DAcma++e+5/5lv/nvPC/vm24jtyoUFbMMt5sdYFySjn/jk5MZESclcB0l2bgzTyeVNcwtL9UUZmSJGSWk5kcJNjUHdF3x8T6knKiouZUhy8gkEJCam4IzDDroBLNb6RdKaWoZQlEtkCMVAZYjYScn8YNO3d29at6iltY2RKZQQgkwRpKZnApdPkUkp/GNcfvr6RDJ5N516LKIyIYWXDrxUQRSXl3aYEmStXdQlVzCyJLmEUJwDAqEE0gVZwEvLAD6VEU1RQnveWitrl3UxCorLiIKiMsgrLIWc/EKQ5BaCSIUkj0xO5hlHfIevLrrS3EKvqW8iqmsbQVrzO1TVNECltAF+k9ZBVXUDXlRyGU77B2xbw6zV0+WKP4hOeS/IulQoQNapgE55H3Sg2Ngsw/MKyyLQUK1nikpKK+gDQ2PEzVvD8B8Dw3D9zwFQ9F2Hnt5+uNb/Fzu/qCy8u/fqyqK8/AL6g5lZYmrqPizy9zTcnZiC8bv3EKo4ucjk1DRBZQq9Y3+OW14kFInsFxYWyDmlEubmlaCcm4c55RxifgkzM/9EkZzvmY5M5lIRlU4tihCwFmZnH0abmZtbGxmbPCnip/LtZx/OkPemJlD5k6swAdMP7sPg0OC5Lbpbdzs7H/1flEZR9qPj4+Tg8DAsy8gIjI7fhtHbYzA8OrLYH7tzB5paWggTE9Md5hZWj/6RONu+r/8m0XMVzdBTKBBdPX1QUVVHNjS1kfLefuLajQHixsAoe2hsnLhcWR356mt6mx4dI2W05nY52djaCY+50i7HUcSbO7oB7UNAw6wRNs9rb2bu2mV4zGqfne9RV48gVkBoONPJNUhLCy2x6toGmrSuiayqbYJqhLS2ie3l6xfE5QtCahvb8MqaRjIwOMxWW1sH27FTHzN51wyzZzhiRWVSVR0aiK1aKlNLawet6FIlWVJeBRXSevxzVlA4SurHXUgwKL1UGVVeVQe/XuTiH7h5rLgWFytql8lpGVk5ZHZ+Me7nH6L6jLdUyfj4REycU8gRivMgS1LAYTJdTFbb/Qd/SUjheHmdVlVi+OR5LqbFX+SSCUl8nBN9PszF2XVlUZY4l+HucYKNHg2ezv0Ud+HFsz/EngUiGnDyHOeIg9PrK4o++thzLwpGmpqaS3JoJT8XHsn2CQk7ww794muC5R/sbmFptbzI86Q3pqOzednc4K0BLDjkS1ufUyyOl48f7vmp91dmZuZb1LquAoJCt7t7HI9EgNuHx6PsDh4yVksUGByKOTm7Bjo4uuBHmO+zbfcf+Ezt29h6n43F/vcOcewO0HDTvZbn0auX1BLZ2NphBoZ7onfqv3FGT+9lN00NjW3YBtorCN097xhhSLQk+S/Hvpo08p3TowAAAABJRU5ErkJggg==";;
_V65/*n*/["style"]["position"] = "absolute";;
_V66/*document*/["body"]["appendChild"](_V65/*n*/);;
_V62/*wgts*/[_V64/*i*/] = {"n": _V65/*n*/};;
};
;
_V65/*n*/["style"]["top"] = (_V26/*p*/[_V64/*i*/]["y"] + "px");;
_V65/*n*/["style"]["left"] = (_V26/*p*/[_V64/*i*/]["x"] + "px");;
};
;
};
;
for(_V64/*i*/ in _V62/*wgts*/){if(! _V26/*p*/[_V64/*i*/]){
_V65/*n*/ = _V62/*wgts*/[_V64/*i*/]["n"];;
_V66/*document*/["body"]["removeChild"](_V65/*n*/);;
delete _V62/*wgts*/[_V64/*i*/];;
};
;
};
;
;
}), 100);;
};
;
_V11.resolve();
});})();
_V12.then(_V9(function(_V67/*e*/){_V25/*console*/["log"]("error:");;
_V25/*console*/["log"](_V67/*e*/);;
_V11.resolve();;
}));
_V11.then(_V9(function(){;
_V1.resolve(); return;;
}), _V10)})();
return _V1;
})();
;;
return _V1});
})();