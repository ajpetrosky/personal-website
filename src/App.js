import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="green" />
        </svg> 
        <p>
          AP's website coming soon.
        </p>
        <a
          className="App-link"
          href="https://media.giphy.com/media/GxQABXQhII7cY/giphy.gif?cid=ecf05e47tmv2zf7o2pnpjx083czpazk64a67w829p9eo8wru&rid=giphy.gif&ct=g"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go here instead, for now.
        </a>
      </header>
    </div>
  );
}

export default App;
