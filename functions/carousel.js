document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel input[name="selector"]');
    const totalItems = items.length;

    function moveCarousel() {
        items[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].checked = true;
    }

    setInterval(moveCarousel, 3000);
});