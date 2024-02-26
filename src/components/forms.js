import {
	nameInput, 
	jobInput, 
	placeNameInput, 
	placeUrlInput, 
	profileTitle, 
	profileDesc,
	newCardPopup,
	profileEditPopup,
	cardForm} from './constants';
import { 
	deleteCard, 
	likeCard} from './card';
import { closePopup } from './modal.js';
import { openCard } from '../index.js';
import { addCard } from '../index.js'

export function handleFormSubmit(evt) {
	evt.preventDefault();
	const jobValue = jobInput.value
	const nameValue = nameInput.value							
  
	profileTitle.textContent = nameValue
	profileDesc.textContent = jobValue
	closePopup(profileEditPopup)
}

export function handleFormCreate(evt) {
	evt.preventDefault();
	const placeNameValue = placeNameInput.value
	const placeUrlValue = placeUrlInput.value							
  
	addCard({name: placeNameValue, link: placeUrlValue}, deleteCard, likeCard, openCard)
	closePopup(newCardPopup)
	cardForm.reset()
}