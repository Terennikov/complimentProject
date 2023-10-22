const popup = document.querySelector('.popup');
const input = document.querySelector('.input');
const submitButton = document.querySelector('.button');
const submitForm = document.querySelector('.form');


submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    popup.classList.add('popup_opened');
    submitForm.classList.add('form_closed')
  })

// submitButton.addEventListener('click', () => {
//   popupAdd.classList.add('popup_opened');
// })