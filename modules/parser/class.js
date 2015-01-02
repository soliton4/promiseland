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
    if (promiseland._hasModule({ hashStr: "b80c2c3c9ea994109394e54336ed1257" })){ return promiseland._getModule("b80c2c3c9ea994109394e54336ed1257"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "b80c2c3c9ea994109394e54336ed1257", "module": PL$1, promising: true });
var PL$6/*promiseland*/;try{PL$6/*promiseland*/ = promiseland;}catch(e){};
var PL$55/*JSON*/;try{PL$55/*JSON*/ = JSON;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*Map*/;
var PL$7/*classSystem*/;
var PL$8/*basics*/;
var PL$10/*errorFun*/;
var PL$11/*errorMsg*/;
var PL$12/*_stringEncodeStr*/;
var PL$13/*stringEncodeStr*/;
var PL$14/*VariableNames*/;
var PL$15/*mixin*/;
var PL$16/*identifierName*/;
var PL$17/*checkIsFunction*/;
var PL$18/*getExtraFromPar*/;
var PL$19/*statementType*/;
var PL$20/*checkPromising*/;
PL$3(function(){

  ;
  PL$5/*Map*/ = PL$6/*promiseland*/["Map"];
  PL$7/*classSystem*/ = PL$6/*promiseland*/["classSystem"];
  __requireFun("./basics").then(PL$3(function(PL$9){PL$8/*basics*/ = PL$9;
  PL$10/*errorFun*/ = PL$8/*basics*/["errorFun"];
  PL$11/*errorMsg*/ = PL$8/*basics*/["errorMsg"];
  PL$12/*_stringEncodeStr*/ = PL$8/*basics*/["_stringEncodeStr"];
  PL$13/*stringEncodeStr*/ = PL$8/*basics*/["stringEncodeStr"];
  PL$14/*VariableNames*/ = PL$8/*basics*/["VariableNames"];
  PL$15/*mixin*/ = PL$8/*basics*/["mixin"];
  PL$16/*identifierName*/ = PL$8/*basics*/["identifierName"];
  PL$17/*checkIsFunction*/ = PL$8/*basics*/["checkIsFunction"];
  PL$18/*getExtraFromPar*/ = PL$8/*basics*/["getExtraFromPar"];
  PL$19/*statementType*/ = PL$8/*basics*/["statementType"];
  PL$20/*checkPromising*/ = PL$8/*basics*/["checkPromising"];
  PL$1.resolve((function(PL$21/*parInstance*/, PL$22/*par*/){
  var PL$23/*f*/;

    ;
    PL$23/*f*/ = (function(PL$22/*par*/){
    
      ;
      this["expClassObjectExpression"] = (function(PL$22/*par*/){
      var PL$24/*res*/;

        ;
        this["stack"]("isClassObject");
        this["isClassObject"] = true;
        PL$24/*res*/ = this["expObjectExpression"](PL$22/*par*/);
        this["unstack"]("isClassObject");
        return PL$24/*res*/;
        ;});
      this["expInheritedExpression"] = (function(PL$22/*par*/){
      var PL$24/*res*/;
var PL$25/*i*/;
var PL$26/*l*/;
var PL$27/*args*/;
var PL$28/*argRes*/;

        ;
        if(! this["inheritedAvailable"]){
          this["error"](PL$22/*par*/, PL$11/*errorMsg*/["inheritedOnlyInMember"]);
          return;
        };
        ;
        PL$24/*res*/ = this["newResult"]();
        PL$25/*i*/ = 0;
        PL$26/*l*/;
        PL$24/*res*/["push"](this["inheritedSystem"]["getCurrent"]());
        PL$24/*res*/["push"](".apply(this");
        PL$27/*args*/ = [];
        if(PL$22/*par*/["arguments"]){
          PL$24/*res*/["push"](", [");
          PL$26/*l*/ = PL$22/*par*/["arguments"]["length"];
          for(PL$25/*i*/ = 0;(PL$25/*i*/ < PL$26/*l*/);++PL$25/*i*/){{
            if(PL$25/*i*/){
              PL$24/*res*/["push"](", ");
            };
            ;
            PL$28/*argRes*/ = this["expectTypeVar"](this["parseExpression"](PL$22/*par*/["arguments"][PL$25/*i*/]));
            PL$24/*res*/["push"](PL$28/*argRes*/);}};
          ;
          PL$24/*res*/["push"]("]");
        }else{
        if(PL$22/*par*/["expression"]){
          PL$24/*res*/["push"](", ");
          this["expectTypeVar"](this["parseExpression"](PL$22/*par*/["expression"]));
        };
        };
        ;
        PL$24/*res*/["push"](")");
        PL$24/*res*/["setType"]("var");
        return PL$24/*res*/;
        ;});
      this["expClassStatement"] = (function(PL$22/*par*/){
      var PL$24/*res*/;
var PL$29/*classRes*/;
var PL$30/*ci*/;
var PL$31/*hasName*/;
var PL$32/*name*/;
var PL$33/*isTyped*/;
var PL$34/*extendsClause*/;
var PL$35/*syncClause*/;
var PL$36/*trackClause*/;
var PL$37/*resultType*/;
var PL$38/*literal*/;
var PL$39/*type*/;
var PL$40/*inheritedObjName*/;
var PL$41/*lit*/;
var PL$26/*l*/;
var PL$42/*prop*/;
var PL$43/*tempRes*/;
var PL$44/*baseClasses*/;
var PL$25/*i*/;
var PL$45/*used*/;
var PL$46/*u*/;

        ;
        PL$24/*res*/ = this["newResult"]();
        PL$29/*classRes*/ = this["newResult"]();
        PL$30/*ci*/ = this["identifyClass"](PL$22/*par*/);
        PL$31/*hasName*/ = PL$30/*ci*/["hasName"];
        PL$32/*name*/;
        if(PL$31/*hasName*/){
          PL$32/*name*/ = PL$16/*identifierName*/(PL$22/*par*/["name"]);
        };
        ;
        PL$33/*isTyped*/ = PL$30/*ci*/["isTyped"];
        PL$34/*extendsClause*/ = PL$22/*par*/["extendsClause"];
        PL$35/*syncClause*/ = PL$30/*ci*/["syncClause"];
        PL$36/*trackClause*/ = PL$30/*ci*/["trackClause"];
        PL$37/*resultType*/ = this["getType"]("var");
        this["stack"]("inheritedSystem");
        this["inheritedSystem"] = this["newInherited"]();
        if(PL$33/*isTyped*/){
          this["common"]["useClassSystem"] = true;
          PL$29/*classRes*/["push"]("classSystem.createClass(");
          if(PL$22/*par*/["body"]["literal"]){
            if(PL$31/*hasName*/){
              this["inheritedSystem"]["type"] = this["getType"](PL$32/*name*/, PL$22/*par*/);
            };
            ;
            this["stack"]("isClassObject");
            this["isClassObject"] = true;
            PL$38/*literal*/ = this["createClassLiteral"](PL$22/*par*/["body"]["literal"], PL$30/*ci*/, PL$32/*name*/);
            PL$29/*classRes*/["push"](this["stringifyClassLiteral"](PL$38/*literal*/, PL$32/*name*/));
            PL$29/*classRes*/["push"](", ");
            PL$29/*classRes*/["push"](this["createClassDefaults"](PL$22/*par*/["body"]["literal"]));
            this["unstack"]("isClassObject");
            if(PL$31/*hasName*/){
              PL$39/*type*/ = this["createType"]({"name": PL$32/*name*/,
"literal": PL$38/*literal*/,
"par": PL$22/*par*/});
            };
            ;
          }else{
          PL$29/*classRes*/["push"]("{}, ");
          PL$29/*classRes*/["push"](this["parseExpression"](PL$22/*par*/["body"]["expression"]));
          };
          ;
          PL$29/*classRes*/["push"](")");
        }else{
        PL$40/*inheritedObjName*/ = this["getUniqueName"]("inherited");
        PL$29/*classRes*/["push"]("(function(){");
        if(PL$22/*par*/["body"]["literal"]){
          this["stack"]("preventreturn");
          this["preventreturn"] = true;
          PL$41/*lit*/ = PL$22/*par*/["body"]["literal"];
          PL$26/*l*/ = ((PL$41/*lit*/["properties"] && PL$41/*lit*/["properties"]["length"]) || 0);
          for(PL$25/*i*/;(PL$25/*i*/ < PL$26/*l*/);++PL$25/*i*/){{
            PL$42/*prop*/ = PL$41/*lit*/["properties"][PL$25/*i*/];
            if((PL$42/*prop*/["kind"] == "block")){
              PL$29/*classRes*/["push"](this["parseExpression"](PL$42/*prop*/));
            };
            ;}};
          ;
          this["unstack"]("preventreturn");
        };
        ;
        PL$29/*classRes*/["push"]((("var " + PL$40/*inheritedObjName*/) + " = {};\n"));
        PL$43/*tempRes*/ = this["newResult"]();
        PL$43/*tempRes*/["push"]("var res = promiseland.createClass(");
        if(PL$22/*par*/["body"]["literal"]){
          PL$43/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$22/*par*/["body"]["literal"])));
        }else{
        PL$43/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$22/*par*/["body"]["expression"])));
        };
        ;
        PL$43/*tempRes*/["push"](", [");
        PL$44/*baseClasses*/ = ((PL$34/*extendsClause*/ && PL$34/*extendsClause*/["baseClasses"]) || []);
        PL$25/*i*/ = 0;
        for(PL$25/*i*/ = 0;(PL$25/*i*/ < PL$44/*baseClasses*/["length"]);++PL$25/*i*/){{
          if(PL$25/*i*/){
            PL$43/*tempRes*/["push"](", ");
          };
          ;
          PL$43/*tempRes*/["push"](this["expectTypeVar"](this["parseExpression"](PL$44/*baseClasses*/[PL$25/*i*/])));}};
        ;
        PL$43/*tempRes*/["push"]("], ");
        PL$43/*tempRes*/["push"](PL$40/*inheritedObjName*/);
        PL$43/*tempRes*/["push"](");");
        PL$29/*classRes*/["push"](PL$43/*tempRes*/);
        PL$29/*classRes*/["push"]("\n");
        PL$45/*used*/ = this["inheritedSystem"]["used"];
        PL$46/*u*/;
        for(PL$46/*u*/ in PL$45/*used*/){
          PL$29/*classRes*/["push"]((((((("var " + PL$45/*used*/[PL$46/*u*/]) + " = ") + PL$40/*inheritedObjName*/) + "[") + PL$13/*stringEncodeStr*/(PL$46/*u*/)) + "];\n"));};
        ;
        PL$29/*classRes*/["push"]("return res; })()");
        };
        ;
        if(PL$31/*hasName*/){
          if(PL$33/*isTyped*/){
            PL$24/*res*/["addPre"](this["_resolveClassCode"]({"name": PL$22/*par*/["name"],
"classRes": PL$29/*classRes*/,
"parsed": PL$22/*par*/}));
          }else{
          PL$24/*res*/["addPre"]((this["getVariableName"](PL$22/*par*/["name"]) + " = "));
          PL$24/*res*/["addPre"](PL$29/*classRes*/);
          PL$24/*res*/["addPre"](";");
          };
          ;
          PL$24/*res*/["push"](this["getVariableName"](PL$22/*par*/["name"]));
        }else{
        PL$24/*res*/["push"](PL$29/*classRes*/);
        };
        ;
        PL$24/*res*/["setType"](PL$37/*resultType*/);
        this["unstack"]("inheritedSystem");
        return PL$24/*res*/;
        ;});
      this["_resolveClassCode"] = (function(PL$22/*par*/){
      var PL$47/*parsed*/;
var PL$24/*res*/;

        ;
        PL$47/*parsed*/ = PL$22/*par*/["parsed"];
        PL$24/*res*/ = this["newResult"]();
        this["common"]["useClassSystem"] = true;
        PL$24/*res*/["push"]("classSystem._resolveProvisional(", PL$47/*parsed*/);
        PL$24/*res*/["push"](this["renderType"](PL$22/*par*/["name"], PL$47/*parsed*/), PL$47/*parsed*/);
        PL$24/*res*/["push"](", ", PL$47/*parsed*/);
        PL$24/*res*/["push"](PL$22/*par*/["classRes"], PL$47/*parsed*/);
        PL$24/*res*/["push"](");", PL$47/*parsed*/);
        return PL$24/*res*/;
        ;});
      this["createClassLiteral"] = (function(PL$22/*par*/, PL$30/*ci*/, PL$48/*parName*/){
      var PL$49/*ret*/;
var PL$25/*i*/;
var PL$26/*l*/;
var PL$42/*prop*/;
var PL$50/*defaultValue*/;
var PL$39/*type*/;
var PL$51/*m*/;
var PL$52/*keywords*/;
var PL$53/*k*/;
var PL$32/*name*/;

        ;
        PL$49/*ret*/ = {"members": [],
"extends": [],
"hasFreePart": true,
"parsed": PL$22/*par*/,
"track": (PL$30/*ci*/["trackClause"] ? true : false),
"sync": PL$30/*ci*/["syncClause"],
"unique": PL$30/*ci*/["uniqueClause"],
"savable": PL$30/*ci*/["savableClause"],
"name": PL$48/*parName*/,
"hashStr": this["getModuleHashStr"]()};
        PL$25/*i*/ = 0;
        PL$26/*l*/ = ((PL$22/*par*/["properties"] && PL$22/*par*/["properties"]["length"]) || 0);
        for(PL$25/*i*/;(PL$25/*i*/ < PL$26/*l*/);++PL$25/*i*/){{
          PL$42/*prop*/ = PL$22/*par*/["properties"][PL$25/*i*/];
          PL$50/*defaultValue*/;
          PL$39/*type*/;
          if((PL$42/*prop*/["kind"] == "init")){
            PL$39/*type*/ = (PL$42/*prop*/["typename"] ? this["getType"](PL$42/*prop*/["typename"], PL$22/*par*/) : undefined);
            if(PL$42/*prop*/["value"]){
              if(PL$39/*type*/){
                PL$50/*defaultValue*/ = this["parseAsType"](PL$39/*type*/, PL$42/*prop*/["value"]);
              }else{
              PL$50/*defaultValue*/ = this["parseExpression"](PL$42/*prop*/["value"]);
              PL$39/*type*/ = PL$50/*defaultValue*/["getType"]();
              };
              ;
            };
            ;
            if(! PL$39/*type*/){
              PL$39/*type*/ = this["getType"]("var");
            };
            ;
            PL$51/*m*/ = {"name": PL$16/*identifierName*/(PL$42/*prop*/["key"]),
"type": PL$39/*type*/,
"defaultValue": PL$50/*defaultValue*/};
            PL$52/*keywords*/ = PL$42/*prop*/["keywords"];
            if((PL$52/*keywords*/ && PL$52/*keywords*/["length"])){
              PL$53/*k*/;
              for(PL$53/*k*/ = 0;(PL$53/*k*/ < PL$52/*keywords*/["length"]);++PL$53/*k*/){{
                switch (PL$52/*keywords*/[PL$53/*k*/]["type"]){
case "const":

                PL$51/*m*/["const"] = true;
                break;;case "meta":

                PL$51/*m*/["meta"] = PL$52/*keywords*/[PL$53/*k*/];
                break;;case "sync":

                PL$51/*m*/["sync"] = true;
                break;;}
;
                ;}};
              ;
            };
            ;
            PL$49/*ret*/["members"]["push"](PL$51/*m*/);
          }else{
          if((PL$42/*prop*/["kind"] == "function")){
            PL$32/*name*/ = PL$16/*identifierName*/(PL$42/*prop*/["id"]);
            PL$42/*prop*/["id"] = undefined;
            PL$50/*defaultValue*/ = this["parseExpression"](PL$42/*prop*/["value"]);
            PL$39/*type*/ = PL$50/*defaultValue*/["getType"]();
            PL$49/*ret*/["members"]["push"]({"name": PL$32/*name*/,
"type": PL$39/*type*/,
"defaultValue": PL$50/*defaultValue*/});
          }else{
          this["error"](PL$42/*prop*/, PL$11/*errorMsg*/["unknownPropertyAssignmentType"]);
          };
          };
          ;}};
        ;
        return PL$49/*ret*/;
        ;});
      this["stringifyClassLiteral"] = (function(PL$22/*par*/, PL$54/*parClassNameStr*/){
      var PL$24/*res*/;
var PL$25/*i*/;
var PL$26/*l*/;
var PL$51/*m*/;

        ;
        PL$24/*res*/ = this["newResult"]();
        PL$24/*res*/["push"]("{");
        if(this["common"]["name"]){
          PL$24/*res*/["push"]((("moduleName: " + PL$13/*stringEncodeStr*/(PL$16/*identifierName*/(this["common"]["name"]))) + ","));
        };
        ;
        if(PL$54/*parClassNameStr*/){
          PL$24/*res*/["push"]((("className: " + PL$13/*stringEncodeStr*/(PL$16/*identifierName*/(PL$54/*parClassNameStr*/))) + ","));
        };
        ;
        PL$24/*res*/["push"]("members: [");
        PL$25/*i*/ = 0;
        PL$26/*l*/ = PL$22/*par*/["members"]["length"];
        for(PL$25/*i*/;(PL$25/*i*/ < PL$26/*l*/);++PL$25/*i*/){{
          PL$51/*m*/ = PL$22/*par*/["members"][PL$25/*i*/];
          if(PL$25/*i*/){
            PL$24/*res*/["push"](",");
          };
          ;
          PL$24/*res*/["push"]("{");
          PL$24/*res*/["push"](("\"name\":" + PL$13/*stringEncodeStr*/(PL$51/*m*/["name"])));
          PL$24/*res*/["push"](",\"type\":");
          PL$24/*res*/["push"](this["renderType"](PL$51/*m*/["type"], PL$22/*par*/["parsed"]));
          if(PL$51/*m*/["meta"]){
            PL$24/*res*/["push"](",\"meta\":");
            PL$24/*res*/["push"](this["parseExpression"](PL$51/*m*/["meta"]["expression"]));
          };
          ;
          PL$24/*res*/["push"]("}");}};
        ;
        PL$24/*res*/["push"]("]");
        PL$24/*res*/["push"](", \"extends\": []");
        PL$24/*res*/["push"](", \"hasFreePart\": true");
        if(PL$22/*par*/["track"]){
          PL$24/*res*/["push"](", \"track\": true");
        };
        ;
        if(PL$22/*par*/["sync"]){
          PL$24/*res*/["push"](", \"sync\": ");
          PL$24/*res*/["push"](PL$55/*JSON*/["stringify"](PL$22/*par*/["sync"]));
        };
        ;
        PL$24/*res*/["push"]((", \"hashStr\": " + PL$13/*stringEncodeStr*/(PL$22/*par*/["hashStr"])));
        PL$24/*res*/["push"]((", \"name\": " + PL$13/*stringEncodeStr*/(PL$22/*par*/["name"])));
        if(PL$22/*par*/["unique"]){
          PL$24/*res*/["push"](", \"unique\": true");
        };
        ;
        if(PL$22/*par*/["savable"]){
          PL$24/*res*/["push"](", \"savable\": true");
        };
        ;
        PL$24/*res*/["push"]("}");
        return PL$24/*res*/;
        ;});
      this["createClassDefaults"] = (function(PL$22/*par*/){
      var PL$24/*res*/;
var PL$25/*i*/;
var PL$26/*l*/;
var PL$56/*comma*/;
var PL$42/*prop*/;

        ;
        PL$24/*res*/ = this["newResult"]();
        PL$24/*res*/["push"]("{");
        PL$25/*i*/ = 0;
        PL$26/*l*/ = ((PL$22/*par*/["properties"] && PL$22/*par*/["properties"]["length"]) || 0);
        PL$56/*comma*/;
        for(PL$25/*i*/;(PL$25/*i*/ < PL$26/*l*/);++PL$25/*i*/){{
          PL$42/*prop*/ = PL$22/*par*/["properties"][PL$25/*i*/];
          if((PL$42/*prop*/["kind"] == "init")){
            if(PL$56/*comma*/){
              PL$24/*res*/["push"](", ");
            };
            ;
            PL$24/*res*/["push"]((PL$13/*stringEncodeStr*/(PL$16/*identifierName*/(PL$42/*prop*/["key"])) + ": "));
            if(PL$42/*prop*/["value"]){
              PL$24/*res*/["push"](this["parseExpression"](PL$42/*prop*/["value"]));
            }else{
            PL$24/*res*/["push"]("undefined");
            };
            ;
            PL$56/*comma*/ = true;
          };
          ;}};
        ;
        PL$24/*res*/["push"]("}");
        return PL$24/*res*/;
        ;});
      this["localClassConstructors"] = {};
      this["getConstructorName"] = (function(PL$48/*parName*/){
      var PL$32/*name*/;
var PL$57/*t*/;

        ;
        PL$32/*name*/ = PL$16/*identifierName*/(PL$48/*parName*/);
        if(this["types"]["has"](PL$32/*name*/)){
          PL$57/*t*/ = this["types"]["get"](PL$32/*name*/);
          if(! PL$57/*t*/["constructorName"]){
            PL$57/*t*/["constructorName"] = this["getUniqueName"]((PL$32/*name*/ + "-constructor"));
            if(! PL$57/*t*/["isDynamic"]){
              this["localClassConstructors"][PL$32/*name*/] = PL$57/*t*/["constructorName"];
            };
            ;
          };
          ;
          return PL$57/*t*/["constructorName"];
        };
        ;
        this["error"](PL$48/*parName*/, PL$11/*errorMsg*/["typeUndeclared"], {"name": PL$32/*name*/});
        ;});
      this["identifyClass"] = (function(PL$22/*par*/){
      var PL$58/*r*/;
var PL$32/*name*/;
var PL$52/*keywords*/;
var PL$25/*i*/;

        ;
        PL$58/*r*/ = {};
        PL$32/*name*/;
        if(PL$22/*par*/["name"]){
          PL$32/*name*/ = PL$16/*identifierName*/(PL$22/*par*/["name"]);
        };
        PL$58/*r*/["hasName"] = (PL$32/*name*/ && PL$32/*name*/["length"]);
        PL$52/*keywords*/ = PL$22/*par*/["keywords"];
        if((PL$52/*keywords*/ && PL$52/*keywords*/["length"])){
          PL$25/*i*/;
          for(PL$25/*i*/ = 0;(PL$25/*i*/ < PL$52/*keywords*/["length"]);++PL$25/*i*/){{
            switch (PL$52/*keywords*/[PL$25/*i*/]["type"]){
case "type":

            PL$58/*r*/["isTyped"] = true;
            break;;case "extends":

            PL$58/*r*/["extendsClause"] = PL$52/*keywords*/[PL$25/*i*/];
            break;;case "sync":

            PL$58/*r*/["syncClause"] = PL$52/*keywords*/[PL$25/*i*/];
            break;;case "track":

            PL$58/*r*/["trackClause"] = PL$52/*keywords*/[PL$25/*i*/];
            break;;case "unique":

            PL$58/*r*/["uniqueClause"] = PL$52/*keywords*/[PL$25/*i*/];
            break;;case "savable":

            PL$58/*r*/["savableClause"] = PL$52/*keywords*/[PL$25/*i*/];
            break;;}
;
            ;}};
          ;
        };
        ;
        return PL$58/*r*/;
        ;});
      this["findClasses"] = (function(PL$22/*par*/, PL$24/*res*/){
      var PL$30/*ci*/;
var PL$32/*name*/;
var PL$59/*extraRes*/;
var PL$25/*i*/;

        ;
        if(! PL$24/*res*/){
          PL$24/*res*/ = this["newResult"]();
        };
        ;
        if((! PL$22/*par*/ || (typeof PL$22/*par*/ == "string"))){
          return PL$24/*res*/;
        };
        ;
        if(PL$17/*checkIsFunction*/(PL$22/*par*/)){
          return PL$24/*res*/;
        };
        ;
        if((PL$22/*par*/["type"] == "Class")){
          PL$30/*ci*/ = this["identifyClass"](PL$22/*par*/);
          if(PL$30/*ci*/["isTyped"]){
            if(PL$22/*par*/["body"]["literal"]){
              if(PL$30/*ci*/["hasName"]){
                PL$32/*name*/ = PL$16/*identifierName*/(PL$22/*par*/["name"]);
                PL$59/*extraRes*/ = this["newResult"]();
                this["addType"]({"name": PL$32/*name*/,
"extraRes": PL$59/*extraRes*/}, PL$22/*par*/);
                PL$24/*res*/["push"]("var ");
                PL$24/*res*/["push"](this["renderType"](PL$32/*name*/));
                PL$24/*res*/["push"](" = classSystem._createProvisionalClass();\n");
                this["common"]["useClassSystem"] = true;
                PL$24/*res*/["push"]((this["getVariableName"](PL$32/*name*/) + " = "));
                PL$24/*res*/["push"](this["renderType"](PL$32/*name*/));
                PL$24/*res*/["push"](";\n");
                PL$24/*res*/["push"]((("var " + this["getConstructorName"](PL$32/*name*/)) + " = undefined;"));
                PL$24/*res*/["push"](this["_typeReadyCode"]({"typename": PL$32/*name*/}));
                PL$24/*res*/["push"](PL$59/*extraRes*/);
              };
              ;
            };
            ;
          };
          ;
          return PL$24/*res*/;
        };
        ;
        PL$25/*i*/;
        for(PL$25/*i*/ in PL$22/*par*/){
          this["findClasses"](PL$22/*par*/[PL$25/*i*/], PL$24/*res*/);};
        ;
        return PL$24/*res*/;
        ;});
      this["_typeReadyCode"] = (function(PL$22/*par*/){
      var PL$24/*res*/;

        ;
        PL$24/*res*/ = this["newResult"]();
        this["common"]["useClassSystem"] = true;
        PL$24/*res*/["push"]("classSystem.readyPromise(");
        PL$24/*res*/["push"](this["renderType"](PL$22/*par*/["typename"]));
        PL$24/*res*/["push"](").then(function(parType){");
        PL$24/*res*/["push"](this["renderType"](PL$22/*par*/["typename"]));
        PL$24/*res*/["push"](" = parType;");
        if(! PL$22/*par*/["noConstructor"]){
          PL$24/*res*/["push"]((this["getConstructorName"](PL$22/*par*/["typename"]) + " = classSystem.getTypeConstructor("));
          PL$24/*res*/["push"](this["renderType"](PL$22/*par*/["typename"]));
          PL$24/*res*/["push"](");");
        };
        ;
        PL$24/*res*/["push"]("});");
        return PL$24/*res*/;
        ;});
      ;});
    PL$23/*f*/["apply"](PL$21/*parInstance*/, [PL$22/*par*/]);
    ;})); return;
  PL$1.resolve(); return;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();