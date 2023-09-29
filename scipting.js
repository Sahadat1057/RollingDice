function randomNumber() {
    console.log("CLICKED")
    const para = document.createElement("p");
    const t = Math.floor(Math.random() * 6 + 1);
    para.textContent = "Dice 1: " + t;
    document.body.appendChild(para);
}

function randomNumber2() {
    const para = document.createElement("p");
    const t = Math.random * 6 + 1;
    para.textContent = "Dice 2: " + t;
    document.body.appendChild(para);
}

const buttons = document.querySelector('button');
buttons.addEventListener("click", randomNumber());