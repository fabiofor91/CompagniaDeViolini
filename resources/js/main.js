let navbar = document.querySelector('#navbar');

window.addEventListener('scroll', ()=>{
    if (scrollY > 0){
        navbar.classList.add('blurNav');
    } else if (scrollY == 0){
        navbar.classList.remove('blurNav');
    }
});

// apertura menu 

let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");
let menu = document.querySelector('#menu');

openMenu.addEventListener('click', () =>{
    menu.classList.remove('d-none');
    openMenu.classList.add('d-none');
})

closeMenu.addEventListener('click', () => {
    menu.classList.add('d-none');
    openMenu.classList.remove('d-none');
})

let body = document.querySelector('#body');

body.addEventListener('click', ()=>{
    menu.classList.add('d-none');
    openMenu.classList.remove('d-none');
})