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
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "d161e2885801fe428734fe4e3539fe62" })){ return promiseland._getModule("d161e2885801fe428734fe4e3539fe62"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "d161e2885801fe428734fe4e3539fe62", "module": PL$1, promising: true });
var PL$23/*promiseland*/;try{PL$23/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$8/*collect*/;
var PL$9/*collector*/;
var PL$22/*SaveHandler*/;
var PL$4/*C1*/;
var PL$24/*a*/;
var PL$26/*mustHaveObj*/;
var PL$27/*i*/;
var PL$28/*propertyCnt*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});PL$6(function(){;
PL$8/*collect*/ = true;
PL$9/*collector*/ = {};
PL$22/*SaveHandler*/ = (function(){var PL$10/*inherited*/ = {};
var res = promiseland.createClass({"registerClass": (function(PL$11/*par*/){
var PL$12 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$15 = function(e){ PL$12.reject(e); };
PL$14(function(){;
if(PL$8/*collect*/){
PL$9/*collector*/["register"] = PL$11/*par*/;;
};
;
PL$12.resolve({"save": (function(PL$11/*par*/){
var PL$16 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$18 = function(e){ PL$16.reject(e); };
PL$17(function(){;
if(PL$8/*collect*/){
PL$9/*collector*/["save"] = PL$11/*par*/;;
};
;
PL$16.resolve(); return;;
})();
return PL$16;
}),
"load": (function(PL$11/*par*/){
var PL$19 = new __Promise();
var PL$20 = function(code){ return function(res){ try{code(res);}catch(e){ PL$19.reject(e); }; }; };
var PL$21 = function(e){ PL$19.reject(e); };
PL$20(function(){;
if(PL$8/*collect*/){
PL$9/*collector*/["load"] = PL$11/*par*/;;
};
;
PL$19.resolve(); return;;
})();
return PL$19;
})}); return;;
PL$12.resolve(); return;;
})();
return PL$12;
})}, [], PL$10/*inherited*/);
return res; })();PL$22/*SaveHandler*/;;
PL$23/*promiseland*/["classSystem"]["setSaveHandler"](new PL$22/*SaveHandler*/());;
classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "savable": true}, {"x": 1, "y": 2}));PL$4/*C1*/;;
new PL$5/*C1-constructor*/("xxx").then(PL$6(function(PL$25){PL$24/*a*/ = PL$25;
PL$24/*a*/[4]();;
PL$8/*collect*/ = false;;
if(((! PL$9/*collector*/["load"] || ! PL$9/*collector*/["save"]) || ! PL$9/*collector*/["register"])){
PL$1.resolve({"success": false}); return;;
};
;
if(! (typeof PL$9/*collector*/["register"]["idType"] == "function")){
PL$1.resolve({"success": false}); return;;
};
;
if(! PL$9/*collector*/["register"]["properties"]){
PL$1.resolve({"success": false}); return;;
};
;
if(! PL$9/*collector*/["register"]["properties"]){
PL$1.resolve({"success": false}); return;;
};
;
PL$26/*mustHaveObj*/ = {"id": true,
"x": true,
"y": true};
PL$27/*i*/;
for(PL$27/*i*/ in PL$26/*mustHaveObj*/){if(! PL$9/*collector*/["register"]["properties"][PL$27/*i*/]){
PL$1.resolve({"success": false}); return;;
};
;
};
;
if(! PL$9/*collector*/["register"]["propertiesAr"]){
PL$1.resolve({"success": false}); return;;
};
;
PL$28/*propertyCnt*/ = 3;
if((PL$9/*collector*/["register"]["propertiesAr"]["length"] != PL$28/*propertyCnt*/)){
PL$1.resolve({"success": false}); return;;
};
;
if((PL$9/*collector*/["load"]["properties"]["id"]["value"] != "xxx")){
PL$1.resolve({"success": false}); return;;
};
;
if((PL$9/*collector*/["save"]["properties"]["id"]["value"] != "xxx")){
PL$1.resolve({"success": false}); return;;
};
;
if((PL$9/*collector*/["save"]["properties"]["x"]["value"] != 1)){
PL$1.resolve({"success": false}); return;;
};
;
if((PL$9/*collector*/["save"]["properties"]["y"]["value"] != 2)){
PL$1.resolve({"success": false}); return;;
};
;
if((PL$9/*collector*/["save"]["propertiesAr"]["length"] != PL$28/*propertyCnt*/)){
PL$1.resolve({"success": false}); return;;
};
;
PL$1.resolve({"success": true}); return;;
PL$1.resolve(); return;;
}), PL$7);
;})();
return PL$1;
})();
;;
return PL$1});
})();