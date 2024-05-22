// Image Slider

const slideshow = document.querySelectorAll(".mySlides");

let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function prevSlide(slideshow) {
    showSlides(slideIndex += slideshow);
}
// Thumbnail image controls
// function currentSlide(slideshow) {
//   showSlides(slideIndex = slideshow);
// }

// function nextSlide(slideshow) {
//     showSlides(slideIndex += slideshow);
//   }
  

function showSlides(n) {
    let i;
    if (document.querySelector(".carousel")) {

        let slideshowPage = document.querySelector(".carousel");
        if (slideshowPage.classList.contains("carousel")) {
            let slides = slideshowPage.querySelectorAll(".mySlides");

            if (n > slides.length) {
            slideIndex = 1;
            };

            if (n < 1) {
            slideIndex = slides.length
            };

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        };
        slides[slideIndex-1].style.display = "block";
        }
    }
}

setInterval(function() {
    prevSlide(1)
  }, 5000);

