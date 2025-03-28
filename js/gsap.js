$(function(){
    // ---------- intro ----------
    const ani1 = gsap.timeline();
    ani1.to(".section00 .parallax__item__title", {autoAlpha: 0})

    ScrollTrigger.create({
        animation: ani1,
        trigger: ".section00",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 0,
        markers: false,
        onRefresh: function() {
            // 페이지 새로고침 시 스크롤 위치를 유지하기 위한 코드
            var scrollPosition = sessionStorage.getItem('scrollPosition');
            if (scrollPosition) {
                window.scrollTo(0, scrollPosition);
            }
        }
    });

    // ---------- reset ---------- 
    $(window).on('beforeunload', function() {
        sessionStorage.setItem('scrollPosition', window.scrollY); // 스크롤 위치 저장
    });

    // ---------- home ---------- 
    const ani2 = gsap.timeline();
    ani2.from(".about_text_box", {y: -50, autoAlpha:0})

    ScrollTrigger.create({
        animation: ani2,
        trigger: ".section01",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
    });

    // ---------- profile ----------
    var texts = document.querySelectorAll('.text'); // 텍스트 파도 애니메이션

    texts.forEach((text, index) => {
        gsap.to(text, {
            y: '+=20',
            rotation: 0.01,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
            duration: 1,
            delay: index * 0.5
        });
    });

    const ani3 = gsap.timeline();
    ani3.from(".profile_text_container", {y: -50, autoAlpha:0})

    ScrollTrigger.create({
        animation: ani3,
        trigger: ".section02",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
    });

    // ---------- Skill ---------- 
    const ani4 = gsap.timeline();
    ani4.from(".flip_box", {y: 50, autoAlpha:0})

    ScrollTrigger.create({
        animation: ani4,
        trigger: ".section03",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
    });

    function draw(max, classname, colorname) { // 그래프 기능
        let i = 1;
        const func1 = setInterval(function () {
            if (i < max) {
                color1(i, classname, colorname);
                i++;
            } else {
                clearInterval(func1);
            }
        }, 10);
    }

    function color1(i, classname, colorname) {
        $(classname).css({
            "background": "conic-gradient(" + colorname + " 3% " + i + "%, rgba(255, 255, 255, 0.2) " + i + "% 100%)"
        });
    }

    const skills = [
        { max: 80, classname: '.skill_photo', colorname: '#FFF' },
        { max: 80, classname: '.skill_illus', colorname: '#FFF' },
        { max: 80, classname: '.skill_xd', colorname: '#FFF' },
        { max: 80, classname: '.skill_figma', colorname: '#FFF' },
        { max: 80, classname: '.skill_html', colorname: '#FFF' },
        { max: 80, classname: '.skill_css', colorname: '#FFF' },
        { max: 60, classname: '.skill_java', colorname: '#FFF' },
        { max: 60, classname: '.skill_jquery', colorname: '#FFF' },
    ];

    ScrollTrigger.create({
        trigger: '.section03',
        start: "50% bottom",
        end: "50% bottom",
        scrub: true,
        once: true,
        onEnter: () => {
            skills.forEach(skill => {
                draw(skill.max, skill.classname, skill.colorname);
            });
        },
        onLeave: () => {
            skills.forEach(skill => {
                $(skill.classname).css("background", "conic-gradient(rgba(255, 255, 255, 0.2) 0% 100%)");
            });
        }
    });

    // ---------- project ---------- 
    const ani5 = gsap.timeline();
    ani5.from("#project .swiper", {y: 50, autoAlpha:0})

    ScrollTrigger.create({
        animation: ani5,
        trigger: "#project",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
    });

    // ---------- footer ---------- 
    let sections = gsap.utils.toArray(".parallax__item");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#parallax__cont",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: "+=3000",
            // end: document.querySelector("#parallax__cont").offsetWidth,
        }
    });

    const ani6 = gsap.timeline();
    ani6.to("#parallax01 p", {autoAlpha: 0})

    ScrollTrigger.create({
        animation: ani6,
        trigger: "#parallax01",
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false,
    });

    // ---------- progress ---------- 
    gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 }
    });
});