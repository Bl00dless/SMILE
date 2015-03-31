/**
 * Created by r2d2 on 23.03.15.
 */
$(document).ready(function() {

    $('.bxslider').bxSlider();
    $("select").msDropDown();
    $('input[type=text]').focus(function () {
        $(this).css({border: '2px solid red', background: '#999'});
    }).blur(function(){
        var newVal = $(this).val().replace(/\s/g, '');
        $(this).val(newVal);
        if ($(this).val() == "" ) {
            $(this).css({border: '1px solid red', background: '#FBACAC'})
        }
    }).change(function(){
        if ($(this).val() == "" ){
            $(this).css({border: '2px solid #999', background: '#FBACAC'});
        }

    });




    $('#pass').blur(function(){
        if ($(this).val().length <= 5){
            alert ("Enter 6+ characters");
        }
    })





    $('#clickme').click(function () {
        $('#popupWrapper').show();
    })
    $('#clickmeclose').click(function(){
        $('#popupWrapper').hide();
    })


   $(".lang > li > a, .langpop").mouseenter(function()
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

    $('#email').blur(function(){
        debugger;
       if ('#email'.val() !== /^[A-Za-z0-9._]+@[A-Za-z0-9]+.[A-Za-z]{2,4}$/) {
           $(this).css('background', 'red');
       }
        else {
           $(this).css('background', 'green');
       }
    })


    //var user = prompt('Whos here?','');
    //if (user !== null) {
    //    if (user == 'admin'){
    //    var pass = prompt('Password?', '');
    //    if (pass =='blackoverlord') {
    //        alert ('Welcome, my Lord!')
    //    } else alert ('You are not prepared!')
    //    } else if(user == null) alert ('Name yourself!')
    //    else alert ('You are not the one i have waited for')
    //} else alert ('Do not come back!')
});