
gsap.from('.header__menu ul li', {
	delay: .5,
	autoAlpha: 0,
	y: -100,
	ease: 'power4',
	duration: 1,
	stagger: 0.2,
})

gsap.from('.header__logo', {
	autoAlpha: 0,
	x: -1000,
	ease: '"expo.out"',
	duration: 1,
})

gsap.from('.outline-logo', {
	autoAlpha: 0,
	ease: '"expo.out"',
	duration: 3,
})

gsap.from('.intro__title', {
	autoAlpha: 0,
	delay: 1.5,
	y: 100,
	ease: '"power4"',
	duration: 1,
})


gsap.from('.intro__txt', {
	autoAlpha: 0,
	delay: 2,
	y: 100,
	ease: '"power4"',
	duration: 1,
})


gsap.from('.intro__content', {
	autoAlpha: 0,
	delay: 3,
	y: -50,
	ease: '"power4"',
	duration: 1,
})





