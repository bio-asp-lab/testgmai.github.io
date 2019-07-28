function main() {
  (function () {
     'use strict';

      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 500);
              return false;
            }
          }
        });

    // affix the navbar after scroll below header
    $('#nav').affix({
          offset: {
            top: $('header').height()
          }
    });
  }());

  $(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  
  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


});


  // Add navigator listener to jump to different sections.
  let navigators = document.getElementsByClassName('change-sect');
  let sectionArr = [document.getElementById('home'),
                    document.getElementById('speaker'),
                    document.getElementById('contact')];
  for (let i = 0; i < navigators.length; ++i) {
    navigators[i].addEventListener('click', function() {
      for (let j = 0; j < sectionArr.length; ++j) {
        if (navigators[i].innerHTML.toLowerCase() != sectionArr[j].id) {
          sectionArr[j].style.display = 'none';
          continue;
        }
        sectionArr[j].style.display = 'block';
      }
    })
  }

  // Add anchor listener of news.
  let newsPeople = document.getElementsByClassName('to-people');
  for (let i = 0; i < newsPeople.length; ++i) {
    newsPeople[i].addEventListener('click', function() {
      // Hide news section and show about section
      document.getElementById('news').style.display = 'none';
      document.getElementById('about').style.display = 'block';
    })
  }
  let newsPublication = document.getElementsByClassName('to-publication');
  for (let i = 0; i < newsPublication.length; ++i) {
    newsPublication[i].addEventListener('click', function() {
      // Hide news section and show publication section
      document.getElementById('news').style.display = 'none';
      document.getElementById('publication').style.display = 'block';
    })
  }
}
main();
