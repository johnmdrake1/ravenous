import React from 'react';
import styles from './Business.module.css';

// hardcoded business for creating list of fake businesses and simulating website functionality
//has been moved to App.js as part of Part 2 component unidirectional data flow refactoring


function Business(){
    return (
    <div className={styles.Business}>
            <div className={styles.imageContainer}>
                <img src={bus.imageSrc} alt={bus.name} />
            </div>
            <h2>{bus.name}</h2>
            <div className={styles.BusinessInformation}>
                <div className={styles.BusinessAddress}>
                    <p>{bus.address}</p>
                    <p>{bus.city}</p>
                    <p>{`${bus.state} ${bus.zipCode}`}</p>
                </div>
                <div className={styles.BusinessReviews}>
                    <h3>{bus.category}</h3>
                    <h3 className={styles.rating}>{`${bus.rating} stars`}</h3>
                    <p>{`${bus.reviewCount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;