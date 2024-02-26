import { 
	imagePopupContainer} from './constants';
import { openCard } from '../index.js';

export function createCard(item, deleteCard, likeCard, openCard) {
	const cardTemplate = document.getElementById('card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const deleteButton = cardElement.querySelector('.card__delete-button')
	const cardImage = cardElement.querySelector('.card__image')
	cardImage.src = item.link
	cardImage.alt = item.name
	cardElement.querySelector('.card__title').textContent = item.name
	cardElement.querySelector('.card__like-button').addEventListener('click', likeCard)
	const removeButtonClick = () => {
		deleteCard(cardElement)
	}
	deleteButton.addEventListener('click', removeButtonClick)
	cardImage.addEventListener('click', () => {openCard(imagePopupContainer, item)})

	return cardElement
}

export function deleteCard(card) {
	card.remove()
}

export function likeCard(evt) {
	evt.target.classList.toggle('card__like-button_is-active')
}
