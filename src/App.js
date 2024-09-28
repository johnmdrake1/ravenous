import logo from './logo.svg';
// import './App.css';
import styles from './App.module.css';
//import list of decoy businesses, this is just here now to test
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
//mock business
const bus = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}
//array for holding mock businesses, it will hold the same mock business multiple times for now
const businesslist = [];
//adding mock business multiple times
businesslist.push(bus);
businesslist.push(bus);
businesslist.push(bus);

function App() {
  return (
    <div className={styles.App}>
      {/* This is just here now and the default code commented out to test */}
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesslist={businesslist} />
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
