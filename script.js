// menu-hamburger

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const btnViewMore = document.getElementById('btn-view-more')
const gallery = document.querySelector('.gallery-more')

hamburger.addEventListener("click", mobileMenu)

function mobileMenu(){
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}

window.addEventListener('scroll', function() {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  });

// slider

const prevBtn = document.getElementById('btn-prev'),
        nextBtn = document.getElementById('btn-next'),
        slides = document.querySelectorAll('.slide'),
        dots = document.querySelectorAll('.dot');


let index = 0;

const activeSlide = n =>{
    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n =>{
    for(dot of dots){
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const prepareCurrentSlide = idx =>{
    activeSlide(idx)
    activeDot(idx)
}

const nextSlide = () =>{
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index)
    }else{
        index++;
        prepareCurrentSlide(index)
    }
}

const prevSlide = () =>{
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index)
    }else{
        index-- ;
        prepareCurrentSlide(index)
    }
}

dots.forEach((item, indexDot)=>{
    item.addEventListener('click', ()=>{
        index = indexDot;
        prepareCurrentSlide(index)
    })
})

setInterval(nextSlide, 2500)

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

// button View More

const btnViewFuncOpen = () => {
    if(gallery.style.display === "none"){
        gallery.style.display = "flex";
    }else{
        gallery.style.display = "none";
    }
        
}


btnViewMore.addEventListener('click', btnViewFuncOpen);