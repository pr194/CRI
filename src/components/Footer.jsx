import React from 'react'
import './footer.css'
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
  return (
    <div>
        <div className="foot">
         <div className='in'>
         <CallIcon/><p>tollfree 18002001934</p>
         </div>
         <div className='in'>
            <FacebookIcon /> <p>www.facebook.com/ciripums</p>
         </div>
         <div className='in'>
            <LanguageIcon /><p>www.cripums.com</p>
         </div>
        </div>
    </div>
  )
}

export default Footer