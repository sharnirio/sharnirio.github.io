// sript for added class navigation
 $(document).ready(function () {
 $('.nav li a').hover(
       function(){ $(this).parent().addClass('active2') },
       function(){ $(this).parent().removeClass('active2') }
);
});