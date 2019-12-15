import { useState } from 'react'

export default function WithAuth() {
  const [loading, setLoading] = useState()

  fetch('/checkToken')
    .then(res => {
      if (res.status === 200) {
        setLoading(false)
      } else {
        const error = new Error(res.error)
        throw error
      }
    })
    .catch(err => {
      console.error(err)

      setLoading(true)
    })

  if (loading === true) {
    return 'wrong token'
  } else {
    return 'right token'
  }
}
