// Scroll Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(
".features, .services, .fleet, .booking-process, .testimonials, .faq, .stats, .cta, .contact"
).forEach(el => observer.observe(el));

// Header Resize

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.style.padding = "12px 8%";
    }else{
        header.style.padding = "20px 8%";
    }

});