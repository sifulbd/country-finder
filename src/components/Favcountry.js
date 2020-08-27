import React from 'react'

function Favcountry(props) {
    const favCountry = props.favCountry;
    return (
        <div className="favCountry">
        <h3>Favourite country list : {favCountry.length} </h3>
        {favCountry.map(fCountry =>        
            <h4><img style={{width: '20px'}} src={fCountry.flag} alt=""/> {fCountry.name}</h4>
        )}
        </div>
    )
}

export default Favcountry



