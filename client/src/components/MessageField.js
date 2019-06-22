import React from "react";

const MessageField = ({ onHandleChange, onHandleSendMessage }) => {
  return (
    <div className="msg-field">
      <form onSubmit={(e) => onHandleSendMessage(e)}>
        <div className="form-group mb-0">
          <input
            type="text"
            name="message"
            className="form-control"
            placeholder="Enter Message"
            onChange={e => onHandleChange(e)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-block bg-secondary"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageField;
