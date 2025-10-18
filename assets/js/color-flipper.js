const colors = ["green","red","rgba(133,122,200", "#f15025"];
const btn = document.getElementById("colorBtn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = colors[generateRandomNumber()];
    color.textContent = colors[generateRandomNumber()]
})

// generate a number between the colors array lenth
function generateRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}