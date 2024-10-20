import { useState } from 'react';
import './Country.css'
const Country = ({country, handledVisitedCountries, handleVisitedFlags}) => {

    const {name, flags, area, population, cca3} = country
    const [visited, setVisited] = useState(false)
    const handledVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Country: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handledVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(flags)}>Add Flag</button>
            <br />
            <button onClick={handledVisited}>{visited ? 'Visited' : 'Going'}</button>
            <div className='visited-btn'>
            {visited ? 'I have visited this country' : 'I want to visit'}
            </div>
        </div>
    );
};

export default Country;