$("document").ready(function(){

        $("#btn1").click(function(){
                $("#img1").slideUp(2000, function(){
                        $("#img1").slideDown(2000);
                })
        })

        $("#btn2").click(function(){
                $("#img1").slideUp(2000).slideDown(3000);
                });

        $("#btn3").click(function(){
           $("#img1").slideUp(2000).css("opacity", 1).fadeOut(2000).fadeIn(2000);
        });
});

// $("#img1").slideUp(2000).css('opacity', '1')