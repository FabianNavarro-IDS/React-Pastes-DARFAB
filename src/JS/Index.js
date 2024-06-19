// Index.js

function initCarousel(containerId, intervalTime = 3000) {
  const imageCarousel = document.getElementById(containerId);
  let currentIndex = 0;
  let intervalId = null;

  if (!imageCarousel) {
    console.error(`Carousel container element '${containerId}' not found`);
    return null; // Devuelve null si no se encuentra el contenedor
  }

  const images = imageCarousel.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  function showImage(index) {
    images.forEach((image, idx) => {
      if (idx === index) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  }

  function startCarousel() {
    if (intervalId) return; // Already started

    intervalId = setInterval(nextImage, intervalTime);
    showImage(currentIndex);
  }

  function stopCarousel() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Initialize the carousel
  startCarousel();

  // Return functions for controlling the carousel
  return {
    start: startCarousel,
    stop: stopCarousel,
  };
}

export default initCarousel;
