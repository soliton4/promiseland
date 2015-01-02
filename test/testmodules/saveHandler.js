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
if (promiseland._hasModule({ hashStr: "0e4487eccdab1b453ec65123b49d7aec" })){ return promiseland._getModule("0e4487eccdab1b453ec65123b49d7aec"); };
var PL$12/*console*/;try{PL$12/*console*/ = console;}catch(e){};
var PL$14/*promiseland*/;try{PL$14/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$5/*properties*/;
var PL$26/*SaveHandler*/;
var PL$3/*C1*/;
var PL$2/*type:C1*/ = classSystem._createProvisionalClass();
PL$3/*C1*/ = PL$2/*type:C1*/;
var PL$4/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$2/*type:C1*/).then(function(parType){PL$2/*type:C1*/ = parType;PL$4/*C1-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:C1*/);});
  ;
  PL$5/*properties*/;
  PL$26/*SaveHandler*/ = (function(){var PL$6/*inherited*/ = {};
var res = promiseland.createClass({"registerClass": (function(PL$7/*par*/){
  var PL$8 = new __Promise();
var PL$10 = function(code){ return function(res){ try{code(res);}catch(e){ PL$8.reject(e); }; }; };
var PL$11 = function(e){ PL$8.reject(e); };
var PL$13/*map*/;
PL$10(function(){
  
    ;
    PL$12/*console*/["log"](PL$7/*par*/);
    PL$13/*map*/ = new PL$14/*promiseland*/["Map"]();
    PL$5/*properties*/ = PL$7/*par*/["properties"];
    PL$8.resolve({"save": (function(PL$7/*par*/){
    var PL$15 = new __Promise();
var PL$16 = function(code){ return function(res){ try{code(res);}catch(e){ PL$15.reject(e); }; }; };
var PL$17 = function(e){ PL$15.reject(e); };
var PL$18/*i*/;
var PL$19/*o*/;
PL$16(function(){
    
      ;
      PL$18/*i*/ = 0;
      PL$19/*o*/ = {};
      for(PL$18/*i*/ = 0;(PL$18/*i*/ < PL$7/*par*/["propertiesAr"]["length"]);++PL$18/*i*/){{
        if((PL$7/*par*/["propertiesAr"][PL$18/*i*/]["name"] == "id")){
          continue;;
        };
        ;
        PL$19/*o*/[PL$7/*par*/["propertiesAr"][PL$18/*i*/]["name"]] = PL$7/*par*/["propertiesAr"][PL$18/*i*/]["value"];}};
      ;
      PL$13/*map*/["set"](PL$7/*par*/["properties"]["id"]["value"], PL$19/*o*/);
      PL$15.resolve(); return;})();
return PL$15;
}),
"load": (function(PL$7/*par*/){
    var PL$20 = new __Promise();
var PL$21 = function(code){ return function(res){ try{code(res);}catch(e){ PL$20.reject(e); }; }; };
var PL$22 = function(e){ PL$20.reject(e); };
PL$21(function(){
    
      ;
      PL$20.resolve(PL$13/*map*/["get"](PL$7/*par*/["properties"]["id"]["value"])); return;
      PL$20.resolve(); return;})();
return PL$20;
}),
"delete": (function(PL$7/*par*/){
    var PL$23 = new __Promise();
var PL$24 = function(code){ return function(res){ try{code(res);}catch(e){ PL$23.reject(e); }; }; };
var PL$25 = function(e){ PL$23.reject(e); };
PL$24(function(){
    
      ;
      PL$23.resolve(PL$13/*map*/["delete"](PL$7/*par*/["properties"]["id"]["value"])); return;
      PL$23.resolve(); return;})();
return PL$23;
})}); return;
    PL$8.resolve(); return;})();
return PL$8;
})}, [], PL$6/*inherited*/);
return res; })();PL$26/*SaveHandler*/;
  classSystem._resolveProvisional(PL$2/*type:C1*/, classSystem.createClass({moduleName: "xxx",className: "C1",members: [{"name":"x","type":classSystem.getBuiltinType("var"),"meta":{"type": "int"}},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "0e4487eccdab1b453ec65123b49d7aec", "name": "C1", "savable": true}, {"x": 1, "y": 2}));PL$3/*C1*/;
  PL$14/*promiseland*/["classSystem"]["setStorageEngine"](new PL$26/*SaveHandler*/(), PL$3/*C1*/);
  ;})();
;return PL$1;
});
})();