import React from 'react';
import Business from './Business.js';


function BusinessList(){
    //for now just returning the business component a few times and not yet making use of map, an array, etc.
    return (
        <div>
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
        </div>
    );
}

export default BusinessList;