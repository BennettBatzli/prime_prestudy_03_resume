$(document).ready(function() {
	$('.everything').on('click', 'button', function(){
		$(this).closest('.everything').find('#mainContent').slideDown();
	
	});

});