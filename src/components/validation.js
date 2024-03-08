const showInputError = (profileForm, element, errorMessage, settings) => {
	const errorElement = profileForm.querySelector(`.${element.id}-error`)
	element.classList.add(settings.inputErrorClass)
	errorElement.textContent = errorMessage
	errorElement.classList.add(settings.errorClass)
}

const hideInputError = (profileForm, element, settings) => {
	const errorElement = profileForm.querySelector(`.${element.id}-error`)
	element.classList.remove(settings.inputErrorClass)
	errorElement.classList.remove(settings.errorClass)
	errorElement.textContent = ''
}

const isValid = (profileForm, formInput, settings) => {
	if (formInput.validity.patternMismatch) {
		formInput.setCustomValidity(formInput.dataset.errorMessage)
	} else {
		formInput.setCustomValidity('')
	}

	if (!formInput.validity.valid) {
		showInputError(
			profileForm,
			formInput,
			formInput.validationMessage,
			settings
		)
	} else {
		hideInputError(profileForm, formInput, settings)
	}
}

const setEventListeners = (formElement, settings) => {
	const inputList = Array.from(
		formElement.querySelectorAll(settings.inputSelector)
	)
	const buttonElement = formElement.querySelector(settings.submitButtonSelector)
	toggleButtonState(inputList, buttonElement, settings)
	inputList.forEach(inputElement => {
		inputElement.addEventListener('input', () => {
			isValid(formElement, inputElement, settings)
			toggleButtonState(inputList, buttonElement, settings)
		})
	})
}

const hasInvalidInput = inputList => {
	return inputList.some(inputElement => {
		return !inputElement.validity.valid
	})
}

export const toggleButtonState = (inputList, buttonElement, settings) => {
	if (hasInvalidInput(inputList)) {
		buttonElement.disabled = true
		buttonElement.classList.add(settings.inactiveButtonClass)
	} else {
		buttonElement.disabled = false
		buttonElement.classList.remove(settings.inactiveButtonClass)
	}
}

export const enableValidation = settings => {
	const formList = Array.from(document.querySelectorAll(settings.formSelector))
	formList.forEach(formElement => {
		setEventListeners(formElement, settings)
	})
}

export function clearValidation(formContainer, settings) {
	const formElement = formContainer.querySelector(settings.formSelector)
	const inputElements = Array.from(
		formContainer.querySelectorAll(settings.inputSelector)
	)
	const buttonElement = formContainer.querySelector(settings.submitButtonSelector)
	inputElements.forEach(inputElement => {
		hideInputError(formContainer, inputElement, settings)
	})
  formElement.reset()
	toggleButtonState(inputElements, buttonElement, settings)
}
