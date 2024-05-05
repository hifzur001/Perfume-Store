$(document).ready(function () {
    $(".hero .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000, // Adjust the timeout as needed
        autoplaySpeed: 800, // Adjust the speed as needed (in milliseconds)
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $(".services-carousel").owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000, // Adjust the timeout as needed
        autoplaySpeed: 800, // Adjust the speed as needed (in milliseconds)
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2 // Change the number of items per slide for different screen sizes if needed
            },
            1000: {
                items: 4 // Change the number of items per slide for different screen sizes if needed
            }
        }
    });
});
