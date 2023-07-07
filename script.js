var crsr = document.querySelector('#cursor')
var crsr_blr = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x - 10 + 'px';
    crsr.style.top = dets.y - 10 + 'px';
    crsr_blr.style.left = dets.x - 250 + 'px'
    crsr_blr.style.top = dets.y - 250 + 'px'

})

gsap.to('#nav', {
    backgroundColor: '#000',
    height: "120px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})

gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '#main',
        scroller: 'body',
        // markers: true,
        start: 'top -20%',
        end: 'top -70%',
        scrub: 1
    }
})