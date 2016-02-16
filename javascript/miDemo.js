

$(document).ready(function(){

    //轮播图部分
    var index = 0;
    var time ;
    var imgPic = $(".mi-box-move img");
    var imgBtn = $(".mi-box-move-btn span");

    imgBtn.hover(function(){
        clearInterval(time);
        index = imgBtn.index(this);
        play();
    },function(){
        time=setInterval(next,1500);
    });

    imgPic.hover(function(){
        clearInterval(time);
    },function(){
        time=setInterval(next,1500);
    });

    $(".next").click(function(){
        clearInterval(time);
        next();
    });
    $(".prev").click(function(){
        clearInterval(time);
        prev();
    });

    function next(){
        index++;
        if(index>=imgPic.length){
            index = 0;
        }
        play();
    }
    function prev(){
        index--;
        if(index<0){
            index = 4;
        }
        play();
    }
    function play(){
        //index = imgBtn.index(this);
        imgPic.eq(index).animate({opacity: "1"}).siblings().animate({opacity: "0"});
        imgBtn.eq(index).addClass("curr").siblings().removeClass("curr");
    }

    time=setInterval(next, 1500);



    //无缝滚动部分
    //var omove = $(".mi-mov-box");
    var ocha = $(".mi-start-box");
    var navIndex = 1;

    function change(){
        if(navIndex>=2){
            navIndex=0;
        }
        ocha.animate({left:-(navIndex++)*1226});
    }
    autoPlay=setInterval(change,3000);


    //搜索框部分
    var search = $(".mi-searchTopnav");
    window.onscroll=function(){
        var scrTop = document.body.scrollTop;
        if(scrTop>200){
            search.css("opacity" , "1" , "top" , "0");
            search.css("top" , "0");
        }else{
            search.css("opacity" , "0" , "top" , "-63");
            search.css("top" , "-63");
        }
    }









});





