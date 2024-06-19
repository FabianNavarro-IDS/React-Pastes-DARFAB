document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('image-carousel');
    let currentIndex = 0;

    // Check if the carousel element exists
    if (!carousel) {
        console.error('Carousel element not found');
        return; // Exit the function early if the element is not found
    }

    console.log(carousel);

    function showImage(index) {
        const position = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + position + ')';
    }

    function nextImage() {
        // Check if carousel has children before accessing them
        if (carousel.children.length === 0) {
            console.error('No children found in the carousel');
            return; // Exit the function if there are no children
        }
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Obtain all carousel items
    var carouselItems = document.querySelectorAll('.best-seller-item');

    // Check if carouselItems exists and has elements
    if (carouselItems.length === 0) {
        console.error('No carousel items found');
        return; // Exit the function early if no items are found
    }

    // Initialize the current index for carousel items
    var currentIndex2 = 0;

    // Define the carousel function
    function showNextItem() {
        // Hide all carousel items
        carouselItems.forEach(function(item) {
            item.style.display = 'none';
        });

        // Show the current item
        carouselItems[currentIndex2].style.display = 'block';

        // Increment the index to show the next item
        currentIndex2 = (currentIndex2 + 1) % carouselItems.length;
    }

    // Set the interval to change items every 3 seconds
    setInterval(showNextItem, 3000);

    // Execute showNextItem() initially to show the first item immediately
    showNextItem();

    // Initial display of the first image in the carousel
    showImage(currentIndex);
});
