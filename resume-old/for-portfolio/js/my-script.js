/* script for scroll */

$(function() {
	var elems = $("a[href*=#]:not([href=#])");
            elems.click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top - 65
                  }, 1000);
                  return false;
                }
              }
            });
          });
/* script for add class */

 $(function(){
	$('.none2').hover(function(){
		$('.none').toggleClass('hover')
		  			});
    });

/* script for audio*/

$(function(){
	$("#nav-two a")
  .each(function(i) {
    if (i != 0) {
      $(".nav2 #beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $(".nav2 #beep-two" + $(this).data("beeper"))[0].play();
  });
$(".nav2 #beep-two").attr("id", "beep-two0");
});

/* script for add class for img*/

 $(function(){
	$('.effect').mouseover(function(){
		$('.effect').addClass('eff-opasiti');
		$(this).removeClass('eff-opasiti');
		  			});
	$('.effect').mouseout(function(){
		$('.effect').removeClass('eff-opasiti')
		  			});
    });
/* script for avto - width */

var res = function(){
				outer_wrapper_width=960+($('body').width()-960)/2;
				$('.outer_wrapper').width(outer_wrapper_width);
			}

			$(function() {
				res();
				$('#rules li:nth-child(3n+1)').addClass('clr');
				$('.album').each(function(){
					$(this).find('.work:nth-child(3n+1)').addClass('clr');
				})

				$('#folio .album_titles li').click(function(){
					$('#folio .album_titles li').removeClass('active');
					$(this).addClass('active');
					index=$(this).index();
					$('#folio .album').removeClass('active');
					$('#folio .album:eq('+index+')').addClass('active');
				})
			})

			$(window).resize(function(){
				res();
			});

/* script off audi */


$('#volume-off').click(function(){
  $('#nav-two').toggleClass("nav2")
});


/* script add class for form */

$(document).ready('.contact-form').submit(function(){
     $('.p-form').addClass('block');

     });






