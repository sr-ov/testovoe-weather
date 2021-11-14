import axios, { AxiosRequestConfig } from 'axios'
import { WeatherData } from './types'

export const api = axios.create({
    baseURL: process.env.BASE_URL,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.params.key = process.env.API_TOKEN
    config.params.lang = 'ru'

    return config
})

class WeatherService {
    async getForecast(city: string, days: number) {
        const {
            data: { data },
        } = await api.get<WeatherData>('forecast/daily', {
            params: { city, days },
        })

        return {
            current: data?.[0] ?? {},
            forecast: data ?? [],
        }
    }
}

export default new WeatherService()
