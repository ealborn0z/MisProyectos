document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.dropdown-item');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();

            menuItems.forEach(function (item) {
                item.classList.remove('highlight');
            });

            item.classList.add('highlight');

            var targetId = item.getAttribute('href').substring(1);

            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });

                targetElement.classList.add('highlight');

                setTimeout(function () {
                    targetElement.classList.remove('highlight');
                }, 5000);
            }
        });
    });
});