$(document).on('ready', function() {

	$('.map').on('click', function(e) {
		
		var marker = $('<div class="marker"></div>');
		$('.container').append(marker);

		var textArea = $('<textarea></textarea>');
		$(marker).after(textArea);

		var okbtn = $('<button type='submit'>Submit</button>');
		$(marker).after(textArea);
			
		var x = e.pageX;
		var y = e.pageY;

		console.log(x, y);

		$(marker).on('click', function() {
		
		$(this).remove();

		});	

		$(textArea).on('click', function() {
		
		$(this).remove();

		});	


		marker.css({
			'left': x + 'px',
			'top': y + 'px',
			'background-color': 'red'
		});	

		textArea.css({
			'left': (x+5) + 'px',
			'top': (y+5) + 'px',

		});	

	});
	console.log(12)
	// $(marker).on('click', function(e) {
		
	// $(this).remove();

	// });	
  
});

