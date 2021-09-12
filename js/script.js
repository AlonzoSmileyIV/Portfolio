$(document).ready(function(){
  let html_skill_per = 90;
  let css_skill_per = 75;
  let js_skill_per = 65;
  let mongo_skill_per = 65;
  let express_skill_per = 60;
  let react_skill_per = 50;
  let node_skill_per = 75;

  let currentYear = new Date().getFullYear();
  $('.this-year').text(currentYear);

  $('.bars .html').closest('.bars').find('.percentage').text(html_skill_per + '%');
  $('.bars .html').append("<style>.html::before{ width:" + html_skill_per + "% }</style>");

  $('.bars .css').closest('.bars').find('.percentage').text(css_skill_per + '%');
  $('.bars .css').append("<style>.css::before{ width:" + css_skill_per + "% }</style>");


  $('.bars .js').closest('.bars').find('.percentage').text(js_skill_per + '%');
  $('.bars .js').append("<style>.js::before{ width:" + js_skill_per + "% }</style>");

  $('.bars .mongo').closest('.bars').find('.percentage').text(mongo_skill_per + '%');
  $('.bars .mongo').append("<style>.mongo::before{ width:" + mongo_skill_per + "% }</style>");

  $('.bars .express').closest('.bars').find('.percentage').text(express_skill_per + '%');
  $('.bars .express').append("<style>.express::before{ width:" + express_skill_per + "% }</style>");

  $('.bars .react').closest('.bars').find('.percentage').text(react_skill_per + '%');
  $('.bars .react').append("<style>.react::before{ width:" + react_skill_per + "% }</style>");

  $('.bars .node').closest('.bars').find('.percentage').text(node_skill_per + '%');
  $('.bars .node').append("<style>.node::before{ width:" + node_skill_per + "% }</style>");

  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }

    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass('show');
    } else{
      $('.scroll-up-btn').removeClass('show');
    }

    if(this.scrollY < ($(document).height() * 0.90) -$(window).height()){
      $('.scroll-down-btn').addClass('show');
    } else{
      $('.scroll-down-btn').removeClass('show');
    }
  });

  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Freelancer", "Designer", "Bartender", "Dancer", "Brother", "Friend"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Freelancer", "Designer", "Bartender", "Dancer", "Brother", "Friend"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // Owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
      items: 1,
      nav: false
      },
      600:{
      items: 2,
      nav: false
      },
      1000:{
      items: 3,
      nav: false
      }
    }
  });
});

$('.scroll-up-btn').click(function(){
      $("html, body").animate({ scrollTop: "0" });
});

$('.scroll-down-btn').click(function(){
 $("html, body").animate({scrollTop: (($(document).height()) - $(window).height()).toString()});
});
