/**
 * Created by lvzhuang on 16/1/29.
 */


$(function(){

    $('.link .button').hover(
        function(){
        var title=$(this).attr('data-title');
        $('.tip em').text(title);
        var pos=$(this).offset().left;
        var dis=($('.tip').outerWidth()-$(this).outerWidth())/2;
        var lee=pos-dis;
        $('.tip').css({'left':lee+'px'}).animate({'top':308,'opacity':1},300);
    },function(){
        $('.tip').animate({'top':280,'opacity':0},300);
    })

});



