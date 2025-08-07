import logo from './logo-loading.png';
import './App.css';
import Hello from './ component /Hello';
import Goodbye from './ component /Goodbye';

function App() {
  return (
    <div className="App">
      <Hello />
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
          4king
        </a>
      </header>
      <Goodbye />
    </div>

  );
}

export default App;
