import React from 'react';
import styles from './Business.module.css';

// hardcoded business for creating list of fake businesses and simulating website functionality
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