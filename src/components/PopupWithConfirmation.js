import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._submitButtonElement = this._formElement.querySelector('.popup__submit');
  }

  setHandleSubmit(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this._handleSubmit();
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._handleFormSubmit.bind(this))
  }
}
