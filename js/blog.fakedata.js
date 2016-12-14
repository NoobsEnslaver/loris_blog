blog.data = (function(){
	var moduleName = "blog.fakedata";
	var server = "http://myblog.ru/";
	var fakeData = {
		"0": {
			"title": "Article0",
			"tags": ["tag1", "tag2", "tag3"],
			"text": "Hello world!"
		},
		"1": {
			"title": "Article1",
			"tags": ["tag1", "tag2", "tag3"],
			"text": "Hello world!"
		},
		"2": {
			"title": "Article2",
			"tags": ["tag1", "tag2", "tag3"],
			"text": "Hello world!"
		},
		"3": {
			"title": "Article3",
			"tags": ["tag1", "tag2", "tag3"],
			"text": "Hello world!"
		}
	};

	var initModule = function (options){

		console.log("module %o initialized", moduleName);
	};
	
	var getArticle = function (id, callback){
		window.setTimeout(()=>{
			var result = fakeData[id];
			this.articlesCache[id] = result;
			callback(result);			
		}, 1000);
	};
	
	var getArticlePreview = function (id, callback){
		window.setTimeout(()=>{
			var result = fakeData[id];
			this.articlesCache[id] = result;
			callback(result);			
		}, 1000);
	};
	
	var getListOfArticles = function (callback){
		window.setTimeout(()=>{
			var copy_fakedata = JSON.parse(JSON.stringify(fakeData));
			for(var i in copy_fakedata){
				delete copy_fakedata[i].text;
			}
			callback(copy_fakedata);			
		}, 1000);
	};
	
	var getAllArticles = function (callback){
		window.setTimeout(()=>{
			var result = fakeData;
			this.articlesCache = result;
			callback(result);			
		}, 1000);
	};
	
	return {initModule: initModule,
		getArticle: getArticle,
		getArticlePreview: getArticlePreview,
		getListOfArticles: getListOfArticles,
		getAllArticles: getAllArticles,
		articlesCache: {}
	       };
})();
