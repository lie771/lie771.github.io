$(document).ready(function() {
	$(".collectiongroup .collection").click(function() {
		$(".collectiongroup .list").animate({
			opacity: 0
		}, function() {
			$(".collectiongroup .list").animate({
				opacity: 1
			});
		});
	});
});

