blog.view = (function(){
	var moduleName = "blog.view";
	var initModule = function ($container, options){
		$container.html('<div class="blog-masthead">'
				+'<div class="container-fluid">'
				+'<nav class="blog-nav">'
				+'<span id="blog-menu"></span>'
				+'<span id="blog-auth"></span>'
				+'<span id="blog-search"></span>'
				+'</nav></div></div>'
				+'<div id="blog-rightblock"></div>'
				+'<div id="blog-leftblock"></div>'
				+'<div id="blog-container"></div>'
				+'<div id="blog-footer"></div>'
			       );
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
