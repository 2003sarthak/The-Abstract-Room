import React from 'react'
import './Footer.css'
import logoImage from '../../homeimg/logo.png'
import ChatBubbleicon from './ChatBubbleicon/ChatBubbleWithIcon'
import bubbleImage from '../../homeimg/footerchatBubble.png'
import instagramIcon from '../../homeimg/instagramIcon.png'
import whatsAppIcon from '../../homeimg/whatsAppIcon.png'
function Footer() {
  return (
    <div className='foot'>
      <img src={logoImage} alt=""  className='footlogo'/>
      <div className='bubble'>
        <p>Stay Updated</p>
        <ChatBubbleicon
          headerText="Stay Updated"
          text="FOLLOW ON INSTAGRAM"
          bubbleImage={bubbleImage}
          iconImage={instagramIcon}
          link="https://www.instagram.com"
        />
        <ChatBubbleicon
          text="JOIN WHATSAPP GROUP"
          bubbleImage={bubbleImage}
          iconImage={whatsAppIcon}
          link="https://www.whatsapp.com"
        />
      </div>
    </div>
  )
}

export default Footer;
