window.onload=function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:1500,
        arrows:false,
        centerMode:true,
        slidesToShow:3,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
};