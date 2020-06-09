export default function checkTime() {
  const loginTime = sessionStorage.getItem('time')
  const currentTime = Date.now()
  const duration = currentTime - loginTime
  if (duration >= 3600000) {
    sessionStorage.removeItem('time')
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('accept')
    window.location.reload()
  }
}