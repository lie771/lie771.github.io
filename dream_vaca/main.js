$(document).ready(function() {
  // $("html").css("cursor", "url(./img/cursor.png), auto");
  var images = new Array('a.png','b.png','b.png','c.png','d.png','e.png','f.png','g.png');
  var images2 = new Array('a2.png', 'b2.png','c2.png','d2.png','e2.png','f2.png','g2.png');
  var images3 = new Array('a3.png', 'b3.png','c3.png','d3.png','e3.png','f3.png','g3.png');
  var images4 = new Array('a4.png', 'b4.png','c4.png','d4.png','e4.png','f4.png','g4.png');
  var images5 = new Array('a5.png','a5.png', 'b5.png','b5.png','c5.png','d5.png','e9.png');
  var imageCollection = [images, images2, images3, images4, images5];

  var $icecream = $('#icecream');

  var counter = 0;
  var coneToMeltIndex = 0;
  var coneMeltingInProgress;

  // Set up a variable to store the cone setInterval, so that later on we can clear the interval
  var coneInterval;
  var coneInterval2;
  var coneInterval3;
  var coneInterval4;
  var coneInterval5;

var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';
document.body.style.backgroundColor = cssHSL;

  function assignMousemoveEventListener() {
    // Change the mouse event to use `mousemove`, which will be triggered on any
    // movement over the iceCream, not just the initial `mouseenter`.
    $(document).on('mousemove.iceCream', '#icecream', function(e) {
      var windowMaxX = $(window).width();
      var windowMaxY = $(window).height();

      $(this).css({
        left: getRandomInt(100, windowMaxX),
        top: getRandomInt(100, windowMaxY)
      });
    });
  }

  function meltCone() {
  	if (counter < imageCollection[coneToMeltIndex].length) {
      console.log('melting cone', imageCollection[coneToMeltIndex][counter]);
      coneMeltingInProgress = true;
      $icecream.attr('src', imageCollection[coneToMeltIndex][counter]);
      counter++;
    }
    else {
      coneMeltingInProgress = false;
      console.log('interval finished, cone is melted')
      // Clear the interval when the cone is melted so that the code inside setInterval
      // doesn't continue to run forever.
      clearInterval(coneInterval);

      $(document).off('mousemove.iceCream');
    }
  }

  // Assign the mousemove event listener on page load
  assignMousemoveEventListener();

  // The setInterval can be stored in a variable
  coneInterval = setInterval(function() {
    meltCone();
  }, 1500);

  $("#icecream").on("click",function() {
    // If the cone is in the progress of melting, don't do anything when the user clicks.
    if ( coneMeltingInProgress ) {
      return;
    }

  	console.log('click');
  	console.log('reset interval');
  	counter = 0;

    if ( coneToMeltIndex < imageCollection.length-1) {
      // Update the index of the cone to melt
      coneToMeltIndex++;
    } else {
      // Reset the index of the cone to melt, or do whatever else you want to do at this point!
      coneToMeltIndex = 0;

    }

    console.log('coneToMeltIndex', coneToMeltIndex);

    // Melt the cone once right when the use clicks for immediate feedback.
    meltCone();

    // Turn the mousemove event listener back on.
    assignMousemoveEventListener();

    // Start the interval to continue melting.
    coneInterval = setInterval(function() {
      meltCone();
    }, 1500);

    var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                     (25 + 70 * Math.random()) + '%,' + 
                     (85 + 10 * Math.random()) + '%)';

    document.body.style.backgroundColor = cssHSL;
  });

  // This getRandomInt function wasn't actually doing what you want, I don't think...
  // function getRandomInt(min, max) {
  //   return Math.floor(Math.random() *500)+"px";
  // }

  // This one allows you to pass both the `min` and `max` values in the way you intended.
  function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 5));
  }


});