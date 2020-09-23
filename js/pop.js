$j(document).ready(function() {
    $j("#popup").delay(2000).fadeIn();
    $j('#popup-close').click(function(e) // You are clicking the close button
    {
    $j('#popup').fadeOut(); // Now the pop up is hiden.
    });
    $j('#popup').click(function(e) 
    {
    $j('#popup').fadeOut(); 
    });
});