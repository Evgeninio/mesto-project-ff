const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-7',
  headers: {
    authorization: 'cb91019f-7e63-4d3a-96a0-dc3f19482995',
    'Content-Type': 'application/json'
  },
	headersToken:{
		authorization: 'cb91019f-7e63-4d3a-96a0-dc3f19482995'
	}
}

const checkResponse = (res) => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
}

export const serverCards = () => {
	return fetch(`${config.baseUrl}/cards`, {
		headers: config.headersToken
	})
		.then(res => checkResponse(res))
		.catch((err) => {
			console.log(err)
		})
}

export const getProfile= () => {
	return fetch(`${config.baseUrl}/users/me`, {
		headers: config.headersToken
	})
		.then(res => checkResponse(res))
		.catch((err) => {
			console.log(err)
		})
}

export const changeProfile = (name, about) => {
	return fetch(`${config.baseUrl}/users/me`, {
  method: 'PATCH',
  headers: config.headers,
  body: JSON.stringify({
		name: name,
    about: about
	})
})
	.then(res => checkResponse(res))
	.catch((err) => {
		console.log(err)
	})
}

export const cardCreateApi = (name, link) => {
	return fetch(`${config.baseUrl}/cards`, {
  method: 'POST',
  headers: config.headers,
  body: JSON.stringify({
		name: name,
    link: link
	})
})
	.then(res => checkResponse(res))
	.catch((err) => {
		console.log(err)
	})
}

export const cardDeleteApi = (cardId) => {
	return fetch(`${config.baseUrl}/cards/${cardId}`, {
  method: 'DELETE',
  headers: config.headers,
  body: JSON.stringify({
		_id: cardId
	})
})
	.then(res => checkResponse(res))
	.catch((err) => {
		console.log(err)
	})
}

export const cardLikeApi = (cardId) => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
		body: JSON.stringify({
			_id: cardId
		})
	})
	.then(res => checkResponse(res))
	.catch((err) => {
		console.log(err)
	})
}

export const likeDeleteApi = (cardId) => {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
		body: JSON.stringify({
			_id: cardId
		})
	})
	.then(res => checkResponse(res))
	.catch((err) => {
		console.log(err)
	})
}

export const updateAvatar = (avatarLink) => {
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: avatarLink
		})
	})
	.then(res => checkResponse(res))
	.catch((err) => {
		console.log(err)
	})
}