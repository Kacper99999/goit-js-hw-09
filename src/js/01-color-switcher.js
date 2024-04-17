const start = document.querySelector("[data-start]");
const stop = document.querySelector("[data-stop");
let warunek = null;
function changeColor(){
    document.body.style.backgroundColor = getRandomHexColor();
};

start.addEventListener("click", ()=>{
    start.setAttribute("disabled","disabled");
    warunek = true;
    setInterval(() =>{
        if(warunek){
        changeColor();
        }
    },5000)

});

stop.addEventListener("click", (() =>{
    start.removeAttribute("disabled");
    warunek = false;
}));

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };