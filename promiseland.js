// promiseLand
//
// Copyright Matthias Behrens 2015
//
//
// promiseLand is a very promising Language
//
//
// licence lgpl


(function(){
  var __modFun = function(require, createClassModule, PromiseModule, ChainableModule, TrackerModule, moduleSystemModule, classSystemModule, framesModule, ParserClassModule, errorMsgModule){

    // extra modules

    var createClass;

    var Promise;

    var Chainable;

    var Tracker;


    // config

    var setable = {
      profile: true
    };

    var config = {

    };
    
    
    // eval
    // this is here because its pure javascript
    
    var specialEval = function(jsStr, __parObj){
      if (!__parObj){
        return eval(jsStr);
      };
      
      var s = "";
      var n;
      for (n in __parObj){
        s += "var " + n + " = __parObj." + n + ";";
      };
      
      //s = "(function(){" + s;
      s += jsStr;
      //s += "})();";
      
      return eval(s);
    };


    // module object

    var promiseland = {
      Promise: Promise, // stub

      createClass: function(par, parExtends, inheritedObject){
        return createClass(par, parExtends, inheritedObject);
      },

      set: function(parWhat, parValue){
        if (!setable[parWhat]){
          return;
        };
        config[parWhat] = parValue;
        if (parWhat == "profile"){
          this.addLocalFrameName(parValue);
        };
      },
      
      javascriptEval: specialEval,

      // stub
      // will be overridden by moduleSystem.pland
      _getModule: function(parHashStr){
        return; 
      }

      // stub
      // will be overridden by moduleSystem.pland
      , _hasModule: function(parHashStr){
        return false;
      }

      // stub
      // will be overridden by moduleSystem.pland
      , isPromiseLandPromisingModule: function(parM){
        return false;
      }
      
      // for frameworks
      // enables the server to deliver promiseland directly from the node_modules directory
      , getPromiselandPathName: function(){
        return __dirname;
      }

    };


    // for promiseland internal modules to share objects
    var internals = {
      config: config,
      getModule: function(parModule){
        return parModule(promiseland, internals);
      }
    };
    
    internals.errorMsg = internals.getModule(errorMsgModule);
    
    var errorMsg = internals.errorMsg;

    // initialize addtional modules

    if (createClassModule){
      createClass = createClassModule(promiseland, internals);
      
    };

    if (PromiseModule){
      Promise = PromiseModule(promiseland, internals);
      internals.moduleSystemPs = new Promise();
      internals.classSystemPs = new Promise();
      internals.TrackerPs = new Promise();
      internals.ChainablePs = new Promise();
      internals.framesPs = new Promise();
    };

    if (moduleSystemModule){
      moduleSystemModule(promiseland, internals);
    };

    if (classSystemModule){
      classSystemModule(promiseland, internals);
    };

    if (ChainableModule){
      Chainable = ChainableModule(promiseland, internals);
      internals.ChainablePs.resolve({
        Chainable: Chainable
      });
    };

    if (TrackerModule){
      Tracker = TrackerModule(promiseland, internals);
      internals.TrackerPs.resolve({
        Tracker: Tracker
      });
    };

    if (framesModule){
      framesModule(promiseland, internals);
    };
    
    if (ParserClassModule){
      ParserClassModule(promiseland, internals);
    }


    return promiseland;

  };
  
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
      }, require("./modules/createClass"),
      require("./modules/Promise"),
      require("./modules/Chainable"),
      require("./modules/Tracker"),
      require("./modules/moduleSystem"),
      require("./modules/classSystem"),
      require("./modules/frames"),
      require("./modules/ParserClass"),
      require("./modules/errorMsg")
    );

  }else if (typeof define == "function" && define.amd){ // AMD
    define([
      "require",
      "./modules/createClass", 
      "./modules/Promise",
      "./modules/Chainable",
      "./modules/Tracker",
      "./modules/moduleSystem",
      "./modules/classSystem",
      "./modules/frames",
      "./modules/ParserClass",
      "./modules/errorMsg"
    ], __modFun);
    
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
