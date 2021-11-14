export type WeatherItemData = {
    valid_date: string
    clouds: number
    temp: number
    wind_cdir_full: string
    rh: number
    weather: {
        icon: string
        description: string
    }
}

export type WeatherData = {
    data: WeatherItemData[]
}
