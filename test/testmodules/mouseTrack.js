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
if (promiseland._hasModule({ hashStr: "2ce826e49303a51951d5788126b893c0" })){ return promiseland._getModule("2ce826e49303a51951d5788126b893c0"); };
var _V1 = new __Promise();
promiseland._registerModule({ hashStr: "2ce826e49303a51951d5788126b893c0", "module": _V1, promising: true });
var _V21/*Callback*/;try{_V21/*Callback*/ = Callback;}catch(e){};
var _V22/*setTimeout*/;try{_V22/*setTimeout*/ = setTimeout;}catch(e){};
var _V25/*console*/;try{_V25/*console*/ = console;}catch(e){};
var _V63/*window*/;try{_V63/*window*/ = window;}catch(e){};
var _V65/*undefined*/;try{_V65/*undefined*/ = undefined;}catch(e){};
var _V67/*setInterval*/;try{_V67/*setInterval*/ = setInterval;}catch(e){};
var _V70/*document*/;try{_V70/*document*/ = document;}catch(e){};
var _V71/*e*/;try{_V71/*e*/ = e;}catch(e){};
var _V28/*type:var*/ = __classSystem.getBuiltinType("var");
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
var _V29/*gotit*/;
var _V38/*newSes*/;
var _V47/*getPos*/;
var _V48/*serverSetMouse*/;
var _V57/*s*/;
var _T_V57/*s*/;
var _V58/*setMousePos*/;
var _V66/*wgts*/;
var _V3/*type:Ses*/ = classSystem._createProvisionalClass();
_V4/*Ses*/ = _V3/*type:Ses*/;
var _V5/*Ses-constructor*/ = undefined;classSystem.readyPromise(_V3/*type:Ses*/).then(function(parType){_V3/*type:Ses*/ = parType;_V5/*Ses-constructor*/ = classSystem.getTypeConstructor(_V3/*type:Ses*/);});var _V30/*type:Ses**/ = classSystem._createPromiseOfClass(_V3/*type:Ses*/);
var _V31/*Ses**/ = _V30/*type:Ses**/;
var _V32/*Ses*-constructor*/ = undefined;classSystem.readyPromise(_V30/*type:Ses**/).then(function(parType){_V30/*type:Ses**/ = parType;_V32/*Ses*-constructor*/ = classSystem.getTypeConstructor(_V30/*type:Ses**/);});var _V6/*type:Pos*/ = classSystem._createProvisionalClass();
_V7/*Pos*/ = _V6/*type:Pos*/;
var _V8/*Pos-constructor*/ = undefined;classSystem.readyPromise(_V6/*type:Pos*/).then(function(parType){_V6/*type:Pos*/ = parType;_V8/*Pos-constructor*/ = classSystem.getTypeConstructor(_V6/*type:Pos*/);});var _V39/*type:Pos**/ = classSystem._createPromiseOfClass(_V6/*type:Pos*/);
var _V40/*Pos**/ = _V39/*type:Pos**/;
var _V41/*Pos*-constructor*/ = undefined;classSystem.readyPromise(_V39/*type:Pos**/).then(function(parType){_V39/*type:Pos**/ = parType;_V41/*Pos*-constructor*/ = classSystem.getTypeConstructor(_V39/*type:Pos**/);});var _V38/*newSes*/ = (function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "_V36", f, (classSystem.createFunctionType({ "return": _V30/*type:Ses**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V37/*temp returnpromise*/;
var _T_V37/*temp returnpromise*/;
(function(){ var vAr = new _V32/*Ses*-constructor*/(); _V37/*temp returnpromise*/ = vAr[0]; _T_V37/*temp returnpromise*/ = vAr[1]; })();
promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "_V36", arguments, _V37/*temp returnpromise*/);
return [_V37/*temp returnpromise*/, _T_V37/*temp returnpromise*/];
}
};
})((function(t){return t;})(function(){
var _V33;
var _T_V33;
(function(){ var vAr = new _V32/*Ses*-constructor*/(); _V33 = vAr[0]; _T_V33 = vAr[1]; })();var _V34 = function(code){ return function(res){ try{code(res);}catch(e){ _V33.reject(e); }; }; };
var _V35 = function(e){ _V33.reject(e); };
_V34(function(){;
_V25/*console*/["log"]("new session");;
_V33.resolve(new _V5/*Ses-constructor*/()); return;;
_V33.resolve(); return;;
})();
return [_V33, _T_V33];
}));
var _V47/*getPos*/ = (function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "_V45", f, (classSystem.createFunctionType({ "return": _V39/*type:Pos**/, arguments: []})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V46/*temp returnpromise*/;
var _T_V46/*temp returnpromise*/;
(function(){ var vAr = new _V41/*Pos*-constructor*/(); _V46/*temp returnpromise*/ = vAr[0]; _T_V46/*temp returnpromise*/ = vAr[1]; })();
promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "_V45", arguments, _V46/*temp returnpromise*/);
return [_V46/*temp returnpromise*/, _T_V46/*temp returnpromise*/];
}
};
})((function(t){return t;})(function(){
var _V42;
var _T_V42;
(function(){ var vAr = new _V41/*Pos*-constructor*/(); _V42 = vAr[0]; _T_V42 = vAr[1]; })();var _V43 = function(code){ return function(res){ try{code(res);}catch(e){ _V42.reject(e); }; }; };
var _V44 = function(e){ _V42.reject(e); };
_V43(function(){;
_V42.resolve((function(v){ if(!v){ return; }; return [v, v[2]()];})(_V27/*pos*/)); return;;
_V42.resolve(); return;;
})();
return [_V42, _T_V42];
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
classSystem._resolveProvisional(_V3/*type:Ses*/, classSystem.createClass({members: [{"name":"constructor","type":_V28/*type:var*/},{"name":"id","type":_V28/*type:var*/},{"name":"destroy","type":_V28/*type:var*/}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":11,"column":14,"offset":146}, "hashStr": "2ce826e49303a51951d5788126b893c0", "name": "Ses"}, {"constructor": (function(){
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
classSystem._resolveProvisional(_V6/*type:Pos*/, classSystem.createClass({members: [{"name":"p","type":_V28/*type:var*/}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":26,"column":14,"offset":416}, "hashStr": "2ce826e49303a51951d5788126b893c0", "name": "Pos"}, {"p": {}}));_V7/*Pos*/;;
_V27/*pos*/;
_V29/*gotit*/ = false;
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
_V29/*gotit*/ = true;;
;
})();;
_V38/*newSes*/;;
_V47/*getPos*/;;
_V48/*serverSetMouse*/ = ((function(f){
promiseland.registerRemote("server", "2ce826e49303a51951d5788126b893c0", "_V55", f, _V28/*type:var*/);
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
var _V56/*temp returnpromise*/ = new __Promise();

promiseland.remoteExec("2ce826e49303a51951d5788126b893c0", "_V55", arguments, _V56/*temp returnpromise*/);
return _V56/*temp returnpromise*/;
}
};
})(function(_V49/*x*/, _V50/*y*/, _V51/*sid*/){
var _V52 = new __Promise();
var _V53 = function(code){ return function(res){ try{code(res);}catch(e){ _V52.reject(e); }; }; };
var _V54 = function(e){ _V52.reject(e); };
var _V26/*p*/;
_V53(function(){;
_V26/*p*/ = _V27/*pos*/[7];
_V26/*p*/[_V51/*sid*/] = {"x": _V49/*x*/,
"y": _V50/*y*/};;
(function(s, v){ v = s[8](v); s[7] = v; return v; })(_V27/*pos*/, _V26/*p*/);;
_V52.resolve(); return;;
_V52.resolve(); return;;
})();
return _V52;
}));
(function(){
if (!promiseland.profileHas("server")){
return;
};
;
_V29/*gotit*/ = true;;
;
})();;
_V57/*s*/;
_V58/*setMousePos*/ = (function(_V49/*x*/, _V50/*y*/){
;
if((_V57/*s*/[9] > 0)){
_V48/*serverSetMouse*/(_V49/*x*/, _V50/*y*/, _V57/*s*/[9]);;
};
;
;
});
var _V59 = new __Promise();
if(! _V29/*gotit*/){
_V15/*waitFun*/().then(_V13/*try catch*/(function(_V60){_V60;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V13/*try catch*/(function(_V61){/*temp tracked assign*/(function(vAr){
if (_T_V57/*s*/){ _T_V57/*s*/(); };
if(vAr){
var v = vAr[0];
_V57/*s*/ = v;
_T_V57/*s*/ = vAr[1];
return v;
}else{
_V57/*s*/ = undefined; _T_V57/*s*/ = undefined;
return;
}; })(_V61)/*end temp assign*/
;;
/*temptracked promise*/(function(vAr){
var r = vAr[0].thenReuse(vAr[1], _V13/*try catch*/(function(_V62){/*temp tracked assign*/(function(vAr){
if (_T_V27/*pos*/){ _T_V27/*pos*/(); };
if(vAr){
var v = vAr[0];
_V27/*pos*/ = v;
_T_V27/*pos*/ = vAr[1];
return v;
}else{
_V27/*pos*/ = undefined; _T_V27/*pos*/ = undefined;
return;
}; })(_V62)/*end temp assign*/
;;
_V59.resolve();;
}), _V14);
return r;
})(_V47/*getPos*/());/*temptracked promise end*/
;}), _V14);
return r;
})(_V38/*newSes*/());/*temptracked promise end*/
;}), _V14);
;
}else{
_V59.resolve();}; _V59.then(function(){;
;
if(_V63/*window*/){
_V63/*window*/["onmousemove"] = (function(_V64/*evt*/){
;
if((_V64/*evt*/["pageX"] !== _V65/*undefined*/)){
_V58/*setMousePos*/(_V64/*evt*/["pageX"], _V64/*evt*/["pageY"]);;
};
;
;
});;
_V66/*wgts*/ = {};
_V67/*setInterval*/((function(){
var _V26/*p*/;
var _V68/*i*/;
var _V69/*n*/;
;
_V26/*p*/ = _V27/*pos*/[7];
_V68/*i*/;
_V69/*n*/;
for(_V68/*i*/ in _V26/*p*/){if((_V68/*i*/ != _V57/*s*/[9])){
if(_V66/*wgts*/[_V68/*i*/]){
_V69/*n*/ = _V66/*wgts*/[_V68/*i*/]["n"];;

}else{
_V69/*n*/ = _V70/*document*/["createElement"]("img");;
_V69/*n*/["src"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAEWklEQVRIx6WVC1BUVRiAbyCBiUVlzuhQNgxmDQwx8hQkddkVWSAJotSwiYfh8qayKaD57967hCZFGCGP3QXuwrK7vJ8iwfIM5LmwsGBKmrxFB6ERSYaFzjJao4DAcma++e+5/5lv/nvPC/vm24jtyoUFbMMt5sdYFySjn/jk5MZESclcB0l2bgzTyeVNcwtL9UUZmSJGSWk5kcJNjUHdF3x8T6knKiouZUhy8gkEJCam4IzDDroBLNb6RdKaWoZQlEtkCMVAZYjYScn8YNO3d29at6iltY2RKZQQgkwRpKZnApdPkUkp/GNcfvr6RDJ5N516LKIyIYWXDrxUQRSXl3aYEmStXdQlVzCyJLmEUJwDAqEE0gVZwEvLAD6VEU1RQnveWitrl3UxCorLiIKiMsgrLIWc/EKQ5BaCSIUkj0xO5hlHfIevLrrS3EKvqW8iqmsbQVrzO1TVNECltAF+k9ZBVXUDXlRyGU77B2xbw6zV0+WKP4hOeS/IulQoQNapgE55H3Sg2Ngsw/MKyyLQUK1nikpKK+gDQ2PEzVvD8B8Dw3D9zwFQ9F2Hnt5+uNb/Fzu/qCy8u/fqyqK8/AL6g5lZYmrqPizy9zTcnZiC8bv3EKo4ucjk1DRBZQq9Y3+OW14kFInsFxYWyDmlEubmlaCcm4c55RxifgkzM/9EkZzvmY5M5lIRlU4tihCwFmZnH0abmZtbGxmbPCnip/LtZx/OkPemJlD5k6swAdMP7sPg0OC5Lbpbdzs7H/1flEZR9qPj4+Tg8DAsy8gIjI7fhtHbYzA8OrLYH7tzB5paWggTE9Md5hZWj/6RONu+r/8m0XMVzdBTKBBdPX1QUVVHNjS1kfLefuLajQHixsAoe2hsnLhcWR356mt6mx4dI2W05nY52djaCY+50i7HUcSbO7oB7UNAw6wRNs9rb2bu2mV4zGqfne9RV48gVkBoONPJNUhLCy2x6toGmrSuiayqbYJqhLS2ie3l6xfE5QtCahvb8MqaRjIwOMxWW1sH27FTHzN51wyzZzhiRWVSVR0aiK1aKlNLawet6FIlWVJeBRXSevxzVlA4SurHXUgwKL1UGVVeVQe/XuTiH7h5rLgWFytql8lpGVk5ZHZ+Me7nH6L6jLdUyfj4REycU8gRivMgS1LAYTJdTFbb/Qd/SUjheHmdVlVi+OR5LqbFX+SSCUl8nBN9PszF2XVlUZY4l+HucYKNHg2ezv0Ud+HFsz/EngUiGnDyHOeIg9PrK4o++thzLwpGmpqaS3JoJT8XHsn2CQk7ww794muC5R/sbmFptbzI86Q3pqOzednc4K0BLDjkS1ufUyyOl48f7vmp91dmZuZb1LquAoJCt7t7HI9EgNuHx6PsDh4yVksUGByKOTm7Bjo4uuBHmO+zbfcf+Ezt29h6n43F/vcOcewO0HDTvZbn0auX1BLZ2NphBoZ7onfqv3FGT+9lN00NjW3YBtorCN097xhhSLQk+S/Hvpo08p3TowAAAABJRU5ErkJggg==";;
_V69/*n*/["style"]["position"] = "absolute";;
_V70/*document*/["body"]["appendChild"](_V69/*n*/);;
_V66/*wgts*/[_V68/*i*/] = {"n": _V69/*n*/};;
};
;
_V69/*n*/["style"]["top"] = (_V26/*p*/[_V68/*i*/]["y"] + "px");;
_V69/*n*/["style"]["left"] = (_V26/*p*/[_V68/*i*/]["x"] + "px");;
};
;
};
;
for(_V68/*i*/ in _V66/*wgts*/){if(! _V26/*p*/[_V68/*i*/]){
_V69/*n*/ = _V66/*wgts*/[_V68/*i*/]["n"];;
_V70/*document*/["body"]["removeChild"](_V69/*n*/);;
delete _V66/*wgts*/[_V68/*i*/];;
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
_V12.then(_V9(function(e){_V25/*console*/["log"]("error:");;
_V25/*console*/["log"](_V71/*e*/);;
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