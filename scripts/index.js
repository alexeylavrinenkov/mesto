const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
const cards = document.querySelector('.cards');
const body = document.querySelector('.page');

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

const initialPopups = [
  {
    classPopup: 'popup-edit',
    title: 'Редактировать профиль',
    firstInputPlaceholder: 'Имя',
    secondInputPlaceholder: 'Род деятельности',
    submitButtonName: 'Сохранить'
  },
  {
    classPopup: 'popup-add',
    title: 'Новое место',
    firstInputPlaceholder: 'Название',
    secondInputPlaceholder: 'Ссылка на картинку',
    submitButtonName: 'Создать'
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

// Функция открытия и заполнения попапа
function openPopupAndFillForm(popup, firstElementValue = '', secondElementValue = '') {
  openPopup(popup);
  popup.querySelector('.popup__text-input_type_first').value = firstElementValue;
  popup.querySelector('.popup__text-input_type_second').value = secondElementValue;
}

// Функция закрытия и заполнения профиля
function closePopupEditAndFillProfile(event) {
  event.preventDefault();
  closePopup(popupEdit);
  profileName.textContent = popupEdit.querySelector('.popup__text-input_type_first').value;
  profileWork.textContent = popupEdit.querySelector('.popup__text-input_type_second').value;
};

// Функция закрытия попапа и создания карточки
function closePopupAddAndCreateCard(event) {
  event.preventDefault();
  closePopup(popupAdd);
  addCard(popupAdd.querySelector('.popup__text-input_type_first').value, popupAdd.querySelector('.popup__text-input_type_second').value);
};

// Функция создания попапа с картинкой
function createPopupImg(name, link) {
  const popupTemplate = document.querySelector('#popup-img-template').content;
  const popupElement = popupTemplate.querySelector('.popup').cloneNode(true);
  const popupImg = popupElement.querySelector('.popup__img');

  popupElement.querySelector('.popup__title-img').textContent = name;
  popupImg.setAttribute('src', link);
  popupImg.setAttribute('alt', name);

  popupElement.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(popupElement);
  });

  return popupElement;
}

// Функция добавления карточки
function addCard(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__card').cloneNode(true);

  cardElement.querySelector('.cards__title').textContent = name;
  cardElement.querySelector('.cards__img').setAttribute('src', link);
  cardElement.querySelector('.cards__img').setAttribute('alt', name);

  // Оживление лайка
  const likeButton = cardElement.querySelector('.cards__like-icon');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('cards__like-icon_active');
  });

  // Оживление корзины
  const basketButton = cardElement.querySelector('.cards__basket');
  basketButton.addEventListener('click', function (event) {
    event.target.closest('.cards__card').remove();
  });

  const popupImg = createPopupImg(name, link);
  body.append(popupImg);

  // Оживление картинки
  const img = cardElement.querySelector('.cards__img');
  img.addEventListener('click', function () {
    openPopup(popupImg);
  });

  cards.prepend(cardElement);
}

// Функция добавления стандартного попапа
function addPopup(popupClass, title, firstPlaceholder, secondPlaceholder, submitButtonName) {
  const popupTemplate = document.querySelector('#popup-template').content;
  const popupElement = popupTemplate.querySelector('.popup').cloneNode(true);

  popupElement.classList.add(popupClass);
  popupElement.querySelector('.popup__title').textContent = title;
  popupElement.querySelector('.popup__text-input_type_first').setAttribute('placeholder', firstPlaceholder);
  popupElement.querySelector('.popup__text-input_type_second').setAttribute('placeholder', secondPlaceholder);
  popupElement.querySelector('.popup__submit').setAttribute('value', submitButtonName);

  popupElement.querySelector('.popup__close').addEventListener('click', function () {
    closePopup(popupElement);
  });

  body.append(popupElement);
}



// Добавление элементов

// Добавление начальных карточек в разметку
initialCards.forEach(function (card) {
  addCard(card.name, card.link);
});

// Добавление попапов
initialPopups.forEach(function (popup) {
  addPopup(popup.classPopup, popup.title, popup.firstInputPlaceholder, popup.secondInputPlaceholder, popup.submitButtonName);
});
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
profileEditButton.addEventListener('click', function () {
  openPopupAndFillForm(popupEdit, profileName.textContent, profileWork.textContent);
});
profileAddButton.addEventListener('click', function () {
  openPopupAndFillForm(popupAdd);
});
popupEdit.querySelector('.popup__form').addEventListener('submit', closePopupEditAndFillProfile);
popupAdd.querySelector('.popup__form').addEventListener('submit', closePopupAddAndCreateCard);




// Логика закрытия попапа
/*
popup.addEventListener('click', function(event) {
  if (event.target == event.currentTarget) {
    closePopup(popup);
  }
});
*/











