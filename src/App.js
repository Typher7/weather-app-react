import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

// Import the images
import clearImage from './assets/clearsky2.jpg'
import cloudyImage from './assets/cloudy_background.jpeg'
import rainyImage from './assets/rainy.jpg'
import thunderstormImage from './assets/thunder.jpg'
import snowyImage from './assets/snowy.jpg'
import defaultImage from './assets/sunrise.jpg'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [backgroundImage, setBackgroundImage] = useState(defaultImage)

  const API_KEY = '895284fb2d2c50a520ea537456963d9c'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`

  const fetchWeatherData = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error)
      })
  }

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetchWeatherData(location)
      setLocation('')
    }
  }

  useEffect(() => {
    // Fetch weather data for New York on initial load
    fetchWeatherData('New York')
  }, [])

  useEffect(() => {
    if (data.weather && data.weather[0]) {
      const weatherMain = data.weather[0].main.toLowerCase()
      switch (weatherMain) {
        case 'clear':
          setBackgroundImage(clearImage)
          break
        case 'clouds':
          setBackgroundImage(cloudyImage)
          break
        case 'rain':
        case 'drizzle':
          setBackgroundImage(rainyImage)
          break
        case 'thunderstorm':
          setBackgroundImage(thunderstormImage)
          break
        case 'snow':
          setBackgroundImage(snowyImage)
          break
        default:
          setBackgroundImage(defaultImage)
      }
    }
  }, [data])

  return (  
    <div>
      <Navbar />
      <div className="app" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="search">
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined &&
            <div className="bottom">
              <div className="feels">
                {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          }
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;