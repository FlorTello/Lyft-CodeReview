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

var datoOculto = document.getElementsByClassName('dato-oculto');
var phoneNumber = document.getElementById('phone-number');
phoneNumber.addEventListener('mousedown',function (e) {
	for (var i = 0; i < datoOculto.length; i++) {
		datoOculto[i].classList.remove('ocultar-placeholder');
	}
})

var input = document.getElementsByClassName('input-form-number');

for (var i = 0; i < input.length; i++) {
	input[i]
}



//-------------Validación de Email (Nadia) ------------//

var inputs = document.getElementsByClassName('input-invalido');
inputs[0].addEventListener('blur',validarVacio);

inputs[2].addEventListener('blur',validarEmail);

var correcto = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(s\.\w{2,3})+$/; // "w" permite números y letras, admite punto(.) y guión(-), entre las palabras, es opcional(?). el * permite revisar cero o mas veces

function validarEmail(){
	if(!correcto.test(this)){
		alert("no es un correo válido");
    	return false;
	}

}

function validarVacio(){
	if(this.value.trim() === ""){
		this.nextElementSibling.style.display = "block";
		return false;
	}
}
