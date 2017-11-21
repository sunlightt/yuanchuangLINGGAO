
window.onload=function(){

//    初始化
    init();


}

//初始化
function init(){

//报名班级选择
    select_class();

}


//报名班级选择
function select_class(){

    $('.select_class li').each(function(i,item){

          $(this).on('click',function(){

               $(this).addClass('active').siblings().removeClass('active');

          });
    });
}