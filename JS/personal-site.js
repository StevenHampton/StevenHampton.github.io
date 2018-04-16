$(document).ready(function () {


    $("#homeA").on("click", function(){
        $("#home").removeClass("hidden");
        $("#aboutMe, #projects, #resume, #contact").addClass("hidden");
        $("#li2, #li3, #li4, #li5").removeClass("active");
        $("#li1").addClass("active");
    });
    $("#aboutMeA").on("click", function(){
        $("#aboutMe").removeClass("hidden");
        $("#home, #projects, #resume, #contact").addClass("hidden");
        $("#li1, #li3, #li4, #li5").removeClass("active");
        $("#li2").addClass("active");
    });
    $("#projectsA").on("click", function(){
        $("#projects").removeClass("hidden");
        $("#home, #aboutMe, #resume, #contact").addClass("hidden");
        $("#li1, #li2, #li4, #li5").removeClass("active");
        $("#li3").addClass("active");
    });
    $("#resumeA").on("click", function(){
        $("#resume").removeClass("hidden");
        $("#home, #projects, #aboutMe, #contact").addClass("hidden");
        $("#li1, #li3, #li2, #li5").removeClass("active");
        $("#li4").addClass("active");
    });
    $("#contactMeA").on("click", function(){
        $("#contact").removeClass("hidden");
        $("#home, #projects, #resume, #aboutMe").addClass("hidden");
        $("#li1, #li3, #li4, #li2").removeClass("active");
        $("#li5").addClass("active");
    })


});