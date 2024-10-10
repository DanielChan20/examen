document.addEventListener('DOMContentLoaded', function () {
    // Actualizar el año en el footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Animación para los elementos del menú
    const navItem = document.querySelectorAll('.nav-item');
    navItem.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 100 * index); // Añadir un retraso progresivo
    });
});
