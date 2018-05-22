import React from 'react'
import { Link } from 'react-router-dom'

const GoToHome = () => {
  return (
    <div
      style={{marginTop: '40px', fontSize: '20px'}}
    >
      <Link
        to='/'
        style={{color: 'green', margin: '2px'}}
      >
        Click
      </Link>
      {` to go back.`}
    </div>
  )
}

export default GoToHome
