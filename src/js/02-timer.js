// Opisany w dokumentacji
import flatpickr from "flatpickr";
// Dodatkowy import stylów
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from "notiflix";

const kalendarz = document.querySelector("#datetime-picker");
const button = document.querySelector("[data-start]");
const dayy = document.querySelector("[data-days]");
const hourr = document.querySelector("[data-hours");
const minutee = document.querySelector("[data-minutes");
const secondd = document.querySelector("[data-seconds]");
let selectedDate = null;

button.setAttribute("disabled", "disabled");


const fp = flatpickr(kalendarz,{
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      selectedDate = selectedDates[0];
      chooseData();
      
    },
});


function chooseData(){
    if(selectedDate > new Date){
        button.removeAttribute("disabled");
    }
    else{
        Notify.failure("Please choose a date in the future");      
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
      addLeadingZero(days,dayy);
    // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      addLeadingZero(hours,hourr);
    // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      addLeadingZero(minutes,minutee);
    // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      addLeadingZero(seconds,secondd);
    
      return { days, hours, minutes, seconds };
    }

    function addLeadingZero(time,plaseInDocument){
      if(time<10){
        plaseInDocument.textContent = `0${time}`
      }
      else{
        plaseInDocument.textContent = time;
      }
    }

  button.addEventListener("click",()=>{
      button.setAttribute("disabled", "disabled");
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

    