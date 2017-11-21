
window.onload=function(){

    //初始化
    init();

}

//初始化
function init(){

    //学员风采右侧下拉菜单
    rotate();

   //学员轮番图
    slidebanner({
        contain1:'#banners',
        contain2:'#banners ul',
        btn:'#banBtn',
        sldir:['.btn_pre','.btn_nex'],
        auto:true
    });

    //学员详情下拉
    person_details();

}

//学员风采右侧下拉菜单
function rotate(){

    $(".class_style .content_wrap .right").hover(
        function () {
            console.log(1);
            $('.class_style .content_wrap .right .sub_slide_nav').addClass('rotate');
        },
        function () {
            $('.class_style .content_wrap .right .sub_slide_nav').removeClass('rotate');
        }
    );
}

//学员详情下拉

function person_details(){
    var onoff=true;
    $(".class_style .slide_img li .slide_msg").slideUp();
    $('.class_style .slide_img li .slide_btn').each(function(i,item){
        $(this).on('click',function(){
            if(onoff){
                $('.class_style .slide_img li .slide_btn').removeClass('slide_btn_active');
                $(this).addClass('slide_btn_active');
                onoff=!onoff;
            }else{
                $('.class_style .slide_img li .slide_btn').removeClass('slide_btn_active');
                onoff=!onoff;
            }
            $(".class_style .slide_img li .slide_msg").eq(i).slideToggle("slow");


        });
    });
}