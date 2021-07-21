import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import ChatContainer from './chat/ChatContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChatContainer></ChatContainer>
      </header>
    </div>
  );
}

export default App;
