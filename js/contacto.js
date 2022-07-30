let email = document.querySelector("#email");
let fechaNac = document.querySelector("#fechaNac");
let nombre = document.querySelector("#nombre");

const boton = document.querySelector("#submit");

boton.addEventListener("click", registrar);

function registrar(e) {
  e.preventDefault();

  let edad = calcularEdad(fechaNac.value);

  const emailregex =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (emailregex.test(email.value) && edad.value >= 10 && nombre.value != "") {
    text = document.querySelector("h3");
    text.innerText = "TE HAS REGISTRADO CORRECTAMENTE";
    setTimeout(() => {
      window.location = "home.html";
    }, 3000);
  } else {
    if (!emailregex.test(email.value)) {
      const emailAlert = document.querySelector("#email-alert");
      emailAlert.innerText = "*El correo no es valido";
      setTimeout(() => {
        emailAlert.innerText = "";
      }, 3000);
    }

    console.log(isNaN(edad.value));
    if ((edad.value < 10) | isNaN(edad.value)) {
      const dateAlert = document.querySelector("#date-alert");
      dateAlert.innerText = "*El correo no es valido";
      setTimeout(() => {
        dateAlert.innerText = "";
      }, 3000);
    }

    if (nombre.value === "") {
      const nombreAlert = document.querySelector("#nombre-alert");
      nombreAlert.innerText = "*El campo es obligatorio";
      setTimeout(() => {
        nombreAlert.innerText = "";
      }, 3000);
    }
  }
}

function calcularEdad(fecha_nacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  return edad;
}

const limpiar = document.querySelector("#limpiar");

limpiar.addEventListener("click", limpiarCampos);

function limpiarCampos(e) {
  e.preventDefault();

  nombre.value = "";
  email.value = "";
  fechaNac.value = "";
}
