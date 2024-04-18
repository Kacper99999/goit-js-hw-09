// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

const kalendarz = document.querySelector("#datetime-picker");
const button = document.querySelector("[data-start]");
button.setAttribute("disabled", "disabled");
let selectedDate = null;


let dayy = document.querySelector("[data-days]");
let hourr = document.querySelector("[data-hours");
let minutee = document.querySelector("[data-minutes");
let secondd = document.querySelector("[data-seconds]");


const fp = flatpickr(kalendarz,{
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      //console.log(selectedDates[0]);
      selectedDate = selectedDates[0];
      chooseData();
      
    },
});


function chooseData(){
    if(selectedDate > new Date){
        button.removeAttribute("disabled");
    }
    else{
        window.alert("Please choose a date in the future");        
    }
};


function convertMs(ms) {
    // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
    // Remaining days
      const days = Math.floor(ms / day);
      dayy.textContent = days;
    // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      hourr.textContent = hours; 
    // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      minutee.textContent = minutes;
    // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      secondd.textContent = seconds;
    
      return { days, hours, minutes, seconds };
    }

    button.addEventListener("click",()=>{
        const interval = setInterval(() => {
            let time = (selectedDate - new Date)-1000;
            if(time <= 0){
                clearInterval(interval);
            }
            else{
                convertMs(time);
            }
        },1000);
    } );

    