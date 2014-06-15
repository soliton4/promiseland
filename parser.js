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
    
    /* debugging flags
    */
    
    var _pureCode = false;
    
    var Promise = promiseland.Promise;
    
    var currentPromise;
    var promiseClass = "__Promise";
    var errorMsg;
    
    var classSystem = promiseland.classSystem;
    
    var statementType = {
      builtin: true
      , statement: true
    };
    var varType = classSystem.getBuiltinType("var");
    
    /* error function */
    var errorFun = function(par, err){
      if (!par.line){
        debugger;
      };
      err.line = par.line;
      err.column = par.column;
      throw err;
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
    
    var identifierName = function(par){
      if (typeof par == "string"){
        return par;
      };
      return par.name;
    };
    
    var checkIsFunction = function(par){
      if (
        par.type == "FunctionExpression"
        || par.type == "FunctionDeclaration"
        || par.type == "MemberFunction"
      ){
        return true;
      };
      return false;
    };
    
    /* pre processors */
    
    var findPromises = function(par){
      if (!par || typeof par == "string"){
        return false;
      };
      if (par.type == "UnaryExpression" && (par.operator == "*" || par.operator == "require")){
        par.promising = true;
      };
      if (checkIsFunction(par) && par.promise == "*"){
        par.promising = true;
      };
      var i;
      for (i in par){
        if (i == "_extrainfo"){
          continue;
        };
        if (findPromises(par[i]) && !checkIsFunction(par[i])){
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
    
    
    /* ----------------------------------------------------------------------------------------------
    
       Result
       
       code1 + code2
       
       code1
       code2
       
       pre1
       pre2
       code1
       code2
       post2
       post1
       
       
       code1 + statment2
       
       pre1
       code1
       pre2
       code2
       post2
       post1
       
       
       
       
       assembly:
       
       
       pre.pre
       pre.code
       code.pre
       post.pre
       
       code.code
       
       post.code
       post.post
       code.post
       pre.post

       
       assemble statement:
       
       -
       
       pre.pre
       pre.code
       code.pre
       post.pre
       code.code
       
       post.code
       post.post
       code.post
       pre.post


    */
    
    var _Result = function(par){
      //this.preCodeStr = "";
      
      if (par.codeStr){
        this.codeStr = par.codeStr;
      }else{
        this.codeAr = [];
      };
      //this.codeStr = "";
      
      //this.postCodeStr = "";
      this._cp = par.cp;
      
    };
    _Result.prototype = {
      
      pushType: function(par){
        this.push(par);
        this.setType(par.getType());
      },
      
      _prepCode: function(parCode, parReference, par){
        if (typeof parCode == "string"){
          parCode = this.newResult({
            codeStr: parCode,
            reference: parReference
          });
        };
        var res;
        if (par && par.stringEncode){
          res = this.newResult();
          res._stringEncode = true;
          res.push(parCode);
          parCode = res;
        };
        if (par && par.dynamic){
          res = this.newResult();
          res._dynamic = true;
          res.push("\" + ");
          res.push(parCode);
          res.push(" + \"");
          parCode = res;
          
        };
        return parCode;
      },
      
      push: function(parCode, parReference, par){
        
        if (!this.reference){
          this.reference = parReference;
        };
        
        if (!parCode){
          return;
        };
        if (parReference && typeof parReference == "boolean"){
          errorFun(undefined, errorMsg.internalWrongUseOfReference);
        };
        parCode = this._prepCode(parCode, parReference, par);
        
        if (!this.codeAr){
          this.error(parReference || this.reference, errorMsg.internalCantAddToStringResult);
        };
        
        this.codeAr.push(parCode); // simple
        
        if (parCode.promising){
          this.makePromising();
        };
        
      }
      , _iterPar: function(par){
        if (!par){
          par = {
            stringEncode: 0
          };
        };
        par = {
          stringEncode: par.stringEncode || 0
        };
        if (this._stringEncode){
          par.stringEncode += 1;
        };
        if (this._dynamic){
          par.stringEncode -= 1;
        };
        return par;
      }
      
      , setPromise: function(ps){
        var self = this;
        this.promise = ps;
        ps.then(function(res){
          self.replace(res);
        });
      }
      , resolve: function(res){
        this.promise.resolve(res);
      }
      
      , replace: function(res){
        if (typeof res == "string"){
          res = this.newResult({
            codeStr: res
          });
        };
        this.replacement = res;
      }
      
      , getParsed: function(){
        if (this.reference){
          return this.reference;
        };
        var p;
        if (this.preCode){
          p = this.preCode.getParsed();
        };
        if (p){ return p; };
        
        if (this.codeAr){
          var i = 0;
          for (i = 0; i < this.codeAr.length; ++i){
            p = this.codeAr[i].getParsed();
            if (p){ return p; };
          };
        };
        
        if (this.postCode){
          p = this.postCode.getParsed();
        };
        return p;
        
      }
      , setParsed: function(parReference){
        if (parReference){
          this.reference = parReference;
        };
      }
      
      , _getPreCodeStr: function(par){
        par = this._iterPar(par);
        
        var resStr = "";
        var i;
        /*
            pre.pre
            pre.code
            code.pre
            post.pre
        */
        if (this.preCode){
          resStr += this.preCode.getPreCodeStr(par);
          resStr += this.preCode.getCodeStr(par);
        };
        if (this.codeAr){
          for (i = 0; i < this.codeAr.length; ++i){
            resStr += this.codeAr[i].getPreCodeStr(par);
          };
        };
        if (this.postCode){
          resStr += this.postCode.getPreCodeStr(par);
        };
        return resStr;
      }
      , getPreCodeStr: function(par){
        if (this.replacement){
          return this.replacement.getPreCodeStr(par);
        };
        if (this.isStatement || this.isComplete){
          return "";
          
        }else{
          return this._getPreCodeStr(par);
        };
      }
      
      , getCodeStr: function(par){
        if (this.replacement){
          return this.replacement.getCodeStr(par);
        };
        par = this._iterPar(par);
        var resStr = "";
        var i;
        if (this.isStatement || this.isComplete){
          resStr += this._getPreCodeStr(par);
        };
        
        if (this.codeAr){
          for (i = 0; i < this.codeAr.length; ++i){
            resStr += this.codeAr[i].getCodeStr(par);
          };
        }else if (this.codeStr){
          var tempCodeStr = this.codeStr;
          if (par.stringEncode < 0){
            errorFun(undefined, errorMsg.internalNegativeStringEncode);
          };
          for (i = 0; i < par.stringEncode; ++i){
            tempCodeStr = _stringEncodeStr(tempCodeStr);
          };
          resStr += tempCodeStr;
        };
        
        if (this.promiseName){
          resStr += this.promiseName.getCodeStr(par);
        };
        
        if (this.isComplete){
          resStr += this._getPostCodeStr(par);
        };
        
        return resStr;
      }
      
      , _getPostCodeStr: function(par){
        par = this._iterPar(par);
        var resStr = "";
        var i;
        /*
          post.code
          post.post
          code.post
          pre.post
        */
        if (this.postCode){
          resStr += this.postCode.getCodeStr(par);
          resStr += this.postCode.getPostCodeStr(par);
        };
        if (this.codeAr){
          for (i = this.codeAr.length; i; --i){
            resStr += this.codeAr[i - 1].getPostCodeStr(par);
          };
        };
        if (this.preCode){
          resStr += this.preCode.getPostCodeStr(par);
        };
        return resStr;
      }
      , getPostCodeStr: function(par){
        if (this.replacement){
          return this.replacement.getPostCodeStr(par);
        };
        if (this.isComplete){
          return "";

        }else{
          return this._getPostCodeStr(par);
        };
      }
      
      , makePromising: function(){
        if (this.promising){
          return;
        };
        this.promising = true;
      }
      
      , setPromiseName: function(parCode, parReference){
        this.makePromising();
        this.promiseName = this.newResult({
          codeStr: parCode,
          reference: parReference
        });;
        this.hasPromiseName = true;
      }
      , getPromiseName: function(){
        if (this.promising && this.hasPromiseName){
          return this.promiseName;
        };
      }
      , isPromising: function(){
        return this.promising;
      }
      
      
      , addPre: function(parCode, parReference, par){
        if (!parCode){
          return;
        };
        parCode = this._prepCode(parCode, parReference, par);
        if (parCode.promising){
          this.makePromising();
        };
        
        if (!this.preCode){
          this.preCode = this.newResult();
        };
        
        this.preCode.push(parCode, parReference, par);
        
      }
      , addPost: function(parCode, parReference, par){
        if (!parCode){
          return;
        };
        parCode = this._prepCode(parCode, parReference, par);
        if (parCode.promising){
          this.makePromising();
        };
        
        if (!this.postCode){
          this.postCode = this.newResult();
        };
        
        this.postCode.push(parCode, parReference, par);
      }
      
      , setStatement: function(){
        this.isStatement = true;
      }
      , setComplete: function(){
        this.isComplete = true;
      },
      
      newResult: function(par){
        return new _Result({
          cp: this._cp,
          codeStr: par ? par.codeStr : undefined
        });
      },
      
      getType: function(par){
        return this.providesType;
      },
      
      setType: function(par){
        if (this.providesType){
          errorFun({}, errorMsg.multipleTypeProviding);
        };
        if (typeof par == "string"){
          this.providesType = this._cp.getType(par);
          return;
        };
        this.providesType = par;
      }
    };
    
    
    /* internal parser object */
    
    var CodeParser = function(par){
      this.toParse = par.toParse;
      this.dynamicCode = par.dynamicCode;
      this.hashStr = par.hashStr;
      
      // initialization
      if (par._locals){
        for (var i in par._locals){
          this[i] = par._locals[i];
        };
      };
      
      if (par.common){
        this.common = par.common;
      }else{
        this.common = {
          givenNames: {},
          givenTypeNames: {},
          errors: []
        };
      };
      this.errors = this.common.errors;
      
      
      /* initializing type identifiers */
      
      this.types = mixin({}, par.types);
      if (!this.types["var"]){
        this.types["var"] = {
          name: "var",
          "type": classSystem.getBuiltinType("var")
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
            this.result = this.makeCompleteStatement(this.parseProgram(this.toParse));
          }else if (checkIsFunction(this.toParse)){
            this.functionRes = this.parseFunction(this.toParse);
            this.result = this.makeCompleteStatement(this.functionRes);
          };
        };
      };
      
      
      this.makeCompleteStatement = function(par){
        var res = this.newResult();
        res.setComplete();
        res.push(par);
        return res;
        
      };
      
      this.makeCompleteStatementDynamic = function(par){
        var r = this.newResult();
        var d = this.newResult();
        
        d.push(this.makeCompleteStatement(par), undefined, {
          stringEncode: true
        });
        r.push("\"");
        r.push(d);
        r.push("\"");
        return r;
      };
      
      this.compareTypes = function(par1, par2){
        return par1 === par2;
      };
      
      this.localVariables = {};
      
      this.addLocalVariable = function(par, parParsed){
        var self = this;
        var name = identifierName(par.name);
        if (this.localVariables.hasOwnProperty(name)){
          if (!par.type && !par.typename){
            // ok
          }else{
            var newType = par.type || this.getType(par.typename);
            var existing = this._getVariableType(this.localVariables[name]);
            classSystem.definitionPromise(newType).then(function(type1){
              classSystem.definitionPromise(existing).then(function(type2){
                if (!classSystem.isSameType(type1, type2)){
                  self.addError(parParsed, errorMsg.variableRedefinition);
                };
              });
            });
          };
        }else{
          this.localVariables[name] = {
            typename: par.typename,
            type: par.type,
            name: name
          };
          if (!par.typename && !par.type){
            this.localVariables[name].type = this.getProvisionalType(parParsed);
            this.localVariables[name].needsResolving = true;
          };
        };
        
        if (par.parameter){
          this.localVariables[name].parameter = par.parameter;
        };
        if (par.isFunction){
          this.localVariables[name].function = par.function;
        };
        this.variables[name] = this.localVariables[name];
      };
      
      this.resolveFunctionType = function(par, parsed){
        //({name: identifierName(name), type: res.getType()}, par);
        var name = identifierName(par.name);
        var entry = this.localVariables[name];
        if (entry.needsResolving){
          entry.needsResolving = false;
          var t = entry.type;
          entry.type = par.type;
          this.resolveProvisional(t, par.type);
        }else{
          this.addLocalVariable({name: par.name, type: par.type}, parsed);
        };
      };
      
      
      this.getProvisionalType = function(parParsed){
        if (!parParsed){
          debugger;
        };
        var type = classSystem._createProvisionalClass();
        var ps = this.addError(parParsed, errorMsg.unresolvedType);
        classSystem.definitionPromise(type).then(function(){
          ps.resolve();
        });
        return type;
      };
      this.resolveProvisional = function(parType, parResult){
        return classSystem._resolveProvisional(parType, parResult);
      };
      
      this._getVariableType = function(parEntry){
        if(parEntry.type){
          return parEntry.type;
        };
        return this.getType(parEntry.typename);
      };
      
      this.getVariableType = function(parName, par){
        var name = identifierName(parName);
        this._addUsedVariable(name);
        
        if (this.variables.hasOwnProperty(name)){
          var entry = this.variables[name];
          return (this._getVariableType(entry));
        };
        return this.getType("var");
        
        /*if (this.localVariables.hasOwnProperty(name)){
          return this.localVariables[name].type || this.getType(this.localVariables[name].typename);
        };
        
        var ret = this.getProvisionalType();
        
        var self = this;
        this.variablesPromise.then(function(){
          if (self.variables[name]){
            if (self.variables[name].type){
              self.resolveProvisional(ret, self.variables[name].type);
              return;
            };
            self.getType(self.variables[name].typename).then(function(type){
              self.resolveProvisional(ret, type);
            });
          }else{
            self.resolveProvisional(ret, varType);
          };
        });
        
        return ret;*/
      };
      
      /* keeping track of declarations */
      
      /*this.scanVariables = function(par){
        variables = {
          
        };
        var self = this;
        var addVar = function(parName, typename, par){
          var name = identifierName(parName);
          var entry = variables[name];
          if (entry){
            if (entry.typename != typename){
              self.error(par, errorMsg.variableRedefinition);
            };
            return;
          };
          if (self.parameters[name]){
            entry = self.variables[name];
            if (entry){
              if (entry.typename != typename){
                self.error(par, errorMsg.variableRedefinition);
              };
            };
          };
          entry = {
            typename: typename
            , name: name
          };
          variables[name] = entry;
        };
        var addFunction = function(parName, type, par){
          var name = identifierName(parName);
          var entry = variables[name];
          if (entry){
            self.error(par, errorMsg.variableRedefinition);
            return;
          };
          if (self.parameters[name]){
            entry = self.variables[name];
            if (entry){
              self.error(par, errorMsg.variableRedefinition);
            };
          };
          entry = {
            type: type
            , name: name
          };
          variables[name] = entry;
        };
        var findVariables = function(par){
          if (!par || typeof par == "string"){
            return;
          };
          if (par.type == "VariableDeclaration"){
            addVar(identifierName(par.id), identifierName(par.typename), par);
          }else if (par.type == "Class"){
            var ci = self.identifyClass(par);
            if (ci.hasName){
              addVar(par.name, "var", par);
            };
          }else if (checkIsFunction(par)){
            if (par.id && par.type != "MemberFunction"){
              addFunction(par.id, self.getFunctionType(par), par);
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
        
      };*/
      /*this.getVariableType = function(name){
        var entry = this.variables[name];
        if (!entry){
          return this.getType("var");
        };
        if (entry["type"]){
          return entry["type"];
        };
        if (entry.typename){
          return this.getType(entry.typename);
        };
        this.error(name, errorMsg.variableHasNoType);
      };*/
      
      this.usedVariables = {
      };
      
      this._addUsedVariable = function(par){
        this.usedVariables[identifierName(par)] = true;
      };
      
      this._getUsedVairables = function(){
        return this.usedVariables;
      };
      
      
      
      this.functionsAr = [];
      this.addFunction = function(res, name, par){
        this.resolveFunctionType({name: identifierName(name), type: res.getType()}, par);
        this.functionsAr.push(res);
      };
      
      
      
      
      if (par.uniquebasis){
        this.uniquebasis = par.uniquebasis;
      }else{
        this.uniquebasis = {
          index: 1
        };
      };
      
      
      
      this._getErrors = function(parWarning){
        var a = [];
        var i = 0;
        for (i = 0; i < this.errors.length; ++i){
          if (this.errors[i].valid){
            if (parWarning ? this.errors[i].warning : !this.errors[i].warning){
              a.push(this.errors[i]);
            };
          };
        };
        return a;
      };
      this.getWarnings = function(){
        return this._getErrors(true);
      };
      this.getErrors = function(){
        return this._getErrors(false);
      };
      
      this.getWarningFun = function(par){
        var self = this;
        return function(err){
          self.warning(par, err);
        };
      };
      
      this.warning = function(par, err){
        if (!par.line){
          debugger;
        };
        this.addWarning(par, err);
      };
      
      this.error = function(par, err){
        this._addError(par, err);
        errorFun(par, err);
      };
      this.addError = function(par, err){
        return this._addError(par, err);
      };
      this.addWarning = function(par, err){
        return this._addError(par, err, true);
      };
      this._addError = function(par, err, warning){
        var entry = {
          par: par,
          line: par.line,
          column: par.column,
          msg: err.id + ": " + err.msg,
          valid: true,
          warning: warning
        };
        this.errors.push(entry);
        var ps = new Promise();
        ps.then(function(){
          entry.valid = false;
        });
        return ps;
      };
      
      /*
        you can pass a optional promise.
        when the promise gets resolved, the result is replaced with the resolved value
        and the warning gets removed
      */
      this.runtimeError = function(par/*parsed entry*/, par2/*error msg*/){
        var ps = this.addWarning(par, par2);
        
        var res = this.runtimeErrorNoWarning(par2);
        res.setPromise(ps);
        //this.getWarningFun(par)(par2);
        return res;
      };
      
      this.runtimeErrorNoWarning = function(par2){
        var res = this.newResult();
        res.push("(function(){ throw { id:" + par2.id + ", msg: " + stringEncodeStr(par2.msg) + " } })()");
        return res;
      };
      
      
      this.getUniqueName = function(name){
        var retStr = "_V" + this.uniquebasis.index++;
        if (name){
          retStr += "/*" + name + "*/";
        };
        return retStr;
      };
      
      this.getUniqueTypeMacro = function(name){
        var uniqueStr = this.getUniqueName();
        var res = "/*\n'''\"\"\" " + uniqueStr + " " + (name || "") + " start */";
        res += this.runtimeErrorNoWarning(errorMsg.failedToDetermineType);
        res += "/* " + uniqueStr + " " + (name || "") + " end */";
        return res;
      };
      
      this.getVariableName = function(name){
        
        var n = identifierName(name);
        
        if (!this.common.givenNames[n]){
          this.common.givenNames[n] = this.getUniqueName() + "/*" + n + "*/";
        };
        return this.common.givenNames[n];
        
      };
      
      this.renderType = function(parType, parParsed){
        var res = this.newResult();
        res.setType("var");
        var self = this;
        var typeExpression;
        
        var renderTypeName = function(parType1, parType2){
          var i;
          for (i in self.types){
            if (self.types[i]["type"] === parType1 || self.types[i]["type"] === parType2){
              var name = i;
              if (!self.common.givenTypeNames[name]){
                self.common.givenTypeNames[name] = self.getUniqueName() + "/*type:" + name + "*/";
              };
              return self.common.givenTypeNames[name];
            };
          };
          
        };
        
        if (typeof parType == "function"){ // || parType.isDynamic || parType.provisional){
          var errPs = this.addError(parParsed, errorMsg.internalMissingType);
          //res.push(errRes);
          
          classSystem.readyPromise(parType).then(function(resolvedType){
            
            var replace = self.newResult();
            
            var typeExpression = renderTypeName(parType, resolvedType);
            if (typeExpression){
              replace.push(typeExpression);
              res.push(replace);
              errPs.resolve();
              
              return;
            };
            
            // maybe its a function type
            if (classSystem.isFunctionType(resolvedType)){
              var i;
              replace.push("(classSystem.createFunctionType({ \"return\": ");
              replace.push(self.renderType(self.getFunctionReturnType(resolvedType, parParsed), parParsed));
              replace.push(", arguments: [");
              var l = self.getFunctionArgumentCount(resolvedType);
              for (i = 0; i < l; ++i){
                if (i){
                  replace.push(", ");
                };
                replace.push(self.renderType(self.getFunctionArgumentType(resolvedType, i)));
              };
              replace.push("]}))");
              res.push(replace);
              errPs.resolve();
              return;
            };
            
          });
          return res;
          
        }else if (parType.isDynamic){
          typeExpression = renderTypeName(parType, parType);
          if (typeExpression){
            res.push(typeExpression);
          }else{
            res.push(this.addError(parParsed, errorMsg.internalMissingType));
          };
          
        }else{
          var name = identifierName(parType);
          parType = this.getType(name);
          
          typeExpression = renderTypeName(parType, parType);
          if (typeExpression){
            res.push(typeExpression);
          }else{
            res.push(this.addError(parParsed, errorMsg.internalMissingType));
          };
          
        };
        return res;
        
      };
      
      /*this.getTypeName = function(parName, parParsed){
        var name;
        if (typeof parName == "function" || parName.isDynamic || parName.provisional){
          var i;
          for (i in this.types){
            if (this.types[i]["type"] === parName){
              name = i;
              if (!this.common.givenTypeNames[name]){
                this.common.givenTypeNames[name] = this.getUniqueName() + "/*type:" + name + "* /";
              };
              return this.common.givenTypeNames[name];
            };
          };
          // maybe its a function type
          if (classSystem.isFunctionType(parName)){
            var resStr = "(classSystem.createFunctionType)";
            
          };
          this.error(parParsed, errorMsg.internalMissingType);
        }else{
          name = identifierName(parName);
        };
        if (!this.common.givenTypeNames[name]){
          this.common.givenTypeNames[name] = this.getUniqueName() + "/*type:" + name + "* /";
        };
        return this.common.givenTypeNames[name];
        
      };*/
      
      
      // make a new instance of parser for subfunctions etc.
      
      this.newInstance = function(element, extras){
        var param = {
          toParse: element
          , uniquebasis: this.uniquebasis
          , common: this.common
          , hashStr: this.hashStr
          , types: this.types
          , variables: this.variables
          , _locals: {
            inheritedSystem: this.inheritedSystem,
            isClassObject: this.isClassObject
            //parentVariablesPromise: this.variablesPromise
          }
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
        
        if (checkPromising(par)){
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
        
        res.push("var ");
        res.push(this.renderType("var"));
        res.push(" = __classSystem.getBuiltinType(\"var\");\n");
        
        res.push("var " + this.resultNameStr + " = (");
        res.push(this.makeCompleteStatement(functionStatement));
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
        
        this.stack("isFunction");
        this.isFunction = true;
        
        var res = this._parseFunction(par);
        
        this.unstack("isFunction");
        return res;
      };
      
      
      this.getTemplateProperty = function(parTemplate, parProperty, mandatoryType){
        var i = 0;
        for (i; i < parTemplate.properties.length; ++i){
          var p = parTemplate.properties[i];
          if (p.kind == "init" && identifierName(p.key) == parProperty){
            if (mandatoryType){
              if (p.value.type != mandatoryType){
                this.error(p.value, errorMsg.templateSyntaxError);
              };
            };
            return p.value;
          };
        };
      };
      
      /*this.createExtraDynamicType = function(parType, par){
        if (!parType.extraTypes){
          parType.extraTypes = [];
        };
        parType.extraTypes.push(par);
        par.res = this.newResult();
        var name = this.getTypeName(parType) + "::" + par.property;
        this._registerType({
          name: name,
          parent: parType,
          par: par,
          isDynamic: true
        });
        
        res.push("var " + this.getTypeName(name) + " = ");
        
        if (par.property){
          res.push("classSystem.getPropertyType({\"type\":");
          res.push(this.getTypeName(parType));
          res.push(", property: " + stringEncodeStr(par.property));
          res.push("});\n");
          
        }else{
          this.error(errorMsg.internalMissingTypeProperty);
        };
        
        return this.getType(name);
        
      };*/
      
      this.getFunctionType = function(par){
        var isTyped = false;
        var functionTypeParam = {
          "return": this.getType("var"),
          "arguments": []
        };
        if (par.returnTypename){
          isTyped = true;
          functionTypeParam["return"] = this.getType(par.returnTypename);
        };
        
        // parameters
        if (par.params && par.params.length){
          i = 0;
          var l = par.params.length;
          for (i; i < l; ++i){
            var tempTypename = identifierName(par.params[i].typename || "var");
            functionTypeParam["arguments"].push(this.getType(tempTypename));
            if (tempTypename != "var"){
              isTyped = true;
            };
          };
        };
        
        if (isTyped){
          return this.createFunctionType(functionTypeParam);
        };
        return this.getType("var");
      };
      
      this.createFunctionType = function(par){
        var isDynamic = false;
        if (par["return"].isDynamic){
          isDynamic = true;
        };
        var i = 0;
        for (i = 0; i < par["arguments"].length; ++i){
          if (par["arguments"][i].isDynamic){
            isDynamic = true;
          };
        };
        if (isDynamic){
          debugger;
        }else{
          return classSystem.createFunctionType(par);
        };
      };


      this._parseFunction = function(par, parGivenPromiseNameStr){
        
        // check for hints
        var hasFrameInfo = false;
        var runRemote = false;
        var runExclusive = false;
        var i = 0;
        var typename;
        
        var funClosure;
        
        var self = this;
        
        // has it a name?
        var hasName = false;
        var nameStr;
        if (par.id){
          nameStr = identifierName(par.id);
          hasName = true;
        };
        
        // if this is a member function, we can call inherited
        // but only within this function!
        this.stack("inheritedAvailable");
        this.stack("thisType");
        if (this.isClassObject){
          this.inheritedAvailable = true;
          this.thisType = this.inheritedSystem.type || this.getType("var");
          
        }else{
          this.inheritedAvailable = false;
          this.thisType = this.getType("var");
          
        };
        
        
        this.stack("isClassObject");
        this.isClassObject = false;
        
        
        /* -------------------------------------------------------------------------
            return Type
        */
        
        if (par.returnTypename){
          this._returnType = this.getType(par.returnTypename);
        };
        
        
        /* -------------------------------------------------------------------------
            frame Information
        */
        
        if (par.frame && par.frame.name){
          hasFrameInfo = true;
          if (par.frame.type == "frame"){
            runRemote = true;
            par.promising = true;
            if (this.dynamicCode){
              this.error(par, errorMsg.functionFrameInDynamicCode);
            };
          }else if (par.frame.type == "exclusive"){
            runExclusive = true;
          };
        };
        
        /* -------------------------------------------------------------------------
            template
        */
        
        var templateTypesAr = [];
        
        // identify template
        if (par.template && par.template.properties.length){
          var templateTypes = this.getTemplateProperty(par.template, "types", "ObjectExpression");
          if (templateTypes){
            var typeVarInit = this.newResult();
            for (i = 0; i < templateTypes.properties.length; ++i){
              var p = templateTypes.properties[i];
              typename = identifierName(p.key);
              
              this.addType({name: typename, dynamic: true}, p.value);
              if (!funClosure){
                funClosure = this.newResult();
                funClosure.push("(function(){");
              };
              
              //this._addTypeDeclaration(typename, this.getConstructorName(typename));
              typeVarInit.push("var ");
              typeVarInit.push(this.renderType(typename));
              typeVarInit.push(" = ");
              typeVarInit.push(this.expectTypeVar(this.parseExpression(p.value)));
              typeVarInit.push(";\n");
              typeVarInit.push("var " + this.getVariableName(typename) + " = ");
              typeVarInit.push(this.renderType(typename));
              typeVarInit.push("\n;");
              typeVarInit.push("var " + this.getConstructorName(typename) + " = classSystem.getTypeConstructor(");
              typeVarInit.push(this.renderType(typename));
              typeVarInit.push(");\n");
              templateTypesAr.push(typename);
              
              funClosure.push(typeVarInit);
            };
          };
        };
        if (funClosure){
          funClosure.push("var communicator = {fun: undefined};\n");
          funClosure.push("eval(\"communicator.fun = ");
        };
        
        // main result
        var res = this.newResult(); 
        
        
        /* -------------------------------------------------------------------------
            the function
        */
        
        // function result
        var funRes = this.newResult();
        
        
        // function keyword and parameters
        i = 0;
        funRes.push("function");
        if (hasName){
          this.functionName = nameStr; //this.getVariableName(nameStr);
        };
        if (hasName && !runRemote){
          funRes.push(" " + this.getVariableName(nameStr));
        };
        
        // parameters
        funRes.push("("); // function start
        if (par.params && par.params.length){
          i = 0;
          var l = par.params.length;
          for (i; i < l; ++i){
            if (i){
              funRes.push(", ");
            };
            funRes.push(this.getVariableName(identifierName(par.params[i].name)));
            this.addLocalVariable({name: par.params[i].name, typename: par.params[i].typename || "var", parameter: true}, par.params[i]);
          };
        };
        funRes.push("){\n");
        
        var classesRes = this.findClasses(par.body); // scan for classes
        this.findVariables(par.body);                // scan for variables - must happen after findClasses
        
        
        // exclusive hint
        if (runExclusive){
          funRes.push("if (!promiseland.profileHas(\"" + identifierName(par.frame.name) + "\")){\n");
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
        var b = par.body;
        b.brackets = false;
        if (par.promising){
          b.postCode = this.newResult(this.returnPromise + ".resolve(); return;");
        };
        var block = this.blockCreator(b);
        
        
        for (i in this.localVariables){
          var varname = i;
          funRes.push("var " + this.getVariableName(varname) + ";\n");
          this.usedVariables[varname] = false;
        };
        
        if (this.usedVariables["arguments"]){
          funRes.push("var " + this.getVariableName("arguments") + " = arguments;\n");
          this.usedVariables["arguments"] = false;
        };
        for(i = 0; i < this.functionsAr.length; ++i){
          funRes.push(this.functionsAr[i]);
          funRes.push(";\n");
        };
        
        // defined types
        funRes.push(classesRes);
        
        
        if (par.promising){
          // in front of the function
          if (this.usingThis){
            funRes.push("var " + this.thisExpression + " = this;\n");
          };
          funRes.push(this.tryCatchFunctionStr + "(function(){");
        };
        
        
        funRes.push(block);
        
        // promising additions
        if (par.promising){
          funRes.addPost("})();\n");
          funRes.addPost("return " + this.returnPromise + ";\n");
          funRes.addPost("}"); // function end
        }else{
          funRes.push("}"); // function end
        };
        
        var completeFun = this.makeCompleteStatement(funRes);
        
        if (funClosure){
          /*
            putting the template together
          */
          var handleExtras = function(dt){
            if (dt.extraTypes){
              var i = 0;
              for (i = 0; i < dt.extraTypes; ++i){
                funClosure.push(dt.extraTypes[i].res);
                handleExtras(dt.extraTypes[i]);
              };
            };
          };
          for (i = 0; i < templateTypesAr.length; ++i){
            var dt = this.getType(templateTypesAr[i]);
            handleExtras(dt);
          };
          
          funClosure.push(completeFun, par, {
            stringEncode: true
          });
          funClosure.push(";\"); return communicator.fun; })()");
          completeFun = this.makeCompleteStatement(funClosure);
        };
        
        // remote execution check
        var uniqueNameStr;
        if (runRemote){
          uniqueNameStr = this.getUniqueName();
          res.addPre("var " + uniqueNameStr + " = ");
          res.addPre(completeFun);
          res.addPre(";\npromiseland.registerRemote(\"" + identifierName(par.frame.name) + "\", \"" + this.getModuleHashStr() + "\", \"" + uniqueNameStr + "\", " + uniqueNameStr + ");\n");
          res.push("function");
          if (hasName){
            res.push(" " + this.getVariableName(nameStr));
          };
          res.push("(){"); // function start
          res.push("if (promiseland.profileHas(\"" + identifierName(par.frame.name) + "\")){\n");
          res.push("return " + uniqueNameStr + ".apply(this, arguments);\n");
          res.push("}else{\n");
          res.push("return promiseland.remoteExec(\"" + this.getModuleHashStr() + "\", \"" + uniqueNameStr + "\", arguments);\n");
          res.push("};\n");
          res.push("}"); // end of function
        }else{
          res.push(completeFun);
        };
        
        res.setType(this.getFunctionType(par));
        
        this.unstack("isClassObject");
        this.unstack("inheritedAvailable");
        this.unstack("thisType");
        return res;
      };
      
      /*
        this
      */
      this.expThisExpression = function(par){
        var res = this.newResult();
        if (!this.promising){
          res.push("this");
        }else{
          if (!this.usingThis){
            this.usingThis = true;
            this.thisExpression = this.getUniqueName("this");
          };
          res.push(this.thisExpression);
        };
        res.setType(this.thisType);
        return res;
      };
      
      
      /* 
        there are different ways to define a class
      */
      
      this.identifyClass = function(par){
        var r = {};
        var name;
        if (par.name){
          name = identifierName(par.name);
        }
        r.hasName = name && name.length;
        
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
      
      
      
      
      
      
      /*
        collect all the typed class information
      */
      this.findClasses = function(par, res){
        if (!res){
          res = this.newResult();
        };
        
        if (!par || typeof par == "string"){
          return res;
        };
        if (checkIsFunction(par)){
          return res;
        };
        
        if (par.type == "Class"){
          var ci = this.identifyClass(par);
          if (ci.isTyped){
            // found a typed class
            if (par.body.literal){
              if (ci.hasName){
                var name = identifierName(par.name);
                this.addType({name: name}, par);
                res.push("var ");
                res.push(this.renderType(name));
                res.push(" = classSystem._createProvisionalClass();\n");
                res.push(this.getVariableName(name) + " = ");
                res.push(this.renderType(name));
                res.push(";\n");
                res.push("var " + this.getConstructorName(name) + " = undefined;");
                res.push("classSystem.readyPromise(");
                res.push(this.renderType(name));
                res.push(").then(function(parType){");
                res.push(this.renderType(name));
                res.push(" = parType;");
                res.push(this.getConstructorName(name) + " = classSystem.getTypeConstructor(");
                res.push(this.renderType(name));
                res.push(");");
                res.push("});");
                
              };
            };
          };
          return res;
        };
        var i;
        for (i in par){
          this.findClasses(par[i], res);
        };
        return res;
      };
      
      
      /*
        find all localy defined variables
      */
      this.findVariables = function(par){
        var self = this;
        
        if (!par || typeof par == "string"){
          return;
        };
        if (par.type == "VariableDeclaration"){
          this.addLocalVariable({name: identifierName(par.id), typename: identifierName(par.typename)}, par);
        }else if (par.type == "Class"){
          var ci = self.identifyClass(par);
          if (ci.hasName){
            this.addLocalVariable({name: identifierName(par.name), typename: "var"}, par);
          };
          return;
        }else if (checkIsFunction(par)){
          if (par.id && par.type != "MemberFunction"){
            this.addLocalVariable({name: identifierName(par.id), isFunction: true}, par);
          };
          return;
        };
        var i;
        for (i in par){
          if (i == "_extrainfo"){
            continue;
          };
          this.findVariables(par[i]);
        };
        
        
      };
      
      
      
      /* 
      
        building block of the dynamic type checking
        
      */
      
      this.expClassStatement = function(par){
        var res = this.newResult();
        
        var classRes = this.newResult();
        
        var ci = this.identifyClass(par);
        
        var hasName = ci.hasName;
        var name;
        if (hasName){
          name = identifierName(par.name);
        };
        
        var isTyped = ci.isTyped;
        var extendsClause = par.extendsClause;
        var syncClause = ci.syncClause;
        
        var resultType = this.getType("var");
        
        this.stack("inheritedSystem");
        this.inheritedSystem = this.newInherited();
        
        
        if (isTyped){
          classRes.push("classSystem.createClass(");
          if (par.body.literal){
            
            if (hasName){
              this.inheritedSystem.type = this.getType(name);
            };
            
            this.stack("isClassObject");
            this.isClassObject = true;
            
            var literal = this.createClassLiteral(par.body.literal);
            classRes.push(this.stringifyClassLiteral(literal));
            classRes.push(", ");
            classRes.push(this.createClassDefaults(par.body.literal));
            
            this.unstack("isClassObject");
            
            if (hasName){
              //resultType = this.getType(par.name);
              
              var type = this.createType({
                name: name, 
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
          var inheritedObjName = this.getUniqueName("inherited");
          
          classRes.push("(function(){");
          classRes.push("var " + inheritedObjName + " = {};\n");
          
          var tempRes = this.newResult();
          
          tempRes.push("var res = promiseland.createClass(");
          if (par.body.literal){
            tempRes.push(this.expectTypeVar(this.parseExpression(par.body.literal)));
            
          }else{
            tempRes.push(this.expectTypeVar(this.parseExpression(par.body.expression)));
            
          };
          tempRes.push(", [");
          var baseClasses = (extendsClause && extendsClause.baseClasses) || [];
          var i = 0;
          for (i = 0; i < baseClasses.length; ++i){
            if (i){
              tempRes.push(", ");
            };
            tempRes.push(this.expectTypeVar(this.parseExpression(baseClasses[i])));
          };
          tempRes.push("], ");
          tempRes.push(inheritedObjName);
          tempRes.push(");");
          
          
          classRes.push(tempRes);
          classRes.push("\n");
          
          var used = this.inheritedSystem.used;
          var u;
          for (u in used){
            classRes.push("var " + used[u] + " = " + inheritedObjName + "[" + stringEncodeStr(u) + "];\n");
          };
          
          classRes.push("return res; })()");
        };
        
        
        // named classes are variables
        if (hasName){
          if (isTyped){
            
            res.addPre(this._resolveClassCode({
              name: par.name,
              classRes: classRes,
              parsed: par
            }));
            
          }else{
            res.addPre(this.getVariableName(par.name) + " = ");
            res.addPre(classRes);
            res.addPre(";");
            
          };
          res.push(this.getVariableName(par.name));
          
        }else{
          res.push(classRes);
          
        };
        
        res.setType(resultType);
        
        this.unstack("inheritedSystem");
        
        return res;
      };
      
      this._resolveClassCode = function(par){
        var parsed = par.parsed;
        var res = this.newResult();
        res.push("classSystem._resolveProvisional(", parsed);
        res.push(this.renderType(par.name), parsed);
        res.push(", ", parsed);
        res.push(par.classRes, parsed);
        res.push(");", parsed);
        return res;
      };
      
      
      this.createClassLiteral = function(par, parOnlyTypes){
        ret = {
          members: [],
          "extends": [],
          hasFreePart: true,
          parsed: par
        };
        
        var i = 0;
        var l = (par.properties && par.properties.length) || 0;
        for (i; i < l; ++i){
          var prop = par.properties[i];
          var defaultValue;
          var type;
          if (prop.kind == "init"){
            type = prop.typename ? this.getType(prop.typename) : undefined;
            if (prop.value){
              if (type){
                defaultValue = this.parseAsType(type, prop.value);
              }else{
                defaultValue = this.parseExpression(prop.value);
                type = defaultValue.getType();
              };
            };
            if (!type){
              type = this.getType("var");
            };
            
            ret.members.push({
              name: identifierName(prop.key),
              "type": type,
              "defaultValue": defaultValue
            });
            
          }else if (prop.kind == "function"){
            var name = identifierName(prop.id);
            prop.id = undefined;
            
            defaultValue = this.parseExpression(prop.value);
            
            type = defaultValue.getType;
            
            ret.members.push({
              name: name,
              "type": type,
              "defaultValue": defaultValue
            });
            
          }else{
            this.error(prop, errorMsg.unknownPropertyAssignmentType);
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
          res.push(",\"type\":");
          res.push(this.renderType(m["type"], par.parsed));
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
        var comma;
        for (i; i < l; ++i){
          var prop = par.properties[i];
          if (prop.kind == "init"){
            if (comma){
              res.push(", ");
            };
            res.push(stringEncodeStr(identifierName(prop.key)) + ": ");
            if (prop.value){
              res.push(this.parseExpression(prop.value));
            }else{
              res.push("undefined");
            };
            comma = true;
          };
        };
        
        res.push("}");
        
        return res;
      };
      
      
      /* 
        class registry
      */
      
      this.addType = function(par, parParsed){
        var name = identifierName(par.name);
        if (this.types.hasOwnProperty[name]){
          this.error(parParsed, errorMsg.typeExists);
        };
        
        var type;
        if (par.dynamic){
          type = {
            isDynamic: true
          };
        }else{
          type = this.getProvisionalType(parParsed);
        };
        this.types[name] = {
          name: name,
          "type": type,
          isDynamic: type.isDynamic
        };
        
      };
      
      this.createType = function(par){
        var name = identifierName(par.name);
        var entry = this._getTypeEntry(par.name);
        if (entry.type.isDynamic){
          this.error(par.par, errorMsg.dynamicTypeCantBeDefined);
        };
        if (entry.isDefined){
          this.error(par.par, errorMsg.typeRedefinition);
        };
        var type = classSystem.createClass(par.literal, {});
        var provisional = entry.type;
        entry.type = type;
        try{
          this.resolveProvisional(provisional, type);
        }catch(e){
          this.error(par.par, errorMsg.typeRedefinition);
        };
        entry.isDefined = true;
      };
      
      this._getTypeEntry = function(parName, par){
        var name = identifierName(parName);
        var throwError = true;
        if (par && par.dontThrow){
          throwError = false;
        };
        if (this.types.hasOwnProperty(name)){
          return this.types[name];
        };
        if (!throwError){
          return;
        };
        this.error(parName, errorMsg.typeUndeclared, {
          name: name
        });
      };
      this.getType = function(parName, par){
        var entry = this._getTypeEntry(parName, par);
        if (entry){
          return entry["type"];
        };
      };
      
      this.getReturnType = function(){
        if (this._returnType){
          return this._returnType;
        };
        return this.getType("var");
      };
      
      this.localClassConstructors = {};
      
      this.getConstructorName = function(parName){
        var name = identifierName(parName);
        if (this.types.hasOwnProperty(name)){
          var t = this.types[name];
          if (!t.constructorName){
            t.constructorName = this.getUniqueName(name + "-constructor");
            if (!t.isDynamic){
              this.localClassConstructors[name] = t.constructorName;
            };
          };
          return t.constructorName;
        };
        this.error(parName, errorMsg.typeUndeclared, {
          name: name
        });
      };

      
      
      // try catch / finally (why do we need finally?)
      this.expTryStatement = function(par){
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
          res.addPre("var " + this.tryCatchFunctionStr + " = function(code){ return function(res){ try{code(res);}catch(e){ " + catchPromise + ".resolve(e); }; }; };\n");
          
          this.catchFunctionStr = this.getUniqueName();
          res.addPre("var " + this.catchFunctionStr + " = function(e){ " + catchPromise + ".resolve(e); };\n");
          
          res.push(this.tryCatchFunctionStr + "(function()");
          
        }else{
          res.push("try\n");
        };
        
        var b = par.block;
        b.brackets = true;
        if (checkPromising(par)){
          b.postCode = this.newResult(continuePromise + ".resolve()");
        };
        res.push(this.makeCompleteStatement(this.blockCreator(b)));
        
        // catch part
        if (checkPromising(par)){
          this.unstack("tryCatchFunctionStr");
          this.unstack("catchFunctionStr");
          res.push(")();\n");
          res.push(catchPromise + ".then(" + this.tryCatchFunctionStr + "(function(");
        }else{
          
          res.push("catch(");
        };
        
        if (par.handler.param){
          res.push(identifierName(par.handler.param));
        };
        res.push(")");
        
        b = par.handler.body;
        b.brackets = true;
        if (checkPromising(par)){
          b.postCode = this.newResult(continuePromise + ".resolve();");
        };
        res.push(this.makeCompleteStatement(this.blockCreator(b)));
        
        if (checkPromising(par)){
          res.push("));\n");
          
          res.push(continuePromise);
          res.push(".then(" + this.tryCatchFunctionStr + "(function(){");
          
          res.addPost("}), " + this.catchFunctionStr + ")");
        };
        
        if (par.finally){
          res.push("finally");
          b = par.finally;
          b.brackers = true;
          res.push(this.makeCompleteStatement(this.blockCreator(b)));
        };
        res.setType(statementType);
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
      
      
      this.expBlockStatement = function(par){
        var res = this.newResult();
        par.brackets = true;
        res.pushType(this.blockCreator(par));
        return res;
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
      
      this.blockCreator = function(par){
        var res = this.newResult();
        res.setType(statementType);
        
        if (par.brackets){
          res.push("{");
        };
        
        var blockRes = this.newResult();
        
        var sAr = [];
        if (par instanceof Array){
          sAr = par;
        }else{
          if(par["type"] == "BlockStatement"){
            sAr = par.body;
          }else{
            sAr.push(this.parseExpression(par));
          };
        };
        
        if (par.preCode){
          blockRes.push(this.makeStatement(par.preCode));
        };
        
        var i = 0;
        var l = sAr.length;
        for (i; i < l; ++i){
          blockRes.push(this.makeStatement(this.parseExpression(sAr[i])));
        };
        
        if (par.postCode){
          blockRes.push(this.makeStatement(par.postCode));
        };
        
        res.push(this.makeCompleteStatement(blockRes));
        
        if (par.brackets){
          res.push("}");
        };
        
        return res;
      };
      
      
      
      
      this.parseExpression = function(par){
        var res = this._parseExpression(par);
        if (!res.getType()){
          this.error(par, errorMsg.internalMissingResultType);
        };
        res.setParsed(par);
        return res;
      };
      
      this._parseExpression = function(value){
        var res;
        
        switch(value.type){
          case "ArrayExpression":
            return this.expArrayExpression(value);
            
          case "AssignmentExpression":
            return this.expAssignmentExpression(value);

          case "BinaryExpression":
            return this.expBinaryExpression(value);
            
          case "CallExpression":
            return this.expCallExpression(value);
            
          case "Class":
            return this.expClassStatement(value);
            
          case "ClassObjectExpression":
            return this.expClassObjectExpression(value);
            
          case "ConditionalExpression":
            return this.conditionalExpression(value);
            
          case "DebuggerStatement":
            return this.expDebuggerStatement(value);

          case "EmptyStatement":
            // why does this exist?
            res = this.newResult();
            res.setType("var");
            return res;

          case "ExpressionStatement":
            return this.expExpressionStatement(value);
            
          case "ForInStatement":
            return this.expForInStatement(value);
            
          case "ForStatement":
            return this.expForStatement(value);
            
          case "FunctionExpression":
            return this.expFunctionExpression(value);
          case "FunctionDeclaration":
            return this.expFunctionDeclaration(value);
          case "MemberFunction":
            return this.expMemberFunction(value);
            
          case "Identifier":
            return this.expIdentifier(value);
            
          case "IfStatement":
            return this.expIfStatement(value);
            
          case "InheritedExpression":
            return this.expInheritedExpression(value);
            
          case "Literal":
            return this.expLiteral(value);
            
          case "MemberExpression":
            return this.expMemberExpression(value);
            
          case "NewExpression":
            return this.expNewExpression(value);
            
          case "ObjectExpression":
            return this.expObjectExpression(value);

          case "ReturnStatement":
            return this.expReturnStatement(value);

          case "ThisExpression":
            return this.expThisExpression(value);
            
          case "TryStatement":
            return this.expTryStatement(value);
            
          case "UnaryExpression":
            if (value.operator == "*"){
              return this.expPromiseExpression(value.argument);
            };
            if (value.operator == "require"){
              return this.expRequireExpression(value.argument);
            };
            res = this.newResult();
            res.push(value.operator);
            res.pushType(this.expectTypeVar(this.parseExpression(value.argument)));
            return res;
            
          case "UpdateExpression":
            return this.expUpdateExpression(value);

          case "VariableStatement":
            return this.expVariableStatement(value);
            
          case "VariableDeclaration":
            return this.expVariableDeclaration(value);
            
          case "WhileStatement":
            return this.whileStatement(value);
            
          default:
            this.error(value, errorMsg.unknownType);
        };
        return "/*this should not happen*/";
      };
      
      this.expExpressionStatement = function(par){
        var res = this.newResult();
        res.push(this._parseExpression(par.expression));
        res.push(";");
        res.setType(statementType);
        return res;
      };
      
      this.expDebuggerStatement = function(par){
        var res = this.newResult();
        res.push("debugger");
        res.setType(statementType);
        return res;
      };
      
      // the function statement
      this.expFunctionExpression = function(value){
        var cp = this.newInstance(value, {dynamicCode: this.dynamicCode || this.isFunction});
        var funName = cp.getFunctionName();
        var funRes = cp.getFunctionRes();
        
        // collect used variables from parsed function
        var uv = cp._getUsedVairables();
        var name;
        for (name in uv){
          if (uv[name] === true){
            this._addUsedVariable(name);
          };
        };
        
        if (funName && funRes){
          
          this.addFunction(funRes, funName);
          var res = this.newResult(this.getVariableName(funName));
          res.setType(funRes.getType());
          return res;
        };
        
        return funRes || cp.getResult();
        
      };
      this.expFunctionDeclaration = function(value){
        return this.expFunctionExpression(value);
      };
      this.expMemberFunction = function(value){
        value.id = undefined;
        return this.expFunctionExpression(value);
      };
      
      
      this.expUpdateExpression = function(par){
        var res = this.newResult();
        //{type: "UpdateExpression", operator: "++", argument: Object}
        if (par.prefix){
          res.push(par.operator);
        };
        res.pushType(this.expectTypeVar(this.parseExpression(par.argument)));
        if (!par.prefix){
          res.push(par.operator);
        };
        
        return res;
      };
      
      this.expIdentifier = function(par){
        return this.getVariable(identifierName(par.name));
      };
      
      this.expLiteral = function(par){
        var res = this.newResult();
        switch (typeof par.value){
          case "string":
            res.push(stringEncodeStr(par.value));
            break;
          case "number":
            res.push("" + par.value);
            break;
          case "boolean":
            if (par.value){
              res.push("true");
            }else{
              res.push("false");
            };
            break;
          default:
            this.error(par, errorMsg.internalUnknownLiteralType);
        };
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
        res.addPre(res.getPromiseName());
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
        
        res.addPre(this.makeCompleteStatement(tempRes));
        
        res.addPre(this.tryCatchFunctionStr + "(function(");
        res.addPre(res.getPromiseName());
        res.addPre("){");
        
        res.addPost("}));"); // trycatch) then)
        res.setType("var");
        return res;
      };
      
      
      this.expNewExpression = function(par){
        //{type: "NewExpression", callee: Object, arguments: Array[0]}
        var res = this.newResult();
        var typed = false;
        if (par.callee && par.callee.type == "Identifier"){
          var t = this.getType(identifierName(par.callee), { dontThrow: true });
          if (t){
            res.push("new ");
            res.push(this.getConstructorName(par.callee));
            res.push("(");
            typed = true;
            res.setType(t);
          };
        };
        if (!typed){
          res.push("new ");
          res.push(this.expectTypeVar(this.parseExpression(par.callee)));
          res.push("(");
        };
        var i = 0;
        for (i; i < par["arguments"].length; ++i){
          if (i){
            res.push(", ");
          };
          res.push(this.expectTypeVar(this.parseExpression(par["arguments"][i])));
        };
        res.push(")");
        if (!typed){
          res.setType("var");
        };
        return res;
        
      };
      
      
      
      
      
      
      this.breakOrContinuePromise = function(par){
        var res = this.newResult();
        res.makePromising();
        
        
        var promiseName = par.promiseName || this.getUniqueName();
        res.setPromiseName(promiseName);
        
        this.stack("breakCode");
        this.stack("continueCode");
        this.breakCode = promiseName + ".resolve(false); return " + promiseName + ";\n";
        this.continueCode = promiseName + ".resolve(true); return " + promiseName + ";\n";
        
        res.push("var " + promiseName + " = " + newPromiseStr() + ";\n");
        
        var outerBlock = this.newResult();
        
        if (par.preCondition){
          outerBlock.push("if(");
          outerBlock.push(par.preCondition);
          outerBlock.push("){");
        };
        
        //createBlock
        var b = par.block;
        b.postCode = this.newResult(this.continueCode);
        b.brackets = false;
        var block = this.blockCreator(b);
        
        
        outerBlock.push(this.makeCompleteStatement(block));
        
        if (par.preCondition){
          outerBlock.push("}else{");
          outerBlock.push(this.breakCode);
          outerBlock.push("};\n");
        };
        
        res.push(this.makeCompleteStatement(outerBlock));
        
        this.unstack("breakCode");
        this.unstack("continueCode");
        
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
        res.push(this.makeStatement(this.makeCompleteStatement(loopCode)));
        
        res.push("return ");
        res.push(loopCode.getPromiseName());
        res.push(";\n");
        
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
        res.push(this.makeCompleteStatement(doFunStatement));
        
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
      
      
      this.expForStatement = function(par){
        //{type: "ForStatement", init: Object, test: Object, update: Object, body: Object}
        
        this.stack("dynamicCode");
        this.dynamicCode = true;
        
        var res = this.newResult();
        var statement;
        
        var promising = false;
        if (checkPromising(par.test) || checkPromising(par.update) || checkPromising(par.body)){
          promising = true;
        };
        
        if (promising){
          res.push(this.makeStatement(this.parseExpression(par.init)));
          
          this.stack("algorithmicCode");
          this.algorithmicCode = true;
          
          res.push(this.generateLoop({
            block: par.body
            , preCondition: this.parseExpression(par.test)
            , postCode: this.parseExpression(par.update)
          }));
          
          this.unstack("algorithmicCode");
          
        }else{
          res.push("for(");
          res.push(this.parseExpression(par.init));
          res.push(";");
          res.push(this.parseExpression(par.test));
          res.push(";");
          res.push(this.parseExpression(par.update));
          res.push("){");
          
          this.stack("algorithmicCode");
          this.algorithmicCode = true;
          
          statement = this.newResult();
          statement.push(this.expBlockStatement(par.body));
          res.push(this.makeCompleteStatement(statement));
          
          this.unstack("algorithmicCode");
          
          res.push("}");
        };
        
        this.unstack("dynamicCode");
        res.setType(statementType);
        return res;
      };
      
      
      this.expForInStatement = function(par){
        // {type: "ForInStatement", iterator: Object, collection: Object, statement: Object}
        this.stack("dynamicCode");
        this.dynamicCode = true;
        
        this.stack("algorithmicCode");
        this.algorithmicCode = true;
        
        var res = this.newResult();
        var statement;
        
        var promising = false;
        if (checkPromising(par.body)){
          promising = true;
        };
        
        if (promising){
          var iteratorRes = this.expectTypeVar(this.parseExpression(par.left));
          var iteratorAccess = iteratorRes;
          if (iteratorRes.promising){
            iteratorAccess = iteratorRes.getPromiseName();
          };
          
          var arrayName = this.getUniqueName();
          res.addPre("var " + arrayName + " = [];");
          
          res.push("for(");
          res.push(iteratorRes);
          res.push(" in ");
          res.push(this.expectTypeVar(this.parseExpression(par.right)));
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
            block: par.body
            , preCondition: conditionRes
            , postCode: postCodeRes
          }));
          
          res.push("}");
          
        }else{
          res.push("for(");
          res.push(this.expectTypeVar(this.parseExpression(par.left)));
          res.push(" in ");
          res.push(this.expectTypeVar(this.parseExpression(par.right)));
          res.push(")");
          
          statement = this.newResult();
          
          var b = par.body;
          b.brackets = true;
          this.blockCreator(b);
          statement.push(this.blockCreator(b));
          res.push(this.makeCompleteStatement(statement));
          
        };
        
        this.unstack("dynamicCode");
        this.unstack("algorithmicCode");
        res.setType(statementType);
        return res;
        
      };
      
      
      this.whileStatement = function(par){
        //{type: "WhileStatement", condition: Object, statement: Object}
        
        this.stack("dynamicCode");
        this.dynamicCode = true;
        
        this.stack("algorithmicCode");
        this.algorithmicCode = true;
        
        var res = this.newResult();
        
        var statements;
        var condition = this.expectTypeVar(this.parseExpression(par.test));
        if (checkPromising(condition) || checkPromising(par.body)){
          
          res.push(this.generateLoop({
            block: par.body
            , preCondition: condition
          }));
          
        }else{
          res.push("while(");
          res.push(condition);
          res.push("){\n");
          res.push(this.makeCompleteStatement(this.parseExpression(par.body)));
          res.push("}");
          
        };
        
        this.unstack("dynamicCode");
        this.unstack("algorithmicCode");
        res.setType(statementType);
        return res;
      };
      
      
      this.expIfStatement = function(par){
        //{type: "IfStatement", test: Object, consequet: Object, alternate: null}
        
        this.stack("conditionalCode");
        this.conditionalCode = true;
        
        this.stack("algorithmicCode");
        this.algorithmicCode = true;
        
        var res = this.newResult();
        
        var promising = false;
        
        
        if (par.consequent && checkPromising(par.consequent)){
          promising = true;
        };
        if (par.alternate && checkPromising(par.alternate)){
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
        res.push(this.expectTypeVar(this.parseExpression(par.test)));
        res.push("){\n");
        if (!par.consequent || par.consequent.type != "BlockStatement"){
          this.error(par, errorMsg.unknownIfStatement);
        };
        var statement = this.newResult();
        var b = par.consequent.body;
        b.brackets = false;
        if (promising){
          b.postCode = this.newResult(continueCode);
        };
        statement.push(this.blockCreator(b));
        
        res.push(this.makeCompleteStatement(statement));
        if (par.alternate){
          res.push("\n}else{\n");
          if (par.alternate.type != "BlockStatement"){
            this.error(par, errorMsg.unknownElseStatement);
            return "";
          };
          statement = this.newResult();
          b = par.alternate.body;
          b.brackets = false;
          if (promising){
            b.postCode = this.newResult(continueCode);
          };
          statement.push(this.blockCreator(b));
          
          res.push(this.makeCompleteStatement(statement));
        }else if (promising){
          res.push("\n}else{\n");
          statement = this.newResult();
          statement.push(continueCode);
          res.push(this.makeCompleteStatement(statement));
        };
        res.push("}");
        if (promising){
          res.push("; " + continuePromise + ".then(function(){");
          res.addPost("});");
        };
        
        this.unstack("conditionalCode");
        this.unstack("algorithmicCode");
        res.setType(statementType);
        
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
          res.addPre(this.makeCompleteStatement(trueExtraCode));
          res.addPre("}else{");
          var falseExtraCode = this.newResult();
          falseExtraCode.push(tempPromise);
          falseExtraCode.push(".resolve(");
          falseExtraCode.push(this.parseExpression(par.falseExpression));
          falseExtraCode.push(");\n");
          res.addPre(this.makeCompleteStatement(falseExtraCode));
          res.addPre("};\n");
          res.addPre(tempPromise);
          res.addPre(".then(");
          res.setPromiseName(this.getUniqueName());
          res.addPre(res.getPromiseName());
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
      this.expBinaryExpression = function(par){
        var res = this.newResult();
        
        var left = this.parseExpression(par.left);
        var right = this.parseExpression(par.right);
        
        res.setType("var");
        
        if (par.operator == "||" && par.right.promising){
          var ltype = left.getType();
          var rtype = right.getType();
          if (ltype !== this.getType("var") || rtype !== this.getType("var")){
            this.error(par, errorMsg.notImplemented);
          };
          
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
          res.addPre(left);
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
          rightExtraCode.push(right);
          rightExtraCode.push(");\n");
          res.addPre(this.makeCompleteStatement(rightExtraCode));
          res.addPre("};\n");
          res.addPre(tempPromise);
          res.addPre(".then(");
          res.setPromiseName(this.getUniqueName());
          res.addPre(res.getPromiseName());
          res.addPre("){");
          res.addPost("});");
          
        }else{
          
          res.push(this.getBinaryExpressionCode({
            left: left,
            right: right,
            operator: par.operator
            , errorFun: this.getWarningFun(par)
          }));
          
        };
        return res;
        
      };
      
      
      this.expMemberExpression = function(par){
        var res = this.newResult();
        var base = this.parseExpression(par.object);
        
        res.pushType(this.getGetPropertyCode({
          instance: base,
          property: par.computed ? undefined : identifierName(par.property),
          propertyValue: par.computed ? this.expectTypeVar(this.parseExpression(par.property)) : undefined
          , errorFun: this.getWarningFun(par)
        }));
        
        return res;
      };
      
      
      this.newInherited = function(){
        return new InheritedSystem(this);
      };
      
      var InheritedSystem = function(par){
        this.instance = par;
        this.used = {};
      };
      InheritedSystem.prototype = {
        setCurrent: function(par){
          this.currentMember = par;
        },
        getCurrent: function(){
          if (!this.used[this.currentMember]){
            this.used[this.currentMember] = this.instance.getUniqueName("inherited " + this.currentMember);
          };
          return this.used[this.currentMember];
        }
      };
      
      /*
        {
          ["name": value]
          [, ...]
        }
      */
      
      this.expObjectExpression = function(par){
        //{type: "ObjectLiteral", properties: Array[]}
        var res = this.newResult();
        res.push("{");
        var i = 0;
        var l = (par.properties && par.properties.length) || 0;
        for (i; i < l; ++i){
          var currentMember;
          //this.inheritedSystem
          if (i){
            res.push(",\n");
          };
          var prop = par.properties[i];
          if (prop.kind == "init"){
            currentMember = identifierName(prop.key);
            if (this.inheritedSystem){
              this.inheritedSystem.setCurrent(currentMember);
            };
            res.push(stringEncodeStr(identifierName(prop.key)) + ": ");
            if (prop.value){
              var v = this.parseExpression(prop.value);
              
              res.push(this.expectTypeVar(this.getPassAsTypeCode({ // only var type is allowed in regular object literal
                value: v,
                valueType: v.getType(),
                "type": this.getType(prop.typename || "var")
                , errorFun: this.getWarningFun(par)
              })));
            };
            
          }else if (prop.kind == "function"){
            var name = identifierName(prop.id);
            currentMember = name;
            if (this.inheritedSystem){
              this.inheritedSystem.setCurrent(currentMember);
            };
            prop.id = undefined; // remove id
            res.push(stringEncodeStr(name) + ": ");
            
            var functionRes = this.expectTypeVar(this.parseExpression(prop));
            res.push(functionRes);
            
          }else{
            this.error(par, errorMsg.unknownPropertyAssignmentType);
          };
          
        };
        res.push("}");
        res.setType("var");
        return res;
      };
      
      this.expClassObjectExpression = function(par){
        this.stack("isClassObject");
        this.isClassObject = true;
        
        var res = this.expObjectExpression(par);
        this.unstack("isClassObject");
        return res;
      };
      
      
      this.expectTypeVar = function(par){
        if (par.getType() === this.getType("var")){
          return par;
        };
        var self = this;
        var e = this.addError(par.getParsed(), errorMsg.expectedVar);
        classSystem.definitionPromise(par.getType()).then(function(t){
          if (t === self.getType("var")){
            e.resolve();
          };
        });
        return par;
      };
      
      
      
      /*
        (typename | var) name [= value];
      */
      this.expVariableStatement = function(par){
        var res = this.newResult();
        var declarations = par.declarations;
        if (!declarations){
          this.error(par, errorMsg.missingDeclarations);
          return "";
        };
        
        var i = 0;
        var l = declarations.length;
        var usedType = this.getType(identifierName(par.typename));
        for (i; i < l; ++i){
          if (declarations[i].type == "VariableDeclaration"){
            var r = this.parseExpression(declarations[i]);
            if (!this.isSameType(r.getType(), usedType)){
              this.error(par, errorMsg.differentTypesInVariableDeclaration);
            };
            res.push(r);
          }else{
            this.error(declarations[i], errorMsg.unknownType);
          };
        };
        res.setType(usedType);
        return res;

      };
      
      this.isSameType = function(type1, type2){
        return classSystem.isSameType(type1, type2);
      };
      
      
      
      //Object {type: "VariableDeclaration", name: "i", value: null}
      
      this.expVariableDeclaration = function(par){
        var res = this.newResult();
        
        if (par.init){
          res.pushType(this.getSetVariableCode({
            instance: this.getVariable(identifierName(par.id)),
            value: this.parseExpression(par.init),
            operator: "="
            , errorFun: this.getWarningFun(par)
          }));
        }else{
          res.pushType(this.getVariable(identifierName(par.id)));
        };
        return res;
        
      };
      
      this.getVariable = function(par){
        var res = this.newResult();
        
        this._addUsedVariable(par);
        
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
      
      
      
      /*
        
        class system code generation 
        
      */
      
      this.callClassSystem = function(parFun, par){
        var dynamic = false;
        var typeProps = {"type": true, "valueType": true, "leftType": true, "rightType": true};
        var ignoreProps = {"errorFun": true};
        var i = 0;
        var p;
        var promises = [];
        var parsed;
        parsed = parsed || par.value && par.value.getParsed();
        parsed = parsed || par.instance && par.instance.getParsed();
        parsed = parsed || par.left && par.left.getParsed();
        parsed = parsed || par.right && par.right.getParsed();
        if (!parsed){
          debugger;
        };
        var errRes = this.runtimeError(parsed, errorMsg.typeLookupFailed);
        var self = this;
        
        var resolveType = function(prop, ps, parArgument){
          var res = new Promise();
          ps.then(function(t){
            if (parArgument){
              par["arguments"][prop]["type"] = t;
            }else{
              par[prop] = t;
            };
            res.resolve();
          });
          promises.push(res);
          return res;
        };
        var t;
        for (p in typeProps){
          t = par[p];
          if (t){
            if (t.isDynamic){
              dynamic = true;
            }else{
              resolveType(p, classSystem.readyPromise(t));
            };
          };
        };
        if (par["arguments"]){
          for (i = 0; i < par["arguments"].length; ++i){
            t = par["arguments"][i]["type"];
            if (t){
              if (t.isDynamic){
                dynamic = true;
              }else{
                resolveType(i, classSystem.readyPromise(t), true);
              };
            };
          };
        };
        promiseland.all(promises).then(function(){
          var p;
          if (dynamic){
            var res = self.newResult();
            res.push("classSystem.");
            res.push(parFun);
            res.push("({");

            var propsStarted = false;
            var addProperty = function(p){
              if (propsStarted){
                res.push(", ");
              };
              propsStarted = true;
              res.push(stringEncodeStr(p));
              res.push(":");
            };

            for (p in par){
              if (!par[p] || ignoreProps[p]){
              }else if (typeProps[p]){
                addProperty(p);
                res.push(self.renderType(par[p]));
              }else{
                addProperty(p);
                res.push(self.makeCompleteStatementDynamic(par[p]));
              };
            };
            res.push("})");

            var dynRes = self.newResult();
            dynRes.push(self.makeCompleteStatement(res), undefined, {
              dynamic: true
            });
            errRes.resolve(dynRes);

          }else{
            var tempRes = self.newResult();
            par.result = tempRes;
            errRes.resolve(promiseland.classSystem[parFun](par));
          };

        });
        
        return errRes;
      };

      this.parseAsType = function(parType, par){
        var value = this.parseExpression(par);
        return this.getPassAsTypeCode({
          value: value,
          valueType: value.getType(),
          "type": parType,
          errorFun: this.getWarningFun(par),
          parsed: par
        });        
      };
      

      this.getPassAsTypeCode = function(par){
        var res = this.newResult();
        
        res.push(this.callClassSystem("getPassAsTypeCode", {
            "type": par["type"],
            value: par.value,
            valueType: this.getResultType(par.value),
            errorFun: par.errorFun
        }));
        
        res.setType(par["type"]);
        
        return res;
        
      };
      
      
      this.getSetVariableCode = function(par){
        var res = this.newResult();
        
        res.push(this.callClassSystem("getSetVariableCode", {
          instance: par.instance,
          "type": this.getResultType(par.instance),
          value: par.value,
          valueType: this.getResultType(par.value),
          operator: par.operator || "=",
          errorFun: par.errorFun
        }));
        
        res.setType(this.getResultType(par.instance));
        
        return res;
      };
      
      this.getPropertyType = function(par, parParsed){
        var type = par["type"];
        var self = this;
        if (type.isDynamic){
          return this.createExtraDynamicType(type, {
            property: par.property
          });
        }else{
          var r = this.getProvisionalType(parParsed);
          classSystem.readyPromise(par.type).then(function(resultType){
            self.resolveProvisional(r, promiseland.classSystem.getPropertyType({
              type: resultType,
              property: par.property
            }));
          });
          return r;
        };
      };
      
      this.getGetPropertyCode = function(par){
        var res = this.newResult();
        
        res.push(this.callClassSystem("getGetPropertyCode", {
          instance: par.instance,
          "type": this.getResultType(par.instance),
          property: par.property,
          propertyValue: par.propertyValue,
          errorFun: par.errorFun
        }));
        
        if (par.property){
          res.setType(this.getPropertyType({
            "type": this.getResultType(par.instance),
            property: par.property
          }, par.instance));
        }else{
          res.setType("var");
        };
        
        return res;
      };
      
      this.getBinaryExpressionCode = function(par){
        var res = this.newResult();
        
        res.push(this.callClassSystem("getBinaryExpressionCode", {
          left: par.left,
          leftType: this.getResultType(par.left),
          right: par.right,
          rightType: this.getResultType(par.right),
          operator: par.operator,
          errorFun: par.errorFun
        }));
        
        res.setType("var");
        
        return res;
      };
      
      
      
      
      /*
        something = value
        something = some.complex["expression"]
      */
      
      this.expAssignmentExpression = function(par){
        //{type: "AssignmentExpression", operator: "=", left: Object, right: Object}
        var res = this.newResult();
        res.pushType(this.getSetVariableCode({
          instance: this.parseExpression(par.left),
          value: this.parseExpression(par.right),
          operator: par.operator
          , errorFun: this.getWarningFun(par)
        }));
        
        return res;
      };
      
      this.isCallableType = function(){
        
      };
      
      /*
        funname([par1, par2, ...]);
      */
      
      this.expCallExpression = function(par){
        var res = this.newResult();
        var i = 0;
        var l;
        var calleeRes = this.parseExpression(par.callee);
        
        var args = [];
        if (par["arguments"]){
          l = par["arguments"].length;
          for (i = 0; i < l; ++i){
            var argRes = this.parseExpression(par["arguments"][i]);
            args.push({
              "type": argRes.getType(),
              "value": argRes
            });
          };
        };
        
        res.push(this.callClassSystem("getCallCode", {
          "type": calleeRes.getType(),
          instance: calleeRes,
          "arguments": args
        }));
        
        res.setType(this.getFunctionReturnType(calleeRes.getType(), par));
        return res;
      };
      
      this.getFunctionReturnType = function(parType, parsed){
        var t = this.getProvisionalType(parsed);
        var self = this;
        classSystem.readyPromise(parType).then(function(newt){
          self.resolveProvisional(t, classSystem.getFunctionReturnType(newt, parsed));
        });
        return t;
      };
      
      this.getFunctionArgumentCount = function(parType, parsed){
        return classSystem.getFunctionArgumentCount(parType);
      };
      
      this.expInheritedExpression = function(par){
        if (!this.inheritedAvailable){
          this.error(par, errorMsg.inheritedOnlyInMember);
          return;
        };
        
        var res = this.newResult();
        var i = 0;
        var l;
        
        res.push(this.inheritedSystem.getCurrent());
        res.push(".apply(this");
        
        var args = [];
        if (par["arguments"]){
          res.push(", [");
          l = par["arguments"].length;
          for (i = 0; i < l; ++i){
            if (i){
              res.push(", ");
            };
            var argRes = this.expectTypeVar(this.parseExpression(par["arguments"][i]));
            res.push(argRes);
          };
          res.push("]");
          
        }else if (par.expression){
          res.push(", ");
          this.expectTypeVar(this.parseExpression(par.expression));
          
        };
        res.push(")");
        
        res.setType("var");
        return res;
        
      };
      
      
      /*
        [[value][, ...]]
      */
      
      this.expArrayExpression = function(par){
        var res = this.newResult();
        res.push("[");
        var i = 0;
        var l = (par.elements && par.elements.length) || 0;
        for (i; i < l; ++i){
          if (i){
            res.push(", ");
          };
          res.push(this.expectTypeVar(this.parseExpression(par.elements[i])));
        };
        res.push("]");
        res.setType("var");
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
          res.push("return");
        };
        if (par.argument){
          var v = this.parseExpression(par.argument);
          res.push(" ");
          res.push(this.getPassAsTypeCode({ // only var type is allowed in regular object literal
            value: v,
            valueType: v.getType(),
            "type": this.getReturnType()
            , errorFun: this.getWarningFun(par)
          }));
        };
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
  var classSystem = promiseland.classSystem; \n\
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
  var __classSystem = promiseland.classSystem;\n\
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
        var parser = _parser;
        var hashStr = md5(promiselandCodeStr);
        var parsedAr = parser.parse(promiselandCodeStr);
        var resStr = "";
        var cp;
        var res = {};
        if (!_pureCode){ // debug flag
          resStr += loaderStr();
          resStr += promiselandRequireStr();
          resStr += callbackRequireStr();
          resStr += "if (promiseland._hasModule({ hashStr: \"" + hashStr + "\" })){ return promiseland._getModule(\"" + hashStr + "\"); };\n";
        };
        if (parsedAr.length === undefined){
          if (parsedAr.type == "Program"){
            cp = new CodeParser({toParse: parsedAr, hashStr: hashStr});
            var result = cp.getResult();
            var programStr = result.getPreCodeStr() + result.getCodeStr() + result.getPostCodeStr();
            res.warnings = cp.getWarnings();
            res.errors = cp.getErrors();
            
            if (_pureCode){
              resStr = programStr;
            }else if (cp.programPromiseStr){
              // promising module
              resStr += "var " + cp.programPromiseStr + " = " + newPromiseStr() + ";\n";
              resStr += "promiseland._registerModule({ hashStr: \"" + hashStr + "\", \"module\": " + cp.programPromiseStr + ", promising: true });\n";
              resStr += programStr;
              resStr += ";\nreturn " + cp.programPromiseStr;
            }else{
              resStr += programStr;
              resStr += "promiseland._registerModule({ hashStr: \"" + hashStr + "\", \"module\": " + cp.resultNameStr + ", promising: false });\n";
              resStr += "return " + cp.resultNameStr + ";\n";
            };
          }else{
            this.error(parsedAr[i], errorMsg.unknownType);
          };

        }else{
          errorFun(parsedAr, errorMsg.severalProgramElements);
        };
        if (!_pureCode){
          resStr += loaderEndStr();
        };
        if (!(res.errors && res.errors.length)){
          res.javascript = resStr;
        };
        p.resolve(res);

        return p.promise;
      }
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
      notABlockStatment: {
        id: 106,
        msg: "not a block statement"
      },
      missingDeclarations: {
        id: 107,
        msg: "missing Declarations"
      },
      functionFrameInDynamicCode: {
        id: 108,
        msg: "function frame is not allowed in dynamic code"
      },
      unknownIfStatement: {
        id: 109,
        msg: "unknown if statement "
      },
      unknownElseStatement: {
        id: 109,
        msg: "unknown else statement "
      },
      unknownPropertyAssignmentType: {
        id: 110,
        msg: "unknown property assignment"
      },
      severalProgramElements:{
        id: 111,
        msg: "several Program Elements"
      },
      variableHasNoType: {
        id: 112,
        msg: "variable has no type"
      },
      expectedCallable: {
        id: 113,
        msg: "expected callable expression"
      },
      typeLookupFailed: {
        id: 114,
        msg: "type lookup failed"
      },
      dynamicTypeCantBeDefined: {
        id: 115,
        msg: "dynamic type can not be defined"
      },
      typeRedefinition: {
        id: 116,
        msg: "type redefinition"
      },
      unresolvedType: {
        id: 117,
        msg: "unresolved Type"
      },
      inheritedOnlyInMember: {
        id: 118,
        msg: "inherited is only available within member functions"
      },
      
      
      templateSyntaxError: {
        id: 400,
        msg: "template syntax error"
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
      },
      internalUnknownLiteralType: {
        id: 1003,
        msg: "internal: unknown literal type"
      },
      internalMissingType: {
        id: 1004,
        msg: "internal: missing type"
      },
      unknownType: {
        id: 1005,
        msg: "internal: unknown script element type"
      },
      multipleTypeProviding: {
        id: 1006
        , msg: "internal: multiple types provided"
        , additional: "pls provide this error in a github issue"
      },
      internalMissingTypeProperty: {
        id: 1007
        , msg: "internal: missing type property"
        , additional: "pls provide this error in a github issue"
      },
      internalCantAddToStringResult: {
        id: 1008
        , msg: "internal: can not add to string result"
        , additional: "pls provide this error in a github issue"
      },
      internalWrongUseOfReference: {
        id: 1009
        , msg: "internal: wrong use of Reference"
        , additional: "pls provide this error in a github issue"
      },
      internalNegativeStringEncode: {
        id: 1010
        , msg: "internal: negative string encode"
        , additional: "pls provide this error in a github issue"
      }
      
    };
    
    return parser;
    
  });
})();


