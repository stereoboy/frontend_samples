import React from 'react'

const InputField = ({userName, message,setMessage,sendMessage}) => {

  return (
    //
    // reference: https://www.freecodecamp.org/news/html-form-input-type-and-submit-button-example/
    //
    <div className="input-area">
          <form onSubmit={sendMessage} className="input-container">
            <label>{userName} </label>
            <input type="text"
              placeholder="Type in here…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              // multiline={false}
              // rows={1}
            />

            <input type="submit"
              disabled={message === ""}
              className="send-button"
            />
          </form>
    </div>
  )
}

export default InputField