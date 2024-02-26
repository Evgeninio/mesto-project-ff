import './pages/index.css';
import {initialCards} from './components/cards.js';
import {
	addCard, 
	deleteCard, 
	likeCard, 
	openCard} from './components/card.js';
import {
	newCardButton, 
	closeButton, 
	formElement, 
	cardForm, 
	saveButtons, 
	allPopups} from './components/constants.js';
import { 
	handleFormCreate, 
	handleFormSubmit} from './components/forms.js';

import { 
	openPopup, 
	closePopup } from './components/modal.js';

initialCards.forEach(item => {
	addCard(item, deleteCard, likeCard, openCard)
});

newCardButton.addEventListener('click', function(){
	const newCardPopup = document.querySelector('.popup_type_new-card')
	openPopup(newCardPopup)
})

closeButton.forEach(button => button.addEventListener('click', () => {
	closePopup(button.closest('.popup'))
}))

formElement.addEventListener('submit', handleFormSubmit);
cardForm.addEventListener('submit', handleFormCreate)
saveButtons.forEach(button => button.addEventListener('click', function(){
		closePopup(button.closest('.popup'))
}))

allPopups.forEach(popup => popup.addEventListener('click', (evt) => {
	if (evt.currentTarget === evt.target) {
    closePopup(popup)
  }
}))