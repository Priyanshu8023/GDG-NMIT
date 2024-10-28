window.addEventListener('scroll', function() {
    const section = document.querySelector('.about');
    const text = document.querySelector('.text');
    const image = document.querySelector('.aboutIMG');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight) {
        section.classList.add('active');
        text.classList.add('active');
        image.classList.add('active');
    }
});
