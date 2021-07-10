const header = document.getElementById('header');


// fixed menu

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    if (scroll > 200) {
        header.classList.add('fixedHeader');
    } else {
        header.classList.remove('fixedHeader');
    }
})