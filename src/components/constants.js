export const content = document.querySelector('.content')
export const places = content.querySelector('.places')
export const placesList = places.querySelector('.places__list')
export const profileTitle = document.querySelector('.profile__title')
export const profileDesc = document.querySelector('.profile__description')
export const editButton = document.querySelector('.profile__edit-button')
export const newCardButton = document.querySelector('.profile__add-button')
export const closeButton = document.querySelectorAll('.popup__close')
export const formElement = document.querySelector('.popup__form')
export const nameInput = formElement.querySelector('.popup__input_type_name')
export const jobInput = formElement.querySelector('.popup__input_type_description')
export const placeNameInput = document.querySelector('.popup__input_type_card-name')
export const placeUrlInput = document.querySelector('.popup__input_type_url')
export const cardForm = placeNameInput.closest('.popup__form')
export const saveButtons = document.querySelectorAll('.popup__button')
export const allPopups = document.querySelectorAll('.popup')
export const imagePopupContainer = document.querySelector('.popup_type_image')
export const popupEdit = document.querySelector('.popup_type_edit')
export const formName = popupEdit.querySelector('.popup__input_type_name')
export const formDesc = popupEdit.querySelector('.popup__input_type_description')

export const imagePopup = document.querySelector('.popup__image')
export const imageTitlePopup = document.querySelector('.popup__caption')
export const profileEditPopup = document.querySelector('.popup_type_edit')
export const newCardPopup = document.querySelector('.popup_type_new-card')
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button-disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
export const profileAvatar = document.querySelector('.profile__avatar');
export const avatarForm = document.forms['new-avatar'];
export const avatarPopup = document.querySelector('.popup_type_new-avatar');
export const avatarLinkInput = document.querySelector('.popup__input_type_url_avatar')
export const newPlaceButton = document.getElementById('new-card')
export const editProfileButton = document.getElementById('edit-profile')
export const newAvatarButton = document.getElementById('new-avatar')