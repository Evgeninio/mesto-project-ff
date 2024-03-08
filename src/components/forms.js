import { addCard, openCard } from '../index.js'
import { changeProfile, createCardApi, updateAvatar } from './api.js'
import { deleteCard } from './card'
import {
	cardForm,
	editProfileButton,
	jobInput,
	nameInput,
	newCardPopup,
	newPlaceButton,
	placeNameInput,
	placeUrlInput,
	profileDesc,
	profileEditPopup,
	profileTitle,
	validationConfig,
 	newAvatarButton,
	profileAvatar,
	avatarLinkInput,
	avatarPopup} from './constants'
import { closePopup } from './modal.js'
import { clearValidation } from './validation.js'

export function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	const jobValue = jobInput.value
	const nameValue = nameInput.value
	editProfileButton.textContent = 'Сохранение...'
	changeProfile(nameValue, jobValue)
	.then(() => {
		profileTitle.textContent = nameValue
		profileDesc.textContent = jobValue
	})
	.catch(err => {
		console.log(err)
	})
	.finally(() => {
		clearValidation(profileEditPopup, validationConfig)
		editProfileButton.textContent = 'Сохранить'
		closePopup(profileEditPopup)
	})
}

export function handleFormCreate(evt) {
	evt.preventDefault()
	const placeNameValue = placeNameInput.value
	const placeUrlValue = placeUrlInput.value
	newPlaceButton.textContent = 'Сохранение...'
	createCardApi(placeNameValue, placeUrlValue)
		.then(res => {
			addCard(res, deleteCard, openCard, res.owner._id)
			console.log(cardForm)
		})
		.catch(err => {
			console.log(err)
		})
		.finally(() => {
			clearValidation(newCardPopup, validationConfig)
			newPlaceButton.textContent = 'Сохранить'
			closePopup(newCardPopup)
		})
}

export function handleAvatarEdit(evt) {
	{
		evt.preventDefault()
		newAvatarButton.textContent = 'Сохранение...'
		updateAvatar(avatarLinkInput.value)
			.then(res => {
				profileAvatar.style.backgroundImage = `url('${res.avatar}')`
			})
			.catch(err => {
				console.log(err)
			})
			.finally(() => {
				clearValidation(avatarPopup, validationConfig)
				closePopup(avatarPopup)
				newAvatarButton.textContent = 'Сохранить'
			})
	}
}