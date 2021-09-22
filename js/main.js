$(function(){

    let header = $('#header');
    let intro  = $('#introI');
    let headerH = header.innerHeight();
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let menuList = $('#list');


    function reamove(){
        menuList.removeClass("menu__list-active");
        $('span').toggleClass('menu_btn-active');

    }

    

    $(window).on('scroll', function(){
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH  ){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }

       
    });

   

    $("[data-scroll]").on("click", function(event){
        

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;



        $("html, body").animate({
             scrollTop:  elementOffset -60
              
        },700);

        reamove();

    });

       


    $('.menu_btn').on('click',function(){

        $('.menu__list').toggleClass('menu__list-active')
    });

    $('.menu_btn').on('click',function(e){

        $('span').toggleClass('menu_btn-active');
    });



    $('.services__items').slick({
       
        
        slidesToShow:4,
        slidesToScroll:1,
        nextArrow: '<button class="slick-next next_services slick-arrow" aria-label="Next" type="button" style="">Next</button>',   
        prevArrow: '<button class="slick-prev prev_services slick-arrow" aria-label="Previous" type="button" style="">Previous</button>',
    
        responsive: [
           
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    
                }

            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            }
        ]
    
    }); 

   
   
    $('.instruct__items').slick({
        arrows:true,
        slidesToShow:3,
        slidesToScroll:3,
        infinite: false,
        
        nextArrow: '<button class="slick-next next_instruct slick-arrow" aria-label="Next" type="button" style="">Next</button>',   
        prevArrow: '<button class="slick-prev prev_instruct slick-arrow" aria-label="Previous" type="button" style="">Previous</button>',


        responsive: [
           
          
            {
                breakpoint: 861,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            }
        ]
    }); 

    
    $('.cont_box-testi').slick({
        arrows:true,
        slidesToShow:1,
        slidesToScroll:1,
          
        nextArrow: '<button class="slick-next next_testi slick-arrow" aria-label="Next" type="button" style="">Next</button>',   
        prevArrow: '<button class="slick-prev prev_testi slick-arrow" aria-label="Previous" type="button" style="">Previous</button>',
    }); 

   
   
});
