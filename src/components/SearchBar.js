import React, {useState} from 'react';
import styles from './SearchBar.module.css';
//Object with keys being what the button does in human-friendly format, corresponding values being what should eventually be the corresponding call to Yelp API
const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

function SearchBar(){
    //managing state for search term in the field with "business keywords" placeholder. initialized with empty string ''
    const [searchTerm, setSearchTerm] = useState('');
    //managing state for search location in the field with the "Location" placeholder. initialized with empty string ''
    const [searchLocation, setSearchLocation] = useState('');
    //managing state for the selected sorting option to use, changed with the sort option buttons(Best Match, Highest Rated, Most Reviewed). default best_match
    const [searchSortOption, setSearchSortOption] = useState("best_match");
    //click handler to change active sort option that will be the onclick attribute of each button element
    function handleSortOptionClick(event){
        //get the value attribute of the button that clicked
        const selectedOption = event.target.value;
        // call the state setter with this value to set the state to the value of the button that was clicked(which also happens to be the API call)
        setSearchSortOption(selectedOption);
    }
    //event handler for typing in search terms field
    function handleSearchTermChange(event){
        //might want to condense this into one line
        const currentInput = event.target.value;
        setSearchTerm(currentInput);
    }

    //event handler for typing in location field
    function handleLocationTermChange(event){
        const currentInput = event.target.value;
        setSearchLocation(currentInput);
    }

    //event handler for clicking submit
    //event object is not being used right now, just there for prevent default
    function handleSearchClick(event){
        //only using event object to prevent default here
        event.preventDefault();
        //log a test message to the console with search term, search location, and search sort option when the search submit button is clicked
        console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${searchSortOption}`);
    }


    // function to make sort option buttons
    function produceSortOptions(){
        //uses map to iterate over sortOptions keys(sortType)
        return Object.keys(sortOptions).map(sortType => {
            //sortCall is the corresponding value(API call) to each key in sortOptions
            const sortCall = sortOptions[sortType];
            //boolean to determine wether this button is the option currently selected in the searchSortOption state
            const isSelected = sortCall === searchSortOption;
            //return element with key being the value(API call) for the element of sortOptions and the displayed part being the key(type of sort desired) from sortOptions
            //using key may not be strictly necessary here. example code did <li> elements here but I'm doing buttons.
            //also setting value attribute to sortCall(API call) so it can be used in click handler handleSortOption(event)
            //className is dynamically set to active if the current button(sortCall) is the option selected in the state variable or the empty string otherwise.
            return <button className={isSelected ? styles.active : ''} onClick={handleSortOptionClick} value={sortCall} key={sortCall}>{sortType}</button>;
        });
    }

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                {/* need to get the styling compatible here, example used an <ul> here instead with the <li> elements produced by their function(I'm using button elements instead) */}
                {produceSortOptions()}
            </div>
            <div className={styles.SearchBarFields}>
                <input placeholder="Business Keywords" onChange={handleSearchTermChange} value={searchTerm} />
                <input placeholder="Location" onChange={handleLocationTermChange} value={searchLocation} />
            </div>
            <div className={styles.SearchBarSubmit}>
                {/* need to get this compatible with the styling, example used <a> instead of button tag */}
                <button onClick={handleSearchClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;