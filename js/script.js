function animateElement() {
    var carousel = document.querySelector('#carouselExampleControls');
    var sectionOne = document.querySelector('.section-one')
    var sectionTwo = document.querySelector('.section-two')
    var rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
        carousel.classList.add('animated');
        sectionTwo.classList.add('animated');
        sectionOne.classList.add('animated-cards');
    }
}

window.addEventListener('scroll', animateElement);




window.onscroll = function () {
    var header = document.querySelector('header');
    const black = 'rgba(0,0,0,0.8)';
    if (window.pageYOffset > 1) {
        header.style.backgroundColor = black;
        header.style.transition = '1s all';
    } else {
        header.style.backgroundColor = "transparent";
        header.style.transition = '1s all';
    }
}