$(document).ready(function(){app.getInstagramPhotos({container:"#footer-instagram-feed",blueimpContainer:"#blueimp-gallery-footer",path:"users/self/media/recent",count:9});if(app.isPage("/gallery")){app.getInstagramPhotos({container:"#gallery-instagram-feed",blueimpContainer:"#blueimp-gallery-full-page",path:"tags/beautyrefugegallery/media/recent",count:30})}if(app.isPage("/book-appointment")){app.createBookingWidget()}});var app={isPage:function(path){return document.location.pathname.indexOf(path)!==-1},getInstagramPhotos:function(options){var $container=$(options.container);if(!$container.length){return}var numColumns=6;var columnClass="col-xs-2";if($container.width()<480){numColumns=3;columnClass="col-xs-4"}var html='<div class="row">';return $.ajax({url:"https://api.instagram.com/v1/"+options.path,type:"get",dataType:"jsonp",data:{access_token:"315310155.3a81a9f.092b90b913d34aafa72f8744cec91170",count:options.count}}).done(function(media){$.each(media.data,function(index,photo){var img=photo.images.standard_resolution;var thumbnail=photo.images.thumbnail;var title=photo.caption.text;var maxLength=110;if(title.length>maxLength){var subString=title.substr(0,maxLength-1);title=subString.substr(0,subString.lastIndexOf(" "))+"..."}if(index===0||index%numColumns!==0){html+='<div class="'+columnClass+'">'}else{html+='</div><div class="row"><div class="'+columnClass+'">'}if(photo.type==="image"){html+='<a href="'+img.url+'"'}else if(photo.type==="video"){html+='<a href="'+photo.videos.standard_resolution.url+'" type="video/mp4"'+' data-poster="'+img.url+'"'}html+=' title="'+title+'" data-gallery="'+options.blueimpContainer+'">'+'<img src="'+thumbnail.url+'" width="'+thumbnail.width+'" height="'+thumbnail.height+'" class="img-responsive"></img></a></div>';if(index===media.data.length-1){html+="</div>"}});$container.html(html)}).fail(function(){var html='<div class="alert alert-danger">Failed to load Instagram photos</div>';$container.html(html)})},createBookingWidget:function(){var $bookingWidget=$("#booking-widget");var $spinner=$bookingWidget.find(".loading-spinner");var isMobile=/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);if(isMobile){$spinner.hide();var htmlMsg="<p>Click the following button to book your appointment:</p>"+'<a href="https://www.vagaro.com/beautyrefuge/about#online-scheduling" target="_blank" '+'rel="noopener" class="btn btn-primary btn-lg">Vagaro Beauty Refuge Website</a>';$bookingWidget.find("p").html(htmlMsg);return}var iframe=document.createElement("iframe");var $iframe=$(iframe);iframe.src="//www.vagaro.com/Users/BusinessWidget.aspx?"+"enc=MMLjhIwJMcwFQhXLL7ifVFe2WD4QgtXLj5n/xLaCmsKxBWWioXABxhc5C5oT/"+"RU1KJfXeDHpMc0fJ+Qas1NOhIkWb1tBFTASY5r/0+axnVkRmW1YUSgt27P/cEwpJVjg#";iframe.scrolling="no";iframe.frameborder="0";iframe.width="780px";iframe.height="600px";iframe.style.display="none";$bookingWidget.append(iframe);$iframe.on("load",function(){$spinner.hide();$iframe.height(750).show()})}};