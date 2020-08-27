import React from 'react'

function Country(props) {
   const{name, capital, flag, timezones} = props.country;
   const handleCountry = props.handleClick;
    return (
        <div className='country'>
        <img src={flag} alt=""/>
            <h4>{name}</h4>
            {/* <p>Capital: {capital}</p> */}
            {/* <h5>TimeZone: {timezones}</h5> */}
            <button onClick={() => handleCountry(props.country)}> Add Country</button>
        </div>
    )
}

export default Country;
