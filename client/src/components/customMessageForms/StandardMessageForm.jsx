import React, { useState } from 'react'
import XMarkIcon from '@heroicons/react/24/solid'
const StandardMessageForm = () => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

  return (
    <div className='message-form-container'>
        { preview && (
            <div className='message-form-preview'>
                <img alt="message-form-preview"src={preview} className='message-form-preview-image' onLoad={() => URL.revokeObjectURL(preview)} />
                <XMarkIcon className='message-form-icon-x' onClick={() => { setPreview(""); setAttachment("");}}/>
            </div>
        )}
        <div>
            asdfasf
        </div>
    </div>
  )
}

export default StandardMessageForm