// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });


    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("show");

        });

    });

}


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================= NAVBAR SCROLL =================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ================= PHOTO VIEWER =================

const photoViewer =
    document.getElementById("photoViewer");

const viewerImage =
    document.getElementById("viewerImage");

const closeViewer =
    document.getElementById("closeViewer");


const photos =
    document.querySelectorAll(
        ".portfolio-card img, .gallery-grid img"
    );


photos.forEach(function (photo) {

    photo.addEventListener("click", function () {

        viewerImage.src = this.src;

        photoViewer.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


if (closeViewer) {

    closeViewer.addEventListener(
        "click",
        function () {

            photoViewer.classList.remove("show");

            document.body.style.overflow = "";

        }
    );

}


if (photoViewer) {

    photoViewer.addEventListener(
        "click",
        function (event) {

            if (event.target === photoViewer) {

                photoViewer.classList.remove("show");

                document.body.style.overflow = "";

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            photoViewer.classList.remove("show");

            document.body.style.overflow = "";

        }

    }
);


// ================= BOOKING FORM =================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "clientName"
                ).value;

            const phone =
                document.getElementById(
                    "clientPhone"
                ).value;

            const email =
                document.getElementById(
                    "clientEmail"
                ).value;

            const type =
                document.getElementById(
                    "photoType"
                ).value;

            const date =
                document.getElementById(
                    "eventDate"
                ).value;

            const message =
                document.getElementById(
                    "clientMessage"
                ).value;


            const whatsappMessage =

`Hello Shreyesh!

I would like to book a photography session.

Name: ${name}

Phone: ${phone}

Email: ${email}

Photography Type: ${type}

Event Date: ${date}

Message:
${message}`;


            const whatsappURL =
                "https://wa.me/919035398248?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}