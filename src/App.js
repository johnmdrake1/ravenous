import logo from './logo.svg';
import './App.css';
//import list of decoy businesses, this is just here now to test
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <div className="App">
      {/* This is just here now and the default code commented out to test */}
      <h1>ravenous</h1>
      <SearchBar />
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
