import React from 'react'
import { getImage } from '../../helpers/api';
import { getCelsius, getFaren } from '../../helpers/units';
import { useTemperatureUnitToggle } from '../../hooks/useToggle';
import './WeatherTable.scss'

const Weather = ({ data }) => {
  const { main, weather } = data;

  const kelvin = main.temp;
  const celsius = getCelsius(kelvin);
  const farenheit = getFaren(kelvin);

  const [unit, state, toggleTemperatureUnit] = useTemperatureUnitToggle({
    kelvin,
    celsius,
    farenheit,
    value: celsius,
    type: 'C'
  });

  return (
    <section id='weatherCont'>
      <div className='weatherTableCont'>
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Weather</th>
              <th className='thTemp'>
                <div>
                  <p>temperature</p>
                  <div>
                    <small
                      className={(state.kelvin ? 'active' : '') + ' tempSelector'}
                      onClick={() => toggleTemperatureUnit("K")}>°K</small>
                    <small
                      className={(state.celsius ? 'active' : '') + ' tempSelector'}
                      onClick={() => toggleTemperatureUnit("C")}>°C</small>
                    <small
                      className={(state.farenheit ? 'active' : '') + ' tempSelector'}
                      onClick={() => toggleTemperatureUnit("F")}>°F</small>
                  </div>
                </div>
              </th>
              <th>Humidity</th>
              <th>Wind speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <p>{data.name} - {data.sys.country}</p>
                </div>
              </td>
              <td>
                <div className='stateCont'>
                  <p>{weather[0].main}</p>
                  <img src={getImage(weather[0].icon)} alt="" />
                </div>
              </td>
              <td>
                <div>
                  <p>
                    {Math.floor(unit.value) + ' °' + unit.type}
                  </p>
                </div>
              </td>
              <td>
                <div>
                  <p>{main.humidity}</p>
                </div>
              </td>
              <td>
                <div>
                  <p className='windSpeed'>{data.wind.speed} m/s</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Weather