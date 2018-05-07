// $(document).ready(function(){
//     $(".one").mouseover(function(){
//         var x = Math.floor(Math.random()*300);
// 	    var y = Math.floor(Math.random()*300);
// 	    object.style.top = x + 'px';
// 	    object.style.left = y + 'px';
//     });

// });

// $(document).ready(function(){
// 	$('.icecream').mouseover(function(e){
//     var maxX = $(window).width() - $(this).width();
//     var maxY = $(window).height() - $(this).height();    
//     $(this).css({
//         'left':getRandomInt(0, maxX),
//         'top':getRandomInt(0, maxY)
//     });
// });
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

$("#move").mouseenter(function () {
    $(this).animate({
        top: Math.random() * 300
    }, 100);
    $(this).animate({
        left: Math.random() * 300
    }, 100);

});