const navBtn = document.querySelector('.nav-toggle'); // Get element HTML with menu button
console.log('navBtn is:');
console.log(navBtn);
console.log(navBtn.classList);

const navMenu = document.querySelector('#menu'); // Get HTML element with all navigation menu
console.log(`#menu is:`);
console.log(navMenu);
console.log(navMenu.classList);

const MENU_CLASS_ACTIVE = 'active';

const openNav = () => {
	navMenu.classList.add(MENU_CLASS_ACTIVE);
};

const closeNav = () => {
	navMenu.classList.remove(MENU_CLASS_ACTIVE);
};

console.log(navMenu.classList == 'active');

navBtn.addEventListener('click', () => {  // Add action by click on navBtn '.nav-toggle' AND if navigation is working then close navigation menu
	if (navMenu.classList == 'active') {
		closeNav();
	} else {
		openNav(); 		
	};		
});





