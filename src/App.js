import logo from './logo.svg';
import './App.css';
//import list of decoy businesses, this is just here now to test
import BusinessList from './components/BusinessList';
function App() {
  return (
    <div className="App">
      {/* This is just here now and the default code commented out to test */}
      <BusinessList />
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
