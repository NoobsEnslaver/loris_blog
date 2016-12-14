blog.container.controller = (function(){
	var moduleName = "blog.container.controller";
	var initModule = function ($container, options){

		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
