window.addEventListener('DOMContentLoaded', () =>{
    let burg = document.querySelector('.header-burger'),
        nav = document.querySelector('.navbar'),
        navList = document.querySelector('.navbar__list');
    burg.addEventListener('click', () => {
        burg.classList.toggle('active');
        nav.classList.toggle('active');
        navList.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
})