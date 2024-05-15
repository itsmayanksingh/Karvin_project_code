var categories = document.querySelectorAll('.category');

window.addEventListener('scroll', function() {
    categories.forEach(function(category) {
        var categoryTop = category.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (categoryTop < windowHeight * 0.5) { // Adjust the threshold as needed
            category.classList.add('scaled');
        } else {
            category.classList.remove('scaled');
        }
    });
});
