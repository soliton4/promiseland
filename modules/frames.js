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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "225da21df362c90b15f9c0fbab320431" })){ return promiseland._getModule("225da21df362c90b15f9c0fbab320431"); };
var PL$11/*extra*/;try{PL$11/*extra*/ = extra;}catch(e){};
var PL$40/*Promise*/;try{PL$40/*Promise*/ = Promise;}catch(e){};
var PL$52/*console*/;try{PL$52/*console*/ = console;}catch(e){};
var PL$102/*JSON*/;try{PL$102/*JSON*/ = JSON;}catch(e){};
var PL$150/*promiseland*/;try{PL$150/*promiseland*/ = promiseland;}catch(e){};
var PL$255/*localFrameMap*/;try{PL$255/*localFrameMap*/ = localFrameMap;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$41/*ContentBase*/;
var PL$44/*Request*/;
var PL$46/*Answer*/;
var PL$48/*Message*/;
var PL$65/*Package*/;
var PL$121/*Transport*/;
var PL$166/*getInstanceTransportData*/;
var PL$158/*getInstanceFromTransportData*/;
var PL$172/*getTypeTransportData*/;
var PL$204/*getTypeFromTransportData*/;
var PL$147/*getModuleData*/;
var PL$248/*Session*/;

  ;
  ;
  var PL$2/*classSystem*/;
  ;
  var PL$3/*internalObjects*/;
  ;
  var PL$4/*getClassBySyncId*/;
  ;
  var PL$5/*DynInstance*/;
  ;
  var PL$6/*getEffectiveFunctionResultType*/;
  ;
  (function(){
  var PL$7 = new __Promise();
  var PL$9/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$7.reject(e);
      };
    };
  };
  var PL$10/*catch rejected*/ = function(e){
    PL$7.reject(e);
  };
  PL$9/*promiseland exception catcher*/(function(){
  
    ;
    PL$11/*extra*/["classSystemPs"].then(PL$9/*promiseland exception catcher*/(function(PL$12){PL$2/*classSystem*/ = PL$12["classSystem"];
    PL$11/*extra*/["classSystemPs"].then(PL$9/*promiseland exception catcher*/(function(PL$13){PL$3/*internalObjects*/ = PL$13["internalObjects"];
    PL$11/*extra*/["classSystemPs"].then(PL$9/*promiseland exception catcher*/(function(PL$14){PL$4/*getClassBySyncId*/ = PL$14["getClassBySyncId"];
    PL$11/*extra*/["classSystemPs"].then(PL$9/*promiseland exception catcher*/(function(PL$15){PL$5/*DynInstance*/ = PL$15["DynInstance"];
    PL$11/*extra*/["classSystemPs"].then(PL$9/*promiseland exception catcher*/(function(PL$16){PL$6/*getEffectiveFunctionResultType*/ = PL$16["getEffectiveFunctionResultType"];
    PL$7.resolve(); return;}), PL$10/*catch rejected*/);
    ;}), PL$10/*catch rejected*/);
    ;}), PL$10/*catch rejected*/);
    ;}), PL$10/*catch rejected*/);
    ;}), PL$10/*catch rejected*/);
    ;
  })();return PL$7;
  })();
  var PL$17/*config*/ = PL$11/*extra*/["config"];
  ;
  var PL$18/*errorMsg*/ = PL$11/*extra*/["errorMsg"];
  ;
  var PL$19/*moduleData*/ = {
    
  };
  ;
  var PL$20/*profiles*/ = {
    
  };
  ;
  var PL$21/*_emitFun*/ = (function(PL$22/*parEventStr*/, PL$23/*parData*/){
  
    ;
    if(this["_on"][PL$22/*parEventStr*/]){
      var PL$24/*i*/ = 0;
      ;
      var PL$25/*l*/ = this["_on"][PL$22/*parEventStr*/]["length"];
      ;
      for(PL$24/*i*/;(PL$24/*i*/ < PL$25/*l*/);++PL$24/*i*/){{
        try
        {
          this["_on"][PL$22/*parEventStr*/][PL$24/*i*/](PL$23/*parData*/);}catch(PL$26/*e*/){};
        ;}};
      ;
    };
    ;
    ;});
  ;
  var PL$27/*_onFun*/ = (function(PL$22/*parEventStr*/, PL$28/*parFun*/){
  
    ;
    if(this["_on"][PL$22/*parEventStr*/]){
      this["_on"][PL$22/*parEventStr*/]["push"](PL$28/*parFun*/);
    };
    ;
    ;});
  ;
  var PL$29/*Profile*/ = (function(){
  
    ;
    this["_on"] = {
      "connection": [
        
      ]
    };
    ;});
  ;
  PL$29/*Profile*/["prototype"] = {
    "name": (function(){
    
      ;
      ;}),
    "emit": PL$21/*_emitFun*/,
    "find": (function(PL$30/*parId*/){
    
      ;
      ;}),
    "on": PL$27/*_onFun*/
  };
  var PL$31/*Connection*/ = (function(){
  
    ;
    this["_on"] = {
      "data": [
        
      ],
      "disconnect": [
        
      ]
    };
    ;});
  ;
  PL$31/*Connection*/["prototype"] = {
    "send": (function(PL$32/*parStr*/){
    
      ;
      ;}),
    "emit": PL$21/*_emitFun*/,
    "on": PL$27/*_onFun*/
  };
  var PL$33/*maxId*/ = 10000000;
  ;
  var PL$34/*MAKRO_REQUEST*/ = 1;
  ;
  var PL$35/*MAKRO_MESSAGE*/ = 2;
  ;
  var PL$36/*MAKRO_ANSWER*/ = 3;
  ;
  var PL$37/*handlers*/ = {
    
  };
  ;
  PL$41/*ContentBase*/ = (function(){var PL$38/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      this["parent"] = PL$39/*parParent*/;
      this["sendPs"] = new PL$40/*Promise*/();
      this["dataAr"] = (PL$23/*parData*/ || [
        
      ]);
      ;}),
    "newMessage": (function(){
    
      ;
      return this["parent"]["newMessage"]();
      ;}),
    "newRequest": (function(){
    
      ;
      return this["parent"]["newRequest"]();
      ;}),
    "send": (function(){
    
      ;
      this["sendPs"]["resolve"]();
      ;}),
    "setData": (function(PL$23/*parData*/){
    
      ;
      this["dataAr"][1] = PL$23/*parData*/;
      ;}),
    "getData": (function(){
    
      ;
      return this["dataAr"][1];
      ;}),
    "getType": (function(){
    
      ;
      return this["getData"]()["type"];
      ;}),
    "getTransport": (function(){
    
      ;
      return this["parent"]["getTransport"]();
      ;}),
    "getRequest": (function(PL$30/*parId*/){
    
      ;
      return this["parent"]["getRequest"](PL$30/*parId*/);
      ;})
  }, [], PL$38/*inherited*/);
  return res; })();PL$41/*ContentBase*/;
  PL$44/*Request*/ = (function(){var PL$42/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      this["dataAr"][0] = PL$34/*MAKRO_REQUEST*/;
      this["answerPs"] = new PL$40/*Promise*/();
      this["localPs"] = new PL$40/*Promise*/();
      ;}),
    "setId": (function(PL$30/*parId*/){
    
      ;
      this["dataAr"][2] = PL$30/*parId*/;
      ;}),
    "getId": (function(){
    
      ;
      return this["dataAr"][2];
      ;}),
    "createAnswer": (function(){
    
      ;
      var PL$43/*a*/ = this["parent"]["_createAnswer"]();
      ;
      PL$43/*a*/["setId"](this["getId"]());
      return PL$43/*a*/;
      ;})
  }, [PL$41/*ContentBase*/], PL$42/*inherited*/);
  return res; })();PL$44/*Request*/;
  PL$46/*Answer*/ = (function(){var PL$45/*inherited*/ = {};
  var res = promiseland.createClass({
    "isAnswer": true,
    "constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      this["dataAr"][0] = PL$36/*MAKRO_ANSWER*/;
      ;}),
    "setId": (function(PL$30/*parId*/){
    
      ;
      this["dataAr"][2] = PL$30/*parId*/;
      ;}),
    "getId": (function(){
    
      ;
      return this["dataAr"][2];
      ;})
  }, [PL$41/*ContentBase*/], PL$45/*inherited*/);
  return res; })();PL$46/*Answer*/;
  PL$48/*Message*/ = (function(){var PL$47/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      this["dataAr"][0] = PL$35/*MAKRO_MESSAGE*/;
      this["localPs"] = new PL$40/*Promise*/();
      ;})
  }, [PL$41/*ContentBase*/], PL$47/*inherited*/);
  return res; })();PL$48/*Message*/;
  PL$65/*Package*/ = (function(){var PL$49/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      this["parent"] = PL$39/*parParent*/;
      this["requests"] = {
        
      };
      this["dataAr"] = [
        undefined
      ];
      this["content"] = [
        
      ];
      if(PL$23/*parData*/){
        try
        {
          this["answers"] = [
            
          ];
          var PL$24/*i*/;
          ;
          for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$23/*parData*/["length"]);++PL$24/*i*/){{
            var PL$50/*d*/ = PL$23/*parData*/[PL$24/*i*/];
            ;
            switch (PL$50/*d*/[0]){
              case PL$34/*MAKRO_REQUEST*/:
                
                var PL$51/*r*/ = this["newRequest"](PL$50/*d*/);
                ;
                this["requests"][PL$51/*r*/["getId"]()] = PL$51/*r*/;
                break;;
              case PL$35/*MAKRO_MESSAGE*/:
                
                this["newMessage"](PL$50/*d*/);
                break;;
              case PL$36/*MAKRO_ANSWER*/:
                
                this["newAnswer"](PL$50/*d*/);
                break;;
              default:
                
                PL$39/*parParent*/["error"]();
              
            };
            ;}};
          ;}catch(PL$26/*e*/){
          PL$52/*console*/["log"]("package error");
          PL$52/*console*/["log"](PL$26/*e*/);};
        this["dataAr"] = PL$23/*parData*/;
      }else{
      this["sendPs"] = new PL$40/*Promise*/();
      };
      ;
      ;}),
    "getRequest": (function(PL$30/*parId*/){
    
      ;
      return this["requests"][PL$30/*parId*/];
      ;}),
    "handle": (function(){
    
      ;
      try
      {
        var PL$24/*i*/ = 0;
        ;
        while((PL$24/*i*/ < this["content"]["length"])){
        {
          var PL$53/*c*/ = this["content"][PL$24/*i*/];
          ;
          if(PL$53/*c*/["isAnswer"]){
            this["parent"]["handleAnswer"](PL$53/*c*/, this);
          }else{
          var PL$54/*type*/ = PL$53/*c*/["getType"]();
          ;
          if(PL$37/*handlers*/[PL$54/*type*/]){
            PL$37/*handlers*/[PL$54/*type*/](PL$53/*c*/, this);
          }else{
          this["parent"]["error"]();
          };
          ;
          };
          ;
          ++PL$24/*i*/;}};
        ;}catch(PL$26/*e*/){
        PL$52/*console*/["log"]("handle error");
        PL$52/*console*/["log"](PL$26/*e*/);};
      ;
      ;}),
    "getTransport": (function(){
    
      ;
      return this["parent"];
      ;}),
    "newRequest": (function(PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = this["parent"]["_newRequest"](this, PL$23/*parData*/);
      ;
      this["requests"][PL$51/*r*/["id"]] = PL$51/*r*/;
      this["dataAr"]["push"](PL$51/*r*/["dataAr"]);
      this["content"]["push"](PL$51/*r*/);
      return PL$51/*r*/;
      ;}),
    "newMessage": (function(PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = this["parent"]["_newMessage"](this, PL$23/*parData*/);
      ;
      this["dataAr"]["push"](PL$51/*r*/["dataAr"]);
      this["content"]["push"](PL$51/*r*/);
      return PL$51/*r*/;
      ;}),
    "_createAnswer": (function(PL$23/*parData*/){
    
      ;
      return this["parent"]["newAnswer"](PL$23/*parData*/);
      ;}),
    "newAnswer": (function(PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = this["parent"]["_newAnswer"](this, PL$23/*parData*/);
      ;
      this["dataAr"]["push"](PL$51/*r*/["dataAr"]);
      this["content"]["push"](PL$51/*r*/);
      return PL$51/*r*/;
      ;}),
    "send": (function(){
    var PL$55 = new __Promise();
    var PL$57/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$55.reject(e);
        };
      };
    };
    var PL$58/*catch rejected*/ = function(e){
      PL$55.reject(e);
    };
    var PL$24/*i*/;
    var PL$59/*this*/ = this;
    PL$57/*promiseland exception catcher*/(function(){
    
      ;
      PL$24/*i*/ = 0;
      var PL$61 = new __Promise();
      var PL$60 = function(){var PL$62 = new __Promise();
      if((PL$24/*i*/ < PL$59/*this*/["content"]["length"])){
      PL$59/*this*/["content"][PL$24/*i*/]["sendPs"].then(PL$57/*promiseland exception catcher*/(function(PL$63){PL$63;
      ++PL$24/*i*/;
      PL$62.resolve(true); return PL$62; /* continue */
      ;}), PL$58/*catch rejected*/);
      ;}else{
      PL$62.resolve(false); return PL$62; /* break */
      
      };
      PL$62;return PL$62;
      };
      var PL$64 = function(){PL$60().then(function(contLoop){
      if (contLoop){PL$64();}else{PL$61.resolve();};
      });
      };
      PL$64();
      PL$61.then(function(){;
      ;
      PL$59/*this*/["sendPs"]["resolve"]();
      PL$55.resolve(); return;});
    })();return PL$55;
    })
  }, [], PL$49/*inherited*/);
  return res; })();PL$65/*Package*/;
  var PL$66/*waitForTheSend*/ = (function(PL$67/*content*/, PL$68/*package*/){
  var PL$69 = new __Promise();
  var PL$71/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$69.reject(e);
      };
    };
  };
  var PL$72/*catch rejected*/ = function(e){
    PL$69.reject(e);
  };
  PL$71/*promiseland exception catcher*/(function(){
  
    ;
    PL$67/*content*/["sendPs"].then(PL$71/*promiseland exception catcher*/(function(PL$73){PL$73;
    PL$68/*package*/["send"]();
    PL$69.resolve(); return;}), PL$72/*catch rejected*/);
    ;
  })();return PL$69;
  });
  ;
  PL$121/*Transport*/ = (function(){var PL$74/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(){
    
      ;
      this["expect"] = {
        
      };
      this["requests"] = [
        
      ];
      this["nextFreeRequest"] = 0;
      this["_nextId"] = 1;
      this["types"] = [
        
      ];
      this["remoteTypes"] = [
        
      ];
      this["moduleData"] = {
        
      };
      this["instances"] = {
        
      };
      this["instanceTracks"] = {
        
      };
      this["workLoop"]();
      ;}),
    "queue": (function(PL$23/*parData*/){
    
      ;
      var PL$75/*id*/ = PL$23/*parData*/[0];
      ;
      this["_expectPs"](PL$75/*id*/)["resolve"](PL$23/*parData*/);
      ;}),
    "_expectPs": (function(PL$30/*parId*/){
    
      ;
      var PL$76/*ps*/ = this["expect"][PL$30/*parId*/];
      ;
      if(! PL$76/*ps*/){
        PL$76/*ps*/ = new PL$40/*Promise*/();
        this["expect"][PL$30/*parId*/] = PL$76/*ps*/;
      };
      ;
      return PL$76/*ps*/;
      ;}),
    "handleAnswer": (function(PL$77/*parAnswer*/, PL$78/*parPackage*/){
    
      ;
      var PL$75/*id*/ = PL$77/*parAnswer*/["getId"]();
      ;
      var PL$51/*r*/ = this["requests"][PL$75/*id*/];
      ;
      if(! PL$51/*r*/){
        this["error"]();
        return;
      };
      ;
      this["requests"][PL$75/*id*/] = undefined;
      if((PL$75/*id*/ < this["nextFreeRequest"])){
        this["nextFreeRequest"] = PL$75/*id*/;
      }else{
      if(((PL$75/*id*/ + 1) == this["requests"]["length"])){
        this["requests"]["pop"]();
      };
      };
      ;
      PL$51/*r*/["answerPs"]["resolve"](PL$77/*parAnswer*/);
      ;}),
    "workLoop": (function(){
    var PL$79 = new __Promise();
    var PL$81/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$79.reject(e);
        };
      };
    };
    var PL$82/*catch rejected*/ = function(e){
      PL$79.reject(e);
    };
    var PL$24/*i*/;
    var PL$89/*data*/;
    var PL$68/*package*/;
    var PL$90/*this*/ = this;
    PL$81/*promiseland exception catcher*/(function(){
    
      ;
      PL$24/*i*/;
      var PL$84 = new __Promise();
      var PL$83 = function(){var PL$85 = new __Promise();
      if(true){
      PL$24/*i*/ = 1;var PL$87 = new __Promise();
      var PL$86 = function(){var PL$88 = new __Promise();
      if((PL$24/*i*/ < PL$33/*maxId*/)){
      PL$90/*this*/["_expectPs"](PL$24/*i*/).then(PL$81/*promiseland exception catcher*/(function(PL$91){PL$89/*data*/ = PL$91;
      PL$68/*package*/ = new PL$65/*Package*/(PL$90/*this*/, PL$89/*data*/);
      PL$68/*package*/["handle"]();
      PL$88.resolve(true); return PL$88; /* continue */
      ;}), PL$82/*catch rejected*/);
      ;}else{
      PL$88.resolve(false); return PL$88; /* break */
      
      };
      PL$88;return PL$88;
      };
      var PL$92 = function(){PL$86().then(function(contLoop){
      if (contLoop){++PL$24/*i*/;PL$92();}else{PL$87.resolve();};
      });
      };
      PL$92();
      PL$87.then(function(){;
      ;
      PL$85.resolve(true); return PL$85; /* continue */
      ;});}else{
      PL$85.resolve(false); return PL$85; /* break */
      
      };
      PL$85;return PL$85;
      };
      var PL$93 = function(){PL$83().then(function(contLoop){
      if (contLoop){PL$93();}else{PL$84.resolve();};
      });
      };
      PL$93();
      PL$84.then(function(){;
      ;
      PL$79.resolve(); return;});
    })();return PL$79;
    }),
    "nextId": (function(){
    
      ;
      var PL$94/*ret*/ = this["_nextId"];
      ;
      this["_nextId"] += 1;
      if(! (this["_nextId"] < PL$33/*maxId*/)){
        this["_nextId"] = 1;
      };
      ;
      return PL$94/*ret*/;
      ;}),
    "_newRequest": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = new PL$44/*Request*/(PL$39/*parParent*/, PL$23/*parData*/);
      ;
      if(! PL$23/*parData*/){
        var PL$75/*id*/ = this["nextFreeRequest"];
        ;
        while(this["requests"][PL$75/*id*/]){
        {
          ++PL$75/*id*/;}};
        ;
        this["nextFreeRequest"] = (PL$75/*id*/ + 1);
        this["requests"][PL$75/*id*/] = PL$51/*r*/;
        PL$51/*r*/["setId"](PL$75/*id*/);
      };
      ;
      return PL$51/*r*/;
      ;}),
    "_newMessage": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = new PL$48/*Message*/(PL$39/*parParent*/, PL$23/*parData*/);
      ;
      return PL$51/*r*/;
      ;}),
    "_newAnswer": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = new PL$46/*Answer*/(PL$39/*parParent*/, PL$23/*parData*/);
      ;
      return PL$51/*r*/;
      ;}),
    "newRequest": (function(){
    
      ;
      var PL$95/*p*/ = this["newPackage"]();
      ;
      var PL$51/*r*/ = PL$95/*p*/["newRequest"]();
      ;
      PL$66/*waitForTheSend*/(PL$51/*r*/, PL$95/*p*/);
      return PL$51/*r*/;
      ;}),
    "newMessage": (function(){
    
      ;
      var PL$95/*p*/ = this["newPackage"]();
      ;
      var PL$51/*r*/ = PL$95/*p*/["newMessage"]();
      ;
      PL$66/*waitForTheSend*/(PL$51/*r*/, PL$95/*p*/);
      return PL$51/*r*/;
      ;}),
    "newAnswer": (function(){
    
      ;
      var PL$95/*p*/ = this["newPackage"]();
      ;
      var PL$51/*r*/ = PL$95/*p*/["newAnswer"]();
      ;
      PL$66/*waitForTheSend*/(PL$51/*r*/, PL$95/*p*/);
      return PL$51/*r*/;
      ;}),
    "newPackage": (function(){
    
      ;
      var PL$95/*p*/ = new PL$65/*Package*/(this);
      ;
      var PL$96/*self*/ = this;
      ;
      (function(){
      var PL$97 = new __Promise();
      var PL$99/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$97.reject(e);
          };
        };
      };
      var PL$100/*catch rejected*/ = function(e){
        PL$97.reject(e);
      };
      PL$99/*promiseland exception catcher*/(function(){
      
        ;
        PL$95/*p*/["sendPs"].then(PL$99/*promiseland exception catcher*/(function(PL$101){PL$101;
        PL$95/*p*/["dataAr"][0] = PL$96/*self*/["nextId"]();
        PL$96/*self*/["sendString"](PL$102/*JSON*/["stringify"](PL$95/*p*/["dataAr"]));
        PL$97.resolve(); return;}), PL$100/*catch rejected*/);
        ;
      })();return PL$97;
      })();
      return PL$95/*p*/;
      ;}),
    "stringData": (function(PL$32/*parStr*/){
    
      ;
      var PL$89/*data*/ = PL$102/*JSON*/["parse"](PL$32/*parStr*/);
      ;
      this["queue"](PL$89/*data*/);
      ;}),
    "sendString": (function(PL$32/*parStr*/){
    
      ;
      ;}),
    "_getModuleData": (function(PL$103/*parHash*/){
    
      ;
      var PL$19/*moduleData*/ = this["moduleData"][PL$103/*parHash*/];
      ;
      if(! PL$19/*moduleData*/){
        PL$19/*moduleData*/ = {
          
        };
        this["moduleData"][PL$103/*parHash*/] = PL$19/*moduleData*/;
      };
      ;
      return PL$19/*moduleData*/;
      ;}),
    "addType": (function(PL$104/*parType*/, PL$105/*parRemoteTypeId*/){
    
      ;
      var PL$106/*syncId*/ = PL$2/*classSystem*/["getSyncId"](PL$104/*parType*/);
      ;
      var PL$19/*moduleData*/ = this["_getModuleData"](PL$106/*syncId*/["hash"]);
      ;
      var PL$107/*entry*/ = PL$19/*moduleData*/[PL$106/*syncId*/["name"]];
      ;
      var PL$108/*typeIds*/;
      ;
      if(PL$107/*entry*/){
        PL$108/*typeIds*/ = PL$107/*entry*/["typeIds"];
        if((PL$105/*parRemoteTypeId*/ !== undefined)){
          PL$108/*typeIds*/["remoteId"] = PL$105/*parRemoteTypeId*/;
          this["remoteTypes"][PL$105/*parRemoteTypeId*/] = PL$104/*parType*/;
        };
        ;
        return PL$108/*typeIds*/;
      };
      ;
      var PL$109/*typeIdInt*/ = this["types"]["length"];
      ;
      this["types"]["push"](PL$104/*parType*/);
      PL$107/*entry*/ = {
        "typeIds": {
          "id": PL$109/*typeIdInt*/,
          "remoteId": PL$105/*parRemoteTypeId*/
        },
        "type": PL$104/*parType*/
      };
      PL$19/*moduleData*/[PL$106/*syncId*/["name"]] = PL$107/*entry*/;
      if((PL$105/*parRemoteTypeId*/ !== undefined)){
        this["remoteTypes"][PL$105/*parRemoteTypeId*/] = PL$104/*parType*/;
      };
      ;
      return PL$107/*entry*/["typeIds"];
      ;}),
    "getTypeByRemoteId": (function(PL$105/*parRemoteTypeId*/){
    
      ;
      return this["remoteTypes"][PL$105/*parRemoteTypeId*/];
      ;}),
    "getTypeById": (function(PL$110/*parTypeId*/){
    
      ;
      return this["types"][PL$110/*parTypeId*/];
      ;}),
    "getInstanceRemoteId": (function(PL$23/*parData*/){
    
      ;
      var PL$111/*internalId*/ = PL$2/*classSystem*/["getInternalId"](PL$23/*parData*/);
      ;
      return this["instances"][PL$111/*internalId*/];
      ;}),
    "addInstance": (function(PL$112/*parDynInstance*/, PL$113/*parRemoteId*/, PL$114/*parTrack*/){
    
      ;
      var PL$111/*internalId*/ = PL$112/*parDynInstance*/["getInternalId"]();
      ;
      var PL$115/*remoteId*/ = this["instances"][PL$111/*internalId*/];
      ;
      if((PL$115/*remoteId*/ === undefined)){
        PL$2/*classSystem*/["addTransport"](PL$112/*parDynInstance*/, this);
        this["instances"][PL$111/*internalId*/] = PL$113/*parRemoteId*/;
      };
      ;
      if(PL$114/*parTrack*/){
        if(this["instanceTracks"][PL$111/*internalId*/]){
          PL$114/*parTrack*/();
        }else{
        this["instanceTracks"][PL$111/*internalId*/] = PL$114/*parTrack*/;
        };
      };
      ;
      ;}),
    "removeInstance": (function(PL$116/*parInternalId*/, PL$117/*dontSend*/){
    
      ;
      var PL$115/*remoteId*/ = this["instances"][PL$116/*parInternalId*/];
      ;
      if(((PL$115/*remoteId*/ !== undefined) && ! PL$117/*dontSend*/)){
        var PL$118/*m*/ = this["newMessage"]();
        ;
        PL$118/*m*/["setData"]({
          "type": "remove",
          "remoteId": PL$115/*remoteId*/
        });
        PL$118/*m*/["send"]();
      };
      ;
      delete this["instances"][PL$116/*parInternalId*/];
      PL$2/*classSystem*/["removeTransport"](PL$116/*parInternalId*/, this);
      if(this["instanceTracks"][PL$116/*parInternalId*/]){
        var PL$119/*track*/ = this["instanceTracks"][PL$116/*parInternalId*/];
        ;
        delete this["instanceTracks"][PL$116/*parInternalId*/];
        PL$119/*track*/();
      };
      ;
      ;}),
    "removeAllInstances": (function(){
    
      ;
      var PL$24/*i*/;
      ;
      var PL$120/*all*/ = [
        
      ];
      ;
      for(PL$24/*i*/ in this["instances"]){
        PL$120/*all*/["push"](PL$24/*i*/);};
      ;
      for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$120/*all*/["length"]);++PL$24/*i*/){{
        this["removeInstance"](PL$120/*all*/[PL$24/*i*/], true);}};
      ;
      ;})
  }, [], PL$74/*inherited*/);
  return res; })();PL$121/*Transport*/;
  var PL$122/*prepConnection*/ = (function(PL$123/*connection*/, PL$124/*profile*/){
  
    ;
    var PL$125/*transport*/ = new PL$121/*Transport*/();
    ;
    PL$125/*transport*/["sendString"] = (function(PL$126/*s*/){
    
      ;
      PL$123/*connection*/["send"](PL$126/*s*/);
      ;});
    PL$123/*connection*/["on"]("data", (function(PL$127/*dataStr*/){
    
      ;
      PL$125/*transport*/["stringData"](PL$127/*dataStr*/);
      ;}));
    PL$123/*connection*/["on"]("disconnect", (function(PL$127/*dataStr*/){
    
      ;
      ;}));
    PL$123/*connection*/["createRequest"] = (function(PL$89/*data*/){
    
      ;
      return PL$125/*transport*/["newRequest"]();
      ;});
    PL$123/*connection*/["createMsg"] = (function(PL$89/*data*/){
    
      ;
      var PL$128/*msg*/ = PL$125/*transport*/["newMessage"]();
      ;
      PL$128/*msg*/["setData"](PL$89/*data*/);
      PL$128/*msg*/["send"]();
      ;});
    ;});
  ;
  var PL$129/*prepConnectionNew*/ = (function(PL$123/*connection*/, PL$130/*frame*/){
  
    ;
    var PL$125/*transport*/ = new PL$121/*Transport*/();
    ;
    PL$125/*transport*/["sendString"] = (function(PL$126/*s*/){
    
      ;
      PL$123/*connection*/["send"](PL$126/*s*/);
      ;});
    PL$123/*connection*/["data"] = (function(PL$127/*dataStr*/){
    
      ;
      PL$125/*transport*/["stringData"](PL$127/*dataStr*/);
      ;});
    PL$123/*connection*/["_transportDisconnect"] = (function(){
    
      ;
      PL$125/*transport*/["removeAllInstances"]();
      ;});
    PL$123/*connection*/["createRequest"] = (function(PL$89/*data*/){
    
      ;
      return PL$125/*transport*/["newRequest"]();
      ;});
    PL$123/*connection*/["createMsg"] = (function(PL$89/*data*/){
    
      ;
      var PL$128/*msg*/ = PL$125/*transport*/["newMessage"]();
      ;
      PL$128/*msg*/["setData"](PL$89/*data*/);
      PL$128/*msg*/["send"]();
      ;});
    ;});
  ;
  PL$37/*handlers*/["remove"] = (function(PL$131/*parContent*/, PL$78/*parPackage*/){
  
    ;
    try
    {
      var PL$89/*data*/ = PL$131/*parContent*/["getData"]();
      ;
      var PL$132/*t*/ = PL$131/*parContent*/["getTransport"]();
      ;
      PL$132/*t*/["removeInstance"](PL$89/*data*/["remoteId"], true);}catch(PL$26/*e*/){
      PL$52/*console*/["log"]("sync error");
      PL$52/*console*/["log"](PL$26/*e*/);};
    ;
    ;});
  PL$37/*handlers*/["remoteexec"] = (function(PL$131/*parContent*/, PL$78/*parPackage*/){
  var PL$133 = new __Promise();
  var PL$135/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$133.reject(e);
      };
    };
  };
  var PL$136/*catch rejected*/ = function(e){
    PL$133.reject(e);
  };
  var PL$119/*track*/;
  var PL$137/*err*/;
  var PL$138/*args*/;
  var PL$139/*realArgs*/;
  var PL$140/*cleanUpArgs*/;
  var PL$141/*clearExtraTracks*/;
  var PL$24/*i*/;
  var PL$142/*answer*/;
  var PL$89/*data*/;
  var PL$19/*moduleData*/;
  var PL$148/*funEntry*/;
  var PL$151/*funType*/;
  var PL$152/*resultTypes*/;
  var PL$153/*isVar*/;
  var PL$157/*instance*/;
  var PL$161/*funResult*/;
  PL$135/*promiseland exception catcher*/(function(){
  
    ;
    PL$119/*track*/ = (function(){
    
      ;
      ;});
    PL$137/*err*/;
    PL$138/*args*/ = [
      
    ];
    PL$139/*realArgs*/ = [
      
    ];
    PL$140/*cleanUpArgs*/ = (function(){
    
      ;
      var PL$24/*i*/;
      ;
      for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$138/*args*/["length"]);++PL$24/*i*/){{
        try
        {
          PL$138/*args*/[PL$24/*i*/]["track"]();}catch(PL$26/*e*/){};
        ;}};
      ;
      ;});
    PL$141/*clearExtraTracks*/ = (function(){
    
      ;
      var PL$24/*i*/;
      ;
      for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$138/*args*/["length"]);++PL$24/*i*/){{
        try
        {
          PL$138/*args*/[PL$24/*i*/]["clearExtraTracks"]();}catch(PL$26/*e*/){};
        ;}};
      ;
      ;});
    PL$24/*i*/;
    PL$142/*answer*/ = PL$131/*parContent*/["createAnswer"]();
    var PL$143 = new __Promise();
    var PL$144 = new __Promise();
    var PL$145/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$144.resolve(e); }; }; };
    var PL$146 = function(e){ PL$144.resolve(e); };
    PL$145/*try catch*/(function(){
      PL$89/*data*/ = PL$131/*parContent*/["getData"]();
      PL$19/*moduleData*/ = PL$147/*getModuleData*/(PL$89/*data*/["hashStr"]);
      PL$148/*funEntry*/ = PL$19/*moduleData*/["functions"][PL$89/*data*/["nameStr"]];
      
      var PL$149 = new __Promise();if(PL$150/*promiseland*/["profileHas"](PL$148/*funEntry*/["profile"])){
        PL$151/*funType*/ = PL$148/*funEntry*/["funType"];
        PL$152/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$151/*funType*/);
        PL$153/*isVar*/ = true;
        if(! PL$2/*classSystem*/["isVar"](PL$152/*resultTypes*/["promiseResolveType"])){
          PL$153/*isVar*/ = false;
        };
        ;
        PL$24/*i*/ = 0;var PL$155 = new __Promise();
        var PL$154 = function(){var PL$156 = new __Promise();
        if((PL$24/*i*/ < PL$89/*data*/["args"]["length"])){
        PL$158/*getInstanceFromTransportData*/(PL$89/*data*/["args"][PL$24/*i*/], PL$131/*parContent*/).then(PL$145/*try catch*/(function(PL$159){PL$157/*instance*/ = PL$159;
        PL$138/*args*/["push"](PL$157/*instance*/);
        PL$156.resolve(true); return PL$156; /* continue */
        ;}), PL$146);
        ;}else{
        PL$156.resolve(false); return PL$156; /* break */
        
        };
        PL$156;return PL$156;
        };
        var PL$160 = function(){PL$154().then(function(contLoop){
        if (contLoop){++PL$24/*i*/;PL$160();}else{PL$155.resolve();};
        });
        };
        PL$160();
        PL$155.then(function(){;
        ;
        for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$138/*args*/["length"]);++PL$24/*i*/){{
          PL$139/*realArgs*/["push"](PL$138/*args*/[PL$24/*i*/]["getInstanceAsType"](PL$2/*classSystem*/["getFunctionArgumentType"](PL$151/*funType*/, PL$24/*i*/)));}};
        ;
        PL$140/*cleanUpArgs*/();
        PL$161/*funResult*/ = PL$148/*funEntry*/["fun"]["apply"](undefined, PL$139/*realArgs*/);
        if(PL$152/*resultTypes*/["isTemporary"]){
          PL$119/*track*/ = PL$161/*funResult*/[1];
          PL$161/*funResult*/ = PL$161/*funResult*/[0];
        };
        ;
        var PL$162 = new __Promise();
        var PL$163 = new __Promise();
        var PL$164/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$163.resolve(e); }; }; };
        var PL$165 = function(e){ PL$163.resolve(e); };
        PL$164/*try catch*/(function(){
          PL$161/*funResult*/.then(PL$164/*try catch*/(function(PL$167){PL$142/*answer*/["setData"]({
            "data": PL$166/*getInstanceTransportData*/(PL$152/*resultTypes*/["promiseResolveType"], PL$167, PL$142/*answer*/)
          });
          PL$162.resolve();}), PL$165);
        ;})();
        PL$163.then(PL$145/*try catch*/(function(PL$26/*e*/){
          PL$52/*console*/["log"]("answer error");
          PL$52/*console*/["log"](PL$26/*e*/);
          PL$142/*answer*/["setData"]({
            "err": PL$26/*e*/
          });
          PL$162.resolve();;}));
        PL$162.then(PL$145/*try catch*/(function(){;
        ;
        PL$52/*console*/["log"]("send answer:");
        PL$52/*console*/["log"](PL$142/*answer*/["getData"]());
        PL$142/*answer*/["send"]();
        PL$119/*track*/();
        PL$133.resolve(); return;
        PL$149.resolve();;}), PL$146)});
      }else{PL$149.resolve();
      };PL$149.then(PL$145/*try catch*/(function(PL$168){PL$168;;
      ;
      PL$143.resolve();}), PL$146);
    ;})();
    PL$144.then(PL$135/*promiseland exception catcher*/(function(PL$26/*e*/){
      PL$137/*err*/ = PL$26/*e*/;
      PL$52/*console*/["log"]("remoteexec error");
      PL$52/*console*/["log"](PL$26/*e*/);
      PL$140/*cleanUpArgs*/();
      PL$141/*clearExtraTracks*/();
      PL$143.resolve();;}));
    PL$143.then(PL$135/*promiseland exception catcher*/(function(){;
    ;
    PL$142/*answer*/["setData"]({
      "err": (PL$137/*err*/ || PL$18/*errorMsg*/["canNotExecute"])
    });
    PL$142/*answer*/["send"]();
    PL$52/*console*/["log"]("error answer send");
    PL$119/*track*/();
    PL$140/*cleanUpArgs*/();
    PL$52/*console*/["log"]("remote exec fail end");
    PL$133.resolve(); return;
    PL$133.resolve(); return;}), PL$136/*catch rejected*/)
  })();return PL$133;
  });
  PL$166/*getInstanceTransportData*/ = (function(PL$104/*parType*/, PL$23/*parData*/, PL$131/*parContent*/){
  
    ;
    if((PL$23/*parData*/ === undefined)){
      return undefined;
    };
    ;
    if(PL$2/*classSystem*/["isVar"](PL$104/*parType*/)){
      return [
        PL$23/*parData*/
      ];
    };
    ;
    var PL$157/*instance*/ = new PL$5/*DynInstance*/(PL$104/*parType*/, PL$23/*parData*/);
    ;
    try
    {
      var PL$169/*getInstanceFun*/ = (function(PL$104/*parType*/, PL$170/*_parData*/){
      
        ;
        return PL$166/*getInstanceTransportData*/(PL$104/*parType*/, PL$170/*_parData*/, PL$131/*parContent*/);
        ;});
      ;
      var PL$171/*getTypeFun*/ = (function(PL$104/*parType*/){
      
        ;
        return PL$172/*getTypeTransportData*/(PL$104/*parType*/, PL$131/*parContent*/);
        ;});
      ;
      var PL$132/*t*/ = PL$131/*parContent*/["getTransport"]();
      ;
      var PL$111/*internalId*/ = PL$157/*instance*/["getInternalId"]();
      ;
      var PL$115/*remoteId*/ = PL$132/*t*/["getInstanceRemoteId"](PL$157/*instance*/["instance"]);
      ;
      var PL$173/*request*/ = PL$131/*parContent*/["newRequest"]();
      ;
      if((PL$115/*remoteId*/ !== undefined)){
        PL$173/*request*/["setData"]({
          "type": "instance",
          "remoteId": PL$115/*remoteId*/
        });
      }else{
      PL$173/*request*/["setData"]({
        "type": "addInstance",
        "id": PL$111/*internalId*/,
        "data": PL$2/*classSystem*/["getInstanceSyncData"](PL$157/*instance*/, PL$169/*getInstanceFun*/, PL$171/*getTypeFun*/)
      });
      };
      ;
      PL$173/*request*/["send"]();
      (function(){
      var PL$174 = new __Promise();
      var PL$176/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$174.reject(e);
          };
        };
      };
      var PL$177/*catch rejected*/ = function(e){
        PL$174.reject(e);
      };
      var PL$142/*answer*/;
      var PL$183/*answerData*/;
      PL$176/*promiseland exception catcher*/(function(){
      
        ;
        var PL$178 = new __Promise();
        var PL$179 = new __Promise();
        var PL$180/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$179.resolve(e); }; }; };
        var PL$181 = function(e){ PL$179.resolve(e); };
        PL$180/*try catch*/(function(){
          PL$173/*request*/["answerPs"].then(PL$180/*try catch*/(function(PL$182){PL$142/*answer*/ = PL$182;
          PL$183/*answerData*/ = PL$142/*answer*/["getData"]();
          if((PL$183/*answerData*/["id"] !== undefined)){
            PL$132/*t*/["addInstance"](PL$157/*instance*/, PL$183/*answerData*/["id"], (PL$157/*instance*/["isServe"]() ? PL$157/*instance*/["getTrack"]() : undefined));
          };
          ;
          PL$178.resolve();}), PL$181);
        ;})();
        PL$179.then(PL$176/*promiseland exception catcher*/(function(PL$26/*e*/){
          PL$178.resolve();;}));
        PL$178.then(PL$176/*promiseland exception catcher*/(function(){;
        ;
        PL$157/*instance*/["track"]();
        PL$174.resolve(); return;}), PL$177/*catch rejected*/)
      })();return PL$174;
      })();
      var PL$94/*ret*/ = PL$173/*request*/["getId"]();
      ;}catch(PL$26/*e*/){
      PL$52/*console*/["log"]("getInstanceTransportData error");
      PL$52/*console*/["log"](PL$26/*e*/);
      if(PL$157/*instance*/){
        PL$157/*instance*/["track"]();
      };
      ;
      throw {
        "position": "getInstanceTransportData",
        "error": PL$26/*e*/
      };};
    ;
    return PL$94/*ret*/;
    ;});
  PL$158/*getInstanceFromTransportData*/ = (function(PL$23/*parData*/, PL$131/*parContent*/){
  var PL$184 = new __Promise();
  var PL$186/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$184.reject(e);
      };
    };
  };
  var PL$187/*catch rejected*/ = function(e){
    PL$184.reject(e);
  };
  var PL$188/*remoteType*/;
  var PL$189/*remoteVar*/;
  var PL$190/*remoteInstance*/;
  var PL$191/*req*/;
  PL$186/*promiseland exception catcher*/(function(){
  
    ;
    if(((PL$23/*parData*/ === undefined) || (PL$23/*parData*/ === null))){
      PL$184.resolve(new PL$5/*DynInstance*/(PL$2/*classSystem*/["getBuiltinType"]("var"), undefined)); return;
      ;
    };
    ;
    PL$188/*remoteType*/;
    PL$189/*remoteVar*/ = false;
    PL$190/*remoteInstance*/;
    if((PL$23/*parData*/["length"] === 1)){
      PL$184.resolve(new PL$5/*DynInstance*/(PL$2/*classSystem*/["getBuiltinType"]("var"), PL$23/*parData*/[0])); return;
    };
    ;
    PL$191/*req*/ = PL$131/*parContent*/["getRequest"](PL$23/*parData*/);
    PL$191/*req*/["localPs"].then(PL$186/*promiseland exception catcher*/(function(PL$192){PL$184.resolve(PL$192); return;
    PL$184.resolve(); return;}), PL$187/*catch rejected*/);
    ;
  })();return PL$184;
  });
  var PL$193/*getInstanceFromSyncData*/ = (function(PL$23/*parData*/, PL$131/*parContent*/){
  var PL$194 = new __Promise();
  var PL$196/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$194.reject(e);
      };
    };
  };
  var PL$197/*catch rejected*/ = function(e){
    PL$194.reject(e);
  };
  var PL$198/*tempAr*/;
  var PL$199/*clearTempAr*/;
  var PL$132/*t*/;
  var PL$24/*i*/;
  var PL$94/*ret*/;
  PL$196/*promiseland exception catcher*/(function(){
  
    ;
    PL$198/*tempAr*/ = [
      
    ];
    PL$199/*clearTempAr*/ = (function(){
    
      ;
      var PL$24/*i*/ = 1;
      ;
      for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$198/*tempAr*/["length"]);++PL$24/*i*/){{
        try
        {
          PL$198/*tempAr*/[PL$24/*i*/]["track"]();}catch(PL$26/*e*/){};
        ;}};
      ;
      ;});
    var PL$200 = new __Promise();
    var PL$201 = new __Promise();
    var PL$202/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$201.resolve(e); }; }; };
    var PL$203 = function(e){ PL$201.resolve(e); };
    PL$202/*try catch*/(function(){
      PL$132/*t*/ = PL$131/*parContent*/["getTransport"]();
      PL$204/*getTypeFromTransportData*/(PL$23/*parData*/[0], PL$131/*parContent*/).then(PL$202/*try catch*/(function(PL$205){PL$198/*tempAr*/["push"](PL$205);
      PL$24/*i*/ = 1;
      PL$24/*i*/ = 1;var PL$207 = new __Promise();
      var PL$206 = function(){var PL$208 = new __Promise();
      if((PL$24/*i*/ < PL$23/*parData*/["length"])){
      PL$158/*getInstanceFromTransportData*/(PL$23/*parData*/[PL$24/*i*/], PL$131/*parContent*/).then(PL$202/*try catch*/(function(PL$209){PL$198/*tempAr*/["push"](PL$209);
      PL$208.resolve(true); return PL$208; /* continue */
      ;}), PL$203);
      ;}else{
      PL$208.resolve(false); return PL$208; /* break */
      
      };
      PL$208;return PL$208;
      };
      var PL$210 = function(){PL$206().then(function(contLoop){
      if (contLoop){++PL$24/*i*/;PL$210();}else{PL$207.resolve();};
      });
      };
      PL$210();
      PL$207.then(function(){;
      ;
      PL$94/*ret*/ = PL$2/*classSystem*/["getInstanceFromSyncData"](PL$198/*tempAr*/);
      PL$200.resolve();});}), PL$203);
    ;})();
    PL$201.then(PL$196/*promiseland exception catcher*/(function(PL$26/*e*/){
      PL$199/*clearTempAr*/();
      throw PL$26/*e*/;
      PL$200.resolve();;}));
    PL$200.then(PL$196/*promiseland exception catcher*/(function(){;
    ;
    PL$199/*clearTempAr*/();
    PL$194.resolve(PL$94/*ret*/); return;
    PL$194.resolve(); return;}), PL$197/*catch rejected*/)
  })();return PL$194;
  });
  ;
  PL$37/*handlers*/["addInstance"] = (function(PL$131/*parContent*/, PL$78/*parPackage*/){
  var PL$211 = new __Promise();
  var PL$213/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$211.reject(e);
      };
    };
  };
  var PL$214/*catch rejected*/ = function(e){
    PL$211.reject(e);
  };
  var PL$142/*answer*/;
  var PL$157/*instance*/;
  var PL$132/*t*/;
  var PL$89/*data*/;
  var PL$111/*internalId*/;
  PL$213/*promiseland exception catcher*/(function(){
  
    ;
    PL$142/*answer*/ = PL$131/*parContent*/["createAnswer"]();
    PL$157/*instance*/;
    var PL$215 = new __Promise();
    var PL$216 = new __Promise();
    var PL$217/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$216.resolve(e); }; }; };
    var PL$218 = function(e){ PL$216.resolve(e); };
    PL$217/*try catch*/(function(){
      PL$132/*t*/ = PL$78/*parPackage*/["getTransport"]();
      PL$89/*data*/ = PL$131/*parContent*/["getData"]();
      PL$193/*getInstanceFromSyncData*/(PL$89/*data*/["data"], PL$131/*parContent*/).then(PL$217/*try catch*/(function(PL$219){PL$157/*instance*/ = PL$219;
      PL$111/*internalId*/ = PL$157/*instance*/["getInternalId"]();
      PL$132/*t*/["addInstance"](PL$157/*instance*/, PL$89/*data*/["id"]);
      PL$142/*answer*/["setData"]({
        "id": PL$111/*internalId*/
      });
      PL$142/*answer*/["send"]();
      PL$131/*parContent*/["localPs"]["resolve"](PL$157/*instance*/);
      PL$211.resolve(); return;
      PL$215.resolve();}), PL$218);
    ;})();
    PL$216.then(PL$213/*promiseland exception catcher*/(function(PL$26/*e*/){
      if(PL$157/*instance*/){
        PL$157/*instance*/["track"]();
      };
      ;
      PL$52/*console*/["log"]("answer error 3");
      PL$52/*console*/["log"](PL$26/*e*/);
      PL$142/*answer*/["setData"]({
        "err": PL$26/*e*/
      });
      PL$142/*answer*/["send"]();
      PL$131/*parContent*/["localPs"]["reject"](PL$26/*e*/);
      throw PL$26/*e*/;
      PL$215.resolve();;}));
    PL$215.then(PL$213/*promiseland exception catcher*/(function(){;
    ;
    PL$211.resolve(); return;}), PL$214/*catch rejected*/)
  })();return PL$211;
  });
  PL$37/*handlers*/["instance"] = (function(PL$131/*parContent*/, PL$78/*parPackage*/){
  
    ;
    var PL$142/*answer*/ = PL$131/*parContent*/["createAnswer"]();
    ;
    var PL$157/*instance*/;
    ;
    try
    {
      var PL$132/*t*/ = PL$78/*parPackage*/["getTransport"]();
      ;
      var PL$89/*data*/ = PL$131/*parContent*/["getData"]();
      ;
      var PL$111/*internalId*/ = PL$89/*data*/["remoteId"];
      ;
      var PL$220/*realInstance*/ = PL$3/*internalObjects*/[PL$111/*internalId*/];
      ;
      if(PL$220/*realInstance*/){
        PL$157/*instance*/ = new PL$5/*DynInstance*/(undefined, PL$220/*realInstance*/);
        PL$142/*answer*/["setData"]({
          
        });
        PL$142/*answer*/["send"]();
        PL$131/*parContent*/["localPs"]["resolve"](PL$157/*instance*/);
      }else{
      throw PL$18/*errorMsg*/["missingImplementation"];
      };
      ;}catch(PL$26/*e*/){
      if(PL$157/*instance*/){
        PL$157/*instance*/["track"]();
      };
      ;
      PL$52/*console*/["log"]("answer error 4");
      PL$52/*console*/["log"](PL$26/*e*/);
      PL$142/*answer*/["setData"]({
        "err": PL$26/*e*/
      });
      PL$142/*answer*/["send"]();
      PL$131/*parContent*/["localPs"]["reject"](PL$26/*e*/);
      throw PL$26/*e*/;};
    ;
    ;});
  PL$172/*getTypeTransportData*/ = (function(PL$104/*parType*/, PL$131/*parContent*/){
  
    ;
    if(! PL$2/*classSystem*/["isSyncedClass"](PL$104/*parType*/)){
      throw PL$18/*errorMsg*/["noSyncableData"];
    };
    ;
    var PL$132/*t*/ = PL$131/*parContent*/["getTransport"]();
    ;
    var PL$108/*typeIds*/ = PL$132/*t*/["addType"](PL$104/*parType*/);
    ;
    if((PL$108/*typeIds*/ && (PL$108/*typeIds*/["remoteId"] !== undefined))){
      return PL$108/*typeIds*/["remoteId"];
    };
    ;
    var PL$173/*request*/ = PL$131/*parContent*/["newRequest"]();
    ;
    PL$173/*request*/["setData"]({
      "type": "addType",
      "syncId": PL$2/*classSystem*/["getSyncId"](PL$104/*parType*/),
      "typeId": PL$108/*typeIds*/["id"]
    });
    PL$173/*request*/["send"]();
    (function(){
    var PL$221 = new __Promise();
    var PL$223/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$221.reject(e);
        };
      };
    };
    var PL$224/*catch rejected*/ = function(e){
      PL$221.reject(e);
    };
    var PL$142/*answer*/;
    var PL$89/*data*/;
    PL$223/*promiseland exception catcher*/(function(){
    
      ;
      PL$173/*request*/["answerPs"].then(PL$223/*promiseland exception catcher*/(function(PL$225){PL$142/*answer*/ = PL$225;
      PL$89/*data*/ = PL$142/*answer*/["getData"]();
      if(! PL$89/*data*/["err"]){
        PL$108/*typeIds*/["remoteId"] = PL$89/*data*/["id"];
      };
      ;
      PL$221.resolve(); return;}), PL$224/*catch rejected*/);
      ;
    })();return PL$221;
    })();
    return [
      PL$173/*request*/["getId"]()
    ];
    ;});
  PL$204/*getTypeFromTransportData*/ = (function(PL$23/*parData*/, PL$131/*parContent*/){
  var PL$226 = new __Promise();
  var PL$228/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$226.reject(e);
      };
    };
  };
  var PL$229/*catch rejected*/ = function(e){
    PL$226.reject(e);
  };
  var PL$132/*t*/;
  var PL$54/*type*/;
  var PL$191/*req*/;
  PL$228/*promiseland exception catcher*/(function(){
  
    ;
    PL$132/*t*/ = PL$131/*parContent*/["getTransport"]();
    PL$54/*type*/;
    if((typeof PL$23/*parData*/ === "number")){
      PL$54/*type*/ = PL$132/*t*/["getTypeById"](PL$23/*parData*/);
      PL$226.resolve(PL$54/*type*/); return;
    };
    ;
    PL$191/*req*/ = PL$131/*parContent*/["getRequest"](PL$23/*parData*/[0]);
    PL$191/*req*/["localPs"].then(PL$228/*promiseland exception catcher*/(function(PL$230){PL$226.resolve(PL$230); return;
    PL$226.resolve(); return;}), PL$229/*catch rejected*/);
    ;
  })();return PL$226;
  });
  var PL$231/*getRemoteType*/ = (function(PL$23/*parData*/, PL$131/*parContent*/){
  
    ;
    if((typeof PL$23/*parData*/ == "number")){
      var PL$132/*t*/ = PL$131/*parContent*/["getTransport"]();
      ;
      return PL$132/*t*/["getRemoteType"](PL$23/*parData*/);
    };
    ;
    throw PL$18/*errorMsg*/["invalidRemoteType"];
    ;});
  ;
  PL$37/*handlers*/["addType"] = (function(PL$131/*parContent*/, PL$78/*parPackage*/){
  
    ;
    var PL$142/*answer*/ = PL$131/*parContent*/["createAnswer"]();
    ;
    var PL$89/*data*/ = PL$131/*parContent*/["getData"]();
    ;
    var PL$54/*type*/ = PL$4/*getClassBySyncId*/(PL$89/*data*/["syncId"]);
    ;
    if(! PL$54/*type*/){
      PL$131/*parContent*/["localPs"]["reject"](PL$18/*errorMsg*/["remoteTypeNotAvailable"]);
      PL$142/*answer*/["setData"]({
        "err": PL$18/*errorMsg*/["remoteTypeNotAvailable"]
      });
      PL$142/*answer*/["send"]();
      return;
    };
    ;
    var PL$109/*typeIdInt*/ = PL$89/*data*/["typeId"];
    ;
    var PL$132/*t*/ = PL$78/*parPackage*/["getTransport"]();
    ;
    var PL$108/*typeIds*/ = PL$132/*t*/["addType"](PL$54/*type*/, PL$109/*typeIdInt*/);
    ;
    PL$142/*answer*/["setData"]({
      "id": PL$108/*typeIds*/["id"]
    });
    PL$142/*answer*/["send"]();
    PL$131/*parContent*/["localPs"]["resolve"](PL$54/*type*/);
    ;});
  var PL$232/*createRemoteExecRequest*/ = (function(PL$233/*par*/){
  var PL$234 = new __Promise();
  var PL$236/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$234.reject(e);
      };
    };
  };
  var PL$237/*catch rejected*/ = function(e){
    PL$234.reject(e);
  };
  var PL$123/*connection*/;
  var PL$151/*funType*/;
  var PL$152/*resultTypes*/;
  var PL$173/*request*/;
  var PL$138/*args*/;
  var PL$24/*i*/;
  var PL$142/*answer*/;
  var PL$89/*data*/;
  var PL$157/*instance*/;
  var PL$94/*ret*/;
  PL$236/*promiseland exception catcher*/(function(){
  
    ;
    var PL$238 = new __Promise();
    var PL$239 = new __Promise();
    var PL$240/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$239.resolve(e); }; }; };
    var PL$241 = function(e){ PL$239.resolve(e); };
    PL$240/*try catch*/(function(){
      PL$123/*connection*/ = PL$233/*par*/["connection"];
      PL$151/*funType*/ = PL$233/*par*/["funType"];
      PL$152/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$151/*funType*/);
      PL$173/*request*/ = PL$123/*connection*/["createRequest"]();
      PL$138/*args*/ = [
        
      ];
      if((PL$233/*par*/["args"] && PL$233/*par*/["args"]["length"])){
        PL$24/*i*/ = 0;
        for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$233/*par*/["args"]["length"]);++PL$24/*i*/){{
          PL$138/*args*/["push"](PL$166/*getInstanceTransportData*/(PL$2/*classSystem*/["getFunctionArgumentType"](PL$151/*funType*/, PL$24/*i*/), PL$233/*par*/["args"][PL$24/*i*/], PL$173/*request*/));}};
        ;
      };
      ;
      PL$173/*request*/["setData"]({
        "type": "remoteexec",
        "hashStr": PL$233/*par*/["hashStr"],
        "nameStr": PL$233/*par*/["nameStr"],
        "args": PL$138/*args*/
      });
      PL$173/*request*/["send"]();
      PL$173/*request*/["answerPs"].then(PL$240/*try catch*/(function(PL$242){PL$142/*answer*/ = PL$242;
      PL$89/*data*/ = PL$142/*answer*/["getData"]();
      if(PL$89/*data*/["err"]){
        throw PL$89/*data*/["err"];
      };
      ;
      PL$158/*getInstanceFromTransportData*/(PL$89/*data*/["data"], PL$142/*answer*/).then(PL$240/*try catch*/(function(PL$243){PL$157/*instance*/ = PL$243;
      PL$94/*ret*/ = PL$157/*instance*/["getInstanceAsType"](PL$152/*resultTypes*/["promiseResolveType"]);
      PL$238.resolve();}), PL$241);
    ;}), PL$241);
    ;})();
    PL$239.then(PL$236/*promiseland exception catcher*/(function(PL$26/*e*/){
      if(PL$157/*instance*/){
        PL$157/*instance*/["track"]();
      };
      ;
      PL$52/*console*/["log"]("createRemoteExecRequest error");
      PL$52/*console*/["log"](PL$26/*e*/);
      throw PL$26/*e*/;
      PL$238.resolve();;}));
    PL$238.then(PL$236/*promiseland exception catcher*/(function(){;
    ;
    if(PL$157/*instance*/){
      PL$157/*instance*/["track"]();
    };
    ;
    PL$234.resolve(PL$94/*ret*/); return;
    PL$234.resolve(); return;}), PL$237/*catch rejected*/)
  })();return PL$234;
  });
  ;
  var PL$244/*findProfile*/ = (function(PL$245/*profileNameStr*/){
  
    ;
    return PL$20/*profiles*/[PL$245/*profileNameStr*/];
    ;});
  ;
  PL$147/*getModuleData*/ = (function(PL$103/*parHash*/){
  
    ;
    if(! PL$19/*moduleData*/[PL$103/*parHash*/]){
      PL$19/*moduleData*/[PL$103/*parHash*/] = {
        "functions": {
          
        },
        "classes": {
          
        }
      };
    };
    ;
    return PL$19/*moduleData*/[PL$103/*parHash*/];
    ;});
  PL$248/*Session*/ = (function(){var PL$246/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$247/*parConnection*/){
    
      ;
      this["connection"] = PL$247/*parConnection*/;
      ;})
  }, [], PL$246/*inherited*/);
  return res; })();PL$248/*Session*/;
  var PL$249/*FrameConnection*/ = (function(){var PL$250/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(){
    
      ;
      this["session"] = new this["SessionBaseClass"](this);
      ;}),
    "SessionBaseClass": PL$248/*Session*/,
    "send": (function(PL$32/*parStr*/){
    
      ;
      ;}),
    "data": (function(PL$32/*parStr*/){
    
      ;
      ;}),
    "disconnect": (function(){
    
      ;
      this["frame"]["removeConnection"](this);
      if(this["_transportDisconnect"]){
        this["_transportDisconnect"]();
      };
      ;
      ;})
  }, [], PL$250/*inherited*/);
  return res; })();
  ;
  var PL$251/*Frame*/ = (function(){var PL$252/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(){
    
      ;
      this["connections"] = [
        
      ];
      ;}),
    "name": undefined,
    "ConnectionBaseClass": PL$249/*FrameConnection*/,
    "newConnection": (function(PL$247/*parConnection*/){
    
      ;
      PL$247/*parConnection*/["frame"] = this;
      PL$247/*parConnection*/["session"] = new PL$248/*Session*/(PL$247/*parConnection*/);
      this["connections"]["push"](PL$247/*parConnection*/);
      PL$129/*prepConnectionNew*/(PL$247/*parConnection*/, this);
      ;}),
    "removeConnection": (function(PL$247/*parConnection*/){
    
      ;
      var PL$24/*i*/ = 0;
      ;
      for(PL$24/*i*/ = 0;(PL$24/*i*/ < this["connections"]["length"]);++PL$24/*i*/){{
        if((this["connections"][PL$24/*i*/] === PL$247/*parConnection*/)){
          this["connections"]["splice"](PL$24/*i*/, 1);
          return;
        };
        ;}};
      ;
      ;}),
    "getConnection": (function(){
    
      ;
      if((this["connections"]["length"] === 1)){
        return this["connections"][0];
      };
      ;
      if((this["connections"]["length"] > 1)){
        throw PL$18/*errorMsg*/["toManyConnections"];
      };
      ;
      throw PL$18/*errorMsg*/["noConnectionAvailable"];
      ;})
  }, [], PL$252/*inherited*/);
  return res; })();
  ;
  PL$150/*promiseland*/["FrameBaseClass"] = PL$251/*Frame*/;
  var PL$253/*frames*/ = new PL$150/*promiseland*/["Map"]();
  ;
  PL$150/*promiseland*/["addFrame"] = (function(PL$254/*parFrame*/){
  
    ;
    var PL$107/*entry*/ = PL$253/*frames*/["get"](PL$254/*parFrame*/["name"]);
    ;
    if(! PL$107/*entry*/){
      PL$107/*entry*/ = [
        
      ];
      PL$253/*frames*/["get"](PL$254/*parFrame*/["name"]);
    };
    ;
    PL$107/*entry*/["push"](PL$254/*parFrame*/);
    ;});
  PL$255/*localFrameMap*/ = new PL$150/*promiseland*/["Map"]();
  PL$150/*promiseland*/["isFrameLocal"] = (function(PL$256/*parFrameName*/){
  
    ;
    if(PL$255/*localFrameMap*/["has"](PL$256/*parFrameName*/)){
      return true;
    };
    ;
    return false;
    ;});
  PL$150/*promiseland*/["addLocalFrameName"] = (function(PL$256/*parFrameName*/){
  
    ;
    PL$255/*localFrameMap*/["set"](PL$256/*parFrameName*/, true);
    ;});
  PL$150/*promiseland*/["removeLocalFrameName"] = (function(PL$256/*parFrameName*/){
  
    ;
    PL$255/*localFrameMap*/["delete"](PL$256/*parFrameName*/);
    ;});
  PL$150/*promiseland*/["ProfileBaseClass"] = PL$29/*Profile*/;
  PL$150/*promiseland*/["ConnectionBaseClass"] = PL$31/*Connection*/;
  PL$150/*promiseland*/["addProfile"] = (function(PL$257/*parProfile*/){
  
    ;
    if(! PL$257/*parProfile*/){
      return;
    };
    ;
    if(PL$20/*profiles*/[PL$257/*parProfile*/["name"]()]){
      throw {
        "code": 4,
        "msg": "profile exists"
      };
    };
    ;
    PL$20/*profiles*/[PL$257/*parProfile*/["name"]()] = PL$257/*parProfile*/;
    PL$257/*parProfile*/["on"]("connection", (function(PL$123/*connection*/){
    
      ;
      PL$122/*prepConnection*/(PL$123/*connection*/, PL$257/*parProfile*/);
      ;}));
    ;});
  PL$150/*promiseland*/["profileHas"] = (function(PL$245/*profileNameStr*/){
  
    ;
    return PL$150/*promiseland*/["isFrameLocal"](PL$245/*profileNameStr*/);
    ;});
  PL$150/*promiseland*/["registerRemote"] = (function(PL$245/*profileNameStr*/, PL$258/*hashStr*/, PL$259/*nameStr*/, PL$260/*fun*/, PL$151/*funType*/){
  
    ;
    var PL$19/*moduleData*/ = PL$147/*getModuleData*/(PL$258/*hashStr*/);
    ;
    var PL$107/*entry*/ = {
      "profile": PL$245/*profileNameStr*/,
      "fun": PL$260/*fun*/,
      "funType": PL$151/*funType*/
    };
    ;
    PL$19/*moduleData*/["functions"][PL$259/*nameStr*/] = PL$107/*entry*/;
    PL$2/*classSystem*/["definitionPromise"](PL$151/*funType*/)["then"]((function(PL$261/*definedFunType*/){
    
      ;
      PL$107/*entry*/["funType"] = PL$261/*definedFunType*/;
      ;}));
    ;});
  PL$150/*promiseland*/["remoteExec"] = (function(PL$258/*hashStr*/, PL$259/*nameStr*/, PL$138/*args*/){
  
    ;
    var PL$19/*moduleData*/ = PL$147/*getModuleData*/(PL$258/*hashStr*/);
    ;
    if((! PL$19/*moduleData*/ || ! PL$19/*moduleData*/["functions"][PL$259/*nameStr*/])){
      throw PL$18/*errorMsg*/["missingRemoteFun"];
    };
    ;
    var PL$107/*entry*/ = PL$19/*moduleData*/["functions"][PL$259/*nameStr*/];
    ;
    var PL$124/*profile*/ = PL$244/*findProfile*/(PL$107/*entry*/["profile"]);
    ;
    if(! PL$124/*profile*/){
      throw PL$18/*errorMsg*/["frameNotFound"];
    };
    ;
    var PL$123/*connection*/ = PL$124/*profile*/["find"]();
    ;
    if(! PL$123/*connection*/){
      throw {
        "code": 3,
        "msg": "no connection available"
      };
    };
    ;
    var PL$152/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$107/*entry*/["funType"]);
    ;
    try
    {
      var PL$262/*resultPromise*/ = PL$152/*resultTypes*/["newPromise"]();
      ;
      (function(){
      var PL$263 = new __Promise();
      var PL$265/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$263.reject(e);
          };
        };
      };
      var PL$266/*catch rejected*/ = function(e){
        PL$263.reject(e);
      };
      var PL$271/*tempRes*/;
      var PL$272/*realRes*/;
      PL$265/*promiseland exception catcher*/(function(){
      
        ;
        var PL$267 = new __Promise();
        var PL$268 = new __Promise();
        var PL$269/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$268.resolve(e); }; }; };
        var PL$270 = function(e){ PL$268.resolve(e); };
        PL$269/*try catch*/(function(){
          PL$271/*tempRes*/ = PL$232/*createRemoteExecRequest*/({
            "connection": PL$123/*connection*/,
            "hashStr": PL$258/*hashStr*/,
            "nameStr": PL$259/*nameStr*/,
            "args": PL$138/*args*/,
            "funType": PL$107/*entry*/["funType"]
          });
          PL$271/*tempRes*/.then(PL$269/*try catch*/(function(PL$273){PL$272/*realRes*/ = PL$273;
          PL$152/*resultTypes*/["resolvePromise"](PL$262/*resultPromise*/, PL$272/*realRes*/);
          PL$267.resolve();}), PL$270);
        ;})();
        PL$268.then(PL$265/*promiseland exception catcher*/(function(PL$26/*e*/){
          PL$152/*resultTypes*/["rejectPromise"](PL$262/*resultPromise*/, PL$26/*e*/);
          PL$267.resolve();;}));
        PL$267.then(PL$265/*promiseland exception catcher*/(function(){;
        ;
        PL$263.resolve(); return;}), PL$266/*catch rejected*/)
      })();return PL$263;
      })();}catch(PL$26/*e*/){
      PL$152/*resultTypes*/["rejectPromise"](PL$262/*resultPromise*/, PL$26/*e*/);};
    ;
    return PL$262/*resultPromise*/;
    ;});
  PL$11/*extra*/["moduleSystemPs"]["resolve"]({
    "getModuleData": PL$147/*getModuleData*/
  });
  PL$11/*extra*/["framesPs"]["resolve"]({
    "getInstanceFromTransportData": PL$158/*getInstanceFromTransportData*/,
    "getInstanceTransportData": PL$166/*getInstanceTransportData*/,
    "handlers": PL$37/*handlers*/
  });
  return;
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();