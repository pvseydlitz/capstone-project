export function getMessages() {
  return fetch('/messages').then(res => res.json())
}
export function getMessagesTuev() {
  return fetch('/messagesTuev').then(res => res.json())
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
export function postMessagesTuev(message) {
  return fetch('/messagesTuev', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then(res => res.json())
}
export function patchMessage(message) {
  return fetch('/messages/' + message._id, {
    method: 'PATCH',
    body: JSON.stringify(message),
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

export function deleteMessageTuev(id) {
  return fetch('/messagestuev/' + id, {
    method: 'DELETE',
  }).then(res => res.json())
}
