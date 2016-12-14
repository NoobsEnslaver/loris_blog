blog.menu = (function(){
	var moduleName = "blog.menu";
	var initModule = function ($container, options){
		if(blog.menu.view) blog.menu.view.initModule($container, options);
		if(blog.menu.controller) blog.menu.controller.initModule($container, options);
		
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
