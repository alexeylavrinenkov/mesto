// Отображает ошибку у конкретного поля ввода
const showInputError = (config, inputElement, errorElement, errorMessage) => {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

// Скрывает ошибку у конкретного поля ввода
const hideInputError = (config, inputElement, errorElement) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
};

// Скрывает или отображает ошибку у поля ввода в зависимости от валидации
const checkInputValidity = (config, inputElement, errorElement) => {
  if (inputElement.validity.valid) {
    hideInputError(config, inputElement, errorElement);
  } else {
    showInputError(config, inputElement, errorElement, inputElement.validationMessage);
  }
};

// Устанавливает слушатели событий у всех полей ввода формы
const setEventListeners = (config, formElement, submitButtonElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));

  inputList.forEach((inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    makeButtonInactive(config, submitButtonElement);

    inputElement.addEventListener('input', () => {
      checkInputValidity(config, inputElement, errorElement);
      toggleButtonState(config, inputList, submitButtonElement);
    });
  });
};

// Включает валидацию всем формам
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector);

    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setEventListeners(config, formElement, submitButtonElement);
  });
};

// Проверяет, есть ли невалидное поле ввода в форме
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// Делает кнопку активной
const makeButtonActive = (config, submitButtonElement) => {
  submitButtonElement.classList.remove(config.inactiveSubmitButtonClass);
  submitButtonElement.classList.add(config.hoverClass);
  submitButtonElement.removeAttribute('disabled');
};

// Делает кнопку неактивной
const makeButtonInactive = (config, submitButtonElement) => {
  submitButtonElement.classList.add(config.inactiveSubmitButtonClass);
  submitButtonElement.classList.remove(config.hoverClass);
  submitButtonElement.setAttribute('disabled', true);
};

// В зависимости от валидации делает кнопку отправки формы активной или неактивной
const toggleButtonState = (config, inputList, submitButtonElement) => {
  if (hasInvalidInput(inputList)) {
    makeButtonInactive(config, submitButtonElement);
  } else {
    makeButtonActive(config, submitButtonElement);
  }
};

// Функция для сброса ошибок и кнопки отправки формы попапа
function resetPopup(config, inputList, submitButton) {
  makeButtonInactive(config, submitButton);
  inputList.forEach((input) => {
    hideInputError(config, input, input.nextElementSibling);
  });
}

enableValidation(config);


