import './index.css';

// Импорт данных
import {
  formConfig,
  cardConfig,
  initialCards,
  profilePopupForm,
  cardPopupForm,
  profileEditButton,
  profileAddButton
} from '../utils/constants.js';

// Импорт классов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// Экземпляры классов
const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    cardSection.addItem(createCard(item));
  }
}, '.cards');

const profileForm = new FormValidator(formConfig, profilePopupForm);
const cardForm = new FormValidator(formConfig, cardPopupForm);

const popupWithImage = new PopupWithImage('.popup_type_image');

const profilePopupWithForm = new PopupWithForm(
  '.popup_type_profile',
  ({ name, work }) => {
    userInfo.setUserInfo(name, work);
  },
  profileForm.resetPopup.bind(profileForm)
);
const cardPopupWithForm = new PopupWithForm(
  '.popup_type_card',
  ({ title, link }) => {
    cardSection.addItem(createCard({ title, link }));
  },
  cardForm.resetPopup.bind(cardForm)
);

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  workSelector: '.profile__work'
});

const createCard = ({ title, link }) => {
  const card = new Card(cardConfig, title, link, popupWithImage.open.bind(popupWithImage));
  const cardElement = card.generateCard();

  return cardElement;
}

// Добавление валидации формам
profileForm.enableValidation();
cardForm.enableValidation();

// Добавление начальных карточек в разметку
cardSection.renderItems();

// Установка слушателей событий попапам
popupWithImage.setEventListeners();
profilePopupWithForm.setEventListeners();
cardPopupWithForm.setEventListeners();

// Установка слушателей событий клика по кнопкам открытия попапов
profileEditButton.addEventListener('click', profilePopupWithForm.open.bind(profilePopupWithForm));
profileAddButton.addEventListener('click', cardPopupWithForm.open.bind(cardPopupWithForm));
