
function funcA()
{
    // $("h1").css("background-color", "yellow");
    // $("#img1").css("height", "500px");
}



// ready function, called after html document fully loaded
$("document").ready(function(){

    // function funcA()
    // {
    //     $("h1").css("background-color", "yellow");
    //     $("#img1").css("height", "500px");
    // }



    // one click
    // $("button").click(function(){
    //     $("#img1").css("height", '50px');
    // });

    //hide image
    $("#btn1").click(function (){
        $("#img1").hide(2000);
    })

    //show image
    $("#btn2").click(function (){
        $("#img1").show(2000);
    })

    //toggle image
    $("#btn3").click(function (){
        $("#img1").toggle();
    })

    //fadeIn image
    $("#btn4").click(function (){
        $("#img1").fadeIn();
    })

    //fadeOut image
    $("#btn5").click(function (){
        $("#img1").fadeOut();
    })

    //fadeToogle image
    $("#btn6").click(function (){
        $("#img1").fadeToggle();
    })

    //slideUp image
    $("#btn7").click(function (){
        $("#img1").slideUp();
    })

    //slideDown image
    $("#btn8").click(function (){
        $("#img1").slideDown();
    })

    //slideToggle image
    $("#btn9").click(function (){
        $("#img1").slideToggle(10000);
    })

    //stop functuon
    $("#btn10").click(function()
    {
        $("#img1").stop();
    })



});