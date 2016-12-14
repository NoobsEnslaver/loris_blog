blog.leftblock = (function(){
	var moduleName = "blog.leftblock";
	var initModule = function ($container, options){
		if(blog.leftblock.view) blog.leftblock.view.initModule($container, options);
		if(blog.leftblock.controller) blog.leftblock.controller.initModule($container, options);

		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
