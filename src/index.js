import './pages/index.css';
import {initialCards} from './components/cards.js';
import { 
	deleteCard, 
	likeCard, 
	createCard} from './components/card.js';
import {
	newCardButton, 
	closeButton, 
	formElement, 
	cardForm, 
	saveButtons, 
	allPopups,
	formName,
	formDesc,
	popupEdit,
	placesList,
	editButton,
	profileTitle,
	profileDesc,
	imagePopup,
	imageTitlePopup,
	imagePopupContainer} from './components/constants.js';
import { 
	handleFormCreate, 
	handleFormSubmit} from './components/forms.js';

import { 
	openPopup, 
	closePopup } from './components/modal.js';

export function addCard(item, deleteCard, likeCard, openCard) {
	const cardElement = createCard(item, deleteCard, likeCard, openCard)
	placesList.prepend(cardElement)
}
	
export function openCard (imageCont, card) {
	imagePopup.src = card.link
	imagePopup.alt = card.name
	imageTitlePopup.textContent = card.name
	openPopup(imageCont)
}

initialCards.forEach(item => {
	addCard(item, deleteCard, likeCard, openCard)
});

newCardButton.addEventListener('click', function(){
	const newCardPopup = document.querySelector('.popup_type_new-card')
	openPopup(newCardPopup)
})

editButton.addEventListener('click', function(){
	formName.value = profileTitle.textContent
	formDesc.value = profileDesc.textContent
	openPopup(popupEdit)
})

closeButton.forEach(button => button.addEventListener('click', () => {
	closePopup(button.closest('.popup'))
}))

formElement.addEventListener('submit', handleFormSubmit);
cardForm.addEventListener('submit', handleFormCreate)

allPopups.forEach(popup => popup.addEventListener('click', (evt) => {
	if (evt.currentTarget === evt.target) {
    closePopup(popup)
  }
}))