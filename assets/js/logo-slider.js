$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 10,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 1700,
            settings: {
                slidesToShow: 8
            }
            }, {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 6
                }
                },{
            breakpoint: 1000,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});