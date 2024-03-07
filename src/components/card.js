import { 
	imagePopupContainer} from './constants';

import { cardDeleteApi, cardLikeApi, likeDeleteApi } from './api';

export function createCard(item, deleteCard, openCard, userId) {
	const cardTemplate = document.getElementById('card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const deleteButton = cardElement.querySelector('.card__delete-button')
	const likesNumber = cardElement.querySelector('.card__like-numbers')
	const cardImage = cardElement.querySelector('.card__image')
	const likeButton = cardElement.querySelector('.card__like-button')
	cardImage.src = item.link
	cardImage.alt = item.name
	likesNumber.textContent = item.likes.length

	cardElement.querySelector('.card__title').textContent = item.name
	likeButton.addEventListener('click', () =>{
		if (likeButton.classList.contains("card__like-button_is-active")){
			likeDeleteApi(item._id)
			.then(res => {
				likeButton.classList.toggle('card__like-button_is-active')
				likesNumber.textContent = res.likes.length
			})
		} else {
		cardLikeApi(item._id)
		.then(res => {
			likeButton.classList.toggle('card__like-button_is-active')
			likesNumber.textContent = res.likes.length
		}
		)}
	} 
	)

	const removeButtonClick = () => {
		deleteCard(cardElement)
		cardDeleteApi(item._id)
	}
	item.likes.forEach(like => {
		if (like._id === userId) {
			likeButton.classList.toggle('card__like-button_is-active')
		}
	})

	if (userId === item.owner._id) {
		deleteButton.classList.remove('card__delete-button-hidden')
		deleteButton.addEventListener('click', removeButtonClick)
	}
	cardImage.addEventListener('click', () => {openCard(imagePopupContainer, item)})
	
	return cardElement
}

export function deleteCard(card) {
	card.remove()
}
