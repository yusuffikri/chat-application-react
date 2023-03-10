import React, { useState } from 'react'

const StandardMessageForm = () => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

  return (
    <div className='message-form-container'>
        { preview && (
            <div className='message-form-preview'>
                <img src={preview} className='message-form-preview-image' onLoad={() => URL.revokeObjectURL(preview)} />
            </div>
        )}
    </div>
  )
}

export default StandardMessageForm