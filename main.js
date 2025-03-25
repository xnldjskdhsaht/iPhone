document.addEventListener('DOMContentLoaded', () => {
	// header menu
	let body = document.querySelector('body');
	let headermenu = document.querySelectorAll(".menu_box");
	let bgblur = document.querySelector('.bg_blur');
	let topMenu = document.querySelector('.h_top ul');
	let currentOpenMenu = null;

	headermenu.forEach((h_menus) => {

		let inner = h_menus.querySelector(".menu_inner")
		let scroll = h_menus.querySelector(".menu_scroll");

		h_menus.addEventListener("mouseover", () => {
			h_menus.classList.add("open")
			bgblur.classList.add("open")

			if (currentOpenMenu && currentOpenMenu !== h_menus) {
				currentOpenMenu.classList.remove("open");
				currentOpenMenu.querySelector(".menu_scroll").classList.remove("open");
				currentOpenMenu.querySelector(".menu_inner").classList.remove("open");
			}

			h_menus.classList.add("open");
			bgblur.classList.add("open");
			scroll.classList.add("open");
			inner.classList.add("open");

			currentOpenMenu = h_menus;
		})

		h_menus.addEventListener("mouseout", () => {
		});
	});

	body.addEventListener("mouseleave", (event) => {
		if (!topMenu.contains(event.target) && !bgblur.contains(event.target)) {
			if (currentOpenMenu) {
				currentOpenMenu.classList.remove("open");
				currentOpenMenu.querySelector(".menu_scroll").classList.remove("open");
				currentOpenMenu.querySelector(".menu_inner").classList.remove("open");
				bgblur.classList.remove("open");
			}
		}
	});

	bgblur.addEventListener('mouseover', () => {
		if (currentOpenMenu) {
			currentOpenMenu.classList.remove("open");
			currentOpenMenu.querySelector(".menu_scroll").classList.remove("open");
			currentOpenMenu.querySelector(".menu_inner").classList.remove("open");
			bgblur.classList.remove("open");
		}
	});



	// 홈페이지 로드 시 효과 (h_mid, h_btm, main_text)

	let headericon = document.querySelector(".mid_inner")
	let headertext = document.querySelector(".h_btm")
	let maintext = document.querySelector(".main_text")
	setTimeout(() => {
		headericon.style.transform = 'translateX(0)';
		headericon.style.opacity = '1';
		headertext.style.transform = 'translateY(0)';
		headertext.style.opacity = '1'
		maintext.style.transform = 'translateY(0)'
		maintext.style.opacity = '1'
	}, 100);


	// 홈페이지 로드 시 효과 (video)

	let videobox = document.querySelector(".main_mv")
	setTimeout(() => {
		videobox.style.transform = 'translateY(0)'
		videobox.style.opacity = '1'
	}, 500);


	// main_mv 스크롤이벤트(크기변경)

	gsap.registerPlugin(ScrollTrigger);

	let mainmovie;
	mainmovie = gsap.to(".main_mv", {
		scrollTrigger: {
			trigger: ".main_mv",
			start: 150,
			end: "center top",
			scrub: true,
			markers: false
		},
		width: "90%",
		borderRadius: '50px',
		ease: "none"
	});



	if (window.innerWidth <= 736) {
		mainmovie.scrollTrigger.kill();
	}


	window.addEventListener('resize', () => {
		let width = window.innerWidth;

		if (width <= 736) {
			if (mainmovie.scrollTrigger) {
				mainmovie.scrollTrigger.kill();
			}
		}

		else {
			if (!mainmovie.scrollTrigger) {
				mainmovie = gsap.to(".main_mv", {
					scrollTrigger: {
						trigger: ".main_mv",
						start: 150,
						end: "center top",
						scrub: true,
						markers: false
					},
					width: "90%",
					borderRadius: '50px',
					ease: "none"
				});
			}
		}
	})






	// main_mv 버튼속성

	let video = document.querySelector(".main_mv>video")
	let videobtn = document.querySelector(".main_mv>button")
	let videobtnimg = document.querySelector(".main_mv>button>img")

	videobtn.addEventListener('click', () => {
		video.classList.toggle('stop');

		if (video.classList.contains('stop')) {
			video.pause();
			videobtnimg.setAttribute('src', './img/header/start.png');
			videobtnimg.setAttribute('alt', 'btn_start');
		} else {
			video.play();
			videobtnimg.setAttribute('src', './img/header/stop.png');
			videobtnimg.setAttribute('alt', 'btn_stop');
		}
	})





	// slide slide 구현
	const swiper = new Swiper('.swiper-container.slide_i', {
		loop: false,
		// slidesPerView: 4.5, // 한 번에 4개의 슬라이드 표시
		simulateTouch: false,
		navigation: {
			nextEl: '.slide_btn_after',  // 다음 슬라이드 버튼
			prevEl: '.slide_btn_before', // 이전 슬라이드 버튼
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 12,
				simulateTouch: true
			},
			736: {
				slidesPerView: 2.5,
				spaceBetween: 18,
				simulateTouch: true
			},
			1036: {
				slidesPerView: 3.5,
				spaceBetween: 24,
				simulateTouch: true
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		},
	});


	let listitem = document.querySelectorAll('.list_inner .list_inner_text li');
	let listimage = document.querySelectorAll('.list_inner_imgbox .list_inner_img picture');
	let listmbitem = document.querySelectorAll('.list_mb_inner .list_inner_text li');

	listitem.forEach((item, index) => {
		item.addEventListener('click', () => {

			listitem.forEach(aa => {
				aa.classList.remove('active')
			})
			listmbitem.forEach(mb => {
				mb.classList.remove('active');
			})

			item.classList.add('active');
			listmbitem[index].classList.add('active');


			listimage.forEach(bb => {
				bb.style.display = 'none';
			})

			listimage[index].style.display = 'block';

		})

	});

	listmbitem.forEach((item, index) => {
		item.addEventListener('click', () => {

			listmbitem.forEach(aa => {
				aa.classList.remove('active')
			});


			listitem.forEach(aa => {
				aa.classList.remove('active')
			})

			item.classList.add('active');

			listitem[index].classList.add('active');

			listimage.forEach(bb => {
				bb.style.display = 'none';
			})
			listimage[index].style.display = 'block';

		})


	})







	// 스크롤이벤트(등장)
	let slide = document.querySelector('.slide');
	let items = document.querySelectorAll('.item_slide');
	let contentstext = document.querySelector('.contents_text');
	let contentsbox = document.querySelectorAll('.contents_box')
	let contentsbtn = document.querySelector('.contents_slide_btn')
	let bannertitle = document.querySelector('.banner_title')
	let pictitle = document.querySelector('.pic_title')
	let picbox = document.querySelectorAll('.pic_box')
	let listtitle = document.querySelector('.list_title')
	let listmbtitle = document.querySelector('.list_mb_title')
	let listinner = document.querySelector('.list_inner')
	let itemtitle = document.querySelector('.item_title')

	const observerCallback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				observer.unobserve(entry.target);
			}
		});
	};

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.2
	};

	const observer = new IntersectionObserver(observerCallback, options);

	observer.observe(slide);


	observer.observe(itemtitle);
	items.forEach(item => {
		observer.observe(item);
	});


	observer.observe(contentstext);
	contentsbox.forEach(item => {
		observer.observe(item);
	});
	observer.observe(contentsbtn);


	observer.observe(bannertitle);


	observer.observe(pictitle);
	picbox.forEach(item => {
		observer.observe(item);
	});

	observer.observe(listtitle);
	observer.observe(listmbtitle);
	observer.observe(listinner);




	// contents slide

	const swiper2 = new Swiper('.swiper-container.contents_allbox', {
		loop: false,
		simulateTouch: false,
		navigation: {
			nextEl: '.contents_slide_btn_after',  // 다음 슬라이드 버튼
			prevEl: '.contents_slide_btn_before', // 이전 슬라이드 버튼
		}, breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 24,
				simulateTouch: true
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 24,
				simulateTouch: true
			},
			736: {
				slidesPerView: 2.5,
				spaceBetween: 24,
				simulateTouch: true
			},
			1036: {
				slidesPerView: 3,
				spaceBetween: 24,
				simulateTouch: true
			},
			1440: {
				slidesPerView: 4.1,
				spaceBetween: 24,
				simulateTouch: false
			}
		}
	});


	// slide popup
	let popupclose = document.querySelectorAll(".popup_close");
	let slidebox = document.querySelectorAll('.slide_b');
	let slidepopup = document.querySelector(".slide_popup");
	let slidepop = document.querySelector('.slide_pop');
	let slideinner = document.querySelectorAll('.slide_pop_inner');

	slidebox.forEach((slide, index) => {
		slide.addEventListener('click', () => {

			slideinner.forEach((sld) => {
				sld.style.display = 'none';
			});

			slideinner[index].style.display = 'block';
			slidepopup.style.display = 'block';
			slidepop.style.display = 'block';
			body.style.overflowY = 'hidden';

			popupclose.forEach((button, index) => {
				button.addEventListener('click', (e) => {
					e.stopPropagation();
					slideinner[index].style.display = 'none';
					slidepopup.style.display = 'none';
					slidepop.style.display = 'none';
					body.style.overflowY = 'visible';
				});
			});

			slidepopup.addEventListener('click', () => {
				slideinner.forEach((sld) => {
					sld.style.display = 'none';
				});
				slidepopup.style.display = 'none';
				slidepop.style.display = 'none';
				body.style.overflowY = 'visible';
			});

			slideinner.forEach((popup) => {
				popup.addEventListener('click', (e) => {
					e.stopPropagation();
				});
			});

			slidepopup.scrollTo(0, 0);
		})
	})

	window.addEventListener('resize', () => {
		if (slidepopup.style.display === 'block') {
			body.style.overflowY = 'hidden';
		}
	});




	// banner popup
	let bannerclose = document.querySelector('.banner_mv_close img');
	let bannermv = document.querySelector('#banner_mv')
	let banner = document.querySelector('.banner_img')

	bannerclose.addEventListener('click', () => {
		bannermv.style.display = 'none';
		body.style.overflowY = 'visible';
	})

	banner.addEventListener('click', () => {
		bannermv.style.display = 'block';
		body.style.overflowY = 'hidden';
	})


	// contents popup
	let contentspopclose = document.querySelectorAll('.contents_popup_close');
	let contentspopup = document.querySelector('.contents_popup')
	let contentspop = document.querySelector('.contents_pop');
	let contentspopinner = document.querySelectorAll('.contents_pop_inner');

	contentsbox.forEach((contents, index) => {
		contents.addEventListener('click', () => {
			contentspopinner.forEach((pop) => {
				pop.style.display = 'none';
			});

			contentspopinner[index].style.display = 'block';
			contentspopup.style.display = 'block';
			contentspop.style.display = 'block';
			body.style.overflowY = 'hidden';
			contentspopup.scrollTo(0, 0);
		});
	});

	contentspopclose.forEach((button, index) => {
		button.addEventListener('click', (e) => {
			e.stopPropagation();
			contentspopinner[index].style.display = 'none';
			contentspop.style.display = 'none';
			contentspopup.style.display = 'none';
			body.style.overflowY = 'visible';
		});
	});

	contentspopup.addEventListener('click', () => {
		contentspopinner.forEach((pop) => {
			pop.style.display = 'none';
		});
		contentspop.style.display = 'none';
		contentspopup.style.display = 'none';
		body.style.overflowY = 'visible';
	});

	contentspopinner.forEach((popup) => {
		popup.addEventListener('click', (e) => {
			e.stopPropagation();
		});
	});

	window.addEventListener('resize', () => {
		if (contentspopup.style.display === 'block') {
			body.style.overflowY = 'hidden';
		}
	});


	// 반응형 , header_icon 
	const swiper4 = new Swiper('.h_mid.mySwiper', {
		slidesPerView: 11,
		spaceBetween: 0,
		breakpoints: {
			0: {
				slidesPerView: 3,
				spaceBetween: 0,
			},
			430: {
				slidesPerView: 5,
				spaceBetween: 12,
				simulateTouch: true
			},
			736: {
				slidesPerView: 8,
				spaceBetween: 0,
			},
			1036: {
				slidesPerView: 11,
				spaceBetween: 0,
			},
		},
	})


	function initializeSwiper() {
		const isPortrait = window.innerHeight > window.innerWidth;

		const swiper5 = new Swiper('.item_slidebox.mySwiper', {
			loop: false,
			simulateTouch: false,
			breakpoints: {
				0: {
					slidesPerView: isPortrait ? 1.5 : 2.5,  // 세로모드에서는 1, 가로모드에서는 2.5
					spaceBetween: 24,
					simulateTouch: true,
				},
				575: {
					slidesPerView: isPortrait ? 2 : 2.5,
					spaceBetween: 24,
					simulateTouch: true,
				},
				736: {
					slidesPerView: isPortrait ? 2.5 : 3,
					spaceBetween: 24,
					simulateTouch: true,
				},
				1036: {
					slidesPerView: isPortrait ? 3.5 : 4,
					spaceBetween: 24,
					simulateTouch: true,
				},
				1440: {
					slidesPerView: 5,
					spaceBetween: 24,
					simulateTouch: false,
				}
			}
		});
	}
	window.addEventListener('resize', function () {
		initializeSwiper();
	});
	initializeSwiper();



	document.querySelectorAll('.f_btm_mb_grid_inner').forEach(value => {
		value.querySelector('.f_btm_mb_grid_title').addEventListener('click', function () {
			value.classList.toggle('active');
		});
	});


	let haminner = document.querySelector('.ham_inner')
	let hambox = document.querySelector('.hambox');

	haminner.addEventListener('click', function () {
		haminner.classList.toggle('clicked');
		hambox.classList.toggle('open');

		if (hambox.classList.contains('open')) {
			body.style.overflowY = 'hidden';
		} else {
			body.style.overflowY = 'visible';
		}
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 736) {
			hambox.classList.remove('open');
			haminner.classList.remove('clicked');
			if (hambox.style.display === 'none') {
				body.style.overflowY = 'visible';
			}
		}
	})

})
