// Селекторы и классы для валидации форм
const formConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveSubmitButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
  hoverClass: 'link'
};

// Селекторы и классы для создания карточки
const cardConfig = {
  templateSelector: '#card-template',
  cardSelector: '.cards__card',
  imageSelector: '.cards__img',
  basketButtonSelector: '.cards__basket',
  titleSelector: '.cards__title',
  likeButtonSelector: '.cards__like-icon',
  activeLikeButtonClass: 'cards__like-icon_active'
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

export { formConfig, cardConfig, initialCards };
