export function getMessages() {
  return fetch('/messages').then(res => res.json())
}

export function postMessage(message) {
  return fetch('/messages', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
export function postMessage2(message) {
  return fetch('/messagesTuev', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
export function patchCard(card) {
  return fetch('/cards/' + card._id, {
    method: 'PATCH',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}

export function deleteMessage(id) {
  return fetch('/messages/' + id, {
    method: 'DELETE',
  }).then(res => res.json())
}
