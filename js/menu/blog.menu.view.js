blog.menu.view = (function(){
	var moduleName = "blog.menu.view";
	var initModule = function ($container, options){
		$container.html('<div class="navbar-header">'
				+'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'
				+'<span class="icon-bar"></span>'
				+'<span class="icon-bar"></span>'
				+'<span class="icon-bar"></span>'
      				+'</button>'
      				+'<a class="blog-nav-item navbar-brand" href="#">Блог программиста  </a>'
				+'</div>'
				+'<a class="blog-nav-item active" href="#">Блокноты</a>'
				+'<a class="blog-nav-item" href="#">Сервисы</a>'
				+'<a class="blog-nav-item" href="#">Press</a>'
				+'<a class="blog-nav-item" href="#">New hires</a>'
				+'<a class="blog-nav-item" href="#">About</a>');
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
