// Импорт данных
import { formConfig, cardConfig, initialCards } from './data.js';

// Импорт классов
import Card from './Card.js';
import FormValidator from './FormValidator.js';

// Объявление и иницализация переменных

// Список попапов
const popupList = Array.from(document.querySelectorAll('.popup'));

// Элементы из профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

// Элементы из попапа для редактирования профиля
const profilePopup = document.querySelector('.popup_type_profile');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const profilePopupInputName = profilePopup.querySelector('.popup__input_type_name');
const profilePopupInputWork = profilePopup.querySelector('.popup__input_type_work');

// Элементы из попапа для создания карточек
const cardPopup = document.querySelector('.popup_type_card');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardPopupInputTitle = cardPopup.querySelector('.popup__input_type_title');
const cardPopupInputLink = cardPopup.querySelector('.popup__input_type_link');

// Контейнер для карточек
const cardsContainer = document.querySelector('.cards');

// Элементы из попапа для просмотра картинок
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupTitle = imagePopup.querySelector('.popup__title-img');
const imagePopupImage = imagePopup.querySelector('.popup__img');

// Экземпляры форм
const profileForm = new FormValidator(formConfig, profilePopupForm);
const cardForm = new FormValidator(formConfig, cardPopupForm);

// Функции

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

// Функция открытия попапа для редактирования профиля
function openProfilePopup() {
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputWork.value = profileWork.textContent;
  profileForm.resetPopup();
  openPopup(profilePopup);
}

// Функция открытия попапа для добавления карточки
function openCardPopup() {
  cardPopupForm.reset();
  cardForm.resetPopup();
  openPopup(cardPopup);
}

// Функция открытия попапа для просмотра карточек
function openImagePopup(title, link) {
  imagePopupTitle.textContent = title;
  imagePopupImage.setAttribute('src', link);
  imagePopupImage.setAttribute('alt', title);
  openPopup(imagePopup);
}

// Функция закрытия попапа при нажатии на Esc
function closePopupByEsc(event) {
  if (event.key === 'Escape') {
    const popupElement = document.querySelector('.popup_opened');
    closePopup(popupElement);
  }
}

// Функция для обработчика отправки формы попапа для заполнения профиля
function submitProfilePopup(event) {
  event.preventDefault();
  profileName.textContent = profilePopupInputName.value;
  profileWork.textContent = profilePopupInputWork.value;
  closePopup(profilePopup);
};

// Функция для обработчика отправки формы попапа для создания карточки
function submitCardPopup(event) {
  event.preventDefault();
  renderCard(cardsContainer, cardPopupInputTitle.value, cardPopupInputLink.value);
  closePopup(cardPopup);
};

// Функция создания карточки
function createCard(title, link) {
  const card = new Card(cardConfig, title, link, openImagePopup);

  const cardElement = card.generateCard();

  return cardElement;
}

// Функция добавления карточки в контейнер для карточек
function renderCard(containerElement, title, link) {
  containerElement.prepend(createCard(title, link));
}

// Функция установки слушателей закрытия попапа
function setCloseEventListenersOnPopups() {
  popupList.forEach(popupElement => {
    popupElement.addEventListener('mousedown', (event) => {
      if (event.target === event.currentTarget || event.target.classList.contains('popup__close')) {
        closePopup(popupElement);
      }
    });
  });
}

// Функция установки слушателей событий попапам
function setEventListenersOnPopups() {
  profileEditButton.addEventListener('click', openProfilePopup);
  profileAddButton.addEventListener('click', openCardPopup);

  setCloseEventListenersOnPopups()

  profilePopupForm.addEventListener('submit', submitProfilePopup);
  cardPopupForm.addEventListener('submit', submitCardPopup);
}

// Добавление начальных карточек в разметку
initialCards.forEach(function (card) {
  renderCard(cardsContainer, card.name, card.link);
});

// Добавление обработчиков событий попапам
setEventListenersOnPopups();

// Добавление валидации формам
profileForm.enableValidation();
cardForm.enableValidation();










