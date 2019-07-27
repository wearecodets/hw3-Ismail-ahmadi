console.log('Write your hw 3 code here');
const form = document.querySelector('form');
const { submit } = form;
const modal = document.querySelector('.modal');
console.log(form.submit);

submit.addEventListener('click', function(e) {
  e.preventDefault();
  modal.classList.add('modal--full');
  setTimeout(function() {
    modal.classList.remove('modal--full');
  }, 3000);
});
