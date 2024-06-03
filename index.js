// Image Slider
const slideshow = document.querySelectorAll(".mySlides");
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function prevSlide(slideshow) {
    showSlides(slideIndex += slideshow);
}
function showSlides(slideshow) {
    let i;
    if (document.querySelector(".carousel")) {

        let slideshowPage = document.querySelector(".carousel");
        if (slideshowPage.classList.contains("carousel")) {
            let slides = slideshowPage.querySelectorAll(".mySlides");

            if (slideshow > slides.length) {
            slideIndex = 1;
            };

            if (slideshow < 1) {
            slideIndex = slides.length
            };

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };
        slides[slideIndex-1].style.display = "block";
        }
    }
}

// 5 seconds interval to slide automatically
setInterval(function() {
    prevSlide(1)
  }, 5000);



// this if for the go to top scroll parallax
const wrapperBtnToTop = document.querySelector ('.wrapper-btn-to-top');

window.addEventListener('scroll', checkforheight)

function checkforheight(){
    if(window.scrollY > 900){
        wrapperBtnToTop.style.display = "flex";
    }else{
        wrapperBtnToTop.style.display = "none";
    }
}

wrapperBtnToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

            
  
            
            
