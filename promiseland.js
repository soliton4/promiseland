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
    // ------------------------------------------------------------------------------------------------------------------------------
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
          if(parElseFun){
            try{
              parElseFun(value);
            }catch(e){
              // maybe we are ignoring to much here, lets check later
            };
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
    
    
    // tracked Promise
    // for internal use to create tracked promises of tracked classes
    var TrackedPromise = function(parTrackFun){
      
      var self = this;
      var lifeLine;
      
      var destroyFun = function(){
        if (lifeLine){
          lifeLine();
          lifeLine = undefined;
        }else{
          self.then(function(){
            if (lifeLine){
              lifeLine();
              lifeLine = undefined;
            };
          });
        };
      };
      
      var t = Tracker(destroyFun);
      var tracker = t[0];
      this.rootTrack = t[1];
      this.memberTrack = t[2];
      var rootTrack = this.rootTrack;
      
      var thenAr = [];
      var elseAr = [];
      
      var thenFun = function(parThenFun, parElseFun){
        if (parThenFun){
          thenAr.push([parThenFun, rootTrack()]);
        };
        if (parElseFun){
          elseAr.push(parElseFun);
        };
        //return returnPromise;
      };
      var thenReuseFun = function(parReuse, parThenFun, parElseFun){
        if (parThenFun){
          thenAr.push([parThenFun, parReuse]);
        }else{
          parReuse();
        };
        if (parElseFun){
          elseAr.push(parElseFun);
        };
        //return returnPromise;
      };
      
      this.resolve = function(value){
        if (value){
          var realValue = value[0]; // its a temporary
          lifeLine = parTrackFun(value, tracker); // this will destroy the temporary
          value = realValue; // create a temporary that will destroy the promise first
        };
        
        thenFun = function(parThenFun){
          if (parThenFun){
            try{
              parThenFun([value, rootTrack()]);
            }catch(e){
              // maybe we are ignoring to much here, lets check later
            };
          };
        };
        thenReuseFun = function(parReuse, parThenFun){
          if (parThenFun){
            try{
              parThenFun([value, parReuse]);
            }catch(e){
              // maybe we are ignoring to much here, lets check later
            };
          }else{
            parReuse();
          };
        };
        if (!thenAr) return;
        var i = 0;
        var l = thenAr.length;
        for (i; i < l; ++i){
          try{
            var entryAr = thenAr[i];
            entryAr[0]([value, entryAr[1]]);
          }catch(e){
            // will those errors ocur? if so what do we do with them?
          };
        };
        thenAr = undefined; // why not delete?
        elseAr = undefined;
        this.resolve = undefined;
        this.reject = undefined;
      };
      this.reject = function(value){
        thenFun = function(u, parElseFun){
          if (parElseFun){
            try{
              parElseFun(value);
            }catch(e){
              // maybe we are ignoring to much here, lets check later
            };
          };
        };
        thenReuseFun = function(parReuse, u, parElseFun){
          parReuse();
          if (parElseFun){
            try{
              parElseFun(value);
            }catch(e){
              // maybe we are ignoring to much here, lets check later
            };
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
        this.resolve = undefined;
        this.reject = undefined;
      };
      
      this.then = function(par1, par2){
        thenFun(par1, par2);
      };
      this.thenReuse = function(parReuse, par1, par2){
        thenReuseFun(parReuse, par1, par2);
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
      this.then.thenReuse = this.thenReuse;
      
      
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
    var moduleData = {};
    
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
      try{
      var data = par.data;
      
      var moduleData = getModuleData(data.hashStr);
      
      
      var funEntry = moduleData.functions[data.nameStr];
      //console.log(funEntry);
      
      if (promiseland.profileHas(funEntry.profile)){
        
        var funType = funEntry.funType;
        var resultType = classSystem.getFunctionReturnType(funType);
        var isVar = true;
        if (!classSystem.isVar(resultType)){
          isVar = false;
        };
        var resultPs = new Promise();
        
        // to be reused for all reject cases
        var tempRejectFun = function(reason){
          resultPs.reject(reason);
        };
        
        var funResult = funEntry.fun.apply(undefined, data.args);
        
        // var case
        if (isVar){
          console.log("isvar true");
          funResult.then(function(parResult){
            resultPs.resolve({
              isVar: true,
              data: parResult
            });
          }, tempRejectFun);
          return resultPs;
        };
        
        // typed case
        
        if (!classSystem.isTemporaryTrackedClass(resultType)){
          console.log("not temp checked");
          // result must be a temporary tracked promise
          resultPs.reject(errorMsg.notASyncableResponse);
          return;
        };
        

        var promiseResult = funResult[0];
        var promiseResultTrack = funResult[1];
        
        var promiseType = classSystem.getClassFromTemporaryTracked(resultType);
        if (!classSystem.isPromiseOfClass(promiseType)){
          // result must be a promsie
          console.log("not promise");
          resultPs.reject(errorMsg.notASyncableResponse);
          promiseResultTrack(); // untrack result
          return;
        };
        
        console.log("waiting for result");
        console.log(promiseResult);
        promiseResult.then(function(parResult){
          console.log("we got a result");
          
          // we dont need the promise itself any longer
          promiseResultTrack(); // untrack promise itself
          
          // parResult is by definition a temporary tracked
          var realResult = parResult[0];
          var trackResult = parResult[1];
          
          if (!realResult){
            // emptyresult
            trackResult();
            resultPs.resolve();
            return;
          };
          
          // sync object
          var internalId = classSystem.getInternalId(realResult);
          if (connection.hasObject(internalId)){
            resultPs.resolve({ // just send the id - the other frame knows what to do
              id: connection.getTransferId(internalId)
            });
            trackResult(); // untrack
            return;
          };
          
          console.log("generating syncRequestData");
          var syncRequestData = classSystem.getSyncRequestData(realResult, connection);
          console.log(syncRequestData);
          resultPs.resolve(syncRequestData);
          trackResult(); // untrack // getSyncRequestData must make its own track entry
          
        }, function(reason){
          console.log("we got a rejection");
          console.log(reason);
          resultPs.reject(reason);
          promiseResultTrack(); // untrack promise itself
        });

        return resultPs;
      };
      }catch(e){
        console.log("error");
        console.log(e);
        var rejectPs = new Promise();
        rejectPs.reject(e);
        return rejectPs;
        
      };

      var rejectPs = new Promise();
      rejectPs.reject(errorMsg.frameNotAvailable);
      return rejectPs;
    };
    
    var maxId = 10000000;
    
    var prepConnection = function(connection, profile){
      var buffer = {};
      var expectid = 1;
      var nextId = 1;
      var requests = {};
      
      var profilenameStr = "" + profile.name();
      
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
      
      var internalObjectMap = {};
      var transferIdMap = {};
      var nextTranseferId = 1;
      
      connection.hasObject = function(parId){
        if (!internalObjects[parId]){
          return false;
        };
        if (internalObjectMap[parId]){
          return true;
        };
        return false;
      };
      connection.getTransferId = function(parId){
        return internalObjectMap[parId].transferId;
      };
      connection.newTransferId = function(parId, parTrack, transferId){
        if (internalObjectMap[parId]){
          if (parTrack){
            parTrack();
          };
          return internalObjectMap[parId].transferId;
        };
        var syncData = classSystem.getSyncData(internalObjects[parId]);
        syncData.connections.push(connection);
        
        if (!transferId){
          transferId = profilenameStr + (nextTranseferId++)
        };
        var entry = {
          transferId: transferId,
          internalId: parId,
          track: parTrack
        };
        internalObjectMap[parId] = entry;
        transferIdMap[entry.transferId] = entry;
        return entry.transferId;
      };
      connection.removeSynced = function(parId){
        if (!internalObjectMap[parId]){
          return;
        };
        var entry = internalObjectMap[parId];
        var transferId = entry.transferId;
        internalObjectMap[entry.internalId] = undefined;
        transferIdMap[entry.transferId] = undefined;
        if (entry.track){
          entry.track();
        };
        connection.createMsg({
          type: "unsync",
          transferId: transferId
        });
        // remove connection from syncdata
        var syncData = classSystem.getSyncData(internalObjectMap[parId]);
        var i = 0;
        var newConAr = [];
        for (i = 0; i < syncData.connections.length; ++i){
          var c = syncData.connections[i];
          if (c !== connection){
            newConAr.push(c);
          };
        };
        syncData.connections = newConAr;
      };
      connection.unsync = function(parTransferId){
        var entry = transferIdMap[parTransferId];
        internalObjectMap[entry.internalId] = undefined;
        transferIdMap[entry.transferId] = undefined;
        if (entry.track){
          entry.track();
        };
      };
      
      connection.syncValue = function(par){
        /*{
            transferId: connection.getTransferId(syncData.getInternalId()),
            memberIdx: memberIdx,
            value: value
          });*/
        connection.createMsg({
          type: "syncValue",
          transferId: par.transferId,
          memberIdx: par.memberIdx,
          value: par.value
        });
        
      };
      
      connection.recieveSyncValue = function(par){
        var entry = transferIdMap[par.transferId];
        var instance = internalObjects[entry.internalId];
        if (!instance){
          return;
        };
        instance[par.memberIdx] = par.value;
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
          }else if (par.msg){
            if (par.data && par.data.type == "unsync"){
              connection.unsync(par.data.transferId);
            };
            if (par.data && par.data.type == "syncValue"){
              connection.recieveSyncValue(par.data);
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
      
      connection.on("disconnect", function(dataStr){
        var e;
        for (e in internalObjectMap){
          var entry = internalObjectMap[e];
          if (entry.track){
            entry.track();
          };
        };
        internalObjectMap = {};
        transferIdMap = {};
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
      
      connection.createMsg = function(data){
        var id = sendData({
          msg: true
          , data: data
        });
        return;
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
      var connection = par.connection;
      var args = [];
      if (par.args && par.args.length){
        var i = 0;
        for (i = 0; i < par.args.length; ++i){
          args.push(par.args[i]);
        };
      };

      var funType = par.funType;

      var resultType = classSystem.getFunctionReturnType(funType);
      var isVar = true;
      if (!classSystem.isVar(resultType)){
        isVar = false;
      };

      var ps = connection.createRequest({
        "type": "remoteexec",
        hashStr: par.hashStr,
        nameStr: par.nameStr,
        args: args
      });

      ps.then(function(res){
        if (isVar && res.isVar){
          par.promise.resolve(res.data);
        };
        if (isVar || res.isVar){
          par.promise.reject(errorMsg.typeMissmatch);
          // needs check for tracking
        };

        // typed case
        if (!classSystem.isTemporaryTrackedClass(resultType)){
          // result must be a temporary tracked promise
          par.promise.reject(errorMsg.notASyncableResponse);
          return;
        };
        var promiseType = classSystem.getClassFromTemporaryTracked(resultType);
        if (!classSystem.isPromiseOfClass(promiseType)){
          // result must be a promsie
          par.promise.reject(errorMsg.notASyncableResponse);
          return;
        };
        
        // empty result
        if (!res){
          par.promise.resolve();
          return;
        };
        
        // we should have this obj already
        if (res.id){
          connection.getObjectByTransferId(res.id).then(function(parObj){
            par.promise.resolve(parObj);
          }, function(reason){
            par.promise.reject(reason);
          });
          return;
        };
        
        // a new obj to track
        var obj = classSystem.getObjFromSyncData(res, connection);
        par.promise.resolve(obj);
        if (obj){
          obj[1]();
        };

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
    
    var getModuleData = function(parHash){
      if (!moduleData[parHash]){
        moduleData[parHash] = {
          functions: {},
          classes: {}
        };
      };
      return moduleData[parHash];
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
      
      , registerRemote: function(profileNameStr, hashStr, nameStr, fun, funType){
        var moduleData = getModuleData(hashStr);
        var entry = {
          profile: profileNameStr,
          fun: fun,
          funType: funType
        };
        moduleData.functions[nameStr] = entry;
        classSystem.definitionPromise(funType).then(function(definedFunType){
          entry.funType = definedFunType;
        });
      }
      
      
      , _registerModule: function(par){
        if (this._hasModule(par.hashStr)){
          return false;
        };
        modules[par.hashStr] = {
          "promising": par["promising"],
          "module": par["module"]
          //functions: {}
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
      
      , remoteExec: function(hashStr, nameStr, args, parPromise){
        var promise = parPromise;
        var ret = promise.promise;
        var moduleData = getModuleData(hashStr);
        if (!moduleData || !moduleData.functions[nameStr]){
          promise.reject(errorMsg.missingRemoteFun);
          return ret;
        };
        var entry = moduleData.functions[nameStr];
        var profile = findProfile(entry.profile);
        if (!profile){
          promise.reject(errorMsg.frameNotFound);
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
          promise: promise,
          funType: entry.funType
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
    
    var nextInternalId = 1;
    getNewInternalId = function(){
      return nextInternalId++;
    };
    var internalObjects = {};
    
    var syncFun = function(parInstance, memberIdx, mType, value){
      var syncData = classSystem.getSyncData(parInstance);
      if (syncData){
        var i = 0;
        for (i = 0; i < syncData.connections.length; ++i){
          //console.log("found connection to sync");
          var connection = syncData.connections[i];
          connection.syncValue({
            transferId: connection.getTransferId(syncData.getInternalId()),
            memberIdx: memberIdx,
            value: value
          });
          //console.log("done sync msg");
        };
      };
    };
    
    var destroySynced = function(parSyncData){
      if (!parSyncData){
        return;
      };
      var syncData = parSyncData;
      var connections = [];
      var i = 0;
      for (i = 0; i < syncData.connections.length; ++i){
        connections.push(syncData.connections[i]);
      };
      for (i = 0; i < connections.length; ++i){
        var connection = connections[i];
        connection.removeSynced(syncData.getInternalId());
      };
    };
    var registerSyncClass = function(hashStr, nameStr, parType){
      var moduleData = getModuleData(hashStr);
      moduleData.classes[nameStr] = {
        "type": parType
      };
    };
    var getSyncedClass = function(hashStr, nameStr){
      var moduleData = getModuleData(hashStr);
      if (moduleData && moduleData.classes[nameStr]){
        return moduleData.classes[nameStr].type;
      };
    }


    var classSystem = {
      /*
        a placeholder for a class that will be constructed in the future
        can be used wildly generic for multiple purposes
        the class object itself is different from the final class object
        you can access the final class object via definitionPromise or readyPromise
      */
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
      
      /*
        returns the actual class object (hidefunction)
        the basic attributes of the class are available (such as track / sync / frame etc )
        however members are not available yet, the class can not be used to generate code for its members, nor can it be constructed
        isReady indicates weather or not a class is ready to be used
      */
      definitionPromise: function(parType){
        var typeDef = getClass(parType);
        if (typeDef.provisional){
          return typeDef.promise;
        };
        var p = new Promise();
        p.resolve(parType);
        return p;
      },
      /*
        the final class everything is ready to use. it could be that some of the member types are not ready yet,
        however this has no influence on the class itself. you can use it within the classsystem without limits
      */
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
        var self = this;
        if (this.isProvisional(parType)){
          var pr = this._createProvisionalClass();
          this.definitionPromise(parType).then(function(parDefinedClass){
            self._resolveProvisional(pr, self._createTemporaryTrackedClass(parDefinedClass));
          });
          return pr;
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
          isReady: false,
          readyPromise: new Promise()
        };
        var cf = classHider(cDef);
        
        self.readyPromise(parType).then(function(){
          cDef.ready = true;
          cDef.readyPromise.resolve(cf);
        });
        
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
      
      
      _createPromiseOfClass: function(parType){
        var self = this;
        if (this.isProvisional(parType)){
          var pr = this._createProvisionalClass();
          this.definitionPromise(parType).then(function(parDefinedClass){
            self._resolveProvisional(pr, self._createPromiseOfClass(parDefinedClass));
          });
          return pr;
        };
        if (this.isVar(parType)){
          return parType;
        };
        
        var track = false;
        if (this.isTrackedClass(parType)){
          track = true;
        };
        
        var map = {
          //members: {},
          //"extends": []
        };
        
        var cDef = {
          promiseOf: true,
          type: parType,
          isReady: true,
          readyPromise: new Promise(),
          track: track,
          map: map
        };
        var cf = classHider(cDef);
        
        if (track){
          //cDef.trackerIdx = "tracker";
          cDef.map.trackRootIdx = "rootTrack";
          cDef.map.trackMemberIdx = "memberTrack";
          
          var pcDef = getClass(parType);
          var memberTrackMemberIdx = pcDef.map.trackMemberIdx;

          cDef.constructor = function(){
            var r = new TrackedPromise(function(parTempValue, parTracker){
              var v = parTempValue[0]; // the value
              var l = v[memberTrackMemberIdx](parTracker);
              parTempValue[1](); // untrack temporary
              return l; // the lifeLine
            });
            return [r, r.rootTrack()];
          };
          
        }else{
          cDef.constructor = Promise;
          
        };
        
        cDef.readyPromise.resolve(cf);
        
        return cf;
      },
      
      isPromiseOfClass: function(parType){
        var cDef = getClass(parType);
        if (cDef.promiseOf){
          return true;
        };
        return false;
      },
      
      getClassFromPromiseOf: function(parType){
        var self = this;
        if (this.isProvisional(parType)){
          var pr = this._createProvisionalClass();
          this.definitionPromise(parType).then(function(parDefinedClass){
            self._resolveProvisional(pr, self.getClassFromPromiseOf(parDefinedClass));
          });
          return pr;
        };
        if (this.isTemporaryTrackedClass(parType)){
          return this.getClassFromPromiseOf(this.getClassFromTemporaryTracked(parType));
        };
        if (this.isPromiseOfClass(parType)){
          var cDef = getClass(parType);
          return this._createTemporaryTrackedClass(cDef.type);
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
      
      
      // wrap arround _createClass
      createClass: function(classLiteral, parDefaults){
        var self = this;
        return self._createClass(classLiteral, parDefaults);
        
      },
      _membersDefined: function(classLiteral){
        var self = this;
        
        var cnt = 1;
        var retPs = new Promise();
        
        var check = function(){
          if (cnt){
            return;
          };
          retPs.resolve(classLiteral);
        };
        
        var addMember = function(m){
          ++cnt;
          self.definitionPromise(m.type).then(function(definedType){
            m.type = definedType;
            --cnt;
            check();
          });
        };
        
        if (classLiteral.members){
          i = 0;
          for (i; i < classLiteral.members.length; ++i){
            addMember(classLiteral.members[i]);
          };
        };
        --cnt;
        check();
        
        return retPs;
        
      },
      
      /*
      [
        { // untyped part
        
        },
        ... // members
      ]
      */
      _createClass: function(classLiteral, parDefaults){
        var cAr = [];
        var self = this;
        
        var map = {
          members: {},
          "extends": []
        };
        
        // -------------------------------------------------------------------------
        // basic unfinished definition
        var cDef = {
          constructor: undefined, // later
          map: map,
          isReady: false,
          track: (classLiteral.track || classLiteral.sync) ? true : false,
          sync: classLiteral.sync,
          readyPromise: new Promise()
        };
        //class hider to pass type arround without changing it
        var cf = classHider(cDef);
        
        cAr.push(cf); // cAr[0] is allways the class
        
        
        var sync = classLiteral.sync ? true : false;
        var syncAll = false;
        if (sync){
          if (classLiteral.sync.all){
            syncAll = true;
          };
        };
        
        
        // -------------------------------------------------------------------------
        // track
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
        
        if (sync){
          map.syncDataIdx = cAr.length;
          cAr.push(function(){
            var self = this;
            var internalId;
            var syncData = {
              getInternalId: function(){
                if (internalId){
                  return internalId;
                };
                internalId = getNewInternalId();
                internalObjects[internalId] = self;
                return internalId;
              },
              connections: []
            };
            this[map.syncDataIdx] = function(){
              return syncData;
            };
            return syncData;
          });
        };
        
        
        // -------------------------------------------------------------------------
        // free part
        if (classLiteral.hasFreePart){
          var freepart = {};
          map.freePart = cAr.length;
          cAr.push(freepart);
          map.getMemberCode = [MAKRO_SELF, "[" + map.freePart + "][", MAKRO_PROPERTYVALUE, "]"];
          map.setMemberCode = [MAKRO_SELF, "[" + map.freePart + "][", MAKRO_PROPERTYVALUE, "] ", MAKRO_OPERATOR, " ", MAKRO_VALUE];
        };
        
        
        var helpAr = [];
        var makeHelpAr = function(){
          return helpAr.slice();
        };
        
        // -------------------------------------------------------------------------
        // connect
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
        
        
        
        // -------------------------------------------------------------------------
        // members
        var constructorDef;
        var constructorFun;
        
        var destroyDef;
        var destroyFun;
        var untrackIdxAr = [];
        
        var addMember = function(m){
          var mDef = {
            index: cAr.length
          };
          if (syncAll || m.sync){
            mDef.sync = true;
          };
          mDef.type = m.type;
          var mType = m.type;
          
          var memberIdx = mDef.index;
          var isTrackedMember = self.isTrackedClass(mDef.type);
          
          
          if (mDef.sync){
            mDef.hasSetter = true;
            if (isTrackedMember){
              mDef.defaultSetter = function(vAr){ syncFun(this, memberIdx, mType, vAr[0]); return vAr; };
            }else{
              mDef.defaultSetter = function(v){ syncFun(this, memberIdx, mType, v); return v; };
            };
          };
          
          map.members[m.name] = mDef;
          var def = parDefaults ? parDefaults[m.name] : undefined;
          cAr.push(def);
          
          if (mDef.hasSetter){
            mDef.setterIdx = cAr.length;
            cAr.push(mDef.defaultSetter);
          };
          
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
          
          mDef.getCode = [MAKRO_SELF, "[" + mDef.index + "]"];
          if (mDef.hasSetter){
            // call setter before assigning
            mDef.setCode = ["(function(s, v){ v = s[" + mDef.setterIdx + "](v); s[" + mDef.index + "] ", MAKRO_OPERATOR, " v; return v; })(", MAKRO_SELF, ", ", MAKRO_VALUE, ")"];
            
          }else{
            mDef.setCode = [MAKRO_SELF, "[" + mDef.index + "] ", MAKRO_OPERATOR, " " , MAKRO_VALUE];
            
          };
          if (isTrackedMember){
            var mCDef = getClass(mDef.type);
            var memberTrackMemberIdx = mCDef.map.trackMemberIdx;
            
            mDef.trackIndex = cAr.length;
            cAr.push(undefined);
            untrackIdxAr.push(mDef.trackIndex);
            
            if (cDef.track){
              if (mDef.hasSetter){
                mDef.setCode = [runtimeError(errorMsg.onlyTrackedClassesCanContainTrackedMembers)]; // setters are allways called as temporary
                mDef.setCodeFromTemporary = ["(function(s, vAr){ vAr = s[" + mDef.setterIdx + "](vAr); var v = vAr[0]; s[" + mDef.index + "] ", MAKRO_OPERATOR, " v; if(s[" + mDef.trackIndex + "]){ s[" + mDef.trackIndex + "](); }; s[" + mDef.trackIndex + "] = v[" + memberTrackMemberIdx + "](s[" + trackerIdx + "]); vAr[1](); return v; })(", MAKRO_SELF, ", ", MAKRO_VALUE, ")"];
                
              }else{
                mDef.setCode = ["(function(s, v){ s[" + mDef.index + "] ", MAKRO_OPERATOR, " v; if(s[" + mDef.trackIndex + "]){ s[" + mDef.trackIndex + "](); }; s[" + mDef.trackIndex + "] = v[" + memberTrackMemberIdx + "](s[" + trackerIdx + "]); return v; })(", MAKRO_SELF, ", ", MAKRO_VALUE, ")"];
                mDef.setCodeFromTemporary = ["(function(s, vAr){ var v = vAr[0]; s[" + mDef.index + "] ", MAKRO_OPERATOR, " v; if(s[" + mDef.trackIndex + "]){ s[" + mDef.trackIndex + "](); }; s[" + mDef.trackIndex + "] = v[" + memberTrackMemberIdx + "](s[" + trackerIdx + "]); vAr[1](); return v; })(", MAKRO_SELF, ", ", MAKRO_VALUE, ")"];
                
              };
            }else{
              mDef.setCode = [runtimeError(errorMsg.onlyTrackedClassesCanContainTrackedMembers)];
              mDef.setCodeFromTemporary = [runtimeError(errorMsg.onlyTrackedClassesCanContainTrackedMembers)];
            };
          };
          mDef.connectFunCode = [MAKRO_SELF, "[" + map.connectIdx + "](" + mDef.index + ", ", MAKRO_VALUE, ")"];
          mDef.connectSlotCode = [MAKRO_SELF, "[" + map.connectIdx + "](" + mDef.index + ", ", MAKRO_VALUE, "[", MAKRO_VALUEPROPERTY, "], ", MAKRO_VALUE, ")"];
          
        };
        
        var createMembersPs = function(){
          var donePs = new Promise();
          self._membersDefined(classLiteral).then(function(){
            
            var i;
            if (classLiteral.members){
              i = 0;
              for (i; i < classLiteral.members.length; ++i){
                addMember(classLiteral.members[i]);
              };
            };
            
            donePs.resolve();
          });
          return donePs;
        };
        var memberPs = new createMembersPs();
        
        
        var i;
        
        
        
        // ------------------------------------------------------------------
        // constructor creation
        
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
        
        
        
        
        var finalPs = new Promise();
        memberPs.then(function(){

          //helperArray
          for (i = 0; i < cAr.length; ++i){
            helpAr.push(undefined);
          };
          
          if (constructorDef){
            cDef.constructorArguments = [];
            var realConstructor = cDef.constructor;
            if (cDef.track){
              // special case for tracked classes
              // the real constructer returns a temporary
              cDef.constructor = function(){
                var instance = realConstructor();
                constructorFun.apply(instance[0], arguments);
                return instance;
              };
            }else{
              cDef.constructor = function(){
                var instance = realConstructor();
                constructorFun.apply(instance, arguments);
                return instance;
              };
            };
            var conDef = getClass(constructorDef.type);
            cDef.constructorType = self.createFunctionType({
              "return": cf,
              arguments: conDef.arguments
            });

          }else{
            cDef.constructorType = self.createFunctionType({
              "return": cf
            });

          };


          if (cDef.track){
            var _destroyFun;
            if (untrackIdxAr.length){
              // has tracked members
              if (destroyDef){
                _destroyFun = destroyFun;
                destroyFun = function(){
                  var i;
                  for (i = 0; i < untrackIdxAr.length; ++i){
                    var curIdx = untrackIdxAr[i];
                    var tFun = this[curIdx];
                    this[curIdx] = undefined;
                    if (tFun){
                      tFun();
                    };
                  };
                  _destroyFun.apply(this);
                  this.splice(0,this.length);
                };
              }else{
                destroyFun = function(){
                  var i;
                  for (i = 0; i < untrackIdxAr.length; ++i){
                    var tFun = this[untrackIdxAr[i]];
                    if (tFun){
                      tFun();
                    };
                  };
                  this.splice(0,this.length);
                };
              };

            }else{
              if (destroyDef){
                _destroyFun = destroyFun;
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
          };
          if (sync){
            var _sync_destroyFun = destroyFun;
            destroyFun = function(){
              var syncData = classSystem.getSyncData(this);
              _sync_destroyFun.apply(this);
              destroySynced(syncData);
            };
          };

          finalPs.resolve();
        });
        

        finalPs.then(function(){
          cDef.isReady = true;
          cDef.readyPromise.resolve(cf);
        });
        
        if (sync){
          if (classLiteral.name){
            cDef.syncId = {
              hash: classLiteral.hashStr,
              name: classLiteral.name
            };
            registerSyncClass(classLiteral.hashStr, classLiteral.name, cf);
          };
        };
        
        return cf;
      }
      
      , getInternalId: function(parInstance){
        var type = parInstance[0];
        cDef = getClass(type);
        if (cDef.sync){
          var syncData = parInstance[cDef.map.syncDataIdx]();
          return syncData.getInternalId();
        };
        return;
      }
      
      , getSyncData: function(parInstance){
        var type = parInstance[0];
        cDef = getClass(type);
        if (cDef.sync){
          return parInstance[cDef.map.syncDataIdx]();
        };
        return;
      }
      
      , getSyncRequestData: function(parInstance, parConnection){
        var type = parInstance[0];
        cDef = getClass(type);
        if (cDef.sync){
          var syncMembers = {
            m:[]
          };
          var membersMap = cDef.map.members;
          var memberName;
          for (memberName in membersMap){
            //console.log(cDef.map.members);
            var m = membersMap[memberName];
            if (typeof parInstance[m.index] != "function"){
              syncMembers[m.index] = parInstance[m.index];
              syncMembers.m.push(m.index);
            };
          };
          var track = this.getTrack(parInstance);
          var syncData = {
            members: syncMembers,
            syncId: cDef.syncId,
            transferId: parConnection.newTransferId(this.getInternalId(parInstance), track)
          };
          return syncData;
        };
        return;
      }
      
      , getObjFromSyncData: function(syncRequestData, parConnection){
        var syncId = syncRequestData.syncId;
        var type = getSyncedClass(syncId.hash, syncId.name);
        if (!type){
          return;
        };
        var ConFun = this.getTypeConstructor(type);
        var instance = new ConFun();
        var realInstance = instance[0];
        
        parConnection.newTransferId(this.getInternalId(realInstance), undefined, syncRequestData.transferId);
        
        var syncMembers = syncRequestData.members;
        var m = syncMembers.m;
        var i = 0;
        for (i = 0; i < m.length; ++i){
          realInstance[m[i]] = syncMembers[m[i]];
        };
        
        return instance;
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
        if (cDef.arguments && cDef.arguments[parIndex]){
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
        if (cDef.isVar){
          if (!this.canSet(this.getBuiltinType("var"), par.valueType)){
            return runtimeError(errorMsg.typeMissmatch, par);
          };
          return assembleCode([MAKRO_SELF, "[", MAKRO_PROPERTYVALUE, "] = ", MAKRO_VALUE], par);
        };
        var map = cDef.map;
        
        if (map && par.property){
          if (map.members[par.property]){
            var propertyType = this.getPropertyType({
              "type": par["type"],
              property: par.property
            });
            if (!this.canSet(propertyType, par.valueType)){
              if ( this.canSet(propertyType, this.getClassFromTemporaryTracked(par.valueType)) ){
                // tracked temporary
                return assembleCode(map.members[par.property].setCodeFromTemporary, par);
              };

              return runtimeError(errorMsg.typeMissmatch, par);
            };
            return assembleCode(map.members[par.property].setCode, par);
          };
        };
        if (map && map.setMemberCode){
          if (!this.canSet(this.getBuiltinType("var"), par.valueType)){
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
        if (this.isTemporaryTrackedClass(par["valueType"])){
          return assembleCode([MAKRO_VALUE], par);
        };
        if (!this.isTrackedClass(par["valueType"])){
          return assembleCode([MAKRO_VALUE], par);
        };
        var cDef = getClass(par["valueType"]);
        
        var codeAr = ["(function(v){ if(!v){ return; }; return [v, v[" + cDef.map.trackRootIdx + "]()];})(", MAKRO_VALUE, ")"];
        return assembleCode(codeAr, par);
        
      }
      
      , getTrack: function(parInstance){
        if (!parInstance){
          return;
        };
        var type = parInstance[0];
        cDef = getClass(type);
        return parInstance[cDef.map.trackRootIdx]();
      }
      
      , getDestroyTemporaryClassCode: function(par){
        if (!this.isTemporaryTrackedClass(par.valueType)){
          if (par.noValueRequired){
            return assembleCode([], par);
          };
          return assembleCode([MAKRO_VALUE], par);
        };
        
        var codeAr = ["(function(v){ v[1](); return v[0]; })(", MAKRO_VALUE, ")"];
        return assembleCode(codeAr, par);
        
      }
      
      , dereferencePromisePreCode: function(par){
        var codeAr = [MAKRO_VALUE, ".then("];
        if (this.isTemporaryTrackedClass(par["valueType"])){
          codeAr = ["/*temptracked promise*/(function(vAr){\nvar r = vAr[0].thenReuse(vAr[1], "];
        };
        return assembleCode(codeAr, par);
      }
      , dereferencePromisePostCode: function(par){
        var codeAr = [");\n"];
        if (this.isTemporaryTrackedClass(par["valueType"])){
          codeAr = [");\nreturn r;\n})(", MAKRO_VALUE, ");/*temptracked promise end*/\n"];
        };
        return assembleCode(codeAr, par);
      }
      
      , promisingReturnTypeCheck: function(par){
        if (!this.isPromiseOfClass(par["type"])){
          return runtimeError(errorMsg.notAPromise, par);
        };
        return assembleCode([], par);
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
                  "/*temp tracked assign*/(function(vAr){\n",
                  "if (_T", MAKRO_SELF, "){ _T", MAKRO_SELF, "(); };\n",  // call old tracker
                  "if(vAr){\nvar v = vAr[0];\n", // temp value
                  MAKRO_SELF, " ", operator, " v;\n",  // assign to variable
                  "_T", MAKRO_SELF, " = vAr[1];\n",            // reuse existing tracker to save function calls
                  "return v;\n}else{\n",                        // reuse existing tracker to save function calls
                  MAKRO_SELF, " ", operator, " undefined; ",  // assign undefined to variable
                  "_T", MAKRO_SELF, " = undefined;\n",         // assign undefined to tracker
                  "return;\n}; })",                            // return undefined
                  "(", MAKRO_VALUE, ")/*end temp assign*/\n"                   // call closure
                ], par);
              };
            };
            return runtimeError(errorMsg.typeMissmatch, par);
          };
          return assembleCode([MAKRO_SELF, " ", operator, " ", MAKRO_VALUE], par);
        };
        return runtimeError(errorMsg.missingVariable, par);
      }
      
      , declareReturnPromiseCode: function(par){
        var retType = par["type"];
        
        var track = false;
        if (this.isTemporaryTrackedClass(retType)){
          track = true;
          retType = this.getClassFromTemporaryTracked(retType);
        };
        if (this.isTrackedClass(retType)){
          track = true;
        };
        var assemblyAr;
        if (track){
          assemblyAr = ["var ", par.name, ";\nvar _T", par.name, ";\n(function(){ var vAr = new ", MAKRO_CONSTRUCTOR, "(); ", par.name, " = vAr[0]; _T", par.name, " = vAr[1]; })();"];
        }else{
          assemblyAr = ["var ", par.name, " = new __Promise();\n"];
        };
        return assembleCode(assemblyAr, par);
      }
      , returnReturnPromiseCode: function(par){
        var retType = par["type"];
        
        var track = false;
        if (this.isTemporaryTrackedClass(retType)){
          track = true;
          retType = this.getClassFromTemporaryTracked(retType);
        };
        if (this.isTrackedClass(retType)){
          track = true;
        };
        var assemblyAr;
        if (track){
          assemblyAr = ["return [", par.name, ", _T", par.name, "];\n"];
        }else{
          assemblyAr = ["return ", par.name, ";\n"];
        };
        return assembleCode(assemblyAr, par);
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
      , getProcessParameterCode: function(par){
        var cDef = getClass(par["type"]);
        
        var assemblyAr = [];
        if (cDef.track){
          assemblyAr.push("var _T");
          assemblyAr.push(par.name);
          assemblyAr.push(";\n");
          assemblyAr.push("if(");
          assemblyAr.push(par.name);
          assemblyAr.push("){ _T");
          assemblyAr.push(par.name);
          assemblyAr.push(" = ");
          assemblyAr.push(par.name);
          assemblyAr.push("[1];\n");
          assemblyAr.push(par.name);
          assemblyAr.push(" = ");
          assemblyAr.push(par.name);
          assemblyAr.push("[0];}\n");
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
            case MAKRO_RESOLVEFUN:
              res.push(par.resolveFun || "undefined");
              break;
            case MAKRO_REJECTFUN:
              res.push(par.rejectFun || "undefined");
              break;
            case MAKRO_TYPEVALUE:
              res.push(par.typeValue);
              break;
            case MAKRO_CONSTRUCTOR:
              res.push(par.constructorName);
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
    var MAKRO_RESOLVEFUN = 9;
    var MAKRO_REJECTFUN = 10;
    var MAKRO_TYPEVALUE = 11;
    var MAKRO_CONSTRUCTOR = 12;
    
    
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
      },
      onlyTrackedClassesCanContainTrackedMembers: {
        id: 208
        , msg: "only tracked classes can contain tracked members"
      },
      notAPromise: {
        id: 209
        , msg: "type is not a promise"
      },
      notASyncableResponse: {
        id: 210
        , msg: "not a syncable response"
      },
      
      
      missingRemoteFun: {
        id: 801
        , msg: "remote function not registred"
      },
      frameNotAvailable: {
        id: 802,
        msg: "requested frame not available"
      },
      frameNotFound: {
        id: 803,
        msg: "requested frame not found"
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
