$(document).ready(function () {
});

//ADD-GET

$(".agregar").click(function () {
    $(".parrafo_1").data("test", "Texto de ejemplo adicional Texto de ejemplo adicional Texto de ejemplo adicional Texto de ejemplo adicional");
    $(".parrafo_1_add").text($(".parrafo_1").data("test"));
});
$(".obtener").click(function () {
    alert($(".parrafo_1").data("test"))
});

//CAMBIO DE COLOR A ROJO
$(".addClass").click(function () {
    $(".negro").addClass("rojo");
});

//TOGGLE
$(".toggle").click(function () {
    $(".valpo_1").slideToggle("slow");
});

//APPEND
$(".append").click(function () {
    $(".app").append("<p>Texto agregado al final Texto agregado al final Texto agregado al final Texto agregado al final</p>");
});

//MOSTRAR VALOR
$(".mostrar").click(function () {
    alert($("#valor").val())
});

//FADEIN - FADEOUT
$(".fadeIn").click(function () {
    $(".valpo_2").fadeIn("slow");
});
$(".fadeOut").click(function () {
    $(".valpo_2").fadeOut("slow");
});

//FOCUS
$(".focus").click(function () {
    $("input").focus(function() { 
        $(this).next("span").css("display", "inline"); 
    }); 
}); 
//esconder y mostrar
$(".hide").click(function () {
    $(".escondido").hide();
});
$(".show").click(function () {
    $(".escondido").show();
});
//slideupdownD
$(".slideUp").click(function () {
    $(".slider").slideUp();
});
$(".slideDown").click(function () {
    $(".slider").slideDown();
});