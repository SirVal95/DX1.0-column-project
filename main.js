ScrollReveal({
    reset: true,
    distance:'60px',
    delay: 400,
    duration: 2500
});

ScrollReveal().reveal('.left-div, .div-b', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.right-div, .div-a', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.first-div, .second-div', { delay: 700, origin: 'top' });
ScrollReveal().reveal('.footer', { delay: 800, origin: 'bottom' });