import React from 'react'
import '../Css/Footer.css'
import {Instagram} from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='con'>
    <div>
        <hr></hr>
    
        <a href="https://www.instagram.com/indiancricketteam/?hl=en" class="instagram-link">Follow us on <Instagram /> </a>
        <h3 id='foot'>Contact Email: clubcricket@gmail.com<br></br>
        Mobile: +01 542-231-245 </h3>
    </div>
    </div>
  )
}

export default Footer