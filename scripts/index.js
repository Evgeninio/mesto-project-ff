const content = document.querySelector('.content')
const places = content.querySelector('.places')
const placesList = places.querySelector('.places__list')

function deleteCard(card) {
	card.remove()
}

function createCard(item, deleteCard) {
	const cardTemplate = document.getElementById('card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const deleteButton = cardElement.querySelector('.card__delete-button')
	const cardImage = cardElement.querySelector('.card__image')
	cardImage.src = item.link
	cardImage.alt = item.name
	cardElement.querySelector('.card__title').textContent = item.name
	cardElement.querySelector('.card__like-button').addEventListener('click', function(evt){
		evt.target.classList.toggle('card__like-button_is-active')
	})
	const removeButtonClick = () => {
		deleteCard(cardElement)
	}
	deleteButton.addEventListener('click', removeButtonClick)

	return cardElement
}

function addCard(item, deleteCard) {
  const cardElement = createCard(item, deleteCard);
  placesList.append(cardElement);
}

initialCards.forEach(item => {
	addCard(item, deleteCard)
});