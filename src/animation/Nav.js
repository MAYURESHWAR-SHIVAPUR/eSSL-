import gsap from "gsap";

export const fadeIn = () => {
    gsap.fromTo(["#nav1", "#nav2", "#nav3 a"], {
        y: -250,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: 0.5,
    },{
        y:0,
        duration: 0.5,
        ease: "back.out(1)",
        stagger: 0.5,
    })
}