//Select DOM Items

const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-bg-img'); //First column part of image
const menuNav = document.querySelector('.menu-nav'); //Second column part of Links of pages

const navPages = document.querySelectorAll('.nav-page'); //Each of the pages link in menu-nav part


//Set Default(initial) state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navPages.forEach(page => page.classList.add('show'));

        //Set menu state
        showMenu = true;

    }else{

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navPages.forEach(page => page.classList.remove('show'));

        //Set menu state
        showMenu = false;

    }
}