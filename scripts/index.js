const content = document.querySelector('.content')
const places = content.querySelector('.places')
const placesList = places.querySelector('.places__list')

function deleteCard(card) {
	card.remove()
}

function addCard(cardTitle, imageUrl, deleteCard) {
	const cardTemplate = document.getElementById('card-template').content;
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const deleteButton = cardElement.querySelector('.card__delete-button')
	cardElement.querySelector('.card__image').src = imageUrl
	cardElement.querySelector('.card__title').textContent = cardTitle
	placesList.append(cardElement)
	cardElement.querySelector('.card__like-button').addEventListener('click', function(evt){
		evt.target.classList.toggle('card__like-button_is-active')
	})
	const removeButtonClick = evt => {
		const cardItem = evt.target.closest('.card')
		deleteCard(cardItem)
	}
	deleteButton.addEventListener('click', removeButtonClick)
}

for (let i = 0; i < initialCards.length; i ++) {
	addCard(initialCards[i].name, initialCards[i].link, deleteCard)
}
