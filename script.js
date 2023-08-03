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


var i = 0;
var txt = 'Our team of seasoned chefs and industry experts are dedicated to guiding you through a comprehensive curriculum that covers everything from classic culinary techniques to cutting-edge gastronomy.Whether you dream of becoming a master chef, opening your own restaurant, or simply want to elevate your cooking skills to impress your friends and family, New and Brisk is here to make that dream a reality. Our hands-on approach, state-of-the-art facilities, and a diverse range of courses will empower you to unleash your culinary potential Join us on this gastronomic adventure, where you"ll not only learn the art of cooking but also discover the science behind it. Let"s embark on a culinary journey together and create delightful memories that linger on the taste buds of those you serve Come and be a part of the New and Brisk family, where passion meets perfection, and culinary dreams come true.';
var speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}