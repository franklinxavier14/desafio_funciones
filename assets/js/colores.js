const cuadro = document.getElementById("key");

document.addEventListener("keydown", function (e) {
    if (e.key === "a") {
        cuadro.style.backgroundColor = "pink"
    }
    else if 
    (e.key === "s") {
        cuadro.style.backgroundColor = "orange"
    }
    else if 
    (e.key === "s") {
        cuadro.style.backgroundColor = "orange"
    }
    else if 
    (e.key === "d") {
        cuadro.style.backgroundColor = "skyblue"
    }
    else if (e.key === "q") {
        createNewdiv("purple");
    } else if (e.key === "w") {
        createNewdiv("gray");
    } else if (e.key === "e") {
        createNewdiv("brown");
    }
})

function createNewdiv (color) {
    const newDiv = document.createElement("div")
    newDiv.style.height = "200px"
    newDiv.style.width = "200px"
    newDiv.style.backgroundColor = color
    newDiv.style.border= "1px solid black"

    document.body.appendChild(newDiv);

}
