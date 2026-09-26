/* =====================================
   SAMEER S - PORTFOLIO JAVASCRIPT
===================================== */


/* =====================================
   CURRENT YEAR
===================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================
   SKILL BAR ANIMATION
===================================== */

const skillBars =
    document.querySelectorAll(".bar-fill");


const skillObserver =
    new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width;

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.3
        }
    );


skillBars.forEach(function(bar) {

    skillObserver.observe(bar);

});


/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".info-card, .project-showcase, .journey-item, .skill, .resume-box"
    );


revealElements.forEach(function(element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


const revealObserver =
    new IntersectionObserver(
        function(entries, observer) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function(element) {

    revealObserver.observe(element);

});


/* =====================================
   RIGHT CLICK DISABLED
===================================== */

document.addEventListener(
    "contextmenu",
    function(event) {

        event.preventDefault();

    }
);


/* =====================================
   TEXT SELECTION DISABLED
===================================== */

document.addEventListener(
    "selectstart",
    function(event) {

        event.preventDefault();

    }
);


/* =====================================
   COPY DISABLED
===================================== */

document.addEventListener(
    "copy",
    function(event) {

        event.preventDefault();

    }
);


/* =====================================
   CUT DISABLED
===================================== */

document.addEventListener(
    "cut",
    function(event) {

        event.preventDefault();

    }
);


/* =====================================
   DRAG DISABLED
===================================== */

document.addEventListener(
    "dragstart",
    function(event) {

        event.preventDefault();

    }
);


/* =====================================
   KEYBOARD SHORTCUT PROTECTION
===================================== */

document.addEventListener(
    "keydown",
    function(event) {

        const key =
            event.key.toLowerCase();


        /* Ctrl+C */

        if (
            event.ctrlKey &&
            key === "c"
        ) {
            event.preventDefault();
        }


        /* Ctrl+X */

        if (
            event.ctrlKey &&
            key === "x"
        ) {
            event.preventDefault();
        }


        /* Ctrl+S */

        if (
            event.ctrlKey &&
            key === "s"
        ) {
            event.preventDefault();
        }


        /* Ctrl+P */

        if (
            event.ctrlKey &&
            key === "p"
        ) {

            event.preventDefault();

            alert(
                "Printing is disabled. This resume is view-only."
            );
        }


        /* Ctrl+U */

        if (
            event.ctrlKey &&
            key === "u"
        ) {
            event.preventDefault();
        }


        /* Ctrl+Shift+I */

        if (
            event.ctrlKey &&
            event.shiftKey &&
            key === "i"
        ) {
            event.preventDefault();
        }


        /* Ctrl+Shift+J */

        if (
            event.ctrlKey &&
            event.shiftKey &&
            key === "j"
        ) {
            event.preventDefault();
        }


        /* Ctrl+Shift+C */

        if (
            event.ctrlKey &&
            event.shiftKey &&
            key === "c"
        ) {
            event.preventDefault();
        }


        /* F12 */

        if (event.key === "F12") {

            event.preventDefault();

        }

    }
);


/* =====================================
   VISIBILITY PROTECTION
===================================== */

document.addEventListener(
    "visibilitychange",
    function() {

        if (document.hidden) {

            document.body.classList.add(
                "page-hidden"
            );

        } else {

            document.body.classList.remove(
                "page-hidden"
            );

        }

    }
);


/* =====================================
   SIMPLE DEVTOOLS DETECTION
===================================== */

setInterval(function() {

    const widthDifference =
        window.outerWidth -
        window.innerWidth;

    const heightDifference =
        window.outerHeight -
        window.innerHeight;


    if (
        widthDifference > 160 ||
        heightDifference > 160
    ) {

        document.body.classList.add(
            "page-hidden"
        );

    } else {

        document.body.classList.remove(
            "page-hidden"
        );

    }

}, 1000);


/* =====================================
   MOUSE PARALLAX
===================================== */

document.addEventListener(
    "mousemove",
    function(event) {

        const x =
            (event.clientX /
            window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY /
            window.innerHeight - 0.5) * 10;


        const profile =
            document.querySelector(".profile");


        if (profile) {

            profile.style.transform =
                `translate(${x}px, ${y}px)`;

        }

    }
);
