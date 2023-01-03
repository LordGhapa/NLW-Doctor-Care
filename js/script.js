const nav = document.querySelector('#navigation')
const menuOpen = document.querySelector('.open-menu')
const menuClose = document.querySelector('.close-menu')
const ancoras = document.querySelectorAll('.menu .link')
const btnToTop = document.querySelector('#backToTopButton')


window.addEventListener('scroll', onScroll)
onScroll()

function activateMenuCurrentSection(section){
const targetLine=scrollY + innerHeight/2

const sectionTop=section.offsetTop 
const sectionHeight=section.offsetHeight 

const sectionTopReachTargetLine = targetLine>=sectionTop

const sectionEndAt=sectionTop + sectionHeight
const sectionEndPassedTargetLine = sectionEndAt<=targetLine


const sectionBoundaries=sectionTopReachTargetLine && !sectionEndPassedTargetLine

const sectionId=section.getAttribute("id")

const menuEl=document.querySelector(`.menu a[href*=${sectionId}]`)

if(sectionBoundaries){
  menuEl.classList.add("active")
 
}else{
  menuEl.classList.remove("active")
}  

}



function onScroll() {
  showNavonScroll()
  showBackToTopButtonOnScroll()
 
activateMenuCurrentSection(home)
activateMenuCurrentSection(services)
activateMenuCurrentSection(depoimentos)
activateMenuCurrentSection(about)
activateMenuCurrentSection(contato)

}

function showNavonScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    btnToTop.classList.add('show')
  } else {
    btnToTop.classList.remove('show')
  }
}


menuOpen.addEventListener('click', () => {
  document.body.classList.add('menu-expanded')
})
menuClose.addEventListener('click', () => {
  document.body.classList.remove('menu-expanded')
})

ancoras.forEach(ancoras => {
  ancoras.addEventListener('click', () => {
    menuClose.click()
  })
})
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contato,
footer`)






const btnBlue=document.querySelector('.cor-blue')
const btnRed=document.querySelector('.cor-red')
const btnGreen=document.querySelector('.cor-green')

btnBlue.addEventListener('click',()=>{
  changeColor(209)
})
btnRed.addEventListener('click',()=>{
  changeColor(10)
})
btnGreen.addEventListener('click',()=>{
  changeColor(170)
})

 function changeColor(hsl){

   document.documentElement.style.setProperty('--hue', `${hsl}`);
 }

 changeColor(209)


 var swiper = new Swiper(".mySwiper", {
  slidesPerView:2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },   breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



