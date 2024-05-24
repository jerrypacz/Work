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


//   var names = [{ name: "jer", lname: "boy"},
//               { name: "ric", lname: "cho"},
//               { name: "jer", lname: "xan"}
//             ]
            

//             for(let i=0; i<names.length; i++){
//                 if(names[i].name=="jer" && names[i].lname == "xan"){
//                     console.log(i)
//                 console.log(names[i].name)
//             }
//         }



            
  
            
            
