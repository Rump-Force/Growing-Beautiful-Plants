new WOW({
	resetAnimation: true, // 👈 заставляет анимации повторяться при повторном появлении
}).init()

document.addEventListener('DOMContentLoaded', () => {
	const counters = document.querySelectorAll('.banner__applies')
	const speed = 200 // меньше — быстрее (чем меньше, тем быстрее)

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target')
			const count = +counter.innerText

			// на сколько увеличиваем
			const increment = Math.ceil(target / speed)

			if (count < target) {
				counter.innerText = count + increment
				setTimeout(updateCount, 50)
			} else {
				counter.innerText = target
			}
		}

		updateCount()
	})
})

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')
const menuCloseBtn = document.querySelector('.mobile-menu__close')

burger.addEventListener('click', () => {
	mobileMenu.classList.toggle('active')
	overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
	mobileMenu.classList.remove('active')
	overlay.classList.remove('active')
})

menuCloseBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('active')
	overlay.classList.remove('active')
})

const swiper = new Swiper('.reviews__swiper', {
	speed: 1200,

	navigation: {
		nextEl: '.button-reviews-next',
		prevEl: '.button-reviews-prev',
	},
	loop: true,
	// другие параметры по необходимости
})

const scrollToTopBtn = document.getElementById('scrollToTopBtn')

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollToTopBtn.classList.add('show')
	} else {
		scrollToTopBtn.classList.remove('show')
	}
})

scrollToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header')
	if (window.scrollY > 100) {
		header.classList.add('shrink')
	} else {
		header.classList.remove('shrink')
	}
})

// Открытие формы логина
document.querySelectorAll('.btn-login-popup').forEach(button => {
	button.addEventListener('click', () => {
		document
			.querySelectorAll('.wrapper')
			.forEach(w => w.classList.remove('active-popup'))
		document
			.querySelectorAll('.form__box')
			.forEach(f => (f.style.display = 'none'))

		document.querySelectorAll('.wrapper')[0].classList.add('active-popup') // login
		document.querySelectorAll('.form__box.login')[0].style.display = 'block'

		document.querySelector('.overlay').classList.add('active')
	})
})

// Открытие формы регистрации
document.querySelectorAll('.btn-register-popup').forEach(button => {
	button.addEventListener('click', () => {
		document
			.querySelectorAll('.wrapper')
			.forEach(w => w.classList.remove('active-popup'))
		document
			.querySelectorAll('.form__box')
			.forEach(f => (f.style.display = 'none'))

		document.querySelectorAll('.wrapper')[1].classList.add('active-popup') // register
		document.querySelectorAll('.form__box.register')[0].style.display = 'block'

		document.querySelector('.overlay').classList.add('active')
	})
})

// Закрытие по иконке "крестик"
document.querySelectorAll('.icon-close').forEach(closeBtn => {
	closeBtn.addEventListener('click', () => {
		document
			.querySelectorAll('.wrapper')
			.forEach(w => w.classList.remove('active-popup'))
		document.querySelector('.overlay').classList.remove('active')
	})
})

// Закрытие при клике на оверлей
document.querySelector('.overlay').addEventListener('click', () => {
	document
		.querySelectorAll('.wrapper')
		.forEach(w => w.classList.remove('active-popup'))
	document.querySelector('.overlay').classList.remove('active')
})
