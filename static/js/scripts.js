/*!
 * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */

(function ($) {
	'use strict'; // Start of use strict

	// Closes responsive menu when a scroll trigger link is clicked
	$('.nav-link').click(function () {
		$('.navbar-collapse').collapse('hide');
	});

	// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
	//     target: '#mainNav',
	//     offset: 75,
	// });

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($('#mainNav').offset().top > 100) {
			$('#mainNav').addClass('navbar-scrolled');
		} else {
			$('#mainNav').removeClass('navbar-scrolled');
		}
	};

	// Collapse now if page is not at top
	navbarCollapse();

	// Collapse the navbar when page is scrolled
	$(window).scroll(navbarCollapse);

	// eslint-disable-next-line no-undef
})(jQuery); // End of use strict

const menuLinks = document.querySelectorAll(
	'#mainNav a[href], #mainNav img[href], #mainNav span[href]'
);

function getDistanceFromTheTop(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

// Doesn't work correctly on Safari
// function nativeScroll(distanceFromTheTop) {
// 	window.scroll({
// 		top: distanceFromTheTop,
// 		behavior: "smooth",
// 	});
// }

function scrollToSection(event) {
	event.preventDefault();
	const distanceFromTheTop = getDistanceFromTheTop(event.target) - 56;
	//nativeScroll(distanceFromTheTop);
	smoothScrollTo(0, distanceFromTheTop, 600);
}

menuLinks.forEach((link) => {
	link.addEventListener('click', scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== 'undefined' ? duration : 400;

	const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1)
			return (distance / 2) * time * time * time * time + from;
		return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
	};

	const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		//const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
			clearInterval(timer);
		}
		window.scroll(startX, newY);
	}, 1000 / 60);
}

var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
// eslint-disable-next-line no-unused-vars
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	// eslint-disable-next-line no-undef
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
