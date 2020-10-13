$(document).ready(function () {
    $('change').onclick(function () {

    })
    //keyPress
    $("input").keyup(function (event) {
        if (event.keyCode===13){
            console.log("Enter");

            //Autofocus to next Item
            let nextElement=$(this).next("input");
            while (nextElement.attr("id")==undefined||nextElement.attr("id")=="span"){
                nextElement=nextElement.next();
            }
            nextElement.focus();

        }
    })
    var i=0
    $(window).resize(function () {
        console.log(i++);
    })
    $("add").click(function () {
        var field1=$('field1').val();
        var field2=$('field2').val();
        console.log(field1,field2);
        var markup="<tr><td colspan='2'>"+field1+"</td><td colspan='2'>+field2+</td> </tr>"
    })
})