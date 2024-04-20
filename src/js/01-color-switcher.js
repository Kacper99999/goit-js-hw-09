const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop");
let condition = null;

function changeColor(){
    document.body.style.backgroundColor = getRandomHexColor();
};

startButton.addEventListener("click", ()=>{
    startButton.setAttribute("disabled","disabled");
    stopButton.removeAttribute("disabled");
    condition = true;
    setInterval(() =>{
        if(condition){
        changeColor();
        }
    },1000)

});

stopButton.addEventListener("click", (() =>{
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled","disabled");
    condition = false;
}));

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };