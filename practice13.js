let box = document.getElementById("box");

function orange() {
    box.style.backgroundColor = "orange";
}

function lightblue() {
    box.style.backgroundColor = "lightblue";
}

// Mouse over → orange
box.addEventListener("mouseover", orange);

// Mouse out → lightblue
box.addEventListener("mouseout", lightblue);
