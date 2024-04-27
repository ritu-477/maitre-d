
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
}



$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".prew-btn",
    prevArrow: ".next-btn",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true

            }
        },

    ]
});

