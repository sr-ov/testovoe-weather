import { ref, useContext } from '@nuxtjs/composition-api'

export const useCityFromStorage = () => {
    const { $cookies } = useContext() as any
    const city = ref<string>($cookies.get('city') ?? 'minsk')

    return {
        city,
        setCity: (city: string): void => $cookies.set('city', city),
    }
}
