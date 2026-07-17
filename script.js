function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        if (button) {
            button.addEventListener("click", function () {
                item.classList.toggle("active");
            });
        }

    });

});