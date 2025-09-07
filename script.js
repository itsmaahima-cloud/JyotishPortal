const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// New logic for navbar scroll effects
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    // Navbar animation on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Booking Form Logic
const bookingForm = document.querySelector('.booking-form');
const formInputs = bookingForm.querySelectorAll('input, select');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate form submission
    bookingForm.innerHTML = '<div class="form-confirmation"><h3>Thank You!</h3><p>Your booking request has been received. We will contact you shortly to confirm.</p></div>';
});

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.checkValidity()) {
            input.parentElement.classList.add('valid');
            input.parentElement.classList.remove('invalid');
        } else {
            input.parentElement.classList.add('invalid');
            input.parentElement.classList.remove('valid');
        }
    });
});
