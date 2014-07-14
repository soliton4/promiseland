
var orig = function(){};


var f = orig;
var first = (function(){
  return {
    newNext: function(n){
      if (n){
        var nextFun = n.fun;
        f = function(){
          orig();
          nextFun();
        };
      }else{
        f = orig;
        last = first;
      };
    },
    newPrev: function(){}
  };
})();

last = first;

var dummy = {
  newNext: function(){},
  newPrev: function(){},
  fun: function(){}
};

function connect(conFun){
  var next = dummy;
  var nextFun = next.fun;
  var prev = last;
  
  var s = {
    newNext: function(n){
      if (n){
        next = n;
      }else{
        next = dummy;
        last = s;
      };
      nextFun = next.fun;
    },
    newPrev: function(p){
      prev = p;
    },
    fun: function(){
      conFun();
      nextFun();
    }
  };
  last.newNext(s);
  last = s;
  
  return function(){
    prev.newNext(next);
    next.newPrev(prev);
    pref = dummy;
    next = dummy; // so it can called repeatedly jtbs;
  };
};



f(); // nothing


var x = {
  
};

var h = function(){
  x.done = true;
};

var r = connect(h);

var r2 = connect(function(){
  x.s = 2;
});

r();

r2();

f();

console.log(x);
