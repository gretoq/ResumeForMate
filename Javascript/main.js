// This part of JS code for button which will opening navigation menu
const navBtn = document.querySelector('.nav-toggle'); // Get element HTML with menu button
console.log('navBtn is:');
console.log(navBtn);
console.log(navBtn.classList);

const navMenu = document.querySelector('#menu'); // Get HTML element with all navigation menu
console.log(`#menu is:`);
console.log(navMenu);
console.log(navMenu.classList);

const MENU_CLASS_ACTIVE = 'active'; // CSS style name which we will add by click

const openNav = () => {
	navMenu.classList.add(MENU_CLASS_ACTIVE);	// This is a function which will open navigation menu
};

const closeNav = () => {
	navMenu.classList.remove(MENU_CLASS_ACTIVE);	// This is a function which will close navigation menu
};

console.log(navMenu.classList == 'active');

navBtn.addEventListener('click', () => {	// Add action by click on navBtn '.nav-toggle' AND if navigation is working then close navigation menu
	if (navMenu.classList == 'active') {
		closeNav();
	} else {
		openNav(); 		
	};		
});
// The end of code which works by click on navigation button

///////////////////////////////////////////////////////////////////////////////////////////

// This block of code show and process modal window with form and notification

const MODAL_WINDOW_ACTIVE = 'modal-active';  // This style class name which opening modal form

			// We getting all HTML elements with which we will be working

const formModal = document.querySelector('#form-modal'); // We get HTML element with our form

const form = document.querySelector('#form'); // Get just form element

const successModal = document.querySelector('#success-modal'); // We get element with our notification

const openModalFormBtn = document.querySelector('#open-modal'); // Selecting button which will open our modal window with form
console.log(openModalFormBtn);
console.log(formModal.classList);

const launchBtn = document.querySelector('#launch-btn'); // Selecting button which will sending us this form with data

const closeBtns = document.querySelectorAll('.close-btn'); // Selecting button which will close our modal windows

// Now we adding listener for button 'open-modal' and give him command what to do, if it will be clicked
// Add variation who activate our input field User Name
const userNameField = document.querySelector('#user-name');
console.log(`userNameField`);
console.log(userNameField);

openModalFormBtn.addEventListener('click', () => {
	formModal.classList.add(MODAL_WINDOW_ACTIVE);	// Adding class 'modal window active' if the button will be clicked
	userNameField.focus();
});

// Creating functions for close modal windows (form and notification) AND open window 'success modal'

const openNotificationWindow = () => {
	successModal.classList.add(MODAL_WINDOW_ACTIVE);	// Open modal window with notification
};

const closeFormWindow = () => {	
	formModal.classList.remove(MODAL_WINDOW_ACTIVE);	// Close window with form
};

const closeNotificationWindow = () => {
	successModal.classList.remove(MODAL_WINDOW_ACTIVE);	// Close window with notification
};

function refreshFormFields() {
	const modalFields = formModal.querySelectorAll('input');	// This function clear all input fields after closing modal windows
	modalFields.forEach(field => {
		field.value = '';
	});
};


// This code work with netlify server, form will be sending to my cabinet and my email
form.addEventListener('submit', e => {
	e.preventDefault();
	const formData = new FormData(form);

	fetch("/", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => {
			closeFormWindow();
			setTimeout(openNotificationWindow, 500);
			setTimeout(closeNotificationWindow, 3000);
			refreshFormFields();
		})
		.catch((error) => console.log('Sending form failed'));
});

// This function closes the modal windows by clicking the close buttons or by clicking outside the modal windows
const outsideOfModal = document.querySelector('.modal-bgd');
console.log(outsideOfModal);

window.onclick = function (e) {
	console.log(`event is a:`);
	console.log(e);
	console.log(`event.target is a:`);
	console.log(e.target);
	console.log(`This is a condition:`);
	console.log(e.target == outsideOfModal);
	console.log(`This is a condition #2:`);
	console.log(e.target == successModal);
	console.log(`This is a condition else if:`);
	console.log(Object.values(closeBtns).includes(e.target));
	if (e.target == outsideOfModal || e.target == successModal || Object.values(closeBtns).includes(e.target)) {
		closeFormWindow();
		closeNotificationWindow();
		refreshFormFields();
	} 
};


// I try change language in my page (multilanguage site)

// const languageBtn = document.querySelector('#language-btn');
// const UAlanguage = document.querySelector('.language-ua');
// const ENGlanguage = document.querySelector('.language-eng');

// const viewUaLanguage = () => {
// 	UAlanguage.style.display = 'block';
// 	ENGlanguage.style.display = 'none';
// }

// const viewEngLanguage = () => {
// 	ENGlanguage.style.display = 'block';
// 	UAlanguage.style.display = 'none';
// }

// window.onclick = () => {
// 	if (UAlanguage.style.display == 'none') {
// 		viewUaLanguage();
// 	} else {
// 		viewEngLanguage();
// 	}
// }
	