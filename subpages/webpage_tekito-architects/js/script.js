$(function () {
    // INTRO: fadeout INTRO on click
    $(".intro").click(function () {
        $(this).fadeOut(1000);
    });


    // SLIDESHOW: slideshow for index page bg
    if($(document).attr('title') == "TA - home") {
        var slides = $(".slides__image");
        var slideIndex = 0;
        $(slides[slideIndex]).show(1500);

        setInterval(function() {
            $(slides[slideIndex]).fadeOut(1500);

            slideIndex = (slideIndex + 1) % slides.length;

            // console.log(slideIndex);

            $(slides[slideIndex]).delay(1500).fadeIn(1500);
        }, 7000);
    }

    // PROJECTS: expand image on hover
    var projects = $(".project-list__item");
    function expandImage(x){
        var other_indices
        // note that x = 0 converts to nth-child(n = 1)
        var n = x + 1;
        if(n == 1){
            other_indices=[2, 3];
        }
        else if(n == 2){
            other_indices=[1, 3];
        }
        else if(n == 3){
            other_indices=[1, 2];
        }
        else {
            return;
        }

        var this_item = ".project-list__item:nth-child(" + n +")"
        // expand selected project
        $(this_item).css({ "height": "80vh" });
        $(".project-list__item").css({ "margin-top": "0vh"});
        // shrink other projects
        for ( let i = 0; i < other_indices.length; i++){
            var other_items = ".project-list__item:nth-child(" + other_indices[i] +")"
            var other_items_captions = ".project-list__item:nth-child(" + other_indices[i] +") > .caption"
            var this_item_concept = ".project-list__item:nth-child(" + n +") > .caption > .concept"
            // shirnk other projects
            $(other_items).css({ "height": "0vh" });
            // hide other project captions
            $(other_items_captions).css({ "opacity": "0" });
            // show concept paragraph for selected project
            $(this_item_concept).show();
        }

        $(projects[x]).on( "mouseleave", function() {
            // hide concept paragraph for selected project
            $(this_item_concept).hide();
            $(".project-list__item:nth-child(n+2)").css({ "margin-top": "2.5vh"});
            $(".project-list__item").css({ "height": "25vh" });
            for ( let i = 0; i < other_indices.length; i++){
                var other_items_captions = ".project-list__item:nth-child(" + other_indices[i] +") > .caption"
                $(other_items_captions).css({ "opacity": "1" });
            }

        });
    }

    $(projects[0]).on("mouseenter", function() {
        expandImage(0);
    });

    $(projects[1]).on("mouseenter", function() {
        expandImage(1);
    });

    $(projects[2]).on("mouseenter", function() {
        expandImage(2);
    });



    // ABOUT: language selector en / ja
    $(".lang-selector-ja").click(function () {
        if ((this).classList.contains("nonactive")){
            $("#about-en").fadeOut(1000);
            $("#about-ja").delay(1000).fadeIn(1000);
            $(this).toggleClass("active");
            $(this).toggleClass("nonactive");
            let en = $(".lang-selector-en");
            en.toggleClass("active");
            en.toggleClass("nonactive");
        } 
    });
    $(".lang-selector-en").click(function () {
        if ((this).classList.contains("nonactive")){
            $("#about-ja").fadeOut(1000);
            $("#about-en").delay(1000).fadeIn(1000);
            $(this).toggleClass("active");
            $(this).toggleClass("nonactive");
            let ja = $(".lang-selector-ja");
            ja.toggleClass("active");
            ja.toggleClass("nonactive");
        } 
    });


    // CONTACT: navigate contents
    $("#bp").click( function () {
        $(".google-map").hide();
        $(".recruit").hide();
        $(".form").show();
    });

    $("#recruit").click( function () {
        $(".google-map").hide();
        $(".form").hide();
        $(".recruit").show();
    });



});