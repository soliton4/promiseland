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
  defineFun([], function(){
var __execute = function(promiseland, extra){ __execute = undefined; var __require = requireFun;

if (promiseland._hasModule({ hashStr: "5a73c9cecb08f2eab5902538cd34dfdb" })){ return promiseland._getModule("5a73c9cecb08f2eab5902538cd34dfdb"); };
var PL$15/*promiseland*/;try{PL$15/*promiseland*/ = promiseland;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*Promise*/;
var PL$16/*all*/;
var PL$24/*Callback*/;
var PL$28/*CallbackErrorFirst*/;
;
;
PL$2/*Promise*/ = (function(){
var PL$3/*thenAr*/;
var PL$4/*elseAr*/;
var PL$5/*thenFun*/;
;
PL$3/*thenAr*/ = [];
PL$4/*elseAr*/ = [];
PL$5/*thenFun*/ = (function(PL$6/*parThenFun*/, PL$7/*parElseFun*/){
;
if(PL$6/*parThenFun*/){
PL$3/*thenAr*/["push"](PL$6/*parThenFun*/);;
};
;
if(PL$7/*parElseFun*/){
PL$4/*elseAr*/["push"](PL$7/*parElseFun*/);;
};
;
;
});
this["resolve"] = (function(PL$8/*value*/){
var PL$10/*i*/;
var PL$11/*l*/;
;
PL$5/*thenFun*/ = (function(PL$6/*parThenFun*/){
;
try
{PL$6/*parThenFun*/(PL$8/*value*/);;
}catch(PL$9/*e*/){};
;
;
});;
if(! PL$3/*thenAr*/){
return;;
};
PL$10/*i*/ = 0;
PL$11/*l*/ = PL$3/*thenAr*/["length"];
for(PL$10/*i*/;(PL$10/*i*/ < PL$11/*l*/);++PL$10/*i*/){{try
{PL$3/*thenAr*/[PL$10/*i*/](PL$8/*value*/);;
}catch(PL$9/*e*/){};
}};
;
PL$3/*thenAr*/ = undefined;;
PL$4/*elseAr*/ = undefined;;
;
});;
this["reject"] = (function(PL$8/*value*/){
var PL$10/*i*/;
var PL$11/*l*/;
;
PL$5/*thenFun*/ = (function(PL$12/*u*/, PL$7/*parElseFun*/){
;
if(PL$7/*parElseFun*/){
try
{PL$7/*parElseFun*/(PL$8/*value*/);;
}catch(PL$9/*e*/){};
;
};
;
;
});;
if(! PL$4/*elseAr*/){
return;;
};
PL$10/*i*/ = 0;
PL$11/*l*/ = PL$4/*elseAr*/["length"];
for(PL$10/*i*/;(PL$10/*i*/ < PL$11/*l*/);++PL$10/*i*/){{try
{PL$4/*elseAr*/[PL$10/*i*/](PL$8/*value*/);;
}catch(PL$9/*e*/){};
}};
;
PL$3/*thenAr*/ = undefined;;
PL$4/*elseAr*/ = undefined;;
;
});;
this["then"] = (function(PL$13/*par1*/, PL$14/*par2*/){
;
PL$5/*thenFun*/(PL$13/*par1*/, PL$14/*par2*/);;
;
});;
this["promise"] = this["then"];;
this["then"]["then"] = this["then"];;
;
});
PL$15/*promiseland*/["Promise"] = PL$2/*Promise*/;;
PL$16/*all*/ = (function(PL$17/*promisesAr*/){
var PL$18/*res*/;
var PL$19/*resAr*/;
var PL$20/*check*/;
var PL$21/*cnt*/;
var PL$5/*thenFun*/;
var PL$10/*i*/;
var PL$11/*l*/;
;
PL$18/*res*/ = new PL$2/*Promise*/();
PL$19/*resAr*/ = (PL$17/*promisesAr*/ ? PL$17/*promisesAr*/["slice"]() : []);
PL$20/*check*/ = (function(){
;
if(PL$21/*cnt*/){
return;;
};
;
PL$18/*res*/["resolve"](PL$19/*resAr*/);;
;
});
PL$21/*cnt*/ = 1;
PL$5/*thenFun*/ = (function(PL$22/*parI*/){
;
return (function(PL$23/*r*/){
;
PL$19/*resAr*/[PL$22/*parI*/] = PL$23/*r*/;;
--PL$21/*cnt*/;;
PL$20/*check*/();;
;
});;
;
});
PL$10/*i*/ = 0;
PL$11/*l*/ = PL$19/*resAr*/["length"];
for(PL$10/*i*/;(PL$10/*i*/ < PL$11/*l*/);++PL$10/*i*/){{++PL$21/*cnt*/;;
PL$19/*resAr*/[PL$10/*i*/]["then"](PL$5/*thenFun*/(PL$10/*i*/));;
}};
;
--PL$21/*cnt*/;;
PL$20/*check*/();;
return PL$18/*res*/;;
;
});
PL$15/*promiseland*/["all"] = PL$16/*all*/;;
PL$24/*Callback*/ = (function(){
var PL$25/*promise*/;
var PL$26/*callback*/;
;
PL$25/*promise*/ = new PL$2/*Promise*/();
PL$26/*callback*/ = (function(){
var PL$27/*arguments*/ = arguments;
;
PL$25/*promise*/["resolve"](PL$27/*arguments*/);;
;
});
PL$26/*callback*/["promise"] = PL$25/*promise*/["promise"];;
PL$26/*callback*/["callback"] = PL$26/*callback*/;;
return PL$26/*callback*/;;
;
});
PL$15/*promiseland*/["Callback"] = PL$24/*Callback*/;;
PL$28/*CallbackErrorFirst*/ = (function(){
var PL$25/*promise*/;
var PL$26/*callback*/;
;
PL$25/*promise*/ = new PL$2/*Promise*/();
PL$26/*callback*/ = (function(PL$29/*err*/, PL$18/*res*/){
;
if(PL$29/*err*/){
PL$25/*promise*/["reject"](PL$29/*err*/);;
return;;
};
;
PL$25/*promise*/["resolve"](PL$18/*res*/);;
;
});
PL$26/*callback*/["promise"] = PL$25/*promise*/["promise"];;
PL$26/*callback*/["callback"] = PL$26/*callback*/;;
return PL$26/*callback*/;;
;
});
PL$15/*promiseland*/["CallbackErrorFirst"] = PL$28/*CallbackErrorFirst*/;;
PL$15/*promiseland*/["getPromise"] = (function(PL$30/*par*/){
;
return PL$30/*par*/;;
;
});;
PL$15/*promiseland*/["importPromise"] = (function(PL$30/*par*/){
var PL$31/*p*/;
;
PL$31/*p*/ = new PL$2/*Promise*/();
PL$30/*par*/["then"]((function(PL$18/*res*/){
;
PL$31/*p*/["resolve"](PL$18/*res*/);;
;
}), (function(PL$32/*rea*/){
;
PL$31/*p*/["reject"](PL$32/*rea*/);;
;
}));;
return PL$31/*p*/["promise"];;
;
});;
return PL$2/*Promise*/;;
;
})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); } });
})();