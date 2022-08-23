$("document").ready(function(){
    $(".div1").click(function(){
        var x = $(".p1").html();
        $("#span1").text(x);
    })


    ///////////////////////////////////////////////////////////////////////////////
    $(".div1").click(function(){
        var x = $(".p2").text();
        $("#span2").text(x);    //span2 with text from p2
       // alert($(".p1").text()); //alert with text in class
    })


    ///////////////////////////////////////////////////////////////////////////////
    $("#btn1").click(function(){
        $(".p1").attr("id", "p2ID"); //change the id of class p1
    })


    ///////////////////////////////////////////////////////////////////////////////
    $(".p1").click(function(){
        //alert($(".p1").attr("class"))   //alert with class name
        // alert($(".p1").attr("id"))   //alert with id name
    })


    ///////////////////////////////////////////////////////////////////////////////
    $(".div1").click(function(){
        alert($(".div1").css("background-color"));
    })

    $("#btn1").click(function(){
        $(".div1").css("background-color", "green");//change div1 color
    })


    ///////////////////////////////////////////////////////////////////////////////
    $("#btn2").click(function(){
        $(".div1").append("<p style='margin-top:-250px'>This is paragraph 2</p>")

        $(".div2").append("<img src='images/testeB.jpeg' height='100px' width='100px'/>")

    })
});