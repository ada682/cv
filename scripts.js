document.addEventListener('DOMContentLoaded', function() {
    // Scroll animation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', changeLinkState);
    changeLinkState();

    // Slide box animation
    const slideBox = document.getElementById('slideBox');
    const toggleButton = document.getElementById('toggleButton');

    // Otomatis membuka kotak saat halaman dimuat
    setTimeout(() => {
        slideBox.classList.add('open');
    }, 500);

    toggleButton.addEventListener('click', () => {
        slideBox.classList.toggle('open');
    });
});
