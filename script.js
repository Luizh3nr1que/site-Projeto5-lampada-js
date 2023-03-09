const turnOn = document.getElementById("turnOn")

const turnOff = document.getElementById("turnOff")

const lamp = document.getElementById("lamp")


function lampOn() {
    lamp.src = "img/ligada.png";
}

function lampOff() {
    lamp.src = "img/desligada.png"
}



turnOn.addEventListener('click', lampOn)

turnOff.addEventListener('click', lampOff)