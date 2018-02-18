$(document).ready(function() {
	$('#myCarousel').carousel({
	interval: 10000
	})
//    
//    $('#myCarousel').on('slid.bs.carousel', function() {
//    	//alert("slid");
//	});
    
    $('.carousel-control').click(function() {
        $(this).css('color', '#7b7878');
    })
});