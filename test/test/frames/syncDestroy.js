(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2302cae01b932285bd0d1d0357aecd7f" })){ return promiseland._getModule("2302cae01b932285bd0d1d0357aecd7f"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "2302cae01b932285bd0d1d0357aecd7f", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$9/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$10/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$11/*destroyed*/;
var PL$12/*isClient*/;
var PL$4/*C1*/;
var PL$13/*local*/;
var _TPL$13/*local*/;

/* ---------------------------- */
/* type C1 */
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/
var PL$5/*C1-constructor*/ = undefined;
classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){
  PL$3/*type:C1*/ = parType;
  PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);
});
var PL$6/*type:C1**/ = classSystem._createPromiseOfClass(PL$3/*type:C1*/);
var PL$7/*C1**/ = PL$6/*type:C1**/;
var PL$8/*C1*-constructor*/ = undefined;classSystem.readyPromise(PL$6/*type:C1**/).then(function(parType){
  PL$6/*type:C1**/ = parType;
  PL$8/*C1*-constructor*/ = classSystem.getTypeConstructor(PL$6/*type:C1**/);
});
/* ---------------------------- */

var PL$14/*getC1*/ = (function(f){
promiseland.registerRemote("server", "2302cae01b932285bd0d1d0357aecd7f", "PL$20", f, (classSystem.createFunctionType({ "return": PL$6/*type:C1**/, arguments: []})));
if (promiseland.profileHas("server")){
return function(){
var i = 0; var l = arguments.length; var newArgs = [undefined];
for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
return f.apply(this, newArgs);
};
}else{
return function(){
return promiseland.remoteExec("2302cae01b932285bd0d1d0357aecd7f", "PL$20", arguments);
}
};
})((function(t){return t;})(function (PL$15/*session*/){
var PL$16;
var _TPL$16;
(function(){ var vAr = new PL$8/*C1*-constructor*/(); PL$16 = vAr[0]; _TPL$16 = vAr[1]; })();var PL$17/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      if (_TPL$19/*temp*/){ _TPL$19/*temp*/();};PL$16.reject(e);
    };
  };
};
var PL$18/*catch rejected*/ = function(e){
  if (_TPL$19/*temp*/){ _TPL$19/*temp*/();};PL$16.reject(e);
};
var PL$19/*temp*/;
var _TPL$19/*temp*/;
PL$17/*promiseland exception catcher*/(function(){

  ;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$19/*temp*/){ _TPL$19/*temp*/(); };
    if(vAr){
      var v = vAr[0];
      PL$19/*temp*/ = v;
      _TPL$19/*temp*/ = vAr[1];
      return v;
    }else{
      PL$19/*temp*/ = undefined; 
      _TPL$19/*temp*/ = undefined;
      return;
    };
  })(new PL$5/*C1-constructor*/())/*end temp assign*/;
  PL$16.resolve((function(ret){ if (_TPL$19/*temp*/){ _TPL$19/*temp*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$19/*temp*/))); return;;
  if (_TPL$19/*temp*/){ _TPL$19/*temp*/();};PL$16.resolve(); return;;
})();return [PL$16, _TPL$16];
}));
PL$9/*promiseland exception catcher*/(function(){

  ;
  PL$11/*destroyed*/ = false;
  PL$12/*isClient*/ = false;
  (function(){
  if (!promiseland.profileHas("client")){
  return;
  };
  
    ;
    PL$12/*isClient*/ = true;
    ;})();
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":9,"column":12,"offset":109}, "hashStr": "2302cae01b932285bd0d1d0357aecd7f", "name": "C1"}, {"a": 1, "destroy": (function(){
  
    ;
    PL$11/*destroyed*/ = true;
    ;})}));PL$4/*C1*/;
  PL$13/*local*/;
  /* function getC1 (){} - hoisted */;
  ;
  
  var PL$21 = new __Promise();if(PL$12/*isClient*/){
    /*temptracked promise*/(function(vAr){
    var r = vAr[0].thenReuse(vAr[1], PL$9/*promiseland exception catcher*/(function(PL$22){/*temp tracked assign*/(function(vAr){
      if (_TPL$13/*local*/){ _TPL$13/*local*/(); };
      if(vAr){
        var v = vAr[0];
        PL$13/*local*/ = v;
        _TPL$13/*local*/ = vAr[1];
        return v;
      }else{
        PL$13/*local*/ = undefined; 
        _TPL$13/*local*/ = undefined;
        return;
      };
    })(PL$22)/*end temp assign*/;
    if(PL$11/*destroyed*/){
      PL$1.resolve({
        "success": false
      }); return;
    };
    ;
    /*temptracked promise*/(function(vAr){
    var r = vAr[0].thenReuse(vAr[1], PL$9/*promiseland exception catcher*/(function(PL$23){/*temp tracked assign*/(function(vAr){
      if (_TPL$13/*local*/){ _TPL$13/*local*/(); };
      if(vAr){
        var v = vAr[0];
        PL$13/*local*/ = v;
        _TPL$13/*local*/ = vAr[1];
        return v;
      }else{
        PL$13/*local*/ = undefined; 
        _TPL$13/*local*/ = undefined;
        return;
      };
    })(PL$23)/*end temp assign*/;
    if(PL$11/*destroyed*/){
      PL$1.resolve({
        "success": true
      }); return;
    };
    ;
    PL$1.resolve({
      "success": false
    }); return;
    PL$21.resolve();;}), PL$10/*catch rejected*/);
    return r;
    })(PL$14/*getC1*/());/*temptracked promise end*/
    ;}), PL$10/*catch rejected*/);
    return r;
    })(PL$14/*getC1*/());/*temptracked promise end*/
    ;
  }else{
  PL$1.resolve({
    "success": true
  }); return;
  PL$21.resolve();;
  };PL$21.then(PL$9/*promiseland exception catcher*/(function(PL$24){PL$24;;
  ;
  PL$1.resolve(); return;}), PL$10/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
