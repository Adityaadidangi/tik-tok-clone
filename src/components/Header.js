import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo"></div>
      </Link>
      <div className="upload-container">
        <div className="section">
          <Link to='/upload'>
            <div className="upload" />
          </Link>
          <img className="personal" src="https://media-exp1.licdn.com/dms/image/C5603AQEqfDeTsLpzrA/profile-displayphoto-shrink_200_200/0/1622482672619?e=1637193600&v=beta&t=IDLaE1C9xVjmQBavoyjfjBpp0KQ79POrM493ukH9Ptk" alt="personal dp"/>
        </div>
      </div>
    </div>
  )  
}
  
export default Header
