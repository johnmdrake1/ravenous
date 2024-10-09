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
    const [searchLocaton, setSearchLocation] = useState('');
    //managing state for the selected sorting option to use, changed with the sort option buttons(Best Match, Highest Rated, Most Reviewed)
    const [searchSortOption, setSearchSortOption] = useState();
    //click handler to change active sort option that will be the onclick attribute of each button element
    function handleSortOptionClick(event){
        //get the value attribute of the button that clicked
        const selectedOption = event.target.value;
        // call the state setter with this value to set the state to the value of the button that was clicked(which also happens to be the API call)
        setSearchSortOption(selectedOption);
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
                <input placeholder="Business keywords" />
                <input placeholder="Location" />
            </div>
            <div className={styles.SearchBarSubmit}>
                {/* need to get this compatible with the styling, example used <a> instead of button tag */}
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;