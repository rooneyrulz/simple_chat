import React, { useState, useEffect, Fragment } from "react";
import socketIOClient from "socket.io-client";

// Components
import AppHeader from "./layouts/header/AppHeader";
import MessageArea from "./components/MessageArea";
import MessageField from "./components/MessageField";
import "./App.css";

// URI that server running on
const uri = "http://localhost:5000";

const App = () => {
  const [state, setState] = useState({
    status: false,
    userName: null,
    message: ""
  });

  const socketInit = async () => {
    const io = await socketIOClient(uri);
    await io.on("connect", () => console.log(`connection established!`));
    setState({
      ...state,
      status: true
    });
  };

  useEffect(() => {
    socketInit();
  }, []);

  const onHandleChange = e =>
    setState({
      ...state,
      [e.target.name]: e.target.value
    });

  const onHandleSendMessage = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className="App container">
      <Fragment>
        <header>
          <AppHeader />
        </header>
        <main>
          <MessageArea />
          <MessageField
            onHandleChange={onHandleChange}
            onHandleSendMessage={onHandleSendMessage}
          />
        </main>
      </Fragment>
    </div>
  );
};

export default App;
