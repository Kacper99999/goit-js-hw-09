const form = document.querySelector('.form');
const delayInput = form.elements['delay'];
const stepInput = form.elements['step'];
const amountInput = form.elements['amount'];
const button = form.querySelector('button');



import Notiflix from 'notiflix';

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


button.addEventListener("click", (event)=>{
  event.preventDefault();
   setInterval(()=>{
    createPromise(amountInput.value,stepInput.value).then(_value=>{
      if(amountInput.value > 0){
      Notiflix.Notify.success(`✅ Fulfilled promise ${amountInput.value} in ${stepInput.value}ms`);
        amountInput.value--;
      }
    }).catch(_error=>{
      if(amountInput.value > 0){
      Notiflix.Notify.failure(`❌ Rejected promise ${amountInput.value} in ${stepInput.value}ms`);
        amountInput.value--;
      }
    });
   },delayInput.value)
})

console.log(amountInput.value);