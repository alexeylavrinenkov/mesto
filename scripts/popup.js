const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupInputName = document.querySelector('.popup__text-input_type_name');
const popupInputWork = document.querySelector('.popup__text-input_type_work');
const popupSubmit = document.querySelector('.popup__submit');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

profileEditButton.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  togglePopup(popup);
  popupInputName.value = profileName.textContent;
  popupInputWork.value = profileWork.textContent;
});

popupCloseButton.addEventListener('click', function () {
  togglePopup(popup);
  document.body.style.overflow = 'visible';
});

popup.addEventListener('click', function(event) {
  if (event.target == event.currentTarget) {
    togglePopup(popup);
    document.body.style.overflow = 'visible';
  }
});

popupSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  togglePopup(popup);
  profileName.textContent = popupInputName.value;
  profileWork.textContent = popupInputWork.value;
  document.body.style.overflow = 'visible';
});


