// Add the following script at the end of the <body> tag or inside a separate JavaScript file

// Function to handle the slideshow animation
function startSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.getElementsByTagName('img');
    let currentIndex = 0;
  
    setInterval(() => {
      // Hide the current image
      images[currentIndex].classList.remove('active');
  
      // Update the index for the next image
      currentIndex = (currentIndex + 1) % images.length;
  
      // Display the next image
      images[currentIndex].classList.add('active');
    }, 10000); // Adjust the duration (in milliseconds) between image transitions as needed
  }
  
  // Start the slideshow when the page has finished loading
  window.addEventListener('load', startSlideshow);

  window.addEventListener("load", function() {
    var slides = document.querySelectorAll(".slide");
    var index = 0;

    function showSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(showSlide, 10000); // Change slide every 10 seconds
});
