import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
import styles from './App.module.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import yelp from './utils/yelp.js';

//previously used mock data, will now use actual api call result
// //mock business
// const bus = {
//   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90
// }
// //array for holding mock businesses, it will hold the same mock business multiple times for now
// const businesslist = [];
// //adding mock business multiple times
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);
// businesslist.push(bus);

function App() {
  //list of businesses will be stored in state variable businesslist, setter setBusinesslist will be called when the API is called
  const [businesslist, setBusinesslist] = useState([]);
  //asynchronous function for calling the yelp API search function, will be passed to SearchBar component to be called onclick
  async function doSearch(term, location, sortBy){
    try {
      //await the call to the yelp api function and set it to a constant, businesses
      const businesses = await yelp(term, location, sortBy);
      //use the state setter to set it to this list of businesses
      setBusinesslist(businesses);
    } catch(error) {
      console.error('Error fetching Yelp Data', error);
    }
  }
  return (
    <div className={styles.App}>
      {/* This is just here now and the default code commented out to test */}
      <h1>ravenous</h1>
      <SearchBar doSearch={doSearch} />
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
