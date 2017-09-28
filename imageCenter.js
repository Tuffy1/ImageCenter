define(function() {
		var imageLoad = function(img) {
			return new Promise(function(resolve,reject) {
				if(img.complete) {
					resolve();
				} else {
					img.onload = function(event) {
						resolve(event);
					}
					img.onerror = function(err) {
						reject(err);
					}
				}
			})
		}
		var imageCenter = function(list) {
			list.forEach(function(item) {
				img = item.children[0];
				var itemW = item.offsetWidth;
            	var itemH = item.offsetHeight;
            	var itemR = itemW / itemH;
            	// imageLoad(img).then(function() {	我不知道为什么加了这个得到的naturalWidth，naturalHeight就不对了呀
            		
            		
            		var imgW = img.naturalWidth;
            		var imgH = img.naturalHeight;
            		var imgR = imgW / imgH;
            		console.log(imgW);
            		console.log(imgH);
            		console.log(imgR);
            		var resultMode = itemR > imgR ? 'aspectFill-x' : 'aspectFill-y';
            		$(img).addClass(resultMode);
            	// })
			})
		}		
	
		return {
			imageCenter: imageCenter
		};
});