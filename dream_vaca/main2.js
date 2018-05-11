

$(document).ready(function() {
  var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png','g.png');
  var images2 = new Array('a2.png', 'b2.png','c2.png','d2.png','e2.png','f2.png','g2.png');
  var images3 = new Array('a3.png', 'b3.png','c3.png','d3.png','e3.png','f3.png','g3.png');
  var images4 = new Array('a4.png', 'b4.png','c4.png','d4.png','e4.png','f4.png','g4.png');
  var images5 = new Array('a5.png', 'b5.png','c5.png','d5.png','e5.png');
  var imageCollection = new Array('image','image2','image3','image4','image5');
  // var random = imageCollection[Math.floor(Math.random() * imageCollection.length)];
  var $icecream = $('#icecream');
  var counter = 0;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function buildColor( r, g, b ) {
	return "rgb(" + r + ", " + g + ", " + b + ")";  
}

  // Set up a variable to store the cone setInterval, so that later on we can clear the interval
  var coneInterval;
  var coneInterval2;
  var coneInterval3;
  var coneInterval4;
  var coneInterval5;

$(document).on('mouseenter.iceCream', '#icecream', function(e) {
    var windowMaxX = $(window).width() - $(this).width();
    var windowMaxY = $(window).height() - $(this).height();

    $(this).css({
      left: getRandomInt(0, windowMaxX),
      top: getRandomInt(0, windowMaxY)
    });
  });

  function meltCone() {
  	if (counter < images.length) {
      $icecream.attr('src', images[counter]);
      counter++;
    } 
    else {
      console.log('interval')
      // Clear the interval when the cone is melted so that the code inside setInterval
      // doesn't continue to run forever.
      clearInterval(coneInterval);
      // Turn off the event listener named "mouseenter.iceCream"
      $(document).off('mouseenter.iceCream');
    }
  }

  // The setInterval can be stored in a variable
  coneInterval = setInterval(function() {
    meltCone();
  }, 1000);

  $("#icecream").on("click",function() {
	console.log('click');
	console.log('reset interval');
	counter = 0;
    function meltConeSecond() {
	  	if (counter < images4.length) {
	      $icecream.attr('src', images4[counter]);
	      counter++;
	    } 
	    else {
	      console.log('interval')
	      // Clear the interval when the cone is melted so that the code inside setInterval
	      // doesn't continue to run forever.
	      clearInterval(coneInterval2);
	     
	      // Turn off the event listener named "mouseenter.iceCream"
	      $(document).off('mouseenter.iceCream');
	      // meltConeSecond();
	      // location.reload();
			// counter = 1;
			// meltCone();
	    }
	  }
		  coneInterval2 = setInterval(function() {
		    meltConeSecond();
		  }, 1000);

		var red = getRandomInt(198,239);
		var green = getRandomInt(7,88);
		var blue = getRandomInt(27,128);
		var color = buildColor(red, green, blue);

		var red2 = getRandomInt(120,179);
		var green2 = 15;
		var blue2 = getRandomInt(45,134);
		var color2 = buildColor(red2, green2, blue2);

		var red3 = getRandomInt(35,180);
		var green3 = getRandomInt(114,214);
		var blue3 = 247;
		var color3 = buildColor(red3, green3, blue3);

		var colorPicker = [ color, color2, color3  ];
		var randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];


		// var red = getRandomInt(198,239);
		// var green = getRandomInt(7,88);
		// var blue = getRandomInt(27,128);
		// var color = buildColor(red, green, blue);
		// $('body').css("background-color",color);
		// document.body.style.background = color;


	  // var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	  // $('body').css("background",hue);
	  // var i=0;
   //    document.body.style.background = hue[i];
   //    i++;
   //    if(i == hue.length) {
   //    i = 0;
 	 //  }


	$(document).on('mouseenter.iceCream', '#icecream', function(e) {
	  var windowMaxX = $(window).width() - $(this).width();
	  var windowMaxY = $(window).height() - $(this).height();

	  $(this).css({
	    left: getRandomInt(0, windowMaxX),
	    top: getRandomInt(0, windowMaxY)
	  });

	});

	// clearInterval(coneInterval2);
	// counter = 0;
	// function meltConeThird() {
	//   	if (counter < images3.length) {
	//       $icecream.attr('src', images3[counter]);
	//       counter++;
	//     } 
	//     else {
	//       console.log('interval')
	//       // Clear the interval when the cone is melted so that the code inside setInterval
	//       // doesn't continue to run forever.
	//       clearInterval(coneInterval3);
	//       // Turn off the event listener named "mouseenter.iceCream"
	//       $(document).off('mouseenter.iceCream');
	//       return false;
	//     }
	//   }
	// 	  coneInterval3 = setInterval(function() {
	// 	    meltConeThird();
	// 	  }, 1000);

	//   var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	//   $('body').css("background",hue);
	//   var i=0;
 //      document.body.style.background = hue[i];
 //      i++;
 //      if(i == hue.length) {
 //      i = 0;
 // 	  }

	// $(document).on('mouseenter.iceCream', '#icecream', function(e) {
	//   var windowMaxX = $(window).width() - $(this).width();
	//   var windowMaxY = $(window).height() - $(this).height();

	//   $(this).css({
	//     left: getRandomInt(0, windowMaxX),
	//     top: getRandomInt(0, windowMaxY)
	//   });
	// });
  });


  function getRandomInt(min, max) {
    return Math.floor(Math.random() *500)+"px";
  }









});





//DOESN'T WORK - trying to put mouseenter in if else statement
// $(document).ready(function(){
// 	    var images = new Array('a.png', 'b.png','c.png','d.png','e.png','f.png');
// 		var icecream = document.getElementById('icecream');
// 		var i = 0;
// 	if (i > images.length-1){
// 		setInterval( 
// 			function(){
// 				icecream.src = images[i];
// 				i++;
// 					} 
// 					,1000);
// 		$("#icecream").mouseenter(function(e){
// 			var windowMaxX = $(window).width() - $(this).width();
// 			var windowMaxY = $(window).height() - $(this).height();   
//       		$(this).css({ left:getRandomInt(0, windowMaxX),
//                    	 	  top:getRandomInt(0, windowMaxY)});
// 		});
// 	}
// 	function getRandomInt(min, max) {
//     return Math.floor(Math.random() *500)+"px";
// 	}
		

// });

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
// function background() {
// 	  var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
// 	  $('body').css("background",hue);
// 	  var i=0;
//       document.body.style.background = hue[i];
//       i++;
//       if(i == hue.length) {
//       i = 0;
//  	  }
//  }
// setInterval(background, 21000);





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

