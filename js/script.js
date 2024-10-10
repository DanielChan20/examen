document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('year').textContent = new Date().getFullYear();

    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index); 
    });
});
