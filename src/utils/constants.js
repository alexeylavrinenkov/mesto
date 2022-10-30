import peterhofImage from './../images/Peterhof.jpg';
import altaiImage from './../images/Altai.jpg';
import sculptureMotheralndImage from './../images/Sculpture-Motherland.jpg';
import kulSharifImage from './../images/Kul-Sharif-Mosque.jpg';
import saviorOnBloodImage from './../images/Cathedral-of-the-Savior-on-Blood.jpg';
import baikalImage from './../images/Baikal.jpg';

// Элементы из профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

// Элементы из попапа для редактирования профиля
const profilePopup = document.querySelector('.popup_type_profile');
const profilePopupForm = profilePopup.querySelector('.popup__form');

// Элементы из попапа для создания карточек
const cardPopup = document.querySelector('.popup_type_card');
const cardPopupForm = cardPopup.querySelector('.popup__form');

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
    title: 'Петергоф',
    link: peterhofImage
  },
  {
    title: 'Алтай',
    link: altaiImage
  },
  {
    title: 'Спас на Крови',
    link: saviorOnBloodImage
  },
  {
    title: 'Кул-шариф',
    link: kulSharifImage
  },
  {
    title: 'Озеро Байкал',
    link: baikalImage
  },
  {
    title: 'Родина-мать',
    link: sculptureMotheralndImage
  }
];

export {
  formConfig, cardConfig,
  initialCards,
  profilePopupForm, cardPopupForm,
  profileEditButton, profileAddButton
};
