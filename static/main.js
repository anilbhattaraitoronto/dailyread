const navLinks = document.querySelectorAll('.nav-link');
const toggleLink = document.querySelector('.toggle-link');
toggleLink.addEventListener('click', function (event) {
    navLinks.forEach(function (link) {
        link.classList.toggle('show-link');
    })
})