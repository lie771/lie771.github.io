// $(function() {
//   // Your interactions go here
// });

        $(document).ready(function () {
            $('.one').click(function (e) {
			$('#map').toggle();
			$("#map").attr("src", "http://www.dictionary.com/browse/stalking?s=t");
			$(".one").css('background', 'teal')
            });
            $('.two').click(function (e) {
			$('#map2').toggle();
			$("#map2").attr("src", "http://www.dictionary.com/browse/fell?s=t");
			$(".two").css('background', 'teal')
			});
			$('.three').click(function (e) {
			$('#map3').toggle();
			$("#map3").attr("src", "http://www.dictionary.com/browse/choked?s=t");
			$(".three").css('background', 'teal')
			});
			$('.four').click(function (e) {
			$('#map4').toggle();
			$("#map4").attr("src", "http://www.dictionary.com/browse/tripped?s=t");
			$(".four").css('background', 'teal')
			});
			$('.five').click(function (e) {
			$('#map5').toggle();
			$("#map5").attr("src", "http://www.dictionary.com/browse/tumble?s=t");
			$(".five").css('background', 'teal')
			});
			$('.six').click(function (e) {
			$('#map6').toggle();
			$("#map6").attr("src", "http://www.dictionary.com/browse/drenched?s=t");
			$(".six").css('background', 'teal')
			});
			$('.seven').click(function (e) {
			$('#map7').toggle();
			$("#map7").attr("src", "http://www.dictionary.com/browse/smack?s=ts");
			$(".seven").css('background', 'teal')
			});
			$('.eight').click(function (e) {
			$('#map8').toggle();
			$("#map8").attr("src", "http://www.dictionary.com/browse/sprain?s=t");
			$(".eight").css('background', 'teal')
            });
        });