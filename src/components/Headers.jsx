import React from 'react'
import logo from './assets/logo.png'
import './Header.css'
const Headers = () => {
  return (
    <div>
      <div className='container'>
        <img className='logo' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Headers