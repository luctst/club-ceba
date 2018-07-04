$(document).ready ( function() {
    $(".multiple-items").slick( {
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    } );
    $(".partenaire--slider").slick( {
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    } );
} );