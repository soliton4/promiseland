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

if (promiseland._hasModule({ hashStr: "fd719809b282d7c008d82f22c84f2445" })){ return promiseland._getModule("fd719809b282d7c008d82f22c84f2445"); };
var PL$8/*first*/;try{PL$8/*first*/ = first;}catch(e){};
var PL$9/*last*/;try{PL$9/*last*/ = last;}catch(e){};
var PL$31/*tocken*/;try{PL$31/*tocken*/ = tocken;}catch(e){};
var PL$33/*list*/;try{PL$33/*list*/ = list;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$2/*root*/;
var PL$3/*makeClass*/;
;
PL$2/*root*/ = {"getCon": (function(){
;
return 1;;
;
})};
PL$3/*makeClass*/ = (function(PL$4/*destroyFun*/){
var PL$5/*curToken*/;
var PL$6/*bestLen*/;
var PL$7/*best*/;
var PL$10/*rootCnt*/;
var PL$11/*bringFront*/;
var PL$13/*con*/;
var PL$22/*checkFun*/;
var PL$23/*getBest*/;
var PL$28/*tracker*/;
var PL$29/*check*/;
;
PL$5/*curToken*/;
PL$6/*bestLen*/ = 0;
PL$7/*best*/;
PL$8/*first*/;;
PL$9/*last*/;;
PL$10/*rootCnt*/ = 0;
PL$11/*bringFront*/ = (function(PL$12/*entry*/){
;
PL$12/*entry*/["cut"]();;
PL$12/*entry*/["newNext"](PL$8/*first*/);;
PL$8/*first*/["newPrev"](PL$12/*entry*/);;
PL$8/*first*/ = PL$12/*entry*/;;
;
});
PL$13/*con*/ = (function(PL$14/*t*/){
var PL$15/*next*/;
var PL$16/*prev*/;
var PL$12/*entry*/;
var PL$20/*cut*/;
var PL$21/*len*/;
;
PL$15/*next*/;
PL$16/*prev*/;
PL$12/*entry*/ = {"newNext": (function(PL$17/*parNext*/){
;
if(PL$17/*parNext*/){
PL$15/*next*/ = PL$17/*parNext*/;;

}else{
PL$9/*last*/ = PL$12/*entry*/;;
PL$15/*next*/ = undefined;;
};
;
;
}),
"newPrev": (function(PL$18/*parPrev*/){
;
if(PL$18/*parPrev*/){
PL$16/*prev*/ = PL$18/*parPrev*/;;

}else{
PL$8/*first*/ = PL$12/*entry*/;;
PL$16/*prev*/ = undefined;;
};
;
;
}),
"getNext": (function(){
;
return PL$15/*next*/;;
;
}),
"getCon": (function(PL$19/*token*/){
;
return PL$14/*t*/["getCon"](PL$19/*token*/);;
;
}),
"cut": PL$20/*cut*/};
PL$20/*cut*/ = (function(){
;
if(PL$16/*prev*/){
PL$16/*prev*/["setNext"](PL$15/*next*/);;
};
;
if(PL$15/*next*/){
PL$15/*next*/["setPrev"](PL$16/*prev*/);;
};
;
;
});
PL$21/*len*/ = PL$14/*t*/["quickCon"]();
if(PL$8/*first*/){
if(((PL$21/*len*/ && (PL$21/*len*/ < PL$6/*bestLen*/)) || ! PL$6/*bestLen*/)){
PL$6/*bestLen*/ = PL$21/*len*/;;
PL$8/*first*/["newPrev"](PL$12/*entry*/);;
PL$15/*next*/ = PL$8/*first*/;;
PL$8/*first*/ = PL$12/*entry*/;;

}else{
PL$9/*last*/["newNext"](PL$12/*entry*/);;
PL$16/*prev*/ = PL$9/*last*/;;
PL$9/*last*/ = PL$12/*entry*/;;
};
;

}else{
PL$6/*bestLen*/ = PL$21/*len*/;;
PL$8/*first*/ = PL$12/*entry*/;;
PL$9/*last*/ = PL$12/*entry*/;;
};
;
return (function(){
;
PL$20/*cut*/();;
if((PL$9/*last*/ === PL$12/*entry*/)){
PL$9/*last*/ = PL$16/*prev*/;;
};
;
if((PL$8/*first*/ === PL$12/*entry*/)){
PL$8/*first*/ = PL$15/*next*/;;
};
;
PL$22/*checkFun*/();;
;
});;
;
});
PL$22/*checkFun*/ = (function(){
;
if(! PL$23/*getBest*/()){
PL$4/*destroyFun*/();;
};
;
;
});
PL$23/*getBest*/ = (function(PL$19/*token*/){
var PL$24/*b*/;
var PL$25/*iterator*/;
var PL$26/*tempBestLen*/;
var PL$27/*tempBest*/;
;
if(PL$10/*rootCnt*/){
return 1;;
};
;
if(PL$19/*token*/){
PL$5/*curToken*/ = PL$19/*token*/;;

}else{
PL$5/*curToken*/ = {};;
};
;
if(PL$8/*first*/){
PL$24/*b*/ = PL$8/*first*/["getCon"](PL$5/*curToken*/);
if(PL$24/*b*/){
if(! PL$19/*token*/){
PL$6/*bestLen*/ = PL$24/*b*/;;
};
;
return PL$24/*b*/;;
};
;
PL$25/*iterator*/ = PL$8/*first*/["getNext"]();
PL$26/*tempBestLen*/ = 0;
PL$27/*tempBest*/;
while(PL$25/*iterator*/){
{PL$24/*b*/ = PL$25/*iterator*/["getCon"](PL$5/*curToken*/);
if(((PL$24/*b*/ && (PL$24/*b*/ < PL$26/*tempBestLen*/)) || ! PL$26/*tempBestLen*/)){
PL$26/*tempBestLen*/ = PL$24/*b*/;;
PL$27/*tempBest*/ = PL$25/*iterator*/;;
};
;
PL$25/*iterator*/ = PL$25/*iterator*/["getNext"]();;
}};
;
if(PL$26/*tempBestLen*/){
if(! PL$19/*token*/){
PL$11/*bringFront*/(PL$27/*tempBest*/);;
PL$6/*bestLen*/ = PL$26/*tempBestLen*/;;
};
;
return PL$26/*tempBestLen*/;;
};
;
};
;
return 0;;
;
});
PL$28/*tracker*/ = {"getCon": (function(PL$19/*token*/){
;
if((PL$5/*curToken*/ === PL$19/*token*/)){
return 0;;
};
;
return PL$23/*getBest*/(PL$19/*token*/);;
;
}),
"quickCon": (function(){
;
if(PL$10/*rootCnt*/){
return 2;;
};
;
return (PL$6/*bestLen*/ + 1);;
;
})};
PL$29/*check*/ = (function(PL$30/*parTocken*/){
var PL$7/*best*/;
var PL$32/*bestL*/;
;
if((PL$30/*parTocken*/ === PL$31/*tocken*/)){
return;;
};
;
PL$31/*tocken*/ = PL$30/*parTocken*/;;
PL$7/*best*/;
PL$32/*bestL*/;
PL$33/*list*/["runThrough"]((function(PL$28/*tracker*/){
var PL$34/*l*/;
;
PL$34/*l*/ = PL$28/*tracker*/["getCon"](PL$31/*tocken*/);
if(! PL$34/*l*/){
return;;
};
;
if(PL$7/*best*/){
if((PL$32/*bestL*/ > PL$34/*l*/)){
PL$7/*best*/ = PL$28/*tracker*/;;
PL$32/*bestL*/ = PL$34/*l*/;;
if((PL$34/*l*/ === 1)){
};
;
};
;
};
;
;
}));;
;
});
return [(function(){
;
++PL$10/*rootCnt*/;;
return (function(){
;
if(! --PL$10/*rootCnt*/){
PL$29/*check*/({});;
};
;
;
});;
;
}), (function(PL$14/*t*/){
;
return PL$13/*con*/(PL$14/*t*/);;
;
})];;
;
});
;
})();
;return PL$1;
});
})();