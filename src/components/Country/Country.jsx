import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        // basic system
        // if(visited){
        //     setVisited(false);
        // }else{
        //     setVisited(true)
        // }

        // Second system
        // setVisited(visited ? false : true);

        // Third system
        setVisited(!visited);
        handleVisitedCountries(country)
    } 
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Area: {country.area.area} {country.area.area > 300000 ? 'Big country' : 'Small country'}</h4>
            <p>Population: {country.population.population} {country.population.population > 5000000 && 'Over Populated'}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : 'Not visited'}</button>
            <button className='btn-visited-flag' onClick={()=>{handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;