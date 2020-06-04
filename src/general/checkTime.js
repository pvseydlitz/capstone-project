export default function checkTime() {
  const loginTime = localStorage.getItem('time')
  const currentTime = Date.now()
  const duration = currentTime - loginTime
  console.log(duration)
  if (duration >= 3600000) {
    window.location.reload()
  }
}
