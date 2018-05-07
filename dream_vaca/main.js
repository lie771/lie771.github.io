// var images = [ "./img/a.png", 
// 			"./img/b.png", 
// 			"./img/c.png",
// 			"./img/d.png",
// 			"./img/e.png" ];
// var i = 0;

// setInterval(function() {
//        if(images.length == i){
//                 i = 0;
//             }
//             else {
//             document.getElementsByClassName("icecream").src = images[i]; 
//             i++;

//         }
//         },3000);

// var cycle = 0;
// var images = [ "./img/a.png", 
// 			"./img/b.png", 
// 			"./img/c.png",
// 			"./img/d.png",
// 			"./img/e.png" ];
 
// setInterval(function() {
// 	if (cycle > 0 && cycle < 5) {
// 		$(".one").css({opacity:"0"});
// 		$(".two").css({opacity:"1"});
// 	} else if (cycle > 5 && cycle < 10) { 
// 		$(".two").css({opacity:"0"});
// 		$(".three").css({opacity:"1"});
// 	}
// }, 10000);


$(document).ready(function(){
	$(".icecream").mouseenter(function(e){
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

// $(document).ready(function(){
//     $(".one").mouseover(function(){
//         var x = Math.floor(Math.random()*300);
// 	    var y = Math.floor(Math.random()*300);
// 	    object.style.top = x + 'px';
// 	    object.style.left = y + 'px';
//     });

// });

// $(document).ready(function(){
// 	$(".icecream").mouseenter(function(e){
//     var windowX = $(window).width() - $(this).width();
//     var windowY = $(window).height() - $(this).height();    
//     $(this).css({
//         'left':getRandomInt(0, windowX),
//         'top':getRandomInt(0, windowY)
//     });
// });
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//works but so slow
// $(".icecream").mouseenter(function () {
//     $(this).animate({
//         top: Math.random() * 300
//     }, 100);
//     $(this).animate({
//         left: Math.random() * 300
//     }, 100);

// });

//WORKS
// $(document).ready(function(){
// 	$(".icecream").mouseenter(function(e){
// 		var windowX = $(window).width() - $(this).width();
// 		var windowY = $(window).height() - $(this).height();   
//       $(this).css({ left:(Math.random()*$(window).width()-20),
//                    top:(Math.random()*$(window).height()-20),  
//       });
// 	});
// });