
// fullName transition
$(".animate-slide-right").velocity("transition.slideRightBigIn", { display: null, delay: 500, stagger: 140, drag: true} );

// and Career 
$(".animate-slide-up").velocity("transition.slideRightBigIn", { display: null, delay: 2000, stagger: 140, drag: true} );

$(".lnk-technologies").click(() => {
    if($("#container-technologies").hasClass("hidden")){
        $(".tabs").addClass("hidden");
        $("#container-technologies").removeClass("hidden");
    }
})



$(".lnk-projects").click(() => {
    if($("#container-projects").hasClass("hidden")){
        $('.tabs').addClass("hidden");
        $("#container-projects").removeClass('hidden');
    }
})

$(".lnk-about").click(() => {
    if($("#container-about").hasClass("hidden")){
        $('.tabs').addClass("hidden");
        $("#container-about").removeClass('hidden');
    }
})
