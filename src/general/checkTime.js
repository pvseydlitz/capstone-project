export default function checkTime() {
  const loginTime = localStorage.getItem('time')
  const currentTime = Date.now()
  const duration = currentTime - loginTime
  if (duration >= 3600000) {
    localStorage.removeItem('time')
    localStorage.removeItem('user')
    localStorage.removeItem('accept')
    window.location.reload()
  }
}
