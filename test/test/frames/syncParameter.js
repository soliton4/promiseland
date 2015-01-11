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
if (promiseland._hasModule({ hashStr: "da40cc33921b9c46c8c6f40737bb3c21" })){ return promiseland._getModule("da40cc33921b9c46c8c6f40737bb3c21"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "da40cc33921b9c46c8c6f40737bb3c21", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$6/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$7/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$8/*destroyed*/;
var PL$9/*isClient*/;
var PL$4/*C1*/;
var PL$10/*local*/;
var _TPL$10/*local*/;
var PL$11/*init*/;
var PL$33/*temp*/;
var _TPL$33/*temp*/;

/* ---------------------------- */
/* type C1 */
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/
var PL$5/*C1-constructor*/ = undefined;
classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){
  PL$3/*type:C1*/ = parType;
  PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);
});
/* ---------------------------- */

function PL$17/*extraFun*/(PL$18/*par1*/){
var _TPL$18/*par1*/;
if(PL$18/*par1*/){ _TPL$18/*par1*/ = PL$18/*par1*/[1];
PL$18/*par1*/ = PL$18/*par1*/[0];}

  try{;
  /*tracked assign*/(function(v){
  if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
  PL$10/*local*/ = v;
  if (v){
  _TPL$10/*local*/ = v[2]();
  }else{
  _TPL$10/*local*/ = undefined;
  };
  return v;
  })(PL$18/*par1*/)/*end assign*/
  ;
  if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};}catch(e){if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};throw e};;};
var PL$19/*x*/ = (function(f){
promiseland.registerRemote("server", "da40cc33921b9c46c8c6f40737bb3c21", "PL$24", f, (classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$3/*type:C1*/]})));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("da40cc33921b9c46c8c6f40737bb3c21", "PL$24", arguments);
}
};
})(function (PL$18/*par1*/){
var PL$20 = new __Promise();
var PL$22/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};PL$20.reject(e);
    };
  };
};
var PL$23/*catch rejected*/ = function(e){
  if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};PL$20.reject(e);
};
var _TPL$18/*par1*/;
if(PL$18/*par1*/){ _TPL$18/*par1*/ = PL$18/*par1*/[1];
PL$18/*par1*/ = PL$18/*par1*/[0];}
PL$22/*promiseland exception catcher*/(function(){

  ;
  /*tracked assign*/(function(v){
  if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
  PL$10/*local*/ = v;
  if (v){
  _TPL$10/*local*/ = v[2]();
  }else{
  _TPL$10/*local*/ = undefined;
  };
  return v;
  })(PL$18/*par1*/)/*end assign*/
  ;
  PL$20.resolve((function(ret){ if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};return ret; })(PL$10/*local*/[9])); return;;
  if (_TPL$18/*par1*/){ _TPL$18/*par1*/();};PL$20.resolve(); return;;
})();return PL$20;
});
var PL$25/*getLocalB*/ = (function(f){
promiseland.registerRemote("server", "da40cc33921b9c46c8c6f40737bb3c21", "PL$30", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("da40cc33921b9c46c8c6f40737bb3c21", "PL$30", arguments);
}
};
})(function (){
var PL$26 = new __Promise();
var PL$28/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$26.reject(e);
    };
  };
};
var PL$29/*catch rejected*/ = function(e){
  PL$26.reject(e);
};
PL$28/*promiseland exception catcher*/(function(){

  ;
  PL$26.resolve(PL$10/*local*/[9]); return;
  PL$26.resolve(); return;
})();return PL$26;
});
PL$6/*promiseland exception catcher*/(function(){

  ;
  PL$8/*destroyed*/ = false;
  PL$9/*isClient*/ = false;
  (function(){
  if (!promiseland.profileHas("client")){
  return;
  };
  
    ;
    PL$9/*isClient*/ = true;
    ;})();
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "sync": {"type":"sync","all":1,"line":10,"column":12,"offset":110}, "hashStr": "da40cc33921b9c46c8c6f40737bb3c21", "name": "C1"}, {"a": 1, "b": 2}));PL$4/*C1*/;
  PL$10/*local*/;
  PL$11/*init*/ = ((function(f){
  promiseland.registerRemote("server", "da40cc33921b9c46c8c6f40737bb3c21", "PL$16", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("server")){
  return f;
  }else{
  return function(){
  return promiseland.remoteExec("da40cc33921b9c46c8c6f40737bb3c21", "PL$16", arguments);
  }
  };
  })(function(){
  var PL$12 = new __Promise();
  var PL$14/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$12.reject(e);
      };
    };
  };
  var PL$15/*catch rejected*/ = function(e){
    PL$12.reject(e);
  };
  PL$14/*promiseland exception catcher*/(function(){
  
    ;
    /*temp tracked assign*/(function(vAr){
      if (_TPL$10/*local*/){ _TPL$10/*local*/(); };
      if(vAr){
        var v = vAr[0];
        PL$10/*local*/ = v;
        _TPL$10/*local*/ = vAr[1];
        return v;
      }else{
        PL$10/*local*/ = undefined; 
        _TPL$10/*local*/ = undefined;
        return;
      };
    })(new PL$5/*C1-constructor*/())/*end temp assign*/;
    PL$12.resolve(); return;
  })();return PL$12;
  }));
  /* function extraFun (){} - hoisted */;
  ;
  /* function x (){} - hoisted */;
  ;
  /* function getLocalB (){} - hoisted */;
  ;
  if(! PL$9/*isClient*/){
    PL$1.resolve({"success": true}); return;
  };
  ;
  PL$11/*init*/().then(PL$6/*promiseland exception catcher*/(function(PL$31){PL$31;
  PL$25/*getLocalB*/().then(PL$6/*promiseland exception catcher*/(function(PL$32){if((PL$32 !== 2)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  /*temp tracked assign*/(function(vAr){
    if (_TPL$33/*temp*/){ _TPL$33/*temp*/(); };
    if(vAr){
      var v = vAr[0];
      PL$33/*temp*/ = v;
      _TPL$33/*temp*/ = vAr[1];
      return v;
    }else{
      PL$33/*temp*/ = undefined; 
      _TPL$33/*temp*/ = undefined;
      return;
    };
  })(new PL$5/*C1-constructor*/())/*end temp assign*/;
  if(PL$9/*isClient*/){
    (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$33/*temp*/, 4);
  };
  ;
  PL$19/*x*/((function(v){ if(!v){ return; }; return [v, v[2]()];})(PL$33/*temp*/)).then(PL$6/*promiseland exception catcher*/(function(PL$34){PL$34;
  PL$25/*getLocalB*/().then(PL$6/*promiseland exception catcher*/(function(PL$35){if((PL$35 !== 4)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if(PL$9/*isClient*/){
    (function(s, v){ v = s[10](v); s[9] = v; return v; })(PL$33/*temp*/, 5);
  };
  ;
  PL$25/*getLocalB*/().then(PL$6/*promiseland exception catcher*/(function(PL$36){if((PL$36 !== 5)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$1.resolve({"success": true}); return;
  PL$1.resolve(); return;}), PL$7/*catch rejected*/);
  ;}), PL$7/*catch rejected*/);
  ;}), PL$7/*catch rejected*/);
  ;}), PL$7/*catch rejected*/);
  ;}), PL$7/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();