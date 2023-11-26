function pintar(event) {
const elementoClickeado = event.target;
elementoClickeado.style.backgroundColor = 'yellow';
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);


