//SCROLL
var ultimoScrollTop = 0;
window.addEventListener('scroll',function(){
	var navHeader = document.getElementById('nav-header');
	var signup = document.getElementById('sign-up');
	var logoHeader = document.getElementById('logo-header');
	var menuList = document.getElementsByClassName('menu-list-a');
	var logIn = document.getElementsByClassName('log-in')[0];

	var accionScroll = window.pageYOffset || document.documentElement.scrollTop;
	if (accionScroll > ultimoScrollTop) {
		navHeader.classList.add('bg-header');
		logoHeader.setAttribute('src','assets/img/logo-pink.png');
		signup.style.opacity = 1;
		for (var i = 0; i < menuList.length; i++) {
			menuList[i].classList.add('scroll-header-color');
			logIn.classList.add('scroll-header-border');
		}
	}
	else if (accionScroll <= 3) {
		navHeader.classList.remove('bg-header');
		logoHeader.setAttribute('src','assets/img/logo-white.png');
		signup.style.opacity = 0;
		for (var i = 0; i < menuList.length; i++) {
			menuList[i].classList.remove('scroll-header-color');
		}
		logIn.classList.remove('scroll-header-border');
	}
	ultimoScrollTop = accionScroll;
},false);

//MOSTRAR FORMULARIO COMPLETO
var inputForm = document.getElementsByClassName('input-form');
var phoneNumber = document.getElementById('phone-number');
phoneNumber.addEventListener('mousedown',function (e) {
	for (var i = 1; i < inputForm.length; i++) {
		inputForm[i].classList.remove('dato-oculto');
	}
});

// VALIDACIONES
//NUMBER
//NAME
//EMAIL
//CITY