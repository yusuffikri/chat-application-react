import React, { useState } from 'react'
import XMarkIcon from '@heroicons/react/24/solid'
const StandardMessageForm = () => {
    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");

    const handleChange = (e) => setMessage(e.target.value);

  return (
    <div className='message-form-container'>
        { preview && (
            <div className='message-form-preview'>
                <img alt="message-form-preview"src={preview} className='message-form-preview-image' onLoad={() => URL.revokeObjectURL(preview)} />
                <XMarkIcon className='message-form-icon-x' onClick={() => { setPreview(""); setAttachment("");}}/>
            </div>
        )}
        <div className='message-form'>
           <div className='message-form-input-container'>
                <input type="text" className='message-form-input' value={message} onChange={handleChange} placeholder='Send a message...' />
           </div>
           <div className='message-form-icons'>
            <Dropzone acceptedFiles='.jpg,.jpeg,.png' multiple={false} noClick={true}
            onDrop={(acceptedFiles) => {
                setAttachment(acceptedFiles[0]);
                setPreview(URL.createObjectURL(acceptedFiles));
            }}>
            {({getRootProps,getInputProps, open}) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                </div>
            )}
            </Dropzone>
           </div>
        </div>
    </div>
  )
}

export default StandardMessageForm