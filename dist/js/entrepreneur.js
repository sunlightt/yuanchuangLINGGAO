
window.onload=function(){

//    初始化
    init();

}

//初始化
function init(){

    //项目类型选择
    select_type();

}

//项目类型选择
function select_type(){

    $('.type_area .opation').find('li').each(function(i,item){
        $(this).on('click',function(){

            $('.type_area .opation').eq(0).find('li').removeClass('active');
            $('.type_area .opation').eq(0).find('li').eq(i).addClass('active');

        });
    });
}
