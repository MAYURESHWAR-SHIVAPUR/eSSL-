import gsap from "gsap";

export const animateIntro = () => {

    gsap.fromTo(["#intro-name span"], {
        scale: 0,
        duration: 1,
        ease: "back.out(1)",
        stagger: 0.5,
    }, {
        scale: 1,
        duration: 1,
        ease: "back.out(1)",
        stagger: 0.5,
    })
    
    gsap.fromTo(["#intro-notice2 span", "#intro-description"], {
        y: -10,
        delay: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    }, {
        y: 0,
        delay: 1.5,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    })



    gsap.fromTo(["#finger", "#intro-loading", "#intro-enter"], {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 2,
        ease: "back.out(1)",
        stagger: 0.5,
    }, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 2,
        ease: "back.out(1)",
        stagger: 0.5,
    })

    gsap.fromTo(["#intro-notice1", "#hero-notice2"], {
        x: -250,
        opacity: 0,
        delay: 2.5,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    }, {
        x: 0,
        opacity: 1,
        delay: 2.5,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    })


}