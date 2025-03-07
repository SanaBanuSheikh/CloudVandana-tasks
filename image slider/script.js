const images = [
    'cooldude.jpg',
    'American Eggplant.jpg', // Replace with a different image
];

const sliderImage = document.getElementById('slider-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;

function updateImage() {
    sliderImage.src = images[currentImageIndex]; // Fixed incorrect property
}

// Previous Button Click Event
prevBtn.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

// Next Button Click Event
nextBtn.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) { 
        currentImageIndex = 0; // Fixed missing update logic
    }
    updateImage();
});

// Initialize the first image
updateImage();
