document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function (item) {
        item.addEventListener("mouseout", function () {
            const beforeElement = item.querySelector('::before') as HTMLElement;
            if (beforeElement) {
                beforeElement.style.width = '0';
                beforeElement.style.visibility = 'hidden';
            }
        });
    });
});
