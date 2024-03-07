import {
	nameInput, 
	jobInput, 
	placeNameInput, 
	placeUrlInput, 
	profileTitle, 
	profileDesc,
	newCardPopup,
	profileEditPopup,
	cardForm,
	newPlaceButton,
	editProfileButton} from './constants';
import { deleteCard} from './card';
import { closePopup } from './modal.js';
import { openCard } from '../index.js';
import { addCard } from '../index.js'
import { changeProfile, cardCreateApi } from './api.js';

export function handleFormSubmit(evt) {
	evt.preventDefault();
	const jobValue = jobInput.value
	const nameValue = nameInput.value
	editProfileButton.textContent = 'Сохранение...'
	changeProfile(nameValue, jobValue)
	.finally(() => {
		profileTitle.textContent = nameValue
		profileDesc.textContent = jobValue
		closePopup(profileEditPopup)
		editProfileButton.textContent = 'Сохранить'
	})
}

export function handleFormCreate(evt) {
	evt.preventDefault();
	const placeNameValue = placeNameInput.value
	const placeUrlValue = placeUrlInput.value
	newPlaceButton.textContent ='Сохранение...'
	cardCreateApi(placeNameValue, placeUrlValue)
	.then(res =>{
		addCard(res, deleteCard, openCard, res.owner._id)
		cardForm.reset()
	})
	.finally(() => {
		newPlaceButton.textContent ='Сохранить'
		closePopup(newCardPopup)
	})
}
