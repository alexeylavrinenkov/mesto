// Элементы из профиля
const profileAvatarEditButton = document.querySelector('.profile__avatar-edit-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

// Элементы из попапа для редактирования профиля
const avatarPopupForm = document.querySelector('.popup_type_avatar');
const profilePopup = document.querySelector('.popup_type_profile');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const profilePopupNameInput = profilePopup.querySelector('.popup__input_type_name');
const profilePopupWorkInput = profilePopup.querySelector('.popup__input_type_work');

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
  likeCounterSelector: '.cards__like-counter',
  activeLikeButtonClass: 'cards__like-icon_active'
};

export {
  formConfig, cardConfig,
  avatarPopupForm, profilePopupForm, cardPopupForm,
  profileAvatarEditButton, profileEditButton, profileAddButton,
  profilePopupNameInput, profilePopupWorkInput
};
