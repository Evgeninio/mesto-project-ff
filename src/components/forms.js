import {
	nameInput, 
	jobInput, 
	placeNameInput, 
	placeUrlInput, 
	profileTitle, 
	profileDesc} from './constants';
import {
	addCard, 
	deleteCard, 
	likeCard, 
	openCard } from './card';

export function handleFormSubmit(evt) {
	evt.preventDefault();
	let jobValue = jobInput.value
	let nameValue = nameInput.value							
  
	profileTitle.textContent = nameValue
	profileDesc.textContent = jobValue
	
}

export function handleFormCreate(evt) {
	evt.preventDefault();
	let placeNameValue = placeNameInput.value
	let placeUrlValue = placeUrlInput.value							
  
	addCard({name: placeNameValue, link: placeUrlValue}, deleteCard, likeCard, openCard)
	
}