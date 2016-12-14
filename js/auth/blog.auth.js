blog.auth = (function(){
	var moduleName = "blog.auth";
	var initModule = function ($container, options){
		if(blog.auth.view) blog.auth.view.initModule($container, options);
		if(blog.auth.controller) blog.auth.controller.initModule($container, options);
		
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
