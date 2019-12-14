// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-T');
const menuNav = document.querySelector('.menu-nav-T');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item-T');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

let scrollpos = window.scrollY
const header = document.querySelector(".menuForThis")
const otherSection = document.querySelector(".js--section-features")
const header_height = otherSection.offsetTop
            
const add_class_on_scroll = () => header.classList.add("sticky")
const remove_class_on_scroll = () => header.classList.remove("sticky")
            
window.addEventListener('scroll', function(){
    scrollpos = window.scrollY;
                
    if(scrollpos >= header_height){
        add_class_on_scroll()
    }else{
        remove_class_on_scroll()
    }
})