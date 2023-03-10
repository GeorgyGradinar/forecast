import {createStore, Store} from 'vuex'
import {SettingsForecastWeather} from "@/interfaces/forecast.interface";
import {InjectionKey} from "vue";

export interface ForecastWeather {
    isOpenDialog: boolean;
    countForecasts: string[];
    settingsWeather: SettingsForecastWeather[];
}

export const store = createStore({

    state(): ForecastWeather {
        return {
            isOpenDialog: false,
            countForecasts: ['Moscow'],
            settingsWeather: [
                {
                    city: 'Moscow',
                    units: 'metric',
                    speedWind: 'm/c',
                    currentWeather: {
                        "coord": {"lon": 37.6156, "lat": 55.7522},
                        "weather": [{"id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n"}],
                        "base": "stations",
                        "main": {
                            "temp": -2.38,
                            "feels_like": -5.49,
                            "temp_min": -4.69,
                            "temp_max": -1.46,
                            "pressure": 1029,
                            "humidity": 96,
                            "sea_level": 1029,
                            "grnd_level": 1010
                        },
                        "visibility": 1526,
                        "wind": {
                            "speed": 2.2,
                            "deg": 332,
                            "gust": 5.22
                        },
                        "clouds": {"all": 100}, "dt": 1675615273,
                        "sys": {
                            "type": 2, "id": 2000314,
                            "country": "RU",
                            "sunrise": 1675574203,
                            "sunset": 1675606216
                        },
                        "timezone": 10800, "id": 524901,
                        "name": "Moscow", "cod": 200
                    }
                },
                {
                    city: 'Kiev',
                    units: 'metric',
                    speedWind: 'm/c',
                    currentWeather: {
                        "coord": {"lon": 37.6156, "lat": 55.7522},
                        "weather": [{"id": 804, "main": "Clouds", "description": "scattered clouds", "icon": "10d"}],
                        "base": "stations",
                        "main": {
                            "temp": -5.38,
                            "feels_like": -8.49,
                            "temp_min": -4.69,
                            "temp_max": -1.46,
                            "pressure": 1829,
                            "humidity": 30,
                            "sea_level": 1029,
                            "grnd_level": 1010
                        },
                        "visibility": 2026,
                        "wind": {
                            "speed": 3.2,
                            "deg": 332,
                            "gust": 5.22
                        },
                        "clouds": {"all": 100}, "dt": 1675615273,
                        "sys": {
                            "type": 2, "id": 2000314,
                            "country": "UK",
                            "sunrise": 1675574203,
                            "sunset": 1675606216
                        },
                        "timezone": 10800, "id": 524901,
                        "name": "Kiev", "cod": 200
                    }
                },
                {
                    city: 'Minsk',
                    units: 'metric',
                    speedWind: 'm/c',
                    currentWeather: {
                        "coord": {"lon": 37.6156, "lat": 55.7522},
                        "weather": [{"id": 804, "main": "Clouds", "description": "clear sky", "icon": "11d"}],
                        "base": "stations",
                        "main": {
                            "temp": -12.38,
                            "feels_like": -18.49,
                            "temp_min": -4.69,
                            "temp_max": -1.46,
                            "pressure": 1459,
                            "humidity": 120,
                            "sea_level": 1029,
                            "grnd_level": 1010
                        },
                        "visibility": 1526,
                        "wind": {
                            "speed": 1.2,
                            "deg": 332,
                            "gust": 5.22
                        },
                        "clouds": {"all": 100}, "dt": 1675615273,
                        "sys": {
                            "type": 2, "id": 2000314,
                            "country": "RB",
                            "sunrise": 1675574203,
                            "sunset": 1675606216
                        },
                        "timezone": 10800, "id": 524901,
                        "name": "Minsk", "cod": 200
                    }
                }

            ],
        }
    },

})

export const key: InjectionKey<Store<ForecastWeather>> = Symbol();
