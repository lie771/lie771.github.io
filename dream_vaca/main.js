   window.onload = function(){
                var images = new Array('b.png','c.png','d.png','e.png','f.png');
		var icecream = document.getElementById('icecream');
		var image_number = 0;
			setInterval(
					function(){
					 icecream.src = images[image_number];
					 image_number++;
					 if(image_number > images.length){
					 	image_number = 0;
					 }
                                    }
                                    ,3000);
		};


function background() {
	  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	  $('body').css("background",hue);

      document.body.style.background = hue[i];
      i++;
      if(i == hue.length) {
      i = 0;
 	  }
 }
setInterval(background, 18000);

$(document).ready(function(){
	$("#icecream").mouseenter(function(e){
		var windowMaxX = $(window).width() - $(this).width();
		var windowMaxY = $(window).height() - $(this).height();   
      $(this).css({ left:getRandomInt(0, windowMaxX),
                   top:getRandomInt(0, windowMaxY) 
      });
	});
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

});