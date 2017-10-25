$(document).ready(function(){
	
	console.log("jQuery is active.");
	

	// items are set on display: none; but if hide === false, make them show
	var hide = localStorage.getItem('hide');
	if(hide === 'true'){
		$('#personal_login, #personal_popup').css('display', 'none');
	} else {
		$('#personal_login, #personal_popup').css('display', 'flex');
	}

	// if you click the button, hide this and show that.
	$('#personal_login button').click(function() {
		event.preventDefault();
	    $('#personal_login, #personal_popup').css('display', 'none');
	    localStorage.setItem('hide', 'true');
	});

	// unset items in local storage
	$('.logout').click(function() {
		localStorage.removeItem('hide');
	});

});
