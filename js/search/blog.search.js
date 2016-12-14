blog.search = (function(){
	var moduleName = "blog.search";
	var initModule = function ($container, options){
		if(blog.search.view) blog.search.view.initModule($container, options);
		if(blog.search.controller) blog.search.controller.initModule($container, options);
		
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
