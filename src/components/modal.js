export function closePopup (openedPopup) {
	openedPopup.classList.remove('popup_is-opened')
	window.removeEventListener('keydown', escapeHandler)	
}

export function openPopup (popup) {
	popup.classList.add('popup_is-opened')
	window.addEventListener('keydown', escapeHandler)
}

function escapeHandler(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
	  closePopup(openedPopup)
	}
}