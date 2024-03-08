import { createCard, deleteCard } from './components/card.js'
import {
	allPopups,
	avatarForm,
	avatarPopup,
	cardForm,
	editButton,
	formDesc,
	formName,
	imagePopup,
	imageTitlePopup,
	newCardButton,
	newCardPopup,
	placesList,
	popupEdit,
	profileAvatar,
	profileDesc,
	profileForm,
	profileTitle,
	validationConfig,
} from './components/constants.js'
import {
	handleFormCreate,
	handleProfileFormSubmit,
	handleAvatarEdit
} from './components/forms.js'
import './pages/index.css'

import { closePopup, openPopup } from './components/modal.js'

import { clearValidation, enableValidation } from './components/validation.js'

import { getCards, getProfile } from './components/api.js'

export function addCard(item, deleteCard, openCard, userId) {
	const cardElement = createCard(item, deleteCard, openCard, userId)
	placesList.prepend(cardElement)
}

export function openCard(imageCont, card) {
	imagePopup.src = card.link
	imagePopup.alt = card.name
	imageTitlePopup.textContent = card.name
	openPopup(imageCont)
}

newCardButton.addEventListener('click', function () {
	clearValidation(newCardPopup, validationConfig)
	openPopup(newCardPopup)
})
profileAvatar.addEventListener('click', () => {
	clearValidation(avatarPopup, validationConfig)
	openPopup(avatarPopup)
})

editButton.addEventListener('click', function () {
	clearValidation(popupEdit, validationConfig)
	formName.value = profileTitle.textContent
	formDesc.value = profileDesc.textContent
	openPopup(popupEdit)
})

profileForm.addEventListener('submit', handleProfileFormSubmit)
cardForm.addEventListener('submit', handleFormCreate)
avatarForm.addEventListener('submit', handleAvatarEdit)

allPopups.forEach((popup) => {
	popup.classList.add('popup_is-animated')
	popup.addEventListener('mousedown', (evt) => {
			if (evt.target.classList.contains('popup_opened')) {
					closePopup(popup)
			}
			if (evt.target.classList.contains('popup__close')) {
				closePopup(popup)
			}
			if (evt.currentTarget === evt.target) {
				closePopup(popup)
			}
	})
})

enableValidation(validationConfig)

Promise.all([getCards(), getProfile()])
.then(([cards, profile]) => {
	cards.forEach(item => {
		const card = createCard(item, deleteCard, openCard, profile._id)
		placesList.append(card)
	})
	profileTitle.textContent = profile.name
	profileDesc.textContent = profile.about
	profileAvatar.style.backgroundImage = `url('${profile.avatar}')`
})
.catch(err => {
	console.log(err)
})

