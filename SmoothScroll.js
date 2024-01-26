document.addEventListener('DOMContentLoaded', function () {
    let scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (event) {
            event.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});