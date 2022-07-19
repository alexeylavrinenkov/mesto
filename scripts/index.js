// Объявление и иницализация переменных
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
const profilePopup = document.querySelector('.popup_type_profile');
const profilePopupInputName = profilePopup.querySelector('.popup__text-input_type_name');
const profilePopupInputWork = profilePopup.querySelector('.popup__text-input_type_work');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close');
const profilePopupForm = profilePopup.querySelector('.popup__form');
const cardTemplate = document.querySelector('#card-template').content;
const cardPopup = document.querySelector('.popup_type_card');
const cardPopupInputTitle = cardPopup.querySelector('.popup__text-input_type_title');
const cardPopupInputLink = cardPopup.querySelector('.popup__text-input_type_link');
const cardPopupCloseButton = cardPopup.querySelector('.popup__close');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardsContainer = document.querySelector('.cards');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupTitle = imagePopup.querySelector('.popup__title-img');
const imagePopupImage = imagePopup.querySelector('.popup__img');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close');

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



// Функции

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция открытия попапа для редактирования профиля
function openProfilePopup() {
  openPopup(profilePopup);
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputWork.value = profileWork.textContent;
}

// Функция открытия попапа для добавления карточки
function openCardPopup() {
  openPopup(cardPopup);
  cardPopupInputTitle.value = '';
  cardPopupInputLink.value = '';
}

// Функция открытия попапа для просмотра карточек
function openImagePopup(title, link) {
  openPopup(imagePopup);
  imagePopupTitle.textContent = title;
  imagePopupImage.setAttribute('src', link);
  imagePopupImage.setAttribute('alt', title);
}

// Функция закрытия попапа для редактирования профиля
function closeProfilePopup() {
  closePopup(profilePopup);
}

// Функция закрытия попапа для добавления карточек
function closeCardPopup() {
  closePopup(cardPopup);
}

// Функция закрытия попапа для просмотра карточек
function closeImagePopup() {
  closePopup(imagePopup);
}

// Функция для обработчика отправки формы попапа для заполнения профиля
function submitProfilePopup(event) {
  event.preventDefault();
  closePopup(profilePopup);
  profileName.textContent = profilePopupInputName.value;
  profileWork.textContent = profilePopupInputWork.value;
};

// Функция для обработчика отправки формы попапа для создания карточки
function submitCardPopup(event) {
  event.preventDefault();
  closePopup(cardPopup);
  renderCard(cardPopupInputTitle.value, cardPopupInputLink.value);
};

// Функция создания карточки
function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);
  const cardTitle = cardElement.querySelector('.cards__title');
  const cardImage = cardElement.querySelector('.cards__img');
  const cardLikeButton = cardElement.querySelector('.cards__like-icon');
  const cardBasketButton = cardElement.querySelector('.cards__basket');

  cardTitle.textContent = name;
  cardImage.setAttribute('src', link);
  cardImage.setAttribute('alt', name);

  cardLikeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('cards__like-icon_active');
  });

  cardBasketButton.addEventListener('click', function (event) {
    event.target.closest('.cards__card').remove();
  });

  cardImage.addEventListener('click', function () {
    openImagePopup(name, link);
  });

  return cardElement;
}

// Функция добавления карточки в контейнер для карточек
function renderCard(name, link) {
  cardsContainer.prepend(createCard(name, link));
}



// Добавление элементов и блоков в разметку и установка обработчиков событий

// Добавление начальных карточек в разметку
initialCards.forEach(function (card) {
  renderCard(card.name, card.link);
});

// Добавление обработчиков событий попапам
profileEditButton.addEventListener('click', openProfilePopup);
profileAddButton.addEventListener('click', openCardPopup);

profilePopupCloseButton.addEventListener('click', closeProfilePopup);
cardPopupCloseButton.addEventListener('click', closeCardPopup);
imagePopupCloseButton.addEventListener('click', closeImagePopup);

profilePopupForm.addEventListener('submit', submitProfilePopup);
cardPopupForm.addEventListener('submit', submitCardPopup);


// Логика закрытия попапа
/*
popup.addEventListener('click', function(event) {
  if (event.target == event.currentTarget) {
    closePopup(popup);
  }
});
*/











