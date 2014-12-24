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
if (promiseland._hasModule({ hashStr: "eaf17bd617d5f199678a6ff0aa53647f" })){ return promiseland._getModule("eaf17bd617d5f199678a6ff0aa53647f"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "eaf17bd617d5f199678a6ff0aa53647f", "module": PL$1, promising: true });
var PL$23/*promiseland*/;try{PL$23/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$7 = function(e){ PL$1.reject(e); };
var PL$8/*collect*/;
var PL$9/*collector*/;
var PL$35/*SaveHandler*/;
var PL$4/*C1*/;
var PL$36/*a*/;
var PL$38/*mustHaveObj*/;
var PL$27/*i*/;
var PL$39/*propertyCnt*/;
var PL$3/*type:C1*/ = classSystem._createProvisionalClass();
PL$4/*C1*/ = PL$3/*type:C1*/;
var PL$5/*C1-constructor*/ = undefined;classSystem.readyPromise(PL$3/*type:C1*/).then(function(parType){PL$3/*type:C1*/ = parType;PL$5/*C1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:C1*/);});PL$6(function(){

  ;
  PL$8/*collect*/ = true;
  PL$9/*collector*/ = {};
  PL$35/*SaveHandler*/ = (function(){var PL$10/*inherited*/ = {};
var res = promiseland.createClass({"registerClass": (function(PL$11/*par*/){
  var PL$12 = new __Promise();
var PL$14 = function(code){ return function(res){ try{code(res);}catch(e){ PL$12.reject(e); }; }; };
var PL$15 = function(e){ PL$12.reject(e); };
var PL$22/*map*/;
PL$14(function(){
  
    ;
    if(PL$8/*collect*/){
      PL$9/*collector*/["register"] = PL$11/*par*/;
      PL$12.resolve({"save": (function(PL$11/*par*/){
      var PL$16 = new __Promise();
var PL$17 = function(code){ return function(res){ try{code(res);}catch(e){ PL$16.reject(e); }; }; };
var PL$18 = function(e){ PL$16.reject(e); };
PL$17(function(){
      
        ;
        if(PL$8/*collect*/){
          PL$9/*collector*/["save"] = PL$11/*par*/;
        };
        ;
        PL$16.resolve(); return;})();
return PL$16;
}),
"load": (function(PL$11/*par*/){
      var PL$19 = new __Promise();
var PL$20 = function(code){ return function(res){ try{code(res);}catch(e){ PL$19.reject(e); }; }; };
var PL$21 = function(e){ PL$19.reject(e); };
PL$20(function(){
      
        ;
        if(PL$8/*collect*/){
          PL$9/*collector*/["load"] = PL$11/*par*/;
        };
        ;
        PL$19.resolve(); return;})();
return PL$19;
})}); return;
    };
    ;
    PL$22/*map*/ = new PL$23/*promiseland*/["Map"]();
    PL$12.resolve({"save": (function(PL$11/*par*/){
    var PL$24 = new __Promise();
var PL$25 = function(code){ return function(res){ try{code(res);}catch(e){ PL$24.reject(e); }; }; };
var PL$26 = function(e){ PL$24.reject(e); };
var PL$27/*i*/;
var PL$28/*o*/;
PL$25(function(){
    
      ;
      PL$27/*i*/ = 0;
      PL$28/*o*/ = {};
      for(PL$27/*i*/ = 0;(PL$27/*i*/ < PL$11/*par*/["propertiesAr"]["length"]);++PL$27/*i*/){{
        if((PL$11/*par*/["propertiesAr"][PL$27/*i*/]["name"] == "id")){
          continue;;
        };
        ;
        PL$28/*o*/[PL$11/*par*/["propertiesAr"][PL$27/*i*/]["name"]] = PL$11/*par*/["propertiesAr"][PL$27/*i*/]["value"];}};
      ;
      PL$22/*map*/["set"](PL$11/*par*/["properties"]["id"]["value"], PL$28/*o*/);
      PL$24.resolve(); return;})();
return PL$24;
}),
"load": (function(PL$11/*par*/){
    var PL$29 = new __Promise();
var PL$30 = function(code){ return function(res){ try{code(res);}catch(e){ PL$29.reject(e); }; }; };
var PL$31 = function(e){ PL$29.reject(e); };
PL$30(function(){
    
      ;
      PL$29.resolve(PL$22/*map*/["get"](PL$11/*par*/["properties"]["id"]["value"])); return;
      PL$29.resolve(); return;})();
return PL$29;
}),
"delete": (function(PL$11/*par*/){
    var PL$32 = new __Promise();
var PL$33 = function(code){ return function(res){ try{code(res);}catch(e){ PL$32.reject(e); }; }; };
var PL$34 = function(e){ PL$32.reject(e); };
PL$33(function(){
    
      ;
      PL$32.resolve(PL$22/*map*/["delete"](PL$11/*par*/["properties"]["id"]["value"])); return;
      PL$32.resolve(); return;})();
return PL$32;
})}); return;
    PL$12.resolve(); return;})();
return PL$12;
})}, [], PL$10/*inherited*/);
return res; })();PL$35/*SaveHandler*/;
  PL$23/*promiseland*/["classSystem"]["setStorageEngine"](new PL$35/*SaveHandler*/());
  classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"x","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "savable": true}, {"x": 1, "y": 2}));PL$4/*C1*/;
  new PL$5/*C1-constructor*/("xxx").then(PL$6(function(PL$37){PL$36/*a*/ = PL$37;
  PL$36/*a*/[4]();
  PL$8/*collect*/ = false;
  if(((! PL$9/*collector*/["load"] || ! PL$9/*collector*/["save"]) || ! PL$9/*collector*/["register"])){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if(! (typeof PL$9/*collector*/["register"]["idType"] == "function")){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if(! PL$9/*collector*/["register"]["properties"]){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if(! PL$9/*collector*/["register"]["properties"]){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$38/*mustHaveObj*/ = {"id": true,
"x": true,
"y": true};
  PL$27/*i*/;
  for(PL$27/*i*/ in PL$38/*mustHaveObj*/){
    if(! PL$9/*collector*/["register"]["properties"][PL$27/*i*/]){
      PL$1.resolve({"success": false}); return;
    };
    ;};
  ;
  if(! PL$9/*collector*/["register"]["propertiesAr"]){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$39/*propertyCnt*/ = 3;
  if((PL$9/*collector*/["register"]["propertiesAr"]["length"] != PL$39/*propertyCnt*/)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if((PL$9/*collector*/["load"]["properties"]["id"]["value"] != "xxx")){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if((PL$9/*collector*/["save"]["properties"]["id"]["value"] != "xxx")){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if((PL$9/*collector*/["save"]["properties"]["x"]["value"] != 1)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if((PL$9/*collector*/["save"]["properties"]["y"]["value"] != 2)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  if((PL$9/*collector*/["save"]["propertiesAr"]["length"] != PL$39/*propertyCnt*/)){
    PL$1.resolve({"success": false}); return;
  };
  ;
  PL$1.resolve({"success": true}); return;
  PL$1.resolve(); return;}), PL$7);
;})();
return PL$1;
})();
;;
return PL$1});
})();