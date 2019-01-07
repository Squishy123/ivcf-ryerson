let scroll_position = 0;
let ticking = false;

//manage scroll
window.addEventListener('scroll', (e) => {
    scroll_position = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(() => {
            //change opacity of nav
            let nav = document.querySelector('.nav');

            if(scroll_position != 0) {
                nav.classList.replace("nav-trans", "nav-solid");
            } else {
                nav.classList.replace("nav-solid", "nav-trans");
            }

            ticking = false;
        });
    }

    ticking = true;
});