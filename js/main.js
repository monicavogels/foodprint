$(document).ready(function(){
	
	console.log("jQuery is active.");
	

	// items are set on display: none; but if hide === false, make them show
	var hide = localStorage.getItem('hide');
	if(hide === 'true'){
		$('#personal_info, #personal_popup').css('display', 'none');
	} else {
		$('#personal_info, #personal_popup').css('display', 'flex');
	}

	// if you click the button, hide this and show that.
	$('#personal_info button').click(function() {
		event.preventDefault();
	    $('#personal_info').css('display', 'none');
	    $('#personal_login').css('display', 'flex');
	    localStorage.setItem('hide', 'true');
	});
	
	$('#personal_login button').click(function() {
	    event.preventDefault();
	    $('#personal_login').css('display', 'none');
	    $('#personal_preferences').css('display', 'flex');
	    localStorage.setItem('hide', 'true');
	});

	$('#personal_preferences button').click(function() {
	    event.preventDefault();
	    $('#personal_preferences').css('display', 'none');
	    $('#personal_goals').css('display', 'flex');
	    localStorage.setItem('hide', 'true');
	});

	$('#personal_goals button').click(function() {
		event.preventDefault();
	    $('#personal_goals, #personal_popup').css('display', 'none');
	    localStorage.setItem('hide', 'true');
	}); 

	// unset items in local storage
	$('.logout').click(function() {
		localStorage.removeItem('hide');
	});

});
