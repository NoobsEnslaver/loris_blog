blog.search.view = (function(){
	var moduleName = "blog.search.view";
	var initModule = function ($container, options){
		$container.html('<form class="navbar-form navbar-right" role="search">'
				+'<input type="text" class="form-control" placeholder="Поиск">'
				+'</form>');
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
