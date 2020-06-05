export default function checkTime() {
  const loginTime = localStorage.getItem('time')
  const currentTime = Date.now()
  const duration = currentTime - loginTime
  if (duration >= 3600000) {
    localStorage.removeItem('time')
    window.location.reload()
  }
}
