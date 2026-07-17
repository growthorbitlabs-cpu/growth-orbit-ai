// Mobile Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {

    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        }
    });

    // Stats Counter
    const counters = document.querySelectorAll(".stat-card h2");

    counters.forEach(counter => {

        const original = counter.textContent;
        const target = parseInt(original.replace(/\D/g, ""));

        if (isNaN(target)) return;