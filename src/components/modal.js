export function closePopup (openedPopup) {
	setTimeout(() => {
		openedPopup.classList.remove('popup_is-opened')
	}, 1)
	window.removeEventListener('keydown', escapeHandler)	
}

export function openPopup (popup) {
	popup.classList.add('popup_is-animated')
	setTimeout(() => {
		popup.classList.add('popup_is-opened')
	}, 1)
	window.addEventListener('keydown', escapeHandler)
}

function escapeHandler(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
	  closePopup(openedPopup)
	}
}