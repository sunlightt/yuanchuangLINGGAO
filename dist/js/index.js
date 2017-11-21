window.onload=function(){


    //banner 图切换
    slidebanner({
        contain1:'#banners',
        contain2:'#banners ul',
        btn:'#banBtn',
        sldir:['.btn_pre','.btn_nex'],
        auto:true
    });

   //新闻tab切换
    newstab();
}

//新闻tab切换
function newstab(){
    var x=null;
    var  oneWid=$('.news .wrap').outerWidth();
    var len=$('.news .wrap li').length;

    $('.news .wrap ul').css({'width':oneWid*len});
    $('.news .wrap li').css({'width':oneWid});

    $('.news .tab_btn span').each(function(i){

        $(this).on('mouseover',function () {
            $('.news .wrap ul').stop();
            $('.news .wrap ul').animate({'left':-i*oneWid},1000);
            $(this).addClass('active').siblings().removeClass('active');
        })
    });
}