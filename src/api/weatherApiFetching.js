import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a1904c47eb5e5296f3c1551fab128fd8';

export const weatherApiFetching = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        },
        validateStatus: false
    })

    return data;
}