import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  const handleOnChange = (message) => {
    dispatch({
      type: "edited_message",
      message,
    });
  };

  const handleSendMessage = (message, email) => {
    alert(`Sending ${message} to ${email} `);
    dispatch({
      type: "clean-chat-box",
      message: "",
    });
  };

  return (
    <section className='chat'>
      <textarea
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <br />
      <button onClick={() => handleSendMessage(message, contact.email)}>
        Send to {contact.email}
      </button>
    </section>
  );
}
