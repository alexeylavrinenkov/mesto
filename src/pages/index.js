// Импорт стилей
import './index.css';

// Импорт данных
import {
  formConfig,
  cardConfig,
  avatarPopupForm,
  profilePopupForm,
  cardPopupForm,
  profileAvatar,
  profileAvatarEditButton,
  profileEditButton,
  profileAddButton,
  profilePopupNameInput,
  profilePopupWorkInput
} from '../utils/constants.js';

// Импорт классов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

// Переменные
let userId;

// Экземпляры класса для валидации форм
const avatarFormValidator = new FormValidator(formConfig, avatarPopupForm);
const profileFormValidator = new FormValidator(formConfig, profilePopupForm);
const cardFormValidator = new FormValidator(formConfig, cardPopupForm);

// Экземпляр класса для взаимодействия с сервером
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-52',
  token: 'e8e9a1c8-a81f-45be-8c26-d679721b86be'
});

// Экземпляр класса для взаимодействия с профилем
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  workSelector: '.profile__work',
  avatarSelector: '.profile__avatar'
});

// Экземпляр класса для вставки карточек
const cardSection = new Section(
  (item) => {
    cardSection.addItem(createCard(item));
  },
  '.cards'
);

// Экземпляры классов для взаимодействия с попапами
const popupWithConfirmation = new PopupWithConfirmation(
  '.popup_type_card-delete'
);
const popupWithImage = new PopupWithImage('.popup_type_image');

const cardPopupWithForm = new PopupWithForm(
  '.popup_type_card',
  (data) => {
    profilePopupWithForm.renderLoading(true);

    api.addNewCard(data)
      .then((data) => {
        profilePopupWithForm.close();
        cardSection.addItem(createCard(data));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        profilePopupWithForm.renderLoading(true);
      });
  },
  cardFormValidator.resetPopup.bind(cardFormValidator)
);

const avatarPopupWithForm = new PopupWithForm(
  '.popup_type_avatar',
  (data) => {
    avatarPopupWithForm.renderLoading(true);

    api.saveAvatar(data)
      .then((data) => {
        profileAvatar.src = data.avatar;
        avatarPopupWithForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        avatarPopupWithForm.renderLoading(false);
      })
  },
  avatarFormValidator.resetPopup.bind(avatarFormValidator)
);

const profilePopupWithForm = new PopupWithForm(
  '.popup_type_profile',
  (data) => {
    profilePopupWithForm.renderLoading(true);

    api.saveUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        profilePopupWithForm.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        profilePopupWithForm.renderLoading(true);
      });
  },
  profileFormValidator.resetPopup.bind(profileFormValidator)
);

// Функция для создания карточки
const createCard = (data) => {
  const card = new Card(
    cardConfig,
    data,
    userId,
    popupWithImage.open.bind(popupWithImage),
    popupWithConfirmation.open.bind(popupWithConfirmation),
    (cardId) => {
      popupWithConfirmation.setHandleSubmit(() => {
        api.deleteCard(cardId)
          .then(() => {
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    (cardId) => {
      api.setLikeCard(cardId)
        .then((data) => {
          card._handleLikeClick(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    },
    (cardId) => {
      api.deleteLikeCard(cardId)
        .then((data) => {
          card._handleLikeClick(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err.status}`);
        });
    }
  );

  const cardElement = card.generateCard();

  return cardElement;
};

// Загрузка профиля и начальных карточек с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardSection.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// Установка слушателей событий попапам
popupWithConfirmation.setEventListeners();
popupWithImage.setEventListeners();
avatarPopupWithForm.setEventListeners();
profilePopupWithForm.setEventListeners();
cardPopupWithForm.setEventListeners();

// Установка слушателей кнопкам открытия попапов
profileAvatarEditButton.addEventListener('click', avatarPopupWithForm.open.bind(avatarPopupWithForm));
profileEditButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  profilePopupNameInput.value = name;
  profilePopupWorkInput.value = about;
  profilePopupWithForm.open();
});
profileAddButton.addEventListener('click', cardPopupWithForm.open.bind(cardPopupWithForm));

// Включение валидации
avatarFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
