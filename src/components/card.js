import { 
	placesList, 
	profileTitle, 
	profileDesc, 
	editButton} from './constants';
import { 
	openPopup } from './modal';
	
export function createCard(item, deleteCard, likeCard, openCard) {
	const cardTemplate = document.getElementById('card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const deleteButton = cardElement.querySelector('.card__delete-button')
	const cardImage = cardElement.querySelector('.card__image')
	const imagePopupContainer = document.querySelector('.popup_type_image')
	const popupEdit = document.querySelector('.popup_type_edit')
	const formName = popupEdit.querySelector('.popup__input_type_name')
	const formDesc = popupEdit.querySelector('.popup__input_type_description')
	cardImage.src = item.link
	cardImage.alt = item.name
	cardElement.querySelector('.card__title').textContent = item.name
	cardElement.querySelector('.card__like-button').addEventListener('click', likeCard)
	const removeButtonClick = () => {
		deleteCard(cardElement)
	}
	deleteButton.addEventListener('click', removeButtonClick)
	cardImage.addEventListener('click', () => {openCard(imagePopupContainer, item)})

	editButton.addEventListener('click', function(){
		formName.value = profileTitle.textContent
		formDesc.value = profileDesc.textContent
		openPopup(popupEdit)
	})

	return cardElement
}

export function addCard(item, deleteCard, likeCard, openCard) {
  const cardElement = createCard(item, deleteCard, likeCard, openCard)
  placesList.prepend(cardElement)
}

export function deleteCard(card) {
	card.remove()
}

export function likeCard(evt) {
	evt.target.classList.toggle('card__like-button_is-active')
}

export function openCard (imageCont, card) {
	const imagePopup = imageCont.querySelector('.popup__image')
	const imageTitlePopup = imageCont.querySelector('.popup__caption')
	imagePopup.src = card.link
	imageTitlePopup.textContent = card.name
	openPopup(imageCont)
}