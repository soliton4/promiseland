// promiseLand
//
// Copyright Matthias Behrens 2014
//
//
// promiseLand is a very promising Language
//
//


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
        return par2.apply(args);
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
  
  defineFun([], function(){
    
    var require = requireFun;
    var promiseland;
    
    //var Promise;
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
        obj = JSON.parse(dataStr);
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
    
    var mixinPrototype = function(parProto, parMixin, gotit){
      if (!parMixin || !parMixin.prototype){
        return;
      };
      if (!gotit){
        gotit = {};
      };
      var i;
      for (i in parMixin){
        if (i === "prototype" || gotit[i]){
          continue;
        };
        parProto[i] = parMixin[i];
        gotit[i] = true;
      };
      if (parMixin.prototype){
        mixinPrototype(parProto, parMixin.prototype, gotit);
      };
      
    };
    
    var createClass = function(par, parExtends){
      var constructorFun = par.constructor || function(){};
      var proto = {};
      var i;
      var l;
      
      if (parExtends){
        var realConstructorFun = constructorFun;
        
        if (parExtends instanceof Array){
          l = parExtends.length;
          var extendConstructors = [];
          for (i = 0; i < l; ++i){
            mixinPrototype(proto, parExtends[i]);
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
          mixinPrototype(proto, parExtends);
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
    
    
    var ParserClass = function(par){
      this.parse = function(parStr){
        var p = new Promise();
        _getParser().then(function(parser){
          try{
            console.log(parser.parse);
          parser.parse(parStr).then(function(javascript){
            p.resolve({
              javascript: javascript
            });
          });
          }catch(e){
            console.log("reject parse");
            console.log(e);
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
      
      ProfileBaseClass: Profile,
      ConnectionBaseClass: Connection,
      
      createClass: function(par){
        return createClass(par);
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
    
    
    var _ClassToken;
    
    var classSystem = {
      
      classes: {}
      
      , registerClass: function(parClass, classHash){
        var C = this.classes[classHash];
        if (C){
          return C;
        };
        C = function(){
          _ClassToken = parClass;
        };
        this.classes[classHash] = C;
        return C;
      }
      
      , getClass: function(C){
        _ClassToken = undefined;
        C();
        return _ClassToken;
      }
      
      , classPossibilities: {
        
      }
      
      /*
      [
        { // untyped part
        
        },
        ... // members
      ]
      */
      , createClass: function(untyped, typed, hash){
        var CAr = [];
        var index = Car.length -1;
        var pusher = function(par){
          Car.push(par);
          ++index;
        };
        pusher(untyped);
        
        var possibility = {};
        classPossibilities[hash] = possibility;
        possibility[hash] = true;
        
        var map = {};
        
        var memberCreator = function(t, T, i){
          Car.push(T.default);
          
          var m = {
            set: function(v){
              Car[i] = v;
            }, 
            get: function(){
              return Car[i];
            },
            hash: hash
          };
          map[t] = m;
          
          return i;
        };
        
        var t;
        for (t in typed){
          memberCreator(t, typed[t], index);
        };
        
        
        
        return CAr;
      }
      
      
      , getAssign: function(hash, assignmentHash){
        var p = this.classPossibilities[assignmentHash];
        if (!p || !p[hash]){
          return function(){
            throw {
              id: 100,
              msg: "assignment not allowed"
            };
          };
        };
        // is this possible any faster?
        return function(v){
          return v;
        };
      }
      
    };
    
    
    
    
    return promiseland;
    
  });
})();
