blog.rightblock = (function(){
	var moduleName = "blog.rightblock";
	var initModule = function ($container, options){
		if(blog.rightblock.view) blog.rightblock.view.initModule($container, options);
		if(blog.rightblock.controller) blog.rightblock.controller.initModule($container, options);
		
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
