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

const setEventListeners = (profileForm, settings) => {
	const inputList = Array.from(
		profileForm.querySelectorAll(settings.inputSelector)
	)
	const buttonElement = profileForm.querySelector(settings.submitButtonSelector)
	toggleButtonState(inputList, buttonElement, settings)
	inputList.forEach(inputElement => {
		inputElement.addEventListener('input', () => {
			isValid(profileForm, inputElement, settings)
			toggleButtonState(inputList, buttonElement, settings)
		})
	})
}

const hasInvalidInput = inputList => {
	return inputList.some(inputElement => {
		return !inputElement.validity.valid
	})
}

const toggleButtonState = (inputList, buttonElement, settings) => {
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
	formList.forEach(profileForm => {
		setEventListeners(profileForm, settings)
	})
}

export function clearValidation(formContainer, settings) {
	const formElement = formContainer.querySelector(settings.formSelector)
	const inputElements = Array.from(
		formContainer.querySelectorAll(settings.inputSelector)
	)
	const inputList = Array.from(
		formContainer.querySelectorAll(settings.inputSelector)
	)
	const buttonElement = formContainer.querySelector(settings.submitButtonSelector)
	inputElements.forEach(inputElement => {
		hideInputError(formContainer, inputElement, settings)
	})
	toggleButtonState(inputList, buttonElement, settings)
	formElement.reset()
}
