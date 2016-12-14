blog.container.view = (function(){
	var moduleName = "blog.container.view";
	var initModule = function ($container, options){
		$container.html('<div class="container">'
				+'<ul class="nav nav-tabs">'
				+'<li class="active"><a href="#prog-notepad" data-toggle="tab">Программистские</a></li>'
				+'<li><a href="#phi-notepad" data-toggle="tab">Философские</a></li>'
				+'<li><a href="#tech-notepad" data-toggle="tab">Технические</a></li>'
				+'<li class="disabled"><a href="#etc-notepad" data-toggle="tab">Остальные</a></li>'
				+'</ul>'
				+'<div id="myTabContent" class="tab-content">'
				+'<div class="tab-pane fade active in" id="prog-notepad">'
				+'<p>Raw denim you probably havent heard of them jean shorts Austin.  Nesciunt tofu stumptown aliqua, retro synth master cleanse.  Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>'
				+'</div>'
	  // <div class="tab-pane fade" id="phi-notepad">
	  //   <div class="blog-post">
          //     <h2 class="blog-post-title">Sample blog post</h2>
          //     <p class="blog-post-meta">January 1, 2014	by <a href="#">Mark</a></p>

          //     <p>
	  // 	This blog post shows a few different types of content
	  // 	that's supported and styled with Bootstrap. Basic
	  // 	typography, images, and code are all supported.
	  //     </p>
          //   <hr>
          //     <p>
	  // 	Cum sociis natoque penatibus et magnis <a href="#">dis
	  // 	  parturient montes</a>, nascetur ridiculus mus. Aenean eu
	  // 	leo quam. Pellentesque ornare sem lacinia quam venenatis
	  // 	vestibulum. Sed posuere consectetur est at lobortis. Cras
	  // 	mattis consectetur purus sit amet fermentum.
	  //     </p>
          //     <blockquote>
	  // 	<p>
	  // 	  Curabitur blandit tempus porttitor. <strong>Nullam
	  // 	    quis risus eget urna mollis</strong> ornare vel eu
	  // 	  leo. Nullam id dolor id nibh ultricies vehicula ut id
	  // 	  elit.
	  // 	</p>
          //     </blockquote>
          //     <p>
	  // 	Etiam porta <em>sem malesuada magna</em> mollis
	  // 	euismod. Cras mattis consectetur purus sit amet
	  // 	fermentum. Aenean lacinia bibendum nulla sed
	  // 	consectetur.
	  //     </p>
          //     <h2>Heading</h2>
          //     <p>
	  // 	Vivamus sagittis lacus vel augue laoreet rutrum
	  // 	faucibus dolor auctor. Duis mollis, est non commodo
	  // 	luctus, nisi erat porttitor ligula, eget lacinia odio sem
	  // 	nec elit. Morbi leo risus, porta ac consectetur ac,
	  // 	vestibulum at eros.
	  //     </p>
          //     <h3>Sub-heading</h3>
          //     <p>
	  // 	Cum sociis natoque penatibus et magnis dis parturient
	  // 	montes, nascetur ridiculus mus.
	  //     </p>
          //     <pre><code>Example code block</code></pre>
          //     <p>
	  // 	Aenean lacinia bibendum nulla sed consectetur. Etiam
	  // 	porta sem malesuada magna mollis euismod. Fusce dapibus,
	  // 	tellus ac cursus commodo, tortor mauris condimentum nibh,
	  // 	ut fermentum massa.
	  //     </p>
          //     <h3>Sub-heading</h3>
          //     <p>
	  // 	Cum sociis natoque penatibus et magnis dis parturient
          //   montes, nascetur ridiculus mus. Aenean lacinia bibendum
          //   nulla sed consectetur. Etiam porta sem malesuada magna
          //   mollis euismod. Fusce dapibus, tellus ac cursus commodo,
          //   tortor mauris condimentum nibh, ut fermentum massa justo
	  // 	sit amet risus.
	  //     </p>
          //     <ul>
	  // 	<li>Praesent commodo cursus magna, vel scelerisque nisl
	  // 	  consectetur et.</li>
	  // 	<li>Donec id elit non mi porta gravida at eget
	  // 	  metus.</li>
	  // 	<li>Nulla vitae elit libero, a pharetra augue.</li>
          //     </ul>
          //     <p>Donec ullamcorper nulla non metus auctor
	  // 	fringilla. Nulla vitae elit libero, a pharetra augue.</p>
          //     <ol>
	  // 	<li>Vestibulum id ligula porta felis euismod
	  // 	  semper.</li>
	  // 	<li>Cum sociis natoque penatibus et magnis dis
	  // 	  parturient montes, nascetur ridiculus mus.</li>
	  // 	<li>Maecenas sed diam eget risus varius blandit sit amet
	  // 	  non magna.</li>
          //     </ol>
          //     <p>Cras mattis consectetur purus sit amet fermentum. Sed
	  // 	posuere consectetur est at lobortis.</p>
          //   </div><!-- /.blog-post -->
	    
	  //   <p>Food truck fixie locavore, accusamus mcsweeney's marfa
	  //   nulla single-origin coffee squid. Exercitation +1 labore
	  //   velit, blog sartorial PBR leggings next level wes anderson
	  //   artisan four loko farm-to-table craft beer twee. Qui photo
	  //   booth letterpress, commodo enim craft beer mlkshk aliquip
	  //   jean shorts ullamco ad vinyl cillum PBR. Homo nostrud
	  //   organic, assumenda labore aesthetic magna delectus
	  //     mollit.
	  //   </p>
	  // </div>
	  // <div class="tab-pane fade" id="tech-notepad">
	  //   <p>Etsy mixtape wayfarers, ethical wes anderson tofu
	  //   before they sold out mcsweeney's organic lomo retro fanny
	  //   pack lo-fi farm-to-table readymade. Messenger bag gentrify
	  //   pitchfork tattooed craft beer, iphone skateboard locavore
	  //   carles etsy salvia banksy hoodie helvetica. DIY synth PBR
	  //   banksy irony. Leggings gentrify squid 8-bit cred
	  //   pitchfork.</p>
	  // </div>
	  // <div class="tab-pane fade" id="etc-notepad">
	  //   <p>Trust fund seitan letterpress, keytar raw denim
	  //   keffiyeh etsy art party before they sold out master
	  //   cleanse gluten-free squid scenester freegan cosby
	  //   sweater. Fanny pack portland seitan DIY, art party
	  //   locavore wolf cliche high life echo park Austin. Cred
	  //   vinyl keffiyeh DIY salvia PBR, banh mi before they sold
	  //   out farm-to-table VHS viral locavore cosby sweater.</p>
	  // </div>
				+'</div>'
				+'<ul class="pager">'
				+'<li class="previous disabled"><a href="#">&larr; Туда</a></li>'
				+'<li class="next"><a href="#">Сюда &rarr;</a></li>'
				+'</ul>'
				+'<ul class="pagination">'
				+'<li class="disabled"><a href="#">&laquo;</a></li>'
				+'<li class="active"><a href="#">1</a></li>'
				+'<li><a href="#">2</a></li>'
				+'<li><a href="#">3</a></li>'
				+'<li><a href="#">&raquo;</a></li>'
				+'</ul>'
				+'</div>');
		console.log("module %o initialized", moduleName);
	};
	
	return {initModule: initModule};
})();
