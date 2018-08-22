$('.home_slider .owl-carousel').owlCarousel({
	items:1,
	dots: false,
	nav:false,
	loop: true,
	autoplay: true
})

$('.home_new_new .owl-carousel').owlCarousel({
	loop: true,
	margin: 0,
	nav: true,
	items: 1,
	dots: false,
	autoplay: true,
	navText: ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
	responsive: {
		0: {
			items: 1,
		},
		480: {
			items: 3,
		},
		768: {
			items: 6,
		},
	}
})
