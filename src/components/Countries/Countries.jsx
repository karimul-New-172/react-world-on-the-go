import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        const newVistedCountries = [...visitedCountries, country];
        setVisitedCountries(newVistedCountries);
    }
    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);
    const handleVisitedFlag = (flag) => {
        const newVistedFlags = [...visitedCountriesFlag, flag];
        setVisitedCountriesFlag(newVistedFlags)
        console.log(flag);
    }
    return (
        <div>
            <h1>The Colle of World Countries: {countries.length}</h1>
            <h3>Total visited countries : {visitedCountries.length}</h3>
            <h3>Total visited Flags: {visitedCountriesFlag.length}</h3>
            {/* for visited flag */}
            <div className='flags-style'>
                {
                    visitedCountriesFlag.map(flag => <img src = {flag}></img>)
                }
            </div>
            {/* for visited countries */}
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries-style'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;