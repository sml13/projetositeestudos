$('.slider').slick({
    dots: true, //pontos do slider
    infinite: true, // pra nao parar de rodar
    speed: 300, // velocidade do slider
    slidesToShow: 1, //qnt slides mostrados
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 4
            }
        }
    ]
});