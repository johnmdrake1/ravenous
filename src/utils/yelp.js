//JavaScript Code for interacting with the Yelp API for Part 4 of the Ravenous Project

//yelp api key stored in local .env file not committed to changes because ot .gitignore file
const yelpKey = process.env.REACT_APP_YELP_API_KEY;

function yelp(term, location, sortBy) {
    //url for request. endpoint itself is https://api.yelp.com/v3/businesses/search. Using interpolation to add term, location, sort_by in the following format.
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
    //headers object with Authorization: Bearer apiKey which is the format required by Yelp.
    const headers = {
        Authorization: `Bearer ${yelpKey}`
    }
    //fetch get request with url and headers(headers is supposed to be part of a larger options object so i destructure it here)
    return fetch(url, { headers })
    .then(res => res.json())
    .then(res => {
        //log json res returned by previous then
        console.log(res);
        //constant for holding businesses formatted in the format I need them in based on how my code is structured
        const formattedBusinesses = res.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
          //log the formatted businesses variable
          console.log(formattedBusinesses);
          //return the formatted businessed
          return formattedBusinesses;
    })
    .catch(err => console.error(err));
}

export default yelp;