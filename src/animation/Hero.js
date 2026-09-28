import gsap from "gsap";

export const H = () => {
    gsap.fromTo(["#hero"], {
        x: 100,
        opacity: 0,
        delay: 1,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    },{
        x: 0,
        opacity: 1,
        delay: 1,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    })
    gsap.fromTo(["#hero-notice1", "#hero-notice2"], {
        y: 250,
        opacity: 0,
        delay: 1,
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    },{
        y: 0,
        opacity: 1,
        delay: 1,   
        duration: 1.5,
        ease: "back.out(1)",
        stagger: 0.5,
    })
}