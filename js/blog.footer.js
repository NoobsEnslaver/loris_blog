blog.footer = (function(){
	var moduleName = "blog.footer";
	var initModule = function ($container, options){
		$container.html('<footer class="blog-footer">'
				+'<p>Еще один блог, еще одного <a href="https://vk.com/noobsenslaver">программиста</a>. 2016г.</p>'
				+'<p>'
				+'<a href="#">Вернуться к началу</a>'
				+'</p>'
				+'</footer>');
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
