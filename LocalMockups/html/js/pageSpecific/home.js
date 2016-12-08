$(document).ready(function () {
    //skew Slider
    $('.gallery_content').createDiagonalSlider();
    //fit text headers
    $('.fitHead').fitText(0.55);
    $('.fitHead.fit').fitText(0.55);
    atvImg();
    //fans and brands slider
    $('.actSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.navSlider',
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {

                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1
                }
            }
        ]
    });
    $('.navSlider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.actSlider',
        arrows: false,
        centerMode: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1
                }
            }
        ]
    });
    // end home js
});