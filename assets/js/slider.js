$(".testimonial_slider_area").owlCarousel({
    autoplay:true,
    sliderSpeed:3000,
    items:4,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin:30,
    dots:false,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        776:{
            items:3
        },
        
        1000:{
            items:4
        }
    }
})