const showInputError = (formElement, element, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${element.id}-error`);
  element.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, element, settings) => {
  const errorElement = formElement.querySelector(`.${element.id}-error`);
  element.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, formInput, settings) => {
  if (formInput.validity.patternMismatch) {
    formInput.setCustomValidity('Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы')
  } else {
    formInput.setCustomValidity('')
  }

  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage, settings);
  } else {
    hideInputError(formElement, formInput, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, settings)
      toggleButtonState(inputList, buttonElement, settings)
    });
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
        buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
}; 

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector))
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};

export function clearValidation(formElement, settings) {
  const formTag = formElement.querySelector('.popup__form')
  const inputElements = Array.from(formElement.querySelectorAll(settings.inputSelector));

  inputElements.forEach((inputElement) => {
    hideInputError(formElement, inputElement, settings);
  });
  formTag.reset()
}