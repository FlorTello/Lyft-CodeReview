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
			signup.style.transform = "translate(-200px, 0px)";
		for (var i = 0; i < menuList.length; i++) {
			menuList[i].classList.add('scroll-header-color');
			logIn.classList.add('scroll-header-border');
		}
	}
	else if (accionScroll <= 3) {
		navHeader.classList.remove('bg-header');
		logoHeader.setAttribute('src','assets/img/logo-white.png');
		signup.style.transform = "translate(0px, 0px)";

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
function validarEmail(){
	if(!correcto.test(this.value)){
		this.nextElementSibling.style.display = "block";
		return false;
	}
}
function validarVacio(){
	if(this.value.trim() === ""){
		this.nextElementSibling.style.display = "block";
		console.log(this);
		this.classList.add('input-invalido');
		return false;
	}
}
function validarTodo() {
	if(validarVacio(inputs[0]) == false){
		alert('llena todos los datos');
	}
}

//INPUTS VACIOS
var inputs = document.getElementsByClassName('input-form-general');
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('blur',validarVacio);
}
//NUMBER
//NAME
//EMAIL
inputs[2].addEventListener('blur',validarEmail);
var correcto = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(s\.\w{2,3})+$/; // "w" permite números y letras, admite punto(.) y guión(-), entre las palabras, es opcional(?). el * permite revisar cero o mas veces
document.getElementById('submit').addEventListener('submit',validarTodo);

//CITY