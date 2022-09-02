window.onload = function() {
    /*=================SWIPER INITIALISE======================*/
    const  breakpoints = {
        200:  {
            slidesPerView: 2.1,
            spaceBetween: 5,

        },
        400:  {
            slidesPerView: 2.5,

        },
        500:  {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        },
        900: {
            slidesPerView: 4.5,
            spaceBetween: 25,
        },
        1124: {
            slidesPerView: 6.5,
            spaceBetween: 5,
        },
    };
    const news= new Swiper(".mySwiper", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next ',
            prevEl: '.button-prev',
        },
        breakpoints: breakpoints,
    });
    const tendances = new Swiper(".mySwiper2", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next2',
            prevEl: '.button-prev2',
        },
        breakpoints: breakpoints,
    });
    const  actors = new Swiper(".mySwiper3", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.button-next3',
            prevEl: '.button-prev3',
        },
        breakpoints: breakpoints,
    });
    const  how_it_works = new Swiper(".how_it_works", {
        slidesPerView: 1.1,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            clickable: false,
        },

        breakpoints: {
            640: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    });
    const  presentations = new Swiper(".presentations ", {
        slidesPerView: 1.1,
        spaceBetween: 20,
        mousewheel: true,
        pagination: {
            clickable: false,
        },

        breakpoints: {
            640: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2.1,
                spaceBetween: 25,
            },
            948: {
                slidesPerView: 2.5,
                spaceBetween: 25,
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    });

    const  celebrityVideos = new Swiper(".celebrity-videos", {
        slidesPerView: 1.6,
        spaceBetween: 25,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
    });
    const  celebrityHowItWorksSwiper = new Swiper(".celebrity-how-it-works-swiper", {
        slidesPerView: 1.3,
        spaceBetween: 25,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            460:{
                slidesPerView: 1.4,
            } ,
            640:{
                slidesPerView: 2.1,
            },
            850: {
                slidesPerView: 2.5,
            },
            950:{
                slidesPerView:3.1,
            }     ,
            1150:{
                slidesPerView:4,
            }
        }
    });
    const  celebrityRequestContentSteps = new Swiper(".celebrity-request-content", {
        slidesPerView: 1.3,
        spaceBetween: 25,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            460:{
                slidesPerView: 1.4,
            } ,
            640:{
                slidesPerView: 2.1,
            },
            850: {
                slidesPerView: 2.5,
            },
            950:{
                slidesPerView:3.1,
            }     ,
            1150:{
                slidesPerView:4,
            }
        }
    });

}
