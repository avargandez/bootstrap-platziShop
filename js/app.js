var form = document.getElementById('form-suscribe');
var email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
  checkInputs();
} );

function checkInputs() {
  var emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorform(email);
  } else if (!isEmail(emailValue)){
    setErrorform(email);
  } else {
    setsucess(email);
  }
}

function setErrorform(input) {
  var formControl = input;
  formControl.className = 'form-control is-invalid';
}

function setsucess(input) {
  var formControl = input;
  formControl.className = 'form-control is-valid';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function mostrarModal() {

	if (localStorage.noMostrarModal === undefined) {
		localStorage.noMostrarModal = false
	}
	var noMostrarModal = JSON.parse(localStorage.noMostrarModal);

	if (!noMostrarModal) {
		$('#modal-oferta').modal()
	}

	$('#noMostrarModal').click(function(ev){
		localStorage.noMostrarModal = true
	})
}

const $filtrosToggle = $('#filtros-toggle')
$filtrosToggle.click(function (ev) {
	ev.preventDefault()
	const $i = $filtrosToggle.find('i.fa')
	const isDown = $i.hasClass('fa-chevron-down')
	if (isDown) {
		$i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
	} else {
		$i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
	}
})
