import './pages/index.css';
import { 
	deleteCard, 
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
	newCardPopup,
	validationConfig,
	avatarForm,
	avatarLinkInput,
	avatarPopup,
	profileAvatar,
	newAvatarButton} from './components/constants.js';
import { 
	handleFormCreate, 
	handleFormSubmit} from './components/forms.js';

import { 
	openPopup, 
	closePopup } from './components/modal.js';

import {clearValidation, enableValidation} from './components/validation.js';

import { serverCards, getProfile, updateAvatar } from './components/api.js';

export function addCard(item, deleteCard, openCard, userId) {
	const cardElement = createCard(item, deleteCard,  openCard, userId)
	placesList.prepend(cardElement)
}
	
export function openCard (imageCont, card) {
	imagePopup.src = card.link
	imagePopup.alt = card.name
	imageTitlePopup.textContent = card.name
	openPopup(imageCont)
}



newCardButton.addEventListener('click', function(){
	clearValidation(newCardPopup, validationConfig)
	openPopup(newCardPopup)
})

editButton.addEventListener('click', function(){
	clearValidation(popupEdit, validationConfig)
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


enableValidation(validationConfig)

Promise.all([serverCards(), getProfile()])
.then(([cards, profile]) => {
	cards.forEach(item => {
		const card = createCard(item, deleteCard, openCard, profile._id)
		placesList.append(card)
	})
	profileTitle.textContent = profile.name
	profileDesc.textContent = profile.about
	profileAvatar.style.backgroundImage = `url('${profile.avatar}')`
	setupAvatarChange()
})

function setupAvatarChange() {
  profileAvatar.addEventListener('click', () => {
    openPopup(avatarPopup);
  });
  avatarForm.addEventListener('submit', function (event) {
    event.preventDefault();
			newAvatarButton.textContent = 'Сохранение...'
      updateAvatar(avatarLinkInput.value)
          .then((res) => {
            profileAvatar.style.backgroundImage = `url('${res.avatar}')`
            closePopup(avatarPopup)
						newAvatarButton.textContent = 'Сохранить'
          })
	})
}
