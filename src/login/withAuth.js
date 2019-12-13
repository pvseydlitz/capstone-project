import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function WithAuth() {
  const [loading, setLoading] = useState(true)

  fetch('/checkToken')
    .then(res => {
      if (res.status === 200) {
        console.log('right token')
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
    console.log('1')
    return 1
  } else {
    console.log('3')
    return 3
  }
}
