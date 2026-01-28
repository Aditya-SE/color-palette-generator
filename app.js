const generateBtn = document.getElementById("Generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click",generatePalette);

function generatePalette(){
    const color = [];
    for(let i = 0; i < 5 ; i++){
        color.push(generatePalette());
    }
    
}

function generateRandomColor(){
    const letters = "123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];

    }
    return color;
}

generatePalette();