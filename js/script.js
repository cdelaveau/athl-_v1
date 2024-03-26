document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});
