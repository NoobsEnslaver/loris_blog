var blog = (function(){
	'use strict';
	var moduleName = "blog";
	var initModule = function ($container){
		blog.view.initModule($container);

		if(blog.data) blog.data.initModule("tag1");
		if(blog.auth) blog.auth.initModule($("#blog-auth"));
		if(blog.menu) blog.menu.initModule($("#blog-menu"));
		if(blog.search) blog.search.initModule($("#blog-search"));
		if(blog.container) blog.container.initModule($("#blog-container"));
		//if(blog.leftblock) blog.leftblock.initModule($("#blog-leftblock"));
		//if(blog.rightblock) blog.rightblock.initModule($("#blog-rightblock"), "options1");
		//if(blog.rigthblock) blog.rigthblock.initModule("tag9", "options2");
		if(blog.footer) blog.footer.initModule($("#blog-footer"));
		
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
