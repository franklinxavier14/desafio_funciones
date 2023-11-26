const azul = document.getElementById("azul");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");

const cambio = (e) => {
    e.target.style.backgroundColor = "black";
  };
  
  azul.addEventListener("click", cambio);
  rojo.addEventListener("click", cambio);
  verde.addEventListener("click", cambio);
  amarillo.addEventListener("click", cambio);

