import React from 'react'
import { ChatBubbleLeftRightIcon, PhoneIcon} from '@heroicons/react/24/solid'

const CustomerHeader = ({chat}) => {
  return (
    <div className='chat-header'>
        <div className='flexbetween'>
            <ChatBubbleLeftRightIcon className='icon-chat'/>
            <h3 className="header-text">{chat.title}</h3>
        </div>
        <div>
            <PhoneIcon className='icon-phone'/>
            <p className='header-text'>{chat.description}</p>
        </div>
    </div>
  )
} 

export default CustomerHeader