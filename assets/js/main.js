// Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  }

// preloader
document.addEventListener("DomContentLoaded", function(){
    const counter3 = document.querySelector(".counter-3");

    for(let i =0;i<2;i++){
        for(let j=0;j<10;j++){
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            counter3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = 0;
    counter3.appendChild(finalDiv);

    function animate(counter, duration,delay = 0){
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1)*numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration:duration,
            delay:delay,
            ease: "power2.inOut",
        });
    }
    animate(counter3,5);
    animate(document.querySelector(".counter-2"),6);
    animate(document.querySelector(".counter-1"),2,4);
});
    gsap.to(".digit", {
        top:"-150px",
        stagger:{
            amount:0.25,
        },
        delay:6,
        duration:1,
        ease:"power2.inOut",
    });
    gsap.to(".loader-1", {
        width:0,
        duration:6,
        ease:"power2.inOut",
    });
    gsap.to(".loader-2", {
        width:0,
        delay:1.9,
        duration:1,
        ease:"power2.inOut",
    });
    gsap.to(".loader",{
        background:"none",
        delay:6,
        duration:0.1,
    });
    gsap.to(".loader-1",{
        rotate:90,
        y: -50,
        duration:0.5,
        delay:6,
    });
    gsap.to(".loader-2",{
        x: -75,
        y: 75,
        duration:0.5,
    },
    "<"
    );
    gsap.to(".loader",{
        scale:40,
        delay:7,
        duration: 1,
        ease: "power2.inOut",
    });
    gsap.to(".loader",{
        rotate:45,
        y:500,
        x:2000,
        duration: 1,
        delay: 7,
        ease: "power2.inOut",
    });
    gsap.to(".loading-screen",{
        opacity:0,
        duration:0.5,
        delay:7.5,
        ease: "power2.inOut",
    });

    // to remove iframe video in the contact footer
    setTimeout(hideDiv, 1000); //Instead of 10000 put your video's length, in milliseconds  
    function hideDiv() {
        document.querySelector(".iframe").style.display="none";    
    }

// Home
const text = document.querySelector(".home_title");
const leaf = document.querySelector(".leaf");
const hill1 = document.querySelector(".hill1");
const hill4 = document.querySelector(".hill4");
const hill5 = document.querySelector(".hill5");

window.addEventListener("scroll",()=>{
    const value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
})

$('.icon').click(function(){
    $('span').toggleClass("cancel");
  });


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Features
function changebg(bg,title){
    const feature = document.querySelector(".features");
    const content = document.querySelectorAll(".features_content");
    feature.style.background = `url('/assets/img/${bg}')`;
    feature.style.backgroundSize = "cover";
    feature.style.backgroundPosition = "center";

    content.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, {delay: 500})
sr.reveal(`.home__social`, {delay: 600})
sr.reveal(`.about__img`,{origin: 'left'})
sr.reveal(`.about__data`,{origin: 'right'})
sr.reveal(`.questions__group, .footer`,{interval: 100})