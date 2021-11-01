import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';

const DEFAULT_CITY = 'Campinas';

const Home = () => {
    const [name, setName] = useState(DEFAULT_CITY);
    const [data, setData] = useState();

    const getData = useCallback(async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/api?city=${name}`);
            console.log(data);
            setData(data);
            setName('');
        } catch (error) {
            console.error(error);
            alert('Error while retrieving weather by city name');
        }
    },[name]);

    useEffect(() => {
        try {
            getData();
        } catch (error) {
            console.error(error);
        }
    }, [getData]);

    function displayCityWeather() {
        const displayData = {
            city: data.name,
            temp: kelvinToCelsius(data.main.temp)
        }

        return (
            <>
                <h1>Weather in ${displayData.city}</h1>
                <h2>${displayData.temp} &deg;C</h2>
            </>
        )
    }

    function kelvinToCelsius(temp) {
        const celsius = temp - 273.15;
        return Math.ceil(celsius);
    }

    function onSubmit() {
        setName(name);
    }

    return (
        <>
            <div className="container">
                <div className="weather">
                    {
                        data && displayCityWeather()
                    }
                </div>
                <form>
                    <input type="text" placeholder="Enter a city"/>
                    <button type="submit" onSubmit={onSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Home;