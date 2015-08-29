/* script for avto - width */

var res=function(){
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

/* script for scroll */

$(function() {
            $('a[href*=#]:not([href=#])').click(function() {
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