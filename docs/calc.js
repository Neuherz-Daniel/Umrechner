function giga() {
    output = document.getElementById("display")
    input = document.getElementById("area")
    output.innerText = input.value / 1000000000 + " G"
}

function mega() {
    output = document.getElementById("display")
    input = document.getElementById("area")
    output.innerText = input.value / 1000000 + " M"
}

function kilo() {
    output = document.getElementById("display")
    input = document.getElementById("area")
    output.innerText = input.value / 1000 + " K"
}

function milli() {
    output = document.getElementById("display")
    input = document.getElementById("area")
    output.innerText = input.value * 1000 + " m"
}

function mikro() {
    output = document.getElementById("display")
    input = document.getElementById("area")
    output.innerText = input.value * 1000000 + " µ"
}

function nano() {
    output = document.getElementById("display")
    input = document.getElementById("area")
    output.innerText = input.value * 1000000000 + " n"
}



