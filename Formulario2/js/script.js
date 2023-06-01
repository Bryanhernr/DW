const urlParams = new URLSearchParams(window.location.search);

const nombre = urlParams.get("nombre");
const apellido_p = urlParams.get("apellido_p");
const apellido_m = urlParams.get("apellido_m")
const correo = urlParams.get("correo")
const descripcion = urlParams.get("descripcion")
const estado = urlParams.get("estado")

document.getElementById("nombre_home_1").textContent = nombre;
document.getElementById("nombre_home_2").textContent = nombre;
document.getElementById("apellido_p").textContent = apellido_p+" ";
document.getElementById("apellido_m").textContent = apellido_m;
document.getElementById("correo").textContent = correo;
document.getElementById("descripcion").textContent = descripcion;
document.getElementById("estado").textContent = estado;