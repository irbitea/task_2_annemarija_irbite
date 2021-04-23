$('document').ready(function () {
	$(window).scroll(function () {
		$('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
	});
	
	$(window).resize(function() {

		if ($(this).width() > 992) {
	  
		  $('.phone-nav').hide();
		  $('.menu-btn').hide();
		} 
		else {
		  $('.phone-nav').show();
		  $('.menu-btn').show();
		}
	  
	  });

	  $(window).resize(function() {

		if ($(this).width() < 480) {
		  $('.footer-info').hide();
		  $('.footer-contacts').css("text-align", "left"); 
		  $('.copyright').css("text-align", "left"); 
		  $('#properties').text("Skatīt rekvizītus");
		  $('#properties').css("font-weight", "700");;
		} 
		else {
		  $('.footer-info').show();
		  $('#properties').text("");
		  $('.footer-contacts').css("text-align", "right"); 
		}
		if ($(this).width() < 992) {
			$('.sem').hide();
			$('.footer-info').css("display", "none"); 
			$('.footer-logo').css("text-align", "left"); 
			$('#properties').text("Skatīt rekvizītus");
			$('#properties').css("font-weight", "700");;
		  } 
		  else {
			$('.sem').show();
			$('.footer-info').show();
			$('#properties').text("");
			$('.footer-contacts').css("text-align", "right"); 
		  }
	  
	  });

	  $( ".toggle-open" ).click(function() {
		$('.toggle-open').hide();
		$('.toggle-close').show();
		$("body").toggleClass("fixedPosition");
		
	  });
	  $( ".toggle-close" ).click(function() {
		$('.toggle-close').hide();
		$('.toggle-open').show();
		$("body").removeClass("fixedPosition");
	  });
	  

	var btn = $('#button');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '100');
	});


	$(window).scroll(() => {
		const footerToTop = $('.page-footer').position().top;
		const scrollTop = $(document).scrollTop() + $(window).height();
		const difference = scrollTop - footerToTop + 15;
		const bottomValue = scrollTop > footerToTop ? difference : 15;
		$('.scroll-btn').css('bottom', bottomValue);
	});
});