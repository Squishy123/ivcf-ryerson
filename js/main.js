let scroll_position = 0;
let scrolling = false;

let ticking = false;

//manage scroll targets
let targets = ["#panel1", "#panel2", "#panel3"];
targets = targets.map((t) => {
    let targ = document.querySelector(t);
    return {
        pos: targ.offsetTop,
        sel: t
    };
});

//manage scroll
window.addEventListener('scroll', (e) => {
    let snappedPos = null;

    if (!scrolling) {
        //snap scroll to target
        if (scroll_position > window.scrollY) {
            snappedPos = targets.reverse().find((e) => {
                return window.scrollY > e.pos;
            });
            scrolling = true;

        } else {
            scrolling = false;
        }
    }

    if (scrolling == true && snappedPos != null) {
        console.log("Scrolling");
        scrolling = false;
        location.href = snappedPos.sel;
    }

    scroll_position = window.scrollY;
    //console.log(scroll_position);
    if (!ticking) {
        window.requestAnimationFrame(() => {
            //change opacity of nav
            let nav = document.querySelector('.nav');

            let nationalLogo = document.querySelector('#national-logo');

            let campusLogo = document.querySelector('#campus-logo');


            if (scroll_position != 0) {
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