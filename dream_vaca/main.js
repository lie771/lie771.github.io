

//DOESN'T WORK - trying to put mouseenter in if else statement
$(document).ready(function(){
	    var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png');
		var icecream = document.getElementById('icecream');
		var i = 0;
	if (i > images.length-1){
		setInterval( 
			function(){
				icecream.src = images[i];
				i++;
					} 
					,1000);
		$("#icecream").mouseenter(function(e){
			var windowMaxX = $(window).width() - $(this).width();
			var windowMaxY = $(window).height() - $(this).height();   
      		$(this).css({ left:getRandomInt(0, windowMaxX),
                   	 	  top:getRandomInt(0, windowMaxY)});
		});
	}
	function getRandomInt(min, max) {
    return Math.floor(Math.random() *500)+"px";
	}
		

});

//WORKS ALONE!! image changing
// window.onload = function(){
//     var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png');
// 	var icecream = document.getElementById('icecream');
// 	var i = 0;
// 		setInterval(
// 			function(){
// 				icecream.src = images[i];
// 				i++;
// 				if(i > images.length-1){
// 					icecream.src='f.png';
				   
// 				}

//                                     }
//                                     ,1000);
// 		};


//WORKS ALONE!! cursor enters, div moves
// $(document).ready(function(){
// 	$("#icecream").mouseenter(function(e){
// 		var windowMaxX = $(window).width() - $(this).width();
// 		var windowMaxY = $(window).height() - $(this).height();   
//       $(this).css({ left:getRandomInt(0, windowMaxX),
//                    top:getRandomInt(0, windowMaxY) 
//       });
// 	});
// 	function getRandomInt(min, max) {
//     return Math.floor(Math.random() *500)+"px";
// 	}

// });

//WORKS!! background change color according to time
function background() {
	  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	  $('body').css("background",hue);

      document.body.style.background = hue[i];
      i++;
      if(i == hue.length) {
      i = 0;
 	  }
 }
setInterval(background, 21000);





//DRAFT 
// $(function(){
// 	$(document).on(function(){
// 		var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png');
// 		var icecream = document.getElementById('icecream');
// 		var i = 0;

// 		setInterval( function(){
// 			icecream.src = images[i];
// 			i++;

// 			if(i > images.length-1){
// 				console.log("working");
// 				icecream.src= 'f.png';
// 			} 
// 		}); ,1000);
// 	});

// });

// window.onload = function(){
//     var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png');
// 	var icecream = document.getElementById('icecream');
// 	var i = 0;
// 		setInterval(
// 			function(){
// 				icecream.src = images[i];
// 				i++;
// 				if(i > images.length-1){
// 				   i = 0;
// 				}
//                                     }
//                                     ,3000);
// 		};
						
// window.onload = function(){
//     var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png');
// 	var icecream = document.getElementById('icecream');
// 	var image_number = 0;
// 		setInterval(
// 			function(){
// 				icecream.src = images[image_number];
// 				image_number++;
// 				if(image_number > images.length-1){
// 				   image_number = 0;
// 				}
//                                     }
//                                     ,3000);
// 		};




// $(document).ready(function(){
// 	$("#icecream").mouseenter(function(e){
// 		var windowMaxX = $(window).width() - $(this).width();
// 		var windowMaxY = $(window).height() - $(this).height();   
//       $(this).css({ left:getRandomInt(0, windowMaxX),
//                    top:getRandomInt(0, windowMaxY) 
//       });
// 	});
// 	function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// 	}

// });

