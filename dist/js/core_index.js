
window.onload=function(){

    //政党人员效果
    slidedown();

}


//政党人员效果

function slidedown(){

    $('.party_person ul li .details').slideUp("slow");
    var onoff=true;

    $('.party_person ul li h3').each(function(i,item){

         $(this).on('click',function(){
             if(onoff){
                 $('.party_person ul li .slide_btn').removeClass('active');
                 $('.party_person ul li .slide_btn').eq(i).addClass('active');
                 onoff=!onoff;
             }else{
                 $('.party_person ul li .slide_btn').removeClass('active');
                 onoff=!onoff;
             }
             $('.party_person ul li .details').eq(i).slideToggle("slow");
         });
    });
}