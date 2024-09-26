import React from 'react';
import styles from './SearchBar.module.css';

const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

function SearchBar(){
    // function to make sort option buttons
    function produceSortOptions(){
        //uses map to iterate over sortOptions keys(sortType)
        return Object.keys(sortOptions).map(sortType => {
            //sortCall is the corresponding value(API call) to each key in sortOptions
            let sortCall = sortOptions[sortType];
            //return element with key being the value(API call) for the element of sortOptions and the displayed part being the key(type of sort desired) from sortOptions
            //using key may not be strictly necessary here. example code did <li> elements here but I'm doing buttons.
            return <button key={sortCall}>{sortType}</button>;
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