window.addEventListener(
  "load",
  function () {
    let scrolling = false;
    // 스크롤 위치 복원을 수동으로 설정
    history.scrollRestoration = "manual";

    // 페이지 로드 시 상단으로 스크롤
    window.scrollTo(0, 0);

    // GSAP
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // smoother = ScrollSmoother.create({
    // 	wrapper: "#smooth",
    // 	content: "#content",
    // 	normalizeScroll:false,
    // 	ignoreMobileResize: true,
    // 	smooth: 1,
    // 	effects: true,
    // 	smoothTouch: 0.05,
    // });

    // Sec01 Event
    let video = document.getElementById("video");
    if (video.paused) {
      setTimeout(function () {
        video.play();
      }, 100);
    }

    pauseSec = 10;
    setInterval(function () {
      if (Math.floor(video.currentTime) >= pauseSec) video.pause();
    }, 500);

    // Sec02 Event
    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec02",
    // 		start: "center center+=30%",
    // 		end:"+=200",
    // 		scrub: 1,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .from(document.querySelector('.sec02 .hd .pai'), {ease: "power4.easeOut", opacity: 0, y: 80, duration:1})
    // .from(document.querySelector('.sec02 .hd .hai'), {ease: "power4.easeOut", opacity: 0, y: 80, duration:1, delay:.1}, '-=40%')
    // .from(document.querySelector('.sec02 .bd'), {ease: "power4.easeOut", opacity: 0, y: 80, duration:1, delay:.1}, '-=40%')

    // Sec03 Event
    // 화면 스크롤
    const pinSec = document.querySelector(".sec03");
    const pinInner = document.querySelector(".sec03 .sec-block");
    const pinItems = document.querySelectorAll(".sec03 .item");

    // let isScrolling = false;

    // pinSec.addEventListener('touchstart', function(event) {
    // 		// sec03에 터치가 시작되었을 때 스크롤을 멈추기
    // 		isScrolling = true;
    // });

    // pinSec.addEventListener('touchend', function(event) {
    // 		// sec03에서 터치가 끝나면 스크롤을 다시 활성화
    // 		isScrolling = false;
    // });

    // let lastTouchY = 0;
    // let scrollSpeed = 0.1; // 속도를 조절하는 값 (0.1은 천천히, 1은 빠르게)

    
    // addEventListener("touchmove", (e) => {
      //   let deltaY = lastTouchY - e.touches[0].clientY;
      //   window.scrollBy(0, deltaY * scrollSpeed);
      //   lastTouchY = e.touches[0].clientY;
      // });
      
    let scrollSpeed = 0.01; // 기본 스크롤 속도

    addEventListener('touchmove', function(event) {
      // 터치 스크롤 시 속도 조정
      let touchMove = event.touches[0].clientY - event.touches[1]?.clientY || 0;
      console.log(event.touches[0].clientY)
      window.scrollBy(0, touchMove * scrollSpeed);
    });

    let height = pinInner.offsetHeight;
    this.addEventListener("resize", function () {
      height = pinInner.offsetHeight;
    });

    addEventListener("scroll", function () {
      let scrollTop = window.scrollY;
      let pinSecTop = pinSec.getBoundingClientRect().top;
      let sec03Top = scrollTop + pinSecTop;

      // if (isScrolling) {
      // 	// 스크롤을 sec03에서 멈추기 위해 스크롤 위치를 고정
      // 	window.scrollTo(0, pinSec.offsetTop);
      // }
      // for(let i = 0; i < pinItems.length; i++) {
      //  if(scrollTop > sec03Top+height*i-10 && scrollTop < sec03Top+height*i+10) scrollTo(0,pinSec.offsetTop+height*i)
      // };
      if (scrollTop >= sec03Top && scrollTop < sec03Top + height * 3) {
        pinItems.forEach((pinItem, idx) => {
          pinItem.style.position = "fixed"; // fixed로 고정시킴
          const targetTop = sec03Top + height * idx - scrollTop;

          // top 값을 계산하고, 0보다 작으면 0으로 설정
          pinItem.style.top = Math.max(0, targetTop) + "px";
        });
      } else {
        pinItems.forEach((pinItem) => {
          pinItem.style.position = "relative"; // 스크롤 범위를 벗어나면 absolute로 위치 고정
          pinItem.style.top = "0"; // top 값을 초기화
        });
      }
    });

    // let pinTl = gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: pinSec,
    // 		pin: true,
    // 		// markers: true,
    // 		scrub:1,
    // 		start: "top top",
    // 		end: "+=" + (height + offset) + "%",
    // 		// end: "+="+height+"%",
    // 		invalidateOnRefresh: true,
    // 		anticipatePin: 1,
    // 		immediateRender: false,
    // 		toggleActions: 'play none none reverse'
    // 	}
    // });

    // pinItems.forEach((item, idx) => {
    // 	console.log(idx);
    // 	// 기본 초기 설정
    // 	gsap.set(item, { ease: "power4.easeOut", autoAlpha: 1, y: "100vh" });

    // 	// idx가 0이나 4일 때는 duration을 길게 설정
    // 	if (idx === 0 || idx === 4) {
    // 		pinTl.scrollTrigger.end = "+=" + (height + offset + 1000) + "%";
    // 		pinTl.to(item, {y: "0vh", autoAlpha: 1, stagger: 4}, '+=50%');
    // 	} else {
    // 		pinTl.to(item, {y: "0vh", autoAlpha: 1, stagger: 1 }, '+=30%');
    // 	}
    // })

    // Sec04 Event
    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec04",
    // 		start: "center center+=50%",
    // 		end:"+=300",
    // 		scrub: 1,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .from(document.querySelector('.sec04 .hd .pai'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1})
    // .from(document.querySelector('.sec04 .hd .hai'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1, delay:.1}, '-=40%')
    // .from(document.querySelector('.sec04 .bd'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1, delay:.1}, '-=40%');

    // Sec05 Event
    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec05",
    // 		start: "center center+=50%",
    // 		end:"+=100",
    // 		scrub: 1,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .from(document.querySelector('.sec05 .container'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1, delay:.1});

    // let photoSlide = new Swiper('.sec05 .photoBox .swiper-container', {
    // 	slidesPerView:"auto",
    // 	spaceBetween: 16,
    // 	pagination: {
    // 		el: '.sec05 .photoBox .pagination',
    // 		type: 'progressbar',
    // 	},
    // 	breakpoints: {
    // 		720 : {
    // 			spaceBetween: 30,
    // 		},
    // 		576 : {
    // 			spaceBetween: 24,
    // 		}
    // 	}
    // });

    let photoBtn = document.querySelectorAll(".sec05 .photo li");
    let photoCon = document.querySelectorAll(".sec05 .photo-con .modal-con");

    for (let i = 0; i < photoBtn.length; i++) {
      photoBtn[i].addEventListener("click", function () {
        for (let j = 0; j < photoBtn.length; j++) {
          photoBtn[j].classList.remove("on");
          photoCon[j].classList.remove("on");
        }
        photoBtn[i].classList.add("on");
        photoCon[i].classList.add("on");
      });
    }

    // Sec07 Event
    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec07",
    // 		start: "top center",
    // 		end:"+=300",
    // 		scrub: 1,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .from(document.querySelector('.sec07 .hd .pai'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1})
    // .from(document.querySelector('.sec07 .hd .hai'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1, delay:.1}, '-=40%')
    // .from(document.querySelector('.sec07 .bd'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1, delay:.1}, '-=40%');

    let tabMenus = document.querySelectorAll(".sec07 .tab-menu li");
    let tabCons = document.querySelectorAll(".sec07 .tab-con li");

    tabMenus.forEach((menu, index) => {
      menu.addEventListener("click", function () {
        tabMenus.forEach((current) => current.classList.remove("on"));
        menu.classList.add("on");

        tabCons.forEach((current) => current.classList.remove("on"));
        tabCons[index].classList.add("on");
      });
    });

    let jnOneSlide = new Swiper(".sec07 .one-swiper", {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".sec07 .one-swiper .pagination",
        clickable: true,
      },
      watchOverflow: true,
    });

    let jnTwoSlide = new Swiper(".sec07 .two-swiper", {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".sec07 .two-swiper .pagination",
        clickable: true,
      },
      watchOverflow: true,
    });

    let jnThreeSlide = new Swiper(".sec07 .three-swiper", {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      pagination: {
        el: ".sec07 .three-swiper .pagination",
        clickable: true,
      },
      watchOverflow: true,
    });

    $(".sec07 .tab-menu .button01").click(function () {
      jnTwoSlide.slideTo(0, 300, false);
      jnThreeSlide.slideTo(0, 300, false);
    });

    $(".sec07 .tab-menu .button02").click(function () {
      jnOneSlide.slideTo(0, 300, false);
      jnThreeSlide.slideTo(0, 300, false);
    });

    $(".sec07 .tab-menu .button03").click(function () {
      jnOneSlide.slideTo(0, 300, false);
      jnTwoSlide.slideTo(0, 300, false);
    });

    // Sec08 Event
    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec08",
    // 		start: "top center",
    // 		end:"+=300",
    // 		scrub: 1,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .from(document.querySelector('.sec08 .link'), {ease: "power4.easeOut", opacity: 0, x: -100, duration:1, delay:.1}, '-=80%');

    // Sec09 Event
    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec09",
    // 		start: "top center+=30%",
    // 		end:"+=300",
    // 		scrub: 1,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .from(document.querySelector('.sec09 .hd .pai'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1})
    // .from(document.querySelector('.sec09 .hd .hai'), {ease: "power4.easeOut", opacity: 0, y: 100, duration:1, delay:.1}, '-=80%');

    // let sponsorList = gsap.utils.toArray('.sec09 .list li');

    // sponsorList.forEach((list) => {
    // 	gsap.timeline({
    // 		scrollTrigger: {
    // 			trigger: list,
    // 			start: "top center+=30%",
    // 			end:"+=200",
    // 			scrub: 1,
    // 			toggleActions: 'play none none resume',
    // 		},
    // 	}).from(list, {ease: "power4.easeOut", opacity: 0, y: 100, duration:1});
    // })

    // Sec10 Event
    $(".sec10 .slider").slick({
      slide: "div",
      slidesToShow: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      draggable: false,
      speed: 1500,
      fade: true,
      autoplaySpeed: 1500,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
    });

    $(".sec10 .slider").on("touchcancel touchmove", function () {
      $(this).slick("slickPlay");
    });

    // sec09 이미지 슬라이드
    let options = {
      slidesPerView: 1,
      spaceBetween: 10,
      // loop: true,
      observer: true,
      observeParents: true,
      // mousewheel:true,

      pagination: {
        el: ".sec09 .swiper-container .pagination",
        type: "progressbar",
      },
    };

    const brandSlider = new Swiper(".sec09 .swiper-container", options);

    // Quick
    // let quick = document.getElementById('quick');

    // gsap.timeline({
    // 	scrollTrigger: {
    // 		trigger: ".sec09",
    // 		start: "top top",
    // 		end:"bottom bottom+=30%",
    // 		// markers: true,
    // 		scrub:true,
    // 		toggleActions: 'play none none resume',
    // 	},
    // })
    // .to(quick, {ease: "power4.easeOut", display:'none', opacity: 0, duration:.8 });

    // smoother.scrollTop(0);
  },
  false
);
