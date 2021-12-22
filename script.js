//Gloval selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2")

let initialColors;
//Functions

//color generator

function generateHex() {
    //-----Traditional Way----

    // const letters = "0123456789ABCDEF";
    // let hash = "#";
    // for (let i = 0; i < 6; i++) {
    //     hash = hash + letters[Math.floor(Math.random() * 16)];
        
    // }
    // return hash;

    //-----Using Chroma js------

    const hexColor = chroma.random();
    return hexColor;
}


function randomColors() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const randomColor = generateHex();

        //add the color to the bg
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}

randomColors();


