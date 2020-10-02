import React from 'react'
import {Link} from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZE = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkBottonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkBottonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0]

  return (
    <Link to="/sing-up" className="btn-mobile">
      <button className={`btn ${checkBottonStyle} ${checkBottonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  )
}
