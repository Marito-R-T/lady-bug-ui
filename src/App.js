import logo from './logo.svg';
import { 
  Routes,
  Route,
  Link } from 'react-router-dom';
import './App.css';
import LogIn from './log-in/LogIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default App;
