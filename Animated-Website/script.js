const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var tl=gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    scale:0.6, //scale 0.6 krdia taki wo shrink hojayee//
    duration:0 //bina time lgaye neche bhej dia//
})

tl.to(".page1",{
    y:"30vh",
    delay:0.5,
    duration:1
})

tl.to(".page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})