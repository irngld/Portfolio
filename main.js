
// fullName transition
$(".animate-slide-right").velocity("transition.slideRightBigIn", { display: null, delay: 500, stagger: 140, drag: true} );

// and Career 
$(".animate-slide-up").velocity("transition.slideRightBigIn", { display: null, delay: 2000, stagger: 140, drag: true} );


// Navbar
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


/* paste this line in verbatim */
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};

/* customize formbutton below*/     
formbutton("create", {
  action: "https://formspree.io/f/mgerevlg",
  title: "How can we help?",
  fields: [
    { 
      type: "email", 
      label: "Email:", 
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }      
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});
