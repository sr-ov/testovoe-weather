import { useAsync, ref } from '@nuxtjs/composition-api'
import weatherService from '../api'

export const useWeather = (city: string, days: number) => {
    const loading = ref(false)
    const weather = useAsync(() => weatherService.getForecast(city, days))

    const request = async (city: string, days: number) => {
        loading.value = true
        const { current, forecast } = await weatherService.getForecast(
            city,
            days
        )
        if (weather.value) {
            weather.value.current = current
            weather.value.forecast = forecast
        }
        loading.value = false
    }

    return {
        request,
        weather,
        isLoading: loading,
    }
}
