function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflowhidden")
}

const toogleBtn = document.getElementById("toogleBtn");
toogleBtn.addEventListener("click", function () {
    toogleBtn.classList.toggle("justify-content-end");
    document.querySelector(".doller").classList.toggle("d_none");
    document.querySelector(".month").classList.toggle("d_none");
    document.querySelector(".l_doller").classList.toggle("d_block");
    document.querySelector(".year").classList.toggle("d_block");
    document.querySelector(".management-box1").classList.toggle("d_none");
    document.querySelector(".management-box2").classList.toggle("d_block");
})

const mybutton = document.querySelector(".topBtn");
const show = document.querySelector(".show")

window.addEventListener("scroll", function () {
    if (window.scrollY > 600) {
        mybutton.classList.add("show")
    }
    else {
        mybutton.classList.remove("show")
    }
})
mybutton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;

});



$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".next-btn",
    prevArrow: ".prew-btn",
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

