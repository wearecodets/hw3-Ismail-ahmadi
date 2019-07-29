console.log('Write your hw 3 code here');
const form = document.querySelector('form');
const { submit } = form;
const modal = document.querySelector('.modal');
const message = document.querySelector('.checkout__result-title');
const description = document.querySelector('.checkout__result-description');
const closeMessage = document.querySelector('.checkout__result-close');
console.log(closeMessage);

// const submit = document.querySelector('.submit');
// console.log(form.submit);
const checkout = document.querySelector('.checkout');
// console.log(checkout);
const isSuccess = false;

submit.addEventListener('click', function(e) {
  e.preventDefault();
  const userName = form.name;
  const usernameValue = userName.value;
  const { email } = form;
  const emailValue = email.value;
  modal.classList.add('modal--full');
  setTimeout(function() {
    // modal.classList.remove('modal--full');
    checkout.classList.toggle('checkout--finished');
    if (isSuccess === true) {
      checkout.classList.add('checkout--success');
      message.textContent = `Thanks ${usernameValue}`;
      description.textContent = `We've received your payment. Please check your inbox for a receipt.`;
    } else {
      checkout.classList.add('checkout--failed');
      message.textContent = `Payment Rejected.`;
      description.textContent = `Your transaction could not be processed. We've sent you an email at ${emailValue} with the details.`;
    }
  }, 3000);
});
closeMessage.addEventListener('click', function() {
  modal.classList.remove('modal--full');
});
