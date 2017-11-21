
window.onload=function(){

//    初始化
    init();

}

//初始化
function init(){

    //项目类型选择
    select_type();

    //地区选择
    select_area();
}

//项目类型选择
function select_type(){

    $('.type_area .opation').eq(0).find('li').each(function(i,item){
         $(this).on('click',function(){

             $('.type_area .opation').eq(0).find('li').removeClass('active');
             $('.type_area .opation').eq(0).find('li').eq(i).addClass('active');

         });
    });
}

//地区选择
function select_area(){

    $('.type_area .opation').eq(1).find('li').each(function(i,item){
        $(this).on('click',function(){

            $('.type_area .opation').eq(1).find('li').removeClass('active');
            $('.type_area .opation').eq(1).find('li').eq(i).addClass('active');

        });
    });
}