// Mobile Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
// Mobile Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("show");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", function () {
                item.classList.toggle("active");
            });
        }
    });

    // Stats Counter
    const statsSection = document.querySelector(".stats");
    const counters = document.querySelectorAll(".stat-card h2");

    let started = false;

    function runCounters() {

        if (started) return;

        started = true;

        counters.forEach(counter => {

            const original = counter.textContent;
            const target = parseInt(original.replace(/\D/g, ""));
            const suffix = original.replace(/[0-9]/g, "");

            let current = 0;

            const timer = setInterval(function () {

                current++;

                counter.textContent = current + suffix;

                if (current >= target) {

                    counter.textContent = target + suffix;

                    clearInterval(timer);

                }

            }, 25);

        });

    }

    if (statsSection) {

        const observer = new IntersectionObserver(function (entries) {

            if (entries[0].isIntersecting) {

                runCounters();

                observer.disconnect();

            }

        }, {
            threshold: 0.4
        });

        observer.observe(statsSection);

    }

});
