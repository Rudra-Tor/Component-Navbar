const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('nav');
let flag = 0;

menuBtn.addEventListener('click', () => {
    if (flag === 0) {
        menu.classList.toggle('hidden');
        gsap.to(menu, { x: 0, duration: 0.5, ease: 'power2.out' });
        flag = 1;
    }
    else {
        menu.classList.toggle('hidden');
        gsap.to(menu, { x: '100%', duration: 0.5, ease: 'power2.in' });
        flag = 0;
    }
});


let SearchBar = document.querySelector('input');

document.querySelector('#searchIcon').addEventListener('click', () => {
    SearchBar.focus()
})