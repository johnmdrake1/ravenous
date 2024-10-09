import React from 'react';
import Business from './Business.js';
import styles from './BusinessList.module.css';


function BusinessList(props){
    //for now just returning the business component a few times and not yet making use of map, an array, etc.
    return (
        <div className={styles.BusinessList}>
            {/* map function goes through passed in business list prop, returns a Business instance for each business, passing each business in as a prop called bus with a value of
            business from the map function */}
            {props.businesslist.map((business) => (<Business bus={business} key={business.name} />))}
            {/* {
            Old code from part 1
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business /> */}
        </div>
    );
}

export default BusinessList;