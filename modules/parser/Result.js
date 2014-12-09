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
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "706b40506e19128b39011fd31c0adea4" })){ return promiseland._getModule("706b40506e19128b39011fd31c0adea4"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "706b40506e19128b39011fd31c0adea4", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*basics*/;
var PL$7/*errorFun*/;
var PL$8/*errorMsg*/;
var PL$9/*_stringEncodeStr*/;
var PL$10/*stringEncodeStr*/;
var PL$11/*_Result*/;
PL$3(function(){;
__requireFun("./basics").then(PL$3(function(PL$6){PL$5/*basics*/ = PL$6;
PL$7/*errorFun*/ = PL$5/*basics*/["errorFun"];
PL$8/*errorMsg*/ = PL$5/*basics*/["errorMsg"];
PL$9/*_stringEncodeStr*/ = PL$5/*basics*/["_stringEncodeStr"];
PL$10/*stringEncodeStr*/ = PL$5/*basics*/["stringEncodeStr"];
PL$11/*_Result*/ = (function(PL$12/*par*/){
;
if(PL$12/*par*/["codeStr"]){
this["codeStr"] = PL$12/*par*/["codeStr"];;

}else{
this["codeAr"] = [];;
};
;
this["_cp"] = PL$12/*par*/["cp"];;
;
});
PL$11/*_Result*/["prototype"] = {"pushType": (function(PL$12/*par*/){
;
this["push"](PL$12/*par*/);;
this["setType"](PL$12/*par*/["getType"]());;
;
}),
"_prepCode": (function(PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/){
var PL$15/*res*/;
;
if((typeof PL$13/*parCode*/ == "string")){
PL$13/*parCode*/ = this["newResult"]({"codeStr": PL$13/*parCode*/,
"reference": PL$14/*parReference*/});;
};
;
PL$15/*res*/;
if((PL$12/*par*/ && PL$12/*par*/["stringEncode"])){
PL$15/*res*/ = this["newResult"]();;
PL$15/*res*/["_stringEncode"] = true;;
PL$15/*res*/["push"](PL$13/*parCode*/);;
PL$13/*parCode*/ = PL$15/*res*/;;
};
;
if((PL$12/*par*/ && PL$12/*par*/["dynamic"])){
PL$15/*res*/ = this["newResult"]();;
PL$15/*res*/["_dynamic"] = true;;
PL$15/*res*/["push"]("\" + ");;
PL$15/*res*/["push"](PL$13/*parCode*/);;
PL$15/*res*/["push"](" + \"");;
PL$13/*parCode*/ = PL$15/*res*/;;
};
;
return PL$13/*parCode*/;;
;
}),
"push": (function(PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/){
;
if(! this["reference"]){
this["reference"] = PL$14/*parReference*/;;
};
;
if(! PL$13/*parCode*/){
return;;
};
;
if((PL$14/*parReference*/ && (typeof PL$14/*parReference*/ == "boolean"))){
PL$7/*errorFun*/(undefined, PL$8/*errorMsg*/["internalWrongUseOfReference"]);;
};
;
PL$13/*parCode*/ = this["_prepCode"](PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/);;
if(! this["codeAr"]){
this["error"]((PL$14/*parReference*/ || this["reference"]), PL$8/*errorMsg*/["internalCantAddToStringResult"]);;
};
;
this["codeAr"]["push"](PL$13/*parCode*/);;
if(PL$13/*parCode*/["promising"]){
this["makePromising"]();;
};
;
;
}),
"_iterPar": (function(PL$12/*par*/){
;
if(! PL$12/*par*/){
PL$12/*par*/ = {"stringEncode": 0};;
};
;
PL$12/*par*/ = {"stringEncode": (PL$12/*par*/["stringEncode"] || 0)};;
if(this["_stringEncode"]){
PL$12/*par*/["stringEncode"] += 1;;
};
;
if(this["_dynamic"]){
PL$12/*par*/["stringEncode"] -= 1;;
};
;
return PL$12/*par*/;;
;
}),
"setPromise": (function(PL$16/*ps*/){
var PL$17/*self*/;
;
PL$17/*self*/ = this;
this["promise"] = PL$16/*ps*/;;
PL$16/*ps*/["then"]((function(PL$15/*res*/){
;
PL$17/*self*/["replace"](PL$15/*res*/);;
;
}));;
;
}),
"resolve": (function(PL$15/*res*/){
;
this["promise"]["resolve"](PL$15/*res*/);;
;
}),
"replace": (function(PL$15/*res*/){
;
if((typeof PL$15/*res*/ == "string")){
PL$15/*res*/ = this["newResult"]({"codeStr": PL$15/*res*/});;
};
;
this["replacement"] = PL$15/*res*/;;
;
}),
"getParsed": (function(){
var PL$18/*p*/;
var PL$19/*i*/;
;
if(this["reference"]){
return this["reference"];;
};
;
PL$18/*p*/;
if(this["preCode"]){
PL$18/*p*/ = this["preCode"]["getParsed"]();;
};
;
if(PL$18/*p*/){
return PL$18/*p*/;;
};
;
if(this["codeAr"]){
PL$19/*i*/ = 0;
for(PL$19/*i*/ = 0;(PL$19/*i*/ < this["codeAr"]["length"]);++PL$19/*i*/){{PL$18/*p*/ = this["codeAr"][PL$19/*i*/]["getParsed"]();;
if(PL$18/*p*/){
return PL$18/*p*/;;
};
;
}};
;
};
;
if(this["postCode"]){
PL$18/*p*/ = this["postCode"]["getParsed"]();;
};
;
return PL$18/*p*/;;
;
}),
"setParsed": (function(PL$14/*parReference*/){
;
if(PL$14/*parReference*/){
this["reference"] = PL$14/*parReference*/;;
};
;
;
}),
"_getPreCodeStr": (function(PL$12/*par*/){
var PL$20/*resStr*/;
var PL$19/*i*/;
;
PL$12/*par*/ = this["_iterPar"](PL$12/*par*/);;
PL$20/*resStr*/ = "";
PL$19/*i*/;
if(this["preCode"]){
PL$20/*resStr*/ += this["preCode"]["getPreCodeStr"](PL$12/*par*/);;
PL$20/*resStr*/ += this["preCode"]["getCodeStr"](PL$12/*par*/);;
};
;
if(this["codeAr"]){
for(PL$19/*i*/ = 0;(PL$19/*i*/ < this["codeAr"]["length"]);++PL$19/*i*/){{PL$20/*resStr*/ += this["codeAr"][PL$19/*i*/]["getPreCodeStr"](PL$12/*par*/);;
}};
;
};
;
if(this["postCode"]){
PL$20/*resStr*/ += this["postCode"]["getPreCodeStr"](PL$12/*par*/);;
};
;
return PL$20/*resStr*/;;
;
}),
"getPreCodeStr": (function(PL$12/*par*/){
;
if(this["replacement"]){
return this["replacement"]["getPreCodeStr"](PL$12/*par*/);;
};
;
if((this["isStatement"] || this["isComplete"])){
return "";;

}else{
return this["_getPreCodeStr"](PL$12/*par*/);;
};
;
;
}),
"getCodeStr": (function(PL$12/*par*/){
var PL$20/*resStr*/;
var PL$19/*i*/;
var PL$21/*tempCodeStr*/;
;
if(this["replacement"]){
return this["replacement"]["getCodeStr"](PL$12/*par*/);;
};
;
PL$12/*par*/ = this["_iterPar"](PL$12/*par*/);;
PL$20/*resStr*/ = "";
PL$19/*i*/;
if((this["isStatement"] || this["isComplete"])){
PL$20/*resStr*/ += this["_getPreCodeStr"](PL$12/*par*/);;
};
;
if(this["codeAr"]){
for(PL$19/*i*/ = 0;(PL$19/*i*/ < this["codeAr"]["length"]);++PL$19/*i*/){{PL$20/*resStr*/ += this["codeAr"][PL$19/*i*/]["getCodeStr"](PL$12/*par*/);;
}};
;

}else{
if(this["codeStr"]){
PL$21/*tempCodeStr*/ = this["codeStr"];
if((PL$12/*par*/["stringEncode"] < 0)){
PL$7/*errorFun*/(undefined, PL$8/*errorMsg*/["internalNegativeStringEncode"]);;
};
;
for(PL$19/*i*/ = 0;(PL$19/*i*/ < PL$12/*par*/["stringEncode"]);++PL$19/*i*/){{PL$21/*tempCodeStr*/ = PL$9/*_stringEncodeStr*/(PL$21/*tempCodeStr*/);;
}};
;
PL$20/*resStr*/ += PL$21/*tempCodeStr*/;;
};
};
;
if(this["promiseName"]){
PL$20/*resStr*/ += this["promiseName"]["getCodeStr"](PL$12/*par*/);;
};
;
if(this["isComplete"]){
PL$20/*resStr*/ += this["_getPostCodeStr"](PL$12/*par*/);;
};
;
return PL$20/*resStr*/;;
;
}),
"_getPostCodeStr": (function(PL$12/*par*/){
var PL$20/*resStr*/;
var PL$19/*i*/;
;
PL$12/*par*/ = this["_iterPar"](PL$12/*par*/);;
PL$20/*resStr*/ = "";
PL$19/*i*/;
if(this["postCode"]){
PL$20/*resStr*/ += this["postCode"]["getCodeStr"](PL$12/*par*/);;
PL$20/*resStr*/ += this["postCode"]["getPostCodeStr"](PL$12/*par*/);;
};
;
if(this["codeAr"]){
for(PL$19/*i*/ = this["codeAr"]["length"];PL$19/*i*/;--PL$19/*i*/){{PL$20/*resStr*/ += this["codeAr"][(PL$19/*i*/ - 1)]["getPostCodeStr"](PL$12/*par*/);;
}};
;
};
;
if(this["preCode"]){
PL$20/*resStr*/ += this["preCode"]["getPostCodeStr"](PL$12/*par*/);;
};
;
return PL$20/*resStr*/;;
;
}),
"getPostCodeStr": (function(PL$12/*par*/){
;
if(this["replacement"]){
return this["replacement"]["getPostCodeStr"](PL$12/*par*/);;
};
;
if(this["isComplete"]){
return "";;

}else{
return this["_getPostCodeStr"](PL$12/*par*/);;
};
;
;
}),
"makePromising": (function(){
;
if(this["promising"]){
return;;
};
;
this["promising"] = true;;
;
}),
"setPromiseName": (function(PL$13/*parCode*/, PL$14/*parReference*/){
;
this["makePromising"]();;
this["promiseName"] = this["newResult"]({"codeStr": PL$13/*parCode*/,
"reference": PL$14/*parReference*/});;
;
this["hasPromiseName"] = true;;
;
}),
"getPromiseName": (function(){
;
if((this["promising"] && this["hasPromiseName"])){
return this["promiseName"];;
};
;
;
}),
"isPromising": (function(){
;
return this["promising"];;
;
}),
"addPre": (function(PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/){
;
if(! PL$13/*parCode*/){
return;;
};
;
PL$13/*parCode*/ = this["_prepCode"](PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/);;
if(PL$13/*parCode*/["promising"]){
this["makePromising"]();;
};
;
if(! this["preCode"]){
this["preCode"] = this["newResult"]();;
};
;
this["preCode"]["push"](PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/);;
;
}),
"addPost": (function(PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/){
;
if(! PL$13/*parCode*/){
return;;
};
;
PL$13/*parCode*/ = this["_prepCode"](PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/);;
if(PL$13/*parCode*/["promising"]){
this["makePromising"]();;
};
;
if(! this["postCode"]){
this["postCode"] = this["newResult"]();;
};
;
this["postCode"]["push"](PL$13/*parCode*/, PL$14/*parReference*/, PL$12/*par*/);;
;
}),
"setStatement": (function(){
;
this["isStatement"] = true;;
;
}),
"setComplete": (function(){
;
this["isComplete"] = true;;
;
}),
"newResult": (function(PL$12/*par*/){
;
return new PL$11/*_Result*/({"cp": this["_cp"],
"codeStr": (PL$12/*par*/ ? PL$12/*par*/["codeStr"] : undefined)});;
;
}),
"getType": (function(PL$12/*par*/){
;
return this["providesType"];;
;
}),
"setType": (function(PL$12/*par*/){
;
if(this["providesType"]){
PL$7/*errorFun*/({}, PL$8/*errorMsg*/["multipleTypeProviding"]);;
};
;
if((typeof PL$12/*par*/ == "string")){
this["providesType"] = this["_cp"]["getType"](PL$12/*par*/, this["reference"]);;
return;;
};
;
this["providesType"] = PL$12/*par*/;;
;
})};;
PL$1.resolve(PL$11/*_Result*/); return;;
PL$1.resolve(); return;;
}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();