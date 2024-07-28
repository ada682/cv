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
    const codeBox = document.getElementById('codeBox');
    const codeContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CV - Adika Putra Maulana</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <header>
                <nav>
                    <div class="logo">+</div>
                    <ul>
                        <li><a href="index.html">HOME</a></li>
                        <li><a href="profile.html">PROFILE</a></li>
                        <li><a href="education.html">EDUCATION</a></li>
                        <li><a href="skills.html">SKILLS</a></li>
                        <li><a href="projects.html">PROJECTS</a></li>
                        <li><a href="contact.html">CONTACT</a></li>
                    </ul>
                </nav>
            </header>
            <div class="container">
                <div class="intro">
                    WELCOME TO MY CV <span>|</span><br>
                    Hello, my name is Adika Putra Maulana.<br>
                    Welcome to my online CV where you can find information about my education, skills, projects, and contact details.
                </div>
            </div>
        </body>
        </html>
    `;

    // Function to simulate typing
    function typeWriter(text, element, speed) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    // Open the box automatically with typing animation
    setTimeout(() => {
        slideBox.classList.add('open');
        codeBox.innerHTML = ''; // Clear the code box
        typeWriter(codeContent, codeBox, 50);
    }, 500);

    toggleButton.addEventListener('click', () => {
        slideBox.classList.toggle('open');
    });
});
