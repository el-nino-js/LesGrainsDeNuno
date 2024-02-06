import NextLink from 'next/link'
import { Button, Container, ChakraProvider, Box, Text, UnorderedList, Heading, Image, Link, List, ListItem, useColorModeValue, SimpleGrid, Icon, IconButton, Audio } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

import { ChevronRightIcon } from '@chakra-ui/icons'
import axios from 'axios'

import Layout, { article } from '../components/layouts/article'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoVue, IoLogoSnapchat } from 'react-icons/io5'



import { useState, useEffect } from 'react';



const Page = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    // Generate a random number between 1 and 5 based on the current date
    const getStoredRandomNumber = () => {
      const storedNumber = localStorage.getItem('weatherRandomNumber');
      if (storedNumber) {
        setRandomNumber(parseInt(storedNumber, 10));
      } else {
        generateRandomNumber();
      }
    };

    const generateRandomNumber = () => {
      const currentDate = new Date();
      const seed = currentDate.toISOString().split('T')[0];
      const randomValue = parseInt(seed.split('-').join(''), 10) % 5 + 1;
      setRandomNumber(randomValue);
      localStorage.setItem('weatherRandomNumber', randomValue.toString());
    };

    getStoredRandomNumber();
    

    const fetchWeatherData = async () => {
      try {
        const apiKey = '665e91eea190260c754947e46ff00fad';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Ikebukuro&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const isSunny = () => {
    if (!weatherData) return false;

    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    const isClearSky = weatherCondition === 'clear' && weatherData.clouds.all < 20;

    return isClearSky;
  };

  return (

    
    <div className="weather-container">
      <h1 className="weather-header">🏯</h1>
      {weatherData && (
        <div className="weather-info">
          <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
          <p className="temperature">T.Res: {weatherData.main.feels_like}°C</p>
          {isSunny() ? (
            <p className="sunny-message">Le ciel brille sur l'Ibekuroyaume!</p>
          ) : (
            <p className="not-sunny-message">Les nuages obscurcissent l'Ikebukuroyaume!</p>
          )}

          {isSunny() ? (
            <div><img src={`/images/villeroyaume/japon/sunny/${randomNumber}.jpg`} alt="Sun Image" className="weather-image" /></div>
          ) : (
            <div><img src={`/images/villeroyaume/japon/unsunny/${randomNumber}.jpg`} alt="Nosun Image" className="weather-image" /></div>
           
          )}  
        </div>
      )}

      <style jsx>{`
        .weather-container {
          text-align: center;
          margin: 50px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          max-width: 400px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .weather-header {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .weather-info {
          font-size: 18px;
        }

        .temperature {
          margin-bottom: 10px;
        }

        .sunny-message {
          color: #ff9900; /* Orange color for sunny message */
          font-weight: bold;
        }

        .not-sunny-message {
          color: #6a0dad; /* Dark purple color for not sunny message */
          font-weight: bold;
        }

      `}</style>
    </div>
  );

};

export default Page;