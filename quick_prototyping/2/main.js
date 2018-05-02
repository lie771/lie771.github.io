
var images = [
"https://cdn3.iconfinder.com/data/icons/popular-memes/48/JD-36-512.png", 
"https://img00.deviantart.net/b3db/i/2014/302/d/3/derp_boosic_by_merkmusic-d84ml2m.png", 
"https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/d/d7/My_first_derp_by_megaderpplz-d30zcdx.png/revision/latest?cb=20120731171937",
"https://pre00.deviantart.net/47f4/th/pre/f/2013/315/1/9/derp_copy_by_smazzle-d6twahm.png",
"https://appstickers-cdn.appadvice.com/1236308852/822136667/3009020f1890fa57901f86eb0c15613e-3.png",
"https://pre00.deviantart.net/c5f3/th/pre/f/2012/073/2/e/derp_logic_by_trunsako9-d4srct8.png", 
"http://agarioskins.com/submitted/useruploads/Agario%20derp.png",
"https://cdn3.iconfinder.com/data/icons/popular-memes/48/JD-14-512.png",
"https://img00.deviantart.net/6d0c/i/2015/012/0/9/derp_boosic__reimagined__by_merkmusic-d8dppn3.png",
"https://images.vexels.com/media/users/3/127961/isolated/preview/8e94820a12c2697d7fae27b8e3875037-hand-drawn-dog-by-vexels.png"];
var color = ['pink', 'coral', 'yellow', 'maroon', 'lightblue', 'turquoise', 'salmon', 'gray', 'lavender', 'teal'];

document.getElementById("image");
var i = 0;

setInterval(function() {
      image.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i == images.length) {
      	i =  0;
      }
}, 1000);


function background() {
      document.body.style.background = color[i];
      i++;
      if(i == color.length) {
      i = 0;
 	  }
 }
setInterval(background, 1000);


function updateTime() {
var date = new Date();
var hours = date.getHours();
// var hours = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
// document.getElementById("hour").innerHTML = hours[date.getHours()];
var day = date.getDay();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var year = date.getFullYear();
var totalMinutes = hours * 60 + date.getMinutes();
// var totalSeconds = hours * 60 + date.getMinutes();
// $('#time-in-minutes').html(totalMinutes);
// $('#time').html( date.toGMTString() );
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
document.getElementById("month").innerHTML = months[date.getMonth()];
document.getElementById("minute").innerHTML = date.getMinutes();
// document.getElementById("mil").innerHTML = date.getMilliseconds();
// document.getElementById("day").innerHTML = date.getDay();
document.getElementById("hour").innerHTML = date.getHours();
};

$(function() {
  updateTime();
  setInterval(updateTime, 1000);

 });


// function updateTime() {
// var date = new Date();
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
// var totalMinutes = hours * 60 + date.getMinutes();
// // var totalSeconds = hours * 60 + date.getMinutes();
// // $('#time-in-minutes').html(totalMinutes);
// if (seconds >= 0 && seconds <= 10) {
//    document.body.style.background = "rgb(244, 86, 66)";
// } else if (seconds >= 10 && seconds <= 20) {
//     document.body.style.background = "rgb(198, 175, 173)";
// } else if (seconds >= 20 && seconds <= 30) {
// 	document.body.style.background = "rgb(132, 116, 115)";

// } else if (seconds >= 30 && seconds <= 40) {
// 	document.body.style.background = "rgb(104, 91, 90)";

// } else if (seconds >= 40 && seconds <= 50) {
// 	document.body.style.background = "rgb(76, 66, 65)";
// } else {
// 	document.body.style.background = "rgb(28, 24, 24)";

// }

// };

// $(function() {
//   updateTime();
//   setInterval(updateTime, 1000);

//  });






// $(function() {
//   var date= new Date;
//   var hour = date.getHours();
// 	  if (hour == 1 && date) {
// 			;
// 		} else if ( hour == 2 && date) {
// 			;
// 		}
// });

// function updateTime() {
//   var date = new Date();
//   var t = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//   var hour = date.getHours(); 
//   // $('#time').html( date.toGMTString() );
//     if  (hour > 0 && hour <3) {
		
//   	} else if (hour > 12 && hour < 13) {
//   		$('.square').addClass("red");
//   	}

  
// }
