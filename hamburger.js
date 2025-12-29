// xu ly bat/tat nut Hamburger 

function toggleNavbarMenu (){
    // isNavbarOpen = !isNavbarOpen;
    // tao cac bien de lay thong tin 
    const navbarContent = document.querySelector('.navbar-content');
    const toggleButton = document.getElementById('toggleNavbarButton');
    const body = document.body;

    // an/hien navbar theo bien isNavbarOpen
    // bang cach su dung 1 class active, class chua duoc dinh nghia nen se can phai dinh nghia cho class do
    navbarContent.classList.toggle('active');
    toggleButton.classList.toggle('active');
    body.classList.toggle('menu-open');
}
// xu ly dong menu khi click vao cac link 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-content a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close menu when link is clicked
            const navbarContent = document.querySelector('.navbar-content');
            const toggleButton = document.getElementById('toggleNavbarButton');
            const body = document.body;
            
            if (window.innerWidth <= 576) {
                navbarContent.classList.remove('active');
                toggleButton.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    });
});

