let currentImageIndex = 0;
const images = document.querySelectorAll('.imgtt .imgt');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initialize the first image as active
showImage(currentImageIndex);

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.imgtt .imgt');
    const largeImage = document.querySelector('.large-img img');

    function updateImages() {
        // Update the large image
        largeImage.src = images[currentIndex].src;

        // Update the smaller images
        images.forEach((img, index) => {
            if (index === currentIndex) {
                img.style.display = 'none';
            } else if (index > currentIndex && index <= currentIndex + 3) {
                img.style.display = 'inline-block';
            } else if (currentIndex + 3 >= images.length && (index <= (currentIndex + 3) % images.length)) {
                img.style.display = 'inline-block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    function slideRight() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImages();
    }

    function slideLeft() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImages();
    }

    document.querySelector('.btnn1').addEventListener('click', slideRight);
    document.querySelector('.btnn2').addEventListener('click', slideLeft);

    updateImages();
});