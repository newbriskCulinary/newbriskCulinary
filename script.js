// document.querySelectorAll('.navbar-nav .nav-link').forEach((item) => {
//     item.addEventListener('click', () => {
//         if (window.innerWidth < 992) {
//             const navbarCollapse = document.querySelector('.navbar-collapse');
//             if (navbarCollapse.classList.contains('show')) {
//                 navbarCollapse.classList.remove('show');
//             }
//         }
//     });
// });

// Close the mobile menu when a menu item is clicked or when the toggle button is clicked
document.querySelectorAll('.navbar-nav .nav-link, .navbar-toggler').forEach((item) => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});
