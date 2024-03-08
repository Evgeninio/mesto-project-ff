const config = {
	baseUrl: 'https://nomoreparties.co/v1/wff-cohort-7',
	headers: {
		authorization: 'cb91019f-7e63-4d3a-96a0-dc3f19482995',
		'Content-Type': 'application/json',
	},
	headersToken: {
		authorization: 'cb91019f-7e63-4d3a-96a0-dc3f19482995',
	},
}

const checkResponse = res => {
	if (res.ok) {
		return res.json()
	}
	return Promise.reject(`Ошибка: ${res.status}`)
}

function request(endpoint, options) {
	return fetch(config.baseUrl + endpoint, options)
	.then(checkResponse)
}

export const getCards = () => {
	return request('/cards', {headers: config.headersToken})
}

export const getProfile = () => {
	return request('/users/me', {headers: config.headersToken})
}

export const changeProfile = (name, about) => {
	return request('/users/me', {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			about: about,
		})
	})
}

export const createCardApi = (name, link) => {
	return request('/cards', {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: name,
			link: link,
		})
	})
}

export const deleteCardApi = cardId => {
	return request(`/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
		body: JSON.stringify({
			_id: cardId,
		})
	})
}

export const likeCardApi = cardId => {
	return request(`/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
		body: JSON.stringify({
			_id: cardId,
		})
	})
}

export const deleteLikeApi = cardId => {
	return request(`/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
		body: JSON.stringify({
			_id: cardId,
		}),
	})
}

export const updateAvatar = avatarLink => {
	return request('/users/me/avatar', {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: avatarLink,
		}),
	})
}
