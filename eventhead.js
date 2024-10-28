window.addEventListener('scroll', function() {
    const section = document.querySelector('.event');
    const logo = document.querySelector('.eventlogo');
    const heading = document.querySelector('.event > span h1');
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight) {
        section.classList.add('active');
        logo.classList.add('active');
        heading.classList.add('active');
    }
});
