import React, {useState} from 'react'
import { usePostAiCodeMutation } from '../../state/api';
import MessageFormUI from './MessageFormUI'

const AiCode = ({props, activeChat}) => {

    const [message, setMessage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [triggerCode] = usePostAiCodeMutation();

    const handleChange = (e) => setMessage(e.target.value);

    const handleSubmit = async () => {
        const date = new Date().toISOString().replace("T", " ").replace("Z", `${Math.floor(Math.random() * 1000)}-08:00`);
        const at =  attachment ? [{blob zx: attachment, file: attachment.name}]:[];
        const form = {
            attachments: at,
            created: date,
            sender_username: props.username,
            text: message,
            activeChatId: activeChat.id,
        }

        props.onSubmit(form);
        triggerCode(form);
        setMessage("");
        setAttachment(""); 
    };

  return (
    <MessageFormUI
    setAttachment={setAttachment}
    message={message}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    />
  )
}

export default AiCode