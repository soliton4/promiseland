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
if (promiseland._hasModule({ hashStr: "0e5ca56b1590158be3142dbee3a1200e" })){ return promiseland._getModule("0e5ca56b1590158be3142dbee3a1200e"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "0e5ca56b1590158be3142dbee3a1200e", "module": PL$1, promising: true });
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
var PL$26/*tempres*/;
var PL$27/*serverDestroyed*/;
var PL$28/*fx*/;

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

var PL$13/*x*/ = (function(f){
promiseland.registerRemote("server", "0e5ca56b1590158be3142dbee3a1200e", "PL$19", f, (classSystem.createFunctionType({ "return": PL$6/*type:C1**/, arguments: [classSystem.getBuiltinType("var")]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("0e5ca56b1590158be3142dbee3a1200e", "PL$19", arguments);
}
};
})((function(t){return t;})(function (PL$14/*par1*/){
var PL$15;
var _TPL$15;
(function(){ var vAr = new PL$8/*C1*-constructor*/(); PL$15 = vAr[0]; _TPL$15 = vAr[1]; })();var PL$16/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      if (_TPL$18/*temp*/){ _TPL$18/*temp*/();};PL$15.reject(e);
    };
  };
};
var PL$17/*catch rejected*/ = function(e){
  if (_TPL$18/*temp*/){ _TPL$18/*temp*/();};PL$15.reject(e);
};
var PL$18/*temp*/;
var _TPL$18/*temp*/;
PL$16/*promiseland exception catcher*/(function(){

  ;
  PL$11/*destroyed*/ = false;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$18/*temp*/){ _TPL$18/*temp*/(); };
    if(vAr){
      var v = vAr[0];
      PL$18/*temp*/ = v;
      _TPL$18/*temp*/ = vAr[1];
      return v;
    }else{
      PL$18/*temp*/ = undefined; 
      _TPL$18/*temp*/ = undefined;
      return;
    };
  })(new PL$5/*C1-constructor*/())/*end temp assign*/;
  (function(s, v){ v = s[8](v); s[7] = v; return v; })(PL$18/*temp*/, 2);
  PL$15.resolve((function(ret){ if (_TPL$18/*temp*/){ _TPL$18/*temp*/();};return ret; })((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$18/*temp*/))); return;;
  if (_TPL$18/*temp*/){ _TPL$18/*temp*/();};PL$15.resolve(); return;;
})();return [PL$15, _TPL$15];
}));
var PL$20/*check*/ = (function(f){
promiseland.registerRemote("server", "0e5ca56b1590158be3142dbee3a1200e", "PL$25", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("0e5ca56b1590158be3142dbee3a1200e", "PL$25", arguments);
}
};
})(function (){
var PL$21 = new __Promise();
var PL$23/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$21.reject(e);
    };
  };
};
var PL$24/*catch rejected*/ = function(e){
  PL$21.reject(e);
};
PL$23/*promiseland exception catcher*/(function(){

  ;
  PL$21.resolve(PL$11/*destroyed*/); return;
  PL$21.resolve(); return;
})();return PL$21;
});
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
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"destroy","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"serve":1,"line":9,"column":12,"offset":109}, "hashStr": "0e5ca56b1590158be3142dbee3a1200e", "name": "C1"}, {"a": 1, "destroy": (function(){
  
    ;
    PL$11/*destroyed*/ = true;
    ;})}));PL$4/*C1*/;
  /* function x (){} - hoisted */;
  ;
  /* function check (){} - hoisted */;
  ;
  PL$26/*tempres*/;
  PL$27/*serverDestroyed*/;
  PL$28/*fx*/ = (function(){
  var PL$29 = new __Promise();
  var PL$31/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        if (_TPL$33/*t*/){ _TPL$33/*t*/();};PL$29.reject(e);
      };
    };
  };
  var PL$32/*catch rejected*/ = function(e){
    if (_TPL$33/*t*/){ _TPL$33/*t*/();};PL$29.reject(e);
  };
  var PL$33/*t*/;
  var _TPL$33/*t*/;
  PL$31/*promiseland exception catcher*/(function(){
  
    ;
    /*temptracked promise*/(function(vAr){
    var r = vAr[0].thenReuse(vAr[1], PL$31/*promiseland exception catcher*/(function(PL$34){/*temp tracked assign*/(function(vAr){
      if (_TPL$33/*t*/){ _TPL$33/*t*/(); };
      if(vAr){
        var v = vAr[0];
        PL$33/*t*/ = v;
        _TPL$33/*t*/ = vAr[1];
        return v;
      }else{
        PL$33/*t*/ = undefined; 
        _TPL$33/*t*/ = undefined;
        return;
      };
    })(PL$34)/*end temp assign*/;
    PL$20/*check*/().then(PL$31/*promiseland exception catcher*/(function(PL$35){PL$27/*serverDestroyed*/ = PL$35;
    PL$26/*tempres*/ = PL$33/*t*/[7];
    if (_TPL$33/*t*/){ _TPL$33/*t*/();};PL$29.resolve(); return;;}), PL$32/*catch rejected*/);
    ;}), PL$32/*catch rejected*/);
    return r;
    })(PL$13/*x*/());/*temptracked promise end*/
    ;
  })();return PL$29;
  });
  
  var PL$36 = new __Promise();if(PL$12/*isClient*/){
    PL$28/*fx*/().then(PL$9/*promiseland exception catcher*/(function(PL$37){PL$37;
    PL$36.resolve();;}), PL$10/*catch rejected*/);
    ;
  }else{
  PL$1.resolve({
    "success": true
  }); return;
  PL$36.resolve();;
  };PL$36.then(PL$9/*promiseland exception catcher*/(function(PL$38){PL$38;;
  ;
  if((PL$26/*tempres*/ != 2)){
    PL$1.resolve({
      "success": false
    }); return;
  };
  ;
  if(PL$27/*serverDestroyed*/){
    PL$1.resolve({
      "success": false
    }); return;
  };
  ;
  PL$1.resolve({
    "success": true
  }); return;
  PL$1.resolve(); return;}), PL$10/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();