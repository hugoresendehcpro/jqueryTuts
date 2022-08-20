function func1()
{
    $("#img1").fadeToggle(1000);
}

function func2()
{
    //$(element name).action()
    //document.getElementByTagName(element name)
    //ID is for unique, class is for multiple,
    // name are for tags and change all elements

    $("div").css('background-color', 'red');//all divs to red

    $("#p1").css("font-style", 'italic');

    $(".para").css("font-size", '10px');

    $("#div1, #div3").css('background-color', 'green');//just div1 and 3 green, rest is red

    $("#div1, li").css('background-color', 'black');//call by ID and tag name

    // $("div > p").fadeToggle();
    //$("div  p").fadeToggle(); //change paragraphs inside div's > can be " " (empty)
    $("p:first").fadeToggle().css('background-color', 'yellow'); //change first paragraphs inside html doc
    //$("p:first").css('background-color','yellow'); //change first paragraphs inside html doc

    $("li:even").fadeToggle();//list element 0 2 4 etc
    $("li:odd").css("font-style", 'italic');
}