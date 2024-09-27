import React from 'react';
import Business from './Business.js';
import styles from './BusinessList.module.css';


function BusinessList(){
    //for now just returning the business component a few times and not yet making use of map, an array, etc.
    return (
        <div className={styles.BusinessList}>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}

export default BusinessList;