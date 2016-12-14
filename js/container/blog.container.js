blog.container = (function(){
	var moduleName = "blog.container";
	var initModule = function ($container, options){
		if(blog.container.view) blog.container.view.initModule($container, options);
		if(blog.container.controller) blog.container.controller.initModule($container, options);

		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
