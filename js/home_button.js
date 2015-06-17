var main = $(function(){
      $("#toggle-menu").on("click",function(){

        if($("#drawerMenu").hasClass("drawerOpened") == false ){
          // 開いていない
          $("#drawerMenu").addClass("drawerOpened");
          $("#content").addClass("drawerOpened");
        }else{
          // 開いてたら
          $("#drawerMenu").removeClass("drawerOpened");
          $("#content").removeClass("drawerOpened");
        }
    });
});

$(document).ready(main);