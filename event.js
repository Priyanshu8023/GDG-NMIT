const slideshowContainer = document.querySelector('.slideshow-container');
            const images = slideshowContainer.querySelectorAll('.slideshow-image');
            const leftArrow = slideshowContainer.querySelector('.left');
            const rightArrow = slideshowContainer.querySelector('.right');
    
            let currentIndex = 0;
    
            function showCurrentImage() {
            images.forEach((image, index) => {
            image.style.display = index === currentIndex ? 'block' : 'none';
            });
        }
    
            function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showCurrentImage();
        }
    
            function previousImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showCurrentImage();
        }
    
            leftArrow.addEventListener('click', previousImage);
            rightArrow.addEventListener('click', nextImage);
    
     
            setInterval(nextImage, 2000);
    
            showCurrentImage();