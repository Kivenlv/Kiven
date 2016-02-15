

$(document).ready(function(){

    var index = 0;
    var time ;
    var imgPic = $(".mi-box-move img");
    var imgBtn = $(".mi-box-move-btn span");


    imgBtn.mouseover=(function(){
        index = imgBtn.index(this);
        clearInterval(time);
        play();
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

    $(".next").hover(function(){
        clearInterval(time);
    },function(){
        time=setInterval(next,1500);
    });
    $(".prev").hover(function(){
        clearInterval(time);
    },function(){
        time=setInterval(next,1500);
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
    autoPlay=setInterval(change,5000);



});





