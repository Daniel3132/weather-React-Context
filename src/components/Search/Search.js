import React, { useContext } from 'react'
import { CityContext } from '../../context/cityContext';
import './Search.scss'


const Search = () => {
  const { setCity } = useContext(CityContext);

  // Handle the submit event of the search form
  const submitHandler = e => {
    e.preventDefault();
    // Get the value of the city input field
    const inputValue = e.target.elements.cityInput.value;
    // Set the city context state with the input value
    setCity(inputValue);
  };

  return (
    <section id='searchCont'>
      <div>
        <div className='searchGroup'>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter city name"
              name="cityInput"
              required
              autoFocus
            />
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Search;
