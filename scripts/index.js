const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupInputName = document.querySelector('.popup__text-input_type_name');
const popupInputWork = document.querySelector('.popup__text-input_type_work');
const popupSubmit = document.querySelector('.popup__submit');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');

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

popupSubmit.addEventListener('click', closePopupAndFillProfile);


