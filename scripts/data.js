// Содержит все селекторы и классы, необходимые для валидации форм
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveSubmitButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  hoverClass: 'link'
};

// Данные для создания начальных карточек
const initialCards = [
  {
    name: 'Петергоф',
    link: './images/Peterhof.jpg'
  },
  {
    name: 'Алтай',
    link: './images/Altai.jpg'
  },
  {
    name: 'Спас на Крови',
    link: './images/Cathedral-of-the-Savior-on-Blood.jpg'
  },
  {
    name: 'Кул-шариф',
    link: './images/Kul-Sharif-Mosque.jpg'
  },
  {
    name: 'Озеро Байкал',
    link: './images/Baikal.jpg'
  },
  {
    name: 'Родина-мать',
    link: './images/Sculpture-Motherland.jpg'
  }
];
