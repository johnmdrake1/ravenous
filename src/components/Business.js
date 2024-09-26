import React from 'react';

function Business(){
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
    return (
        <div>
            <img src={bus.imageSrc} alt={bus.name} />
            <h2>{bus.name}</h2>
            <div>{bus.address}</div>
            <div>{bus.city}</div>
            <div>{bus.state}</div>
            <div>{bus.zipcode}</div>
            <div>{bus.category}</div>
            <div>{bus.rating}</div>
            <div>{bus.reviewCount}</div>
        </div>
    );
}

export default Business;