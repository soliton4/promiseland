(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback){
      var i = 0;
      var l = modulesAr.length;
      var args = [];
      for (i; i < l; ++i){
        args.push(require(modulesAr[i]));
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        var i = 0;
        var ar = [];
        for (i = 0 ; i < arguments.length; ++i){
          ar.push(arguments[i]);
        };
        module.exports = callback.apply(callback, ar);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    defineFun = define;
    requireFun = require;
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  
  defineFun(["promiseland", "./md5", "./_parser"], function(promiseland, md5, _parser){
    
    var currentPromise;
    var promiseClass = "__Promise";
    var errorMsg;
    
    var statementType = {
      builtin: true
      , statement: true
    };
    
    /* error handlers */
    var unknownType = function(entry){
      throw {
        msg: "unknown type - " + entry.type
      };
    };
    
    var parseError = function(msg){
      throw {
        msg: msg
      };
    };
    
    var somethingsWrong = function(what){
      throw(what);
    };
    
    var newPromiseStr = function(){
      return "new __Promise()";
    };
    
    var _stringEncodeStr = function(par){
      var s = par.replace(new RegExp("\\\\", "g"), "\\\\");
      s = s.replace(new RegExp("\\n", "g"), "\\n");
      s = s.replace(new RegExp("\\r", "g"), "\\r");
      s = s.replace(new RegExp("\\\"", "g"), "\\\"");
      s = s.replace(new RegExp("\\u2028", "g"), "\\u2028");
      s = s.replace(new RegExp("\\u2029", "g"), "\\u2029");
      return s;
    };
    var stringEncodeStr = function(par){
      return "\"" + _stringEncodeStr(par) + "\"";
    };
    
    var mixin = function(){
      var t = arguments[0];
      var i = 0;
      for (i = 1; i < arguments.length; ++i){
        var m = arguments[i];
        for (var p in m){
          t[p] = m[p];
        };
      };
      return t;
    };
    
    
    /* pre processors */
    
    var findPromises = function(par){
      if (!par || typeof par == "string"){
        return false;
      };
      if (par.type == "UnaryExpression" && (par.operator == "*" || par.operator == "require")){
        par.promising = true;
      };
      if (par.type == "Function" && par.promise == "*"){
        par.promising = true;
      };
      var i;
      for (i in par){
        if (i == "_extrainfo"){
          continue;
        };
        if (findPromises(par[i]) && par[i].type != "Function"){
          par.promising = true;
        };
      };
      if (par.promising){
        return true;
      };
      return false;
    };
    
    var checkPromising = function(par){
      if (!par || typeof par == "string"){
        return false;
      };
      if (typeof par.isPromising == "function"){
        return par.isPromising();
      };
      return par.promising || par.isPromising;
    };
    
    
    var makeCompleteStatement = function(par){
      if (par.putItAllTogetherStr){
        return par.putItAllTogetherStr();
      };
      return par;
    };
    
    // additional information on parsing result that wont interfere with scaning functions
    var addExtraToPar = function(par, property, obj){
      if (!par._extrainfo){
        par._extrainfo = {};
      };
      par._extrainfo[property] = obj;
    };
    
    var getExtraFromPar = function(par, property){
      if (par._extrainfo){
        return par._extrainfo[property];
      };
    };
    
    
    var _Result = function(par){
      this.preCodeStr = "";
      this.codeStr = "";
      this.postCodeStr = "";
      this._cp = par.cp;
      
    };
    _Result.prototype = {
      
      pushType: function(par){
        this.push(par);
        this.setType(par.getType());
      },
      
      push: function(par){
        
        if (!par){
          return;
        };
        if (typeof par == "string"){
          if (this.hasPromiseName){
            this.promiseCodeStr += par;
          }else{
            this.codeStr += par;
          };
        }else{
          if (par.promising){
            this.makePromising();
          };
          if (par.isStatement){
            this.push(par.preCodeStr);
            if (par.hasPromiseName){
              this.push(par.promiseCodeStr);
            };
            this.push(par.codeStr);
            this.postCodeStr = par.postCodeStr + this.postCodeStr;
            
          }else{
            this.addPre(par.preCodeStr);
            if (par.hasPromiseName){
              this.addPre(par.promiseCodeStr);
            };
            this.push(par.codeStr);
            this.postCodeStr = par.postCodeStr + this.postCodeStr;
          };
        };
      }
      , makePromising: function(){
        if (this.promising){
          return;
        };
        this.promising = true;
      }
      , setPromiseName: function(par){
        this.makePromising();
        if (!this.hasPromiseName){
          this.hasPromiseName = true;
          this.promiseCodeStr = this.codeStr;
        };
        this.codeStr = par;
      }
      , getPromiseNameStr: function(par){
        if (this.promising && this.hasPromiseName){
          return this.codeStr;
        };
      }
      , isPromising: function(){
        return this.promising;
      }
      , addPre: function(par){
        if (typeof par == "string"){
          this.preCodeStr += par;
        }else{
          if (par.promising){
            this.makePromising();
          };
          this.preCodeStr = par.preCodeStr + (par.hasPromiseName ? par.promiseCodeStr : "") + this.preCodeStr; // this way we can add promise code
          this.addPre(par.codeStr);
          this.postCodeStr = this.postCodeStr + par.postCodeStr;
        };
      }
      , addPost: function(par){
        this.postCodeStr += par;
      }
      , putItAllTogetherStr: function(){
        var resStr = "";
        resStr += this.preCodeStr;
        if (this.hasPromiseName){
          resStr += this.promiseCodeStr;
        };
        resStr += this.codeStr;
        resStr += this.postCodeStr;
        return resStr;
      }
      , setStatement: function(){
        this.isStatement = true;
      }
      , addTypeDeclaration: function(par){
        this._cp._addTypeDeclaration(par);
      }
      , addUsedVariable: function(par){
        this._cp._addUsedVariable(par);
      }
      , addParameter: function(par){
        this._cp._addParameter(par);
      }
      , addConstant: function(par){
        return this._cp._addConstant(par);
      }
      , registerType: function(par){
        return this._cp._registerType(par);
      }
      
      , getType: function(par){
        return this.providesType;
      }
      
      , setType: function(par){
        if (this.providesType){
          throw {
            id: 45
            , msg: "so what do we provide then?"
            , additional: "pls provide this error to a github issue"
          };
        };
        if (typeof par == "string"){
          this.providesType = this._cp.getType(par);
        };
        this.providesType = par;
      }
    };
    
    
    /* internal parser object */
    
    var CodeParser = function(par){
      this.toParse = par.toParse;
      this.dynamicCode = par.dynamicCode;
      this.hashStr = par.hashStr;
      
      /* initializing type identifiers */
      
      this.types = mixin({}, par.types);
      if (!this.types["var"]){
        this.types["var"] = {
          name: "var",
          "type": promiseland.classSystem.getBuiltinType("var")
        };
      }
      this.variables = mixin({}, par.variables);
      
      /* flags */
      
      this.algorithmicCode = false;
      
      /* used to stack / unstack flags */
      
      this.stack = function(parStr){
        var stackNameStr = "_stack_" + parStr;
        if (!this[stackNameStr]){
          this[stackNameStr] = [];
        };
        this[stackNameStr].push(this[parStr]);
      };
      this.unstack = function(parStr){
        var stackNameStr = "_stack_" + parStr;
        this[parStr] = this[stackNameStr].pop();
      };
      
      
      /* main function */
      
      this._start = function(){
        if (this.toParse){
          if (this.toParse.type == "Program"){
            this.result += makeCompleteStatement(this.parseProgram(this.toParse));
          }else if (this.toParse.type == "Function"){
            this.functionRes = this.parseFunction(this.toParse);
            this.result += makeCompleteStatement(this.functionRes);
          };
        };
      };
      
      
      /* keeping track of declarations */
      
      this.scanVariables = function(par){
        variables = {
          
        };
        var self = this;
        var addVar = function(name, typename, par){
          var entry = variables[name];
          if (entry){
            if (entry.typename != typename){
              error(errorMsg.variableRedefinition, par);
            };
            return;
          };
          entry = {
            typename: typename
            , name: name
          };
          variables[name] = entry;
        };
        var findVariables = function(par){
          if (!par || typeof par == "string"){
            return;
          };
          if (par.type == "VariableDeclaration"){
            addVar(par.name, par.typename, par);
          }else if (par.type == "Class"){
            var ci = self.identifyClass(par);
            if (ci.hasName){
              addVar(par.name, "var", par);
            };
          }else if (par.type == "Function"){
            if (par.name){
              addVar(par.name, "var", par);
            };
            return;
          };
          var i;
          for (i in par){
            if (i == "_extrainfo"){
              continue;
            };
            findVariables(par[i]);
          };
        };
        findVariables(par);
        return variables;

      };
      this.getVariableType = function(name){
        var entry = this.variables[name];
        if (!entry){
          return this.getType("var");
        };
        return this.getType(entry.typename);
      };
      
      this.usedVariables = {
      };
      
      this._addUsedVariable = function(par){
        this.usedVariables[par] = true;
      };
      
      this._getUsedVairables = function(){
        return this.usedVariables;
      };
      
      
      this.typedeclarations = {};
      this._addTypeDeclaration = function(par){
        this.typedeclarations[par] = true;
      };
      
      this.functionsAr = [];
      this.functionDeclaratios = {};
      this.addFunction = function(res, name){
        this.functionsAr.push(res);
        this.functionDeclaratios[name] = true;
      };
      
      this.simpleClassesAr = [];
      this.simpleClassDeclaratios = {};
      this.addSimpleClass = function(res, name){
        this.simpleClassesAr.push(res);
        this.simpleClassDeclaratios[name] = true;
      };
      
      
      this.parameters = {};
      this._addParameter = function(par){
        this.parameters[par] = true;
      };
      
      this.isLocallyUntypedDeclared = function(name){
        if (this.parameters[name] === true){
          return true;
        };
        if (this.localdeclarations[name] === true){
          return true;
        };
        if (this.functionDeclaratios[name] === true){
          return true;
        };
        if (this.simpleClassDeclaratios[name] === true){
          return true;
        };
        return false;
      };
      
      
      this.constants = {};
      this._addConstant = function(par){
        if (this.constants[par] === true){
          return false;
        };
        this.constants[par] = true;
        return true;
      };
      
      
      
      if (par.uniquebasis){
        this.uniquebasis = par.uniquebasis;
      }else{
        this.uniquebasis = {
          index: 1
        };
      };
      
      if (par.common){
        this.common = par.common;
      }else{
        this.common = {
          givenNames: {},
          givenTypeNames: {}
        };
      }
      
      this.getUniqueName = function(){
        var retStr = "_V" + this.uniquebasis.index++;
        return retStr;
      };
      
      this.getVariableName = function(name){
        if (!this.common.givenNames[name]){
          this.common.givenNames[name] = this.getUniqueName() + "/*" + name + "*/";
        };
        return this.common.givenNames[name];
        
      };
      
      this.getTypeName = function(name){
        if (!this.common.givenTypeNames[name]){
          this.common.givenTypeNames[name] = this.getUniqueName() + "/*type:" + name + "*/";
        };
        return this.common.givenTypeNames[name];
        
      };
      
      
      // make a new instance of parser for subfunctions etc.
      
      this.newInstance = function(element, extras){
        var param = {
          toParse: element
          , uniquebasis: this.uniquebasis
          , common: this.common
          , hashStr: this.hashStr
          , types: this.types
          , variables: this.variables
        };
        if (extras){
          var i;
          for (i in extras){
            param[i] = extras[i];
          };
        };
        var instance = new CodeParser(param);
        return instance;
      };
      
      
      /* results */
      
      this.getFunctionRes = function(){
        return this.functionRes;
      };
      
      this.getFunctionName = function(){
        return this.functionName;
      };
      
      
      this.getResult = function(){
        return this.result;
      };
      
      this.result = "";
      
      
      this.newResult = function(par){
        var r = new _Result({
          cp: this
        });
        if (par){
          r.push(par);
        };
        return r;
      };
      
      
      
      
      /*
        complete program
      */
      this.parseProgram = function(par){
        findPromises(par);
        var res = this.newResult();
        
        var extraRes = this.newResult();
        extraRes.push("\"use strict\";\n");
        addExtraToPar(par, "addFront", extraRes);
        
        if (checkPromising(par.promising)){
          this.programPromiseStr = this.getUniqueName();
        };
        
        this.resultNameStr = this.getUniqueName();
        
        var functionStatement = this._parseFunction(par, this.programPromiseStr);
        
        var name;
        for (name in this.usedVariables){
          if (this.usedVariables[name] === true){
            res.push("var " + this.getVariableName(name) + ";");
            res.push("try{");
            res.push(this.getVariableName(name));
            res.push(" = ");
            res.push(name);
            res.push(";}catch(e){};\n");
          };
        };
        
        res.push("var " + this.resultNameStr + " = (");
        res.push(makeCompleteStatement(functionStatement));
        res.push(")();\n");
        //res.push("return __result;\n");
        
        return res;
      };
      
      
      
      
      /*
        [function] [name]([params]){[code]}
        -> new parser instance
        parGivenPromiseNameStr is provided by parseProgram to access the return promise before declaring the funciton
      */
      this.parseFunction = function(par){
        //type: "Function", name: null, params: Array[0], elements: Array[1]}
        
        this.stack("isFunction");
        this.isFunction = true;
        
        var res = this._parseFunction(par);
        
        this.unstack("isFunction");
        return res;
      };
      
      
      this._parseFunction = function(par, parGivenPromiseNameStr){
        
        // check for hints
        var hasFrameInfo = false;
        var runRemote = false;
        var runExclusive = false;
        if (par.frame && par.frame.name){
          hasFrameInfo = true;
          if (par.frame.type == "frame"){
            runRemote = true;
            par.promising = true;
            if (this.dynamicCode){
              somethingsWrong({
                msg: "function frame is not allowed in dynamic code"
              });
            };
          }else if (par.frame.type == "exclusive"){
            runExclusive = true;
          };
        };
        
        // main result
        var res = this.newResult(); 
        
        // function result
        var funRes = this.newResult();
        
        this.localVariables = this.scanVariables(par);
        this.variables = mixin(this.variables, this.localVariables);
        
        // function keyword and parameters
        var i = 0;
        funRes.push("function");
        if (par.name){
          this.functionName = this.getVariableName(par.name);
        };
        if (par.name && !runRemote){
          funRes.push(" " + this.getVariableName(par.name));
        };
        funRes.push("("); // function start
        if (par.params && par.params.length){
          i = 0;
          var l = par.params.length;
          for (i; i < l; ++i){
            if (i){
              funRes.push(", ");
            };
            funRes.push(this.getVariableName(par.params[i]));
            funRes.addParameter(par.params[i]);
          };
        };
        funRes.push("){\n");
        
        
        // exclusive hint
        if (runExclusive){
          funRes.push("if (!promiseland.profileHas(\"" + par.frame.name + "\")){\n");
          if (par.promising){
            funRes.push("var p = " + newPromiseStr() + ";\n");
            funRes.push("p.reject({id: 14, msg: \"function does not execute in this frame.\"});\n");
            funRes.push("return p;\n");
          }else{
            funRes.push("return;\n");
          };
          funRes.push("};\n");
        };
        
        var addFront = getExtraFromPar(par, "addFront");
        // evtl. "use strict"
        if (addFront){
          funRes.push(addFront);
        };
        
        // promising preparations
        if (par.promising){
          if (parGivenPromiseNameStr){
            this.returnPromise = parGivenPromiseNameStr;
            
          }else{
            this.returnPromise = this.getUniqueName();
            funRes.push("var " + this.returnPromise + " = " + newPromiseStr() + ";\n");
            
          };
          
          this.tryCatchFunctionStr = this.getUniqueName();
          funRes.push("var " + this.tryCatchFunctionStr + " = function(code){ return function(res){ try{code(res);}catch(e){ " + this.returnPromise + ".reject(e); }; }; };\n");
          
          this.catchFunctionStr = this.getUniqueName();
          funRes.push("var " + this.catchFunctionStr + " = function(e){ " + this.returnPromise + ".reject(e); };\n");
          
          this.promising = true;
          res.makePromising();
        };
        
        // variable declarations and main part
        var elements = this.parseProgElements(par.elements);
        if (par.promising){
          // in front of the function
          if (this.usingThis){
            funRes.push("var " + this.thisExpression + " = this;\n");
          };
          funRes.push(this.tryCatchFunctionStr + "(function(){");
          
          // after the elements
          elements.push(this.returnPromise + ".resolve(); return;"); // in case no return statement was given
        };
        
        for (i in this.localVariables){
          var varname = i;
          funRes.push("var " + this.getVariableName(varname) + ";\n");
          this.usedVariables[varname] = false;
        };
        
        for (i in this.typedeclarations){
          var typename = i;
          funRes.push("var " + this.getTypeName(typename) + ";\n");
        };
        
        for(i = 0; i < this.functionsAr.length; ++i){
          funRes.push(this.functionsAr[i]);
          funRes.push(";\n");
        };
        
        var parname;
        for (parname in this.parameters){
          if (this.parameters[parname] === true){
            this.usedVariables[parname] = false;
          };
        };
        
        funRes.push(elements);
        
        // promising additions
        if (par.promising){
          funRes.addPost("})();\n");
          funRes.addPost("return " + this.returnPromise + ";\n");
          funRes.addPost("}"); // function end
        }else{
          funRes.push("}"); // function end
        };
        
        var completeFunStr = makeCompleteStatement(funRes);
        
        // remote execution check
        var uniqueNameStr;
        if (runRemote){
          uniqueNameStr = this.getUniqueName();
          res.addPre("var " + uniqueNameStr + " = ");
          res.addPre(completeFunStr);
          res.addPre(";\npromiseland.registerRemote(\"" + par.frame.name + "\", \"" + this.getModuleHashStr() + "\", \"" + uniqueNameStr + "\", " + uniqueNameStr + ");\n");
          res.push("function");
          if (par.name){
            res.push(" " + this.getVariableName(par.name));
          };
          res.push("(){"); // function start
          res.push("if (promiseland.profileHas(\"" + par.frame.name + "\")){\n");
          res.push("return " + uniqueNameStr + ".apply(this, arguments);\n");
          res.push("}else{\n");
          res.push("return promiseland.remoteExec(\"" + this.getModuleHashStr() + "\", \"" + uniqueNameStr + "\", arguments);\n");
          res.push("};\n");
          res.push("}"); // end of function
        }else{
          res.push(completeFunStr);
        };
        
        return res;
      };
      
      /*
        this
      */
      this.thisStatement = function(par){
        if (!this.promising){
          return "this";
        };
        if (!this.usingThis){
          this.usingThis = true;
          this.thisExpression = this.getUniqueName();
        };
        return this.thisExpression;
      };
      
      
      /* 
        there are different ways to define a class
      */
      
      this.identifyClass = function(par){
        var r = {};
        r.hasName = par.name && par.name.length;
        
        var keywords = par.keywords;
        if (keywords && keywords.length){
          var i;
          for (i = 0; i < keywords.length; ++i){
            switch(keywords[i].type){
            case "type":
              r.isTyped = true;
              break;
            case "extends":
              r.extendsClause = keywords[i];
              break;
            case "sync":
              r.syncClause = keywords[i];
              break;
            };
          };
        };
        return r;
      };
      
      
      
      this._addClassDefinition = function(parName, parBody){
        var l = (parBody.properties && parBody.properties.length) || 0;
        var i = 0;
        
        for (i; i < l; ++i){
          var prop = parBody.properties[i];
          if (prop.type == "PropertyAssignment"){
            res.push("\"" + prop.name + "\": ");
            res.push(this.parseExpression(prop.value));
          }else{
            somethingsWrong({
              msg: "unknown property assignment: " + prop.type
            });
          };
        };
      };
      
      
      /*
        collect all the typed class information
      */
      this.findClasses = function(par){
        if (!par || typeof par == "string"){
          return;
        };
        if (par.type == "Function"){
          return;
        };
        
        if (par.type == "Class"){
          var ci = this.identifyClass(par);
          if (ci.isTyped){
            // found a typed class
            
            //this.registerClass(par);
            if (!par.body.literal){
              throw errorMsg.needsClassBodyLiteral;
            };
            if (ci.hasName){
              par.classalias = this.getVariableName(par.name);
            }else{
              par.classalias = this.getUniqueName();
            };
            //this._addClassDefinition(par.name, par.body.literal);
            
          };
        };
        var i;
        for (i in par){
          this.findClasses(par[i]);
        };
      };
      
      
      
      
      /* 
      
        building block of the dynamic type checking
        
      */
      
      this.classStatement = function(par){
        var res = this.newResult();
        
        var classRes = this.newResult();
        
        var ci = this.identifyClass(par);
        
        var hasName = ci.hasName;
        
        var isTyped = ci.isTyped;
        var extendsClause = ci.extendsClause;
        var syncClause = ci.syncClause;
        
        if (isTyped){
          classRes.push("promiseland.classSystem.createClass(");
          if (par.body.literal){
            var literal = this.createClassLiteral(par.body.literal);
            classRes.push(this.stringifyClassLiteral(literal));
            classRes.push(", ");
            classRes.push(this.createClassDefaults(par.body.literal));
            if (hasName){
              res.registerType({
                name: par.name, 
                literal: literal,
                par: par
              });
            };
          }else{
            classRes.push("{}, ");
            classRes.push(this.parseExpression(par.body.expression));
          };
          classRes.push(")");

        }else{
          classRes.push("promiseland.createClass(");
          if (par.body.literal){
            classRes.push(this.parseExpression(par.body.literal));
          }else{
            classRes.push(this.parseExpression(par.body.expression));
          };
          classRes.push(")");
        };
        
        
        // named classes are variables
        if (hasName){
          res.addPre(this.getVariableName(par.name) + " = ");
          res.addPre(classRes);
          res.addPre(";");
          if (isTyped){
            res.addTypeDeclaration(par.name, this.getConstructorName(par.name));
            res.addPre(this.getTypeName(par.name) + " = " + this.getVariableName(par.name) + ";");
            res.addPre(this.getConstructorName(par.name) + " = promiseland.classSystem.getTypeConstructor(" + this.getVariableName(par.name) + ");");
          };
          res.push(this.getVariableName(par.name));
        }else{
          res.push(classRes);
        };
        
        return res;
      };
      
      
      this.createClassLiteral = function(par){
        ret = {
          members: [],
          "extends": [],
          hasFreePart: true
        };
        
        var i = 0;
        var l = (par.properties && par.properties.length) || 0;
        for (i; i < l; ++i){
          var prop = par.properties[i];
          if (prop.type == "PropertyAssignment"){
            /*ret.members.push({
              name: prop.name
            });*/
          };
        };
        
        return ret;
      };
      
      this.stringifyClassLiteral = function(par){
        var res = this.newResult();
        
        res.push("{");
        res.push("members: [");
        
        var i = 0;
        var l = par.members.length;
        for (i; i < l; ++i){
          var m = par.members[i];
          if (i){
            res.push(",");
          };
          res.push("{");
          res.push("\"name\":" + stringEncodeStr(m.name));
          res.push(",\"type\":" + this.getTypeName(m["type"].name));
          res.push("}");
          
        };
        res.push("]");
        
        res.push(", \"extends\": []");
        res.push(", \"hasFreePart\": true");
        
        res.push("}");
        
        return res;
      };
      
      this.createClassDefaults = function(par){
        var res = this.newResult();
        res.push("{");
        
        var i = 0;
        var l = (par.properties && par.properties.length) || 0;
        for (i; i < l; ++i){
          var prop = par.properties[i];
          if (prop.type == "PropertyAssignment"){
            res.push("\"" + prop.name + "\": ");
            res.push(this.parseExpression(prop.value));
          };
        };
        
        res.push("}");
        
        return res;
      };
      
      
      /* 
        class registry
      */
      this._registerType = function(par){
        var name = par.name;
        if (this.types.hasOwnProperty[name]){
          throw errorMsg.typeExists;
        };
        this.types[name] = {
          name: par.name,
          literal: par.literal,
          "type": promiseland.classSystem.createClass(literal)
        };
        
        return this.types[name];
      };
      this.getType = function(name, par){
        var throwError = true;
        if (par && par.dontThrow){
          throwError = false;
        };
        if (this.types.hasOwnProperty(name)){
          return this.types[name]["type"];
        };
        if (!throwError){
          return;
        };
        error(errorMsg.typeUndeclared, {
          name: name
        });
      };
      
      
      // try catch / finally (why do we need finally?)
      this.tryStatement = function(par){
        var res = this.newResult();
        //{type: "TryStatement", block: Object, catch: Object, finally: null}
        
        var catchPromise;
        var continuePromise;
        
        if (checkPromising(par)){
          this.stack("tryCatchFunctionStr");
          this.stack("catchFunctionStr");
          
          continuePromise = this.getUniqueName();
          res.addPre("var " + continuePromise + " = " + newPromiseStr() + ";\n");
          
          catchPromise = this.getUniqueName();
          res.addPre("var " + catchPromise + " = " + newPromiseStr() + ";\n");
          
          this.tryCatchFunctionStr = this.getUniqueName() + "/*try catch*/";
          res.addPre("var " + this.tryCatchFunctionStr + " = function(code){ return function(res){ try{code(res);}catch(e){ " + catchPromise + ".reject(e); }; }; };\n");
          
          this.catchFunctionStr = this.getUniqueName();
          res.addPre("var " + this.catchFunctionStr + " = function(e){ " + catchPromise + ".reject(e); };\n");
          
          res.push(this.tryCatchFunctionStr + "(function(){");
          
        }else{
          res.push("try{\n");
        };
        
        par.block.statements.resolvePromise = catchPromise;
        var block = this.makeBlock(par.block.statements);
        
        res.push(makeCompleteStatement(block));
        
        // catch part
        if (checkPromising(par)){
          this.unstack("tryCatchFunctionStr");
          this.unstack("catchFunctionStr");
          res.push("})();\n");
          res.push(catchPromise + ".then(function(){" + continuePromise + ".resolve();}, " + this.tryCatchFunctionStr + "(function(");
          res.push(par.catch.identifier);
          res.push("){\n");
        }else{
          
          res.push("\n}catch(");
          res.push(par.catch.identifier);
          res.push("){\n");
        };
        
        var catchBlock = this.makeBlock(par.catch.block.statements);
        if (checkPromising(par)){
          catchBlock.push(continuePromise + ".resolve();");
        };
        
        res.push(makeCompleteStatement(catchBlock));
        res.push("}");
        
        if (checkPromising(par)){
          res.push("));\n");
          
          res.push(continuePromise);
          res.push(".then(" + this.tryCatchFunctionStr + "(function(){");
          
          res.addPost("}), " + this.catchFunctionStr + ")");
        };
        
        if (par.finally){
          res.push("finally{");
          var finallyBlock = this.makeBlock(par.finally);
          res.push(makeCompleteStatement(finallyBlock));
          res.push("}");
        };
        return res;
      };
      
      
      
      
      
      this.getModuleHashStr = function(){
        return this.hashStr || "unknownhash";
      };
      
      
      this.makeStatement = function(par){
        var statementRes = this.newResult();
        statementRes.setStatement();
        statementRes.push(par);
        statementRes.push(";\n");
        return statementRes;
      };
      
      // heart of code elements
      /*
        openingcode
          precode
            expression
          postcode
          precode
            expression
          postcode
          ...
        closingcode
      */
      this.parseProgElements = function(par){
        var res = this.makeBlock(par);
        return res;
      };
      
      
      this.makeBlock = function(par){
        var res = this.newResult();
        
        var i = 0;
        var l = par.length;
        for (i; i < l; ++i){
          res.push(this.makeStatement(this.parseExpression(par[i])));
        };
        
        if (par.resolvePromise){
          res.push(par.resolvePromise + ".resolve();");
        };
        
        return res;
      };

      
      this.parseExpression = function(par){
        var res = this._parseExpression(par);
        if (!res.getType()){
          error(errorMsg.internalMissingResultType);
        };
        return res;
      };
      
      this._parseExpression = function(value){
        var res;
        
        switch(value.type){
          case "Variable":
            return this.expVariable(value);
            
          case "NumericLiteral":
            return this.expNumericLiteral(value);
            
          case "StringLiteral":
            return this.expStringLiteral(value);
            
          case "VariableStatement":
            return this.expVariableStatement(value);
            
          case "VariableDeclaration":
            return this.expVariableDeclaration(value);
            
          case "FunctionCall":
            return this.expFunctionCall(value);

          case "Function":
            return this.function(value);
            
          case "EmptyStatement":
            // why does this exist?
            res = this.newResult();
            res.setType("var");
            return res;

          case "AssignmentExpression":
            return this.expAssignmentExpression(value);

          case "ObjectLiteral":
            return this.expObjectLiteral(value);

          case "ReturnStatement":
            return this.expReturnStatement(value);

          case "UnaryExpression":
            if (value.operator == "*"){
              return this.expPromiseExpression(value.expression);
            };
            if (value.operator == "require"){
              return this.expRequireExpression(value.expression);
            };
            res = this.newResult();
            res.push(value.operator);
            res.pushType(this.expectTypeVar(this.parseExpression(value.expression)));
            return res;
            
          case "BinaryExpression":
            return this.binaryExpression(value);
            
          case "PostfixExpression":
            return this.postfixExpression(value);

          case "ArrayLiteral":
            return this.arrayLiteral(value);
            
          case "PropertyAccess":
            return this.expPropertyAccess(value);
            
          case "ConditionalExpression":
            return this.conditionalExpression(value);
            
          case "IfStatement":
            return this.ifStatement(value);
            
          case "WhileStatement":
            return this.whileStatement(value);
            
          case "Block":
            return this.parseProgElements(value.statements);
            
          case "ForStatement":
            return this.forStatement(value);
            
          case "ForInStatement":
            return this.forInStatement(value);
            
          case "NewOperator":
            return this.newOperator(value);
            
          case "TryStatement":
            return this.tryStatement(value);
            
          case "Class":
            return this.classStatement(value);
            
          case "This":
            return this.thisStatement(value);

          default:
            unknownType(value);
        };
        return "/*this should not happen*/";
      };
      
      // the function statement
      this.function = function(value){
        var cp = this.newInstance(value, {dynamicCode: this.dynamicCode || this.isFunction});
        var funName = cp.getFunctionName();
        var funRes = cp.getFunctionRes();
        
        var uv = cp._getUsedVairables();
        var name;
        for (name in uv){
          if (uv[name] === true){
            this._addUsedVariable(name);
          };
        };
        
        if (funName && funRes){
          this.addFunction(funRes);
          return this.newResult(funName);
        };
        
        return funRes || cp.getResult();
        
      };
      
      
      this.postfixExpression = function(par){
        var res = this.newResult();
        //{type: "PostfixExpression", operator: "++", expression: Object}
        res.push(this.parseExpression(par.expression));
        res.push(par.operator);
        
        return res;
      };
      
      this.expVariable = function(par){
        return this.getVariable(par.name);
      };
      
      this.expNumericLiteral = function(par){
        var res = this.newResult();
        res.push("" + par.value);
        res.setType(this.getType("var"));
        return res;
      };
      
      this.expStringLiteral = function(par){
        var res = this.newResult();
        res.push(stringEncodeStr(par.value));
        res.setType(this.getType("var"));
        return res;
      };
      
      
      /*
       this expression is a promise. we return code that be treated as the resolved value
      */
      this.expPromiseExpression = function(parExpression){
        var res = this.newResult();
        res.makePromising();
        res.addPre(this.parseExpression(parExpression));
        res.addPre(".then(" + this.tryCatchFunctionStr + "(function(");
        res.setPromiseName(this.getUniqueName());
        res.addPre(res.getPromiseNameStr());
        res.addPre("){");
        res.addPost("}), " + this.catchFunctionStr + ");");
        res.setType("var");
        return res;
      };
      
      
      
      
      
      /*
       this expression is the result of a require
       its also a promise
      */
      this.expRequireExpression = function(parExpression){
        var res = this.newResult();
        res.makePromising();
        res.setPromiseName(this.getUniqueName());
        
        var tempRes = this.newResult();
        tempRes.push("__requireFun(");
        tempRes.push(this.parseExpression(parExpression));
        tempRes.push(").then(");
        
        res.addPre(makeCompleteStatement(tempRes));
        
        res.addPre(this.tryCatchFunctionStr + "(function(" + res.getPromiseNameStr() + "){");
        res.addPost("}));"); // trycatch) then)
        res.setType("var");
        return res;
      };
      
      
      this.newOperator = function(par){
        //{type: "NewOperator", constructor: Object, arguments: Array[0]}
        var res = this.newResult();
        res.push("new ");
        res.push(this.parseExpression(par.constructor));
        res.push("(");
        var i = 0;
        for (i; i < par["args"].lengh; ++i){
          if (i){
            res.push(", ");
          };
          res.push(this.parseExpression(par["args"][i]));
        };
        res.push(")");
        return res;
        
      };
      
      
      
      
      
      this.blockAndContinue = function(par){
        var res = this.newResult();
        res.push(this.parseProgElements(par.statements));
        res.push(this.continueCode);
        return res;
      };
      
      
      
      this.breakOrContinuePromise = function(par){
        var res = this.newResult();
        res.makePromising();
        
        
        var promiseName = par.promiseName || this.getUniqueName();
        res.setPromiseName(promiseName);
        
        var oldBreakCode = this.breakCode;
        var oldContinueCode = this.continueCode;
        
        this.breakCode = promiseName + ".resolve(false); return " + promiseName + ";\n";
        this.continueCode = promiseName + ".resolve(true); return " + promiseName + ";\n";
        
        res.push("var " + promiseName + " = " + newPromiseStr() + ";\n");
        
        var outerBlock = this.newResult();
        
        if (par.preCondition){
          outerBlock.push("if(");
          outerBlock.push(par.preCondition);
          outerBlock.push("){");
        };
        
        var block = this.blockAndContinue(par.block);
        //block.push(this.continueCode);
        
        outerBlock.push(makeCompleteStatement(block));
        
        if (par.preCondition){
          outerBlock.push("}else{");
          outerBlock.push(this.breakCode);
          outerBlock.push("};\n");
        };
        
        res.push(makeCompleteStatement(outerBlock));
        
        this.breakCode = oldBreakCode;
        this.continueCode = oldContinueCode;
        
        return res;
      };
      
      this.generateLoop = function(par){
        var res = this.newResult();
        
        var loopFun = this.getUniqueName();
        var loopEndPromise = this.getUniqueName();
        
        res.push("var " + loopEndPromise + " = " + newPromiseStr() + ";\n");
        
        res.push("var " + loopFun + " = function(){");
        
        var loopCode = this.breakOrContinuePromise({
          block: par.block
          , preCondition: par.preCondition
          , postCode: par.postCode
        });
        res.push(this.makeStatement(makeCompleteStatement(loopCode)));
        
        res.push("return ");
        res.push(loopCode.getPromiseNameStr() + ";\n");
        
        res.push("};\n");
        
        var doFun = this.getUniqueName();
        
        res.push("var " + doFun + " = function(){");
        res.push(loopFun);
        res.push("().then(function(contLoop){\n");
        res.push("if (contLoop){");
        
        var doFunStatement = this.newResult();
        if (par.postCode){
          doFunStatement.push(this.makeStatement(par.postCode));
        };
        doFunStatement.push(doFun + "();");
        res.push(makeCompleteStatement(doFunStatement));
        
        res.push("}else{");
        res.push(loopEndPromise + ".resolve();");
        res.push("};\n"); // if / else
        res.push("});\n"); // promise then fun
        res.push("};\n"); // doFun
        res.push(doFun + "();\n");

        res.push(loopEndPromise);
        res.push(".then(function(){");
        res.addPost("});");
        
        return res;
      };
      
      
      this.forStatement = function(par){
        //{type: "ForStatement", initializer: Object, test: Object, counter: Object, statement: Object}
        
        this.stack("dynamicCode");
        this.dynamicCode = true;
        
        var res = this.newResult();
        var statement;
        
        var promising = false;
        if (checkPromising(par.test) || checkPromising(par.counter) || checkPromising(par.statement)){
          promising = true;
        };
        
        if (promising){
          res.push(this.makeStatement(this.parseExpression(par.initializer)));
          
          this.stack("algorithmicCode");
          this.algorithmicCode = true;
          
          res.push(this.generateLoop({
            block: par.statement
            , preCondition: this.parseExpression(par.test)
            , postCode: this.parseExpression(par.counter)
          }));
          
          this.unstack("algorithmicCode");
          
        }else{
          res.push("for(");
          res.push(this.parseExpression(par.initializer));
          res.push(";");
          res.push(this.parseExpression(par.test));
          res.push(";");
          res.push(this.parseExpression(par.counter));
          res.push("){");
          
          this.stack("algorithmicCode");
          this.algorithmicCode = true;
          
          statement = this.newResult();
          statement.push(this.parseProgElements(par.statement.statements));
          res.push(makeCompleteStatement(statement));
          
          this.unstack("algorithmicCode");
          
          res.push("}");
        };
        
        this.unstack("dynamicCode");
        return res;
      };
      
      
      this.forInStatement = function(par){
        // {type: "ForInStatement", iterator: Object, collection: Object, statement: Object}
        this.stack("dynamicCode");
        this.dynamicCode = true;
        
        this.stack("algorithmicCode");
        this.algorithmicCode = true;
        
        var res = this.newResult();
        var statement;
        
        var promising = false;
        if (checkPromising(par.statement)){
          promising = true;
        };
        
        if (promising){
          var iteratorRes = this.parseExpression(par.iterator);
          var iteratorAccess = iteratorRes;
          if (iteratorRes.promising){
            iteratorAccess = iteratorRes.getPromiseName();
          };
          
          var arrayName = this.getUniqueName();
          res.addPre("var " + arrayName + " = [];");
          
          res.push("for(");
          res.push(iteratorRes);
          res.push(" in ");
          res.push(this.parseExpression(par.collection));
          res.push("){");
          res.push(arrayName + ".push(");
          res.push(iteratorAccess);
          res.push(");");
          res.push("};");
          
          res.push(iteratorRes);
          res.push(" = " + arrayName + "[0];");
          
          var iName = this.getUniqueName();
          res.push("var " + iName + " = 0;");
          
          var conditionRes = this.newResult();
          conditionRes.push(iName + " < " + arrayName + ".length");
          
          var postCodeRes = this.newResult();
          postCodeRes.push(iName + "++;");
          postCodeRes.push(iteratorRes);
          postCodeRes.push(" = " + arrayName + "[" + iName + "];");
          
          res.push(this.generateLoop({
            block: par.statement
            , preCondition: conditionRes
            , postCode: this.parseExpression(par.counter)
          }));
          
          res.push("}");
          
        }else{
          res.push("for(");
          res.push(this.parseExpression(par.iterator));
          res.push(" in ");
          res.push(this.parseExpression(par.collection));
          res.push("){");
          
          statement = this.newResult();
          statement.push(this.parseProgElements(par.statement.statements));
          res.push(makeCompleteStatement(statement));
          
          res.push("}");
        };
        
        this.unstack("dynamicCode");
        this.unstack("algorithmicCode");
        return res;
        
      };
      
      
      this.whileStatement = function(par){
        //{type: "WhileStatement", condition: Object, statement: Object}
        
        this.stack("dynamicCode");
        this.dynamicCode = true;
        
        this.stack("algorithmicCode");
        this.algorithmicCode = true;
        
        var res = this.newResult();
        if (!par.statement || par.statement.type != "Block"){
          somethingsWrong({
            msg: "unknown while statement "
          });
          return "";
        };
        
        var statements;
        var condition = this.parseExpression(par.condition);
        if (checkPromising(condition) || checkPromising(par.statement)){
          
          res.push(this.generateLoop({
            block: par.statement
            , preCondition: condition
          }));
          
        }else{
          statements = this.parseExpression(par.statement);
          res.push("while(");
          res.push(condition);
          res.push("){\n");
          res.push(makeCompleteStatement(statements));
          res.push("}");
          
        };
        
        this.unstack("dynamicCode");
        this.unstack("algorithmicCode");
        return res;
      };
      
      
      this.ifStatement = function(par){
        //{type: "IfStatement", condition: Object, ifStatement: Object, elseStatement: null}
        
        this.stack("conditionalCode");
        this.conditionalCode = true;
        
        this.stack("algorithmicCode");
        this.algorithmicCode = true;
        
        var res = this.newResult();
        
        var promising = false;
        
        if (par.ifStatement && checkPromising(par.ifStatement)){
          promising = true;
        };
        if (par.elseStatement && checkPromising(par.elseStatement)){
          promising = true;
        };
        
        var continuePromise;
        var continueCode;
        if (promising) {
          continuePromise = this.getUniqueName();
          res.push("var " + continuePromise + " = " + newPromiseStr() + ";\n");
          continueCode = continuePromise + ".resolve();";
        };
        res.push("if(");
        res.push(this.parseExpression(par.condition));
        res.push("){\n");
        if (!par.ifStatement || par.ifStatement.type != "Block"){
            somethingsWrong({
              msg: "unknown if statement "
            });
          return "";
        };
        var statement = this.newResult();
        statement.push(this.parseProgElements(par.ifStatement.statements));
        if (promising){
          statement.push(continueCode);
        };
        res.push(makeCompleteStatement(statement));
        if (par.elseStatement){
          res.push("\n}else{\n");
          if (par.elseStatement.type != "Block"){
            somethingsWrong({
              msg: "unknown else statement "
            });
            return "";
          };
          statement = this.newResult();
          statement.push(this.parseProgElements(par.elseStatement.statements));
          if (promising){
            statement.push(continueCode);
          };
          res.push(makeCompleteStatement(statement));
        }else if (promising){
          res.push("\n}else{\n");
          statement = this.newResult();
          statement.push(continueCode);
          res.push(makeCompleteStatement(statement));
        };
        res.push("}");
        if (promising){
          res.push("; " + continuePromise + ".then(function(){");
          res.addPost("});");
        };
        
        this.unstack("conditionalCode");
        this.unstack("algorithmicCode");
        
        return res;
      };
      
      
      this.conditionalExpression = function(par){
        // {type: "ConditionalExpression", condition: Object, trueExpression: Object, falseExpression: Object}
        var res = this.newResult();
        if (par.trueExpression.promising || par.falseExpression.promising){
          // so the right expression only needs to be evaluated if the left is false
          res.makePromising();
          var tempPromise = this.getUniqueName();
          var tempValue = this.getUniqueName();
          res.addPre("var ");
          res.addPre(tempPromise);
          res.addPre(" = " + newPromiseStr() + ";\n");
          res.addPre("if(");
          res.addPre(this.parseExpression(par.condition));
          res.addPre("){");
          
          this.stack("conditionalCode");
          this.conditionalCode = true;
          
          var trueExtraCode = this.newResult();
          trueExtraCode.push(tempPromise);
          trueExtraCode.push(".resolve(");
          trueExtraCode.push(this.parseExpression(par.trueExpression));
          trueExtraCode.push(");\n");
          res.addPre(makeCompleteStatement(trueExtraCode));
          res.addPre("}else{");
          var falseExtraCode = this.newResult();
          falseExtraCode.push(tempPromise);
          falseExtraCode.push(".resolve(");
          falseExtraCode.push(this.parseExpression(par.falseExpression));
          falseExtraCode.push(");\n");
          res.addPre(makeCompleteStatement(falseExtraCode));
          res.addPre("};\n");
          res.addPre(tempPromise);
          res.addPre(".then(");
          res.setPromiseName(this.getUniqueName());
          res.addPre(res.getPromiseNameStr());
          res.addPre("){");
          res.addPost("});");
          
          this.unstack("conditionalCode");
          
        }else{
          res.push("(");
          res.push(this.parseExpression(par.condition));
          res.push(" ? ");
          this.stack("conditionalCode");
          this.conditionalCode = true;
          res.push(this.parseExpression(par.trueExpression));
          res.push(" : ");
          res.push(this.parseExpression(par.falseExpression));
          res.push(")");
          this.unstack("conditionalCode");
          
        };
        return res;
        
      };
      
      
      /* 
        *x || *y -> special case
        *x && *y -> normal case
      */
      this.binaryExpression = function(par){
        var res = this.newResult();
        if (par.operator == "||" && par.right.promising){
          // so the right expression only needs to be evaluated if the left is false
          res.makePromising();
          var tempPromise = this.getUniqueName();
          var tempValue = this.getUniqueName();
          res.addPre("var ");
          res.addPre(tempPromise);
          res.addPre(" = " + newPromiseStr() + ";\n");
          res.addPre("var ");
          res.addPre(tempValue);
          res.addPre(" = ");
          res.addPre(this.parseExpression(par.left));
          res.addPre(";\n");
          res.addPre("if (");
          res.addPre(tempValue);
          res.addPre("){ ");
          res.addPre(tempPromise);
          res.addPre(".resolve(");
          res.addPre(tempValue);
          res.addPre(") }else{ ");
          var rightExtraCode = this.newResult();
          rightExtraCode.push(tempPromise);
          rightExtraCode.push(".resolve(");
          rightExtraCode.push(this.parseExpression(par.right));
          rightExtraCode.push(");\n");
          res.addPre(makeCompleteStatement(rightExtraCode));
          res.addPre("};\n");
          res.addPre(tempPromise);
          res.addPre(".then(");
          res.setPromiseName(this.getUniqueName());
          res.addPre(res.getPromiseNameStr());
          res.addPre("){");
          res.addPost("});");
          
        }else{
          res.push("(");
          res.push(this.parseExpression(par.left));
          res.push(" ");
          res.push(par.operator);
          res.push(" ");
          res.push(this.parseExpression(par.right));
          res.push(")");
          
        };
        return res;
        
      };
      
      
      this.expPropertyAccess = function(par){
        var res = this.newResult();
        var base = this.parseExpression(par.base);
        if (base.getType() !== this.getType("var")){
          error(errorMsg.notImplemented);
        };
        res.setType("var");
        res.push(base);
        res.push("[");
        if (typeof par.name == "string"){
          res.push(stringEncodeStr(par.name));
        }else{
          res.push(this.parseExpression(par.name));
        };
        res.push("]");
        return res;
      };
      
      
      /*
        {
          ["name": value]
          [, ...]
        }
      */
      
      this.expObjectLiteral = function(par){
        //{type: "ObjectLiteral", properties: Array[2]}
        var res = this.newResult();
        res.push("{");
        var i = 0;
        var l = (par.properties && par.properties.length) || 0;
        for (i; i < l; ++i){
          if (i){
            res.push(",\n");
          };
          var prop = par.properties[i];
          if (prop.type == "PropertyAssignment"){
            res.push(stringEncodeStr(prop.name) + ": ");
            res.push(this.expectTypeVar(this.parseExpression(prop.value)));
          }else{
            somethingsWrong({
              msg: "unknown property assignment: " + prop.type
            });
          };
        };
        res.push("}");
        res.setType("var");
        return res;
      };
      
      this.expectTypeVar = function(par){
        if (par.getType() === this.getType("var")){
          return par;
        };
        error(errorMsg.expectedVar, par);
      };
      
      
      /*
        1
        1.0
        "hi world"
      */
      this.parseValue = function(parValue){
        if (!parValue){
          somethingsWrong({
            msg: "empty value"
          });
          return "";
        };
        if (parValue.type == "NumericLiteral"){
          return "" + parValue.value;
        }else{
          somethingsWrong({
            msg: "unknown value type: " + parValue.type
          });
          return "";
        };

      };
      
      
      /*
        (typename | var) name [= value];
      */
      this.expVariableStatement = function(par){
        var res = this.newResult();
        var declarations = par.declarations;
        if (!declarations){
          parseError("missing declarations");
          return "";
        };
        
        var i = 0;
        var l = declarations.length;
        var usedType = this.getType(par.typename);
        for (i; i < l; ++i){
          if (declarations[i].type == "VariableDeclaration"){
            var r = this.parseExpression(declarations[i]);
            if (r.getType() !== usedType){
              error(errorMsg.differentTypesInVariableDeclaration, par);
            };
            res.push(r);
          }else{
            unknownType(declarations[i]);
          };
        };
        res.setType(usedType);
        return res;

      };
      
      
      
      //Object {type: "VariableDeclaration", name: "i", value: null}
      
      this.expVariableDeclaration = function(par){
        var res = this.newResult();
        
        if (par.value){
          res.pushType(this.getSetVariableCode({
            instance: this.getVariable(par.name),
            value: this.parseExpression(par.value),
            operator: "="
          }));
        }else{
          res.pushType(this.getVariable(par.name));
        };
        return res;
        
      };
      
      this.getVariable = function(par){
        var res = this.newResult();
        
        res.addUsedVariable(par);
        
        res.push(this.getVariableName(par));
        res.setType(this.getVariableType(par));
        
        return res;
      };
      
      this.getResultType = function(par){
        if (!par){
          return undefined;
        };
        if (typeof par == "string"){
          return undefined;
        };
        var t = par.getType();
        if (typeof t == "string"){
          return this.getType(t);
        };
        return t;
      };
      
      this.getSetVariableCode = function(par){
        var res = this.newResult();
        var tempRes = this.newResult();
        
        res.push(promiseland.classSystem.getSetVariableCode({
          instance: par.instance,
          "type": this.getResultType(par.instance),
          value: par.value,
          valueType: this.getResultType(par.value),
          result: tempRes,
          operator: par.operator || "="
        }));
        
        res.setType(this.getResultType(par.instance));
        
        return res;
      };
      
      
      /*
        something = value
        something = some.complex["expression"]
      */
      
      this.expAssignmentExpression = function(entry){
        //{type: "AssignmentExpression", operator: "=", left: Object, right: Object}
        var res = this.newResult();
        res.pushType(this.getSetVariableCode({
          instance: this.parseExpression(entry.left),
          value: this.parseExpression(entry.right),
          operator: entry.operator
        }));
        
        return res;
      };
      
      
      /*
        funname([par1, par2, ...]);
      */
      
      this.expFunctionCall = function(element){
        var res = this.newResult();
        var i = 0;
        var l;
        res.push(this.parseExpression(element.name));
        res.push("(");
        if (element["args"]){
          l = element["args"].length;
          for (i = 0; i < l; ++i){
            if (i){
              res.push(", ");
            };
            res.push(this.parseExpression(element["args"][i]));
          };
        };
        res.push(")");
        res.setType(this.getType("var"));
        return res;
      };
    
      
      
      
      
      /*
        [[value][, ...]]
      */
      
      this.arrayLiteral = function(par){
        var res = this.newResult();
        res.push("[");
        var i = 0;
        var l = (par.elements && par.elements.length) || 0;
        for (i; i < l; ++i){
          if (i){
            res.push(", ");
          };
          res.push(this.parseExpression(par.elements[i]));
        };
        res.push("]");
        return res;
      };
      
      /*
        return [value];
      */
      
      this.expReturnStatement = function(par, closingFun){
        var res = this.newResult();
        if (this.promising){
          res.push(this.returnPromise + ".resolve(");
        }else{;
          res.push("return ");
        };
        res.push(this.parseExpression(par.value));
        if (this.promising){
          res.push("); return " + this.returnPromise);
        };
        res.setType(statementType);
        return res;
      };
      
      
      this._start();
      
    };
    
    
    var loaderStr = function(){
      return "(function(){\n\
  var defineFun;\n\
  var requireFun;\n\
  \n\
  if (typeof exports == \"object\" && typeof module == \"object\"){ // CommonJS\n\
    requireFun = function(modulesAr, callback){\n\
      var i = 0;\n\
      var l = modulesAr.length;\n\
      var args = [];\n\
      for (i; i < l; ++i){\n\
        args.push(require(modulesAr[i]));\n\
      };\n\
      callback.apply(callback, args);\n\
    };\n\
    defineFun = function(requireAr, callback){\n\
      requireFun(requireAr, function(){\n\
        module.exports = callback.apply(callback, arguments);\n\
      });\n\
    };\n\
    \n\
  }else if (typeof define == \"function\" && define.amd){ // AMD\n\
    var _define = define;\n\
    requireFun = require;\n\
    \n\
    defineFun = function(par1, par2){\n\
      if (par1 instanceof Array){\n\
        par1.unshift(\"require\");\n\
      }else{\n\
        par2 = par1;\n\
        par1 = [\"require\"];\n\
      };\n\
      _define(par1, function(){\n\
        requireFun = arguments[0];\n\
        var args = [];\n\
        for (var i = 1; i < arguments.length; ++i){\n\
          args.push(arguments[i]);\n\
        };\n\
        return par2.apply(par2, args);\n\
      });\n\
    };\n\
    requireFun = require;\n\
    \n\
  }else{ // Plain browser env\n\
    alert(\"not working out!\");\n\
    \n\
  };\n\
  \n\
  defineFun([\"promiseland\"], function(promiseland){ var __require = requireFun;\n\
  \n\
  var __Promise = promiseland.Promise;\n\
  var __modulePromise = new __Promise();\n\
  var __requireFun = function(parModule){\n\
    var returnPromise = new __Promise();\n\
    try{__require([parModule], function(m){\n\
    if (promiseland.isPromiseLandPromisingModule(m)){\n\
      m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});\n\
    }else{\n\
      returnPromise.resolve(m);\n\
    };\n\
    });\n\
    }catch(e){returnPromise.reject(e);};\n\
  return returnPromise.promise;};\n\
  \n\
  \n";
    };
    
    var promiselandRequireStr = function(){
      return "";
    };
    var callbackRequireStr = function(){
      return "var Callback = promiseland.Callback;\n";
    };
    
    var loaderEndStr = function(){
      return "});\n})();";
    };
    
    
    
    
    
    
    
    /* 
      the main parser object
    */
    
    var parser = {
      parse: function(promiselandCodeStr){
        var p = new promiseland.Promise();
        //console.log("parsing ...");
        var parser = _parser;
          //console.log(parser);
        //console.log(md5);
          var hashStr = md5(promiselandCodeStr);
        //console.log("parsing ...2");
          var parsedAr = parser.parse(promiselandCodeStr);
          var resStr = "";
          var cp;
          resStr += loaderStr();
          resStr += promiselandRequireStr();
          resStr += callbackRequireStr();
        resStr += "if (promiseland._hasModule({ hashStr: \"" + hashStr + "\" })){ return promiseland._getModule(\"" + hashStr + "\"); };\n";
          if (parsedAr.length === undefined){
            if (parsedAr.type == "Program"){
              cp = new CodeParser({toParse: parsedAr, hashStr: hashStr});
              var programStr = cp.getResult();
              if (cp.programPromiseStr){
                // promising module
                resStr += "var " + cp.programPromiseStr + " = " + newPromiseStr() + ";\n";
                resStr += "promiseland._registerModule({ hashStr: \"" + hashStr + "\", \"module\": " + cp.programPromiseStr + ", promising: true });\n";
                resStr += programStr;
              }else{
                resStr += programStr;
                resStr += "promiseland._registerModule({ hashStr: \"" + hashStr + "\", \"module\": " + cp.resultNameStr + ", promising: false });\n";
                resStr += "return " + cp.resultNameStr + ";\n";
              };
            }else{
              unknownType(parsedAr[i]);
            };
            
          }else{
            somethingsWrong({
              msg: "several program elements"
            });
            var i = 0;
            var l = parsedAr.length;
            for (i; i < l; ++i){
              if (parsedAr[i].type == "Program"){
                cp = new CodeParser({toParse: parsedAr[i], hashStr: hashStr});
                resStr += cp.getResult();
              }else{
                unknownType(parsedAr[i]);
              };
            };
          };
          resStr += loaderEndStr();
          p.resolve(resStr);
        //console.log("returning promise");
        return p.promise;
      }
    };
    
    var error = function(par){
      throw par;
    };
    
    errorMsg = {
      typeExists: {
        id: 100
        , msg: "type already exists"
      },
      needsClassBodyLiteral: {
        id: 101
        , msg: "class types need to be defined with a literal body"
      },
      usedUntyped: {
        id: 102,
        msg: "variable already in use without type"
      },
      variableRedefinition: {
        id: 103,
        msg: "ilegal variable redefinition"
      }, 
      expectedVar: {
        id: 104,
        msg: "type missmatch: expected var"
      },
      typeUndeclared: {
        id: 105,
        msg: "type undeclared"
      },
      internalMissingResultType: {
        id: 1000,
        msg: "internal: result type missing"
      }, 
      differentTypesInVariableDeclaration: {
        id: 1001,
        msg: "internal: different type in variable declaration"
      },
      notImplemented: {
        id: 1002,
        msg: "internal: not implemented"
      }
    };
    
    return parser;
    
  });
})();


