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

    $('h3').css('background-color',"yellow")
})