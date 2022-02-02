$(document).ready(function(){

    //sticky manu

    $(".js-chef").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
}) ;