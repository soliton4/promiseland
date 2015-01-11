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
if (promiseland._hasModule({ hashStr: "630efb7fd3a347ec044a809f6943641f" })){ return promiseland._getModule("630efb7fd3a347ec044a809f6943641f"); };
var PL$11/*extra*/;try{PL$11/*extra*/ = extra;}catch(e){};
var PL$40/*Promise*/;try{PL$40/*Promise*/ = Promise;}catch(e){};
var PL$52/*console*/;try{PL$52/*console*/ = console;}catch(e){};
var PL$102/*JSON*/;try{PL$102/*JSON*/ = JSON;}catch(e){};
var PL$147/*promiseland*/;try{PL$147/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$41/*ContentBase*/;
var PL$44/*Request*/;
var PL$46/*Answer*/;
var PL$48/*Message*/;
var PL$65/*Package*/;
var PL$120/*Transport*/;
var PL$163/*getInstanceTransportData*/;
var PL$155/*getInstanceFromTransportData*/;
var PL$169/*getTypeTransportData*/;
var PL$201/*getTypeFromTransportData*/;
var PL$144/*getModuleData*/;

  ;
  ;
  var PL$2/*classSystem*/;
  var PL$3/*internalObjects*/;
  var PL$4/*getClassBySyncId*/;
  var PL$5/*DynInstance*/;
  var PL$6/*getEffectiveFunctionResultType*/;
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
  var PL$18/*errorMsg*/ = PL$11/*extra*/["errorMsg"];
  var PL$19/*moduleData*/ = {
    
  };
  var PL$20/*profiles*/ = {
    
  };
  var PL$21/*_emitFun*/ = (function(PL$22/*parEventStr*/, PL$23/*parData*/){
  
    ;
    if(this["_on"][PL$22/*parEventStr*/]){
      var PL$24/*i*/ = 0;
      var PL$25/*l*/ = this["_on"][PL$22/*parEventStr*/]["length"];
      for(PL$24/*i*/;(PL$24/*i*/ < PL$25/*l*/);++PL$24/*i*/){{
        try
        {
          this["_on"][PL$22/*parEventStr*/][PL$24/*i*/](PL$23/*parData*/);}catch(PL$26/*e*/){};
        ;}};
      ;
    };
    ;
    ;});
  var PL$27/*_onFun*/ = (function(PL$22/*parEventStr*/, PL$28/*parFun*/){
  
    ;
    if(this["_on"][PL$22/*parEventStr*/]){
      this["_on"][PL$22/*parEventStr*/]["push"](PL$28/*parFun*/);
    };
    ;
    ;});
  var PL$29/*Profile*/ = (function(){
  
    ;
    this["_on"] = {
      "connection": [
        
      ]
    };
    ;});
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
  PL$31/*Connection*/["prototype"] = {
    "send": (function(PL$32/*parStr*/){
    
      ;
      ;}),
    "emit": PL$21/*_emitFun*/,
    "on": PL$27/*_onFun*/
  };
  var PL$33/*maxId*/ = 10000000;
  var PL$34/*MAKRO_REQUEST*/ = 1;
  var PL$35/*MAKRO_MESSAGE*/ = 2;
  var PL$36/*MAKRO_ANSWER*/ = 3;
  var PL$37/*handlers*/ = {
    
  };
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
          for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$23/*parData*/["length"]);++PL$24/*i*/){{
            var PL$50/*d*/ = PL$23/*parData*/[PL$24/*i*/];
            switch (PL$50/*d*/[0]){
              case PL$34/*MAKRO_REQUEST*/:
                
                var PL$51/*r*/ = this["newRequest"](PL$50/*d*/);
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
        while((PL$24/*i*/ < this["content"]["length"])){
        {
          var PL$53/*c*/ = this["content"][PL$24/*i*/];
          if(PL$53/*c*/["isAnswer"]){
            this["parent"]["handleAnswer"](PL$53/*c*/, this);
          }else{
          var PL$54/*type*/ = PL$53/*c*/["getType"]();
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
      this["requests"][PL$51/*r*/["id"]] = PL$51/*r*/;
      this["dataAr"]["push"](PL$51/*r*/["dataAr"]);
      this["content"]["push"](PL$51/*r*/);
      return PL$51/*r*/;
      ;}),
    "newMessage": (function(PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = this["parent"]["_newMessage"](this, PL$23/*parData*/);
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
  PL$120/*Transport*/ = (function(){var PL$74/*inherited*/ = {};
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
      this["_expectPs"](PL$75/*id*/)["resolve"](PL$23/*parData*/);
      ;}),
    "_expectPs": (function(PL$30/*parId*/){
    
      ;
      var PL$76/*ps*/ = this["expect"][PL$30/*parId*/];
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
      var PL$51/*r*/ = this["requests"][PL$75/*id*/];
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
      if(! PL$23/*parData*/){
        var PL$75/*id*/ = this["nextFreeRequest"];
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
      return PL$51/*r*/;
      ;}),
    "_newAnswer": (function(PL$39/*parParent*/, PL$23/*parData*/){
    
      ;
      var PL$51/*r*/ = new PL$46/*Answer*/(PL$39/*parParent*/, PL$23/*parData*/);
      return PL$51/*r*/;
      ;}),
    "newRequest": (function(){
    
      ;
      var PL$95/*p*/ = this["newPackage"]();
      var PL$51/*r*/ = PL$95/*p*/["newRequest"]();
      PL$66/*waitForTheSend*/(PL$51/*r*/, PL$95/*p*/);
      return PL$51/*r*/;
      ;}),
    "newMessage": (function(){
    
      ;
      var PL$95/*p*/ = this["newPackage"]();
      var PL$51/*r*/ = PL$95/*p*/["newMessage"]();
      PL$66/*waitForTheSend*/(PL$51/*r*/, PL$95/*p*/);
      return PL$51/*r*/;
      ;}),
    "newAnswer": (function(){
    
      ;
      var PL$95/*p*/ = this["newPackage"]();
      var PL$51/*r*/ = PL$95/*p*/["newAnswer"]();
      PL$66/*waitForTheSend*/(PL$51/*r*/, PL$95/*p*/);
      return PL$51/*r*/;
      ;}),
    "newPackage": (function(){
    
      ;
      var PL$95/*p*/ = new PL$65/*Package*/(this);
      var PL$96/*self*/ = this;
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
      this["queue"](PL$89/*data*/);
      ;}),
    "sendString": (function(PL$32/*parStr*/){
    
      ;
      ;}),
    "_getModuleData": (function(PL$103/*parHash*/){
    
      ;
      var PL$19/*moduleData*/ = this["moduleData"][PL$103/*parHash*/];
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
      var PL$19/*moduleData*/ = this["_getModuleData"](PL$106/*syncId*/["hash"]);
      var PL$107/*entry*/ = PL$19/*moduleData*/[PL$106/*syncId*/["name"]];
      var PL$108/*typeIds*/;
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
      return this["instances"][PL$111/*internalId*/];
      ;}),
    "addInstance": (function(PL$112/*parDynInstance*/, PL$113/*parRemoteId*/, PL$114/*parTrack*/){
    
      ;
      var PL$111/*internalId*/ = PL$112/*parDynInstance*/["getInternalId"]();
      var PL$115/*remoteId*/ = this["instances"][PL$111/*internalId*/];
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
      if(((PL$115/*remoteId*/ !== undefined) && ! PL$117/*dontSend*/)){
        var PL$118/*m*/ = this["newMessage"]();
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
        delete this["instanceTracks"][PL$116/*parInternalId*/];
        PL$119/*track*/();
      };
      ;
      ;})
  }, [], PL$74/*inherited*/);
  return res; })();PL$120/*Transport*/;
  var PL$121/*prepConnection*/ = (function(PL$122/*connection*/, PL$123/*profile*/){
  
    ;
    var PL$124/*transport*/ = new PL$120/*Transport*/();
    PL$124/*transport*/["sendString"] = (function(PL$125/*s*/){
    
      ;
      PL$122/*connection*/["send"](PL$125/*s*/);
      ;});
    PL$122/*connection*/["on"]("data", (function(PL$126/*dataStr*/){
    
      ;
      PL$124/*transport*/["stringData"](PL$126/*dataStr*/);
      ;}));
    PL$122/*connection*/["on"]("disconnect", (function(PL$126/*dataStr*/){
    
      ;
      ;}));
    PL$122/*connection*/["createRequest"] = (function(PL$89/*data*/){
    
      ;
      return PL$124/*transport*/["newRequest"]();
      ;});
    PL$122/*connection*/["createMsg"] = (function(PL$89/*data*/){
    
      ;
      var PL$127/*msg*/ = PL$124/*transport*/["newMessage"]();
      PL$127/*msg*/["setData"](PL$89/*data*/);
      PL$127/*msg*/["send"]();
      ;});
    ;});
  PL$37/*handlers*/["remove"] = (function(PL$128/*parContent*/, PL$78/*parPackage*/){
  
    ;
    try
    {
      var PL$89/*data*/ = PL$128/*parContent*/["getData"]();
      var PL$129/*t*/ = PL$128/*parContent*/["getTransport"]();
      PL$129/*t*/["removeInstance"](PL$89/*data*/["remoteId"], true);}catch(PL$26/*e*/){
      PL$52/*console*/["log"]("sync error");
      PL$52/*console*/["log"](PL$26/*e*/);};
    ;
    ;});
  PL$37/*handlers*/["remoteexec"] = (function(PL$128/*parContent*/, PL$78/*parPackage*/){
  var PL$130 = new __Promise();
  var PL$132/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$130.reject(e);
      };
    };
  };
  var PL$133/*catch rejected*/ = function(e){
    PL$130.reject(e);
  };
  var PL$119/*track*/;
  var PL$134/*err*/;
  var PL$135/*args*/;
  var PL$136/*realArgs*/;
  var PL$137/*cleanUpArgs*/;
  var PL$138/*clearExtraTracks*/;
  var PL$24/*i*/;
  var PL$139/*answer*/;
  var PL$89/*data*/;
  var PL$19/*moduleData*/;
  var PL$145/*funEntry*/;
  var PL$148/*funType*/;
  var PL$149/*resultTypes*/;
  var PL$150/*isVar*/;
  var PL$154/*instance*/;
  var PL$158/*funResult*/;
  PL$132/*promiseland exception catcher*/(function(){
  
    ;
    PL$119/*track*/ = (function(){
    
      ;
      ;});
    PL$134/*err*/;
    PL$135/*args*/ = [
      
    ];
    PL$136/*realArgs*/ = [
      
    ];
    PL$137/*cleanUpArgs*/ = (function(){
    
      ;
      var PL$24/*i*/;
      for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$135/*args*/["length"]);++PL$24/*i*/){{
        try
        {
          PL$135/*args*/[PL$24/*i*/]["track"]();}catch(PL$26/*e*/){};
        ;}};
      ;
      ;});
    PL$138/*clearExtraTracks*/ = (function(){
    
      ;
      var PL$24/*i*/;
      for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$135/*args*/["length"]);++PL$24/*i*/){{
        try
        {
          PL$135/*args*/[PL$24/*i*/]["clearExtraTracks"]();}catch(PL$26/*e*/){};
        ;}};
      ;
      ;});
    PL$24/*i*/;
    PL$139/*answer*/ = PL$128/*parContent*/["createAnswer"]();
    var PL$140 = new __Promise();
    var PL$141 = new __Promise();
    var PL$142/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$141.resolve(e); }; }; };
    var PL$143 = function(e){ PL$141.resolve(e); };
    PL$142/*try catch*/(function(){
      PL$89/*data*/ = PL$128/*parContent*/["getData"]();
      PL$19/*moduleData*/ = PL$144/*getModuleData*/(PL$89/*data*/["hashStr"]);
      PL$145/*funEntry*/ = PL$19/*moduleData*/["functions"][PL$89/*data*/["nameStr"]];
      
      var PL$146 = new __Promise();if(PL$147/*promiseland*/["profileHas"](PL$145/*funEntry*/["profile"])){
        PL$148/*funType*/ = PL$145/*funEntry*/["funType"];
        PL$149/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$148/*funType*/);
        PL$150/*isVar*/ = true;
        if(! PL$2/*classSystem*/["isVar"](PL$149/*resultTypes*/["promiseResolveType"])){
          PL$150/*isVar*/ = false;
        };
        ;
        PL$24/*i*/ = 0;var PL$152 = new __Promise();
        var PL$151 = function(){var PL$153 = new __Promise();
        if((PL$24/*i*/ < PL$89/*data*/["args"]["length"])){
        PL$155/*getInstanceFromTransportData*/(PL$89/*data*/["args"][PL$24/*i*/], PL$128/*parContent*/).then(PL$142/*try catch*/(function(PL$156){PL$154/*instance*/ = PL$156;
        PL$135/*args*/["push"](PL$154/*instance*/);
        PL$153.resolve(true); return PL$153; /* continue */
        ;}), PL$143);
        ;}else{
        PL$153.resolve(false); return PL$153; /* break */
        
        };
        PL$153;return PL$153;
        };
        var PL$157 = function(){PL$151().then(function(contLoop){
        if (contLoop){++PL$24/*i*/;PL$157();}else{PL$152.resolve();};
        });
        };
        PL$157();
        PL$152.then(function(){;
        ;
        for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$135/*args*/["length"]);++PL$24/*i*/){{
          PL$136/*realArgs*/["push"](PL$135/*args*/[PL$24/*i*/]["getInstanceAsType"](PL$2/*classSystem*/["getFunctionArgumentType"](PL$148/*funType*/, PL$24/*i*/)));}};
        ;
        PL$137/*cleanUpArgs*/();
        PL$158/*funResult*/ = PL$145/*funEntry*/["fun"]["apply"](undefined, PL$136/*realArgs*/);
        if(PL$149/*resultTypes*/["isTemporary"]){
          PL$119/*track*/ = PL$158/*funResult*/[1];
          PL$158/*funResult*/ = PL$158/*funResult*/[0];
        };
        ;
        var PL$159 = new __Promise();
        var PL$160 = new __Promise();
        var PL$161/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$160.resolve(e); }; }; };
        var PL$162 = function(e){ PL$160.resolve(e); };
        PL$161/*try catch*/(function(){
          PL$158/*funResult*/.then(PL$161/*try catch*/(function(PL$164){PL$139/*answer*/["setData"]({
            "data": PL$163/*getInstanceTransportData*/(PL$149/*resultTypes*/["promiseResolveType"], PL$164, PL$139/*answer*/)
          });
          PL$159.resolve();}), PL$162);
        ;})();
        PL$160.then(PL$142/*try catch*/(function(PL$26/*e*/){
          PL$52/*console*/["log"]("answer error");
          PL$52/*console*/["log"](PL$26/*e*/);
          PL$139/*answer*/["setData"]({
            "err": PL$26/*e*/
          });
          PL$159.resolve();;}));
        PL$159.then(PL$142/*try catch*/(function(){;
        ;
        PL$52/*console*/["log"]("send answer:");
        PL$52/*console*/["log"](PL$139/*answer*/["getData"]());
        PL$139/*answer*/["send"]();
        PL$119/*track*/();
        PL$130.resolve(); return;
        PL$146.resolve();;}), PL$143)});
      }else{PL$146.resolve();
      };PL$146.then(PL$142/*try catch*/(function(PL$165){PL$165;;
      ;
      PL$140.resolve();}), PL$143);
    ;})();
    PL$141.then(PL$132/*promiseland exception catcher*/(function(PL$26/*e*/){
      PL$134/*err*/ = PL$26/*e*/;
      PL$52/*console*/["log"]("remoteexec error");
      PL$52/*console*/["log"](PL$26/*e*/);
      PL$137/*cleanUpArgs*/();
      PL$138/*clearExtraTracks*/();
      PL$140.resolve();;}));
    PL$140.then(PL$132/*promiseland exception catcher*/(function(){;
    ;
    PL$139/*answer*/["setData"]({
      "err": (PL$134/*err*/ || PL$18/*errorMsg*/["canNotExecute"])
    });
    PL$139/*answer*/["send"]();
    PL$52/*console*/["log"]("error answer send");
    PL$119/*track*/();
    PL$137/*cleanUpArgs*/();
    PL$52/*console*/["log"]("remote exec fail end");
    PL$130.resolve(); return;
    PL$130.resolve(); return;}), PL$133/*catch rejected*/)
  })();return PL$130;
  });
  PL$163/*getInstanceTransportData*/ = (function(PL$104/*parType*/, PL$23/*parData*/, PL$128/*parContent*/){
  
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
    var PL$154/*instance*/ = new PL$5/*DynInstance*/(PL$104/*parType*/, PL$23/*parData*/);
    try
    {
      var PL$166/*getInstanceFun*/ = (function(PL$104/*parType*/, PL$167/*_parData*/){
      
        ;
        return PL$163/*getInstanceTransportData*/(PL$104/*parType*/, PL$167/*_parData*/, PL$128/*parContent*/);
        ;});
      var PL$168/*getTypeFun*/ = (function(PL$104/*parType*/){
      
        ;
        return PL$169/*getTypeTransportData*/(PL$104/*parType*/, PL$128/*parContent*/);
        ;});
      var PL$129/*t*/ = PL$128/*parContent*/["getTransport"]();
      var PL$111/*internalId*/ = PL$154/*instance*/["getInternalId"]();
      var PL$115/*remoteId*/ = PL$129/*t*/["getInstanceRemoteId"](PL$154/*instance*/["instance"]);
      var PL$170/*request*/ = PL$128/*parContent*/["newRequest"]();
      if((PL$115/*remoteId*/ !== undefined)){
        PL$170/*request*/["setData"]({
          "type": "instance",
          "remoteId": PL$115/*remoteId*/
        });
      }else{
      PL$170/*request*/["setData"]({
        "type": "addInstance",
        "id": PL$111/*internalId*/,
        "data": PL$2/*classSystem*/["getInstanceSyncData"](PL$154/*instance*/, PL$166/*getInstanceFun*/, PL$168/*getTypeFun*/)
      });
      };
      ;
      PL$170/*request*/["send"]();
      (function(){
      var PL$171 = new __Promise();
      var PL$173/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$171.reject(e);
          };
        };
      };
      var PL$174/*catch rejected*/ = function(e){
        PL$171.reject(e);
      };
      var PL$139/*answer*/;
      var PL$180/*answerData*/;
      PL$173/*promiseland exception catcher*/(function(){
      
        ;
        var PL$175 = new __Promise();
        var PL$176 = new __Promise();
        var PL$177/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$176.resolve(e); }; }; };
        var PL$178 = function(e){ PL$176.resolve(e); };
        PL$177/*try catch*/(function(){
          PL$170/*request*/["answerPs"].then(PL$177/*try catch*/(function(PL$179){PL$139/*answer*/ = PL$179;
          PL$180/*answerData*/ = PL$139/*answer*/["getData"]();
          if((PL$180/*answerData*/["id"] !== undefined)){
            PL$129/*t*/["addInstance"](PL$154/*instance*/, PL$180/*answerData*/["id"], (PL$154/*instance*/["isServe"]() ? PL$154/*instance*/["getTrack"]() : undefined));
          };
          ;
          PL$175.resolve();}), PL$178);
        ;})();
        PL$176.then(PL$173/*promiseland exception catcher*/(function(PL$26/*e*/){
          PL$175.resolve();;}));
        PL$175.then(PL$173/*promiseland exception catcher*/(function(){;
        ;
        PL$154/*instance*/["track"]();
        PL$171.resolve(); return;}), PL$174/*catch rejected*/)
      })();return PL$171;
      })();
      var PL$94/*ret*/ = PL$170/*request*/["getId"]();}catch(PL$26/*e*/){
      PL$52/*console*/["log"]("getInstanceTransportData error");
      PL$52/*console*/["log"](PL$26/*e*/);
      if(PL$154/*instance*/){
        PL$154/*instance*/["track"]();
      };
      ;
      throw {
        "position": "getInstanceTransportData",
        "error": PL$26/*e*/
      };};
    ;
    return PL$94/*ret*/;
    ;});
  PL$155/*getInstanceFromTransportData*/ = (function(PL$23/*parData*/, PL$128/*parContent*/){
  var PL$181 = new __Promise();
  var PL$183/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$181.reject(e);
      };
    };
  };
  var PL$184/*catch rejected*/ = function(e){
    PL$181.reject(e);
  };
  var PL$185/*remoteType*/;
  var PL$186/*remoteVar*/;
  var PL$187/*remoteInstance*/;
  var PL$188/*req*/;
  PL$183/*promiseland exception catcher*/(function(){
  
    ;
    if(((PL$23/*parData*/ === undefined) || (PL$23/*parData*/ === null))){
      PL$181.resolve(new PL$5/*DynInstance*/(PL$2/*classSystem*/["getBuiltinType"]("var"), undefined)); return;
      ;
    };
    ;
    PL$185/*remoteType*/;
    PL$186/*remoteVar*/ = false;
    PL$187/*remoteInstance*/;
    if((PL$23/*parData*/["length"] === 1)){
      PL$181.resolve(new PL$5/*DynInstance*/(PL$2/*classSystem*/["getBuiltinType"]("var"), PL$23/*parData*/[0])); return;
    };
    ;
    PL$188/*req*/ = PL$128/*parContent*/["getRequest"](PL$23/*parData*/);
    PL$188/*req*/["localPs"].then(PL$183/*promiseland exception catcher*/(function(PL$189){PL$181.resolve(PL$189); return;
    PL$181.resolve(); return;}), PL$184/*catch rejected*/);
    ;
  })();return PL$181;
  });
  var PL$190/*getInstanceFromSyncData*/ = (function(PL$23/*parData*/, PL$128/*parContent*/){
  var PL$191 = new __Promise();
  var PL$193/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$191.reject(e);
      };
    };
  };
  var PL$194/*catch rejected*/ = function(e){
    PL$191.reject(e);
  };
  var PL$195/*tempAr*/;
  var PL$196/*clearTempAr*/;
  var PL$129/*t*/;
  var PL$24/*i*/;
  var PL$94/*ret*/;
  PL$193/*promiseland exception catcher*/(function(){
  
    ;
    PL$195/*tempAr*/ = [
      
    ];
    PL$196/*clearTempAr*/ = (function(){
    
      ;
      var PL$24/*i*/ = 1;
      for(PL$24/*i*/ = 1;(PL$24/*i*/ < PL$195/*tempAr*/["length"]);++PL$24/*i*/){{
        try
        {
          PL$195/*tempAr*/[PL$24/*i*/]["track"]();}catch(PL$26/*e*/){};
        ;}};
      ;
      ;});
    var PL$197 = new __Promise();
    var PL$198 = new __Promise();
    var PL$199/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$198.resolve(e); }; }; };
    var PL$200 = function(e){ PL$198.resolve(e); };
    PL$199/*try catch*/(function(){
      PL$129/*t*/ = PL$128/*parContent*/["getTransport"]();
      PL$201/*getTypeFromTransportData*/(PL$23/*parData*/[0], PL$128/*parContent*/).then(PL$199/*try catch*/(function(PL$202){PL$195/*tempAr*/["push"](PL$202);
      PL$24/*i*/ = 1;
      PL$24/*i*/ = 1;var PL$204 = new __Promise();
      var PL$203 = function(){var PL$205 = new __Promise();
      if((PL$24/*i*/ < PL$23/*parData*/["length"])){
      PL$155/*getInstanceFromTransportData*/(PL$23/*parData*/[PL$24/*i*/], PL$128/*parContent*/).then(PL$199/*try catch*/(function(PL$206){PL$195/*tempAr*/["push"](PL$206);
      PL$205.resolve(true); return PL$205; /* continue */
      ;}), PL$200);
      ;}else{
      PL$205.resolve(false); return PL$205; /* break */
      
      };
      PL$205;return PL$205;
      };
      var PL$207 = function(){PL$203().then(function(contLoop){
      if (contLoop){++PL$24/*i*/;PL$207();}else{PL$204.resolve();};
      });
      };
      PL$207();
      PL$204.then(function(){;
      ;
      PL$94/*ret*/ = PL$2/*classSystem*/["getInstanceFromSyncData"](PL$195/*tempAr*/);
      PL$197.resolve();});}), PL$200);
    ;})();
    PL$198.then(PL$193/*promiseland exception catcher*/(function(PL$26/*e*/){
      PL$196/*clearTempAr*/();
      throw PL$26/*e*/;
      PL$197.resolve();;}));
    PL$197.then(PL$193/*promiseland exception catcher*/(function(){;
    ;
    PL$196/*clearTempAr*/();
    PL$191.resolve(PL$94/*ret*/); return;
    PL$191.resolve(); return;}), PL$194/*catch rejected*/)
  })();return PL$191;
  });
  PL$37/*handlers*/["addInstance"] = (function(PL$128/*parContent*/, PL$78/*parPackage*/){
  var PL$208 = new __Promise();
  var PL$210/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$208.reject(e);
      };
    };
  };
  var PL$211/*catch rejected*/ = function(e){
    PL$208.reject(e);
  };
  var PL$139/*answer*/;
  var PL$154/*instance*/;
  var PL$129/*t*/;
  var PL$89/*data*/;
  var PL$111/*internalId*/;
  PL$210/*promiseland exception catcher*/(function(){
  
    ;
    PL$139/*answer*/ = PL$128/*parContent*/["createAnswer"]();
    PL$154/*instance*/;
    var PL$212 = new __Promise();
    var PL$213 = new __Promise();
    var PL$214/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$213.resolve(e); }; }; };
    var PL$215 = function(e){ PL$213.resolve(e); };
    PL$214/*try catch*/(function(){
      PL$129/*t*/ = PL$78/*parPackage*/["getTransport"]();
      PL$89/*data*/ = PL$128/*parContent*/["getData"]();
      PL$190/*getInstanceFromSyncData*/(PL$89/*data*/["data"], PL$128/*parContent*/).then(PL$214/*try catch*/(function(PL$216){PL$154/*instance*/ = PL$216;
      PL$111/*internalId*/ = PL$154/*instance*/["getInternalId"]();
      PL$129/*t*/["addInstance"](PL$154/*instance*/, PL$89/*data*/["id"]);
      PL$139/*answer*/["setData"]({
        "id": PL$111/*internalId*/
      });
      PL$139/*answer*/["send"]();
      PL$128/*parContent*/["localPs"]["resolve"](PL$154/*instance*/);
      PL$208.resolve(); return;
      PL$212.resolve();}), PL$215);
    ;})();
    PL$213.then(PL$210/*promiseland exception catcher*/(function(PL$26/*e*/){
      if(PL$154/*instance*/){
        PL$154/*instance*/["track"]();
      };
      ;
      PL$52/*console*/["log"]("answer error 3");
      PL$52/*console*/["log"](PL$26/*e*/);
      PL$139/*answer*/["setData"]({
        "err": PL$26/*e*/
      });
      PL$139/*answer*/["send"]();
      PL$128/*parContent*/["localPs"]["reject"](PL$26/*e*/);
      throw PL$26/*e*/;
      PL$212.resolve();;}));
    PL$212.then(PL$210/*promiseland exception catcher*/(function(){;
    ;
    PL$208.resolve(); return;}), PL$211/*catch rejected*/)
  })();return PL$208;
  });
  PL$37/*handlers*/["instance"] = (function(PL$128/*parContent*/, PL$78/*parPackage*/){
  
    ;
    var PL$139/*answer*/ = PL$128/*parContent*/["createAnswer"]();
    var PL$154/*instance*/;
    try
    {
      var PL$129/*t*/ = PL$78/*parPackage*/["getTransport"]();
      var PL$89/*data*/ = PL$128/*parContent*/["getData"]();
      var PL$111/*internalId*/ = PL$89/*data*/["remoteId"];
      var PL$217/*realInstance*/ = PL$3/*internalObjects*/[PL$111/*internalId*/];
      if(PL$217/*realInstance*/){
        PL$154/*instance*/ = new PL$5/*DynInstance*/(undefined, PL$217/*realInstance*/);
        PL$139/*answer*/["setData"]({
          
        });
        PL$139/*answer*/["send"]();
        PL$128/*parContent*/["localPs"]["resolve"](PL$154/*instance*/);
      }else{
      throw PL$18/*errorMsg*/["missingImplementation"];
      };
      ;}catch(PL$26/*e*/){
      if(PL$154/*instance*/){
        PL$154/*instance*/["track"]();
      };
      ;
      PL$52/*console*/["log"]("answer error 4");
      PL$52/*console*/["log"](PL$26/*e*/);
      PL$139/*answer*/["setData"]({
        "err": PL$26/*e*/
      });
      PL$139/*answer*/["send"]();
      PL$128/*parContent*/["localPs"]["reject"](PL$26/*e*/);
      throw PL$26/*e*/;};
    ;
    ;});
  PL$169/*getTypeTransportData*/ = (function(PL$104/*parType*/, PL$128/*parContent*/){
  
    ;
    if(! PL$2/*classSystem*/["isSyncedClass"](PL$104/*parType*/)){
      throw PL$18/*errorMsg*/["noSyncableData"];
    };
    ;
    var PL$129/*t*/ = PL$128/*parContent*/["getTransport"]();
    var PL$108/*typeIds*/ = PL$129/*t*/["addType"](PL$104/*parType*/);
    if((PL$108/*typeIds*/ && (PL$108/*typeIds*/["remoteId"] !== undefined))){
      return PL$108/*typeIds*/["remoteId"];
    };
    ;
    var PL$170/*request*/ = PL$128/*parContent*/["newRequest"]();
    PL$170/*request*/["setData"]({
      "type": "addType",
      "syncId": PL$2/*classSystem*/["getSyncId"](PL$104/*parType*/),
      "typeId": PL$108/*typeIds*/["id"]
    });
    PL$170/*request*/["send"]();
    (function(){
    var PL$218 = new __Promise();
    var PL$220/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$218.reject(e);
        };
      };
    };
    var PL$221/*catch rejected*/ = function(e){
      PL$218.reject(e);
    };
    var PL$139/*answer*/;
    var PL$89/*data*/;
    PL$220/*promiseland exception catcher*/(function(){
    
      ;
      PL$170/*request*/["answerPs"].then(PL$220/*promiseland exception catcher*/(function(PL$222){PL$139/*answer*/ = PL$222;
      PL$89/*data*/ = PL$139/*answer*/["getData"]();
      if(! PL$89/*data*/["err"]){
        PL$108/*typeIds*/["remoteId"] = PL$89/*data*/["id"];
      };
      ;
      PL$218.resolve(); return;}), PL$221/*catch rejected*/);
      ;
    })();return PL$218;
    })();
    return [
      PL$170/*request*/["getId"]()
    ];
    ;});
  PL$201/*getTypeFromTransportData*/ = (function(PL$23/*parData*/, PL$128/*parContent*/){
  var PL$223 = new __Promise();
  var PL$225/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$223.reject(e);
      };
    };
  };
  var PL$226/*catch rejected*/ = function(e){
    PL$223.reject(e);
  };
  var PL$129/*t*/;
  var PL$54/*type*/;
  var PL$188/*req*/;
  PL$225/*promiseland exception catcher*/(function(){
  
    ;
    PL$129/*t*/ = PL$128/*parContent*/["getTransport"]();
    PL$54/*type*/;
    if((typeof PL$23/*parData*/ === "number")){
      PL$54/*type*/ = PL$129/*t*/["getTypeById"](PL$23/*parData*/);
      PL$223.resolve(PL$54/*type*/); return;
    };
    ;
    PL$188/*req*/ = PL$128/*parContent*/["getRequest"](PL$23/*parData*/[0]);
    PL$188/*req*/["localPs"].then(PL$225/*promiseland exception catcher*/(function(PL$227){PL$223.resolve(PL$227); return;
    PL$223.resolve(); return;}), PL$226/*catch rejected*/);
    ;
  })();return PL$223;
  });
  var PL$228/*getRemoteType*/ = (function(PL$23/*parData*/, PL$128/*parContent*/){
  
    ;
    if((typeof PL$23/*parData*/ == "number")){
      var PL$129/*t*/ = PL$128/*parContent*/["getTransport"]();
      return PL$129/*t*/["getRemoteType"](PL$23/*parData*/);
    };
    ;
    throw PL$18/*errorMsg*/["invalidRemoteType"];
    ;});
  PL$37/*handlers*/["addType"] = (function(PL$128/*parContent*/, PL$78/*parPackage*/){
  
    ;
    var PL$139/*answer*/ = PL$128/*parContent*/["createAnswer"]();
    var PL$89/*data*/ = PL$128/*parContent*/["getData"]();
    var PL$54/*type*/ = PL$4/*getClassBySyncId*/(PL$89/*data*/["syncId"]);
    if(! PL$54/*type*/){
      PL$128/*parContent*/["localPs"]["reject"](PL$18/*errorMsg*/["remoteTypeNotAvailable"]);
      PL$139/*answer*/["setData"]({
        "err": PL$18/*errorMsg*/["remoteTypeNotAvailable"]
      });
      PL$139/*answer*/["send"]();
      return;
    };
    ;
    var PL$109/*typeIdInt*/ = PL$89/*data*/["typeId"];
    var PL$129/*t*/ = PL$78/*parPackage*/["getTransport"]();
    var PL$108/*typeIds*/ = PL$129/*t*/["addType"](PL$54/*type*/, PL$109/*typeIdInt*/);
    PL$139/*answer*/["setData"]({
      "id": PL$108/*typeIds*/["id"]
    });
    PL$139/*answer*/["send"]();
    PL$128/*parContent*/["localPs"]["resolve"](PL$54/*type*/);
    ;});
  var PL$229/*createRemoteExecRequest*/ = (function(PL$230/*par*/){
  var PL$231 = new __Promise();
  var PL$233/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$231.reject(e);
      };
    };
  };
  var PL$234/*catch rejected*/ = function(e){
    PL$231.reject(e);
  };
  var PL$122/*connection*/;
  var PL$148/*funType*/;
  var PL$149/*resultTypes*/;
  var PL$170/*request*/;
  var PL$135/*args*/;
  var PL$24/*i*/;
  var PL$139/*answer*/;
  var PL$89/*data*/;
  var PL$154/*instance*/;
  var PL$94/*ret*/;
  PL$233/*promiseland exception catcher*/(function(){
  
    ;
    var PL$235 = new __Promise();
    var PL$236 = new __Promise();
    var PL$237/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$236.resolve(e); }; }; };
    var PL$238 = function(e){ PL$236.resolve(e); };
    PL$237/*try catch*/(function(){
      PL$122/*connection*/ = PL$230/*par*/["connection"];
      PL$148/*funType*/ = PL$230/*par*/["funType"];
      PL$149/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$148/*funType*/);
      PL$170/*request*/ = PL$122/*connection*/["createRequest"]();
      PL$135/*args*/ = [
        
      ];
      if((PL$230/*par*/["args"] && PL$230/*par*/["args"]["length"])){
        PL$24/*i*/ = 0;
        for(PL$24/*i*/ = 0;(PL$24/*i*/ < PL$230/*par*/["args"]["length"]);++PL$24/*i*/){{
          PL$135/*args*/["push"](PL$163/*getInstanceTransportData*/(PL$2/*classSystem*/["getFunctionArgumentType"](PL$148/*funType*/, PL$24/*i*/), PL$230/*par*/["args"][PL$24/*i*/], PL$170/*request*/));}};
        ;
      };
      ;
      PL$170/*request*/["setData"]({
        "type": "remoteexec",
        "hashStr": PL$230/*par*/["hashStr"],
        "nameStr": PL$230/*par*/["nameStr"],
        "args": PL$135/*args*/
      });
      PL$170/*request*/["send"]();
      PL$170/*request*/["answerPs"].then(PL$237/*try catch*/(function(PL$239){PL$139/*answer*/ = PL$239;
      PL$89/*data*/ = PL$139/*answer*/["getData"]();
      if(PL$89/*data*/["err"]){
        throw PL$89/*data*/["err"];
      };
      ;
      PL$155/*getInstanceFromTransportData*/(PL$89/*data*/["data"], PL$139/*answer*/).then(PL$237/*try catch*/(function(PL$240){PL$154/*instance*/ = PL$240;
      PL$94/*ret*/ = PL$154/*instance*/["getInstanceAsType"](PL$149/*resultTypes*/["promiseResolveType"]);
      PL$235.resolve();}), PL$238);
    ;}), PL$238);
    ;})();
    PL$236.then(PL$233/*promiseland exception catcher*/(function(PL$26/*e*/){
      if(PL$154/*instance*/){
        PL$154/*instance*/["track"]();
      };
      ;
      PL$52/*console*/["log"]("createRemoteExecRequest error");
      PL$52/*console*/["log"](PL$26/*e*/);
      throw PL$26/*e*/;
      PL$235.resolve();;}));
    PL$235.then(PL$233/*promiseland exception catcher*/(function(){;
    ;
    if(PL$154/*instance*/){
      PL$154/*instance*/["track"]();
    };
    ;
    PL$231.resolve(PL$94/*ret*/); return;
    PL$231.resolve(); return;}), PL$234/*catch rejected*/)
  })();return PL$231;
  });
  var PL$241/*findProfile*/ = (function(PL$242/*profileNameStr*/){
  
    ;
    return PL$20/*profiles*/[PL$242/*profileNameStr*/];
    ;});
  PL$144/*getModuleData*/ = (function(PL$103/*parHash*/){
  
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
  PL$147/*promiseland*/["ProfileBaseClass"] = PL$29/*Profile*/;
  PL$147/*promiseland*/["ConnectionBaseClass"] = PL$31/*Connection*/;
  PL$147/*promiseland*/["addProfile"] = (function(PL$243/*parProfile*/){
  
    ;
    if(! PL$243/*parProfile*/){
      return;
    };
    ;
    if(PL$20/*profiles*/[PL$243/*parProfile*/["name"]()]){
      throw {
        "code": 4,
        "msg": "profile exists"
      };
    };
    ;
    PL$20/*profiles*/[PL$243/*parProfile*/["name"]()] = PL$243/*parProfile*/;
    PL$243/*parProfile*/["on"]("connection", (function(PL$122/*connection*/){
    
      ;
      PL$121/*prepConnection*/(PL$122/*connection*/, PL$243/*parProfile*/);
      ;}));
    ;});
  PL$147/*promiseland*/["profileHas"] = (function(PL$242/*profileNameStr*/){
  
    ;
    if((PL$17/*config*/["profile"] === PL$242/*profileNameStr*/)){
      return true;
    };
    ;
    return false;
    ;});
  PL$147/*promiseland*/["registerRemote"] = (function(PL$242/*profileNameStr*/, PL$244/*hashStr*/, PL$245/*nameStr*/, PL$246/*fun*/, PL$148/*funType*/){
  
    ;
    var PL$19/*moduleData*/ = PL$144/*getModuleData*/(PL$244/*hashStr*/);
    var PL$107/*entry*/ = {
      "profile": PL$242/*profileNameStr*/,
      "fun": PL$246/*fun*/,
      "funType": PL$148/*funType*/
    };
    PL$19/*moduleData*/["functions"][PL$245/*nameStr*/] = PL$107/*entry*/;
    PL$2/*classSystem*/["definitionPromise"](PL$148/*funType*/)["then"]((function(PL$247/*definedFunType*/){
    
      ;
      PL$107/*entry*/["funType"] = PL$247/*definedFunType*/;
      ;}));
    ;});
  PL$147/*promiseland*/["remoteExec"] = (function(PL$244/*hashStr*/, PL$245/*nameStr*/, PL$135/*args*/){
  
    ;
    var PL$19/*moduleData*/ = PL$144/*getModuleData*/(PL$244/*hashStr*/);
    if((! PL$19/*moduleData*/ || ! PL$19/*moduleData*/["functions"][PL$245/*nameStr*/])){
      throw PL$18/*errorMsg*/["missingRemoteFun"];
    };
    ;
    var PL$107/*entry*/ = PL$19/*moduleData*/["functions"][PL$245/*nameStr*/];
    var PL$123/*profile*/ = PL$241/*findProfile*/(PL$107/*entry*/["profile"]);
    if(! PL$123/*profile*/){
      throw PL$18/*errorMsg*/["frameNotFound"];
    };
    ;
    var PL$122/*connection*/ = PL$123/*profile*/["find"]();
    if(! PL$122/*connection*/){
      throw {
        "code": 3,
        "msg": "no connection available"
      };
    };
    ;
    var PL$149/*resultTypes*/ = PL$6/*getEffectiveFunctionResultType*/(PL$107/*entry*/["funType"]);
    try
    {
      var PL$248/*resultPromise*/ = PL$149/*resultTypes*/["newPromise"]();
      (function(){
      var PL$249 = new __Promise();
      var PL$251/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$249.reject(e);
          };
        };
      };
      var PL$252/*catch rejected*/ = function(e){
        PL$249.reject(e);
      };
      var PL$257/*tempRes*/;
      var PL$258/*realRes*/;
      PL$251/*promiseland exception catcher*/(function(){
      
        ;
        var PL$253 = new __Promise();
        var PL$254 = new __Promise();
        var PL$255/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$254.resolve(e); }; }; };
        var PL$256 = function(e){ PL$254.resolve(e); };
        PL$255/*try catch*/(function(){
          PL$257/*tempRes*/ = PL$229/*createRemoteExecRequest*/({
            "connection": PL$122/*connection*/,
            "hashStr": PL$244/*hashStr*/,
            "nameStr": PL$245/*nameStr*/,
            "args": PL$135/*args*/,
            "funType": PL$107/*entry*/["funType"]
          });
          PL$257/*tempRes*/.then(PL$255/*try catch*/(function(PL$259){PL$258/*realRes*/ = PL$259;
          PL$149/*resultTypes*/["resolvePromise"](PL$248/*resultPromise*/, PL$258/*realRes*/);
          PL$253.resolve();}), PL$256);
        ;})();
        PL$254.then(PL$251/*promiseland exception catcher*/(function(PL$26/*e*/){
          PL$149/*resultTypes*/["rejectPromise"](PL$248/*resultPromise*/, PL$26/*e*/);
          PL$253.resolve();;}));
        PL$253.then(PL$251/*promiseland exception catcher*/(function(){;
        ;
        PL$249.resolve(); return;}), PL$252/*catch rejected*/)
      })();return PL$249;
      })();}catch(PL$26/*e*/){
      PL$149/*resultTypes*/["rejectPromise"](PL$248/*resultPromise*/, PL$26/*e*/);};
    ;
    return PL$248/*resultPromise*/;
    ;});
  PL$11/*extra*/["moduleSystemPs"]["resolve"]({
    "getModuleData": PL$144/*getModuleData*/
  });
  PL$11/*extra*/["framesPs"]["resolve"]({
    "getInstanceFromTransportData": PL$155/*getInstanceFromTransportData*/,
    "getInstanceTransportData": PL$163/*getInstanceTransportData*/,
    "handlers": PL$37/*handlers*/
  });
  return;
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();