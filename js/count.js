jQuery( document ).ready( function() {
	jQuery('#download-btn').click(function() {
	    jQuery('#show-count').html(function(i, val) {
	    	return val*1+1 
	   	});
	});
});