$("document").ready(function(){

    $("th").each(function(column){
        $(this).hover(function(){
            $(this).data("type", $(this).attr("class"));
            $(this).addClass("clickable");
        }, function(){
            $(this).removeClass("clickable");
        });

        $(this).click(function(){
            let type = $(this).data("type");
            let records = $("table").find("tbody > tr");
            records.sort(function (a,b){
                let value1 = $(a).children("td").eq(column).text();
                let value2 = $(b).children("td").eq(column).text();

                if (type == "num")
                {
                    value1 *= 1; //convert string to number
                    value2 *= 1; //convert string to number
                }

                return (value1 < value2) ? -1 : (value1 > value2 ? 1 : 0 );
            });

            $.each(records,function (index, row){
               $("tbody").append(row);
            });
        });
    });
});

//https://www.youtube.com/watch?v=7XuIZBLOF7A
    //https://youtu.be/Dg9FCdEKymc?t=178