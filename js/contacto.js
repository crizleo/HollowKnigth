const boton = document.querySelector("#submit");

boton.addEventListener("click", registrar);

function registrar(e) {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const edad = calcularEdad(document.querySelector("#fechaNac").value);
  const nombre = document.querySelector("#nombre").value;

  const emailregex =
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if (emailregex.test(email)) {
    if (edad >= 10) {
      if (nombre != "") {
        text = document.querySelector("h3");
        text.innerText = "TE HAS REGISTRADO CORRECTAMENTE";
        setTimeout(() => {
          window.location = "home.html";
        }, 3000);
      }
    }
  } else {
    const emailAlert = document.querySelector("#email-alert");
    emailAlert.innerText = "*El correo no es valido";
    setTimeout(() => {
      emailAlert.innerText = "";
    }, 3000);
  }

  if (edad < 10) {
    const dateAlert = document.querySelector("#date-alert");
    dateAlert.innerText = "*El correo no es valido";
    setTimeout(() => {
      dateAlert.innerText = "";
    }, 3000);
  }

  if (nombre === "") {
    const nombreAlert = document.querySelector("#nombre-alert");
    nombreAlert.innerText = "*El campo es obligatorio";
    setTimeout(() => {
      nombreAlert.innerText = "";
    }, 3000);
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
