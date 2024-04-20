import Notiflix from 'notiflix';


const form = document.querySelector('.form');
const delayInput = form.elements['delay'];
const stepInput = form.elements['step'];
const amountInput = form.elements['amount'];
const button = form.querySelector('button');



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject)=>{
    if (shouldResolve) {
      // Fulfill
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  })
}

let interval
button.addEventListener("click", (event)=>{
  let amoutValue = amountInput.value;
  event.preventDefault();
  setTimeout(() => {

    interval = setInterval(()=>{
      createPromise(amoutValue,stepInput.value).then(value=>{
        
        // Fulfill

        if(amoutValue > 0 ){
        Notiflix.Notify.success(value);
          amoutValue--;
        }
        else{
          clearInterval(interval);
        }
        
      }).catch(error=>{

        // Reject

        if(amoutValue > 0 ){
        Notiflix.Notify.failure(error);
          amoutValue--;
        }
        else{
          clearInterval(interval);
        }
      })
     },stepInput.value)
},delayInput.value)
    
})

