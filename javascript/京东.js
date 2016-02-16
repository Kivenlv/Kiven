/**
 * Created by lvzhuang on 16/1/14.
 */


$(document).ready(function(){

    var index = 1;
    var autoPlay;

    //轮播图
    function change(){
        index = $(this).index();
        $(".ui-jd-nav-box-left ul").animate({left:-index*700});
        $(".ui-jd-nav-box-btn span").removeClass("curr").eq(index).addClass("curr");
    }

    function prev(){
        if(index<0){
            index=6
        }
        //console.log(index);
        $(".ui-jd-nav-box-btn span").removeClass("curr").eq(index).addClass("curr");
        $(".ui-jd-nav-box-left ul").animate({left:-(index--)*700});
    }

    function next(){
        if(index>=7){
            index=0;
        }
        //console.log(index);
        $(".ui-jd-nav-box-btn span").removeClass("curr").eq(index).addClass("curr");
        $(".ui-jd-nav-box-left ul").animate({left:-(index++)*700});
    }

    $(".prev").on("click",prev);
    $(".next").on("click",next);

    $(".ui-jd-nav-box-btn span").on("mouseenter",change);

    $(".ui-jd-nav-box-left").hover(
        function(){
            $(".control").show();
            clearInterval(autoPlay);
        },
        function(){
            $(".control").hide();
            autoPlay=setInterval(next,2000);
        });
    autoPlay=setInterval(next,2000);
    //轮播图结束

});
















