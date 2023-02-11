import { useEffect, useState } from 'react';
import AlertModal from '../components/AlertModal/AlertModal';
import LoadSpinner from '../components/LoadSpinner/LoadSpinner';
import Search from '../components/Search/Search';
import Weather from '../components/WeatherTable/WeatherTable';
import { CityContext } from '../context/cityContext';
import { getURL } from '../helpers/api';
import './Home.scss'

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');

  useEffect(() => {
    const getData = async () => {
      if (city !== '') {
        setLoading(true);
        try {
          const res = await fetch(getURL(city));
          const resData = await res.json();

          if (!res.ok) {
            throw new Error(resData.message);
          }
          
          setWeatherData(resData);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    }
    getData()
  }, [city])

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <section id='home'>
        <div className='upperCont'>
          <h1>Weather App</h1>
          <Search />
        </div>
        {
          error
            ? <AlertModal message={error.toString()} onClose={()=>setError('')} />
            : null
        }
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

