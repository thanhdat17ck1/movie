import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import '../../assets/scss/main.scss'
import logo from '../../assets/img/logo.png'



export default function Header() {
  return (
    <div className='c-header'>
        <div className="inner l-container">
            <Link to="/" className="c-header__logo"><img src={logo} alt="" />Movies7.to</Link>
            <ul>
                <li>
                    <Link to="/">Home 1</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="c-header__user">
                Longin/Register
            </div>
        </div>

        
    </div>
  )
}
