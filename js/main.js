let scroll_position = 0;
let ticking = false;

//manage scroll
window.addEventListener('scroll', (e) => {
    scroll_position = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(() => {
            //change opacity of nav
            let nav = document.querySelector('.nav');

            let nationalLogo = document.querySelector('#national-logo');

            let campusLogo = document.querySelector('#campus-logo');


            if(scroll_position != 0) {
                nav.classList.replace("nav-trans", "nav-solid");

                nationalLogo.classList.remove('hidden');

                campusLogo.classList.add('hidden');
            } else {
                nav.classList.replace("nav-solid", "nav-trans");

                nationalLogo.classList.add('hidden');

                campusLogo.classList.remove('hidden');
            }

            ticking = false;
        });
    }

    ticking = true;
});

//manage toggle click
let toggler = document.querySelector('.toggle');
toggler.addEventListener('click', (e) => {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('expand');

    //toggle bars
    let bar1 = document.querySelector('.bar1');
    bar1.classList.toggle('toggle');

    let bar2 = document.querySelector('.bar2');
    bar2.classList.toggle('toggle');

    let bar3 = document.querySelector('.bar3');
    bar3.classList.toggle('toggle');
});