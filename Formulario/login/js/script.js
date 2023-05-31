function ValidarUsuario(event){
    event.preventDefault();
    //obtener los valores del usuario y contraseña
    const usuario = document.getElementById("usuario").value;
    const contrasenia  = document.getElementById("contrasenia").value;
    //validar usuario
    if(usuario === "Bryan" && contrasenia === "Hola"){
        alert("Inicio de sesión exitoso");
        window.location.href="home.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}