blog.data = (function(){
	var moduleName = "blog.data";
	var server = "http://myblog.ru/";
	var conveyor = [];
	var _cache = {};
	
	function handleCoveyor(){
		if(conveyor.length === 0) return;
		var request = conveyor.shift();
		var xhr = new XMLHttpRequest();
		xhr.open(request.verb, server + request.url, false);
		xhr.send();

		if (xhr.status != 200) {
			// обработать ошибку
			if(request.callback && request.callback.error) request.callback.error(xhr.responseText);
			alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		} else {
			if(request.callback && request.callback.success) request.callback.success(xhr.responseText);
			console.log("Response: ~o", xhr.responseText);
		}
		if(request.callback && request.callback.done) request.callback.done(xhr.responseText);
	};

	// Article class constructor (fabric)
	function Article (jobj){
		if(jobj && jobj.id) this._id = jobj.id;
		if(jobj && jobj.title) this._title = jobj.title;
		if(jobj && jobj.tags) this._tags = jobj.tags;
		if(jobj && jobj.text) this._text = jobj.text;

		if ("id" in this) return;
		Object.defineProperties(Article.prototype, {
			"id": {	configurable: false,
				get: function (){
					return this._id;
				}
			},
			"title": {configurable: false,
				set: function (value){
					this._title = value;
					patchArticle(this);
				},
				get: function (){
					if(this._title) return this._title;
					getArticle(this._id);
					return null;
				}
			},
			"tags": {configurable: false,
				set: function (value){
					this._tags = value;
					patchArticle(this);
				},
				get: function (){
					if(this._tags) return this._tags;
					getArticle(this._id);
					return null;
				}
			},
			"text": {configurable: false,
				set: function (value){
					this._text = value;
					patchArticle(this);
				},
				get: function (){
					// if(this._text) return this._text;
					// var _locked = true;
					// var _result;
					// getArticle(this._id, {done: (result)=>{
					// 	_locked = false;
					// 	_result = result;
					// }});
					// return {toString: function(){
					// 	while(_locked){};
					// 	return _result;
					// }};
				}
			}});		
	};
	
	var initModule = function (options){
		getListOfArticles({
			success:(x)=>{ console.log("module %o initialized", moduleName);},
			error:(x)=>{ console.error("Error: module %o not initialized (%o)", moduleName, x);}
		});
		window.setInterval(handleCoveyor, 200);
	};
	
	var getArticle = function (id, callback){
		var request = {
			verb: "GET",
			url: "articles.yaws/" + id,
			callback: callback
		};
		conveyor.push(request);
	};

	var addArticle = function (article, callback){
		var request = {
			verb: "POST",
			url: "articles.yaws",
			data: article,
			callback: callback
		};
		conveyor.push(request);
	};

	var patchArticle = function (article, callback){
		var request = {
			verb: "PATCH",
			url: "articles.yaws/" + article.id,
			data: article,
			callback: callback
		};
		conveyor.push(request);
	};

	var deleteArticle = function (id, callback){
		var request = {
			verb: "DELETE",
			url: "articles.yaws/" + id,
			callback: callback
		};
		conveyor.push(request);
	};	
	
	var getArticlePreview = function (id, callback){
		var request = {
			verb: "GET",
			url: "articles.yaws/" + id + "/preview",
			callback: callback
		};
		conveyor.push(request);
	};
	
	var getListOfArticles = function (callback){
		var request = {
			verb: "GET",
			url: "articles.yaws/list",
			callback: callback
		};
		conveyor.push(request);
	};
	
	var getAllArticles = function (callback){
		var request = {
			verb: "GET",
			url: "articles.yaws",
			callback: callback
		};
		conveyor.push(request);
	};
	
	return {initModule: initModule,
		getArticle: getArticle,
		getArticlePreview: getArticlePreview,
		getListOfArticles: getListOfArticles,
		getAllArticles: getAllArticles,
		articlesCache: _cache
	       };
})();
