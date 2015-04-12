(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "62087c37d282f6b43e824ef9beb76a0a" })){ return promiseland._getModule("62087c37d282f6b43e824ef9beb76a0a"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "62087c37d282f6b43e824ef9beb76a0a", "module": PL$1, promising: true });
var PL$21/*promiseland*/;try{PL$21/*promiseland*/ = promiseland;}catch(e){};
var PL$22/*i*/;try{PL$22/*i*/ = i;}catch(e){};
var PL$42/*console*/;try{PL$42/*console*/ = console;}catch(e){};
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
var PL$12/*properties*/;
var PL$13/*hasConstr*/;
var PL$36/*SaveHandler*/;
var PL$4/*C1*/;
var PL$38/*a*/;

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

PL$6/*promiseland exception catcher*/(function(){

  ;
  var PL$8 = new __Promise();
  var PL$9 = new __Promise();
  var PL$10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.resolve(e); }; }; };
  var PL$11 = function(e){ PL$9.resolve(e); };
  PL$10/*try catch*/(function(){
    PL$12/*properties*/;
    PL$13/*hasConstr*/ = false;
    PL$36/*SaveHandler*/ = (function(){var PL$14/*inherited*/ = {};
    var res = promiseland.createClass({
      "registerClass": (function(PL$15/*par*/){
      var PL$16 = new __Promise();
      var PL$18/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$16.reject(e);
          };
        };
      };
      var PL$19/*catch rejected*/ = function(e){
        PL$16.reject(e);
      };
      var PL$20/*map*/;
      PL$18/*promiseland exception catcher*/(function(){
      
        ;
        PL$20/*map*/ = new PL$21/*promiseland*/["Map"]();
        PL$12/*properties*/ = PL$15/*par*/["properties"];
        for(PL$22/*i*/ = 0;(PL$22/*i*/ < PL$15/*par*/["propertiesAr"]["length"]);++PL$22/*i*/){{
          if((PL$15/*par*/["propertiesAr"][PL$22/*i*/]["name"] == "constructor")){
            PL$13/*hasConstr*/ = true;
          };
          ;}};
        ;
        PL$16.resolve({
          "save": (function(PL$15/*par*/){
          var PL$23 = new __Promise();
          var PL$25/*promiseland exception catcher*/ = function(code){
            return function(res){
              try{ code(res); }catch(e){
                PL$23.reject(e);
              };
            };
          };
          var PL$26/*catch rejected*/ = function(e){
            PL$23.reject(e);
          };
          var PL$22/*i*/;
          var PL$27/*o*/;
          PL$25/*promiseland exception catcher*/(function(){
          
            ;
            PL$22/*i*/ = 0;
            PL$27/*o*/ = {
              
            };
            for(PL$22/*i*/ = 0;(PL$22/*i*/ < PL$15/*par*/["propertiesAr"]["length"]);++PL$22/*i*/){{
              if((PL$15/*par*/["propertiesAr"][PL$22/*i*/]["name"] == "constructor")){
                PL$13/*hasConstr*/ = true;
              };
              ;}};
            ;
            PL$23.resolve(); return;
          })();return PL$23;
          }),
          "load": (function(PL$15/*par*/){
          var PL$28 = new __Promise();
          var PL$30/*promiseland exception catcher*/ = function(code){
            return function(res){
              try{ code(res); }catch(e){
                PL$28.reject(e);
              };
            };
          };
          var PL$31/*catch rejected*/ = function(e){
            PL$28.reject(e);
          };
          PL$30/*promiseland exception catcher*/(function(){
          
            ;
            PL$28.resolve(PL$20/*map*/["get"](PL$15/*par*/["properties"]["id"]["value"])); return;
            PL$28.resolve(); return;
          })();return PL$28;
          }),
          "delete": (function(PL$15/*par*/){
          var PL$32 = new __Promise();
          var PL$34/*promiseland exception catcher*/ = function(code){
            return function(res){
              try{ code(res); }catch(e){
                PL$32.reject(e);
              };
            };
          };
          var PL$35/*catch rejected*/ = function(e){
            PL$32.reject(e);
          };
          PL$34/*promiseland exception catcher*/(function(){
          
            ;
            PL$32.resolve(PL$20/*map*/["delete"](PL$15/*par*/["properties"]["id"]["value"])); return;
            PL$32.resolve(); return;
          })();return PL$32;
          })
        }); return;
        PL$16.resolve(); return;
      })();return PL$16;
      })
    }, [], PL$14/*inherited*/);
    return res; })();PL$36/*SaveHandler*/;
    classSystem._resolveProvisional(PL$3/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"x","type":classSystem.getBuiltinType("var"),"meta":{
      "type": "int"
    }},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "62087c37d282f6b43e824ef9beb76a0a", "name": "C1", "savable": true}, {"constructor": (function(PL$37/*bla*/){
    
      ;
      ;}), "x": 1, "y": 2}));PL$4/*C1*/;
    PL$21/*promiseland*/["classSystem"]["setStorageEngine"](new PL$36/*SaveHandler*/(), PL$4/*C1*/);
    if(PL$13/*hasConstr*/){
      PL$1.resolve({
        "success": false
      }); return;
    };
    ;
    new PL$5/*C1-constructor*/("xxx").then(PL$10/*try catch*/(function(PL$39){PL$38/*a*/ = PL$39;
    if(PL$13/*hasConstr*/){
      PL$1.resolve({
        "success": false
      }); return;
    };
    ;
    PL$38/*a*/[4]().then(PL$10/*try catch*/(function(PL$40){PL$40;
    if(PL$13/*hasConstr*/){
      PL$1.resolve({
        "success": false
      }); return;
    };
    ;
    PL$1.resolve({
      "success": true
    }); return;
    PL$8.resolve();}), PL$11);
  ;}), PL$11);
  ;})();
  PL$9.then(PL$6/*promiseland exception catcher*/(function(PL$41/*e*/){
    PL$42/*console*/["log"](PL$41/*e*/);
    PL$1.resolve({
      "success": false,
      "error": PL$41/*e*/
    }); return;
    PL$8.resolve();;}));
  PL$8.then(PL$6/*promiseland exception catcher*/(function(){;
  PL$1.resolve(); return;}), PL$7/*catch rejected*/)
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
