"use strict";

// slide 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// slide + LEAD MORE btn 
function myFunction(index) {
  var dots = document.querySelectorAll(".dots");
  var moreText = document.querySelectorAll(".more");
  var btnText = document.querySelectorAll(".myBtn");
  var btnLess = document.querySelectorAll(".myLessBtn");

  if (dots[index].style.display === "none") {
    dots[index].style.display = "inline";
    btnText[index].style.display ="inline"
    moreText[index].style.display = "none";
  } else {
    dots[index].style.display = "none";
    btnText[index].style.display = "none";
    moreText[index].style.display = "inline";
    btnLess[index].style.display = "inline";
  }
}
