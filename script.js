const buttons  = document.querySelectorAll('.button')
const body = document.querySelector('body');

const colorsArr = [
  "yellow",
  "orange",
  "green", 
  "lightblue", 
  "gray",
  "lightgreen",
  "teal"
];

const colorSelector = document.getElementById("color-selector");
colorsArr.map((color) => {
  const colorButton = document.createElement("div");
  colorButton.style.backgroundColor = color;
  colorButton.style.height = "60px";
  colorButton.style.width = "60px";
  
  colorButton.addEventListener("click", (e) => {
    body.style.backgroundColor = color
  })
  colorSelector.appendChild(colorButton)
})

buttons.forEach(function(button){
  //console.log(button);
  button.addEventListener('click', function(e){

     body.style.backgroundColor = e.target.id
     
  })
});