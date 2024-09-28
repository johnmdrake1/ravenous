import React from 'react';
import styles from './Business.module.css';

// hardcoded business for creating list of fake businesses and simulating website functionality
//has been moved to App.js as part of Part 2 component unidirectional data flow refactoring


function Business(props){
    //before bus was dummy code defined in this file. Now it's props.bus because it's passed in in the BusinessList.js file as a prop when the businesslist is mapped over.
    return (
    <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={props.bus.imageSrc} alt={props.bus.name} />
            </div>
            <h2>{props.bus.name}</h2>
            <div className={styles.BusinessInformation}>
                <div className={styles.BusinessAddress}>
                    <p>{props.bus.address}</p>
                    <p>{props.bus.city}</p>
                    <p>{`${props.bus.state} ${props.bus.zipCode}`}</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>{props.bus.category}</h3>
                    <h3 className={styles.rating}>{`${props.bus.rating} stars`}</h3>
                    <p>{`${props.bus.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;