function Rolldice(){
const numRolls = document.getElementById("numRolls").value;
const diceNumbers = document.getElementById("diceNumbers");
const dicePics = document.getElementById("dicePics");

const values = [];
const images = [];
for(let i=0 ; i<numRolls ; i++){
    const value = Math.floor(Math.random() * 6 )+1;
    values.push(value);
    images.push(`<img src="dice_pictures/${value}.png" alt="" >`);
}
diceNumbers.textContent =`dice: ${values.join(", ")}`;
dicePics.innerHTML = images.join(" ");
}