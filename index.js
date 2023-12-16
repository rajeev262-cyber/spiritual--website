// function videoCONanimation(){
//     let videoContainer = document.getElementById("video-container");
//     let playBTN = document.getElementById("play")
    
//     videoContainer.addEventListener("mouseenter",function(){
//          gsap.to(playBTN,{
//             scale: 1 ,
//             opacity: 1 
//          })
        
//     })
    
    
//     videoContainer.addEventListener("mouseleave",function(){
//         gsap.to(playBTN,{
//            scale: 0 ,
//            opacity: 0 
//         })
       
//     })
    
//     videoContainer.addEventListener("mousemove",function(dets){
//         gsap.to(playBTN,{
          
//             left : dets.x-80,
//             top: dets.y-100
//         })
       
//     })
    
// }
// videoCONanimation();



function loadingANIMATION(){
    gsap.from("#page2 #welcome-el img",{
        y:100,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
        stagger: 0.2
    
    })
    
    gsap.from("#page2 h1",{
        y:100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.2
    
    })
    
    
    // gsap.from("#page1 #video-container",{
    //     scale:0.8,
     
    
    // })

    gsap.from("#page3 #about-hkm h1",{
      y:100,
      opacity: 0,
      delay: 0.4,
      duration: 0.8,
      stagger: 0.2
  
  })

  gsap.from("#hkm-content #prabhupad-img img",{
    x:-100,
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    stagger: 0.2

})

gsap.from("#hkm-content #prabhupad-img h2 ",{
  x:100,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.2

})

gsap.from("#hkm-content #prabhupad-img p ",{
  y: 100,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.2

})

gsap.from("#hkm-content #para-content ",{
  x:100,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.2

})



}

loadingANIMATION();
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  grabcursor : true,
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

let navEL = document.querySelectorAll(".features-element");

navEL.forEach(element => {
  
  element.addEventListener('onclick',function(){
    console.log("hello")

    window.location.reload();
  })
});



