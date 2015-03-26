/**
 * Created by r2d2 on 23.03.15.
 */
$(document).ready(function() {

    $('.bxslider').bxSlider();

   $(".lang, .langpop").mouseenter(function()
   {
       $(".langpop").show();
   });
   $(".lang, .langpop").mouseleave(function()
   {
        $(".langpop").hide();
   });
   $('#followus').click(function()
   {
        $('.social').slideDown();
   });
   $('.soc_cross').click(function()
   {
        $('.social').slideUp();
   });
    //$(".listman, .mancontent").mouseenter(function()
    //{
    //    $(".mancontent").show();
    //});
    //$(".listman, .mancontent").mouseleave(function()
    //{
    //    $(".mancontent").hide();
    //});


    $(".list li").hover(
        function(){
            $("div", this).show(100);
        },
        function(){
            $("div", this).hide(100);
        });




    var user = prompt('Whos here?','');
    if (user !== null) {
        if (user == 'admin'){
        var pass = prompt('Password?', '');
        if (pass =='blackoverlord') {
            alert ('Welcome, my Lord!')
        } else alert ('You are not prepared!')
        } else if(user == null) alert ('Name yourself!')
        else alert ('You are not the one i have waited for')
    } else alert ('Do not come back!')

});