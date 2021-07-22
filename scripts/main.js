// DOM Document Object Model

//Abrir e fechar menu 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
// 


toggle.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
});

// Quando clicar em um item do menu, esconder menu.
const links = document.querySelectorAll('nav ul li a')

links.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('show')
    })
});

// mudar o header da pagina quando der scroll


const header = document.querySelector('#header')
const navHeight = header.offsetHeight
changeHeaderWhenScroll = () => {

    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }

}



// Testimonials carrousel

const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
       el: '.swiper-pagination'
   },
   mousewheel: true,
   keyboard: true,
   breakpoints: {
       767:{
           slidesPerView: 2,
           setWrapperSize: true
       }
   }

});

// Scroll Reveal: mostrar elementos quando der scroll na pagina
// <script src="https://unpkg.com/scrollreveal"></script>
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(`
    #home .text, #home .image,
    #about .text, #about .image,
    #services header, #services .card,
    #testimonials header, #testimonials .testomonials,
    #contact .text, contact .links,
    footer, .brand, footer .social

`, {interval: 100 })

// Button back to top

const backToTopButton = document.querySelector('.back-to-top')
backToTop = () => {



    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }

}




// When scroll event

window.addEventListener('scroll',() =>{
    changeHeaderWhenScroll()
    backToTop()


})
