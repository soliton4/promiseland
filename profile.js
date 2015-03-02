var profile = (function(){
	var testResourceRe = /^promiseland\/test\//,

		copyOnly = function(filename, mid){
			var list = {
				"promiseland/package.json":1,
			};
			return (mid in list) || /(png|jpg|jpeg|gif|tiff)$/.test(filename);
		};

	return {
		resourceTags:{
			test: function(filename, mid){
				return testResourceRe.test(mid);
			},

			copyOnly: function(filename, mid){
				return copyOnly(filename, mid);
			},

			amd: function(filename, mid){
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			},

			miniExclude: function(filename, mid){
				return /^promiseland\/test\//.test(mid);
			}
		}
	};
})();



