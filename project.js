gsap.from(" #nav h1 ,h2",{
    y:-250,
    duration:0.7,
    delay:0.1,
    stagger:0.2
})

gsap.from("#page2-part1",{
    x:-500,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page2",  
    start: "top 50%", 
    end: "bottom 20%",    
    scrub: true,            
    // markers: true, 
    }


})
gsap.from("#page2-part2",{
    x:300,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page2",  
    start: "top 50%", 
    end: "bottom 70%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page3-left",{
    x:-500,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page3",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page3-right",{
    x:500,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page3",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page4 img",{
    duration:3,
    scale:0,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page4",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page5 h2",{
    duration:2,
    scale:0,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page5",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page5 h4",{
    duration:2,
    x:-300,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page5",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page5 .elem h3,.elem h5",{
    duration:2,
    x:300,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page5",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page6-left",{
    duration:2,
    scale:0,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page6",  
    start: "top 50%", 
    end: "bottom 80%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page6-right",{
    x:200,
    duration:2,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page6",  
    start: "top bottom", 
    end: "bottom 50%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page6-img",{
    duration:2,
    scale:0,    
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page6",  
    start: "top 10%", 
    end: "bottom 50%",    
    scrub: true,            
    // markers: true, 
    }


})


gsap.from("#page7 img",{
    scale:0,
    // rotate:"50deg",
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page7",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page8-left",{
    scale:0,
    // rotate:"50deg",
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page8",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#page8-right img",{
    x:290,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page8",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})
gsap.from("#page8-right h3",{
   y:300,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page8",  
    start: "top 50%", 
    end: "bottom 40%",    
    scrub: true,            
    // markers: true, 
    }


})
gsap.from("#page10-left",{
    x:-200,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page10",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})
gsap.from("#page10-center",{
    scale:0,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page10",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})
gsap.from("#page10-right",{
    x:200,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page10",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})

gsap.from("#footer-left",{
    x:-200,
    duration:1,
    delay:0.1,
    opacity:0,
    scrollTrigger:{
        trigger: "#page10",  
    start: "top 50%", 
    end: "bottom 10%",    
    scrub: true,            
    // markers: true, 
    }


})