const popup = document.querySelector('.popup');
const input = document.querySelector('.input');
const submitButton = document.querySelector('.button');
const submitForm = document.querySelector('.form');
const compliment = document.querySelector('.compliment')

const items = ['Улыбайся чаще, твоя улыбка осветила бы даже Питер']

submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    popup.classList.add('popup_opened');
    submitForm.classList.add('form_closed')
    textMassage()
  })

function textMassage() {
  const name = input.value;
  compliment.textContent = name + ', ты не первый блин, но когда ты рядом в горле комом...';

}

