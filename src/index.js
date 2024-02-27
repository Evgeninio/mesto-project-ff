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
	newCardPopup} from './components/constants.js';
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
allPopups.forEach(popup => popup.classList.add('popup_is-animated'))