import { useEffect, useState } from 'react';
import AlertModal from '../components/AlertModal/AlertModal';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner';
import Search from '../components/Search/Search';
import Weather from '../components/WeatherTable/WeatherTable';
import { CityContext } from '../context/cityContext';
import { getURL } from '../helpers/api';
import './Home.scss'

const App = () => {
  // State to store the weather data
  const [weatherData, setWeatherData] = useState({});
  // State to store any errors that occur during data fetching
  const [error, setError] = useState('');
  // State to keep track of loading status
  const [loading, setLoading] = useState(false);
  // State to store the name of the selected city
  const [city, setCity] = useState('');

  // useEffect hook to fetch weather data when the city state changes
  useEffect(() => {
    const getData = async () => {
      // Only fetch data if a city has been selected
      if (city !== '') {
        // Set loading state to true while data is being fetched
        setLoading(true);
        try {
          // Fetch the data from the OpenWeatherMap API
          const res = await fetch(getURL(city));
          const resData = await res.json();

          // If the response is not okay, throw an error
          if (!res.ok) {
            throw new Error(resData.message);
          }

          // Set the weather data in state
          setWeatherData(resData);
        } catch (err) {
          // Set the error in state
          setError(err);
        } finally {
          // Set loading state to false once data has been fetched
          setLoading(false);
        }
      }
    }
    getData()
  }, [city])

  return (
    // Provide the city context to child components
    <CityContext.Provider value={{ city, setCity }}>
      <section id='home'>
        <div className='upperCont'>
          <h1>Weather App</h1>
          <Search />
        </div>
        {/* Display the error modal if there is an error in state */}
        {
          error
            ? <AlertModal message={error.toString()} onClose={() => setError('')} />
            : null
        }
        {/* Display the loading spinner if loading state is true */}
        {
          loading
            ? <LoadSpinner />
            : weatherData.main
              ? <Weather data={weatherData} />
              : null
        }
      </section>
    </CityContext.Provider>
  );
}

export default App;
