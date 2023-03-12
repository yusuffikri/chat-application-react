import React from 'react'
import { useState } from 'react'
import XMarkIcon, { PaperAirplaneIcon, PaperClipIcon } from '@heroicons/react/24/solid'
import Dropzone from 'react-dropzone';

const MessageFormUI = ({setAttachment, message, handleChange, handleSubmit,}) => {

  const [preview, setPreview] = useState("");

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
            <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} noClick={true}
            onDrop={(acceptedFiles) => {
                setAttachment(acceptedFiles[0]);
                setPreview(URL.createObjectURL(acceptedFiles));
            }}>
            {({getRootProps,getInputProps, open}) => (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <PaperClipIcon className='message-form-icon-clip' onClick={open}/>
                </div>
            )}
            </Dropzone>

            <hr className='vertical-line'/>
            <p><PaperAirplaneIcon className='message-form-icon-airplane' onClick={() =>  {
                setPreview("");
                handleSubmit(); 
            }}/>
             </p>
           </div>
        </div>
    </div>
  )
}

export default MessageFormUI