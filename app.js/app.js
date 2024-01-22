$(function(){
  $('#banner').slick({
    dots: true,
    infinite: true,
    speed: 5000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    arrows: false,
    dotsClass:"sahindots container", });



// arrival end
    // $('.arrival').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 3,
    //   // autoplay: true,
    //   // autoplaySpeed: 1000,
    //   arrows:false,
     
      
   
    // });

    $('.arrival').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay:true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
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
 
    



      // latest box start
      $('.latest-box').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
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





      $('.infobox').slick({
        arrows:false,
        autoplay:true,
         asNavFor: '.bottom-box'
        
         
      });

// latest box end



      // bottom box start
      $('.bottom-box').slick({
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1000,
        arrows:false,
        asNavFor: '.infobox'
        
       
       });
    //  bottom box end




    // box shadow start
      $('.boxshadow').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay:true,
       
        autoplay: false,
        arrows:false,
        cssEase: 'linear',
       
       });

       $('.best').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        dots: true,
       
        autoplay: false,
        arrows:false,
        cssEase: 'linear',
      
       });

// box shadow end


// exper-box start
$('.expert-box').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 1000,
  prevArrow:".expert-left-arrow",
  nextArrow:".expert-right-arrow",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
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
// exper-box end

$('.instragram-box').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay:true,
  autoplaySpeed: 1000,
  arrows:false,
  dots:true,
  dotsClass:"sahindot1",
  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 480,
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




// "instragram-box start



// showing-product start
$('.shoowing-box').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay:true,
  autoplaySpeed: 1000,
  arrows:false,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 480,
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

// showing-product end


// "instragram-box end

//  timer start
        $(".timer")
       .countdown("2025/01/01", function(event) {
         $(".days").text(event.strftime('%D'));
          $(".hour").text(event.strftime('%H'));
         $(".minute").text(event.strftime('%M'));
         $(".sec").text(event.strftime('%S'));
         
      });

        $('.counter').counterUp({
         delay: 10,
         time: 10000
     });
    // timer end

//  leather-box start
$('.leather-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay:true,
  autoplaySpeed: 1000,
  arrows:false,
  asNavFor: '.lether-small-box',

});

// curslol start


// cursole end

$('.lether-small-box').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows:false,
  autoplay:true,
  asNavFor: '.leather-box',
});
// classic box start
$('.classic-box ').slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay:true,
  fade:true,
  prevArrow:".classic-right-arrow2 ",
  nextArrow:".classic-left-arrow  ",
 autoplay:true
});

// classic box end




$('.main-blog-box').slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  fade:true,
  autoplay:true,
  prevArrow:".blog2-right-arrow",
  nextArrow:".blog3-left-arrow",
  autoplay:true
 
});


// 
let input =document.querySelector(".input")

let plus =document.querySelector(".plus")

let minus =document.querySelector(".minus")


function plusvalue() {
    if( input.value >= 100) {
        return false
    }
    input.value = Number(input.value)+1
}
    
plus.addEventListener("click",plusvalue)


function minusvalue() {       
   if(input.value<1){ return false;}else
    input.value = Number (input.value)-1}
minus.addEventListener("click",minusvalue)


// leather-box end


  

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
})


// newlatter start


// top arrow start
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
      $('.top-arrow').fadeIn('slow');
  } else {
      $('.top-arrow').fadeOut('slow');
  }
});





$('.top-arrow').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 600);
});

// top arrow end


function openPopup() {
  document.getElementById('newsletterPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('newsletterPopup').style.display = 'none';
}

// Open the popup after a delay (e.g., 5 seconds)
setTimeout(openPopup, 5000);
$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
      $('.newslatter-cross-btn').fadeIn('slow');
  } else {
      $('.newslatter-cross-btn').fadeOut('slow');
  }
});





// newslatter preloader start
document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
      document.querySelector(".preloader").style.display = "none";
      // Add any additional logic to show your main content here
  }, 2000); 
});
// newslatter preploder end

















