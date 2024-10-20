
import Country from './Country/Country';
import './Countries.css'
import { useEffect, useState } from 'react'
const Countries = () => {
    // state manage 
      const [countries, setCountries] = useState([])
      const [visitedCountries, setVisitedCountries] = useState([])
      const [visitedFlags, setVisitedFlags] = useState([])
      
      // handle mark visited button
      const handledVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
      }

      //handle add flag button
      const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
      }
    
      // useEffect manage 
      useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data))
      }, [])
    return (
        <div>
            <h3>Country:{countries.length} </h3>
            <h5>Visited countries: {visitedCountries.length}</h5>
            <ul className='list-container'>
              {
                visitedCountries.map((country, idx) => <li key={idx}>{country.name.common}</li>)
              }
            </ul>
            <div>
              {
                visitedFlags.map((flag, idx) => <img key={idx} src={flag.png}></img>)
              }
            </div>
            <div className='countries-container'>
            {
                countries.map(country => <Country key={country.cca3} country={country} handledVisitedCountries={handledVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;