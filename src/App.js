import React,{ useState, useEffect} from 'react';
import './App.css';
import Country from './components/Country';
import Favcountry from './components/Favcountry';

function App() {
  const[countries, setCountry] = useState([]);
  const[favCountry, setfavCountry] = useState([]);

  useEffect(() =>  {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(result => setCountry(result))
    .catch(error => console.log(error))
  },[])
  const handleClick = (country) => {
    setfavCountry(
      (prev) => {
        return [...prev, country];
      }
    );
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Favcountry favCountry={favCountry} key={
          favCountry.map(fcKey => fcKey.alpha2Code)}
        ></Favcountry>
        <h3>Total country is : {countries.length}</h3>
        <div>{
          countries.map(country => 
            <Country country={country} key={country.alpha2Code} handleClick={handleClick}>∂

            </Country>
          )
        }</div>
      </header>
    </div>
  );
}

export default App;
