

function randomColors(arr){
    const randomNumber = Math.floor(Math.random()*arr.length);
    const randomColor = arr[randomNumber];
    document.querySelector("#copy-btn").innerHTML = "COPY!";
    document.getElementById("container").style.background = randomColor;
    document.getElementById("btn-container").style.background = randomColor;
    document.querySelector("#container p").innerHTML = randomColor.toUpperCase();
}
function copyElem(){
     const text = document.getElementById("container").querySelector("p");
     navigator.clipboard.writeText(text.innerHTML);
     console.log("Copied!" ,text.innerHTML);
     document.querySelector("#copy-btn").innerHTML = "COPIED!";
}

const pastelColors = [
    "#ffffd9", // Pale Yellow
    "#e0ffff", // Mint Green
    "#e6e6fa", // Light Lavender
    "#ffe0d6", // Pale Peach
    "#c2dfff", // Light Blue
    "#ccc2dc", // Lilac
    "#f4c2c2", // Dusty Rose
    "#87ceeb", // Sky Blue
    "#f0f8ff", // Alice Blue
    "#d7effa", // Light Sky Blue
    "#e0ffff", // Baby Blue
    "#f5f5f5", // White Smoke
    "#f8f8f8", // Light Gray
    "#fafafa", // Snow
    "#d3d3d3", // Light Grey
    "#c0c0c0", // Silver
    "#a9a9a9", // Dark Gray
    "#d6d6d6", // Light Steel Blue
    "#bdbdbd", // Gainsboro
    "#f5f5dc", // Beige
    "#f1f1f1", // Linen
    "#e2e2e2", // Pale Goldenrod
    "#fff5ee", // Seashell
    "#fce4d6", // Old Lace
    "#fdf5e6", // Ivory
    "#faf0e6", // Linen (Light)
    "#f0e68c", // Khaki
    "#fde9d9", // Peach Puff
    "#eadcac", // Light Coral
    "#fca5a5", // Salmon
    "#fdbeb7", // Misty Rose
    "#ffe4e1", // Light Pink
    "#f8d0d0", // Indian Red
    "#fca085", // Light Salmon
    "#faebd7", // Antique White
    "#ffe4c4", // Bisque
    "#f5deb3", // Wheat
    "#ffe599", // Yellow
    "#fff0c9", // Light Goldenrod Yellow
    "#fafad2", // Light Yellow
    "#f0ffff", // Azure
    "#ededed", // Slate Gray
    "#d3d3d3", // Light Slate Gray
    "#d2b48c", // Tan
    "#f5deb3", // Wheat (Light)
    "#fff8c2", // Lemon Chiffon
    "#fde9d9", // Peach Puff (Light)
    "#fcaf9e", // Sandy Brown
    "#f4d0ec", // Lavender
    "#f8f8f8", // Ghost White
    "#faf0e6", // Floral White
    "#f5f5f5", // Antique White (Light)
    "#f0e68c", // Khaki (Light)
    "#d2b48c", // Tan (Light)
    "#fff5ee", // Seashell (Light)
    "#fde9d9", // Peach Puff (Light2)
    "#fce4d6", // Old Lace (Light)
    "#fdf5e6", // Ivory (Light)
    "#fcaf9e", // Sandy Brown (Light)
    "#f4d0ec", // Lavender Blush
    "#f8f8f8", // Old White
    "#faf0e6", // Misty White
    "#f5f5f5", // Eggshell
    "#f0e68c", // Beige (Light)
    "#d2b48c", // Bisque (Light)
    "#e9e9e9", // Light Gray (Light)
    "#d6d6d6", // Gray (Light)
    "#c0c0c0", // Silver (Light)
    "#a9a9a9", // Gray
    "#808080", // Black (Light)
    "#696969", // Dim Gray
    "#778899", // Light Slate Gray (Dark)
    "#000000", // Black
    "#2f4f4f", // Dark Slate Gray
    "#333333", // Dark Gray (Dark)
    "#555555", // Gray (Dark)
    "#808080", // Black (Light2)
    "#9e9e9e", // Gray (Light3)
    "#b2b2b2", // Gray (Light4)
    "#cccccc", // Gray (Light5
];
const copy = document.querySelector("#copy-btn");
copy.addEventListener("click" , () => copyElem());
const btn = document.querySelector(".btn");
btn.addEventListener("click" , () => randomColors(pastelColors));


