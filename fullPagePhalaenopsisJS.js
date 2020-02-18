// set slide index to 1
var slideIndex = 1;

// call showSlides funct - pass in slideIndex
showSlides(slideIndex);

// Next/previous controls funct
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls dots
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// main carousel function
function showSlides(n) {
  var i;
  // grab each slide
  var slides = document.getElementsByClassName("mySlides");
  // grab each dot
  var dots = document.getElementsByClassName("dot");
  // condition if current # grater than length set to 1
  if (n > slides.length) {slideIndex = 1}
  //condition if current # less than 1 set to lenght
  if (n < 1) {slideIndex = slides.length}

  // loop through slides style none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // loop through dots replace method active with nothing
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //show slide
  slides[slideIndex-1].style.display = "block";
  //show dot active
  dots[slideIndex-1].className += " active";
}
