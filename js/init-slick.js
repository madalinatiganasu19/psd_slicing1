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
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};