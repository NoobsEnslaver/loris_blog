blog.rightblock.view = (function(){
	var moduleName = "blog.rightblock.view";
	var initModule = function ($container, options){
		$container.html('<div class="list-group">'
      				+'<a href="#" class="list-group-item">'
      				+'<h4 class="list-group-item-heading">List group item heading</h4>'
      				+'<p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>'
      				+'</a>'
      				+'<a href="#" class="list-group-item">'
      				+'<h4 class="list-group-item-heading">List group item heading</h4>'
      				+'<p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>'
      				+'</a>'
				+'</div>');
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
