/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show_menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content')
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'                
    }

    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open' 
    }
}

skillsHeader.forEach( (el) => {
    el.addEventListener('click', toggleSkills )
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

const QUALIFICATION_ACTIVE = 'qualification_active'

tabs.forEach( tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)            
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove(QUALIFICATION_ACTIVE)
        })
        target.classList.add(QUALIFICATION_ACTIVE)
        
        
        Object.values(tab).forEach( tab => {
            tab.classList.remove(QUALIFICATION_ACTIVE)
        })
        tab.classList.add(QUALIFICATION_ACTIVE)
    })
})    

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

const modal = (modalClick) => {
    modalViews[modalClick].classList.add('active_modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=> {
        modal(i)
    })
})


modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', ()=> {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active_modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio_container',{
    cssMode: true,
    loop: true,

    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    }
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial_container',{
    // cssMode: true,
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
})
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
const scrollHeader = () => { //ToDO si presenta problemas, cambiar a funciono que no sea flecha y el window a this
    const header = document.getElementById('header')
    if(window.scrollY >= 80){
        header.classList.add('scroll_header')
    } else {
        header.classList.remove('scroll_header')
    }
}

window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 560) {
      scrollUp.classList.add('show_scroll')
    } else {
      scrollUp.classList.remove('show_scroll')
    }
  }
  window.addEventListener('scroll', scrollUp) 

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'
//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bx-moon'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](selectedIcon)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
