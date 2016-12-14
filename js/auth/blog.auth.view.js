blog.auth.view = (function(){
	var moduleName = "blog.auth.view";
	var initModule = function ($container, options){
		$container.html('<a class="blog-nav-item navbar-right" href="#"><!-- <span class="glyphicon glyphicon-log-in"></span> --> Войти</a>');
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
