function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    document.addEventListener('click', handleClickOutside);
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.removeEventListener('click', handleClickOutside);
}

function handleClickOutside(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('#menu');
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSideBar();
    }
}