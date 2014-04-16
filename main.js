$(document).on('ready', function() {

	// $('div').on('click', function() {
 //  		alert('right here!');
 //  	});

	$('.container').on('click', function(e) {
		
		$(this).append(marker);
		var marker = $('<div class="marker"></div>');

		var x = e.pageX;
		var y = e.pageY;

		// $( '.marker' ).offset({ top: x, left: y });

		console.log(x, y);


		marker.css({
			'left': x + 'px',
			'top': y + 'px',
			'background-color': 'red'
			
		});
	});
  		

  
});

