export function getMessages() {
  return fetch('/messages').then((res) => res.json())
}
export function getMessagesTuev() {
  return fetch('/messagesTuev').then((res) => res.json())
}
export function getMessagesNotice() {
  return fetch('/messagesNotice').then((res) => res.json())
}
export function postMessage(message) {
  return fetch('/messages', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}
export function postMessageTuev(message) {
  return fetch('/messagesTuev', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}
export function postMessageNotice(message) {
  return fetch('/messagesNotice', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}
export function patchMessage(message) {
  delete message.isBookmarked
  return fetch('/messages/' + message._id, {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}
export function patchMessageTuev(message) {
  return fetch('/messagesTuev/' + message._id, {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}
export function patchMessageNotice(message) {
  return fetch('/messagesNotice/' + message._id, {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}
export function deleteMessage(id) {
  return fetch('/messages/' + id, {
    method: 'DELETE',
  }).then((res) => res.json())
}

export function deleteMessageTuev(id) {
  return fetch('/messagesTuev/' + id, {
    method: 'DELETE',
  }).then((res) => res.json())
}
export function deleteMessageNotice(id) {
  return fetch('/messagesNotice/' + id, {
    method: 'DELETE',
  }).then((res) => res.json())
}
