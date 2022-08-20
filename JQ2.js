
// js function
// function func1()
// {
//     document.getElementById("img1").style.width="500px";
// }


//jq function
// $('button').click(func1);
// function func1()
// {
//     $("#img1").css('width', '600px');
// }

//anonymous function
// $("button").click(function(){
//     $("#img1").css("width", '500px');
// });

//ready function, called after html document fully loaded
$("document").ready(function(){

    //one click
    $("button").click(function(){
        $("#img1").css("width", '500px');
    });

    //double click
    $("button").dblclick(function(){
        $("#img1").css("width", '1500px');
    });

    //mouse enter
    $("#img1").mouseenter(function(){
       $("#img1").css("width", "500px");
    });


    //mouse leave
    $("#img1").mouseleave(function(){
       $("#img1").css("height", "100px");
    });

    //hover
    $("button").hover(function(){
       $("button").css("width", "200px");
    });

    function func2()
    {
        $("#img1").css("width", "250px");
    }

});
