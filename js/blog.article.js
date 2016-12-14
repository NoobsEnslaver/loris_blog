blog.article = (function(){
	var moduleName = "blog.article";
	var initModule = function (options){

		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
