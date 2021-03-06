
import {useState} from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message'
import NamePicker from './NamePicker'

function App() {
  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState('')

  console.log(messages)
  return <div className={"App"}>
 
    <header className="header">
      <div className="logo-box">
        <div className="logo" />
        CHATTER
      </div>
      <NamePicker saveName={setUsername} />
    </header>

    <main className="messages">
      {messages.map((msg,i)=> {
        return <Message key={i} {...msg} />
      })}
    </main>

    <TextInput 
      send={(t)=> setMessages([{text:t, name:username, ts:new Date()}, ...messages])}
    />

  </div>
}

export default App;
