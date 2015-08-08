$(document).ready(function() {
    $("#owl-example, #owl-example-left, #owl-example-center, #owl-example-right").owlCarousel({
      	autoPlay: 7000, //Set AutoPlay to 3 seconds
      	singleItem : true     
    });

$('.spoiler_links').click(function(){
    $(this).next('.spoiler_body').slideToggle('normal');
        return false;
    });                
});

 // $(function ()
	// {  var h = 200, t = $('#ta1, #ta2, #ta3, #ta4, #ta5'), max = t[0].scrollHeight, min = 65;
	//    $('.read-next').on('click', function (event)
	// {
	//    var H = t.height();
	//    if(H == max){H = min}
	//    else if (H  + h > max){H = max}
	//    else {H += h};
	//    t.height(H);
	//    $(this).text(H == max ? 'hide text' : 'read more')
	//    return false
	// })
 //  })


 $('.read-next').on('click', function () {

$(this).parent().parent().find('.paragraph-sidebar').toggleClass("open-text");

	})