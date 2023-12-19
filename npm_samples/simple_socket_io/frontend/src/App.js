import {useEffect, useState} from "react"
import './App.css';
import socket from "./server";
import InputField from "./components/InputField/InputField";
import MessageContainer from "./components/MessageContainer/MessageContainer";
function App() {

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect( () => {
    askUserName();
    socket.on("message", (res) => {
      console.log("res:", res);
      setMessageList((prevState => prevState.concat(res)));
    });
  }, [])

  const askUserName = () => {
    const userName = prompt("당신의 이름을 입력하세요");
    console.log(userName);

    socket.emit("login", userName, (res) => {
      console.log(res);
      if (res?.ok) {
        setUser(res.data);
      }
    });
  }
  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message, (res) => {
      console.log("sendMessage", message);
      console.log(res);
    });
  };
  return (
    <div>
      <div className="App">

        <MessageContainer messageList={messageList} user={user} />
        <InputField userName={user?.name} message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
