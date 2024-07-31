// COMPLETE THE CODE

$(function() {
  $(document).ready(function() {
    $("#exercise1Button").click(function() {
        $("ul li").css("color", "blue");
    });
});
$(document).ready(function() {
    $("#exercise2Button").click(function() {
        $("#exercise2 p").parent().css("background-color", "#f0f0f0");
    });
});

$(document).ready(function() {
    $("#exercise3Button").click(function() {
        $("#exercise3 p").parents("div").css("background-color", "#e0e0e0");
    });
});

$(document).ready(function() {
    $("#exercise4Button").click(function() {
        $("h3").siblings("p:eq(1)").hide();
    });
});

$(document).ready(function() {
    $("#exercise5Button").click(function() {
        $("div").children("p").css("border", "1px solid black");
    });
});

$(document).ready(function() {
    $("#exercise6Button").click(function() {
        $(this).prev().find("ul li:contains('Item 5') span").css("color", "red");
    });
});
});