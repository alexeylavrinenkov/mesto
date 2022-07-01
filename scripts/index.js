const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupInputName = document.querySelector('.popup__text-input_type_name');
const popupInputWork = document.querySelector('.popup__text-input_type_work');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
const popupForm = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function openPopupAndFillForm() {
  openPopup();
  popupInputName.value = profileName.textContent;
  popupInputWork.value = profileWork.textContent;
}

function closePopupAndFillProfile(event) {
  event.preventDefault();
  closePopup();
  profileName.textContent = popupInputName.value;
  profileWork.textContent = popupInputWork.value;
}

profileEditButton.addEventListener('click', openPopupAndFillForm);

popupCloseButton.addEventListener('click', closePopup);

/* Логика закрытия попапа для использования в будущем
popup.addEventListener('click', function(event) {
  if (event.target == event.currentTarget) {
    closePopup(popup);
  }
});
*/

popupForm.addEventListener('submit', closePopupAndFillProfile);


