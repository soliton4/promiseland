// promiseLand
//
// Copyright Matthias Behrens 2014
//
//
// promiseLand is a very promising Language
//
//
// licence lgpl


(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    console.log("commonjs");
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
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    console.log("amd");
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
        return par2.apply(null, args);
      });
    };
    requireFun = require;
    
  }else{ // Plain browser env
    console.log("plain browser mode");
    requireFun = function(modulesAr, callback){
      if (modulesAr && modulesAr.length){
        throw {
          msg: "no module loader available"
        };
      };
      callback.apply(callback, []);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        var originalPromiseLand = this["promiseland"];
        this["promiseland"] = callback.apply(callback, arguments);
        if (originalPromiseLand){
          for (var i in originalPromiseLand){
            if (this["promiseland"][i] === undefined){
              this["promiseland"][i] = originalPromiseLand[i];
            };
          };
        };
      });
    };
    
  };
  
  defineFun(["./Chainable", "./Tracker"], function(ChainableModule, TrackerModule){
  //defineFun([], function(ChainableModule){
    
    var require = requireFun;
    var promiseland;
    
    var errorMsg;
    
    
    // extra modules
    
    var Chainable;
    var Tracker;
    
    
    // main promise implementation
    var Promise = function(){
      
      var thenAr = [];
      var elseAr = [];
      
      var thenFun = function(parThenFun, parElseFun){
        if (parThenFun){
          thenAr.push(parThenFun);
        };
        if (parElseFun){
          elseAr.push(parElseFun);
        };
        //return returnPromise;
      };
      
      this.resolve = function(value){
        thenFun = function(parThenFun){
          try{
            parThenFun(value);
          }catch(e){
            // maybe we are ignoring to much here, lets check later
          };
        };
        if (!thenAr) return;
        var i = 0;
        var l = thenAr.length;
        for (i; i < l; ++i){
          try{
            thenAr[i](value);
          }catch(e){
            // will those errors ocur? if so what do we do with them?
          }
        };
        thenAr = undefined; // why not delete?
        elseAr = undefined;
      };
      this.reject = function(value){
        thenFun = function(u, parElseFun){
          try{
            parElseFun(value);
          }catch(e){
            // maybe we are ignoring to much here, lets check later
          };
        };
        if (!elseAr) return;
        var i = 0;
        var l = elseAr.length;
        for (i; i < l; ++i){
          try{
            elseAr[i](value);
          }catch(e){
            // will those errors ocur? if so what do we do with them?
          }
        };
        thenAr = undefined; // why not delete?
        elseAr = undefined;
      };
      
      this.then = function(par1, par2){
        thenFun(par1, par2);
      };
      /*this.promise = {
        then: this.then
      };*/
      this.promise = this.then;
      /* so this should be possible
        var p = Promise();
        var ps = p.then;
        ps(thenfun...);
        //alternative:
        ps.then(thenfun...); // so the thenFun is a promise itself;
      */
      this.then.then = this.then;
    };
    
    
    var Callback = function(){
      var promise = new Promise();
      var callback = function(){
        promise.resolve(arguments);
      };
      callback.promise = promise.promise;
      callback.callback = callback;
      return callback;
    };
    
    
    
    
    
    //Promise = Promise;
    
    
    /*var functionPromise = function(promise){
      
      var f = function(thenFun, elseFun){
        promise.then(thenFun, elseFun);
      };
      f.then = promise.then;
      return f;
    };*/
    
    var _parserPs;
    
    var modules = {};
    
    var setable = {
      profile: true
    };
    
    var config = {
      
    };
    
    var profiles = {};
    
    var _emitFun = function(parEventStr, parData){
        if (this._on[parEventStr]){
          var i = 0;
          var l = this._on[parEventStr].length;
          for (i; i < l; ++i){
            try{
              this._on[parEventStr][i](parData);
            }catch(e){};
          };
        };
      };
    var _onFun = function(parEventStr, parFun){
        if (this._on[parEventStr]){
          this._on[parEventStr].push(parFun);
        };
      };
    
    // base classes
    var Profile = function(){
      this._on = {
        "connection": []
      };
    };
    Profile.prototype = {
      // return the name of the profile
      name: function(){
        
      },
      
      emit: _emitFun,
      
      // return Connection object
      find: function(parId /*optional*/){
        
      },
      
      // return array of provided Profiles
      /*providesProfiles: function(){
        
      },*/
      
      /* events:
        "connection":   a new connection was initiated - function(parConnection){}
      */
      on: _onFun
    };
    
    var Connection = function(){
      this._on = {
        "data": [],
        "disconnect": []
      };
    };
    Connection.prototype = {
      /* send string to counterpart object on the other frame */
      send: function(parStr){
        
      },
      
      emit: _emitFun,
      
      /* events:
        "data":        data arrives - function(parDataStr){}
        "disconnect":  connection got permanently disconnected
      */
      on: _onFun
    };
    
    var sendRespond = function(par, data){
      
    };
    
    var remoteExecRequest = function(connection, par){
      console.log("remote");
      var data = par.data;
      
      var moduleEntry = modules[data.hashStr];
      console.log(moduleEntry);
      var funEntry = moduleEntry.functions[data.nameStr];
      console.log(funEntry);
      if (promiseland.profileHas(funEntry.profile)){
        console.log("got it");
        return funEntry.fun.apply(undefined, data.args);
      };
      var rejectPs = new Promise();
      rejectPs.reject({
        id: 10
        , msg: "requested function not found"
      });
      return rejectPs;
    };
    
    var maxId = 10000000;
    
    var prepConnection = function(connection, profile){
      var buffer = {};
      var expectid = 1;
      var nextId = 1;
      var requests = {};
      
      var sendData = function(data){
        var id = nextId;
        nextId++;
        if (nextId > maxId){
          nextId = 1;
        };
        data.id = id;
        connection.send(JSON.stringify(data));
        return id;
      };
      
      
      var rejectFun = function(parId){
        return function(parReason){
          sendData({
            response: parId
            , reject: true
            , data: parReason
          });
        };
      };
      var resolveFun = function(parId){
        return function(parResult){
          sendData({
            response: parId
            , resolve: true
            , data: parResult
          });
        };
      };
      var respondError = function(parId, parError){
        return (rejectFun(parId))(parError);
      };
      
      var queue = function(par){
        if (par.id == expectid){
          ++expectid;
          if (expectid > maxId){
            expectid = 1;
          };
          if (par.request){
            if (par.data && par.data.type == "remoteexec"){
              var p = remoteExecRequest(connection, par);
              p.then(resolveFun(par.id), rejectFun(par.id));
            }else{
              respondError(par.id, {
                msg: "unknownRequest"
              });
            };
          }else if (par.response !== undefined){
            var ps = requests[par.response];
            if (ps){
              delete requests[par.response];
              if (par.resolve){
                ps.resolve(par.data);
              }else{
                ps.reject(par.data);
              };
            };
          };
        }else{
          buffer[par.id] = par;
        };
        var b = buffer[expectid];
        if (b){
          delete buffer[expectid];
          queue(b);
        };
      };
      
      connection.on("data", function(dataStr){
        var obj = JSON.parse(dataStr);
        queue(obj);
      });
      
      connection.createRequest = function(data){
        var ps = new Promise();
        var id = sendData({
          request: true
          , data: data
        });
        requests[id] = ps;
        return ps.promise;
      };
      
    };
    
    /*
      par: {
          conection: connection,
          hashStr: hashStr,
          nameStr: nameStr,
          args: args,
          promise: promise
        }
    */
    var createRemoteExecRequest = function(par){
      var ps = par.connection.createRequest({
        "type": "remoteexec",
        hashStr: par.hashStr,
        nameStr: par.nameStr,
        args: par.args
        
      });
      ps.then(function(res){
        par.promise.resolve(res);
      }, function(res){
        par.promise.reject(res);
      });
    };
    
    
    var findProfile = function(profileNameStr){
      return profiles[profileNameStr];
    };
    
    var _getParser = function(){
      if (_parserPs){
        return _parserPs;
      };
      var p = new Promise();
      _parserPs = p.promise;
      try{
        require(["./parser"], function(parser){
          p.resolve(parser);
        });
      }catch(e){
        p.reject(e);
      };
      return _parserPs;
    };
    
    var mixinPrototype = function(parProto, parMixin, inheritedObject, gotit){
      if (!parMixin || !parMixin.prototype){
        return;
      };
      if (!gotit){
        gotit = {};
      };
      var i;
      var proto = parMixin.prototype;
      for (i in proto){
        if (i === "prototype" || gotit[i]){
          continue;
        };
        parProto[i] = proto[i];
        inheritedObject[i] = parProto[i];
        gotit[i] = true;
      };
      if (parMixin.prototype){
        mixinPrototype(parProto, parMixin.prototype, inheritedObject, gotit);
      };
      
    };
    
    var getProperty = function(par, parProperty, parDefault){
      if (par.hasOwnProperty(parProperty)){
        return par[parProperty];
      };
      return parDefault;
    };
    
    var createClass = function(par, parExtends, inheritedObject){
      var constructorFun = getProperty(par, "constructor", function(){});
      var proto = {};
      var i;
      var l;
      
      if (parExtends){
        var realConstructorFun = constructorFun;
        
        if (parExtends instanceof Array){
          l = parExtends.length;
          var extendConstructors = [];
          for (i = 0; i < l; ++i){
            mixinPrototype(proto, parExtends[i], inheritedObject);
            if (typeof parExtends[i] === "function"){
              extendConstructors.push(parExtends[i]);
            };
          };
          var cl = extendConstructors.length;
          if (cl){
            constructorFun = function(){
              var i;
              for (i = 0; i < cl; ++i){
                extendConstructors[i].apply(this, arguments);
              };
              return realConstructorFun.apply(this, arguments);
            };
          };
        }else{
          mixinPrototype(proto, parExtends, inheritedObject);
          if (typeof parExtends === "function"){
            constructorFun = function(){
              parExtends.apply(this, arguments);
              return realConstructorFun.apply(this, arguments);
            };
          };
        };
        
      };
      
      for (i in par){
        proto[i] = par[i];
      };
      constructorFun.prototype = proto;
      return constructorFun;
    };
    
    
    var all = function(promisesAr){
      var res = new Promise();
      resAr = promisesAr ? promisesAr.slice() : [];
      
      var check = function(){
        if (cnt){
          return;
        };
        res.resolve(resAr);
      };
      var cnt = 1;
      
      var thenFun = function(parI){
        return function(r){
          resAr[parI] = r;
          --cnt;
          check();
        };
      };
      
      var i = 0;
      var l = resAr.length;
      for (i; i < l; ++i){
        ++cnt;
        resAr[i].then(thenFun(i));
      };
      
      --cnt;
      
      check();
      
      return res;
    };
    
    
    var ParserClass = function(par){
      this.parse = function(parStr){
        var p = new Promise();
        _getParser().then(function(parser){
          try{
            //console.log(parser.parse);
          parser.parse(parStr).then(function(res){
            p.resolve(res);
          });
          }catch(e){
            //console.log("reject parse");
            //console.log(e);
            if (!e.msg){
              e.msg = e.message;
            };
            p.reject(e);
          };
        });
        return p.promise;
      };
    };
    
    promiseland = {
      Promise: Promise,
      Callback: Callback,
      Parser: ParserClass,
      all: all,
      
      ProfileBaseClass: Profile,
      ConnectionBaseClass: Connection,
      
      createClass: function(par, parExtends, inheritedObject){
        return createClass(par, parExtends, inheritedObject);
      },
      
      set: function(parWhat, parValue){
        if (!setable[parWhat]){
          return;
        };
        config[parWhat] = parValue;
      }
      , addProfile: function(parProfile){
        if (!parProfile){
          return;
        };
        if (profiles[parProfile.name()]){
          throw {
            code: 4,
            msg: "profile exists"
          };
        };
        profiles[parProfile.name()] = parProfile;
        parProfile.on("connection", function(connection){
          prepConnection(connection, parProfile);
        });
      }
      , profileHas: function(profileNameStr){
        if (config.profile === profileNameStr){
          return true;
        };
        return false;
      }
      
      , registerRemote: function(profileNameStr, hashStr, nameStr, fun){
        if (!modules[hashStr]){
          throw {
            code: 5,
            msg: "invalid module"
          };
        };
        var moduleEntry = modules[hashStr];
        moduleEntry.functions[nameStr] = {
          profile: profileNameStr,
          fun: fun
        };
      }
      
      , _registerModule: function(par){
        if (this._hasModule(par.hashStr)){
          return false;
        };
        modules[par.hashStr] = {
          "promising": par["promising"],
          "module": par["module"],
          functions: {}
        };
        return true;
      }
      
      , _getModule: function(parHashStr){
        return modules[parHashStr]["module"];
      }
      
      , _hasModule: function(parHashStr){
        if (modules[parHashStr]){
          return true;
        };
        return false;
      }
      
      , isPromiseLandModule: function(parM){
        var i;
        for (i in modules){
          if (modules[i] && modules[i]["module"] === parM){
            return true;
          };
        };
        return false;
      }
      
      , isPromiseLandPromisingModule: function(parM){
        var i;
        for (i in modules){
          if (modules[i] && modules[i]["module"] === parM){
            return modules[i].promising;
          };
        };
        return false;
      }
      
      // for future use
      , getPromise: function(par){
        return par;
      }
      
      // to import promisies from outside
      , importPromise: function(par){
        var p = new Promise();
        par.then(function(res){
          p.resolve(res);
        }, function(rea){
          p.reject(rea);
        });
        return p.promise;
      }
      
      , remoteExec: function(hashStr, nameStr, args){
        var promise = new Promise();
        var ret = promise.promise;
        if (!modules[hashStr] || !modules[hashStr].functions[nameStr]){
          promise.reject({
            code: 1
            , msg: "remote function not registred"
          });
          return ret;
        };
        var entry = modules[hashStr].functions[nameStr];
        var profile = findProfile(entry.profile);
        if (!profile){
          promise.reject({
            code: 2
            , msg: "profile not found"
          });
          return ret;
        };
        
        var connection = profile.find();
        if (!connection){
          promise.reject({
            code: 3
            , msg: "no connection available"
          });
          return ret;
        };
        
        createRemoteExecRequest({
          connection: connection,
          hashStr: hashStr,
          nameStr: nameStr,
          args: args,
          promise: promise
        });
        
        return promise.promise;
      }
    };
    
    var internals = {};
    
    
    
    
    /* --------------------------------------------------------------------------------------------
        Class System
    */
    
    var _ClassToken;
    
    /*
      the classLiteral is used to ensure consistency between
      compiletime type safety and runtime type safety
      
      it contains class objects for members that are replaced with their names in sourcecode.
      
      structure:
      {
        members:[
          {
            name: "nameliteral",
            type: typeObject
          },
          ...
        ],
        extends: [typeObject, ...],
        hasFreePart: true / false
      }
      
    */
    
    var _actClass;
    var getClass = function(cf){
      _actClass = undefined;
      cf();
      return _actClass;
    };
    
    var classHider = function(toHide){
      return function(){
        _actClass = toHide;
      };
    };
    var builtinTypes = {
      "var": classHider({
        isVar: true,
        isReady: true
      }),
      "statement": classHider({
        isStatement: true,
        isReady: true
      })
    };





    var classSystem = {
      
      _createProvisionalClass: function(){
        var cDef = {
          provisional: true,
          promise: new Promise(),
          type: undefined
        };
        cDef.promise.then(function(type){
          cDef.type = type;
        });
        var cf = classHider(cDef);
        return cf;
      },
      
      _resolveProvisional: function(parType, parResult){
        var self = this;
        var typeDef = getClass(parType);
        var resultDef = getClass(parResult);
        
        if (resultDef.provisional){
          resultDef.promise.then(function(result){
            self.resolveProvisional(parType, result);
          });
        }else{
          typeDef.promise.resolve(parResult);
        };
      },
      
      isProvisional: function(parType){
        var typeDef = getClass(parType);
        if (typeDef.provisional){
          return true;
        };
        return false;
      },
      
      definitionPromise: function(parType){
        var typeDef = getClass(parType);
        if (typeDef.provisional){
          return typeDef.promise;
        };
        var p = new Promise();
        p.resolve(parType);
        return p;
      },
      readyPromise: function(_parType){
        var p = new Promise();
        this.definitionPromise(_parType).then(function(parType){
          var typeDef = getClass(parType);
          if (typeDef.isReady){
            p.resolve(parType);
            return;
          };
          typeDef.readyPromise.then(function(parType){
            p.resolve(parType);
          });
          return;
        });
        return p;
      },
      
      _createTemporaryTrackedClass: function(parType){
        if (this.isProvisional(parType)){
          throw errorMsg.trackedProvisionalNotImplemented;
        };
        if (this.isTemporaryTrackedClass(parType)){
          return parType;
        };
        if (!this.isTrackedClass(parType)){
          return parType;
        };
        var cDef = {
          temporaryTracked: true,
          type: parType,
          isReady: true
        };
        var cf = classHider(cDef);
        return cf;
      },
      
      isTemporaryTrackedClass: function(parType){
        var cDef = getClass(parType);
        if (cDef.temporaryTracked){
          return true;
        };
        return false;
      },
      
      getClassFromTemporaryTracked: function(parType){
        if (this.isTemporaryTrackedClass(parType)){
          var cDef = getClass(parType);
          return cDef.type;
        };
        return parType;
      },
      
      
      isSameType: function(type1, type2){
        if (type1 === type2){
          return true;
        };
        var cDef1 = getClass(type1);
        if (cDef1.provisional){
          if (!cDef1.type){
            return false;
          };
          type1 = cDef1.type;
          cDef1 = getClass(type1);
        };
        var cDef2 = getClass(type2);
        if (cDef2.provisional){
          if (!cDef2.type){
            return false;
          };
          type2 = cDef2.type;
          cDef2 = getClass(type2);
        };
        if (type1 === type2){
          return true;
        };
        return false;
      },
      
      
      /*
      [
        { // untyped part
        
        },
        ... // members
      ]
      */
      createClass: function(classLiteral, parDefaults){
        var cAr = [];
        var self = this;
        
        var map = {
          members: {},
          "extends": []
        };
        
        var cDef = {
          constructor: undefined, // later
          map: map,
          isReady: false,
          track: classLiteral.track
        };
        cAr.push(cDef); // cAr[0] is allways the class definition
        
        var trackerIdx;
        var trackRootIdx;
        var trackMemberIdx;
        
        if (cDef.track){
          map.trackerIdx = cAr.length;
          cAr.push(undefined); // cAr[1] is allways lifeline if tracked
          map.trackRootIdx = cAr.length;
          cAr.push(undefined); // cAr[1] is allways lifeline if tracked
          map.trackMemberIdx = cAr.length;
          cAr.push(undefined); // cAr[1] is allways lifeline if tracked
          trackerIdx = map.trackerIdx;
          trackRootIdx = map.trackRootIdx;
          trackMemberIdx = map.trackMemberIdx;
        };
        
        if (classLiteral.hasFreePart){
          var freepart = {};
          map.freePart = cAr.length;
          cAr.push(freepart);
          map.getMemberCode = [MAKRO_SELF, "[" + map.freePart + "][", MAKRO_PROPERTYVALUE, "]"];
          map.setMemberCode = [MAKRO_SELF, "[" + map.freePart + "][", MAKRO_PROPERTYVALUE, "] = ", MAKRO_VALUE];
        };
        
        var helpAr = [];
        var makeHelpAr = function(){
          return helpAr.slice();
        };
        
        map.connectIdx = cAr.length;
        var conIdx = map.connectIdx;
        cAr.push(function(){
          var helpAr = makeHelpAr();
          this[conIdx] = function(idx, fun, base){
            var chain = helpAr[idx];
            if (!chain){
              chain = Chainable(this, idx);
              helpAr[idx] = chain;
            };
            return chain(fun, base);
          };
          return this[conIdx].apply(this, arguments);
        });
        
        var isReady = true;
        
        var membersAr = [];
        
        var checkReady = function(){};
        
        var constructorDef;
        var constructorFun;
        
        var destroyDef;
        var destroyFun;
        
        var defineConstructor;
        var provisionalConstructor = false;
        
        var addMember = function(m){
          var mDef = {
            index: cAr.length
          };
          map.members[m.name] = mDef;
          var def = parDefaults ? parDefaults[m.name] : undefined;
          cAr.push(def);
          
          if (m.name == "constructor"){
            // this is the constructor
            constructorDef = mDef;
            constructorFun = def;
          };
          
          if (m.name == "destroy"){
            // this is the destructor
            destroyDef = mDef;
            destroyFun = def;
          };
          
          mDef.type = m.type;
          mDef.getCode = [MAKRO_SELF, "[" + mDef.index + "]"];
          mDef.setCode = [MAKRO_SELF, "[" + mDef.index + "] = ", MAKRO_VALUE];
          mDef.connectFunCode = [MAKRO_SELF, "[" + map.connectIdx + "](" + mDef.index + ", ", MAKRO_VALUE, ")"];
          mDef.connectSlotCode = [MAKRO_SELF, "[" + map.connectIdx + "](" + mDef.index + ", ", MAKRO_VALUE, "[", MAKRO_VALUEPROPERTY, "], ", MAKRO_VALUE, ")"];
          membersAr.push(mDef);
          if (self.isProvisional(m.type)){
            isReady = false;
            if (m.name == "constructor"){
              provisionalConstructor = true;
            };
            self.definitionPromise(m.type).then(function(parType){
              mDef.type = parType;
              if (m.name == "constructor"){
                constructorDef.type = parType;
                defineConstructor();
              };
              checkReady();
            });

          };
          
        };
        
        var i;
        
        if (classLiteral.members){
          i = 0;
          for (i; i < classLiteral.members.length; ++i){
            addMember(classLiteral.members[i]);
          };
        };
        
        if (classLiteral.hasFreePart){
          var proto = {};
          if (parDefaults){
            for (i in parDefaults){
              if (!map.members[i]){
                proto[i] = parDefaults[i];
              };
            };
          };
          var freeFun = function(){};
          freeFun.prototype = proto;
          var f = map.freePart;
          
          if (cDef.track){
            cDef.constructor = function(){
              var r = cAr.slice();
              r[f] = new freeFun();
              var t = Tracker(function(){
                destroyFun.apply(r);
              });
              r[trackerIdx] = t[0];
              r[trackRootIdx] = t[1];
              r[trackMemberIdx] = t[2];
              return [r, r[trackRootIdx]()];
              
            };
            
          }else{
            cDef.constructor = function(){
              var r = cAr.slice();
              r[f] = new freeFun();
              return r;
              
            };
            
          };
          
        }else{
          if (cDef.track){
            cDef.constructor = function(){
              var r = cAr.slice();
              var t = Tracker(function(){
                destroyFun.apply(r);
              });
              r[trackerIdx] = t[0];
              r[trackRootIdx] = t[1];
              r[trackMemberIdx] = t[2];
              return [r, r[trackRootIdx]()];
            };
            
          }else{
            cDef.constructor = function(){
              var r = cAr.slice();
              return r;
            };
            
          };
        };
        
        
        
        //helperArray
        for (i = 0; i < cAr.length; ++i){
          helpAr.push(undefined);
        };
        
        
        //constructorType
        var cf = classHider(cDef);
        
        defineConstructor = function(){
          var conDef = getClass(constructorDef.type);
          cDef.constructorType = self.createFunctionType({
            "return": cf,
            arguments: conDef.arguments
          });
          
        };
        
        if (constructorDef){
          cDef.constructorArguments = [];
          var realConstructor = cDef.constructor;
          cDef.constructor = function(){
            var instance = realConstructor();
            constructorFun.apply(instance, arguments);
            return instance;
          };
          
          if (!provisionalConstructor){
            defineConstructor();
          };
          
        }else{
          cDef.constructorType = this.createFunctionType({
            "return": cf
          });
          
        };
        
        if (cDef.track){
          if (destroyDef){
            var _destroyFun = destroyFun;
            destroyFun = function(){
              _destroyFun.apply(this);
              this.splice(0,this.length);
            };
          }else{
            destroyFun = function(){
              this.splice(0,this.length);
            };
          };
        };
        
        
        if (!isReady){
          cDef.readyPromise = new Promise();
          checkReady = function(){
            var i = 0;
            for (i = 0; i < membersAr.length; ++i){
              if (self.isProvisional(membersAr[i].type)){
                return;
              };
            };
            
            cDef.isReady = true;
            cDef.readyPromise.resolve(cf);
          };
          checkReady();
          
        }else{
          cDef.isReady = true;
          
        };
        
        return cf;
      }
      
      , isFunctionType: function(parType){
        var cDef = getClass(parType);
        if (cDef.isFunction){
          return true;
        };
        return false;
      }
      
      , isTrackedClass: function(parType){
        var cDef = getClass(parType);
        if (cDef.track){
          return true;
        };
        return false;
      }
      
      /*, getFunctionTypeJsStr: function(parType){
        var cDef = getClass(parType);
        return "classSystem.createFunctionType({";
      }*/
      
      , createFunctionType: function(par){
        var self = this;
        var cDef = {
          isFunction: true,
          "return": par["return"] || this.getBuiltinType("var"),
          "arguments": par["arguments"] || [],
          isReady: false
        };
        
        var checkReady = function(){
          makeTemporaries();
        };
        var makeTemporaries = function(){
          cDef.return = self._createTemporaryTrackedClass(cDef.return);
          var i = 0;
          for (i = 0; i < cDef.arguments.length; ++i){
            cDef.arguments[i] = self._createTemporaryTrackedClass(cDef.arguments[i]);
          };
        };
        
        isReady = true;
        
        if (self.isProvisional(cDef.return)){
          isReady = false;
          self.definitionPromise(cDef.return).then(function(parType){
            cDef.return = parType;
            checkReady();
          });
        };
        
        var resolveTypeFun = function(parI){
          return function(parType){
            cDef.arguments[parI] = parType;
            checkReady();
          };
        };
        var i = 0;
        for (i = 0; i < cDef.arguments.length; ++i){
          if (self.isProvisional(cDef.arguments[i])){
            isReady = false;
            self.definitionPromise(cDef.arguments[i]).then(resolveTypeFun(i));
          };
        };
        
        var cf = classHider(cDef);
        
        if (!isReady){
          cDef.readyPromise = new Promise();
          checkReady = function(){
            if (self.isProvisional(cDef.return)){
              return;
            };
            var i = 0;
            for (i = 0; i < cDef.arguments.length; ++i){
              if (self.isProvisional(cDef.arguments[i])){
                return;
              };
            };
            makeTemporaries();
            cDef.isReady = true;
            cDef.readyPromise.resolve(cf);
          };
          checkReady();
          
        }else{
          checkReady();
          cDef.isReady = true;
          
        };
        
        
        return cf;
      }
      
      , isVar: function(parType){
        var cDef = getClass(parType);
        if (cDef.isVar){
          return true;
        };
        return false;
      }
      
      , getFunctionReturnType: function(parType){
        var cDef = getClass(parType);
        if (cDef.isVar){
          return this.getBuiltinType("var");
        };
        return cDef["return"];
      }
      , getFunctionArgumentCount: function(parType){
        var cDef = getClass(parType);
        if (cDef.arguments){
          return cDef.arguments.length;
        };
        return 0;
        
      }
      
      , getFunctionArgumentType: function(parType, parIndex){
        var cDef = getClass(parType);
        if (cDef.arguments[parIndex]){
          return cDef.arguments[parIndex];
        }
        return this.getBuiltinType("var");
        
      }
      
      , getConstructorArgumentType: function(parType, parIndex){
        var cDef = getClass(parType);
        var t;
        if (cDef.constructorArguments){
          t = cDef.constructorArguments[parIndex];
        };
        if (t){
          return t;
        };
        return this.getBuiltinType("var");
        
      }
      
      , getTypeConstructor: function(parType){
        var cDef = getClass(parType);
        return cDef.constructor;
      }
      
      , getBuiltinType: function(parName){
        return builtinTypes[parName];
      }
      
      , getGetPropertyCode: function(par){
        
        var cDef = getClass(par["type"]);
        if (cDef.isVar){
          return assembleCode([MAKRO_SELF, "[", MAKRO_PROPERTYVALUE, "]"], par);
        };
        
        var map = cDef.map;
        
        if (par.property){
          if (map.members[par.property]){
            return assembleCode(map.members[par.property].getCode, par);
          };
        };
        if (map.getMemberCode){
          return assembleCode(map.getMemberCode, par);
        };
        return runtimeError(errorMsg.accessNotAllowd, par);
      }
      
      , getPropertyAlias: function(par){
        var cDef = getClass(par["type"]);
        if (cDef.isVar){
          return par.property;
        };
        
        var map = cDef.map;
        
        if (map && map.members && map.members[par.property]){
          return map.members[par.property].index;
        };
        return par.property;
        
      }
      
      , getPropertyType: function(par){
        var cDef = getClass(par["type"]);
        if (cDef.isVar){
          return this.getBuiltinType("var");
        };
        var map = cDef.map;
        
        if (map.members[par.property]){
          if (par.original){
            return map.members[par.property]["originalType"] || map.members[par.property]["type"];
          }else{
            return map.members[par.property]["type"];
          };
        };
        
        return this.getBuiltinType("var");
      }
      
      , getConstructorType: function(par){
        var cDef = getClass(par["type"]);
        if (cDef.isVar){
          return this.getBuiltinType("var");
        };
        
        if (cDef.constructorType){
          return cDef.constructorType;
        };
        
        throw errorMsg.noConstructorAvailable;
        
      }
      
      , getSetPropertyCode: function(par){
        var cDef = getClass(par["type"]);
        var map = cDef.map;
        
        if (par.property){
          if (map.members[par.property]){
            var propertyType = this.getPropertyType({
              "type": par["type"],
              property: par.property
            });
            if (!this.canSet(propertyType, par.valueType)){
              return runtimeError(errorMsg.typeMissmatch, par);
            };
            return assembleCode(map.members[par.property].setCode, par);
          };
        };
        if (map.setMemberCode){
          if (!this.canSet(undefined, par.valueType)){
            return runtimeError(errorMsg.typeMissmatch, par);
          };
          return assembleCode(map.setMemberCode, par);
        };
        return runtimeError(errorMsg.accessNotAllowd, par);
      }
      
      , getConnectCode: function(par){
        var cDef = getClass(par["type"]);
        var map = cDef.map;
        
        
        if (par.valueProperty){
          var valuePropertyType = this.getPropertyType({
            "type": par.valueType,
            property: par.valueProperty
          });

          if (!this.canConnect(par["type"], par.property, valuePropertyType)){
            return runtimeError(errorMsg.connectNotPossible, par);
          };
          par.valueProperty = "" + this.getPropertyAlias({"type": par.valueType, property: par.valueProperty});
          return assembleCode(map.members[par.property].connectSlotCode, par);
        }else{
          if (!this.canConnect(par["type"], par.property, par.valueType)){
            return runtimeError(errorMsg.connectNotPossible, par);
          };
          return assembleCode(map.members[par.property].connectFunCode, par);
        };
        return runtimeError(errorMsg.connectNotPossible, par);
      }
      
      
      , getPassAsTypeCode: function(par){
        var cDef = getClass(par["type"]);
        var vcDef = getClass(par["valueType"]);
        
        if (par.value){
          if (!this.canSet(par["type"], par.valueType)){
            return runtimeError(errorMsg.typeMissmatch, par);
          };
          if (this.isTemporaryTrackedClass(par["type"])){
            return this.getCreateTemporaryClassCode(par);
          };
          return assembleCode([MAKRO_VALUE], par);
        };
        return runtimeError(errorMsg.missingVariable, par);
        
      }
      
      , getCreateTemporaryClassCode: function(par){
        if (this.isTemporaryTrackedClass(par["type"])){
          return assembleCode([MAKRO_VALUE], par);
        };
        if (!this.isTrackedClass(par["type"])){
          return assembleCode([MAKRO_VALUE], par);
        };
        var cDef = getClass(par["type"]);
        
        var codeAr = ["(function(v){ return [v, v[" + cDef.map.trackRootIdx + "]()];})(", MAKRO_VALUE, ")"];
        return assembleCode(codeAr, par);
        
      }
      
      , getDestroyTemporaryClassCode: function(par){
        if (this.isTemporaryTrackedClass(par.valueType) || !this.isTrackedClass(par.valueType)){
          if (par.noValueRequired){
            return assembleCode([], par);
          };
          return assembleCode([MAKRO_VALUE], par);
        };
        
        var codeAr = ["(function(v){ v[1](); return v; })(", MAKRO_VALUE, ")"];
        return assembleCode(codeAr, par);
        
      }
      
      
      , getSetVariableCode: function(par){
        var cDef = getClass(par["type"]);
        var vcDef = getClass(par["valueType"]);
        
        if (par.instance){
          var operator = par.operator || "=";
          if (operator != "="){
            if (!(cDef.isVar && vcDef.isVar)){
              return runtimeError(errorMsg.operatorMissmatch, par);
            };
          };
          
          if (!this.canSet(par["type"], par.valueType)){
            if ( this.canSet(par["type"], this.getClassFromTemporaryTracked(par.valueType)) ){
              // tracked temporary
              if (par.assignmentType == "Identifier"){
                return assembleCode([
                  "(function(vAr){ var v = vAr[0]; ", // temp value
                  MAKRO_SELF, " ", operator, " v; ",  // assign to variable
                  "if (_T", MAKRO_SELF, "){ _T", MAKRO_SELF, "(); }; ",  // call old tracker
                  "_T", MAKRO_SELF, " = vAr[1]; ",                       // reuse existing tracker to save function calls
                  "return v; })",                         // reuse existing tracker to save function calls
                  "(", MAKRO_VALUE, ")"                   // call closure
                ], par);
              };
            };
            return runtimeError(errorMsg.typeMissmatch, par);
          };
          return assembleCode([MAKRO_SELF, " ", operator, " ", MAKRO_VALUE], par);
        };
        return runtimeError(errorMsg.missingVariable, par);
      }
      
      , getDeclareVariableCode: function(par){
        var cDef = getClass(par["type"]);
        
        var assemblyAr = ["var ", par.name, ";\n"];
        if (cDef.track){
          assemblyAr.push("var _T");
          assemblyAr.push(par.name);
          assemblyAr.push(";\n");
        };
        return assembleCode(assemblyAr, par);
      }
      
      , getDestroyVariableCode: function(par){
        var cDef = getClass(par["type"]);
        
        var assemblyAr = [];
        if (cDef.track){
          assemblyAr.push("if (_T");
          assemblyAr.push(par.name);
          assemblyAr.push("){ _T");
          assemblyAr.push(par.name);
          assemblyAr.push("();};");
        };
        return assembleCode(assemblyAr, par);
      }
      
      
      , getCallCode: function(par){
        var cDef = getClass(par["type"]);
        var i;
        var l;
        var args;
        var assembly;
        if (cDef.isVar){
          args = par["arguments"];
          l = args.length;
          assembly = [MAKRO_SELF, "("];
          for (i = 0; i < l; ++i){
            if (i > 0){
              assembly.push(", ");
            };
            assembly.push({
              _internFun: "getPassAsTypeCode",
              "type": this.getBuiltinType("var"),
              "value": args[i].value,
              "valueType": args[i]["type"]
            });
          };
          assembly.push(")");
          return assembleCode(assembly, par);
        };
        if (!cDef.isFunction){
          return runtimeError(errorMsg.expectedCallable, par);
        };
        
        args = par["arguments"];
        l = args.length;
        assembly = [MAKRO_SELF, "("];
        for (i = 0; i < l; ++i){
          if (i > 0){
            assembly.push(", ");
          };
          assembly.push({
            _internFun: "getPassAsTypeCode",
            "type": cDef.arguments[i] || this.getBuiltinType("var"),
            "value": args[i].value,
            "valueType": args[i]["type"]
          });
        };
        assembly.push(")");
        return assembleCode(assembly, par);
      }
      
      , getBinaryExpressionCode: function(par){
        var lcDef = getClass(par["leftType"]);
        var rcDef = getClass(par["rightType"]);

        if (lcDef.isVar && rcDef.isVar){
          return assembleCode(["(", MAKRO_LEFT, " ", MAKRO_OPERATOR, " ", MAKRO_RIGHT, ")"], par);
        };
        
        switch (par.operator){
          case "==":
          case "===":
          case "!=":
          case "!==":
            return assembleCode(["(", MAKRO_LEFT, " ", MAKRO_OPERATOR, " ", MAKRO_RIGHT, ")"], par);
        };
        
        return runtimeError(errorMsg.operatorMissmatch, par);
      }
      
      , canSet: function(parTargetType, parSourceType){
        if (parTargetType === undefined && parSourceType === undefined){
          return true;
        };
        if (parTargetType === undefined || parSourceType === undefined){
          return false;
        };
        if (parTargetType === parSourceType){
          return true;
        };
        
        // temporary check
        if (this.isTemporaryTrackedClass(parSourceType)){
          // temporary sourcetype can only pass as temporary target
          if (this.isTemporaryTrackedClass(parTargetType)){
            return this.canSet(this.getClassFromTemporaryTracked(parTargetType), this.getClassFromTemporaryTracked(parSourceType));
          };
          return false;
        };
        if (this.isTemporaryTrackedClass(parTargetType)){
          // temporary target is allways possible
          // code is generated in getPassAsTypeCode
          return this.canSet(this.getClassFromTemporaryTracked(parTargetType), parSourceType);
        };
        
        
        if (
          parTargetType.isFunction && parSourceType.isFunction
          && this.canSet(parTargetType.returnType, parSourceType.returnType)
          && parTargetType.parameters.length == parSourceType.parameters.length
        ){
          var allOk = true;
          var i = 0;
          var l = parTargetType.parameters.length;
          for (i; i < l; ++i){
            var tp = parTargetType.parameters[i];
            var sp = parSourceType.parameters[i];
            if (!this.canSet(sp, tp)){
              allOk = false;
            };
          };
          if (allOk){
            return true;
          };
        };
        return false;
      }
      
      , canConnect: function(parType, parProperty, parFunType){
        var cDef = getClass(parType);
        var map = cDef.map;
        
        if (map.members[parProperty]){
          var mDef = map.members[parProperty];
          
          var propertyType = this.getPropertyType({
            "type": parType,
            property: parProperty
          });
          
          /*if (!mDef.connectable){
            return false;
          };*/
          
          if (!this.canSet(propertyType, parFunType)){
            return false;
          };
          
          if (!(this.isVar(propertyType) || this.isFunctionType(propertyType))){
            return false;
          };
          if (!(this.isVar(parFunType) || this.isFunctionType(parFunType))){
            return false;
          };
          
          return true;
        };
        
        return false;
      }
      
    };
    
    var runtimeError = function(par, par2){
      if (par2 && par2.errorFun){
        par2.errorFun(par);
      };
      return "(function(){ throw { id:" + par.id + ", msg: " + stringEncodeStr(par.msg) + " } })()";
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
    
    
    var assembleCode = function(ar, par){
      var res = par.result;
      var resStr = "";
      if (!res){
        res = {
          push: function(parStr){
            resStr += parStr;
          }
        };
      };
      var i = 0;
      var r = "";
      for (i = 0; i < ar.length; ++i){
        if (typeof ar[i] == "string"){
          res.push(ar[i]);
        }else if(ar[i]._internFun){
          var tempPar = ar[i];
          tempPar.result = par.result;
          tempPar.errorFun = par.errorFun;
          var tempRes = classSystem[ar[i]._internFun](tempPar);
          if (!par.result){
            res.push(tempRes);
          };
        }else{
          switch(ar[i]){
            case MAKRO_SELF:
              res.push(par.instance);
              break;
            case MAKRO_PROPERTY:
              res.push(par.property);
              break;
            case MAKRO_PROPERTYSTRING:
              res.push(stringEncodeStr(par.property));
              break;
            case MAKRO_PROPERTYVALUE:
              if (par.propertyValue){
                res.push(par.propertyValue);
              }else{
                res.push(stringEncodeStr(par.property));
              };
              break;
            case MAKRO_VALUE:
              res.push(par.value);
              break;
            case MAKRO_VALUEPROPERTY:
              res.push(par.valueProperty);
              break;
            case MAKRO_LEFT:
              res.push(par.left);
              break;
            case MAKRO_RIGHT:
              res.push(par.right);
              break;
            case MAKRO_OPERATOR:
              res.push(par.operator);
              break;
          };
        };
      };
      if (par.result){
        return res;
      };
      return resStr;
    };
    
    var MAKRO_SELF = 0;
    var MAKRO_PROPERTY = 1;
    var MAKRO_PROPERTYSTRING = 2;
    var MAKRO_PROPERTYVALUE = 3;
    var MAKRO_VALUE = 4;
    var MAKRO_LEFT = 5;
    var MAKRO_OPERATOR = 6;
    var MAKRO_RIGHT = 7;
    var MAKRO_VALUEPROPERTY = 8;
    
    
    errorMsg = {
      accessNotAllowd: {
        id: 200
        , msg: "access to member not allowed"
      },
      typeMissmatch: {
        id: 201
        , msg: "type missmatch"
      },
      missingVariable: {
        id: 202
        , msg: "variable missing"
      },
      operatorMissmatch: {
        id: 203
        , msg: "operator missmatch"
      },
      expectedCallable: {
        id: 204
        , msg: "expected callable expression"
      },
      noConstructorAvailable: {
        id: 205
        , msg: "no Constructor available"
      },
      connectNotPossible: {
        id: 206
        , msg: "connect not possible"
      },
      trackedProvisionalNotImplemented: {
        id: 207
        , msg: "tracked provisional type feature is not implemented"
      }
    };
    
    
    promiseland.classSystem = classSystem;
    
    
    // extra modules
    
    if (ChainableModule){
      Chainable = ChainableModule(promiseland, internals);
      
    };
    
    if (TrackerModule){
      Tracker = TrackerModule(promiseland, internals);
      
    };
    
    return promiseland;
    
  });
})();
