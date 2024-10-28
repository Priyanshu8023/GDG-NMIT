window.addEventListener('scroll', function() {
    const section = document.querySelector('.upcoming');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    if (sectionTop < screenHeight) {
        section.classList.add('active');
    }
});
