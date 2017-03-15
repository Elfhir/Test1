$(document).ready(function() {

	// Ici, $(this) est le document
	var doc = $(this);
	
	$(".content").mouseout(function(event) {

		// Ici, $(this) est la div de classe content
		var p = $(this).children("p");

		p.each(function (index) {

			// Ici, $(this) sera à chaque fois un des paragraphes p.
			$(this).prepend("Partie "+index);


		});
	});
});
