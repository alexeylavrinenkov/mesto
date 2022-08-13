export default class Card {
  constructor(config, title, image, openImagePopup) {
    this._title = title;
    this._image = image;
    this._templateSelector = config.templateSelector;
    this._cardSelector = config.cardSelector;
    this._imageSelector = config.imageSelector;
    this._basketButtonSelector = config.basketButtonSelector;
    this._titleSelector = config.titleSelector;
    this._likeButtonSelector = config.likeButtonSelector;
    this._activeLikeButtonClass = config.activeLikeButtonClass;
    this._handleImageClick = openImagePopup;
  }

  // Возвращает шаблон карточки
  _getTemplate() {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);

    return this._cardElement;
  }

  // Меняет состояние лайка
  _handleLikeClick() {
    this._likeButtonElement.classList.toggle(this._activeLikeButtonClass);
  }

  // Удаляет карточку
  _handleBasketClick() {
    this._view.remove();
    this._view = null;
  }

  // Устанавливает слушатели событий
  _setEventListeners() {
    this._likeButtonElement.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._basketButtonElement.addEventListener('click', () => {
      this._handleBasketClick();
    });

    this._imageElement.addEventListener('click', () => {
      this._handleImageClick(this._title, this._image);
    });
  }

  // Возвращает разметку заполненной карточки с установленными слушателями событий
  generateCard() {
    this._view = this._getTemplate();

    this._titleElement = this._view.querySelector(this._titleSelector);
    this._imageElement = this._view.querySelector(this._imageSelector);
    this._likeButtonElement = this._view.querySelector(this._likeButtonSelector);
    this._basketButtonElement = this._view.querySelector(this._basketButtonSelector);

    this._titleElement.textContent = this._title;
    this._imageElement.setAttribute('src', this._image);
    this._imageElement.setAttribute('alt', this._title);

    this._setEventListeners();

    return this._view;
  }
}
